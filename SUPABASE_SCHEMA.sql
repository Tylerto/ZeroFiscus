-- ============================================================================
-- NCNP Tax Advisory Platform - Supabase Database Schema
-- ============================================================================
-- Purpose: Complete database schema for tax advisory platform with dual flow
-- Created: 2025-09-23
-- Notes:
--   - Outcome A users: NO database records (standard report via email only)
--   - Outcome B users: Full database records (profiles, cases, documents, reports)
-- ============================================================================

-- ============================================================================
-- 1. ENABLE REQUIRED EXTENSIONS
-- ============================================================================

-- Enable UUID generation
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Enable Row Level Security helper functions
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ============================================================================
-- 2. CREATE ENUMS
-- ============================================================================

-- User type from initial assessment
CREATE TYPE user_type_enum AS ENUM (
    'Particulier',           -- Private individual
    'Ondernemer / ZZP'       -- Business owner / Self-employed
);

-- Case status progression
CREATE TYPE case_status_enum AS ENUM (
    'Awaiting Documents',    -- Initial state after account creation
    'Under Review',          -- Documents uploaded, N8N processing
    'Awaiting Approval',     -- Draft ready, waiting for fiscalist
    'Report Ready',          -- Final report available
    'Closed'                 -- Case completed
);

-- Document types based on user type
CREATE TYPE document_type_enum AS ENUM (
    'personal_tax_return',      -- Aangifte Inkomstenbelasting
    'business_tax_return',      -- Aangifte Vennootschapsbelasting
    'annual_accounts',          -- Jaarrekening
    'kvk_extract',              -- Uittreksel KvK
    'other'                     -- Additional documents
);

-- ============================================================================
-- 3. CREATE TABLES
-- ============================================================================

-- ----------------------------------------------------------------------------
-- 3.1 PROFILES TABLE (extends auth.users)
-- ----------------------------------------------------------------------------
-- Purpose: Store additional user profile information
-- Note: auth.users table is managed by Supabase Auth automatically

CREATE TABLE public.profiles (
    -- Primary identification
    id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,

    -- User information
    full_name TEXT,
    email TEXT NOT NULL UNIQUE,

    -- Metadata
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,

    -- Constraints
    CONSTRAINT valid_email CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$')
);

-- Add comment
COMMENT ON TABLE public.profiles IS 'User profile information extending Supabase Auth users';

-- ----------------------------------------------------------------------------
-- 3.2 CASES TABLE (Outcome B only)
-- ----------------------------------------------------------------------------
-- Purpose: Track individual tax advisory cases

CREATE TABLE public.cases (
    -- Primary identification
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,

    -- Foreign keys
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,

    -- Case status
    status case_status_enum DEFAULT 'Awaiting Documents' NOT NULL,

    -- Initial assessment data (stored as JSONB for flexibility)
    initial_form_data JSONB NOT NULL,
    -- Example structure:
    -- {
    --   "user_type": "Particulier",
    --   "estimated_annual_income": "50000",
    --   "tax_year_of_interest": "2024",
    --   "additional_questions": {...}
    -- }

    -- Contract status
    contract_signed BOOLEAN DEFAULT FALSE NOT NULL,
    contract_signed_at TIMESTAMP WITH TIME ZONE,

    -- Processing metadata
    n8n_processing_started_at TIMESTAMP WITH TIME ZONE,
    fiscalist_approved_at TIMESTAMP WITH TIME ZONE,
    fiscalist_name TEXT,

    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,

    -- Indexes for common queries
    CONSTRAINT valid_income CHECK ((initial_form_data->>'estimated_annual_income')::numeric >= 0)
);

-- Add indexes
CREATE INDEX idx_cases_user_id ON public.cases(user_id);
CREATE INDEX idx_cases_status ON public.cases(status);
CREATE INDEX idx_cases_created_at ON public.cases(created_at DESC);

-- Add comments
COMMENT ON TABLE public.cases IS 'Tax advisory cases for Outcome B users (high potential savings)';
COMMENT ON COLUMN public.cases.initial_form_data IS 'JSONB containing all initial assessment form data';

-- ----------------------------------------------------------------------------
-- 3.3 DOCUMENTS TABLE (Outcome B only)
-- ----------------------------------------------------------------------------
-- Purpose: Track uploaded documents for each case

CREATE TABLE public.documents (
    -- Primary identification
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,

    -- Foreign keys
    case_id UUID REFERENCES public.cases(id) ON DELETE CASCADE NOT NULL,

    -- Document metadata
    document_type document_type_enum NOT NULL,
    storage_path TEXT NOT NULL UNIQUE, -- Path in Supabase Storage
    filename TEXT NOT NULL,
    file_size BIGINT NOT NULL, -- Size in bytes
    mime_type TEXT NOT NULL,

    -- Processing status
    processed BOOLEAN DEFAULT FALSE,
    processing_error TEXT,

    -- Timestamps
    uploaded_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,

    -- Constraints
    CONSTRAINT valid_file_size CHECK (file_size > 0 AND file_size <= 52428800), -- Max 50MB
    CONSTRAINT valid_mime_type CHECK (mime_type IN ('application/pdf', 'image/jpeg', 'image/png'))
);

-- Add indexes
CREATE INDEX idx_documents_case_id ON public.documents(case_id);
CREATE INDEX idx_documents_type ON public.documents(document_type);
CREATE INDEX idx_documents_uploaded_at ON public.documents(uploaded_at DESC);

-- Add comments
COMMENT ON TABLE public.documents IS 'Uploaded documents for tax analysis';
COMMENT ON COLUMN public.documents.storage_path IS 'Full path in Supabase Storage bucket';

-- ----------------------------------------------------------------------------
-- 3.4 REPORTS TABLE (Outcome B only)
-- ----------------------------------------------------------------------------
-- Purpose: Store final tax advisory reports

CREATE TABLE public.reports (
    -- Primary identification
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,

    -- Foreign keys
    case_id UUID REFERENCES public.cases(id) ON DELETE CASCADE NOT NULL,

    -- Report content
    report_url TEXT NOT NULL, -- URL to PDF in Supabase Storage
    summary TEXT NOT NULL,    -- Executive summary in Dutch

    -- Financial data
    potential_savings_eur NUMERIC(10, 2), -- Estimated tax savings in euros

    -- Metadata
    generated_by TEXT, -- N8N workflow ID or fiscalist name
    version INTEGER DEFAULT 1,

    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,

    -- Constraints
    CONSTRAINT valid_savings CHECK (potential_savings_eur IS NULL OR potential_savings_eur >= 0),
    CONSTRAINT valid_report_url CHECK (report_url ~* '^https?://.*\.pdf$')
);

-- Add indexes
CREATE INDEX idx_reports_case_id ON public.reports(case_id);
CREATE INDEX idx_reports_created_at ON public.reports(created_at DESC);

-- Add unique constraint (one active report per case)
CREATE UNIQUE INDEX idx_unique_case_report ON public.reports(case_id)
    WHERE version = (SELECT MAX(version) FROM public.reports r2 WHERE r2.case_id = public.reports.case_id);

-- Add comments
COMMENT ON TABLE public.reports IS 'Final tax advisory reports generated by fiscalists';
COMMENT ON COLUMN public.reports.potential_savings_eur IS 'Estimated annual tax savings in euros';

-- ----------------------------------------------------------------------------
-- 3.5 ACTIVITY_LOG TABLE (optional, for audit trail)
-- ----------------------------------------------------------------------------
-- Purpose: Track all case activities for audit and debugging

CREATE TABLE public.activity_log (
    -- Primary identification
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,

    -- Foreign keys
    case_id UUID REFERENCES public.cases(id) ON DELETE CASCADE,
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,

    -- Activity details
    action TEXT NOT NULL,           -- e.g., 'document_uploaded', 'status_changed', 'report_generated'
    details JSONB,                  -- Additional context
    ip_address INET,                -- For security tracking
    user_agent TEXT,                -- Browser/client info

    -- Timestamp
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Add indexes
CREATE INDEX idx_activity_case_id ON public.activity_log(case_id);
CREATE INDEX idx_activity_user_id ON public.activity_log(user_id);
CREATE INDEX idx_activity_created_at ON public.activity_log(created_at DESC);
CREATE INDEX idx_activity_action ON public.activity_log(action);

-- Add comments
COMMENT ON TABLE public.activity_log IS 'Audit trail for all case activities';

-- ============================================================================
-- 4. ROW LEVEL SECURITY (RLS) POLICIES
-- ============================================================================

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cases ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.activity_log ENABLE ROW LEVEL SECURITY;

-- ----------------------------------------------------------------------------
-- 4.1 PROFILES POLICIES
-- ----------------------------------------------------------------------------

-- Users can view their own profile
CREATE POLICY "Users can view own profile"
    ON public.profiles FOR SELECT
    USING (auth.uid() = id);

-- Users can update their own profile
CREATE POLICY "Users can update own profile"
    ON public.profiles FOR UPDATE
    USING (auth.uid() = id)
    WITH CHECK (auth.uid() = id);

-- Service role can do anything (for server-side operations)
CREATE POLICY "Service role has full access to profiles"
    ON public.profiles FOR ALL
    USING (auth.jwt()->>'role' = 'service_role');

-- ----------------------------------------------------------------------------
-- 4.2 CASES POLICIES
-- ----------------------------------------------------------------------------

-- Users can view their own cases
CREATE POLICY "Users can view own cases"
    ON public.cases FOR SELECT
    USING (auth.uid() = user_id);

-- Users can update their own cases (limited fields)
CREATE POLICY "Users can update own cases"
    ON public.cases FOR UPDATE
    USING (auth.uid() = user_id)
    WITH CHECK (auth.uid() = user_id);

-- Service role has full access
CREATE POLICY "Service role has full access to cases"
    ON public.cases FOR ALL
    USING (auth.jwt()->>'role' = 'service_role');

-- ----------------------------------------------------------------------------
-- 4.3 DOCUMENTS POLICIES
-- ----------------------------------------------------------------------------

-- Users can view documents for their cases
CREATE POLICY "Users can view own documents"
    ON public.documents FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM public.cases
            WHERE cases.id = documents.case_id
            AND cases.user_id = auth.uid()
        )
    );

-- Users can insert documents for their cases
CREATE POLICY "Users can upload documents for own cases"
    ON public.documents FOR INSERT
    WITH CHECK (
        EXISTS (
            SELECT 1 FROM public.cases
            WHERE cases.id = case_id
            AND cases.user_id = auth.uid()
        )
    );

-- Users can delete their own documents (before processing)
CREATE POLICY "Users can delete own unprocessed documents"
    ON public.documents FOR DELETE
    USING (
        EXISTS (
            SELECT 1 FROM public.cases
            WHERE cases.id = documents.case_id
            AND cases.user_id = auth.uid()
        )
        AND processed = FALSE
    );

-- Service role has full access
CREATE POLICY "Service role has full access to documents"
    ON public.documents FOR ALL
    USING (auth.jwt()->>'role' = 'service_role');

-- ----------------------------------------------------------------------------
-- 4.4 REPORTS POLICIES
-- ----------------------------------------------------------------------------

-- Users can view reports for their cases
CREATE POLICY "Users can view own reports"
    ON public.reports FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM public.cases
            WHERE cases.id = reports.case_id
            AND cases.user_id = auth.uid()
        )
    );

-- Service role has full access
CREATE POLICY "Service role has full access to reports"
    ON public.reports FOR ALL
    USING (auth.jwt()->>'role' = 'service_role');

-- ----------------------------------------------------------------------------
-- 4.5 ACTIVITY_LOG POLICIES
-- ----------------------------------------------------------------------------

-- Users can view their own activity
CREATE POLICY "Users can view own activity"
    ON public.activity_log FOR SELECT
    USING (auth.uid() = user_id);

-- Service role has full access
CREATE POLICY "Service role has full access to activity_log"
    ON public.activity_log FOR ALL
    USING (auth.jwt()->>'role' = 'service_role');

-- ============================================================================
-- 5. STORAGE BUCKETS
-- ============================================================================

-- Note: Storage buckets are created via Supabase Dashboard or API
-- Required buckets:
-- 1. 'documents' - for user-uploaded tax documents
-- 2. 'reports' - for generated PDF reports

-- Storage bucket policies (apply via Supabase Dashboard):

-- DOCUMENTS BUCKET POLICY:
-- Users can upload to their own case folder
-- Path pattern: documents/{case_id}/{filename}
/*
CREATE POLICY "Users can upload documents to own case"
ON storage.objects FOR INSERT
WITH CHECK (
    bucket_id = 'documents' AND
    auth.uid() IN (
        SELECT user_id FROM public.cases
        WHERE id::text = (storage.foldername(name))[1]
    )
);
*/

-- Users can read their own case documents
/*
CREATE POLICY "Users can view own case documents"
ON storage.objects FOR SELECT
USING (
    bucket_id = 'documents' AND
    auth.uid() IN (
        SELECT user_id FROM public.cases
        WHERE id::text = (storage.foldername(name))[1]
    )
);
*/

-- REPORTS BUCKET POLICY:
-- Users can only read (not write) their reports
/*
CREATE POLICY "Users can view own reports"
ON storage.objects FOR SELECT
USING (
    bucket_id = 'reports' AND
    auth.uid() IN (
        SELECT user_id FROM public.cases
        WHERE id::text = (storage.foldername(name))[1]
    )
);
*/

-- Service role can write reports
/*
CREATE POLICY "Service role can manage reports"
ON storage.objects FOR ALL
USING (
    bucket_id = 'reports' AND
    auth.jwt()->>'role' = 'service_role'
);
*/

-- ============================================================================
-- 6. FUNCTIONS & TRIGGERS
-- ============================================================================

-- ----------------------------------------------------------------------------
-- 6.1 FUNCTION: Update timestamp on row modification
-- ----------------------------------------------------------------------------

CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc'::text, NOW());
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Apply trigger to profiles table
CREATE TRIGGER set_updated_at_profiles
    BEFORE UPDATE ON public.profiles
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

-- Apply trigger to cases table
CREATE TRIGGER set_updated_at_cases
    BEFORE UPDATE ON public.cases
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

-- ----------------------------------------------------------------------------
-- 6.2 FUNCTION: Auto-create profile on user signup
-- ----------------------------------------------------------------------------

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, email, full_name)
    VALUES (
        NEW.id,
        NEW.email,
        COALESCE(NEW.raw_user_meta_data->>'full_name', '')
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Apply trigger to auth.users table
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_new_user();

-- ----------------------------------------------------------------------------
-- 6.3 FUNCTION: Get required documents for a case
-- ----------------------------------------------------------------------------

CREATE OR REPLACE FUNCTION public.get_required_documents(p_case_id UUID)
RETURNS TABLE (
    document_type document_type_enum,
    is_required BOOLEAN,
    is_uploaded BOOLEAN
) AS $$
DECLARE
    v_user_type user_type_enum;
BEGIN
    -- Get user type from case
    SELECT (initial_form_data->>'user_type')::user_type_enum
    INTO v_user_type
    FROM public.cases
    WHERE id = p_case_id;

    -- Return required documents based on user type
    IF v_user_type = 'Particulier' THEN
        RETURN QUERY
        SELECT
            'personal_tax_return'::document_type_enum,
            TRUE,
            EXISTS (
                SELECT 1 FROM public.documents d
                WHERE d.case_id = p_case_id
                AND d.document_type = 'personal_tax_return'
            );
    ELSIF v_user_type = 'Ondernemer / ZZP' THEN
        RETURN QUERY
        SELECT * FROM (VALUES
            ('business_tax_return'::document_type_enum, TRUE, EXISTS (SELECT 1 FROM public.documents WHERE case_id = p_case_id AND document_type = 'business_tax_return')),
            ('annual_accounts'::document_type_enum, TRUE, EXISTS (SELECT 1 FROM public.documents WHERE case_id = p_case_id AND document_type = 'annual_accounts')),
            ('kvk_extract'::document_type_enum, FALSE, EXISTS (SELECT 1 FROM public.documents WHERE case_id = p_case_id AND document_type = 'kvk_extract'))
        ) AS t(document_type, is_required, is_uploaded);
    END IF;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

COMMENT ON FUNCTION public.get_required_documents IS 'Returns list of required and uploaded documents for a case';

-- ----------------------------------------------------------------------------
-- 6.4 FUNCTION: Check if all required documents are uploaded
-- ----------------------------------------------------------------------------

CREATE OR REPLACE FUNCTION public.are_all_documents_uploaded(p_case_id UUID)
RETURNS BOOLEAN AS $$
DECLARE
    v_result BOOLEAN;
BEGIN
    SELECT NOT EXISTS (
        SELECT 1 FROM public.get_required_documents(p_case_id)
        WHERE is_required = TRUE AND is_uploaded = FALSE
    ) INTO v_result;

    RETURN v_result;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

COMMENT ON FUNCTION public.are_all_documents_uploaded IS 'Returns TRUE if all required documents are uploaded for a case';

-- ============================================================================
-- 7. VIEWS (for easier querying)
-- ============================================================================

-- ----------------------------------------------------------------------------
-- 7.1 VIEW: Case overview with document and report status
-- ----------------------------------------------------------------------------

CREATE OR REPLACE VIEW public.case_overview AS
SELECT
    c.id AS case_id,
    c.user_id,
    p.email,
    p.full_name,
    c.status,
    c.initial_form_data->>'user_type' AS user_type,
    c.initial_form_data->>'tax_year_of_interest' AS tax_year,
    c.contract_signed,
    c.contract_signed_at,
    COUNT(DISTINCT d.id) AS documents_uploaded,
    public.are_all_documents_uploaded(c.id) AS all_documents_ready,
    r.report_url,
    r.summary AS report_summary,
    r.potential_savings_eur,
    c.created_at,
    c.updated_at
FROM public.cases c
INNER JOIN public.profiles p ON c.user_id = p.id
LEFT JOIN public.documents d ON c.id = d.case_id
LEFT JOIN public.reports r ON c.id = r.case_id
GROUP BY c.id, p.id, r.id;

COMMENT ON VIEW public.case_overview IS 'Comprehensive case overview with document and report status';

-- Apply RLS to view
ALTER VIEW public.case_overview SET (security_invoker = true);

-- ============================================================================
-- 8. INITIAL DATA / SEED (optional)
-- ============================================================================

-- No seed data required for this schema
-- All data will be created through application usage

-- ============================================================================
-- 9. GRANTS (for service role and authenticated users)
-- ============================================================================

-- Grant usage on all sequences to authenticated users
GRANT USAGE ON ALL SEQUENCES IN SCHEMA public TO authenticated;
GRANT USAGE ON ALL SEQUENCES IN SCHEMA public TO service_role;

-- Grant execute on functions
GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA public TO authenticated;
GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA public TO service_role;

-- ============================================================================
-- END OF SCHEMA
-- ============================================================================

-- Verification queries (run after schema creation):

-- Check tables
-- SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';

-- Check RLS policies
-- SELECT tablename, policyname FROM pg_policies WHERE schemaname = 'public';

-- Check functions
-- SELECT routine_name FROM information_schema.routines WHERE routine_schema = 'public';

-- ============================================================================
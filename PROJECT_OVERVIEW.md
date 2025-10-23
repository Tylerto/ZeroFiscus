# NCNP - Tax Advisory Platform - Project Overview

## Project Name
**NCNP** - "No Cure, No Pay" Tax Advisory Platform

## Executive Summary
A Dutch-language web application providing tax-saving advice on a "no cure, no pay" basis. The platform features two distinct user flows: immediate standard reports for basic cases, and personalized advisory services for high-potential cases involving document analysis, fiscalist review, and detailed reporting.

## Core Value Proposition
- **Dutch Market Focus**: Fully localized platform for Netherlands tax advisory
- **Risk-Free Model**: "No cure, no pay" approach removes client risk
- **Dual Service Levels**:
  - Quick standard reports (24h turnaround, no account needed)
  - Deep personalized advisory (document-based, expert-reviewed)
- **Automated Workflow**: N8N-powered backend minimizes manual intervention

---

## Technology Stack

### Frontend
- **Framework**: Next.js 14 (React 18)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**:
  - Radix UI primitives
  - Shadcn/ui components
  - Framer Motion for animations
  - Lucide React icons
- **Template Base**: LawAI project (mobile-first responsive design)

### Backend & Infrastructure
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **File Storage**: Supabase Storage
- **Automation**: N8N (self-hosted or cloud)
- **Hosting**: Vercel
- **API Layer**: Next.js API Routes (serverless functions)

### Key Dependencies
```json
{
  "next": "14.2.5",
  "react": "^18",
  "@radix-ui/*": "various",
  "tailwindcss": "^3.4.0",
  "framer-motion": "^12.23.9",
  "lucide-react": "^0.525.0"
}
```

---

## Architecture Overview

### System Components

```
┌─────────────────────────────────────────────────────────────┐
│                      USER INTERFACE                          │
│  Landing Page → Assessment Form → Portal/Email Outcome      │
└─────────────────────────────────────────────────────────────┘
                              │
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                   NEXT.JS APPLICATION                        │
│  • API Routes (serverless)                                   │
│  • Authentication (Supabase Auth)                           │
│  • Form validation & routing logic                          │
└─────────────────────────────────────────────────────────────┘
                              │
                    ┌─────────┴─────────┐
                    ↓                   ↓
        ┌───────────────────┐   ┌──────────────────┐
        │    SUPABASE       │   │      N8N         │
        │  • PostgreSQL DB  │   │  • Webhooks      │
        │  • Auth           │   │  • Workflows     │
        │  • Storage        │   │  • AI Processing │
        └───────────────────┘   └──────────────────┘
```

### Data Flow Architecture

#### Flow A: Standard Report (No Account)
```
User Form → Backend Validation → N8N Webhook → AI Report → Email
```

#### Flow B: Personalized Advisory (Account Created)
```
User Form → Account Creation → Document Upload → Contract Sign
    → N8N Processing → Fiscalist Review → Final Report → Portal
```

---

## User Flows

### Flow A: Standard Report Path
**Trigger Condition**: Basic tax situation, lower savings potential

1. User completes Initial Assessment Form
2. Backend determines "standard potential"
3. Display message: *"Bedankt voor uw aanvraag. Op basis van de ingevulde gegevens sturen wij u binnen 24 uur een rapport met bespaartips voor uw situatie per e-mail."*
4. **No account created**
5. Backend calls N8N webhook: `/webhook/generate-standard-report`
6. N8N generates standardized report
7. N8N sends email with PDF report
8. **END** - No further interaction

### Flow B: Personalized Advisory Path
**Trigger Condition**: Complex tax situation, high savings potential

1. User completes Initial Assessment Form
2. Backend determines "high potential"
3. **Account created** in Supabase Auth
4. User receives email: *"Gefeliciteerd! Er is potentieel voor besparing. Controleer uw e-mail voor toegang tot uw account."*
5. Case record created in database (`status: 'Awaiting Documents'`)
6. User logs in to portal
7. User uploads required documents (based on user_type)
8. User signs "no cure, no pay" contract
9. Backend calls N8N webhook: `/webhook/start-case-processing`
10. N8N fetches documents from Supabase
11. AI analysis and draft report generation
12. Workflow pauses for fiscalist manual approval
13. Upon approval, N8N calls API: `/api/v1/submit-report`
14. Backend updates case (`status: 'Report Ready'`)
15. User receives email notification
16. User downloads final report from portal

---

## Database Schema

### Tables Overview

#### `auth.users` (Supabase Auth managed)
- Standard Supabase authentication table

#### `public.profiles`
```sql
- id: uuid (FK to auth.users.id, PK)
- full_name: text
- email: text
- created_at: timestamp
- updated_at: timestamp
```

#### `public.cases` (Outcome B only)
```sql
- id: uuid (PK)
- user_id: uuid (FK to profiles.id)
- status: text (enum: 'Awaiting Documents', 'Under Review', 'Awaiting Approval', 'Report Ready', 'Closed')
- initial_form_data: jsonb
- contract_signed: boolean (default: false)
- created_at: timestamp
- updated_at: timestamp
```

#### `public.documents` (Outcome B only)
```sql
- id: uuid (PK)
- case_id: uuid (FK to cases.id)
- document_type: text (enum: 'personal_tax_return', 'business_tax_return', 'annual_accounts', 'kvk_extract')
- storage_path: text
- filename: text
- file_size: integer
- uploaded_at: timestamp
```

#### `public.reports` (Outcome B only)
```sql
- id: uuid (PK)
- case_id: uuid (FK to cases.id)
- report_url: text
- summary: text
- created_at: timestamp
```

---

## API Contracts

### Webhooks (Next.js → N8N)

#### `POST /webhook/generate-standard-report`
**Purpose**: Trigger standard report generation (Outcome A)

**Request Body**:
```json
{
  "email": "user@example.nl",
  "form_data": {
    "user_type": "Particulier",
    "estimated_annual_income": "50000",
    "tax_year_of_interest": "2024"
  }
}
```

**Response**: 200 OK (async processing)

---

#### `POST /webhook/start-case-processing`
**Purpose**: Initiate full case processing (Outcome B)

**Request Body**:
```json
{
  "case_id": "c1b2a3d4-...",
  "user_id": "u1b2a3d4-..."
}
```

**Response**: 200 OK (async processing)

---

### API Endpoints (N8N → Next.js)

#### `POST /api/v1/update-case-status`
**Purpose**: Update case status from N8N

**Headers**:
```
Authorization: Bearer <API_KEY>
```

**Request Body**:
```json
{
  "case_id": "c1b2a3d4-...",
  "status": "Generating Report",
  "details": "AI processing completed, generating draft report."
}
```

**Response**:
```json
{
  "success": true,
  "updated_at": "2024-01-15T10:30:00Z"
}
```

---

#### `POST /api/v1/submit-report`
**Purpose**: Deliver final approved report

**Headers**:
```
Authorization: Bearer <API_KEY>
```

**Request Body**:
```json
{
  "case_id": "c1b2a3d4-...",
  "report_url": "https://<supabase>.supabase.co/storage/v1/object/public/reports/report-c1b2a3d4.pdf",
  "summary": "We hebben besparingsmogelijkheden ter waarde van €X geïdentificeerd. Details staan in het rapport."
}
```

**Response**:
```json
{
  "success": true,
  "notification_sent": true
}
```

---

## Required Documents by User Type

### Particulier (Private Individual)
1. **Personal Tax Return** (Aangifte Inkomstenbelasting)
   - `document_type: 'personal_tax_return'`
   - Format: PDF
   - Required: Yes

### Ondernemer / ZZP (Business Owner)
1. **Business Tax Return** (Aangifte Vennootschapsbelasting)
   - `document_type: 'business_tax_return'`
   - Format: PDF
   - Required: Yes

2. **Annual Accounts** (Jaarrekening)
   - `document_type: 'annual_accounts'`
   - Format: PDF
   - Required: Yes

3. **Chamber of Commerce Extract** (Uittreksel KvK)
   - `document_type: 'kvk_extract'`
   - Format: PDF
   - Required: No (Optional)

---

## Frontend Components Architecture

### Key Pages
- `/` - Landing Page (Dutch)
- `/login` - Authentication page
- `/portal` - User dashboard (protected)
- `/portal/documents` - Document upload
- `/portal/contract` - Contract signing
- `/portal/report` - Final report view

### Component Structure (adapted from LawAI)
```
src/
├── app/
│   ├── page.tsx                    # Landing page
│   ├── login/page.tsx             # Auth page
│   ├── portal/
│   │   ├── layout.tsx             # Portal wrapper
│   │   ├── page.tsx               # Dashboard
│   │   ├── documents/page.tsx     # Upload interface
│   │   ├── contract/page.tsx      # Contract signing
│   │   └── report/page.tsx        # Report viewer
│   └── api/
│       └── v1/
│           ├── update-case-status/route.ts
│           └── submit-report/route.ts
├── components/
│   ├── ui/                        # Reused from LawAI
│   │   ├── navbar.tsx
│   │   ├── hero-section.tsx
│   │   ├── form-components.tsx
│   │   └── ...
│   ├── portal/
│   │   ├── StatusTimeline.tsx
│   │   ├── DocumentUpload.tsx
│   │   ├── ContractSign.tsx
│   │   └── ReportViewer.tsx
│   └── forms/
│       └── InitialAssessment.tsx
└── lib/
    ├── supabase/
    │   ├── client.ts
    │   ├── server.ts
    │   └── auth.ts
    └── utils/
        └── api.ts
```

---

## Security Considerations

### Authentication & Authorization
- **Supabase Auth**: Email/password + magic links
- **Row Level Security (RLS)**: Users can only access their own data
- **API Protection**: Bearer token authentication for N8N callbacks
- **HTTPS Only**: All communication encrypted

### Data Privacy
- **GDPR Compliance**: User data handling follows EU regulations
- **Secure Storage**: Documents encrypted at rest in Supabase Storage
- **Access Control**: Time-limited signed URLs for document access

### API Security
```typescript
// API middleware example
export async function validateApiKey(req: Request) {
  const authHeader = req.headers.get('authorization');
  const apiKey = authHeader?.replace('Bearer ', '');

  if (apiKey !== process.env.N8N_API_KEY) {
    return new Response('Unauthorized', { status: 401 });
  }

  return null; // Valid
}
```

---

## N8N Workflows

### Workflow 1: Standard Report Generator
**Trigger**: Webhook `/webhook/generate-standard-report`

**Steps**:
1. Receive form data
2. Validate email format
3. Query AI model with standard prompts based on user_type
4. Generate PDF report from template
5. Send email with report attachment
6. Log activity

**Output**: Email sent to user

---

### Workflow 2: Case Processing Pipeline
**Trigger**: Webhook `/webhook/start-case-processing`

**Steps**:
1. Receive case_id and user_id
2. Fetch documents from Supabase Storage (via Supabase API)
3. Extract text from PDFs (OCR if needed)
4. Process with AI model for tax analysis
5. Generate structured data output
6. Create draft report PDF
7. **Manual Node**: Wait for fiscalist approval
8. On approval, call `/api/v1/submit-report`
9. Update internal logs

**Output**: Approved report delivered to web app

---

## Environment Variables

### Next.js Application
```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxx...
SUPABASE_SERVICE_ROLE_KEY=eyJxxx...

# N8N
N8N_WEBHOOK_BASE_URL=https://n8n.yourdomain.com
N8N_API_KEY=your-secure-api-key-here

# Application
NEXT_PUBLIC_APP_URL=https://ncnp.vercel.app
API_SECRET_KEY=your-internal-api-secret
```

### N8N Instance
```env
# Supabase Access
SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_SERVICE_KEY=eyJxxx...

# Web App Callback
WEBAPP_API_URL=https://ncnp.vercel.app/api/v1
WEBAPP_API_KEY=your-secure-api-key-here

# AI/LLM Integration
OPENAI_API_KEY=sk-xxx...
# or other LLM provider credentials
```

---

## Deployment Strategy

### Phase 1: Development
- **Local Supabase**: Docker instance
- **Local N8N**: Docker instance
- **Next.js**: `npm run dev` on localhost:3000

### Phase 2: Staging
- **Supabase**: Free tier project
- **N8N**: Cloud or self-hosted staging
- **Next.js**: Vercel preview deployment

### Phase 3: Production
- **Supabase**: Paid tier with backups
- **N8N**: Production instance with monitoring
- **Next.js**: Vercel production deployment
- **Domain**: Custom domain with SSL

---

## Development Checklist

### Setup Phase
- [ ] Clone LawAI template to NCNP project
- [ ] Initialize Supabase project
- [ ] Set up N8N instance
- [ ] Configure environment variables
- [ ] Install dependencies

### Database Phase
- [ ] Create Supabase tables (profiles, cases, documents, reports)
- [ ] Configure Row Level Security policies
- [ ] Set up Storage buckets (documents, reports)
- [ ] Test database connections

### Frontend Phase
- [ ] Adapt landing page for tax advisory branding
- [ ] Build Initial Assessment Form
- [ ] Create user portal layout
- [ ] Implement document upload UI
- [ ] Build contract signing interface
- [ ] Create report viewer component
- [ ] Translate all text to Dutch

### Backend Phase
- [ ] Create API route: `/api/v1/update-case-status`
- [ ] Create API route: `/api/v1/submit-report`
- [ ] Implement form submission logic
- [ ] Build Outcome A vs B routing
- [ ] Integrate Supabase Auth
- [ ] Add file upload handling

### N8N Phase
- [ ] Build standard report workflow
- [ ] Build case processing workflow
- [ ] Configure webhooks
- [ ] Set up fiscalist approval node
- [ ] Test AI integration
- [ ] Configure email notifications

### Testing Phase
- [ ] Test Outcome A flow end-to-end
- [ ] Test Outcome B flow end-to-end
- [ ] Mobile responsiveness verification
- [ ] Security testing (RLS, API keys)
- [ ] Load testing
- [ ] User acceptance testing

### Deployment Phase
- [ ] Deploy to Vercel
- [ ] Configure production DNS
- [ ] Set up monitoring/logging
- [ ] Create admin documentation
- [ ] Launch! 🚀

---

## Key Design Decisions

### Why Next.js?
- **SSR/SSG**: Better SEO and performance
- **API Routes**: Built-in serverless functions
- **Vercel Integration**: Seamless deployment
- **React Ecosystem**: Rich component library

### Why Supabase?
- **PostgreSQL**: Robust relational database
- **Auth Built-in**: Reduces complexity
- **Storage Included**: Integrated file handling
- **Real-time Capable**: Future feature potential
- **Open Source**: No vendor lock-in

### Why N8N?
- **Visual Workflows**: Easy to modify without code
- **Self-Hostable**: Data control and cost savings
- **Webhook Support**: Perfect for event-driven architecture
- **AI Integration**: Built-in nodes for LLM providers
- **Approval Flows**: Manual review nodes for fiscalist

### Why Dual Flow Approach?
- **Scalability**: Standard reports are fully automated
- **Resource Optimization**: Expert time only for high-value cases
- **User Experience**: Fast response for simple cases
- **Revenue Model**: High-touch service for complex cases

---

## Future Enhancements

### Phase 2 Features
- [ ] Multi-language support (English, French)
- [ ] Advanced reporting dashboard
- [ ] CRM integration
- [ ] Payment processing integration
- [ ] Real-time chat support
- [ ] Mobile app (React Native)

### AI Improvements
- [ ] Custom-trained tax models
- [ ] Automated document classification
- [ ] Predictive savings estimator
- [ ] Chatbot for initial questions

### Business Features
- [ ] Referral program
- [ ] Partner portal for fiscalists
- [ ] Analytics dashboard
- [ ] A/B testing framework

---

## Contact & Support

### Technical Questions
- Review this document first
- Check API contracts in `API_CONTRACTS.md`
- Consult Supabase schema in `SUPABASE_SCHEMA.sql`

### Development Resources
- LawAI template: `/active-projects/NCNP/LawAI kopie/`
- N8N workflows: `/active-projects/NCNP/N8N/workflows/`
- Documentation: This file

---

**Last Updated**: 2025-09-23
**Version**: 1.0.0
**Status**: Foundation Phase Complete ✅
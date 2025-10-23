# CLAUDE.md - AI Assistant Guide for NCNP Project

**Last Updated**: 2025-10-17
**Project**: ZeroFiscus - "No Cure, No Pay" Tax Advisory Platform
**Current Phase**: MVP 95% Complete → Ready for Deployment
**Timeline**: Ready to deploy to production, then launch and iterate

---

## 🎯 Project Mission

Build a Dutch-language tax advisory platform that:
1. **MVP (Now)**: Captures leads via form → N8N → Google Sheets for manual follow-up
2. **Full Platform (After validation)**: Automated document processing, AI analysis, fiscalist review workflow

**Business Model**: "No cure, no pay" - clients only pay if we find tax savings.

---

## 📋 Quick Context for AI Assistants

### What You Need to Know Immediately

**Current State (October 17, 2025)**:
- ✅ MVP Development 95% Complete
- ✅ Full landing page with all sections (Hero, How It Works, Reviews, Features, FAQ, Footer)
- ✅ 5-step assessment form with validation
- ✅ API route with N8N webhook integration
- ✅ Mobile responsive (tested at 390x844)
- ✅ All Dutch language content complete
- ⚠️ N8N workflow configured (needs activation)
- ⚠️ Ready for production deployment

**Your Role**:
- Help finalize remaining deployment tasks
- Assist with N8N workflow activation
- Support production testing and QA
- Keep full platform architecture in mind for future enhancements
- Dutch language is REQUIRED for all user-facing content

**Key Files to Read First**:
1. [START_HERE_MVP.md](START_HERE_MVP.md) - Overview and orientation
2. [MVP_PLAN.md](MVP_PLAN.md) - MVP strategy and technical specs
3. [MVP_CHECKLIST.md](MVP_CHECKLIST.md) - Actionable development tasks
4. [PROJECT_OVERVIEW.md](PROJECT_OVERVIEW.md) - Full platform architecture (reference)

---

## 🏗️ Architecture Overview

### MVP Architecture (Current Focus)
```
Landing Page (Dutch)
    ↓
Multi-step Assessment Form
    ↓
Next.js API Route (/api/assessment/submit)
    ↓
N8N Webhook (via HTTP POST)
    ↓
Google Sheets (CRM/Lead Tracker)
    ↓
Manual follow-up by human advisor
```

### Full Platform Architecture (Future)
```
Landing Page
    ↓
Assessment Form (routing logic)
    ↓
┌─────────────────┬──────────────────┐
│   Path A:       │    Path B:       │
│   Standard      │    Personalized  │
│   (No account)  │    (Account)     │
└─────────────────┴──────────────────┘
    ↓                      ↓
AI Report via N8N    Document Upload
Email to user        Contract Signing
                     N8N Processing
                     Fiscalist Review
                     Final Report in Portal
```

---

## 💻 Technology Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + Shadcn/ui (from LawAI template)
- **Forms**: React Hook Form + Zod validation
- **Animations**: Framer Motion
- **Icons**: Lucide React

### Backend (MVP)
- **API**: Next.js API Routes (serverless)
- **Automation**: N8N Cloud (webhooks)
- **Data Storage**: Google Sheets (temporary MVP CRM)

### Backend (Full Platform)
- **Database**: Supabase (PostgreSQL)
- **Auth**: Supabase Auth
- **Storage**: Supabase Storage (for documents)
- **Automation**: N8N (full workflow integration)
- **AI Processing**: To be determined (OpenAI/Anthropic/etc.)

### Infrastructure
- **Hosting**: Vercel (free tier for MVP, scale as needed)
- **Domain**: TBD
- **Email**: Resend.com or similar (optional for MVP)

---

## 📂 Project Structure

```
NCNP/
├── webapp/                          # Next.js application
│   ├── src/
│   │   ├── app/                     # App router pages
│   │   │   ├── page.tsx            # ✅ Landing page (COMPLETE)
│   │   │   ├── assessment/         # ✅ Multi-step form (COMPLETE)
│   │   │   │   └── page.tsx
│   │   │   ├── login/              # Auth (Phase 2)
│   │   │   ├── portal/             # User dashboard (Phase 2)
│   │   │   └── api/
│   │   │       └── assessment/
│   │   │           └── submit/     # ✅ API route (COMPLETE)
│   │   │               └── route.ts
│   │   ├── components/
│   │   │   ├── ui/                 # ✅ All components updated
│   │   │   │   ├── navbar.tsx                      # ✅
│   │   │   │   ├── hero-with-image-text-and-two-buttons.tsx  # ✅
│   │   │   │   ├── how-it-works.tsx                # ✅
│   │   │   │   ├── testimonials-with-marquee.tsx   # ✅
│   │   │   │   ├── feature-with-advantages.tsx     # ✅
│   │   │   │   ├── impact-metrics.tsx              # ✅
│   │   │   │   ├── faq-accordion.tsx               # ✅
│   │   │   │   └── footer-section.tsx              # ✅
│   │   │   ├── AssessmentForm.tsx  # ✅ 5-step form (COMPLETE)
│   │   │   └── portal/             # Portal components (Phase 2)
│   │   └── lib/
│   │       ├── supabase/           # Supabase client (Phase 2)
│   │       └── validations/        # Zod schemas
│   ├── public/
│   │   └── logo.png                # ✅ ZeroFiscus logo
│   ├── tailwind.config.js
│   ├── package.json
│   └── .env.local                  # ✅ N8N webhook configured
├── N8N/                            # N8N workflow definitions
│   └── workflows/
│       ├── mvp-lead-capture.json   # ⚠️ Needs activation
│       └── full-case-processing.json # Phase 2
├── docs/                           # Additional documentation
│   └── PROGRESS_UPDATE_2025-10-17.md  # ✅ Latest progress
├── PROJECT_OVERVIEW.md             # Full platform specs
├── MVP_PLAN.md                     # MVP strategy
├── MVP_CHECKLIST.md                # ✅ Updated development tasks
├── START_HERE_MVP.md               # Quick start guide
├── API_CONTRACTS.md                # API specifications
├── SUPABASE_SCHEMA.sql             # Database schema (Phase 2)
└── CLAUDE.md                       # ✅ This file (Updated)
```

---

## 🎨 Design System (LawAI Template)

### Available Components
The `webapp/src/components/ui/` directory contains pre-built components from LawAI:
- Modern, clean aesthetic
- Mobile-first responsive
- Dark mode capable
- Professional legal/business styling

**Important**: Feel free to modify or replace any component. Nothing is sacred - the LawAI base is just a starting point we like aesthetically.

### Color Scheme
Adapt the LawAI colors to tax advisory context:
- Professional blues/grays (trust, expertise)
- Accent color for CTAs
- High contrast for readability
- WCAG AA compliance minimum

---

## 🌍 Dutch Language Requirements

### Critical Rules
1. **ALL user-facing text MUST be in Dutch**
   - Landing page copy
   - Form labels and placeholders
   - Button text
   - Error messages
   - Success messages
   - Email templates

2. **Code/Comments can be in English**
   - Variable names: English
   - Function names: English
   - Comments: English preferred
   - Documentation: English

3. **Common Translations**
   ```typescript
   // Use these consistently
   const DUTCH_COPY = {
     cta: "Start Uw Gratis Besparingscheck",
     submit: "Versturen",
     next: "Volgende",
     previous: "Vorige",
     required: "Dit veld is verplicht",
     emailInvalid: "Voer een geldig e-mailadres in",
     success: "Bedankt! We nemen binnen 24 uur contact op.",
     error: "Er is iets misgegaan. Probeer het opnieuw.",
   };
   ```

---

## 📝 Form Specifications (MVP)

### Multi-Step Assessment Form

**5 Steps Total**:

#### Step 1: User Type Selection
```typescript
{
  field: "userType",
  type: "radio",
  label: "Wat is uw situatie?",
  options: [
    { value: "Particulier", label: "Particulier (persoonlijk belastingadvies)" },
    { value: "Ondernemer", label: "Ondernemer / ZZP (zakelijk belastingadvies)" }
  ],
  validation: z.enum(["Particulier", "Ondernemer"])
}
```

#### Step 2: Income Estimation
```typescript
{
  field: "incomeRange",
  type: "dropdown",
  label: "Wat is uw geschatte jaarinkomen?",
  options: [
    "< €30,000",
    "€30,000 - €50,000",
    "€50,000 - €75,000",
    "€75,000 - €100,000",
    "€100,000 - €150,000",
    "> €150,000"
  ],
  validation: z.string().min(1)
}
```

#### Step 3: Tax Year
```typescript
{
  field: "taxYear",
  type: "dropdown",
  label: "Voor welk belastingjaar?",
  options: ["2024", "2023", "2022", "Meerdere jaren"],
  validation: z.string().min(1)
}
```

#### Step 4: Contact Information
```typescript
{
  fields: [
    {
      field: "fullName",
      type: "text",
      label: "Uw volledige naam",
      placeholder: "Jan de Vries",
      validation: z.string().min(2, "Voer uw volledige naam in")
    },
    {
      field: "email",
      type: "email",
      label: "E-mailadres",
      placeholder: "uw@email.nl",
      validation: z.string().email("Voer een geldig e-mailadres in")
    },
    {
      field: "phone",
      type: "tel",
      label: "Telefoonnummer",
      placeholder: "+31 6 12345678",
      validation: z.string().regex(/^(\+31|0)[0-9]{9}$/, "Voer een geldig Nederlands telefoonnummer in")
    }
  ]
}
```

#### Step 5: Additional Notes (Optional)
```typescript
{
  field: "additionalNotes",
  type: "textarea",
  label: "Heeft u aanvullende informatie? (optioneel)",
  placeholder: "Bijvoorbeeld: afschrijvingen, hypotheek, donaties, etc.",
  validation: z.string().max(500).optional(),
  maxLength: 500
}
```

### Form UX Requirements
- Progress indicator (visual: 1/5, 2/5, etc.)
- "Volgende" button (disabled until valid)
- "Vorige" button (except step 1)
- Auto-focus first input on step load
- Smooth transitions (Framer Motion)
- Mobile-first responsive
- LocalStorage persistence (preserve progress on refresh)
- Loading state during submission
- Clear success/error messages

---

## 🔌 API Integration

### MVP: N8N Webhook

**Endpoint**: `/api/assessment/submit`

**Request Body**:
```typescript
interface AssessmentSubmission {
  userType: "Particulier" | "Ondernemer";
  incomeRange: string;
  taxYear: string;
  fullName: string;
  email: string;
  phone: string;
  additionalNotes?: string;
  submittedAt: string; // ISO timestamp
  source: "website"; // for tracking
}
```

**Flow**:
1. Receive POST from frontend
2. Validate with Zod schema
3. POST to N8N webhook URL (from env var)
4. Return success/error to frontend

**Implementation Example**:
```typescript
// app/api/assessment/submit/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const AssessmentSchema = z.object({
  userType: z.enum(["Particulier", "Ondernemer"]),
  incomeRange: z.string().min(1),
  taxYear: z.string().min(4),
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().regex(/^(\+31|0)[0-9]{9}$/),
  additionalNotes: z.string().max(500).optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate
    const validated = AssessmentSchema.parse(body);

    // Add metadata
    const payload = {
      ...validated,
      submittedAt: new Date().toISOString(),
      source: "website",
    };

    // Send to N8N
    const n8nResponse = await fetch(process.env.N8N_WEBHOOK_URL!, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!n8nResponse.ok) {
      throw new Error('N8N webhook failed');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Assessment submission error:', error);
    return NextResponse.json(
      { success: false, error: 'Submission failed' },
      { status: 500 }
    );
  }
}
```

---

## 🔄 N8N Workflow (MVP)

### Workflow: Lead Capture & Storage

**Trigger**: Webhook (POST)

**Nodes**:
1. **Webhook** - Receive data
2. **Set** - Format data for Google Sheets
3. **Google Sheets** - Append row
4. **Split in Batches** (optional) - For notifications
5. **Send Email** (optional) - Confirmation to user
6. **Send Notification** (optional) - Alert to admin

**Google Sheet Structure**:
```
| Timestamp | Lead ID | Name | Email | Phone | Type | Income | Year | Notes | Status | Contacted | Savings | Your Notes |
```

**Configuration**:
```javascript
// N8N Webhook Node
Method: POST
Path: /webhook/ncnp-lead-capture
Authentication: None (or Header Auth for security)

// Google Sheets Node
Spreadsheet ID: from env var
Sheet Name: "Leads"
Operation: Append
Columns: Map from webhook data
```

### Testing N8N Workflow
```bash
# Test webhook with curl
curl -X POST https://your-n8n-instance.cloud/webhook/ncnp-lead-capture \
  -H "Content-Type: application/json" \
  -d '{
    "userType": "Particulier",
    "incomeRange": "€50,000 - €75,000",
    "taxYear": "2024",
    "fullName": "Test User",
    "email": "test@example.nl",
    "phone": "+31612345678",
    "additionalNotes": "Test submission",
    "submittedAt": "2024-10-01T12:00:00Z",
    "source": "website"
  }'
```

---

## 🔐 Environment Variables

### MVP `.env.local`
```env
# N8N Integration
N8N_WEBHOOK_URL=https://your-instance.n8n.cloud/webhook/ncnp-lead-capture
N8N_WEBHOOK_SECRET=your-secret-here  # Optional for security

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=NCNP Belastingadvies

# Optional: Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Optional: Email (if adding confirmation emails)
RESEND_API_KEY=re_xxxxxxxxxxxx
NOTIFICATION_EMAIL=your@email.com
```

### Full Platform (Phase 2)
```env
# Add these when building full platform
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxx...
SUPABASE_SERVICE_ROLE_KEY=eyJxxx...
API_SECRET_KEY=your-internal-secret
```

---

## ✅ Development Workflow

### Current Status (October 17, 2025)
**MVP Development: 95% COMPLETE**

**Day 1: Frontend** ✅ COMPLETE
- ✅ Adapted all landing page components with ZeroFiscus content
- ✅ Built 5-step assessment form with validation
- ✅ Implemented Zod validation with Dutch error messages
- ✅ Mobile responsive optimization completed (390x844)

**Day 2: Backend + Integration** ✅ COMPLETE
- ✅ Created API route with validation
- ✅ N8N webhook integration configured
- ✅ End-to-end local testing complete
- ⚠️ Ready for Vercel deployment

**Day 3: Final Steps** 🎯 IN PROGRESS
- [ ] Activate N8N workflow with Google Sheets
- [ ] Deploy to Vercel production
- [ ] End-to-end production testing
- [ ] Soft launch

### Next Steps
1. **N8N Workflow Activation** (1-2h)
   - Create Google Sheet for lead capture
   - Build N8N workflow (Webhook → Format → Google Sheets)
   - Test and activate

2. **Production Deployment** (45min)
   - Deploy to Vercel
   - Configure environment variables
   - Test on production URL

3. **Launch** (As scheduled)
   - Soft launch with test contacts
   - Public launch when ready

### Git Workflow
```bash
# Feature branches
git checkout -b feature/assessment-form
git checkout -b feature/api-integration
git checkout -b feature/n8n-workflow

# Commit often, push frequently
git commit -m "feat: add step 1 of assessment form"
git commit -m "fix: validation error on phone field"
git commit -m "chore: update Dutch translations"

# Main branch is clean
git checkout main
git merge feature/assessment-form
```

---

## 🧪 Testing Strategy

### MVP Testing (Manual)
```bash
# Local development
npm run dev

# Test form submission:
1. Fill out form completely
2. Check Network tab for API call
3. Verify Google Sheet updated
4. Test error states (invalid email, etc.)
5. Test on mobile device (Chrome DevTools)
6. Test form persistence (refresh mid-form)
```

### Key Test Cases
- [ ] Form validation works per step
- [ ] Progress indicator updates correctly
- [ ] Previous button works (except step 1)
- [ ] Data persists on refresh (localStorage)
- [ ] Success message displays after submit
- [ ] Error handling works (network failure)
- [ ] Mobile responsive (all breakpoints)
- [ ] Dutch text displays correctly
- [ ] N8N webhook receives data
- [ ] Google Sheet appends row

---

## 🚀 Deployment

### Vercel Deployment
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### Environment Variables in Vercel
```bash
# Set via Vercel dashboard or CLI
vercel env add N8N_WEBHOOK_URL
vercel env add N8N_WEBHOOK_SECRET
vercel env add NEXT_PUBLIC_APP_URL
```

### Post-Deployment Checklist
- [ ] Test live form submission
- [ ] Verify webhook reaches N8N
- [ ] Check Google Sheet updates
- [ ] Test on real mobile device
- [ ] Monitor Vercel logs for errors
- [ ] Set up custom domain (if ready)

---

## 🔮 Phase 2: Full Platform

### When to Build
**Trigger Conditions**:
- ✅ 50+ qualified leads in first month
- ✅ 20%+ conversion to paying customers
- ✅ Clear patterns in customer needs
- ✅ Manual work becoming bottleneck

### Migration Path
1. **Database Setup**
   - Initialize Supabase project
   - Run `SUPABASE_SCHEMA.sql`
   - Configure Row Level Security
   - Set up Storage buckets

2. **Authentication**
   - Integrate Supabase Auth
   - Build login/signup pages
   - Create protected portal layout

3. **Document Processing**
   - Build upload interface
   - N8N document processing workflow
   - AI analysis integration

4. **Reporting System**
   - Fiscalist approval workflow
   - Report generation
   - Email notifications

---

## 📚 Important Documentation Files

### Read These First
1. **[START_HERE_MVP.md](START_HERE_MVP.md)** - Project orientation
2. **[MVP_PLAN.md](MVP_PLAN.md)** - MVP strategy & specs
3. **[MVP_CHECKLIST.md](MVP_CHECKLIST.md)** - Actionable task list
4. **[MVP_N8N_WORKFLOW.md](MVP_N8N_WORKFLOW.md)** - N8N setup guide

### Reference Documentation
- **[PROJECT_OVERVIEW.md](PROJECT_OVERVIEW.md)** - Full platform architecture
- **[API_CONTRACTS.md](API_CONTRACTS.md)** - API specifications
- **[SUPABASE_SCHEMA.sql](SUPABASE_SCHEMA.sql)** - Database schema
- **[DEVELOPMENT_CHECKLIST.md](DEVELOPMENT_CHECKLIST.md)** - Full platform tasks
- **[QUICK_START.md](QUICK_START.md)** - Setup instructions

---

## 🎯 AI Assistant Guidelines

### When Helping with This Project

**DO**:
- ✅ Prioritize MVP completion (Google Sheets approach)
- ✅ Keep full platform architecture in mind for future-proofing
- ✅ Write ALL user-facing text in Dutch
- ✅ Use TypeScript strictly
- ✅ Follow mobile-first design principles
- ✅ Test on multiple devices/browsers
- ✅ Ask clarifying questions if unsure
- ✅ Reference existing LawAI components when helpful
- ✅ Focus on speed without sacrificing quality

**DON'T**:
- ❌ Add unnecessary features ("wouldn't it be cool if...")
- ❌ Overcomplicate the MVP (keep it simple!)
- ❌ Implement Phase 2 features prematurely
- ❌ Use English in user-facing text
- ❌ Skip validation/error handling
- ❌ Ignore mobile experience
- ❌ Make assumptions - ask if unclear

### Code Style Preferences
```typescript
// Use functional components
const AssessmentForm: React.FC = () => { ... };

// Prefer TypeScript strict mode
interface FormData { ... }
type UserType = "Particulier" | "Ondernemer";

// Use Zod for validation
const schema = z.object({ ... });

// Descriptive variable names
const handleFormSubmission = async () => { ... };
const isSubmitting = false;
const validationErrors = {};
```

### When Suggesting Tools/Libraries
- No budget constraints - suggest best tool for job
- Prefer proven, well-maintained packages
- Consider bundle size (Next.js performance)
- Explain trade-offs when multiple options exist

---

## 🆘 Common Issues & Solutions

### "N8N webhook not receiving data"
1. Check `N8N_WEBHOOK_URL` in `.env.local`
2. Verify N8N workflow is activated
3. Test webhook with curl command
4. Check Network tab in browser DevTools
5. Review Vercel function logs

### "Form validation not working"
1. Check Zod schema matches form fields
2. Verify React Hook Form setup
3. Console.log validation errors
4. Test with valid/invalid data manually

### "Google Sheet not updating"
1. Check N8N Google Sheets node configuration
2. Verify sheet name matches exactly
3. Check Google Sheets API permissions
4. Test N8N workflow manually with test data

### "Mobile layout broken"
1. Test in Chrome DevTools responsive mode
2. Check Tailwind breakpoints
3. Verify viewport meta tag in layout
4. Test on actual mobile device

---

## 📊 Success Metrics to Track

### MVP Launch Week
- Form submissions count
- Completion rate (started vs submitted)
- Mobile vs desktop traffic
- Error rate (failed submissions)
- Time to complete form (avg)

### Business Metrics
- Leads contacted (%)
- Conversion to paying customers (%)
- Average potential savings identified (€)
- Customer satisfaction (testimonials)

---

## 🎉 Final Notes

### Project Philosophy
**"Ship fast, learn faster, automate later"**

This project takes a smart MVP-first approach:
1. Launch simple lead capture (1-2 days)
2. Manually handle leads (learn customer needs)
3. Validate business model (prove demand)
4. Build full platform (automate what works)

### Your Mission
Help the developer launch the MVP quickly while laying groundwork for the full platform. Speed is critical - 2024 tax season is ending soon!

### When In Doubt
- Check [MVP_CHECKLIST.md](MVP_CHECKLIST.md) for next task
- Reference [MVP_PLAN.md](MVP_PLAN.md) for context
- Ask the developer for clarification
- Keep it simple and ship it!

---

**Ready to build? Start with [MVP_CHECKLIST.md](MVP_CHECKLIST.md)!** 🚀

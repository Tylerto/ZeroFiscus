# NCNP MVP Lead Capture - Architecture Diagram

**Visual guide to the workflow architecture**

---

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                         USER BROWSER                                │
│                                                                     │
│  ┌────────────────────────────────────────────────────────────┐   │
│  │  Assessment Form (React/Next.js)                           │   │
│  │  • 8 steps (conditional logic)                             │   │
│  │  • React Hook Form + Zod validation                        │   │
│  │  • LocalStorage persistence                                │   │
│  │  • Dutch language UI                                       │   │
│  └─────────────────────┬──────────────────────────────────────┘   │
│                        │                                            │
└────────────────────────┼────────────────────────────────────────────┘
                         │ POST /api/assessment/submit
                         │ (validated form data)
                         ▼
┌─────────────────────────────────────────────────────────────────────┐
│                      NEXT.JS API ROUTE                              │
│                   (Vercel Serverless)                               │
│                                                                     │
│  ┌────────────────────────────────────────────────────────────┐   │
│  │  /api/assessment/submit                                    │   │
│  │  • Validates with Zod schema                               │   │
│  │  • Adds metadata (timestamp, source)                       │   │
│  │  • Calls N8N webhook                                       │   │
│  │  • Returns success/error response                          │   │
│  └─────────────────────┬──────────────────────────────────────┘   │
│                        │                                            │
└────────────────────────┼────────────────────────────────────────────┘
                         │ POST to N8N webhook
                         │ + X-N8N-Webhook-Secret header
                         ▼
┌─────────────────────────────────────────────────────────────────────┐
│                        N8N WORKFLOW                                 │
│                      (N8N Cloud/Self-hosted)                        │
│                                                                     │
│  ┌────────────────────────────────────────────────────────────┐   │
│  │  Node 1: Webhook Trigger                                   │   │
│  │  • Receives POST request                                   │   │
│  │  • Optional authentication check                           │   │
│  └─────────────────────┬──────────────────────────────────────┘   │
│                        │                                            │
│  ┌────────────────────▼──────────────────────────────────────┐   │
│  │  Node 2: Validate Required Fields (IF node)               │   │
│  │  • Check: userType not empty                               │   │
│  │  • Check: fullName not empty                               │   │
│  │  • Check: email not empty                                  │   │
│  │  • Check: phone not empty                                  │   │
│  └─────────────────────┬──────────────────────────────────────┘   │
│                        │                                            │
│           ┌────────────┴────────────┐                              │
│           │ Valid?                  │ Invalid?                     │
│           ▼                         ▼                              │
│  ┌──────────────────┐      ┌──────────────────────┐              │
│  │ Node 3: Format   │      │ Node 6: Return Error │              │
│  │ Data for Sheets  │      │ Status: 500          │              │
│  │ (SET node)       │      │ {success: false}     │              │
│  └────────┬─────────┘      └──────────────────────┘              │
│           │                                                        │
│           │ Format:                                                │
│           │ • timestamp → DD-MM-YYYY HH:mm                        │
│           │ • leadId → NCNP-YYYYMMDD-XXXX                         │
│           │ • booleans → Ja/Nee/N/A                               │
│           │ • phone → '0612345678 (text)                          │
│           │                                                        │
│  ┌────────▼─────────────────────────────────────────────────┐   │
│  │  Node 4: Append to Google Sheets                          │   │
│  │  • Connect with OAuth2                                     │   │
│  │  • Sheet: "NCNP Lead Tracker"                             │   │
│  │  • Tab: "Leads"                                            │   │
│  │  • Map 15 columns                                          │   │
│  └─────────────────────┬──────────────────────────────────────┘   │
│                        │                                            │
│  ┌────────────────────▼──────────────────────────────────────┐   │
│  │  Node 5: Return Success                                    │   │
│  │  • Status: 200                                             │   │
│  │  • Body: {success: true, leadId: "NCNP-..."}              │   │
│  └─────────────────────┬──────────────────────────────────────┘   │
│                        │                                            │
└────────────────────────┼────────────────────────────────────────────┘
                         │ Response: {success: true, leadId: "..."}
                         ▼
┌─────────────────────────────────────────────────────────────────────┐
│                       GOOGLE SHEETS                                 │
│                  (Lead Tracker Spreadsheet)                         │
│                                                                     │
│  ┌────────────────────────────────────────────────────────────┐   │
│  │  Sheet: "Leads"                                            │   │
│  │  ┌──────────────────────────────────────────────────────┐ │   │
│  │  │ Row N: New lead data (15 columns)                    │ │   │
│  │  │ • Timestamp, Lead ID, Contact info                   │ │   │
│  │  │ • User type and situation                            │ │   │
│  │  │ • Status tracking columns (for manual entry)         │ │   │
│  │  └──────────────────────────────────────────────────────┘ │   │
│  └────────────────────────────────────────────────────────────┘   │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 🔄 Data Flow Sequence

### Step-by-Step Process

**1. User Interaction** (2-3 minutes)
```
User fills form:
├─ Step 1: Select user type (Loondienst/Ondernemer/Gepensioneerd/DGA)
├─ Step 2-5: Answer conditional questions based on type
├─ Step 6: View potential savings summary
├─ Step 7: Enter contact information
└─ Step 8: Add optional notes
```

**2. Form Submission** (<1 second)
```
Frontend validation:
├─ Zod schema checks all required fields
├─ Phone format validation (Dutch)
├─ Email format validation
└─ Character limits (notes max 500)

If valid:
└─ POST to /api/assessment/submit
```

**3. API Processing** (<1 second)
```
Next.js API Route:
├─ Re-validates data (server-side)
├─ Adds metadata:
│  ├─ submittedAt: ISO timestamp
│  └─ source: "website"
├─ Checks N8N_WEBHOOK_URL configured
└─ POSTs to N8N webhook
```

**4. N8N Workflow** (2-3 seconds)
```
Webhook receives data
    ↓
Validates required fields
    ↓
Formats data for Google Sheets:
├─ Convert booleans → Ja/Nee/N/A
├─ Format timestamp → DD-MM-YYYY HH:mm
├─ Generate Lead ID → NCNP-20251011-1234
└─ Force phone as text → '0612345678
    ↓
Append row to Google Sheet
    ↓
Return success response with Lead ID
```

**5. Response Flow** (<1 second)
```
N8N → Next.js API → Frontend
├─ Success message displayed
├─ LocalStorage cleared
└─ Redirect to homepage (after 3s)
```

**Total Time**: 4-6 seconds (user sees success within 5 seconds)

---

## 📊 Data Transformation

### Input (from form)
```json
{
  "userType": "Ondernemer",
  "hasHighIncome": true,
  "hasBox3Assets": true,
  "hasRentalProperty": false,
  "hasBV": true,
  "fullName": "Maria Jansen",
  "email": "maria@example.nl",
  "phone": "+31687654321",
  "additionalNotes": "Advies over BV structuur",
  "submittedAt": "2025-10-11T14:30:00Z",
  "source": "website"
}
```

### Transformation (in N8N)
```javascript
{
  timestamp: "11-10-2025 14:30",           // Formatted
  leadId: "NCNP-20251011-5678",            // Generated
  fullName: "Maria Jansen",                // Pass-through
  email: "maria@example.nl",               // Pass-through
  phone: "'0687654321",                    // Cleaned + text format
  userType: "Ondernemer",                  // Pass-through
  hasHighIncome: "Ja",                     // true → Ja
  hasBox3Assets: "Ja",                     // true → Ja
  hasRentalProperty: "Nee",                // false → Nee
  hasBV: "Ja",                             // true → Ja
  additionalNotes: "Advies over BV...",    // Pass-through
  status: "Nieuw Lead",                    // Default
  contacted: "",                           // Empty for manual entry
  estimatedSavings: "",                    // Empty for manual entry
  advisorNotes: ""                         // Empty for manual entry
}
```

### Output (in Google Sheet)
```
| Timestamp      | Lead ID           | Naam         | Email            | ... |
|----------------|-------------------|--------------|------------------|-----|
| 11-10-2025... | NCNP-20251011-5678| Maria Jansen | maria@example.nl | ... |
```

---

## 🔀 Conditional Logic Flow

### User Type Determines Questions

```
┌─────────────┐
│  User Type  │
└──────┬──────┘
       │
       ├───── Loondienst ──────────┬─ hasHighIncome: N/A (not asked)
       │                           ├─ hasBox3Assets: Asked
       │                           ├─ hasRentalProperty: If hasBox3Assets=true
       │                           └─ hasBV: If hasBox3Assets=true
       │
       ├───── Ondernemer ──────────┬─ hasHighIncome: Asked (>€100k?)
       │                           ├─ hasBox3Assets: Asked
       │                           ├─ hasRentalProperty: If hasBox3Assets=true
       │                           └─ hasBV: If hasHighIncome=true OR hasBox3Assets=true
       │
       ├───── Gepensioneerd ───────┬─ hasHighIncome: N/A (not asked)
       │                           ├─ hasBox3Assets: Asked
       │                           ├─ hasRentalProperty: If hasBox3Assets=true
       │                           └─ hasBV: If hasBox3Assets=true
       │
       └───── DGA ─────────────────┬─ hasHighIncome: Asked (>€250k profit?)
                                   ├─ hasBox3Assets: Asked
                                   ├─ hasRentalProperty: If hasBox3Assets=true
                                   └─ hasBV: Asked (usually true)
```

**N8N handles this**: Fields not asked show as "N/A" in Google Sheet

---

## 🔐 Security Layers

```
┌──────────────────────────────────────────────────────┐
│  Layer 1: Frontend Validation                        │
│  ├─ Client-side Zod schema                          │
│  ├─ Form field constraints                          │
│  └─ Input sanitization                              │
└────────────────────┬─────────────────────────────────┘
                     │
┌────────────────────▼─────────────────────────────────┐
│  Layer 2: API Route Validation                       │
│  ├─ Server-side Zod schema (re-validate)            │
│  ├─ Environment variable checks                     │
│  └─ Error handling (no sensitive data leakage)     │
└────────────────────┬─────────────────────────────────┘
                     │
┌────────────────────▼─────────────────────────────────┐
│  Layer 3: N8N Webhook Authentication                 │
│  ├─ Optional: X-N8N-Webhook-Secret header          │
│  ├─ HTTPS only                                      │
│  └─ Required fields validation                      │
└────────────────────┬─────────────────────────────────┘
                     │
┌────────────────────▼─────────────────────────────────┐
│  Layer 4: Google Sheets Access Control               │
│  ├─ OAuth2 authentication                           │
│  ├─ Specific account permissions                    │
│  └─ Sheet-level sharing controls                    │
└──────────────────────────────────────────────────────┘
```

---

## 📈 Scalability Path

### MVP (Current)
```
Frontend → Next.js API → N8N → Google Sheets
                                    ↓
                            Manual follow-up
```
**Capacity**: 100+ leads/day
**Cost**: Minimal (free tiers)
**Complexity**: Low
**Launch time**: 20 minutes

### Phase 2 (Future)
```
Frontend → Next.js API → N8N → Supabase Database
                          ↓           ↓
                    AI Analysis   User Portal
                          ↓           ↓
                    Fiscalist    Document Upload
                          ↓           ↓
                    Final Report → Email/Portal
```
**Capacity**: 1,000+ leads/day
**Cost**: Scale with usage
**Complexity**: Medium
**Migration**: Planned and documented

---

## 🎯 Node Responsibilities

### Node 1: Webhook Trigger
**Purpose**: Entry point for all form submissions
**Responsibilities**:
- Accept POST requests
- Authenticate requests (optional)
- Pass data to next node
**Error handling**: Returns 401 if auth fails

### Node 2: Validate Required Fields
**Purpose**: Ensure data completeness
**Responsibilities**:
- Check userType exists
- Check fullName exists
- Check email exists
- Check phone exists
**Error handling**: Routes to error response if validation fails

### Node 3: Format Data for Sheets
**Purpose**: Transform data to Google Sheets format
**Responsibilities**:
- Generate unique Lead ID
- Format timestamp (Dutch format)
- Convert booleans to Ja/Nee/N/A
- Add phone apostrophe (force text)
- Add default status "Nieuw Lead"
**Error handling**: None needed (pure transformation)

### Node 4: Append to Google Sheets
**Purpose**: Write data to spreadsheet
**Responsibilities**:
- Connect to Google Sheets API
- Map fields to columns
- Append new row
- Handle API rate limits
**Error handling**: Retries on transient failures

### Node 5: Return Success
**Purpose**: Confirm successful processing
**Responsibilities**:
- Return 200 status
- Include Lead ID in response
- Format as JSON
**Error handling**: N/A (only called on success)

### Node 6: Return Error
**Purpose**: Report validation failures
**Responsibilities**:
- Return 500 status
- Provide Dutch error message
- Log error details (server-side)
**Error handling**: N/A (this IS the error handler)

---

## 🔄 Error Flow

```
User submits form
    ↓
[Frontend validation fails?]
    ├─ YES → Show error, don't submit
    └─ NO → Continue
         ↓
[API validation fails?]
    ├─ YES → Return 400, show error message
    └─ NO → Continue
         ↓
[N8N webhook unreachable?]
    ├─ YES → Return 500, show error message
    └─ NO → Continue
         ↓
[N8N validation fails?]
    ├─ YES → Return 500 from N8N
    └─ NO → Continue
         ↓
[Google Sheets fails?]
    ├─ YES → N8N error handling (retry/alert)
    └─ NO → SUCCESS!
         ↓
Return 200 + Lead ID
    ↓
Show success message
    ↓
Clear form data
    ↓
Redirect home
```

---

## 🛠️ Technology Stack Detail

### Frontend
- **React**: UI components
- **Next.js 14**: Framework (App Router)
- **TypeScript**: Type safety
- **React Hook Form**: Form state management
- **Zod**: Validation schema
- **Framer Motion**: Animations
- **Tailwind CSS**: Styling
- **Radix UI**: Base components

### Backend
- **Next.js API Routes**: Serverless functions
- **Vercel**: Hosting (auto-scaling)
- **Environment Variables**: Config management

### Automation
- **N8N**: Workflow automation
- **N8N Cloud**: Hosted service (or self-hosted option)
- **Webhook**: HTTP trigger
- **Google Sheets API**: Data storage

### Data Storage
- **Google Sheets**: Spreadsheet database
- **OAuth2**: Authentication
- **Sheet API**: Programmatic access

---

## 📦 Deployment Architecture

### Development
```
localhost:3000 (Next.js)
    ↓
http://localhost:3000/api/assessment/submit
    ↓
https://your-instance.n8n.cloud/webhook-test/... (N8N test webhook)
    ↓
Google Sheet (test sheet)
```

### Production
```
https://ncnp.vercel.app (Next.js on Vercel)
    ↓
https://ncnp.vercel.app/api/assessment/submit (Vercel Edge)
    ↓
https://your-instance.n8n.cloud/webhook/... (N8N production webhook)
    ↓
Google Sheet (production sheet)
```

**All connections**: HTTPS only
**All secrets**: Environment variables
**All data**: Encrypted in transit

---

## 🎓 Architecture Principles

**1. Simplicity First**
- Each component does one thing well
- Minimal dependencies
- Clear data flow

**2. Fail Gracefully**
- Validation at every layer
- Clear error messages (Dutch)
- No silent failures

**3. Easy to Debug**
- Comprehensive logging
- Step-by-step execution in N8N
- Test tools provided

**4. Scale Ready**
- Stateless API routes
- N8N can scale horizontally
- Clear migration path to Phase 2

**5. Security by Default**
- HTTPS everywhere
- No secrets in code
- Minimal permissions

---

**This architecture is**: Simple, Secure, Scalable, and Maintainable

**Perfect for**: MVP validation before building full platform

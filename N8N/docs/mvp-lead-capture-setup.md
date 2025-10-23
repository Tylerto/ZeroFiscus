# NCNP MVP Lead Capture - Complete Setup Guide

**Last Updated**: 2025-10-11
**Status**: Ready for Implementation
**Timeline**: 30-60 minutes setup time

---

## 📋 Overview

This N8N workflow captures form submissions from the NCNP assessment form and stores them in Google Sheets for manual follow-up. This is the MVP approach before building the full automated platform.

**Workflow Flow**:
```
Next.js Form → API Route → N8N Webhook → Validate → Format → Google Sheets → Success Response
```

---

## 🎯 Prerequisites

Before you begin, ensure you have:

- ✅ N8N Cloud account (or self-hosted instance)
- ✅ Google account with access to Google Sheets
- ✅ The workflow JSON file (`mvp-lead-capture.json`)
- ✅ Next.js app API route ready (`/api/assessment/submit`)

---

## 📊 Part 1: Google Sheets Setup

### Step 1: Create the Lead Tracking Sheet

1. **Create a new Google Sheet**
   - Go to [sheets.google.com](https://sheets.google.com)
   - Click "Blank" to create new spreadsheet
   - Name it: `NCNP Lead Tracker`

2. **Set up the "Leads" sheet**
   - Rename the first sheet to exactly: `Leads`
   - This name is case-sensitive!

3. **Create column headers** (Row 1):
   Copy and paste this entire row into Row 1:

   ```
   Timestamp	Lead ID	Naam	Email	Telefoon	User Type	Hoog Inkomen	Box 3 Vermogen	Verhuurd Vastgoed	Heeft BV	Extra Notities	Status	Gecontacteerd	Geschatte Besparing	Adviseur Notities
   ```

   **OR** manually create these columns:
   - **Column A**: Timestamp
   - **Column B**: Lead ID
   - **Column C**: Naam
   - **Column D**: Email
   - **Column E**: Telefoon
   - **Column F**: User Type
   - **Column G**: Hoog Inkomen
   - **Column H**: Box 3 Vermogen
   - **Column I**: Verhuurd Vastgoed
   - **Column J**: Heeft BV
   - **Column K**: Extra Notities
   - **Column L**: Status
   - **Column M**: Gecontacteerd
   - **Column N**: Geschatte Besparing
   - **Column O**: Adviseur Notities

4. **Format the sheet**:
   - Select Row 1 (header row)
   - Make it **bold** (Ctrl/Cmd + B)
   - Set background color to light blue or gray
   - Freeze the header row: View → Freeze → 1 row

5. **Set column formats**:
   - Select **Column E** (Telefoon): Format → Number → Plain text
   - This prevents phone numbers from being converted to numbers

6. **Get the Sheet ID**:
   - Look at your sheet URL:
     ```
     https://docs.google.com/spreadsheets/d/1a2b3c4d5e6f7g8h9i0j/edit
     ```
   - Copy the ID part: `1a2b3c4d5e6f7g8h9i0j`
   - Save this - you'll need it for N8N!

### Step 2: Share Sheet Access (Important!)

1. Click "Share" button (top right)
2. Make sure your Google account (the one you'll use in N8N) has **Editor** access
3. OR set to "Anyone with the link can edit" (less secure, but easier for testing)

---

## 🔄 Part 2: N8N Workflow Setup

### Step 1: Import the Workflow

**Option A: Via N8N UI (Recommended)**

1. Log into your N8N instance
2. Go to **Workflows** in the left sidebar
3. Click **Add workflow** → **Import from File**
4. Select `/N8N/workflows/mvp-lead-capture.json`
5. Click **Import**

**Option B: Via Copy-Paste**

1. Create new workflow in N8N
2. Open the workflow JSON file
3. Copy entire contents
4. In N8N, click the "..." menu → **Import from JSON**
5. Paste and import

### Step 2: Connect Google Sheets Credential

1. In the imported workflow, click on the **"Append to Google Sheets"** node
2. You'll see a credential dropdown showing `GOOGLE_SHEETS_CREDENTIAL_ID`
3. Click **"Create New Credential"**
4. Select **Google Sheets OAuth2 API**
5. Follow the OAuth flow:
   - Click "Sign in with Google"
   - Select your Google account
   - Grant permissions
   - Wait for success message
6. The credential will auto-save

### Step 3: Configure Google Sheet ID

1. Still in the **"Append to Google Sheets"** node
2. Find the **"Document"** field
3. It should show: `={{ $env.GOOGLE_SHEET_ID }}`
4. Replace this with your actual Sheet ID (from Part 1, Step 6)
   - Example: `1a2b3c4d5e6f7g8h9i0j`
5. OR keep the environment variable and set it in N8N settings (recommended for production)

**To use environment variable (recommended)**:
1. Go to **Settings** → **Environment Variables** (N8N Cloud)
2. Add new variable:
   - Name: `GOOGLE_SHEET_ID`
   - Value: `1a2b3c4d5e6f7g8h9i0j` (your actual ID)
3. Save

### Step 4: Activate the Webhook

1. Click on the **"Webhook Trigger"** node
2. Copy the **Production URL** (looks like):
   ```
   https://your-instance.n8n.cloud/webhook/ncnp-lead-capture
   ```
3. Save this URL - you'll need it for Next.js!

**Optional: Add Webhook Security**

1. In Webhook Trigger node, expand **"Options"**
2. Add **"Header Auth"**:
   - Header Name: `X-N8N-Webhook-Secret`
   - Header Value: `your-secret-key-here` (generate a random string)
3. Save this secret for your Next.js `.env.local`

### Step 5: Save & Activate

1. Click **Save** (top right)
2. Toggle the workflow to **Active** (switch at top)
3. Confirm it shows "Active" status

---

## 🔗 Part 3: Next.js Integration

### Step 1: Create API Route

Create or verify file exists: `/webapp/src/app/api/assessment/submit/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { assessmentSchema } from '@/lib/validation/assessment-schema';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate with Zod schema
    const validated = assessmentSchema.parse(body);

    // Prepare payload for N8N
    const payload = {
      ...validated,
      submittedAt: new Date().toISOString(),
      source: "website",
    };

    // Send to N8N webhook
    const n8nResponse = await fetch(process.env.N8N_WEBHOOK_URL!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // If you added webhook security:
        'X-N8N-Webhook-Secret': process.env.N8N_WEBHOOK_SECRET || '',
      },
      body: JSON.stringify(payload),
    });

    if (!n8nResponse.ok) {
      const errorText = await n8nResponse.text();
      console.error('N8N webhook failed:', errorText);
      throw new Error('Webhook request failed');
    }

    const result = await n8nResponse.json();

    return NextResponse.json({
      success: true,
      leadId: result.leadId
    });

  } catch (error) {
    console.error('Assessment submission error:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'Er is iets misgegaan. Probeer het opnieuw.'
      },
      { status: 500 }
    );
  }
}
```

### Step 2: Environment Variables

Add to `/webapp/.env.local`:

```env
# N8N Webhook Integration
N8N_WEBHOOK_URL=https://your-instance.n8n.cloud/webhook/ncnp-lead-capture
N8N_WEBHOOK_SECRET=your-secret-key-here

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

**For Production (Vercel)**:
```bash
vercel env add N8N_WEBHOOK_URL
# Paste: https://your-instance.n8n.cloud/webhook/ncnp-lead-capture

vercel env add N8N_WEBHOOK_SECRET
# Paste: your-secret-key-here
```

### Step 3: Verify Form Submission

The form should already submit to this endpoint (from `AssessmentForm.tsx` line 121):

```typescript
const response = await fetch("/api/assessment/submit", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    ...validated,
    submittedAt: new Date().toISOString(),
    source: "website",
  }),
});
```

---

## ✅ Part 4: Testing

### Test 1: Manual Webhook Test (Without Next.js)

```bash
curl -X POST https://your-instance.n8n.cloud/webhook/ncnp-lead-capture \
  -H "Content-Type: application/json" \
  -H "X-N8N-Webhook-Secret: your-secret-key-here" \
  -d '{
    "userType": "Loondienst",
    "hasHighIncome": false,
    "hasBox3Assets": true,
    "hasRentalProperty": false,
    "hasBV": false,
    "fullName": "Test Gebruiker",
    "email": "test@example.nl",
    "phone": "+31612345678",
    "additionalNotes": "Dit is een test submission",
    "submittedAt": "2025-10-11T12:00:00Z",
    "source": "website"
  }'
```

**Expected Result**:
- Status: 200 OK
- Response: `{"success": true, "leadId": "NCNP-20251011-1234"}`
- Google Sheet: New row added with all data

### Test 2: Via Next.js Locally

```bash
# Start Next.js dev server
cd webapp
npm run dev

# Open browser
http://localhost:3000/assessment

# Fill out the form completely
# Submit and check:
1. Success message appears
2. Network tab shows 200 response
3. Google Sheet has new row
```

### Test 3: Test All User Types

Create test submissions for each user type:
- ✅ Loondienst
- ✅ Ondernemer
- ✅ Gepensioneerd
- ✅ DGA

Verify conditional fields are handled correctly (Ja/Nee/N/A).

### Test 4: Test Error Handling

**Test missing required fields**:
```bash
curl -X POST https://your-instance.n8n.cloud/webhook/ncnp-lead-capture \
  -H "Content-Type: application/json" \
  -d '{
    "userType": "Loondienst",
    "email": "test@example.nl"
  }'
```

**Expected**: Error response with 500 status

---

## 🐛 Part 5: Troubleshooting

### Issue: "Webhook not found" (404 error)

**Causes**:
- Workflow is not active
- Wrong webhook URL
- Webhook path changed

**Solutions**:
1. Check workflow status in N8N (should show "Active")
2. Verify webhook URL in Webhook Trigger node
3. Copy the exact Production URL from N8N
4. Update `.env.local` with correct URL

---

### Issue: "Unauthorized" or "Forbidden" (401/403 error)

**Causes**:
- Webhook secret mismatch
- Missing authentication header

**Solutions**:
1. Check `X-N8N-Webhook-Secret` header is included in request
2. Verify secret matches in both N8N and `.env.local`
3. Test without authentication first (remove header auth from webhook node)

---

### Issue: "Google Sheets append failed"

**Causes**:
- Sheet ID incorrect
- Sheet name is not exactly "Leads"
- Missing Google Sheets credential
- Insufficient permissions

**Solutions**:
1. Verify Sheet ID in Google Sheets node
2. Check sheet tab name is exactly: `Leads` (case-sensitive)
3. Re-authenticate Google Sheets credential
4. Check share settings (ensure editor access)
5. Try the "Test Step" feature in N8N on the Google Sheets node

---

### Issue: "Phone numbers showing as scientific notation"

**Cause**: Column not formatted as text

**Solution**:
1. Select Column E (Telefoon) in Google Sheets
2. Format → Number → Plain text
3. Delete test rows and resubmit

---

### Issue: "Data not appearing in correct columns"

**Causes**:
- Column headers don't match exactly
- Extra spaces in header names
- Wrong column mapping in N8N

**Solutions**:
1. Copy header row from this guide (Part 1, Step 3)
2. Check for extra spaces or typos
3. In N8N, verify column mappings in Google Sheets node
4. Use "Test Step" to see what data is being sent

---

### Issue: "N8N execution shows success but no data in sheet"

**Causes**:
- Wrong sheet selected
- Wrong spreadsheet ID
- Data went to different tab

**Solutions**:
1. Check N8N execution log (click on the execution)
2. Verify which sheet it wrote to
3. Check if there are multiple tabs in your spreadsheet
4. Ensure you're looking at the "Leads" tab

---

### Issue: "Workflow times out"

**Causes**:
- Google Sheets API slow
- Large spreadsheet
- Network issues

**Solutions**:
1. Check Google Sheets size (should be fine for <1000 rows)
2. In N8N, increase timeout:
   - Settings → Timeout → Set to 30000ms (30 seconds)
3. Check N8N instance status
4. Test with smaller spreadsheet first

---

## 📊 Part 6: Monitoring & Maintenance

### View Executions

1. Go to **Executions** in N8N sidebar
2. Filter by workflow: "NCNP MVP - Lead Capture"
3. Check success/error rates

**What to monitor**:
- ✅ Success rate (should be >95%)
- ⚠️ Error rate (investigate if >5%)
- 📈 Execution time (should be <5 seconds)

### Set Up Error Notifications (Optional)

**Add to workflow**:
1. Add new node: **Error Trigger**
2. Connect to **Send Email** node
3. Configure to email you on failures

**Example email**:
```
Subject: NCNP Lead Capture Failed
Body: Workflow execution failed at {{ $now }}
Error: {{ $json.error.message }}
```

### Regular Checks

**Daily** (during launch week):
- Check for new leads in Google Sheet
- Review any failed executions
- Monitor response times

**Weekly** (after stable):
- Export Google Sheet as backup
- Review error patterns
- Check for duplicate submissions

---

## 🔐 Part 7: Security Best Practices

### 1. Webhook Authentication
```typescript
// In N8N Webhook Trigger node
Options → Header Auth → Add:
Name: X-N8N-Webhook-Secret
Value: <generate-random-32-char-string>
```

### 2. Environment Variables
```env
# NEVER commit these to Git!
# Add to .env.local and .gitignore

N8N_WEBHOOK_URL=https://...
N8N_WEBHOOK_SECRET=<secret>
```

### 3. Google Sheets Permissions
- Use "specific people" share settings (not "anyone with link")
- Grant only necessary permissions
- Regularly review who has access

### 4. Data Privacy
- Don't share the Google Sheet link publicly
- Consider encryption for sensitive data
- Follow GDPR requirements (right to deletion, etc.)

---

## 📈 Part 8: Scaling Considerations

### When to Optimize

**Current MVP handles**:
- ✅ Up to 100 leads/day easily
- ✅ Simple manual follow-up process

**Upgrade when**:
- 📊 >50 leads/day consistently
- 🚀 Manual process becomes bottleneck
- 💼 Need automated email responses
- 🎯 Want CRM integration

### Future Enhancements (Phase 2)

1. **Supabase Migration**
   - Move from Google Sheets to proper database
   - Enable user portal and document uploads

2. **Automated Email Responses**
   - Send confirmation email to lead
   - Send notification to admin

3. **CRM Integration**
   - Connect to HubSpot, Pipedrive, etc.
   - Auto-create deals/contacts

4. **Advanced Reporting**
   - Conversion tracking
   - Source attribution
   - Lead scoring

---

## 🎯 Success Checklist

Before going live, verify:

- [ ] Google Sheet created with correct headers
- [ ] Sheet ID copied and saved
- [ ] N8N workflow imported successfully
- [ ] Google Sheets credential connected
- [ ] Webhook URL copied to `.env.local`
- [ ] Workflow is **Active** in N8N
- [ ] API route exists at `/api/assessment/submit`
- [ ] Manual curl test passes
- [ ] Form submission test passes
- [ ] Data appears in Google Sheet correctly
- [ ] Phone numbers are formatted as text
- [ ] Ja/Nee/N/A values appear correctly
- [ ] Lead ID is auto-generated
- [ ] Error handling works
- [ ] Production env vars set in Vercel

---

## 📞 Support & Resources

### N8N Documentation
- [Webhook Trigger](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/)
- [Google Sheets Node](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlesheets/)
- [Error Handling](https://docs.n8n.io/workflows/error-handling/)

### Google Sheets Help
- [Format cells](https://support.google.com/docs/answer/56470)
- [Share & permissions](https://support.google.com/docs/answer/2494822)

### Project Documentation
- Main project docs: `/CLAUDE.md`
- Form implementation: `/webapp/src/components/AssessmentForm.tsx`
- Validation schema: `/webapp/src/lib/validation/assessment-schema.ts`

---

## 🎉 You're Done!

Your MVP lead capture system is now live!

**Next Steps**:
1. Monitor first few leads closely
2. Test follow-up process
3. Gather feedback from advisors
4. Plan Phase 2 enhancements

**Timeline to Full Platform**:
- Week 1-2: MVP validation
- Week 3-4: Gather learnings
- Month 2: Build Phase 2 (Supabase + automation)

---

**Last Updated**: 2025-10-11
**Version**: 1.0
**Status**: Ready for Production ✅

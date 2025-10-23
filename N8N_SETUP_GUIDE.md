# N8N Workflow Setup Guide - NCNP Lead Capture

Complete guide to setting up the N8N workflow for capturing tax assessment leads into Google Sheets.

---

## Prerequisites

1. N8N Cloud account (or self-hosted instance)
2. Google account for Google Sheets
3. Google Cloud Platform project (for service account)

---

## Part 1: Google Sheets Setup

### Step 1: Create the Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it: **"NCNP Leads"**

### Step 2: Set Up Sheet Structure

Create a sheet named **"Leads"** with the following headers in Row 1:

| A | B | C | D | E | F | G | H | I | J | K | L | M | N |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Timestamp | Lead ID | Status | Name | Email | Phone | User Type | High Income | Box 3 | Rental | BV | Summary | Notes | User Agent |

**Column Details:**
- **A - Timestamp**: Auto-generated submission timestamp
- **B - Lead ID**: Unique identifier for each lead
- **C - Status**: Lead status (Nieuw, Contacted, Qualified, Closed)
- **D - Name**: Full name from form
- **E - Email**: Email address
- **F - Phone**: Phone number
- **G - User Type**: Loondienst, Ondernemer, Gepensioneerd, or DGA
- **H - High Income**: Yes/No (only for Ondernemer/DGA)
- **I - Box 3**: Yes/No - Has Box 3 assets above tax-free threshold
- **J - Rental**: Yes/No - Has rental property (only if Box 3 = Yes)
- **K - BV**: Yes/No - Has BV (conditional)
- **L - Summary**: Auto-generated description of user's situation
- **M - Notes**: Additional notes from user (optional)
- **N - User Agent**: Browser/device info

### Step 3: Format the Sheet

1. **Freeze header row**: View → Freeze → 1 row
2. **Bold headers**: Select row 1 → Bold
3. **Set column widths**:
   - A (Timestamp): 180px
   - B (Lead ID): 120px
   - C (Status): 120px
   - D (Name): 180px
   - E (Email): 200px
   - F (Phone): 150px
   - G-I (User Type, Income, Year): 150px each
   - J (Notes): 300px
   - K (User Agent): 200px
   - L (Contacted): 180px

4. **Add data validation for Status column**:
   - Select column C (starting from C2)
   - Data → Data validation
   - Criteria: List of items
   - Values: `Nieuw, Contacted, Qualified, Closed`
   - On invalid data: Reject input

5. **Add conditional formatting for Status**:
   - Select column C (C2:C1000)
   - Format → Conditional formatting
   - Rules:
     - "Nieuw" → Light blue background
     - "Contacted" → Light yellow background
     - "Qualified" → Light green background
     - "Closed" → Light gray background

---

## Part 2: Google Cloud Service Account Setup

### Step 1: Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create new project: **"NCNP"**
3. Wait for project creation

### Step 2: Enable Google Sheets API

1. In project, go to **APIs & Services** → **Library**
2. Search for "Google Sheets API"
3. Click **Enable**

### Step 3: Create Service Account

1. Go to **APIs & Services** → **Credentials**
2. Click **Create Credentials** → **Service Account**
3. Service account details:
   - Name: `n8n-sheets-access`
   - ID: Auto-generated
   - Description: "Service account for N8N to access NCNP Google Sheets"
4. Click **Create and Continue**
5. Grant role: **Editor** (or just **Viewer** + **Sheets Editor** for stricter security)
6. Click **Continue** → **Done**

### Step 4: Create Service Account Key

1. Click on the service account you just created
2. Go to **Keys** tab
3. Click **Add Key** → **Create new key**
4. Key type: **JSON**
5. Click **Create**
6. Save the downloaded JSON file securely (you'll need this for N8N)

### Step 5: Share Google Sheet with Service Account

1. Open your **NCNP Leads** Google Sheet
2. Click **Share** button
3. Copy the service account email from the JSON file (looks like: `n8n-sheets-access@ncnp-xxxxxx.iam.gserviceaccount.com`)
4. Paste into "Add people and groups"
5. Set permission: **Editor**
6. Uncheck "Notify people"
7. Click **Share**

---

## Part 3: N8N Workflow Setup

### Step 1: Create New Workflow

1. Log into N8N Cloud
2. Click **New Workflow**
3. Name it: **"NCNP Lead Capture - MVP"**

### Step 2: Add Webhook Trigger Node

1. Click **+** to add node
2. Search for **Webhook**
3. Configuration:
   - **HTTP Method**: POST
   - **Path**: `ncnp-lead-capture`
   - **Authentication**: None (or Header Auth if you want extra security)
   - **Response Mode**: "When Last Node Finishes"
   - **Response Code**: 200

4. Copy the **Production Webhook URL** (you'll need this for your .env file)
   - Should look like: `https://your-instance.n8n.cloud/webhook/ncnp-lead-capture`

### Step 3: Add Data Validation Node (Function)

1. Add **Code** node after Webhook
2. Name it: "Validate & Format Data"
3. JavaScript code:

```javascript
// Get webhook data
const data = $input.item.json;

// Generate unique lead ID
const leadId = `NCNP-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

// Format timestamp
const timestamp = new Date().toLocaleString('nl-NL', {
  timeZone: 'Europe/Amsterdam',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit'
});

// Validate required fields
const requiredFields = ['userType', 'hasBox3Assets', 'fullName', 'email', 'phone'];
const missingFields = requiredFields.filter(field => {
  const value = data[field];
  return value === undefined || value === null || value === '';
});

if (missingFields.length > 0) {
  throw new Error(`Missing required fields: ${missingFields.join(', ')}`);
}

// Generate summary using the same logic as frontend
function generateSummary(formData) {
  const USER_TYPES = {
    'Loondienst': 'Loondienst',
    'Ondernemer': 'Ondernemer / ZZP',
    'Gepensioneerd': 'Gepensioneerd',
    'DGA': 'Directeur Groot Aandeelhouder'
  };

  const parts = [];
  const userTypeLabel = USER_TYPES[formData.userType] || formData.userType;
  parts.push(`U bent ${userTypeLabel.toLowerCase()}`);

  if (formData.hasHighIncome === true) {
    const threshold = formData.userType === 'DGA' ? '€250.000' : '€100.000';
    parts.push(`met een winst van meer dan ${threshold}`);
  }

  if (formData.hasBox3Assets === true) {
    parts.push('u heeft Box 3 vermogen');
  }

  if (formData.hasRentalProperty === true) {
    parts.push('waaronder verhuurd vastgoed');
  }

  if (formData.hasBV === true) {
    parts.push('en u heeft een BV');
  }

  let summary = parts.join(', ');
  summary = summary.charAt(0).toUpperCase() + summary.slice(1);
  summary += '. Op basis van uw situatie zien wij mogelijk besparingsmogelijkheden voor u.';

  return summary;
}

// Return formatted data for Google Sheets
return {
  timestamp,
  leadId,
  status: 'Nieuw',
  fullName: data.fullName,
  email: data.email,
  phone: data.phone,
  userType: data.userType,
  hasHighIncome: data.hasHighIncome,
  hasBox3Assets: data.hasBox3Assets,
  hasRentalProperty: data.hasRentalProperty,
  hasBV: data.hasBV,
  generatedSummary: generateSummary(data),
  additionalNotes: data.additionalNotes || '',
  userAgent: data.userAgent || 'unknown',
};
```

### Step 4: Add Google Sheets Credentials

1. In N8N, go to **Credentials** (top right)
2. Click **Add Credential**
3. Search for **Google Sheets API**
4. Choose: **Service Account**
5. Upload your JSON key file (from Part 2, Step 4)
6. Save credential

### Step 5: Add Google Sheets Node

1. Add **Google Sheets** node after the Code node
2. Name it: "Append to Leads Sheet"
3. Configuration:
   - **Credential**: Select your Google Sheets credential
   - **Resource**: Sheet
   - **Operation**: Append
   - **Document**: Select your "NCNP Leads" spreadsheet
   - **Sheet**: "Leads"
   - **Data Mode**: Map Each Column

4. Map the columns (use expressions from previous node):

```
Column Mapping:
- Timestamp → {{ $json.timestamp }}
- Lead ID → {{ $json.leadId }}
- Status → {{ $json.status }}
- Name → {{ $json.fullName }}
- Email → {{ $json.email }}
- Phone → {{ $json.phone }}
- User Type → {{ $json.userType }}
- High Income → {{ $json.hasHighIncome ? 'Yes' : 'No' }}
- Box 3 → {{ $json.hasBox3Assets ? 'Yes' : 'No' }}
- Rental → {{ $json.hasRentalProperty ? 'Yes' : 'No' }}
- BV → {{ $json.hasBV ? 'Yes' : 'No' }}
- Summary → {{ $json.generatedSummary }}
- Notes → {{ $json.additionalNotes }}
- User Agent → {{ $json.userAgent }}
```

### Step 6: Add Response Node

1. Add **Respond to Webhook** node at the end
2. Configuration:
   - **Response Mode**: Using 'Respond to Webhook' Node
   - **Response Code**: 200
   - **Response Body**: JSON

3. JSON response:

```json
{
  "success": true,
  "message": "Lead captured successfully",
  "leadId": "={{ $('Validate & Format Data').item.json.leadId }}"
}
```

### Step 7: Add Error Handling (Optional but Recommended)

1. Click **Settings** on the workflow
2. Go to **Error Workflow**
3. Create a simple error workflow that:
   - Logs the error
   - Sends you an email notification
   - Returns error response to webhook

### Step 8: Activate Workflow

1. Click **Save** to save the workflow
2. Toggle **Active** switch to ON
3. Workflow is now live!

---

## Part 4: Integration with Next.js App

### Update Environment Variables

1. Copy the Production Webhook URL from N8N
2. Update `.env.local` in your webapp:

```env
N8N_WEBHOOK_URL=https://your-instance.n8n.cloud/webhook/ncnp-lead-capture
N8N_WEBHOOK_SECRET=optional-secret-here
```

3. Restart your dev server

---

## Part 5: Testing

### Test 1: Direct N8N Webhook Test

Use this curl command to test N8N directly:

```bash
curl -X POST https://your-instance.n8n.cloud/webhook/ncnp-lead-capture \
  -H "Content-Type: application/json" \
  -d '{
    "userType": "Ondernemer",
    "hasHighIncome": true,
    "hasBox3Assets": true,
    "hasRentalProperty": false,
    "hasBV": true,
    "fullName": "Test User",
    "email": "test@example.nl",
    "phone": "+31612345678",
    "additionalNotes": "Test submission",
    "submittedAt": "2024-10-03T12:00:00Z",
    "source": "website",
    "userAgent": "curl-test"
  }'
```

**Expected result:**
- N8N workflow executes successfully
- New row appears in Google Sheet
- Status = "Nieuw"

### Test 2: Test via Next.js API Route

```bash
curl -X POST http://localhost:3001/api/assessment/submit \
  -H "Content-Type: application/json" \
  -d '{
    "userType": "Ondernemer",
    "incomeRange": "€75,000 - €100,000",
    "taxYear": "2023",
    "fullName": "Jan de Vries",
    "email": "jan@example.nl",
    "phone": "0612345678",
    "additionalNotes": "Ik heb een BV",
    "submittedAt": "2024-10-03T13:00:00Z",
    "source": "website"
  }'
```

**Expected result:**
- API returns `{"success": true}`
- New row in Google Sheet
- All data mapped correctly

### Test 3: Test via Frontend Form

1. Go to `http://localhost:3001/assessment`
2. Fill out the complete form
3. Submit
4. Check Google Sheet for new entry
5. Verify all fields are populated

---

## Part 6: Monitoring & Maintenance

### N8N Execution History

- Go to N8N workflow
- Click **Executions** tab
- View all webhook calls, success/failures
- Click on execution to see detailed logs

### Google Sheet Notifications

Set up email notifications for new rows:

1. In Google Sheets: **Tools** → **Notification rules**
2. Select: "When changes are made"
3. Frequency: "Notify me immediately"
4. Email: Your email
5. Save

### Error Handling Checklist

Monitor these potential issues:

- [ ] N8N webhook returns 500 (check execution logs)
- [ ] Google Sheets quota exceeded (unlikely for MVP)
- [ ] Service account permissions revoked
- [ ] Invalid data format (check Zod validation)
- [ ] Network timeouts (increase API timeout if needed)

---

## Part 7: Production Deployment

### Before Going Live:

1. [ ] Test workflow with at least 10 test submissions
2. [ ] Verify all data appears correctly in Google Sheet
3. [ ] Set up error notifications in N8N
4. [ ] Add webhook secret for security (optional but recommended)
5. [ ] Update Vercel environment variables with production webhook URL
6. [ ] Test from production Vercel URL before public launch

### Post-Launch:

1. [ ] Monitor N8N executions daily (first week)
2. [ ] Check Google Sheet for data integrity
3. [ ] Respond to leads within 24 hours (as promised!)
4. [ ] Update lead status column as you contact people
5. [ ] Track conversion metrics in separate sheet tab

---

## Troubleshooting

### Issue: Webhook returns 404

**Solution**:
- Check webhook URL is correct
- Verify workflow is **Active** in N8N
- Ensure path matches exactly: `/webhook/ncnp-lead-capture`

### Issue: Google Sheet not updating

**Solutions**:
- Check service account has **Editor** permission on sheet
- Verify Google Sheets API is enabled in Google Cloud
- Check N8N execution logs for error details
- Ensure sheet name is exactly "Leads"

### Issue: Data mapping errors

**Solutions**:
- Check column names match exactly (case-sensitive)
- Verify all required fields are in the webhook payload
- Review N8N node mapping configuration
- Test with minimal data first, then add complexity

---

## Next Steps (After MVP Validation)

Once you have 50+ leads and proven demand:

1. Add email confirmation to users (via N8N Email node)
2. Add Slack/email notification to you for new leads
3. Create analytics dashboard in Google Sheets
4. Set up automated lead scoring
5. Consider migrating to Supabase for full platform

---

## Useful Resources

- [N8N Documentation](https://docs.n8n.io/)
- [Google Sheets API](https://developers.google.com/sheets/api)
- [N8N Community Forum](https://community.n8n.io/)

---

**Last Updated**: 2024-10-03
**Status**: Ready to implement
**Estimated Setup Time**: 1-2 hours

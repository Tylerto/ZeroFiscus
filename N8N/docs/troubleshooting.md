# NCNP MVP Lead Capture - Troubleshooting Guide

**Purpose**: Comprehensive solutions for common issues with the N8N lead capture workflow

---

## 🔍 Quick Diagnostics

### Step 1: Identify the Problem Layer

```
┌─────────────────────────────────────┐
│ Frontend (Assessment Form)          │
│ ↓ Is form submitting?               │
├─────────────────────────────────────┤
│ Next.js API (/api/assessment/submit)│
│ ↓ Is API receiving data?            │
├─────────────────────────────────────┤
│ Network (API → N8N Webhook)         │
│ ↓ Is webhook being called?          │
├─────────────────────────────────────┤
│ N8N Workflow (Webhook → Sheets)     │
│ ↓ Is workflow executing?            │
├─────────────────────────────────────┤
│ Google Sheets                        │
│ ↓ Is data being written?            │
└─────────────────────────────────────┘
```

### Step 2: Check Each Layer

**Frontend**:
```javascript
// Open browser console (F12)
// Check for errors in Console tab
// Check Network tab for failed requests
```

**Next.js API**:
```bash
# Check server logs
npm run dev
# Look for errors in terminal
```

**N8N**:
```
1. Go to N8N → Executions
2. Check recent execution status
3. Click failed execution for details
```

**Google Sheets**:
```
1. Check if sheet is accessible
2. Verify column headers match
3. Check permissions
```

---

## 🚨 Common Issues & Solutions

---

## Issue #1: "Workflow not receiving webhook calls"

### Symptoms
- Form submits successfully
- No executions appear in N8N
- Network request times out or returns 404

### Possible Causes

#### Cause A: Workflow Not Active
**How to check**:
```
1. Open N8N
2. Go to your workflow
3. Check toggle at top right
```

**Solution**:
```
1. Toggle workflow to Active
2. Ensure it shows "Active" status
3. Test again
```

#### Cause B: Wrong Webhook URL
**How to check**:
```bash
# In .env.local, check:
echo $N8N_WEBHOOK_URL

# Should be:
https://your-instance.n8n.cloud/webhook/ncnp-lead-capture
```

**Solution**:
```bash
# Get correct URL from N8N:
1. Open workflow
2. Click Webhook Trigger node
3. Copy Production URL
4. Update .env.local:
N8N_WEBHOOK_URL=<paste-url-here>

# Restart Next.js:
npm run dev
```

#### Cause C: N8N Instance Down
**How to check**:
```bash
# Test webhook directly:
curl https://your-instance.n8n.cloud/webhook/ncnp-lead-capture

# Should return 200 or 400 (not connection error)
```

**Solution**:
- Check N8N Cloud status page
- If self-hosted, restart N8N instance
- Contact N8N support if needed

---

## Issue #2: "Webhook returns 401 Unauthorized"

### Symptoms
- API request fails with 401 error
- N8N shows "Unauthorized" in execution log

### Possible Causes

#### Cause A: Webhook Secret Mismatch
**How to check**:
```bash
# Check Next.js .env.local:
cat .env.local | grep N8N_WEBHOOK_SECRET

# Check N8N workflow:
1. Open Webhook Trigger node
2. Check Options → Header Auth
```

**Solution**:
```bash
# Option 1: Update Next.js to match N8N
N8N_WEBHOOK_SECRET=<secret-from-n8n>

# Option 2: Disable auth in N8N (testing only!)
1. Open Webhook Trigger node
2. Options → Remove Header Auth
3. Save workflow
```

#### Cause B: Missing Header
**How to check**:
```typescript
// In /api/assessment/submit/route.ts
// Ensure header is included:
headers: {
  'Content-Type': 'application/json',
  'X-N8N-Webhook-Secret': process.env.N8N_WEBHOOK_SECRET || '',
}
```

**Solution**:
Add the header to your API request (see setup guide)

---

## Issue #3: "Data not appearing in Google Sheets"

### Symptoms
- Webhook receives data (200 response)
- N8N execution shows success
- But no row in Google Sheets

### Possible Causes

#### Cause A: Wrong Sheet ID
**How to check**:
```
1. Open Google Sheet
2. Check URL for ID:
   https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit
3. Compare to N8N workflow:
   - Open Google Sheets node
   - Check Document field
```

**Solution**:
```
1. Copy correct Sheet ID from URL
2. In N8N Google Sheets node:
   - Update Document field
   - Enter the correct ID
3. Save workflow
4. Test again
```

#### Cause B: Wrong Sheet Name
**How to check**:
```
1. Open Google Sheet
2. Check tab name at bottom
3. Must be exactly: "Leads" (case-sensitive)
```

**Solution**:
```
Option 1: Rename tab in Google Sheets
1. Right-click tab
2. Rename to "Leads"

Option 2: Update N8N
1. Open Google Sheets node
2. Update Sheet Name to match your tab
3. Save workflow
```

#### Cause C: Google Sheets Credential Invalid
**How to check**:
```
1. In N8N, open Google Sheets node
2. Check credential dropdown
3. Click "Test" if available
```

**Solution**:
```
1. Delete existing credential
2. Create new credential
3. Re-authenticate with Google
4. Grant all permissions
5. Test connection
```

#### Cause D: Insufficient Permissions
**How to check**:
```
1. Open Google Sheet
2. Click Share button
3. Check if your Google account has Editor access
```

**Solution**:
```
1. In Google Sheets, click Share
2. Add your N8N Google account
3. Set permission to "Editor"
4. Save
5. Test again
```

---

## Issue #4: "Phone numbers showing as scientific notation"

### Symptoms
- Phone numbers appear as: `6.12345E+09`
- Or numbers are truncated

### Cause
Google Sheets auto-formats numbers

### Solution

**Method 1: Pre-format column**
```
1. Open Google Sheet
2. Select entire Column E (Telefoon)
3. Format → Number → Plain text
4. Delete test rows
5. Resubmit form
```

**Method 2: Force text format in N8N**
```
In Google Sheets node, update Telefoon mapping:
'Telefoon': "='{{ $json.phone }}"

The leading apostrophe forces text format.
```

---

## Issue #5: "Boolean fields showing 'false' instead of 'N/A'"

### Symptoms
- hasHighIncome shows: false (should show: N/A)
- Other booleans show true/false instead of Ja/Nee

### Cause
Formatting logic error in Set node

### Solution

**Check Set node expressions**:
```javascript
// Correct expression:
={{ $json.body.hasHighIncome === true ? 'Ja' : ($json.body.hasHighIncome === false ? 'Nee' : 'N/A') }}

// Wrong expression:
={{ $json.body.hasHighIncome ? 'Ja' : 'Nee' }}  // Missing N/A case
```

**Fix**:
1. Open "Format Data for Sheets" node
2. For each boolean field, verify expression includes N/A case
3. Save workflow
4. Test with user type that doesn't have hasHighIncome

---

## Issue #6: "Lead ID is not unique"

### Symptoms
- Multiple leads have same Lead ID
- Format is wrong (not NCNP-YYYYMMDD-XXXX)

### Cause
Random number generation not working

### Solution

**Update Set node**:
```javascript
// Current expression in "leadId" field:
=NCNP-{{ $now.format('yyyyMMdd') }}-{{ Math.floor(Math.random() * 9000) + 1000 }}

// If not working, use this:
={{ 'NCNP-' + $now.format('yyyyMMdd') + '-' + (Math.floor(Math.random() * 9000) + 1000).toString() }}
```

**Test**:
```bash
# Submit multiple times, verify each gets unique ID
for i in {1..3}; do
  curl -X POST $WEBHOOK_URL ...
done
```

---

## Issue #7: "Validation errors in Next.js"

### Symptoms
- Form won't submit
- Console shows Zod validation errors
- "Invalid phone number" message

### Possible Causes

#### Cause A: Phone Format Invalid
**Valid formats**:
```
+31612345678  ✅
0612345678    ✅
+31 6 12345678  ❌ (spaces)
06-12345678   ❌ (dashes)
```

**Solution**:
```typescript
// In assessment-schema.ts, check regex:
phone: z.string().regex(
  /^(\+31|0)[0-9]{9}$/,
  'Voer een geldig Nederlands telefoonnummer in'
)

// Frontend should strip spaces/dashes before submitting
```

#### Cause B: Missing Required Field
**Solution**:
```typescript
// Check form data before submit:
console.log('Form data:', formData);

// Ensure all required fields are present:
- userType
- hasBox3Assets
- fullName
- email
- phone
```

---

## Issue #8: "N8N execution shows 'Error' status"

### Symptoms
- Execution appears in N8N with red ❌
- Workflow fails mid-execution

### Diagnosis Steps

**1. Open execution details**:
```
1. Go to N8N → Executions
2. Click on failed execution
3. Check which node failed
4. Read error message
```

**2. Common N8N errors**:

#### "Invalid credentials"
→ Re-authenticate Google Sheets

#### "Rate limit exceeded"
→ Wait 1 minute, try again

#### "Timeout"
→ Increase timeout in Settings

#### "Cannot read property of undefined"
→ Data format mismatch, check input data

---

## Issue #9: "Form submission times out"

### Symptoms
- Form shows loading spinner forever
- Eventually shows error: "Request timeout"
- Network tab shows pending request

### Possible Causes

#### Cause A: N8N Workflow Slow
**How to check**:
```
1. Go to N8N → Executions
2. Check execution time
3. Should be <5 seconds
```

**Solution**:
```
If >10 seconds:
1. Check Google Sheets size (<1000 rows is fine)
2. Simplify workflow (remove unnecessary nodes)
3. Check N8N instance performance
```

#### Cause B: Network Issue
**How to check**:
```bash
# Test webhook speed:
time curl -X POST $WEBHOOK_URL ...

# Should complete in <5 seconds
```

**Solution**:
- Check internet connection
- Try from different network
- Contact N8N support if persists

#### Cause C: Next.js API Timeout
**How to check**:
```typescript
// In /api/assessment/submit/route.ts
// Add timeout to fetch:
const n8nResponse = await fetch(process.env.N8N_WEBHOOK_URL!, {
  method: 'POST',
  headers: { ... },
  body: JSON.stringify(payload),
  signal: AbortSignal.timeout(30000) // 30 second timeout
});
```

---

## Issue #10: "Duplicate rows in Google Sheets"

### Symptoms
- Same submission appears twice
- Multiple Lead IDs for one user

### Possible Causes

#### Cause A: Double Form Submit
**How to check**:
```javascript
// Check browser console for:
"Assessment submission error: ..."
// appearing twice
```

**Solution**:
```typescript
// In AssessmentForm.tsx, ensure:
const [isSubmitting, setIsSubmitting] = useState(false);

// And button is disabled:
disabled={!canProceed || isSubmitting}

// This prevents double-click submits
```

#### Cause B: Retry Logic
**Solution**:
```typescript
// Remove automatic retries in API route
// Only retry on specific errors (not all)
```

---

## 📊 Debugging Checklist

Use this when troubleshooting any issue:

### Frontend Debugging
```
[ ] Open browser DevTools (F12)
[ ] Check Console for JavaScript errors
[ ] Check Network tab for failed requests
[ ] Verify form data in Network payload
[ ] Check localStorage for persisted data
[ ] Test in incognito mode (rule out extensions)
```

### API Route Debugging
```
[ ] Check Next.js terminal for server errors
[ ] Add console.logs to API route
[ ] Verify environment variables are set
[ ] Test API route directly with curl
[ ] Check request/response format
```

### N8N Debugging
```
[ ] Check workflow is Active
[ ] Check Executions for errors
[ ] Open failed execution for details
[ ] Test each node individually
[ ] Verify credentials are valid
[ ] Check environment variables in N8N
```

### Google Sheets Debugging
```
[ ] Verify sheet is accessible
[ ] Check column headers match exactly
[ ] Check permissions (Editor access)
[ ] Test manual data entry
[ ] Format phone column as Plain Text
[ ] Check for hidden/filtered rows
```

---

## 🎯 Advanced Debugging

### Enable Verbose Logging in N8N

**Add "Function" node after Webhook**:
```javascript
// Log incoming data
console.log('Webhook received:', JSON.stringify($input.all(), null, 2));
return $input.all();
```

**Add logging before Google Sheets**:
```javascript
// Log formatted data
console.log('Sending to Sheets:', JSON.stringify($input.all(), null, 2));
return $input.all();
```

**View logs**:
1. Go to N8N → Executions
2. Click execution
3. Check output of Function nodes

---

### Test Each Component Independently

**1. Test N8N webhook directly** (bypass Next.js):
```bash
curl -X POST $WEBHOOK_URL \
  -H "Content-Type: application/json" \
  -d '{"userType":"Loondienst",...}'
```

**2. Test Google Sheets API** (bypass N8N):
```bash
# Use Google Sheets API Explorer
# Or write manual test script
```

**3. Test form validation** (bypass API):
```javascript
// In browser console on form page:
assessmentSchema.parse({
  userType: "Loondienst",
  hasBox3Assets: true,
  fullName: "Test",
  email: "test@example.nl",
  phone: "0612345678"
})
```

---

## 🚨 Emergency Procedures

### If workflow is completely broken

**1. Rollback to working version**:
```
1. Go to N8N workflow
2. Click "..." → Execution History
3. Find last working version
4. Restore
```

**2. Use fallback Google Form** (temporary):
```
1. Create simple Google Form
2. Update form action to Google Form URL
3. Collect leads while fixing workflow
```

**3. Manual data entry** (last resort):
```
1. Collect submissions via email
2. Manually enter into Google Sheet
3. Fix workflow offline
4. Resume automation when ready
```

---

## 📞 Getting Help

### Before asking for help, gather:

```
1. Error message (exact text)
2. N8N execution ID
3. Timestamp of issue
4. Steps to reproduce
5. What you've tried
6. Screenshots if helpful
```

### Where to get help:

**N8N Community**:
- Forum: https://community.n8n.io/
- Discord: https://discord.gg/n8n

**Google Sheets**:
- Help Center: https://support.google.com/docs

**Project Team**:
- Check project CLAUDE.md for contact info
- Review other documentation in /N8N/docs/

---

## 🎓 Learning Resources

### Understanding N8N Expressions
- [Expression Language](https://docs.n8n.io/code-examples/expressions/)
- [Functions Reference](https://docs.n8n.io/code-examples/expressions/functions/)

### Google Sheets API
- [Sheets API Docs](https://developers.google.com/sheets/api)
- [Best Practices](https://developers.google.com/sheets/api/guides/concepts)

### Next.js API Routes
- [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- [Error Handling](https://nextjs.org/docs/app/building-your-application/routing/error-handling)

---

## ✅ Prevention Checklist

Avoid issues by following these practices:

### Before Deployment
- [ ] Test all scenarios (see testing-guide.md)
- [ ] Verify environment variables
- [ ] Check Google Sheet access
- [ ] Test error handling
- [ ] Validate phone format
- [ ] Test concurrent submissions

### Regular Maintenance
- [ ] Monitor execution success rate
- [ ] Review error logs weekly
- [ ] Backup Google Sheet monthly
- [ ] Update N8N instance regularly
- [ ] Check credential expiry
- [ ] Test workflow after N8N updates

### Best Practices
- [ ] Use environment variables (not hardcoded values)
- [ ] Enable error notifications
- [ ] Document any custom changes
- [ ] Keep workflow simple (fewer nodes = fewer bugs)
- [ ] Version control workflow JSON
- [ ] Test in development first

---

**Last Updated**: 2025-10-11
**Version**: 1.0
**Status**: Comprehensive ✅

# NCNP MVP Lead Capture - Quick Reference

**One-page cheat sheet for the N8N workflow**

---

## 🔗 Important URLs

```
Google Sheet: https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit
N8N Workflow: https://your-instance.n8n.cloud/workflow/YOUR_WORKFLOW_ID
Webhook URL: https://your-instance.n8n.cloud/webhook/ncnp-lead-capture
```

---

## 📋 Google Sheet Columns

Copy this header row exactly:
```
Timestamp | Lead ID | Naam | Email | Telefoon | User Type | Hoog Inkomen | Box 3 Vermogen | Verhuurd Vastgoed | Heeft BV | Extra Notities | Status | Gecontacteerd | Geschatte Besparing | Adviseur Notities
```

**Important**: Format Column E (Telefoon) as "Plain text"

---

## 🔧 Environment Variables

**Next.js** (`.env.local`):
```env
N8N_WEBHOOK_URL=https://your-instance.n8n.cloud/webhook/ncnp-lead-capture
N8N_WEBHOOK_SECRET=your-secret-here
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

**N8N** (Settings → Environment):
```env
GOOGLE_SHEET_ID=your-sheet-id-here
```

---

## ✅ Quick Test

```bash
# Set variables
WEBHOOK_URL="https://your-instance.n8n.cloud/webhook/ncnp-lead-capture"
SECRET="your-secret"

# Test webhook
curl -X POST $WEBHOOK_URL \
  -H "Content-Type: application/json" \
  -H "X-N8N-Webhook-Secret: $SECRET" \
  -d '{
    "userType": "Loondienst",
    "hasBox3Assets": true,
    "fullName": "Test User",
    "email": "test@example.nl",
    "phone": "0612345678",
    "submittedAt": "2025-10-11T12:00:00Z",
    "source": "website"
  }'
```

**Expected**: `{"success": true, "leadId": "NCNP-20251011-XXXX"}`

---

## 🐛 Quick Troubleshooting

| Issue | Quick Fix |
|-------|-----------|
| 404 error | Check workflow is Active in N8N |
| 401 error | Verify webhook secret matches |
| No data in sheet | Check Sheet ID and name "Leads" |
| Phone shows as number | Format column as Plain text |
| Workflow not found | Check webhook URL is correct |
| "false" instead of N/A | Check Set node expressions |

---

## 📊 Workflow Nodes

1. **Webhook Trigger** - Receives POST from Next.js
2. **Validate Required Fields** - Checks userType, name, email, phone
3. **Format Data for Sheets** - Converts to Dutch (Ja/Nee/N/A)
4. **Append to Google Sheets** - Writes row to "Leads" sheet
5. **Return Success** - Sends `{success: true, leadId: "..."}`
6. **Return Error** - Sends `{success: false, error: "..."}`

---

## 📝 User Types & Conditional Fields

| User Type | hasHighIncome? | hasBV? | hasRentalProperty? |
|-----------|----------------|--------|--------------------|
| Loondienst | N/A | Conditional | Conditional |
| Ondernemer | Asked | Conditional | Conditional |
| Gepensioneerd | N/A | Conditional | Conditional |
| DGA | Asked | Conditional | Conditional |

**Conditional**: Only asked if `hasBox3Assets = true` or other conditions met

---

## 🎯 Success Criteria

✅ Webhook responds in <5 seconds
✅ All required fields populated
✅ Lead ID is unique (NCNP-YYYYMMDD-XXXX)
✅ Timestamp formatted as DD-MM-YYYY HH:mm
✅ Booleans show as Ja/Nee/N/A
✅ Phone stored as text (not scientific notation)
✅ Status defaults to "Nieuw Lead"

---

## 📞 Support

- **Setup Guide**: `/N8N/docs/mvp-lead-capture-setup.md`
- **Testing Guide**: `/N8N/docs/testing-guide.md`
- **Troubleshooting**: `/N8N/docs/troubleshooting.md`
- **Workflow JSON**: `/N8N/workflows/mvp-lead-capture.json`

---

## 🔄 Common Commands

**Check N8N status**:
```bash
curl -I https://your-instance.n8n.cloud
```

**Test from Next.js**:
```bash
cd webapp
npm run dev
# Visit: http://localhost:3000/assessment
```

**Deploy to Vercel**:
```bash
vercel --prod
vercel env add N8N_WEBHOOK_URL
vercel env add N8N_WEBHOOK_SECRET
```

**Export workflow**:
```
N8N UI → Workflow → ... → Download
```

---

**Last Updated**: 2025-10-11
**Quick Reference v1.0**

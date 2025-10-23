# N8N Workflows for NCNP Tax Advisory Platform

This directory contains all N8N workflow configurations, templates, and documentation for the NCNP tax advisory automation.

---

## 📁 Directory Structure

```
N8N/
├── workflows/           # Complete workflow JSON exports
│   ├── standard-report.json
│   └── case-processing.json
├── templates/          # Reusable workflow templates
│   ├── email-templates/
│   └── pdf-templates/
├── docs/              # Workflow documentation
│   ├── standard-report.md
│   └── case-processing.md
└── README.md          # This file
```

---

## 🔄 Available Workflows

### 1. Standard Report Generator (`standard-report.json`)
**Purpose:** Generate and email standardized tax savings report for Outcome A users.

**Trigger:** Webhook from Next.js app
**Duration:** ~30 seconds
**Output:** Email with PDF report

**Key Nodes:**
- Webhook Trigger
- Data Validation
- AI/LLM Analysis
- PDF Generation
- Email Delivery
- Error Handling

[View Documentation](./docs/standard-report.md)

---

### 2. Case Processing Pipeline (`case-processing.json`)
**Purpose:** Full document analysis, AI processing, and report generation for Outcome B users.

**Trigger:** Webhook from Next.js app (after all docs uploaded + contract signed)
**Duration:** ~5-15 minutes (excluding manual approval)
**Output:** Final tax advisory report

**Key Nodes:**
- Webhook Trigger
- Supabase Data Fetch
- Document Download
- Status Update (Under Review)
- OCR/Text Extraction
- AI Tax Analysis
- Draft Report Generation
- **Manual Approval Node** (Fiscalist)
- Final Report Submission
- API Callback to App
- Error Handling

[View Documentation](./docs/case-processing.md)

---

## 🔐 Environment Variables Required

Configure these in your N8N instance (Cloud or Self-hosted):

### Web App Integration
```env
WEBAPP_API_URL=https://ncnp.vercel.app/api/v1
WEBAPP_API_KEY=your-secure-api-key-here
```

### Supabase Access
```env
SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_SERVICE_KEY=eyJxxx...
```

### AI/LLM Provider
```env
# Choose one:
OPENAI_API_KEY=sk-xxx...
ANTHROPIC_API_KEY=sk-ant-xxx...
# or other provider
```

### Email Service (if not using N8N built-in)
```env
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=noreply@ncnp.nl
SMTP_PASSWORD=xxx
```

---

## 📝 Webhook Endpoints

### Production
```
Base URL: https://your-instance.n8n.cloud

Webhook 1: /webhook/generate-standard-report
Webhook 2: /webhook/start-case-processing
```

### Development
```
Base URL: http://localhost:5678 (if self-hosted)

Webhook 1: /webhook-test/generate-standard-report
Webhook 2: /webhook-test/start-case-processing
```

---

## 🔗 API Callbacks to Next.js

### 1. Update Case Status
```http
POST {{WEBAPP_API_URL}}/update-case-status
Authorization: Bearer {{WEBAPP_API_KEY}}

{
  "case_id": "...",
  "status": "Under Review",
  "details": "Processing documents"
}
```

### 2. Submit Final Report
```http
POST {{WEBAPP_API_URL}}/submit-report
Authorization: Bearer {{WEBAPP_API_KEY}}

{
  "case_id": "...",
  "report_url": "https://...",
  "summary": "...",
  "potential_savings_eur": 3500.00,
  "fiscalist_name": "Jan de Vries"
}
```

---

## 🛠️ Setup Instructions

### 1. Import Workflows

**Via N8N UI:**
1. Log into your N8N instance
2. Go to **Workflows** → **Import from File**
3. Select `workflows/standard-report.json`
4. Repeat for `workflows/case-processing.json`

**Via N8N API:**
```bash
curl -X POST https://your-instance.n8n.cloud/api/v1/workflows \
  -H "X-N8N-API-KEY: your-api-key" \
  -H "Content-Type: application/json" \
  -d @workflows/standard-report.json
```

### 2. Configure Credentials

**Supabase Credential:**
1. Go to **Credentials** → **Add Credential**
2. Select **Supabase** (or HTTP Request with custom auth)
3. Enter:
   - Project URL: `{{SUPABASE_URL}}`
   - API Key: `{{SUPABASE_SERVICE_KEY}}`

**OpenAI Credential (or other LLM):**
1. Add credential for your chosen AI provider
2. Enter API key

**Email Credential:**
1. Add SMTP credential
2. Enter server details

### 3. Activate Webhooks

1. Open each workflow
2. Click on Webhook node
3. Enable **Production URL**
4. Copy webhook URL
5. Add to Next.js environment variables

### 4. Test Workflows

**Test Standard Report:**
```bash
curl -X POST https://your-instance.n8n.cloud/webhook/generate-standard-report \
  -H "Content-Type: application/json" \
  -H "X-N8N-Webhook-Secret: your-secret" \
  -d '{
    "email": "test@example.nl",
    "form_data": {
      "user_type": "Particulier",
      "estimated_annual_income": "50000",
      "tax_year_of_interest": "2024"
    }
  }'
```

**Test Case Processing:**
```bash
curl -X POST https://your-instance.n8n.cloud/webhook/start-case-processing \
  -H "Content-Type: application/json" \
  -H "X-N8N-Webhook-Secret: your-secret" \
  -d '{
    "case_id": "test-case-id-123",
    "user_id": "test-user-id-456"
  }'
```

---

## 📊 Monitoring & Logging

### View Executions
1. Go to **Executions** in N8N UI
2. Filter by workflow name
3. Check success/failure rates

### Enable Debug Mode
1. Open workflow
2. Enable **Debug** mode
3. View detailed logs for each node

### Set Up Error Notifications
1. Add **Error Trigger** node to workflows
2. Connect to email/Slack notification
3. Get alerted on workflow failures

---

## 🎯 Best Practices

### Error Handling
- Always include error catch nodes
- Log errors to database or external service
- Send admin notifications on critical failures
- Implement retry logic for transient errors

### Performance
- Minimize API calls (batch when possible)
- Use N8N's built-in caching
- Optimize AI prompts for speed
- Set appropriate timeouts

### Security
- Use environment variables for all secrets
- Enable webhook authentication
- Validate all input data
- Use secure connections (HTTPS/TLS)

### Maintenance
- Export workflows regularly (version control)
- Document all changes
- Test in development first
- Keep dependencies updated

---

## 🔍 Troubleshooting

### Common Issues

**Webhook not triggering:**
- Check webhook URL is correct in Next.js
- Verify webhook secret matches
- Check N8N instance is running
- Review webhook authentication settings

**Supabase connection fails:**
- Verify service key is correct
- Check URL format (must include https://)
- Ensure RLS policies allow service role access

**AI/LLM errors:**
- Check API key validity
- Review rate limits
- Verify prompt format
- Check model availability

**Email delivery fails:**
- Test SMTP credentials
- Check firewall/port settings
- Verify recipient email format
- Review email content (spam filters)

**Manual approval not working:**
- Check fiscalist email is configured
- Verify approval node is set up correctly
- Test notification delivery

---

## 📚 Resources

### N8N Documentation
- [N8N Docs](https://docs.n8n.io/)
- [Webhook Trigger](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/)
- [HTTP Request](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest/)
- [Error Handling](https://docs.n8n.io/workflows/error-handling/)

### Supabase Integration
- [Supabase API Docs](https://supabase.com/docs/reference/javascript)
- [Storage API](https://supabase.com/docs/reference/javascript/storage)

### AI/LLM Integration
- [OpenAI API](https://platform.openai.com/docs)
- [Anthropic Claude](https://docs.anthropic.com/)

---

## 🚀 Workflow Development Workflow

1. **Design** → Document workflow in `/docs/`
2. **Build** → Create workflow in N8N UI
3. **Test** → Test with sample data
4. **Export** → Export JSON to `/workflows/`
5. **Version Control** → Commit to Git
6. **Deploy** → Import to production N8N
7. **Monitor** → Track executions and errors

---

## 📝 Changelog

### v1.0.0 - Initial Setup
- Created directory structure
- Documented workflow requirements
- Set up environment variables template

---

**Last Updated:** 2025-09-23
**Status:** Ready for Workflow Development
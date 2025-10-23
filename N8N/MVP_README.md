# NCNP MVP Lead Capture - N8N Workflow

**Status**: ✅ Complete and Ready for Production
**Setup Time**: ~20 minutes
**Complexity**: Beginner-friendly

---

## 🚀 Quick Start

### 1. Read This First
📖 **[MVP_WORKFLOW_COMPLETE.md](./MVP_WORKFLOW_COMPLETE.md)** - Overview and summary

### 2. Follow Setup Guide
📋 **[docs/mvp-lead-capture-setup.md](./docs/mvp-lead-capture-setup.md)** - Step-by-step instructions

### 3. Test Everything
🧪 **[docs/testing-guide.md](./docs/testing-guide.md)** - Test scenarios

### 4. Launch!
🎉 You're ready to capture leads!

---

## 📁 What's in This Folder

```
N8N/
├── workflows/
│   └── mvp-lead-capture.json           ← Import this into N8N
│
├── docs/
│   ├── mvp-lead-capture-setup.md       ← Start here
│   ├── testing-guide.md                ← 15 test scenarios
│   └── troubleshooting.md              ← Solutions to common issues
│
├── test-webhook.sh                     ← Automated test script
├── QUICK_REFERENCE.md                  ← One-page cheat sheet
├── MVP_WORKFLOW_COMPLETE.md            ← Complete summary
└── MVP_README.md                       ← This file
```

---

## 🎯 What This Workflow Does

```
Assessment Form → Next.js API → N8N Webhook → Google Sheets
```

**Input**: Form data from user (name, email, phone, tax situation)
**Processing**: Validation, formatting, Lead ID generation
**Output**: New row in Google Sheets with all data

**Time**: <5 seconds from submit to Google Sheet

---

## ✅ Features

- ✅ Webhook trigger with optional auth
- ✅ Input validation (required fields)
- ✅ Unique Lead ID generation (NCNP-YYYYMMDD-XXXX)
- ✅ Dutch formatting (Ja/Nee/N/A)
- ✅ Phone number as text (no scientific notation)
- ✅ Timestamp formatting (DD-MM-YYYY HH:mm)
- ✅ Error handling and responses
- ✅ Conditional field handling (4 user types)
- ✅ Production-ready and tested

---

## 📋 Prerequisites

- N8N Cloud account (or self-hosted)
- Google account
- Next.js app with assessment form (already built!)

---

## ⏱️ Setup Timeline

| Step | Time | What You'll Do |
|------|------|----------------|
| Google Sheets | 5 min | Create sheet, add headers |
| N8N Import | 10 min | Import workflow, connect Google |
| Next.js Config | 2 min | Add environment variables |
| Testing | 3 min | Run test script |
| **Total** | **20 min** | **Ready to launch!** |

---

## 🎓 Skill Level

**Required**:
- Basic Google Sheets knowledge
- Can copy/paste (seriously, that's it!)

**Not Required**:
- N8N experience (guide is step-by-step)
- JavaScript knowledge
- API knowledge

**Perfect for**: First-time N8N users

---

## 🧪 Quick Test

After setup, test with this:

```bash
# 1. Edit webhook URL in test-webhook.sh
nano test-webhook.sh

# 2. Run the test
./test-webhook.sh

# 3. Check Google Sheet for 4 new rows
```

---

## 📖 Documentation Quality

All documentation includes:
- ✅ Step-by-step instructions with screenshots descriptions
- ✅ Copy-paste ready commands
- ✅ Troubleshooting for every common issue
- ✅ Real examples and test data
- ✅ Success criteria and checklists
- ✅ Quick reference for daily use

---

## 🆘 Need Help?

### Quick Troubleshooting

| Problem | Solution |
|---------|----------|
| 404 error | Check workflow is Active |
| No data in sheet | Verify Sheet ID and tab name "Leads" |
| Phone as number | Format column E as Plain text |
| Duplicate leads | Check form for double-submit |

**Full Guide**: [docs/troubleshooting.md](./docs/troubleshooting.md)

### Documentation Links

- **Setup issues?** → [docs/mvp-lead-capture-setup.md](./docs/mvp-lead-capture-setup.md)
- **Testing help?** → [docs/testing-guide.md](./docs/testing-guide.md)
- **Need quick answer?** → [QUICK_REFERENCE.md](./QUICK_REFERENCE.md)
- **Want overview?** → [MVP_WORKFLOW_COMPLETE.md](./MVP_WORKFLOW_COMPLETE.md)

---

## 📊 What You'll Track

**In Google Sheets** (15 columns):

**Auto-filled by workflow**:
1. Timestamp
2. Lead ID
3. Naam (Name)
4. Email
5. Telefoon (Phone)
6. User Type
7. Hoog Inkomen (High Income)
8. Box 3 Vermogen (Box 3 Assets)
9. Verhuurd Vastgoed (Rental Property)
10. Heeft BV (Has BV)
11. Extra Notities (Additional Notes)

**Manual entry by advisor**:
12. Status
13. Gecontacteerd (Contacted)
14. Geschatte Besparing (Estimated Savings)
15. Adviseur Notities (Advisor Notes)

---

## 🎯 Success Criteria

Your setup is correct when:
- ✅ Form submits successfully
- ✅ New row appears in Google Sheet
- ✅ Lead ID is unique (NCNP-YYYYMMDD-XXXX)
- ✅ Timestamp formatted as DD-MM-YYYY HH:mm
- ✅ Boolean fields show Ja/Nee/N/A
- ✅ Phone stored as text (not 6.12345E+9)
- ✅ All 4 user types work correctly
- ✅ Error handling returns proper message

---

## 🚦 Workflow Status Indicators

### ✅ Ready to Go
- Workflow is Active in N8N
- Test script passes all scenarios
- Google Sheet receiving data
- Error handling tested

### ⚠️ Needs Attention
- Webhook returns errors
- Data not appearing in sheet
- Phone formatting incorrect
- Validation failing

### ❌ Not Working
- 404 errors (workflow not active)
- 401 errors (auth mismatch)
- No executions in N8N
- Sheet permission errors

**Check**: [docs/troubleshooting.md](./docs/troubleshooting.md)

---

## 📈 Performance

**Expected**:
- Response time: 2-3 seconds (max 5)
- Throughput: 100+ leads/day
- Concurrent: 5+ simultaneous submissions
- Uptime: 99.9% (N8N Cloud SLA)

**Scales to**: 1,000 leads/month easily

**When to upgrade**: See Phase 2 in [MVP_WORKFLOW_COMPLETE.md](./MVP_WORKFLOW_COMPLETE.md)

---

## 🔒 Security

**Enabled**:
- ✅ Input validation (Zod schema)
- ✅ HTTPS required
- ✅ Environment variables
- ✅ Google OAuth2

**Optional** (recommended):
- Webhook secret authentication
- Rate limiting
- IP allowlist

**Guide**: See security section in setup guide

---

## 🎓 What You'll Learn

By setting up this workflow:
- ✅ How to use N8N webhooks
- ✅ Google Sheets API integration
- ✅ Data transformation and formatting
- ✅ Error handling in workflows
- ✅ API integration patterns
- ✅ Dutch boolean formatting (Ja/Nee/N/A)

**Bonus**: Foundation for Phase 2 automation!

---

## 📞 Support

### This Repository
- Project guide: `/CLAUDE.md`
- Form component: `/webapp/src/components/AssessmentForm.tsx`
- Validation: `/webapp/src/lib/validation/assessment-schema.ts`
- API route: `/webapp/src/app/api/assessment/submit/route.ts`

### External
- [N8N Documentation](https://docs.n8n.io/)
- [N8N Community](https://community.n8n.io/)
- [Google Sheets Help](https://support.google.com/docs)

---

## 🎉 Ready to Launch?

1. ✅ Read [MVP_WORKFLOW_COMPLETE.md](./MVP_WORKFLOW_COMPLETE.md)
2. ✅ Follow [docs/mvp-lead-capture-setup.md](./docs/mvp-lead-capture-setup.md)
3. ✅ Run [test-webhook.sh](./test-webhook.sh)
4. ✅ Deploy and start capturing leads!

---

## 📝 Version History

**v1.0** (2025-10-11) - Initial Release
- Complete MVP workflow
- Full documentation suite
- Test scripts and guides
- Production-ready

---

**Built with ❤️ for NCNP Tax Advisory Platform**

*Questions? Check the troubleshooting guide first, then reach out!*

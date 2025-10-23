# NCNP MVP - Next Steps to Launch

**Current Status**: Landing Page Complete ✅ | Form Ready ✅ | N8N Integration Pending ⏳

**Last Updated**: 2025-10-09

---

## 🎯 Quick Launch Checklist

### Phase 1: Content & Quality Review (30-60 min)

- [ ] Proofread all Dutch text for grammar and spelling
- [ ] Verify testimonial content and savings amounts are accurate
- [ ] Check that all metrics in Impact section are up-to-date
- [ ] Ensure contact information is correct (email, phone)
- [ ] Review GDPR/AVG compliance mentions
- [ ] Test all internal navigation links

### Phase 2: N8N Setup (1-2 hours)

Follow [`N8N_SETUP_GUIDE.md`](N8N_SETUP_GUIDE.md) in order:

- [ ] **Part 1**: Create Google Sheet "NCNP Leads" with proper columns (15 min)
- [ ] **Part 2**: Set up Google Cloud service account (30 min)
- [ ] **Part 3**: Build N8N workflow with 4 nodes (45 min)
- [ ] **Part 4**: Update `.env.local` with webhook URL (2 min)
- [ ] **Part 5**: Test with curl command (5 min)

### Then: Local Testing (30 min)

- [ ] Restart dev server (to load new env vars)
- [ ] Go to `http://localhost:3001/assessment`
- [ ] Fill out and submit test form
- [ ] Check Google Sheet for new row
- [ ] Submit 5-10 test forms with different data
- [ ] Verify all fields map correctly

### Finally: Deploy to Production (45 min)

- [ ] Build locally: `npm run build` (check for errors)
- [ ] Commit all changes: `git add .` && `git commit -m "feat: complete MVP form and integration"`
- [ ] Push to GitHub: `git push origin main`
- [ ] Deploy to Vercel (auto-deploy or manual)
- [ ] Add production environment variables in Vercel:
  - `N8N_WEBHOOK_URL` (from N8N)
  - `N8N_WEBHOOK_SECRET` (optional)
  - `NEXT_PUBLIC_APP_URL` (your Vercel URL)
- [ ] Test production form submission
- [ ] Verify Google Sheet receives production data
- [ ] Test on real mobile device

### Launch! (15 min)

- [ ] Final smoke test of entire flow
- [ ] Share link with 2-3 friends for feedback
- [ ] Monitor Google Sheet for first real submissions
- [ ] Respond to test leads within 24 hours

---

## 🆘 If You Get Stuck

### N8N webhook not working?
- Check workflow is **Active** (toggle in N8N)
- Verify webhook URL is correct in `.env.local`
- Test webhook directly with curl (see guide)
- Check N8N execution logs for errors

### Google Sheet not updating?
- Verify service account has **Editor** permission
- Check sheet name is exactly "Leads"
- Review N8N node configuration
- Test N8N workflow manually with test data

### Form validation errors?
- Check browser console for specific error
- Verify all required fields are filled
- Test phone number format: +31612345678 or 0612345678
- Email must be valid format

### Deployment fails?
- Check Vercel build logs
- Ensure all dependencies in package.json
- Verify environment variables are set
- Try local build first: `npm run build`

---

## 📞 Testing Commands

### Test N8N directly:
```bash
curl -X POST https://your-instance.n8n.cloud/webhook/ncnp-lead-capture \
  -H "Content-Type: application/json" \
  -d '{
    "userType": "Particulier",
    "incomeRange": "€50,000 - €75,000",
    "taxYear": "2024",
    "fullName": "Test User",
    "email": "test@example.nl",
    "phone": "+31612345678",
    "additionalNotes": "Test",
    "submittedAt": "2024-10-03T12:00:00Z",
    "source": "website",
    "userAgent": "curl-test"
  }'
```

### Test API route locally:
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
    "additionalNotes": "BV eigenaar",
    "submittedAt": "2024-10-03T13:00:00Z",
    "source": "website"
  }'
```

---

## 📂 Files You Created Today

**Frontend**:
- `webapp/src/components/AssessmentForm.tsx` - Main form (500+ lines)
- `webapp/src/lib/validation/assessment-schema.ts` - Validation

**Backend**:
- `webapp/src/app/api/assessment/submit/route.ts` - API endpoint

**Documentation**:
- `N8N_SETUP_GUIDE.md` - Complete N8N guide
- `TODAY_SUMMARY.md` - What we accomplished
- `NEXT_STEPS.md` - This file

---

## ⏱️ Time Remaining

**Estimated**: 2.5-3 hours to launch

- N8N setup: 1-2 hours
- Testing: 30 min
- Deployment: 45 min
- Final checks: 15 min

---

## 🎉 You're Almost There!

The hard work is done:
- ✅ Beautiful form with animations
- ✅ Full validation (client + server)
- ✅ API route ready
- ✅ Landing page content
- ✅ Mobile responsive
- ✅ Dutch throughout

Just need to:
- ⏳ Connect N8N
- ⏳ Test
- ⏳ Deploy

**You've got this! 🚀**

---

## 📋 Post-Launch TODO

After first few leads come in:

- [ ] Respond to leads within 24 hours (as promised!)
- [ ] Update "Status" column in Google Sheet as you contact people
- [ ] Track conversion metrics
- [ ] Collect feedback from first 10 leads
- [ ] Adjust form/process based on learnings
- [ ] Consider adding email confirmation (N8N node)
- [ ] Set up lead notifications (Slack/Email via N8N)

---

**Next step**: Open `N8N_SETUP_GUIDE.md` and start Part 1! 📖

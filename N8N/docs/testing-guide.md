# NCNP MVP Lead Capture - Testing Guide

**Purpose**: Comprehensive testing scenarios for the N8N lead capture workflow

---

## 🧪 Quick Test Suite

### Test 1: Basic Webhook Test

```bash
# Set your webhook URL
WEBHOOK_URL="https://your-instance.n8n.cloud/webhook/ncnp-lead-capture"
WEBHOOK_SECRET="your-secret-here"

# Test basic submission
curl -X POST $WEBHOOK_URL \
  -H "Content-Type: application/json" \
  -H "X-N8N-Webhook-Secret: $WEBHOOK_SECRET" \
  -d '{
    "userType": "Loondienst",
    "hasHighIncome": false,
    "hasBox3Assets": true,
    "hasRentalProperty": false,
    "hasBV": false,
    "fullName": "Test Gebruiker",
    "email": "test@example.nl",
    "phone": "+31612345678",
    "additionalNotes": "Test submission",
    "submittedAt": "2025-10-11T12:00:00Z",
    "source": "website"
  }'
```

**Expected Result**:
```json
{
  "success": true,
  "leadId": "NCNP-20251011-XXXX"
}
```

---

## 📋 Test Scenarios

### Scenario 1: Loondienst (Employee)

```bash
curl -X POST $WEBHOOK_URL \
  -H "Content-Type: application/json" \
  -H "X-N8N-Webhook-Secret: $WEBHOOK_SECRET" \
  -d '{
    "userType": "Loondienst",
    "hasBox3Assets": true,
    "hasRentalProperty": true,
    "hasBV": false,
    "fullName": "Jan de Vries",
    "email": "jan@example.nl",
    "phone": "0612345678",
    "additionalNotes": "Heeft huurinkomsten van €1200/maand",
    "submittedAt": "2025-10-11T12:00:00Z",
    "source": "website"
  }'
```

**Verify in Google Sheet**:
- User Type: Loondienst
- Hoog Inkomen: N/A (not asked for Loondienst)
- Box 3 Vermogen: Ja
- Verhuurd Vastgoed: Ja
- Heeft BV: Nee

---

### Scenario 2: Ondernemer with High Income

```bash
curl -X POST $WEBHOOK_URL \
  -H "Content-Type: application/json" \
  -H "X-N8N-Webhook-Secret: $WEBHOOK_SECRET" \
  -d '{
    "userType": "Ondernemer",
    "hasHighIncome": true,
    "hasBox3Assets": true,
    "hasRentalProperty": false,
    "hasBV": true,
    "fullName": "Maria Jansen",
    "email": "maria@example.nl",
    "phone": "+31687654321",
    "additionalNotes": "ZZP-er met eigen BV, overweegt restructurering",
    "submittedAt": "2025-10-11T13:00:00Z",
    "source": "website"
  }'
```

**Verify in Google Sheet**:
- User Type: Ondernemer
- Hoog Inkomen: Ja
- Box 3 Vermogen: Ja
- Verhuurd Vastgoed: Nee
- Heeft BV: Ja

---

### Scenario 3: Gepensioneerd (Retired)

```bash
curl -X POST $WEBHOOK_URL \
  -H "Content-Type: application/json" \
  -H "X-N8N-Webhook-Secret: $WEBHOOK_SECRET" \
  -d '{
    "userType": "Gepensioneerd",
    "hasBox3Assets": true,
    "hasRentalProperty": true,
    "hasBV": false,
    "fullName": "Piet Bakker",
    "email": "piet@example.nl",
    "phone": "0698765432",
    "additionalNotes": "",
    "submittedAt": "2025-10-11T14:00:00Z",
    "source": "website"
  }'
```

**Verify in Google Sheet**:
- User Type: Gepensioneerd
- Hoog Inkomen: N/A
- Box 3 Vermogen: Ja
- Verhuurd Vastgoed: Ja
- Extra Notities: (empty)

---

### Scenario 4: DGA (Director Major Shareholder)

```bash
curl -X POST $WEBHOOK_URL \
  -H "Content-Type: application/json" \
  -H "X-N8N-Webhook-Secret: $WEBHOOK_SECRET" \
  -d '{
    "userType": "DGA",
    "hasHighIncome": true,
    "hasBox3Assets": true,
    "hasRentalProperty": false,
    "hasBV": true,
    "fullName": "Sarah van den Berg",
    "email": "sarah@example.nl",
    "phone": "+31623456789",
    "additionalNotes": "Wil graag advies over dividenduitkering vs salaris",
    "submittedAt": "2025-10-11T15:00:00Z",
    "source": "website"
  }'
```

**Verify in Google Sheet**:
- User Type: DGA
- Hoog Inkomen: Ja
- Box 3 Vermogen: Ja
- Verhuurd Vastgoed: Nee
- Heeft BV: Ja

---

### Scenario 5: Minimal Data (No Optional Fields)

```bash
curl -X POST $WEBHOOK_URL \
  -H "Content-Type: application/json" \
  -H "X-N8N-Webhook-Secret: $WEBHOOK_SECRET" \
  -d '{
    "userType": "Loondienst",
    "hasBox3Assets": false,
    "fullName": "Test User",
    "email": "minimal@example.nl",
    "phone": "0611111111",
    "submittedAt": "2025-10-11T16:00:00Z",
    "source": "website"
  }'
```

**Verify in Google Sheet**:
- All required fields populated
- Optional boolean fields: N/A
- Extra Notities: (empty)

---

## ❌ Error Test Cases

### Test 6: Missing Required Field

```bash
curl -X POST $WEBHOOK_URL \
  -H "Content-Type: application/json" \
  -H "X-N8N-Webhook-Secret: $WEBHOOK_SECRET" \
  -d '{
    "userType": "Loondienst",
    "email": "test@example.nl"
  }'
```

**Expected Result**:
```json
{
  "success": false,
  "error": "Kon gegevens niet opslaan. Probeer het later opnieuw."
}
```

Status: 500

---

### Test 7: Invalid Email Format

```bash
curl -X POST $WEBHOOK_URL \
  -H "Content-Type: application/json" \
  -H "X-N8N-Webhook-Secret: $WEBHOOK_SECRET" \
  -d '{
    "userType": "Loondienst",
    "hasBox3Assets": true,
    "fullName": "Test User",
    "email": "not-an-email",
    "phone": "0612345678",
    "submittedAt": "2025-10-11T12:00:00Z",
    "source": "website"
  }'
```

**Note**: This should be caught by frontend validation first, but test anyway.

---

### Test 8: Wrong Webhook Secret

```bash
curl -X POST $WEBHOOK_URL \
  -H "Content-Type: application/json" \
  -H "X-N8N-Webhook-Secret: wrong-secret" \
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

**Expected**: 401 Unauthorized (if auth enabled)

---

## 🎯 Integration Tests (Next.js → N8N)

### Test 9: Full Form Submission (Local)

1. Start Next.js dev server:
```bash
cd webapp
npm run dev
```

2. Open browser: `http://localhost:3000/assessment`

3. Fill out form:
   - Step 1: Select "Ondernemer"
   - Step 2: Has High Income? → Yes
   - Step 3: Box 3 Assets? → Yes
   - Step 4: Rental Property? → No
   - Step 5: Has BV? → Yes
   - Step 6: Result summary (auto)
   - Step 7: Contact info:
     - Name: Your Name
     - Email: your@email.nl
     - Phone: 0612345678
   - Step 8: Notes: "Test via browser"

4. Submit and verify:
   - ✅ Success message appears
   - ✅ Network tab shows 200 response
   - ✅ Google Sheet has new row
   - ✅ Lead ID is generated

---

### Test 10: Form Validation

Test that frontend prevents invalid submissions:

1. Try submitting without selecting user type → Blocked
2. Try submitting without email → Blocked
3. Try invalid phone format (e.g., "123") → Shows error
4. Try invalid email (e.g., "test") → Shows error
5. Try >500 chars in notes → Blocked at 500

---

## 📊 Performance Tests

### Test 11: Concurrent Submissions

```bash
# Send 5 submissions simultaneously
for i in {1..5}; do
  curl -X POST $WEBHOOK_URL \
    -H "Content-Type: application/json" \
    -H "X-N8N-Webhook-Secret: $WEBHOOK_SECRET" \
    -d "{
      \"userType\": \"Loondienst\",
      \"hasBox3Assets\": true,
      \"fullName\": \"Test User $i\",
      \"email\": \"test$i@example.nl\",
      \"phone\": \"06123456$i\",
      \"submittedAt\": \"$(date -u +%Y-%m-%dT%H:%M:%SZ)\",
      \"source\": \"website\"
    }" &
done
wait
```

**Verify**:
- All 5 rows appear in Google Sheet
- All have unique Lead IDs
- No data corruption
- Response time <5 seconds each

---

### Test 12: Large Notes Field

```bash
curl -X POST $WEBHOOK_URL \
  -H "Content-Type: application/json" \
  -H "X-N8N-Webhook-Secret: $WEBHOOK_SECRET" \
  -d '{
    "userType": "Ondernemer",
    "hasHighIncome": true,
    "hasBox3Assets": true,
    "fullName": "Test User",
    "email": "test@example.nl",
    "phone": "0612345678",
    "additionalNotes": "'"$(printf 'X%.0s' {1..500})"'",
    "submittedAt": "2025-10-11T12:00:00Z",
    "source": "website"
  }'
```

**Verify**: 500 character notes field is handled correctly

---

## 🔍 Data Validation Tests

### Test 13: Phone Number Formats

Test various Dutch phone formats:

```bash
# Format 1: +31 format
phone="+31612345678"

# Format 2: 06 format
phone="0612345678"

# Format 3: International with spaces (should be cleaned by frontend)
phone="+31 6 12 34 56 78"
```

**Verify**: All appear correctly in Google Sheets (as text, not scientific notation)

---

### Test 14: Special Characters in Notes

```bash
curl -X POST $WEBHOOK_URL \
  -H "Content-Type: application/json" \
  -H "X-N8N-Webhook-Secret: $WEBHOOK_SECRET" \
  -d '{
    "userType": "Loondienst",
    "hasBox3Assets": true,
    "fullName": "Test User",
    "email": "test@example.nl",
    "phone": "0612345678",
    "additionalNotes": "Test met speciale karakters: €250,000 & 50% aftrek, \"quotes\", en\nnewlines",
    "submittedAt": "2025-10-11T12:00:00Z",
    "source": "website"
  }'
```

**Verify**: Special characters display correctly in Google Sheets

---

## 📝 Manual Testing Checklist

Use this checklist when testing the full flow:

### Pre-Launch Checklist
- [ ] Google Sheet created with correct headers
- [ ] N8N workflow is Active
- [ ] Test webhook with curl (passes)
- [ ] Phone column formatted as Plain Text
- [ ] All user types tested
- [ ] Error handling tested
- [ ] Lead ID generation works
- [ ] Timestamp format correct
- [ ] Ja/Nee/N/A values correct

### Post-Deployment Checklist
- [ ] Test on production URL
- [ ] Test from mobile device
- [ ] Verify production env vars
- [ ] Monitor first 5 real submissions
- [ ] Check Google Sheet permissions
- [ ] Verify email notifications (if added)
- [ ] Test admin access to sheet

---

## 🎯 Acceptance Criteria

**The workflow is ready for production when**:

✅ All test scenarios pass (1-14)
✅ Error handling works correctly
✅ Google Sheet updates reliably
✅ Response time <5 seconds
✅ Phone numbers stored as text
✅ Lead IDs are unique
✅ No data loss or corruption
✅ Concurrent submissions work
✅ Frontend to backend integration works
✅ Production environment tested

---

## 🐛 Common Test Failures & Solutions

### "Webhook returns 404"
→ Check workflow is Active in N8N

### "Data appears in wrong columns"
→ Verify header row matches exactly

### "Phone shows as 6.12345e+9"
→ Format phone column as Plain Text

### "Lead ID is same for multiple submissions"
→ Check random number generation in Set node

### "hasHighIncome shows 'false' instead of 'N/A'"
→ Check conditional logic in Format Data node

### "Duplicate rows appearing"
→ Check if form is submitting twice (remove duplicate event handlers)

---

## 📊 Test Results Template

Use this to track your testing:

```
NCNP MVP Lead Capture - Test Results
Date: [Date]
Tester: [Name]
Environment: [Local/Production]

| Test # | Scenario | Result | Notes |
|--------|----------|--------|-------|
| 1 | Basic webhook | ✅ Pass | Lead ID: NCNP-... |
| 2 | Loondienst | ✅ Pass | |
| 3 | Ondernemer | ✅ Pass | |
| 4 | Gepensioneerd | ✅ Pass | |
| 5 | DGA | ✅ Pass | |
| 6 | Minimal data | ✅ Pass | |
| 7 | Missing field | ✅ Pass | Error handled |
| 8 | Invalid email | ✅ Pass | |
| 9 | Wrong secret | ✅ Pass | 401 returned |
| 10 | Browser form | ✅ Pass | |
| 11 | Form validation | ✅ Pass | |
| 12 | Concurrent | ✅ Pass | 5/5 succeeded |
| 13 | Large notes | ✅ Pass | |
| 14 | Phone formats | ✅ Pass | |
| 15 | Special chars | ✅ Pass | |

Overall Status: ✅ READY / ⚠️ ISSUES FOUND / ❌ NOT READY
```

---

## 🚀 Ready to Go Live?

Once all tests pass:

1. ✅ Test suite completed
2. ✅ Production environment configured
3. ✅ Monitoring set up
4. ✅ Error notifications enabled
5. ✅ Team trained on Google Sheet
6. ✅ Backup plan ready

**You're ready to launch!** 🎉

---

**Last Updated**: 2025-10-11
**Version**: 1.0

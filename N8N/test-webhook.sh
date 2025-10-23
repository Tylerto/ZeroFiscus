#!/bin/bash

###############################################################################
# NCNP MVP Lead Capture - Webhook Test Script
# Usage: ./test-webhook.sh
#
# Before running:
# 1. chmod +x test-webhook.sh
# 2. Edit WEBHOOK_URL and WEBHOOK_SECRET below
# 3. Run: ./test-webhook.sh
###############################################################################

# Configuration
WEBHOOK_URL="https://your-instance.n8n.cloud/webhook/ncnp-lead-capture"
WEBHOOK_SECRET="your-secret-here"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Check if configuration is set
if [[ "$WEBHOOK_URL" == *"your-instance"* ]]; then
    echo -e "${RED}❌ Error: Please update WEBHOOK_URL in this script${NC}"
    exit 1
fi

# Print header
echo -e "${BLUE}╔════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║   NCNP MVP Lead Capture - Webhook Test        ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════════════╝${NC}"
echo ""

# Function to run test
run_test() {
    local test_name=$1
    local payload=$2
    local expected_status=$3

    echo -e "${YELLOW}Testing: $test_name${NC}"

    response=$(curl -s -w "\n%{http_code}" -X POST "$WEBHOOK_URL" \
        -H "Content-Type: application/json" \
        -H "X-N8N-Webhook-Secret: $WEBHOOK_SECRET" \
        -d "$payload")

    http_code=$(echo "$response" | tail -n1)
    body=$(echo "$response" | sed '$d')

    if [ "$http_code" == "$expected_status" ]; then
        echo -e "${GREEN}✅ Pass${NC} - Status: $http_code"
        echo -e "   Response: $body"
    else
        echo -e "${RED}❌ Fail${NC} - Expected: $expected_status, Got: $http_code"
        echo -e "   Response: $body"
    fi
    echo ""
}

# Test 1: Basic valid submission
echo -e "${BLUE}Test 1: Basic Valid Submission (Loondienst)${NC}"
run_test "Loondienst user" '{
    "userType": "Loondienst",
    "hasBox3Assets": true,
    "hasRentalProperty": false,
    "hasBV": false,
    "fullName": "Test Gebruiker",
    "email": "test@example.nl",
    "phone": "0612345678",
    "additionalNotes": "Test submission via script",
    "submittedAt": "'$(date -u +%Y-%m-%dT%H:%M:%SZ)'",
    "source": "website"
}' "200"

# Test 2: Ondernemer with high income
echo -e "${BLUE}Test 2: Ondernemer with High Income${NC}"
run_test "Ondernemer user" '{
    "userType": "Ondernemer",
    "hasHighIncome": true,
    "hasBox3Assets": true,
    "hasRentalProperty": true,
    "hasBV": true,
    "fullName": "Maria Jansen",
    "email": "maria@example.nl",
    "phone": "+31687654321",
    "additionalNotes": "ZZP-er met BV",
    "submittedAt": "'$(date -u +%Y-%m-%dT%H:%M:%SZ)'",
    "source": "website"
}' "200"

# Test 3: Gepensioneerd (minimal fields)
echo -e "${BLUE}Test 3: Gepensioneerd (Minimal Fields)${NC}"
run_test "Gepensioneerd user" '{
    "userType": "Gepensioneerd",
    "hasBox3Assets": false,
    "fullName": "Piet Bakker",
    "email": "piet@example.nl",
    "phone": "0698765432",
    "submittedAt": "'$(date -u +%Y-%m-%dT%H:%M:%SZ)'",
    "source": "website"
}' "200"

# Test 4: DGA
echo -e "${BLUE}Test 4: DGA (Director Major Shareholder)${NC}"
run_test "DGA user" '{
    "userType": "DGA",
    "hasHighIncome": true,
    "hasBox3Assets": true,
    "hasRentalProperty": false,
    "hasBV": true,
    "fullName": "Sarah van den Berg",
    "email": "sarah@example.nl",
    "phone": "+31623456789",
    "additionalNotes": "Advies over dividenduitkering",
    "submittedAt": "'$(date -u +%Y-%m-%dT%H:%M:%SZ)'",
    "source": "website"
}' "200"

# Test 5: Missing required field (should fail)
echo -e "${BLUE}Test 5: Error - Missing Required Field${NC}"
run_test "Missing email" '{
    "userType": "Loondienst",
    "hasBox3Assets": true,
    "fullName": "Test User",
    "phone": "0612345678",
    "submittedAt": "'$(date -u +%Y-%m-%dT%H:%M:%SZ)'",
    "source": "website"
}' "500"

# Print summary
echo -e "${BLUE}╔════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║   Test Complete                                ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════════════╝${NC}"
echo ""
echo -e "${YELLOW}Next Steps:${NC}"
echo "1. Check Google Sheet for new rows"
echo "2. Verify Lead IDs are unique"
echo "3. Verify phone numbers are formatted as text"
echo "4. Verify boolean fields show Ja/Nee/N/A"
echo ""
echo -e "${GREEN}If all tests passed, your webhook is working correctly!${NC}"

# N8N Workflow Templates for NCNP

Detailed workflow structures for copy-paste or reference when building in N8N UI.

---

## Workflow 1: Standard Report Generator

### Workflow Overview
```
Webhook → Validate Data → AI Analysis → PDF Generation → Email → End
```

### Node Configuration

#### 1. Webhook Trigger Node
```json
{
  "name": "Webhook - Standard Report Request",
  "type": "n8n-nodes-base.webhook",
  "parameters": {
    "httpMethod": "POST",
    "path": "generate-standard-report",
    "authentication": "headerAuth",
    "options": {
      "responseMode": "responseNode",
      "responseData": "firstEntryJson"
    }
  },
  "credentials": {
    "headerAuth": {
      "name": "N8N Webhook Auth",
      "data": {
        "name": "X-N8N-Webhook-Secret",
        "value": "={{$env.N8N_WEBHOOK_SECRET}}"
      }
    }
  }
}
```

#### 2. Data Validation Node (Function)
```javascript
// Function Node: Validate Input
const input = $input.item.json;

// Required fields
if (!input.email || !input.form_data) {
  throw new Error('Missing required fields: email, form_data');
}

// Email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(input.email)) {
  throw new Error('Invalid email format');
}

// Extract form data
const formData = input.form_data;
const requiredFields = ['user_type', 'estimated_annual_income', 'tax_year_of_interest'];

for (const field of requiredFields) {
  if (!formData[field]) {
    throw new Error(`Missing required field in form_data: ${field}`);
  }
}

// Return validated data
return {
  json: {
    email: input.email,
    user_type: formData.user_type,
    income: parseInt(formData.estimated_annual_income),
    tax_year: formData.tax_year_of_interest,
    validated_at: new Date().toISOString()
  }
};
```

#### 3. AI Analysis Node (OpenAI)
```json
{
  "name": "AI - Generate Tax Tips",
  "type": "@n8n/n8n-nodes-langchain.openAi",
  "parameters": {
    "model": "gpt-4",
    "prompt": "Je bent een Nederlandse belastingadviseur. Genereer een standaard belastingbesparingen rapport voor:\n\nKlantprofiel:\n- Type: {{$json.user_type}}\n- Geschat jaarinkomen: €{{$json.income}}\n- Belastingjaar: {{$json.tax_year}}\n\nGeef 5-7 concrete belastingbespaartips die relevant zijn voor deze persoon. Hou het praktisch en begrijpelijk. Structureer als volgt:\n\n1. Algemene tips (2-3 items)\n2. Specifieke tips voor {{$json.user_type}} (3-4 items)\n3. Actieplan (wat te doen)\n\nFormat: JSON met structure:\n{\n  \"algemene_tips\": [\"tip1\", \"tip2\"],\n  \"specifieke_tips\": [\"tip1\", \"tip2\"],\n  \"actieplan\": [\"actie1\", \"actie2\"],\n  \"geschatte_besparing_eur\": 1500\n}",
    "options": {
      "temperature": 0.7,
      "maxTokens": 1000
    }
  }
}
```

#### 4. Format Report Data (Function)
```javascript
// Function Node: Format Report Content
const aiResponse = JSON.parse($input.item.json.choices[0].message.content);
const userData = $('AI - Generate Tax Tips').item.json;

// Create report structure
const report = {
  metadata: {
    generated_at: new Date().toISOString(),
    user_type: userData.user_type,
    tax_year: userData.tax_year,
    income_range: userData.income
  },
  content: {
    title: `Belastingbesparingen Rapport ${userData.tax_year}`,
    subtitle: `Persoonlijke tips voor ${userData.user_type}`,
    algemene_tips: aiResponse.algemene_tips,
    specifieke_tips: aiResponse.specifieke_tips,
    actieplan: aiResponse.actieplan,
    geschatte_besparing: aiResponse.geschatte_besparing_eur
  },
  recipient: {
    email: userData.email
  }
};

return { json: report };
```

#### 5. Generate PDF (HTTP Request to PDF service)
```json
{
  "name": "PDF - Generate Report",
  "type": "n8n-nodes-base.httpRequest",
  "parameters": {
    "method": "POST",
    "url": "https://api.html2pdf.app/v1/generate",
    "authentication": "genericCredentialType",
    "sendHeaders": true,
    "headerParameters": {
      "parameters": [
        {
          "name": "Content-Type",
          "value": "application/json"
        }
      ]
    },
    "sendBody": true,
    "bodyParameters": {
      "parameters": [
        {
          "name": "html",
          "value": "={{$node[\"Format HTML Template\"].json.html}}"
        }
      ]
    },
    "options": {
      "response": {
        "response": {
          "responseFormat": "file"
        }
      }
    }
  }
}
```

**Alternative: Use built-in HTML to PDF node if available**

#### 6. Email Node
```json
{
  "name": "Email - Send Report",
  "type": "n8n-nodes-base.emailSend",
  "parameters": {
    "fromEmail": "noreply@ncnp.nl",
    "toEmail": "={{$json.recipient.email}}",
    "subject": "Uw Belastingbesparingen Rapport {{$json.metadata.tax_year}}",
    "text": "Geachte heer/mevrouw,\n\nBijgevoegd vindt u uw persoonlijke belastingbesparingen rapport voor het jaar {{$json.metadata.tax_year}}.\n\nOp basis van de door u verstrekte informatie hebben wij {{$json.content.algemene_tips.length + $json.content.specifieke_tips.length}} concrete tips geïdentificeerd waarmee u mogelijk kunt besparen.\n\nGeschatte besparing: €{{$json.content.geschatte_besparing}}\n\nWilt u een persoonlijke analyse met een diepgaand advies? Start dan een volledige aanvraag op onze website.\n\nMet vriendelijke groet,\nNCNP Belastingadvies",
    "attachments": "data.pdf={{$binary.data}}",
    "options": {
      "allowUnauthorizedCerts": false
    }
  },
  "credentials": {
    "smtp": {
      "host": "={{$env.SMTP_HOST}}",
      "port": "={{$env.SMTP_PORT}}",
      "user": "={{$env.SMTP_USER}}",
      "password": "={{$env.SMTP_PASSWORD}}"
    }
  }
}
```

#### 7. Response Node
```json
{
  "name": "Respond to Webhook",
  "type": "n8n-nodes-base.respondToWebhook",
  "parameters": {
    "respondWith": "json",
    "responseBody": "={{ { \"success\": true, \"message\": \"Standard report generation initiated\", \"workflow_id\": $workflow.id } }}"
  }
}
```

---

## Workflow 2: Case Processing Pipeline

### Workflow Overview
```
Webhook → Fetch Case Data → Download Docs → Update Status (Review)
→ Extract Text → AI Analysis → Generate Draft → Update Status (Approval)
→ Manual Approval → Upload Final Report → Update Status (Ready)
→ API Callback → End
```

### Node Configuration

#### 1. Webhook Trigger
```json
{
  "name": "Webhook - Start Case Processing",
  "type": "n8n-nodes-base.webhook",
  "parameters": {
    "httpMethod": "POST",
    "path": "start-case-processing",
    "authentication": "headerAuth"
  }
}
```

#### 2. Fetch Case Data (Supabase)
```json
{
  "name": "Supabase - Get Case Data",
  "type": "n8n-nodes-base.httpRequest",
  "parameters": {
    "method": "GET",
    "url": "={{$env.SUPABASE_URL}}/rest/v1/cases?id=eq.{{$json.case_id}}&select=*,documents(*),profiles(*)",
    "sendHeaders": true,
    "headerParameters": {
      "parameters": [
        {
          "name": "apikey",
          "value": "={{$env.SUPABASE_SERVICE_KEY}}"
        },
        {
          "name": "Authorization",
          "value": "Bearer {{$env.SUPABASE_SERVICE_KEY}}"
        }
      ]
    }
  }
}
```

#### 3. Loop Through Documents (Split In Batches)
```json
{
  "name": "Loop - Each Document",
  "type": "n8n-nodes-base.splitInBatches",
  "parameters": {
    "batchSize": 1,
    "options": {
      "reset": false
    }
  }
}
```

#### 4. Download Document from Supabase Storage
```json
{
  "name": "Supabase - Download Document",
  "type": "n8n-nodes-base.httpRequest",
  "parameters": {
    "method": "GET",
    "url": "={{$env.SUPABASE_URL}}/storage/v1/object/{{$json.storage_path}}",
    "sendHeaders": true,
    "headerParameters": {
      "parameters": [
        {
          "name": "Authorization",
          "value": "Bearer {{$env.SUPABASE_SERVICE_KEY}}"
        }
      ]
    },
    "options": {
      "response": {
        "response": {
          "responseFormat": "file"
        }
      }
    }
  }
}
```

#### 5. Extract Text from PDF (PDF Parser or OCR)
```javascript
// Function Node: Extract Text from PDF
// Assuming PDF text extraction library or service
const pdfData = $binary.data;

// Use external service or built-in PDF parser
// Example with external API:
const extractedText = await $this.helpers.request({
  method: 'POST',
  url: 'https://api.ocr.space/parse/image',
  body: {
    base64Image: pdfData.toString('base64'),
    language: 'dut'
  }
});

return {
  json: {
    document_id: $json.id,
    document_type: $json.document_type,
    extracted_text: extractedText.ParsedResults[0].ParsedText
  }
};
```

#### 6. Update Status - Under Review
```json
{
  "name": "API - Update Status (Under Review)",
  "type": "n8n-nodes-base.httpRequest",
  "parameters": {
    "method": "POST",
    "url": "={{$env.WEBAPP_API_URL}}/update-case-status",
    "sendHeaders": true,
    "headerParameters": {
      "parameters": [
        {
          "name": "Authorization",
          "value": "Bearer {{$env.WEBAPP_API_KEY}}"
        },
        {
          "name": "Content-Type",
          "value": "application/json"
        }
      ]
    },
    "sendBody": true,
    "bodyParameters": {
      "parameters": [
        {
          "name": "case_id",
          "value": "={{$json.case_id}}"
        },
        {
          "name": "status",
          "value": "Under Review"
        },
        {
          "name": "details",
          "value": "Documents downloaded, analysis in progress"
        }
      ]
    }
  }
}
```

#### 7. AI Tax Analysis (OpenAI)
```json
{
  "name": "AI - Tax Analysis",
  "type": "@n8n/n8n-nodes-langchain.openAi",
  "parameters": {
    "model": "gpt-4",
    "prompt": "Je bent een ervaren Nederlandse belastingadviseur. Analyseer de volgende belastingdocumenten en identificeer alle mogelijke belastingbesparingsmogelijkheden:\n\n{{$json.all_extracted_texts}}\n\nGeef een uitgebreid rapport met:\n1. Samenvatting huidige belastingsituatie\n2. Geïdentificeerde besparingsmogelijkheden (gedetailleerd)\n3. Geschatte besparing per mogelijkheid\n4. Totale geschatte besparing\n5. Aanbevelingen en actieplan\n\nFormat als JSON met duidelijke structuur.",
    "options": {
      "temperature": 0.3,
      "maxTokens": 3000
    }
  }
}
```

#### 8. Generate Draft Report PDF
```javascript
// Function Node: Create Draft Report
const analysis = JSON.parse($input.item.json.choices[0].message.content);
const caseData = $('Supabase - Get Case Data').first().json[0];

const reportHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Belastingadvies Rapport</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 40px; }
    h1 { color: #2563eb; }
    .section { margin: 20px 0; }
    .savings { background: #f0fdf4; padding: 15px; border-left: 4px solid #10b981; }
  </style>
</head>
<body>
  <h1>Belastingadvies Rapport ${caseData.initial_form_data.tax_year_of_interest}</h1>
  <p>Klant: ${caseData.profiles.full_name}</p>
  <p>Type: ${caseData.initial_form_data.user_type}</p>

  <div class="section">
    <h2>Samenvatting</h2>
    <p>${analysis.samenvatting}</p>
  </div>

  <div class="section savings">
    <h2>Totale Geschatte Besparing</h2>
    <h3>€${analysis.totale_besparing}</h3>
  </div>

  <div class="section">
    <h2>Geïdentificeerde Besparingsmogelijkheden</h2>
    ${analysis.besparingen.map(b => `
      <div>
        <h3>${b.titel}</h3>
        <p>${b.beschrijving}</p>
        <p><strong>Geschatte besparing: €${b.bedrag}</strong></p>
      </div>
    `).join('')}
  </div>

  <div class="section">
    <h2>Actieplan</h2>
    <ol>
      ${analysis.actieplan.map(a => `<li>${a}</li>`).join('')}
    </ol>
  </div>

  <p><em>Dit rapport is opgesteld door NCNP Belastingadvies. Voor vragen kunt u contact opnemen via info@ncnp.nl</em></p>
</body>
</html>
`;

return {
  json: {
    html: reportHtml,
    analysis_data: analysis,
    case_id: caseData.id
  }
};
```

#### 9. Convert HTML to PDF & Upload to Supabase
```json
{
  "name": "Supabase - Upload Draft Report",
  "type": "n8n-nodes-base.httpRequest",
  "parameters": {
    "method": "POST",
    "url": "={{$env.SUPABASE_URL}}/storage/v1/object/reports/{{$json.case_id}}/draft-report.pdf",
    "sendHeaders": true,
    "headerParameters": {
      "parameters": [
        {
          "name": "Authorization",
          "value": "Bearer {{$env.SUPABASE_SERVICE_KEY}}"
        },
        {
          "name": "Content-Type",
          "value": "application/pdf"
        }
      ]
    },
    "sendBody": true,
    "bodyContentType": "raw",
    "body": "={{$binary.data}}"
  }
}
```

#### 10. Update Status - Awaiting Approval
```json
{
  "name": "API - Update Status (Awaiting Approval)",
  "type": "n8n-nodes-base.httpRequest",
  "parameters": {
    "method": "POST",
    "url": "={{$env.WEBAPP_API_URL}}/update-case-status",
    "sendHeaders": true,
    "headerParameters": {
      "parameters": [
        {
          "name": "Authorization",
          "value": "Bearer {{$env.WEBAPP_API_KEY}}"
        }
      ]
    },
    "sendBody": true,
    "bodyContentType": "json",
    "body": {
      "case_id": "={{$json.case_id}}",
      "status": "Awaiting Approval",
      "details": "Draft report ready for fiscalist review"
    }
  }
}
```

#### 11. Manual Approval Node
```json
{
  "name": "Manual Approval - Fiscalist",
  "type": "n8n-nodes-base.wait",
  "parameters": {
    "resume": "webhook",
    "options": {
      "email": {
        "emailAddress": "fiscalist@ncnp.nl",
        "subject": "Belastingrapport goedkeuring vereist - Case {{$json.case_id}}",
        "message": "Een nieuw belastingrapport is klaar voor goedkeuring.\n\nCase ID: {{$json.case_id}}\nKlant: {{$json.client_name}}\nGeschatte besparing: €{{$json.total_savings}}\n\nBekijk het concept rapport: {{$json.draft_url}}\n\nKlik op de link hieronder om goed te keuren:\n{{$resumeWebhookUrl}}"
      }
    }
  }
}
```

#### 12. Generate Final Report
```javascript
// After approval, generate final version with fiscalist signature
const approvalData = $input.item.json;
const draftData = $('Generate Draft Report PDF').first().json;

// Add approval info to report
const finalReportHtml = draftData.html.replace(
  '</body>',
  `
  <div style="margin-top: 40px; border-top: 2px solid #e5e7eb; padding-top: 20px;">
    <p><strong>Goedgekeurd door:</strong> ${approvalData.fiscalist_name}</p>
    <p><strong>Datum:</strong> ${new Date().toLocaleDateString('nl-NL')}</p>
  </div>
  </body>
  `
);

return {
  json: {
    html: finalReportHtml,
    fiscalist_name: approvalData.fiscalist_name,
    approved_at: new Date().toISOString()
  }
};
```

#### 13. Upload Final Report to Supabase
```json
{
  "name": "Supabase - Upload Final Report",
  "type": "n8n-nodes-base.httpRequest",
  "parameters": {
    "method": "POST",
    "url": "={{$env.SUPABASE_URL}}/storage/v1/object/reports/{{$json.case_id}}/final-report.pdf",
    "sendHeaders": true,
    "headerParameters": {
      "parameters": [
        {
          "name": "Authorization",
          "value": "Bearer {{$env.SUPABASE_SERVICE_KEY}}"
        }
      ]
    },
    "sendBody": true,
    "body": "={{$binary.data}}"
  }
}
```

#### 14. Submit Report via API
```json
{
  "name": "API - Submit Final Report",
  "type": "n8n-nodes-base.httpRequest",
  "parameters": {
    "method": "POST",
    "url": "={{$env.WEBAPP_API_URL}}/submit-report",
    "sendHeaders": true,
    "headerParameters": {
      "parameters": [
        {
          "name": "Authorization",
          "value": "Bearer {{$env.WEBAPP_API_KEY}}"
        }
      ]
    },
    "sendBody": true,
    "bodyContentType": "json",
    "body": {
      "case_id": "={{$json.case_id}}",
      "report_url": "={{$json.final_report_url}}",
      "summary": "={{$json.analysis_data.samenvatting}}",
      "potential_savings_eur": "={{$json.analysis_data.totale_besparing}}",
      "fiscalist_name": "={{$json.fiscalist_name}}",
      "fiscalist_approved_at": "={{$json.approved_at}}"
    }
  }
}
```

---

## Error Handling Template

Add this to both workflows:

```json
{
  "name": "Error Trigger",
  "type": "n8n-nodes-base.errorTrigger",
  "parameters": {}
},
{
  "name": "Log Error to Database",
  "type": "n8n-nodes-base.httpRequest",
  "parameters": {
    "method": "POST",
    "url": "={{$env.SUPABASE_URL}}/rest/v1/activity_log",
    "sendBody": true,
    "body": {
      "action": "workflow_error",
      "details": {
        "workflow_id": "={{$workflow.id}}",
        "error": "={{$json.error.message}}",
        "node": "={{$json.node.name}}"
      }
    }
  }
},
{
  "name": "Notify Admin",
  "type": "n8n-nodes-base.emailSend",
  "parameters": {
    "toEmail": "admin@ncnp.nl",
    "subject": "N8N Workflow Error - {{$workflow.name}}",
    "text": "An error occurred in workflow {{$workflow.name}}:\n\nError: {{$json.error.message}}\nNode: {{$json.node.name}}\nTime: {{$now}}"
  }
}
```

---

**Last Updated:** 2025-09-23
**Status:** Ready for Implementation
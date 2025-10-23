import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { assessmentSchema } from '@/lib/validation/assessment-schema';

/**
 * API Route: POST /api/assessment/submit
 *
 * Receives assessment form data from frontend, validates it,
 * and forwards to N8N webhook for Google Sheets storage.
 */

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();

    // Validate with Zod schema
    const validatedData = assessmentSchema.parse(body);

    // Prepare payload for N8N
    const payload = {
      ...validatedData,
      submittedAt: new Date().toISOString(),
      source: 'website',
    };

    // Check if N8N webhook URL is configured
    const webhookUrl = process.env.N8N_WEBHOOK_URL;
    if (!webhookUrl || webhookUrl.includes('your-instance')) {
      console.error('N8N_WEBHOOK_URL not configured');
      return NextResponse.json(
        {
          success: false,
          error: 'Server configuratiefout. Neem contact op met de beheerder.'
        },
        { status: 500 }
      );
    }

    // Send to N8N webhook
    const n8nResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(process.env.N8N_WEBHOOK_SECRET && {
          'X-N8N-Webhook-Secret': process.env.N8N_WEBHOOK_SECRET,
        }),
      },
      body: JSON.stringify(payload),
    });

    if (!n8nResponse.ok) {
      const errorText = await n8nResponse.text();
      console.error('N8N webhook failed:', errorText);
      throw new Error('N8N webhook request failed');
    }

    // Parse N8N response
    const n8nResult = await n8nResponse.json();

    // Log success (for debugging in development)
    if (process.env.NODE_ENV === 'development') {
      console.log('✅ Assessment submitted successfully:', {
        userType: validatedData.userType,
        email: validatedData.email,
        leadId: n8nResult.leadId,
        timestamp: payload.submittedAt,
      });
    }

    // Return success response
    return NextResponse.json({
      success: true,
      leadId: n8nResult.leadId,
      message: 'Bedankt voor uw aanvraag. We nemen binnen 24 uur contact met u op.',
    });

  } catch (error: unknown) {
    // Handle Zod validation errors
    if (error instanceof z.ZodError) {
      console.error('Validation error:', error.issues);
      return NextResponse.json(
        {
          success: false,
          error: 'Ongeldige gegevens. Controleer uw invoer.',
          details: process.env.NODE_ENV === 'development' ? error.issues : undefined,
        },
        { status: 400 }
      );
    }

    // Handle other errors
    console.error('Assessment submission error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Er is iets misgegaan. Probeer het opnieuw.',
      },
      { status: 500 }
    );
  }
}

// Disable other HTTP methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}

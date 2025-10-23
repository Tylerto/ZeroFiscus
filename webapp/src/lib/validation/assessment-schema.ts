import { z } from 'zod';

/**
 * Validation schema for NCNP Tax Assessment Form
 * All error messages in Dutch as per requirements
 * Supports conditional flow based on user type
 */

// User type options
export const USER_TYPES = [
  {
    value: 'Loondienst' as const,
    label: 'Loondienst',
    description: 'U werkt in loondienst',
  },
  {
    value: 'Ondernemer' as const,
    label: 'Ondernemer / ZZP',
    description: 'Eenmanszaak of ZZP\'er',
  },
  {
    value: 'Gepensioneerd' as const,
    label: 'Gepensioneerd',
    description: 'U bent met pensioen',
  },
  {
    value: 'DGA' as const,
    label: 'Directeur Groot Aandeelhouder',
    description: 'DGA van een BV',
  },
] as const;

export type UserType = typeof USER_TYPES[number]['value'];

// Main validation schema with conditional fields
export const assessmentSchema = z.object({
  // Step 1: User Type (required)
  userType: z.enum(['Loondienst', 'Ondernemer', 'Gepensioneerd', 'DGA']),

  // Step 2A: High Income (conditional - only for Ondernemer/DGA)
  hasHighIncome: z.boolean().optional(),

  // Step 3: Box 3 Assets (required for everyone)
  hasBox3Assets: z.boolean(),

  // Step 4A: Rental Property (conditional - only if hasBox3Assets = true)
  hasRentalProperty: z.boolean().optional(),

  // Step 4B: BV (conditional - based on userType or hasBox3Assets)
  hasBV: z.boolean().optional(),

  // Step 6: Contact Information (required)
  fullName: z.string().min(2, 'Voer uw volledige naam in'),

  email: z.string().email('Voer een geldig e-mailadres in'),

  phone: z.string().regex(
    /^(\+31|0)[0-9]{9}$/,
    'Voer een geldig Nederlands telefoonnummer in (bijv. +31612345678 of 0612345678)'
  ),

  // Step 7: Additional Notes (optional)
  additionalNotes: z.string()
    .max(500, 'Maximaal 500 tekens toegestaan')
    .optional()
    .or(z.literal('')),
});

// Type inference for TypeScript
export type AssessmentFormData = z.infer<typeof assessmentSchema>;

// Step validation schemas
export const stepSchemas = {
  userType: z.object({
    userType: assessmentSchema.shape.userType,
  }),

  hasHighIncome: z.object({
    hasHighIncome: z.boolean(),
  }),

  hasBox3Assets: z.object({
    hasBox3Assets: assessmentSchema.shape.hasBox3Assets,
  }),

  hasRentalProperty: z.object({
    hasRentalProperty: z.boolean(),
  }),

  hasBV: z.object({
    hasBV: z.boolean(),
  }),

  contact: z.object({
    fullName: assessmentSchema.shape.fullName,
    email: assessmentSchema.shape.email,
    phone: assessmentSchema.shape.phone,
  }),

  notes: z.object({
    additionalNotes: assessmentSchema.shape.additionalNotes,
  }),
};

/**
 * Determine if high income question should be shown
 */
export const shouldShowHighIncome = (userType: UserType): boolean => {
  return ['Ondernemer', 'DGA'].includes(userType);
};

/**
 * Determine if BV question should be shown
 */
export const shouldShowBV = (formData: Partial<AssessmentFormData>): boolean => {
  // Show BV if:
  // 1. Ondernemer with high income = true
  // 2. OR has Box 3 assets = true
  return (
    (formData.userType === 'Ondernemer' && formData.hasHighIncome === true) ||
    formData.hasBox3Assets === true
  );
};

/**
 * Determine if rental property question should be shown
 */
export const shouldShowRentalProperty = (formData: Partial<AssessmentFormData>): boolean => {
  return formData.hasBox3Assets === true;
};

/**
 * Get the income threshold text based on user type
 */
export const getIncomeThresholdText = (userType: UserType): string => {
  if (userType === 'DGA') {
    return 'Heeft u meer dan €250.000 winst in uw werkmaatschappij?';
  }
  if (userType === 'Ondernemer') {
    return 'Heeft u meer dan €100.000 winst?';
  }
  return '';
};

/**
 * Generate a personalized summary based on form answers
 */
export const generateSummary = (formData: Partial<AssessmentFormData>): string => {
  if (!formData.userType) return '';

  const parts: string[] = [];

  // User type
  const userTypeLabel = USER_TYPES.find(t => t.value === formData.userType)?.label || formData.userType;
  parts.push(`U bent ${userTypeLabel.toLowerCase()}`);

  // High income
  if (formData.hasHighIncome === true) {
    const threshold = formData.userType === 'DGA' ? '€250.000' : '€100.000';
    parts.push(`met een winst van meer dan ${threshold}`);
  }

  // Box 3 assets
  if (formData.hasBox3Assets === true) {
    parts.push('u heeft Box 3 vermogen');
  }

  // Rental property
  if (formData.hasRentalProperty === true) {
    parts.push('waaronder verhuurd vastgoed');
  }

  // BV
  if (formData.hasBV === true) {
    parts.push('en u heeft een BV');
  }

  // Join parts
  let summary = parts.join(', ');
  summary = summary.charAt(0).toUpperCase() + summary.slice(1);
  summary += '. Op basis van uw situatie zien wij mogelijk besparingsmogelijkheden voor u.';

  return summary;
};

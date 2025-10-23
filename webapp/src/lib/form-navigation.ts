import type { AssessmentFormData, UserType } from './validation/assessment-schema';
import {
  shouldShowHighIncome,
  shouldShowBV,
  shouldShowRentalProperty,
} from './validation/assessment-schema';

/**
 * Step identifiers for the assessment form
 */
export type StepId =
  | 'userType'
  | 'hasHighIncome'
  | 'hasBox3Assets'
  | 'hasRentalProperty'
  | 'hasBV'
  | 'result'
  | 'contact'
  | 'notes';

/**
 * Step metadata for display
 */
export interface StepInfo {
  id: StepId;
  title: string;
  shortLabel: string;
}

/**
 * All possible steps in the form
 */
export const ALL_STEPS: Record<StepId, StepInfo> = {
  userType: { id: 'userType', title: 'Wat is uw situatie?', shortLabel: 'Type' },
  hasHighIncome: { id: 'hasHighIncome', title: 'Winst', shortLabel: 'Winst' },
  hasBox3Assets: { id: 'hasBox3Assets', title: 'Box 3 Vermogen', shortLabel: 'Box 3' },
  hasRentalProperty: { id: 'hasRentalProperty', title: 'Verhuurd Vastgoed', shortLabel: 'Vastgoed' },
  hasBV: { id: 'hasBV', title: 'BV', shortLabel: 'BV' },
  result: { id: 'result', title: 'Besparing mogelijk!', shortLabel: 'Resultaat' },
  contact: { id: 'contact', title: 'Contactgegevens', shortLabel: 'Contact' },
  notes: { id: 'notes', title: 'Extra informatie', shortLabel: 'Extra' },
};

/**
 * Calculate the complete step flow based on current form data
 * Returns an ordered array of step IDs to display
 */
export const calculateStepFlow = (formData: Partial<AssessmentFormData>): StepId[] => {
  const flow: StepId[] = ['userType'];

  // Step 2: High income question (conditional on user type)
  if (formData.userType && shouldShowHighIncome(formData.userType)) {
    flow.push('hasHighIncome');
  }

  // Step 3: Box 3 assets (shown to everyone after user type)
  if (formData.userType) {
    flow.push('hasBox3Assets');
  }

  // Step 4A: Rental property (conditional on Box 3 = true)
  if (shouldShowRentalProperty(formData)) {
    flow.push('hasRentalProperty');
  }

  // Step 4B: BV question (conditional)
  if (shouldShowBV(formData)) {
    flow.push('hasBV');
  }

  // Step 5: Result summary (always shown after questions)
  if (formData.userType) {
    flow.push('result');
  }

  // Step 6: Contact info (always shown)
  flow.push('contact');

  // Step 7: Additional notes (always shown)
  flow.push('notes');

  return flow;
};

/**
 * Get the next step ID based on current step and form data
 */
export const getNextStepId = (
  currentStepId: StepId,
  formData: Partial<AssessmentFormData>
): StepId | null => {
  const flow = calculateStepFlow(formData);
  const currentIndex = flow.indexOf(currentStepId);

  if (currentIndex === -1 || currentIndex === flow.length - 1) {
    return null; // No next step
  }

  return flow[currentIndex + 1];
};

/**
 * Get the previous step ID based on current step and form data
 */
export const getPreviousStepId = (
  currentStepId: StepId,
  formData: Partial<AssessmentFormData>
): StepId | null => {
  const flow = calculateStepFlow(formData);
  const currentIndex = flow.indexOf(currentStepId);

  if (currentIndex <= 0) {
    return null; // No previous step
  }

  return flow[currentIndex - 1];
};

/**
 * Check if a step is valid (has all required data)
 */
export const isStepComplete = (
  stepId: StepId,
  formData: Partial<AssessmentFormData>
): boolean => {
  switch (stepId) {
    case 'userType':
      return !!formData.userType;

    case 'hasHighIncome':
      return typeof formData.hasHighIncome === 'boolean';

    case 'hasBox3Assets':
      return typeof formData.hasBox3Assets === 'boolean';

    case 'hasRentalProperty':
      return typeof formData.hasRentalProperty === 'boolean';

    case 'hasBV':
      return typeof formData.hasBV === 'boolean';

    case 'result':
      return true; // Result screen doesn't require input

    case 'contact':
      return (
        !!formData.fullName &&
        formData.fullName.length >= 2 &&
        !!formData.email &&
        formData.email.includes('@') &&
        !!formData.phone &&
        formData.phone.length >= 10
      );

    case 'notes':
      return true; // Notes are optional

    default:
      return false;
  }
};

/**
 * Get current progress percentage
 */
export const getProgressPercentage = (
  currentStepId: StepId,
  formData: Partial<AssessmentFormData>
): number => {
  const flow = calculateStepFlow(formData);
  const currentIndex = flow.indexOf(currentStepId);

  if (currentIndex === -1) return 0;

  return Math.round((currentIndex / (flow.length - 1)) * 100);
};

/**
 * Get step number display (e.g., "3 van 7")
 */
export const getStepNumberDisplay = (
  currentStepId: StepId,
  formData: Partial<AssessmentFormData>
): { current: number; total: number } => {
  const flow = calculateStepFlow(formData);
  const currentIndex = flow.indexOf(currentStepId);

  return {
    current: currentIndex + 1,
    total: flow.length,
  };
};

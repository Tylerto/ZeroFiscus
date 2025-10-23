"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Check, Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import {
  assessmentSchema,
  USER_TYPES,
  type AssessmentFormData,
  type UserType,
  getIncomeThresholdText,
  generateSummary,
} from "@/lib/validation/assessment-schema";
import {
  type StepId,
  calculateStepFlow,
  getNextStepId,
  getPreviousStepId,
  isStepComplete,
  getProgressPercentage,
  getStepNumberDisplay,
} from "@/lib/form-navigation";
import { useRouter } from "next/navigation";

const contentVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      ease: [0.4, 0.0, 0.2, 1] as const // easeOut bezier curve
    }
  },
  exit: { opacity: 1 },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const AssessmentForm = () => {
  const router = useRouter();
  const [currentStepId, setCurrentStepId] = useState<StepId>('userType');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const [formData, setFormData] = useState<Partial<AssessmentFormData>>({
    userType: undefined,
    hasHighIncome: undefined,
    hasBox3Assets: undefined,
    hasRentalProperty: undefined,
    hasBV: undefined,
    fullName: "",
    email: "",
    phone: "",
    additionalNotes: "",
  });

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("zerofiscus-assessment-form");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setFormData(parsed.formData || {});
        setCurrentStepId(parsed.currentStepId || 'userType');
      } catch (e) {
        console.error("Failed to parse saved form data", e);
      }
    }
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem(
      "zerofiscus-assessment-form",
      JSON.stringify({ formData, currentStepId })
    );
  }, [formData, currentStepId]);

  const updateFormData = <K extends keyof AssessmentFormData>(
    field: K,
    value: AssessmentFormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Auto-advance to next step after selecting a radio option
  const updateFormDataAndAdvance = <K extends keyof AssessmentFormData>(
    field: K,
    value: AssessmentFormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Advance immediately - animation will handle the transition
    const nextStepId = getNextStepId(currentStepId, { ...formData, [field]: value });
    if (nextStepId) {
      setCurrentStepId(nextStepId);
    }
  };

  const nextStep = () => {
    const nextStepId = getNextStepId(currentStepId, formData);
    if (nextStepId) {
      setCurrentStepId(nextStepId);
    }
  };

  const prevStep = () => {
    const prevStepId = getPreviousStepId(currentStepId, formData);
    if (prevStepId) {
      setCurrentStepId(prevStepId);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Validate the entire form
      const validated = assessmentSchema.parse(formData);

      // Submit to API
      const response = await fetch("/api/assessment/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...validated,
          submittedAt: new Date().toISOString(),
          source: "website",
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Er is iets misgegaan");
      }

      // Clear form from localStorage
      localStorage.removeItem("zerofiscus-assessment-form");

      setSubmitSuccess(true);
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Er is iets misgegaan. Probeer het opnieuw."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const canProceed = isStepComplete(currentStepId, formData);

  const stepFlow = calculateStepFlow(formData);
  const progressPercentage = getProgressPercentage(currentStepId, formData);
  const stepNumbers = getStepNumberDisplay(currentStepId, formData);

  // Success screen
  if (submitSuccess) {
    return (
      <div className="h-full flex items-center justify-center w-full max-w-2xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <Card className="border shadow-lg rounded-3xl">
            <CardContent className="pt-12 pb-12 px-6">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-gray-900" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Bedankt voor uw aanvraag!
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-8">
                We nemen binnen 24 uur contact met u op om uw
                bespaarmogelijkheden door te nemen.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center">
                <Button
                  size="default"
                  variant="outline"
                  className="gap-2 text-base px-6 text-gray-900 border-gray-300 hover:bg-gray-100 min-h-[48px] w-full sm:w-auto"
                  asChild
                >
                  <a href="/">Terug naar homepagina</a>
                </Button>
                <Button
                  size="default"
                  className="gap-2 bg-black text-white hover:bg-gray-800 text-base px-6 min-h-[48px] w-full sm:w-auto"
                  asChild
                >
                  <a href="mailto:info@zerofiscus.nl">Contact</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col w-full max-w-2xl mx-auto px-4 sm:px-6">
      {/* Progress indicator */}
      <motion.div
        className="flex-shrink-0 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="mt-2 text-center text-sm text-gray-600 font-medium">
          Stap {stepNumbers.current} van {stepNumbers.total}
        </div>
      </motion.div>

      {/* Form card */}
      <motion.div
        className="flex-shrink-0 max-h-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="border shadow-md rounded-3xl overflow-hidden flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStepId}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={contentVariants}
              className="flex flex-col"
            >
              {/* Step: User Type Selection */}
              {currentStepId === 'userType' && (
                <>
                  <CardHeader className="flex-shrink-0 px-4 sm:px-6">
                    <CardTitle className="text-xl sm:text-2xl text-gray-900">Wat is uw situatie?</CardTitle>
                    <CardDescription className="text-gray-700 text-base">
                      Kies de optie die het beste bij u past
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 px-4 sm:px-6">
                    <RadioGroup
                      value={formData.userType}
                      onValueChange={(value) =>
                        updateFormDataAndAdvance("userType", value as UserType)
                      }
                      className="space-y-3"
                    >
                      {USER_TYPES.map((type, index) => (
                        <motion.div
                          key={type.value}
                          className="flex items-start space-x-3 rounded-lg border p-4 cursor-pointer hover:bg-accent transition-colors"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ duration: 0.2 }}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{
                            opacity: 1,
                            x: 0,
                            transition: {
                              delay: 0.1 * index,
                              duration: 0.3,
                            },
                          }}
                          onClick={() =>
                            updateFormDataAndAdvance("userType", type.value)
                          }
                        >
                          <RadioGroupItem
                            value={type.value}
                            id={`type-${index}`}
                            className="mt-0.5"
                          />
                          <div className="flex-1">
                            <Label
                              htmlFor={`type-${index}`}
                              className="cursor-pointer font-medium text-base text-gray-900"
                            >
                              {type.label}
                            </Label>
                            <p className="text-sm text-gray-600 mt-1">
                              {type.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </RadioGroup>
                  </CardContent>
                </>
              )}

              {/* Step: High Income Question */}
              {currentStepId === 'hasHighIncome' && formData.userType && (
                <>
                  <CardHeader className="flex-shrink-0 px-4 sm:px-6">
                    <CardTitle className="text-xl sm:text-2xl text-gray-900">
                      {getIncomeThresholdText(formData.userType)}
                    </CardTitle>
                    <CardDescription className="text-gray-700 text-base">
                      Dit helpt ons uw bespaarmogelijkheden beter in te schatten
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 px-4 sm:px-6">
                    <RadioGroup
                      value={
                        formData.hasHighIncome === undefined
                          ? undefined
                          : formData.hasHighIncome
                            ? "ja"
                            : "nee"
                      }
                      onValueChange={(value) =>
                        updateFormDataAndAdvance("hasHighIncome", value === "ja")
                      }
                      className="space-y-3"
                    >
                      {[
                        { value: "ja", label: "Ja" },
                        { value: "nee", label: "Nee" },
                      ].map((option, index) => (
                        <motion.div
                          key={option.value}
                          className="flex items-center space-x-3 rounded-lg border p-4 cursor-pointer hover:bg-accent transition-colors"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{
                            opacity: 1,
                            x: 0,
                            transition: { delay: 0.1 * index, duration: 0.3 },
                          }}
                          onClick={() =>
                            updateFormDataAndAdvance("hasHighIncome", option.value === "ja")
                          }
                        >
                          <RadioGroupItem
                            value={option.value}
                            id={`income-${option.value}`}
                          />
                          <Label
                            htmlFor={`income-${option.value}`}
                            className="cursor-pointer font-medium text-base flex-1 text-gray-900"
                          >
                            {option.label}
                          </Label>
                        </motion.div>
                      ))}
                    </RadioGroup>
                  </CardContent>
                </>
              )}

              {/* Step: Box 3 Assets */}
              {currentStepId === 'hasBox3Assets' && (
                <>
                  <CardHeader className="flex-shrink-0 px-4 sm:px-6">
                    <CardTitle className="text-xl sm:text-2xl text-gray-900">
                      Heeft u Box 3 vermogen wat hoger is dan het heffingsvrij
                      vermogen?
                    </CardTitle>
                    <CardDescription className="text-gray-700 text-base">
                      Box 3 vermogen omvat spaartegoeden, beleggingen, tweede woningen,
                      etc.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 px-4 sm:px-6">
                    <RadioGroup
                      value={
                        formData.hasBox3Assets === undefined
                          ? undefined
                          : formData.hasBox3Assets
                            ? "ja"
                            : "nee"
                      }
                      onValueChange={(value) =>
                        updateFormDataAndAdvance("hasBox3Assets", value === "ja")
                      }
                      className="space-y-3"
                    >
                      {[
                        { value: "ja", label: "Ja" },
                        { value: "nee", label: "Nee" },
                      ].map((option, index) => (
                        <motion.div
                          key={option.value}
                          className="flex items-center space-x-3 rounded-lg border p-4 cursor-pointer hover:bg-accent transition-colors"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{
                            opacity: 1,
                            x: 0,
                            transition: { delay: 0.1 * index, duration: 0.3 },
                          }}
                          onClick={() =>
                            updateFormDataAndAdvance("hasBox3Assets", option.value === "ja")
                          }
                        >
                          <RadioGroupItem
                            value={option.value}
                            id={`box3-${option.value}`}
                          />
                          <Label
                            htmlFor={`box3-${option.value}`}
                            className="cursor-pointer font-medium text-base flex-1 text-gray-900"
                          >
                            {option.label}
                          </Label>
                        </motion.div>
                      ))}
                    </RadioGroup>
                  </CardContent>
                </>
              )}

              {/* Step: Rental Property */}
              {currentStepId === 'hasRentalProperty' && (
                <>
                  <CardHeader className="flex-shrink-0 px-4 sm:px-6">
                    <CardTitle className="text-xl sm:text-2xl text-gray-900">Heeft u verhuurd vastgoed?</CardTitle>
                    <CardDescription className="text-gray-700 text-base">
                      Bijvoorbeeld een verhuurde woning of commercieel vastgoed
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 px-4 sm:px-6">
                    <RadioGroup
                      value={
                        formData.hasRentalProperty === undefined
                          ? undefined
                          : formData.hasRentalProperty
                            ? "ja"
                            : "nee"
                      }
                      onValueChange={(value) =>
                        updateFormDataAndAdvance("hasRentalProperty", value === "ja")
                      }
                      className="space-y-3"
                    >
                      {[
                        { value: "ja", label: "Ja" },
                        { value: "nee", label: "Nee" },
                      ].map((option, index) => (
                        <motion.div
                          key={option.value}
                          className="flex items-center space-x-3 rounded-lg border p-4 cursor-pointer hover:bg-accent transition-colors"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{
                            opacity: 1,
                            x: 0,
                            transition: { delay: 0.1 * index, duration: 0.3 },
                          }}
                          onClick={() =>
                            updateFormDataAndAdvance("hasRentalProperty", option.value === "ja")
                          }
                        >
                          <RadioGroupItem
                            value={option.value}
                            id={`rental-${option.value}`}
                          />
                          <Label
                            htmlFor={`rental-${option.value}`}
                            className="cursor-pointer font-medium text-base flex-1 text-gray-900"
                          >
                            {option.label}
                          </Label>
                        </motion.div>
                      ))}
                    </RadioGroup>
                  </CardContent>
                </>
              )}

              {/* Step: BV Question */}
              {currentStepId === 'hasBV' && (
                <>
                  <CardHeader className="flex-shrink-0 px-4 sm:px-6">
                    <CardTitle className="text-xl sm:text-2xl text-gray-900">Heeft u een BV?</CardTitle>
                    <CardDescription className="text-gray-700 text-base">
                      Een besloten vennootschap (BV)
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 px-4 sm:px-6">
                    <RadioGroup
                      value={
                        formData.hasBV === undefined
                          ? undefined
                          : formData.hasBV
                            ? "ja"
                            : "nee"
                      }
                      onValueChange={(value) =>
                        updateFormDataAndAdvance("hasBV", value === "ja")
                      }
                      className="space-y-3"
                    >
                      {[
                        { value: "ja", label: "Ja" },
                        { value: "nee", label: "Nee" },
                      ].map((option, index) => (
                        <motion.div
                          key={option.value}
                          className="flex items-center space-x-3 rounded-lg border p-4 cursor-pointer hover:bg-accent transition-colors"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{
                            opacity: 1,
                            x: 0,
                            transition: { delay: 0.1 * index, duration: 0.3 },
                          }}
                          onClick={() =>
                            updateFormDataAndAdvance("hasBV", option.value === "ja")
                          }
                        >
                          <RadioGroupItem
                            value={option.value}
                            id={`bv-${option.value}`}
                          />
                          <Label
                            htmlFor={`bv-${option.value}`}
                            className="cursor-pointer font-medium text-base flex-1 text-gray-900"
                          >
                            {option.label}
                          </Label>
                        </motion.div>
                      ))}
                    </RadioGroup>
                  </CardContent>
                </>
              )}

              {/* Step: Result Summary */}
              {currentStepId === 'result' && (
                <>
                  <CardHeader className="flex-shrink-0 text-center px-4 sm:px-6">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Sparkles className="w-10 h-10 text-primary" />
                    </div>
                    <CardTitle className="text-2xl sm:text-3xl text-gray-900">
                      Besparing mogelijk!
                    </CardTitle>
                    <CardDescription className="text-gray-700 text-base mt-4">
                      {generateSummary(formData)}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 px-4 sm:px-6">
                    <motion.div
                      variants={fadeInUp}
                      className="bg-gray-100 rounded-lg p-4 text-sm text-center border border-gray-200"
                    >
                      <p className="text-gray-800 font-medium">
                        Vul uw contactgegevens in zodat we u kunnen helpen met
                        een persoonlijke besparing.
                      </p>
                    </motion.div>
                  </CardContent>
                </>
              )}

              {/* Step: Contact Information */}
              {currentStepId === 'contact' && (
                <>
                  <CardHeader className="flex-shrink-0 px-4 sm:px-6">
                    <CardTitle className="text-xl sm:text-2xl text-gray-900">Uw contactgegevens</CardTitle>
                    <CardDescription className="text-gray-700 text-base">
                      Zo kunnen we contact met u opnemen voor persoonlijk advies
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 px-4 sm:px-6">
                    <motion.div variants={fadeInUp} className="space-y-2">
                      <Label htmlFor="fullName" className="text-gray-900 font-medium">Uw volledige naam</Label>
                      <Input
                        id="fullName"
                        placeholder="Jan de Vries"
                        value={formData.fullName}
                        onChange={(e) =>
                          updateFormData("fullName", e.target.value)
                        }
                        className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                    </motion.div>
                    <motion.div variants={fadeInUp} className="space-y-2">
                      <Label htmlFor="email" className="text-gray-900 font-medium">E-mailadres</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="uw@email.nl"
                        value={formData.email}
                        onChange={(e) =>
                          updateFormData("email", e.target.value)
                        }
                        className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                    </motion.div>
                    <motion.div variants={fadeInUp} className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-900 font-medium">Telefoonnummer</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+31 6 12345678"
                        value={formData.phone}
                        onChange={(e) =>
                          updateFormData("phone", e.target.value)
                        }
                        className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                      <p className="text-xs text-muted-foreground">
                        Gebruik formaat: +31612345678 of 0612345678
                      </p>
                    </motion.div>
                  </CardContent>
                </>
              )}

              {/* Step: Additional Notes */}
              {currentStepId === 'notes' && (
                <>
                  <CardHeader className="flex-shrink-0 px-4 sm:px-6">
                    <CardTitle className="text-xl sm:text-2xl text-gray-900">Aanvullende informatie (optioneel)</CardTitle>
                    <CardDescription className="text-gray-700 text-base">
                      Heeft u specifieke vragen of situaties die u wilt
                      bespreken?
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 px-4 sm:px-6">
                    <motion.div variants={fadeInUp} className="space-y-2">
                      <Label htmlFor="additionalNotes" className="text-gray-900 font-medium">Extra notities</Label>
                      <Textarea
                        id="additionalNotes"
                        placeholder="Bijvoorbeeld: specifieke aftrekposten, bijzondere situaties, etc."
                        value={formData.additionalNotes}
                        onChange={(e) =>
                          updateFormData("additionalNotes", e.target.value)
                        }
                        className="min-h-[120px] transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        maxLength={500}
                      />
                      <p className="text-xs text-muted-foreground text-right">
                        {formData.additionalNotes?.length || 0} / 500 tekens
                      </p>
                    </motion.div>
                  </CardContent>
                </>
              )}
            </motion.div>
          </AnimatePresence>

          {submitError && (
            <div className="mx-4 sm:mx-6 mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-800">{submitError}</p>
            </div>
          )}

          <CardFooter className="flex-shrink-0 flex justify-between pt-6 pb-4 px-4 sm:px-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                disabled={!getPreviousStepId(currentStepId, formData)}
                className="flex items-center gap-1 transition-all duration-300 rounded-2xl border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900 hover:border-gray-400 min-h-[44px] px-4"
              >
                <ChevronLeft className="h-4 w-4" /> Vorige
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                type="button"
                onClick={
                  currentStepId === 'notes' ? handleSubmit : nextStep
                }
                disabled={!canProceed || isSubmitting}
                className="flex items-center gap-1 transition-all duration-300 rounded-2xl min-h-[44px] px-4"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Versturen...
                  </>
                ) : (
                  <>
                    {currentStepId === 'notes' ? "Versturen" : "Volgende"}
                    {currentStepId === 'notes' ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </>
                )}
              </Button>
            </motion.div>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
};

export default AssessmentForm;

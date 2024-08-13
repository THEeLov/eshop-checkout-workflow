import React from "react";
import {
  Box,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  Stepper,
} from "@chakra-ui/react";
import useOrderSteps from "../hooks/useOrderStep";

const OrderStepper = () => {
  const { steps, activeStep, handleStep } = useOrderSteps();

  return (
    <Stepper index={activeStep} size="lg" colorScheme="teal" display="flex" flexWrap="wrap">
      {steps.map((step, index) => (
        <Step key={index} className="step">
          <Box
            display="flex"
            alignItems="center"
            gap="1rem"
            _hover={{ background: "teal.50", cursor: "pointer" }}
            padding="1rem"
            onClick={handleStep(index)}
          >
            <StepIndicator>
              <StepStatus complete={<StepIcon />} incomplete={<StepNumber />} active={<StepNumber />} />
            </StepIndicator>

            <StepDescription>{step.label}</StepDescription>
          </Box>
          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  );
};

export default OrderStepper;

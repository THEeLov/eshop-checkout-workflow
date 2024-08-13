import { useMemo } from "react";
import useOrderData from "./useOrderData";
import { useNavigate } from "react-router-dom";

interface OrderStep {
  label: string;
  path: string;
}

const orderSteps: OrderStep[] = [
  {
    label: "Overview",
    path: "order-overview",
  },
  {
    label: "Payment",
    path: "payment-method",
  },
  {
    label: "Billing",
    path: "billing-info",
  },
  {
    label: "Confirmation",
    path: "confirmation",
  },
];

const useOrderSteps = () => {
  const { orderData } = useOrderData();
  const navigate = useNavigate();

  const activeStep = useMemo<number>(() => {
    if (typeof orderData.products === "undefined") {
      return 0;
    }

    if (typeof orderData.paymentMethod === "undefined") {
      return 1;
    }
    if (typeof orderData.billing === "undefined") {
      return 2;
    }

    return orderData.confirmed ? 4 : 3;
  }, [orderData]);

  const isStepDisabled = (step: number) => {
    return step !== activeStep && !isStepCompleted(step);
  };

  const isStepCompleted = (step: number) => {
    return step < activeStep;
  };

  const handleStep = (step: number) => () => {
    if (!isStepDisabled(step) && !orderData.confirmed) {
      navigate(`/order/${orderSteps[step]?.path}`);
    }
  };

  return { steps: orderSteps, activeStep, handleStep, isStepDisabled, isStepCompleted };
};

export default useOrderSteps;

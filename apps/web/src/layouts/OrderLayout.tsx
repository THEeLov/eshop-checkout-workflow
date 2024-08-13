import { Box, Button, Center } from "@chakra-ui/react";
import { Outlet, useNavigate } from "react-router-dom";
import OrderStepper from "../components/OrderStepper";
import useOrderData from "../hooks/useOrderData";

const OrderLayout = () => {
  const { resetData } = useOrderData();
  const navigate = useNavigate();

  const onReset = () => {
    resetData();
    navigate("/order/order-overview", { relative: "path" });
  };

  return (
    <Center>
      <Box maxWidth="900px" width="100%" display="flex" flexDirection="column" gap="1rem" marginTop="2rem">
        <OrderStepper />
        <Outlet /> <Button onClick={onReset}>Reset All</Button>
      </Box>
    </Center>
  );
};

export default OrderLayout;

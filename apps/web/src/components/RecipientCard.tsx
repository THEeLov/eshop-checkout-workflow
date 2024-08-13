import { Box, Card, CardBody, Text } from "@chakra-ui/react";
import type { Recipient } from "@repo/openapi/requests";
import React from "react";
import { IconButton } from "@chakra-ui/react";
import { TiArrowRightThick } from "react-icons/ti";
import useOrderData from "../hooks/useOrderData";
import { useNavigate } from "react-router-dom";

const RecipientCard = ({ rec }: { rec: Recipient }) => {
  const { orderData, updateOrderData } = useOrderData();
  const navigate = useNavigate();

  const handleSubmit = () => {
    updateOrderData({ ...orderData, recipient: rec });
    navigate("../payment-method", { relative: "path" });
  };

  return (
    <Card variant="filled">
      <CardBody display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Text pt="2" fontSize="lg" fontWeight="bold">
            {rec.nickname}
          </Text>
          <Text pt="2" fontSize="sm" color="grey">
            {rec.email}
          </Text>
        </Box>
        <IconButton
          aria-label="select"
          icon={<TiArrowRightThick />}
          size="lg"
          colorScheme="teal"
          isRound={true}
          onClick={handleSubmit}
        ></IconButton>
      </CardBody>
    </Card>
  );
};

export default RecipientCard;

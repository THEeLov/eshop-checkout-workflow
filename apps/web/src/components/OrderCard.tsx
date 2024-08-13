import React from "react";
import type { Product } from "@repo/openapi/requests";

import { Card, CardBody, Box, Text, IconButton, useToast } from "@chakra-ui/react";
import { RiDeleteBin5Fill } from "react-icons/ri";

const OrderCard = ({ title, price, discountedPrice }: Product) => {
  const toast = useToast();
  const handleDelete = () => {
    toast({
      title: "Product deleted",
      description: "Impossible to delete this product, theres no turning back.",
      status: "error",
      duration: 4500,
      isClosable: true,
    });
  };

  return (
    <Card variant="filled">
      <CardBody>
        <Box display="flex" justifyContent="space-between">
          <Box>
            <Text pt="2" fontSize="lg" fontWeight="bold">
              {title}
            </Text>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center" gap="4">
            {discountedPrice ? (
              <Box display="flex" gap="4">
                <Text pt="2" fontSize="sm" color="grey">
                  <del>{price} $</del>{" "}
                </Text>

                <Text pt="2" fontSize="lg">
                  {discountedPrice} $
                </Text>
              </Box>
            ) : (
              <Text pt="2" fontSize="lg">
                {price} ${" "}
              </Text>
            )}
            <IconButton aria-label="Search database" icon={<RiDeleteBin5Fill />} onClick={() => handleDelete()} />
          </Box>
        </Box>
      </CardBody>
    </Card>
  );
};

export default OrderCard;

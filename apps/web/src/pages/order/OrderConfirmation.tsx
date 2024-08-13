import { Box, Center } from "@chakra-ui/react";
import React from "react";
import { GiCheckMark } from "react-icons/gi";
import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const OrderConfirmation = () => {
  return (
    <Center width="100%" height="500px">
      <ChakraBox
        animate={{
          scale: [1, 1.7, 1],
        }}
        // @ts-ignore
        transition={{
          duration: 1,
          ease: "easeInOut",
          repeat: false,
        }}
        padding="1rem"
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="250px"
        height="250px"
      >
        <GiCheckMark size="contain" color="teal" />
      </ChakraBox>
      <Box fontSize="2rem" fontWeight="bold" color="teal">
        Your order has been placed!
      </Box>
    </Center>
  );
};

export default OrderConfirmation;

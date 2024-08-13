import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@chakra-ui/react";
import { BsCart2 } from "react-icons/bs";

const Home = () => {
  const navigate = useNavigate();

  const toCart = () => {
    navigate("/order", { relative: "path" });
  };

  return (
    <Box display="flex" gap="1rem" fontSize="2rem" justifyContent="center" alignItems="center" height="100vh">
      <Text>View your shopping cart</Text>
      <IconButton
        aria-label="cart"
        icon={<BsCart2 />}
        fontSize="36px"
        size="lg"
        variant="solid"
        colorScheme="teal"
        onClick={toCart}
      />
    </Box>
  );
};

export default Home;

import React from "react";
import { Form, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import useOrderData from "../../hooks/useOrderData";
import type { CardPayment } from "../../types/orderData";
import { paymentMethod } from "../../validationSchemas/forms";

// ui
import {
  Box,
  Button,
  Card,
  Center,
  Divider,
  Grid,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

// icons
import { CiCreditCard1, CiCalendarDate } from "react-icons/ci";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { BsCalendarMonth } from "react-icons/bs";
import { FaCcVisa, FaLocationArrow, FaGooglePay, FaApplePay } from "react-icons/fa";
import { TiArrowLeftThick } from "react-icons/ti";
import { GrPowerReset } from "react-icons/gr";

type PaymentMethod = z.infer<typeof paymentMethod>;

const OrderPayment = () => {
  const { orderData, updateOrderData } = useOrderData();
  const navigate = useNavigate();

  const {
    handleSubmit,
    reset,
    formState: { errors },
    register,
  } = useForm<PaymentMethod>({
    resolver: zodResolver(paymentMethod),
    defaultValues: orderData.paymentMethod,
  });

  const onSubmit: SubmitHandler<PaymentMethod> = (data) => {
    const cardData: CardPayment = {
      kind: "Card",
      ...data,
    };
    updateOrderData({ ...orderData, paymentMethod: cardData });
    navigate("../billing-info", { relative: "path" });
  };

  const handlePaySubmit = (type: boolean) => {
    updateOrderData({ ...orderData, paymentMethod: { kind: type ? "GooglePay" : "ApplePay" } });
    navigate("../billing-info", { relative: "path" });
  };

  const onBack = () => {
    navigate(`../${orderData.recipient === null ? "order-overview" : "order-gift"}`, { relative: "path" });
  };

  return (
    <Card padding="1rem" boxShadow="lg">
      <Accordion allowMultiple>
        <AccordionItem>
          <Box as="h1">
            <AccordionButton padding="1rem">
              <Box as="span" flex="1" textAlign="left" display="flex" gap="1rem" alignItems="center">
                <FaCcVisa fontSize="2rem" />
                <Text fontWeight="bold">Mastercard / Visa</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Box>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <AccordionPanel display="flex" flexDirection="column" gap="1rem">
              <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                <InputGroup display="flex" flexDirection="column" gap="1rem">
                  <InputLeftElement pointerEvents="none">
                    <CiCreditCard1 color="gray.300" />
                  </InputLeftElement>
                  <Input {...register("cardNumber")} placeholder="Card number" />
                  {errors.cardNumber && <Text color="red">{errors.cardNumber.message}</Text>}
                </InputGroup>
                <InputGroup display="flex" flexDirection="column" gap="1rem">
                  <InputLeftElement pointerEvents="none">
                    <MdDriveFileRenameOutline color="gray.300" />
                  </InputLeftElement>
                  <Input {...register("cardHolder")} placeholder="Holder name" />
                  {errors.cardHolder && <Text color="red">{errors.cardHolder.message}</Text>}
                </InputGroup>
              </Grid>

              <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                <InputGroup display="flex" flexDirection="column" gap="1rem">
                  <InputLeftElement pointerEvents="none">
                    <CiCalendarDate color="gray.300" />
                  </InputLeftElement>
                  <Input type="number" {...register("cardExpirationMonth")} placeholder="Month" />
                  {errors.cardExpirationMonth && <Text color="red">{errors.cardExpirationMonth.message}</Text>}
                </InputGroup>
                <InputGroup display="flex" flexDirection="column" gap="1rem">
                  <InputLeftElement pointerEvents="none">
                    <BsCalendarMonth color="gray.300" />
                  </InputLeftElement>
                  <Input {...register("cardExpirationYear")} placeholder="Year" />
                  {errors.cardExpirationYear && <Text color="red">{errors.cardExpirationYear.message}</Text>}
                </InputGroup>
                <InputGroup display="flex" flexDirection="column" gap="1rem">
                  <InputLeftElement pointerEvents="none">
                    <FaCcVisa color="gray.300" />
                  </InputLeftElement>
                  <Input {...register("cardCvv")} placeholder="CcV" />
                  {errors.cardCvv && <Text color="red">{errors.cardCvv.message}</Text>}
                </InputGroup>
              </Grid>

              <Box display="flex" justifyContent="space-between">
                <Button
                  rightIcon={<GrPowerReset />}
                  onClick={() => reset()}
                  colorScheme="teal"
                  size="lg"
                  variant="outline"
                >
                  Reset
                </Button>
                <IconButton
                  colorScheme="teal"
                  aria-label="Search database"
                  icon={<FaLocationArrow />}
                  width="fit-content"
                  size="lg"
                  type="submit"
                />
              </Box>
            </AccordionPanel>
          </Form>
        </AccordionItem>
      </Accordion>

      <Center padding="1rem" justifyContent="space-between">
        <Box display="flex" alignItems="center" gap="1rem">
          <FaGooglePay fontSize="2rem" />
          <Text fontWeight="bold">Google Pay</Text>
        </Box>
        <IconButton
          colorScheme="teal"
          aria-label="Search database"
          icon={<FaLocationArrow />}
          width="fit-content"
          size="lg"
          onClick={() => handlePaySubmit(true)}
        />
      </Center>
      <Divider opacity="0.2" />
      <Center padding="1rem" justifyContent="space-between">
        <Box display="flex" alignItems="center" gap="1rem">
          <FaApplePay fontSize="2rem" />
          <Text fontWeight="bold">Apple Pay</Text>
        </Box>
        <IconButton
          colorScheme="teal"
          aria-label="Search database"
          icon={<FaLocationArrow />}
          width="fit-content"
          size="lg"
          onClick={() => handlePaySubmit(false)}
        />
      </Center>
      <Box>
        <Button leftIcon={<TiArrowLeftThick />} onClick={onBack} colorScheme="teal">
          Back
        </Button>
      </Box>
    </Card>
  );
};

export default OrderPayment;

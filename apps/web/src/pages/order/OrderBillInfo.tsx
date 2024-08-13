import React from "react";
import { Form, useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { billInfo } from "../../validationSchemas/forms";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import useOrderData from "../../hooks/useOrderData";

// ui
import {
  Card,
  CardBody,
  CardHeader,
  FormLabel,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Divider,
  Button,
  Box,
  ButtonGroup,
} from "@chakra-ui/react";

// icons
import { MdDriveFileRenameOutline, MdAlternateEmail } from "react-icons/md";
import { FaPhone, FaAddressBook, FaCity } from "react-icons/fa";
import { TbBuildingEstate } from "react-icons/tb";
import { LuPlaneTakeoff } from "react-icons/lu";
import { GiPostStamp, GiCheckMark } from "react-icons/gi";
import { TiArrowLeftThick } from "react-icons/ti";
import { GrPowerReset } from "react-icons/gr";

type BillInfo = z.infer<typeof billInfo>;

const OrderBillInfo = () => {
  const { orderData, updateOrderData } = useOrderData();
  const navigate = useNavigate();

  const {
    handleSubmit,
    reset,
    formState: { errors },
    register,
  } = useForm<BillInfo>({
    resolver: zodResolver(billInfo),
    defaultValues: orderData.billing,
  });

  const onSubmit: SubmitHandler<BillInfo> = (data) => {
    updateOrderData({ ...orderData, billing: data, confirmed: true });

    // Post data to server
    console.log(orderData);
    navigate("../confirmation", { relative: "path" });
  };

  const onBack = () => {
    navigate("../payment-method", { relative: "path" });
  };

  return (
    <Card padding="1rem" boxShadow="lg">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormLabel htmlFor="name" margin="0">
          {" "}
          Name
        </FormLabel>
        <InputGroup display="flex" flexDirection="column">
          <InputLeftElement pointerEvents="none">
            <MdDriveFileRenameOutline color="gray.300" />
          </InputLeftElement>
          <Input {...register("name")} placeholder="Name and Surname" id="name" />
          {errors.name && <Text color="red">{errors.name.message}</Text>}
        </InputGroup>

        <FormLabel htmlFor="email" margin="0" marginTop="1rem">
          {" "}
          Email
        </FormLabel>
        <InputGroup display="flex" flexDirection="column">
          <InputLeftElement pointerEvents="none">
            <MdAlternateEmail color="gray.300" />
          </InputLeftElement>
          <Input {...register("email")} placeholder="Email" id="email" />
          {errors.email && <Text color="red">{errors.email.message}</Text>}
        </InputGroup>

        <FormLabel htmlFor="phone" margin="0" marginTop="1rem">
          {" "}
          Phone number
        </FormLabel>
        <InputGroup display="flex" flexDirection="column">
          <InputLeftElement pointerEvents="none">
            <FaPhone color="gray.300" />
          </InputLeftElement>
          <Input {...register("phone")} placeholder="Phone number" id="phone" />
          {errors.phone && <Text color="red">{errors.phone.message}</Text>}
        </InputGroup>

        <Card marginTop="1rem" variant="outline">
          <CardHeader>
            <Text fontWeight="bold">Billing Address</Text>
          </CardHeader>
          <Divider />
          <CardBody>
            <Grid
              templateAreas={`"address address"
                  "city state"
                  "country zipCode"`}
              gap={4}
            >
              <GridItem area={"address"}>
                <InputGroup display="flex" flexDirection="column">
                  <InputLeftElement pointerEvents="none">
                    <FaAddressBook color="gray.300" />
                  </InputLeftElement>
                  <Input {...register("address")} placeholder="Address" />
                  {errors.address && <Text color="red">{errors.address.message}</Text>}
                </InputGroup>
              </GridItem>

              <GridItem area={"city"}>
                <InputGroup display="flex" flexDirection="column">
                  <InputLeftElement pointerEvents="none">
                    <FaCity color="gray.300" />
                  </InputLeftElement>
                  <Input {...register("city")} placeholder="City" />
                  {errors.city && <Text color="red">{errors.city.message}</Text>}
                </InputGroup>
              </GridItem>

              <GridItem area={"state"}>
                <InputGroup display="flex" flexDirection="column">
                  <InputLeftElement pointerEvents="none">
                    <TbBuildingEstate color="gray.300" />
                  </InputLeftElement>
                  <Input {...register("state")} placeholder="State" />
                  {errors.state && <Text color="red">{errors.state.message}</Text>}
                </InputGroup>
              </GridItem>

              <GridItem area={"country"}>
                <InputGroup display="flex" flexDirection="column">
                  <InputLeftElement pointerEvents="none">
                    <LuPlaneTakeoff color="gray.300" />
                  </InputLeftElement>
                  <Input {...register("country")} placeholder="Country" />
                  {errors.country && <Text color="red">{errors.country.message}</Text>}
                </InputGroup>
              </GridItem>

              <GridItem area={"zipCode"}>
                <InputGroup display="flex" flexDirection="column">
                  <InputLeftElement pointerEvents="none">
                    <GiPostStamp color="gray.300" />
                  </InputLeftElement>
                  <Input {...register("zipCode")} placeholder="Zip code" />
                  {errors.zipCode && <Text color="red">{errors.zipCode.message}</Text>}
                </InputGroup>
              </GridItem>
            </Grid>
          </CardBody>
        </Card>
        <Box display="flex" justifyContent="space-between" marginTop="1rem">
          <ButtonGroup isAttached colorScheme="teal">
            <Button leftIcon={<TiArrowLeftThick />} onClick={onBack} colorScheme="teal" variant="solid" type="button">
              Back
            </Button>
            <Button variant="outline" rightIcon={<GrPowerReset />} onClick={() => reset()}>
              {" "}
              Reset{" "}
            </Button>
          </ButtonGroup>
          <Button colorScheme="teal" type="submit" rightIcon={<GiCheckMark />}>
            {" "}
            Complete{" "}
          </Button>
        </Box>
      </Form>
    </Card>
  );
};

export default OrderBillInfo;

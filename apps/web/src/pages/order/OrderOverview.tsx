import { useProductsServiceGetProducts } from "@repo/openapi/queries";
import useOrderData from "../../hooks/useOrderData";
import OrderCard from "../../components/OrderCard";
import { useNavigate } from "react-router-dom";

//ui
import { Box, ButtonGroup, Card, CardBody, CardFooter, Text, Button } from "@chakra-ui/react";

// icons
import { FaGift } from "react-icons/fa6";
import { BiSolidPurchaseTag } from "react-icons/bi";

const OrderOverview = () => {
  const { data: products } = useProductsServiceGetProducts();
  const { orderData, updateOrderData } = useOrderData();
  const navigate = useNavigate();

  const total = products?.reduce((acc, product) => {
    const priceToUse = product.discountedPrice !== undefined ? product.discountedPrice : product.price;
    return acc + priceToUse;
  }, 0);

  const onPurchase = (gift: boolean) => {
    const productIds = products?.map((product) => product.id);
    if (gift) {
      updateOrderData({ ...orderData, products: productIds });
      navigate("../order-gift", { relative: "path" });
    } else {
      updateOrderData({ ...orderData, products: productIds, recipient: null });
      navigate("../payment-method", { relative: "path" });
    }
  };

  return (
    <Card variant="elevated" boxShadow="lg">
      <CardBody>
        <Box overflowY="scroll" maxHeight="400px" overscrollBehavior="none">
          {products?.map((product, key) => (
            <Box padding="0.5rem" key={key}>
              <OrderCard
                id={product.id}
                title={product.title}
                price={product.price}
                discountedPrice={product.discountedPrice}
                key={key}
              />
            </Box>
          ))}
        </Box>
      </CardBody>
      <CardFooter display="flex" justifyContent="space-between">
        <Box display="flex">
          <Text fontSize="2rem" fontWeight="bold">
            Total price:&nbsp;
          </Text>
          <Text fontSize="2rem">{total} $</Text>
        </Box>

        <ButtonGroup isAttached colorScheme="teal">
          <Button colorScheme="teal" variant="solid" onClick={() => onPurchase(false)} leftIcon={<FaGift />}>
            Purchase
          </Button>
          <Button
            colorScheme="teal"
            variant="outline"
            onClick={() => onPurchase(true)}
            rightIcon={<BiSolidPurchaseTag />}
          >
            Gift to
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default OrderOverview;

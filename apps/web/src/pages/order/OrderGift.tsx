import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecipientsServiceGetRecipients } from "@repo/openapi/queries";
import RecipientCard from "../../components/RecipientCard";

// ui
import { Box, Button, Card, Input, InputGroup, InputLeftElement, Spinner } from "@chakra-ui/react";

// icons
import { TiArrowLeftThick } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";

const OrderGift = () => {
  const { data: recipients, isFetched } = useRecipientsServiceGetRecipients();
  const [_, setFilter] = useState("");
  const [filteredRecipients, setFilteredRecipients] = useState(recipients);
  const navigate = useNavigate();

  useEffect(() => {
    if (recipients) {
      setFilteredRecipients(recipients);
    }
  }, [recipients]);

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFilter(value);

    const filtered = recipients?.filter(
      (recipient) =>
        recipient.nickname.toLowerCase().includes(value.toLowerCase()) ||
        recipient.email.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredRecipients(filtered);
  };

  const onBack = () => {
    navigate("../order-overview", { relative: "path" });
  };

  return (
    <Card padding="1rem" boxShadow="lg">
      <InputGroup marginBottom="1rem">
        <Input onChange={handleFilterChange} placeholder="search..."></Input>
        <InputLeftElement pointerEvents="none">
          <FaSearch color="gray" />
        </InputLeftElement>
      </InputGroup>
      {!isFetched ? (
        <Spinner />
      ) : (
        <Box display="flex" flexDirection="column" gap="1rem" height="400px" overflowY="scroll">
          {" "}
          {filteredRecipients?.map((recipient, key) => <RecipientCard key={key} rec={recipient} />)}
        </Box>
      )}
      <Box marginTop="1rem">
        <Button leftIcon={<TiArrowLeftThick />} onClick={onBack} colorScheme="teal" variant="solid">
          Back
        </Button>
      </Box>
    </Card>
  );
};

export default OrderGift;

//This file is for the First  cards of tab ABout only Cards

import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Image,
} from "@chakra-ui/react";
import React from "react";

// import { VscVerifiedFilled } from "react-icons/vsc";

function CardCom({ cardData, addCardToBuyList }) {
  const BuyCards = (cardData) => {
    addCardToBuyList(cardData);
  };

  return (
    <Card
      className="cardAbout"
      border="3px solid black"
      boxShadow="1px 1px 5px black"
      borderRadius="10px"
      transition="0.5s ease"
      style={{ width: "340px" }}
      _hover={{
        // cursor: "pointer",
        boxShadow: "2px 2px 10px black",
        transform: "scale(1.02)",
      }}
    >
      <CardBody>
        <Image
          src={cardData.image}
          alt="shoes"
          width="100%"
          h="200px"
          objectFit="cover"
          borderRadius="5px"
          _hover={{
            cursor: "pointer",
          }}
        />

        <Box className="text_parent">
          <Heading
            color="white"
            fontSize="16px"
            noOfLines="1"
            mt="1rem"
            textAlign="left"
          >
            {cardData.title}
            {/* {cardData.verified ? <VscVerifiedFilled className="verified" /> : ""} */}
          </Heading>
          <Flex
            className="text_child"
            textTransform="capitalize"
            mt="16px"
            justifyContent="space-between"
          >
            <Box textAlign="left">
              <Heading as="h4" size="sm" color="white">
                {cardData.des1}
              </Heading>
              <Heading as="h4" size="sm" color="wheat">
                {cardData.price1}
                <span>{cardData.curr1}</span>
              </Heading>
            </Box>

            <Box textAlign="left">
              <Heading as="h4" size="sm" color="white">
                {cardData.des2}
              </Heading>
              <Heading as="h4" size="sm" color="wheat">
                {cardData.price2}
                <span>{cardData.curr2}</span>
              </Heading>
            </Box>
          </Flex>
        </Box>
      </CardBody>
      <CardFooter>
        <Flex justifyContent="center" alignItems="center" w="100%">
          <Button
            mr="auto"
            ml="auto"
            _hover={{
              // cursor: "pointer",
              boxShadow: "2px 2px 10px black",
              transform: "scale(1.02)",
            }}
            onClick={() => BuyCards(cardData)}
          >
            Buy Card
          </Button>
        </Flex>
      </CardFooter>
    </Card>
  );
}

export default CardCom;

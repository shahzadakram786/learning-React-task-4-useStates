import { Box, Flex, Image, Heading, Avatar, Input } from "@chakra-ui/react";
import React from "react";
import InputPass from "./inputPass/InputPass";

const AfterAvatar = () => {
  return (
    <Flex
      borderRadius={25}
      p="10px"
      border="1px solid black"
      background="grey"
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap="10px"
    >
      <Box size="sm" mb="10px" mt="20px">
        <Image
          w="60px"
          h="30px"
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png"
        />
      </Box>
      <Flex direction="column" justifyContent="center" alignItems="center">
        <Avatar src="https://bit.ly/broken-link" />
        <Heading color="white" size="md">
          Sign in
        </Heading>
        <Flex direction="column">
          <Input
            place
            color="white"
            placeholder="Email or Number"
            _placeholder={{ color: "black" }}
            size="md"
            w="auto"
          />
          <InputPass />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AfterAvatar;

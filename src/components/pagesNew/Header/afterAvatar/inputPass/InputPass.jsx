import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import React, { useState } from "react";

const InputPass = () => {
  const [Show, setShow] = useState(false);

  return (
    <InputGroup>
      <Input
        color="white"
        size="md"
        pr="4.5rem"
        placeholder="Enter Password"
        _placeholder={{ color: "black" }}
        type={Show ? "text" : "password"}
      />
      <InputRightElement w="4.5rem">
        <Button
          mt="30px"
          h="1.75rem"
          size="sm"
          onClick={() => {
            setShow(!Show);
          }}
        >
          {Show ? "Hide" : "Show"}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default InputPass;

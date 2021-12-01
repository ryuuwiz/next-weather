import { Flex, Spacer, FormControl, Input, Button } from "@chakra-ui/react";

const Form = () => {
  return (
    <FormControl id="search-city" isRequired>
      <Flex alignItems="center">
        <Input placeholder="Enter a city name..." colorScheme="blue" />
        <Spacer />
        <Button colorScheme="blue" rounded={6} ml={3}>
          Search
        </Button>
      </Flex>
    </FormControl>
  );
};

export default Form;

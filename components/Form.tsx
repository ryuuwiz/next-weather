import { Flex, Spacer, FormControl, Input, Button } from "@chakra-ui/react";

import { ChangeEvent, useState, MouseEvent } from "react";
import { FaSearch } from "react-icons/fa";

interface IProps {
  getWeather(newCity: string): void;
}

const Form = ({ getWeather }: IProps) => {
  const [value, setValue] = useState<string>("");

  const search = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();

    if (!value) return;

    getWeather(value);

    setValue("");
  };

  return (
    <FormControl id="search-city" isRequired>
      <Flex alignItems="center">
        <Input
          placeholder="Enter a city name..."
          colorScheme="blue"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
          p={5}
          value={value}
        />
        <Spacer />
        <Button
          colorScheme="blue"
          rounded="full"
          ml={2}
          p={2}
          onClick={(e: MouseEvent<HTMLButtonElement>) => search(e)}
        >
          <FaSearch />
        </Button>
      </Flex>
    </FormControl>
  );
};

export default Form;

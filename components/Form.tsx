import { Flex, Spacer, FormControl, Input, Button } from "@chakra-ui/react";

import { ChangeEvent, useState, MouseEvent } from "react";

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

    return;
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
          value={value}
        />
        <Spacer />
        <Button
          colorScheme="blue"
          rounded={6}
          ml={3}
          onClick={(e: MouseEvent<HTMLButtonElement>) => search(e)}
        >
          Search
        </Button>
      </Flex>
    </FormControl>
  );
};

export default Form;

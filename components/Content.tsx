import { Stack, Heading, Text } from "@chakra-ui/react";

const Content = () => {
  return (
    <>
      <Stack spacing={6} py={10} px={2}>
        <Heading size="lg" color="gray.600">
          Depok
        </Heading>
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="4xl"
          fontWeight="extrabold"
        >
          29 °C
        </Text>
      </Stack>
      <Stack spacing={2} p={2}>
        <Text color="gray.500" fontSize="xl" fontWeight="medium">
          Few clouds
        </Text>
        <Text color="gray.500" fontSize="md" fontWeight="medium">
          Humidity: 42%
        </Text>
        <Text color="gray.500" fontSize="md" fontWeight="medium">
          Wind Speed: 2.57 m/s
        </Text>
      </Stack>
    </>
  );
};

export default Content;

import type { NextPage } from "next";
import Head from "next/head";

import { Flex, Stack, Container, Heading, Text } from "@chakra-ui/react";

import Form from "../components/Form";

const Home: NextPage = () => {
  return (
    <Flex
      height="100vh"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(to-l, #7928CA, #FF0080)"
      w="100vw"
    >
      <Head>
        <title>Weather App</title>
        <meta name="description" content="Weather app using nextjs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Flex direction="column" background="gray.100" p={10} rounded={10}>
          <Form />
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
        </Flex>

        <Text
          color="gray.100"
          fontSize="md"
          fontWeight="medium"
          mt={10}
          align="center"
        >
          © 2021 Ryuuwiz
        </Text>
      </Container>
    </Flex>
  );
};

export default Home;

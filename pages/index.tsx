import type { NextPage } from "next";
import Head from "next/head";

import { Flex, Spacer } from "@chakra-ui/react";

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

      <main>
        <Flex direction="column" background="gray.100" p={10} rounded={10}>
          <Form />
          <Spacer />
        </Flex>
      </main>

      <footer></footer>
    </Flex>
  );
};

export default Home;

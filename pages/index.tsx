import type { NextPage } from "next";
import Head from "next/head";

import { Flex } from "@chakra-ui/react";

import Form from "../components/Form";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Weather App</title>
        <meta name="description" content="Weather app using nextjs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Flex height="100vh" alignItems="center" justifyContent="center">
          <Flex direction="column" background="gray.100" p={12} rounded={6}>
            <Form />
          </Flex>
        </Flex>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;

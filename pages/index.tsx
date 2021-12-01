import type { InferGetServerSidePropsType, NextPage } from "next";
import Head from "next/head";
import { GetServerSideProps } from "next";

import { Flex, Container } from "@chakra-ui/react";

import Form from "../components/Form";
import Content from "../components/Content";
import Footer from "../components/Footer";

import axios from "axios";
import useSWR from "swr";

const fetcher = (url: any) => axios.get(url).then((res) => res.data);

const Home: NextPage = ({
  API_KEY,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { data, error } = useSWR(
    `https://api.openweathermap.org/data/2.5/weather?q=depok&appid=${API_KEY}&units=metric`,
    fetcher
  );

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
          <Content />
        </Flex>
        <Footer />
      </Container>
    </Flex>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const API_KEY = process.env.API_KEY;
  return {
    props: {
      API_KEY,
    },
  };
};

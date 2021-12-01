import type { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import { GetStaticProps } from "next";

import { Flex, Container } from "@chakra-ui/react";

import Form from "../components/Form";
import Content from "../components/Content";
import Footer from "../components/Footer";

import { useState } from "react";
import axios from "axios";
import useSWR from "swr";

const fetcher = (url: any) => axios.get(url).then((res) => res.data);

const useWeather = (city: string, api_key: string) => {
  const { data, error } = useSWR(
    city
      ? `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
      : null,
    fetcher
  );

  return {
    weather: data,
    isLoading: !error && !data,
    isError: error,
  };
};

const Home: NextPage = ({
  API_KEY,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [city, setCity] = useState<string>("");

  const { weather, isLoading, isError } = useWeather(city, API_KEY);

  const getWeather = (newCity: string): void => {
    if (!newCity) return;
    setCity(newCity);
  };

  console.log(weather);

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
          <Form getWeather={getWeather} />
          <Content />
        </Flex>
        <Footer />
      </Container>
    </Flex>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const API_KEY = process.env.API_KEY;
  return {
    props: {
      API_KEY,
    },
  };
};

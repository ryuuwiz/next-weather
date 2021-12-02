import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";

import { Flex, Container } from "@chakra-ui/react";

import Form from "../components/Form";
import Weather from "../components/Weather";
import SkeletonWeather from "../components/SkeletonWeather";
import Error from "../components/Error";
import Footer from "../components/Footer";

import { useState } from "react";
import axios from "axios";
import useSWR from "swr";

const fetcher = (url: any) => axios.get(url).then((res) => res.data);

export const getStaticProps: GetStaticProps = async () => {
  const { region } = await fetcher("https://json.geoiplookup.io/");

  return {
    props: {
      region,
    },
    revalidate: 5,
  };
};

const Home: NextPage = ({
  region,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [city, setCity] = useState<string>(() => (region ? region : ""));
  const { data, error } = useSWR(
    () => (city ? `/api/weather/${city}` : null),
    fetcher
  );

  const getWeather = (newCity: string): void => {
    if (!newCity) return;
    setCity(newCity);
  };

  return (
    <>
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
            {!data && !error ? (
              <SkeletonWeather />
            ) : !data ? (
              <Error />
            ) : (
              <Weather data={data} />
            )}
          </Flex>
          <Footer />
        </Container>
      </Flex>
    </>
  );
};

export default Home;

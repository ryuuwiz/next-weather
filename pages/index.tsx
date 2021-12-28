import type { NextPage } from "next";
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

const Home: NextPage = () => {
  const [city, setCity] = useState<string>("");

  const { data: curr } = useSWR("https://json.geoiplookup.io/", fetcher);

  const { data: weather, error } = useSWR(
    () => (!city ? "/api/weather/" + curr.region : "/api/weather/" + city),
    fetcher
  );

  const getWeather = (city: string): void => {
    if (!city) return;
    setCity(city);
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
            {!weather && !error ? (
              <SkeletonWeather />
            ) : !weather ? (
              <Error />
            ) : (
              <Weather data={weather} />
            )}
          </Flex>
          <Footer />
        </Container>
      </Flex>
    </>
  );
};

export default Home;

import { Stack, Heading, Text, Img, Flex, Box } from "@chakra-ui/react";

interface IProps {
  weatherData: any;
}

const Content = ({ weatherData }: IProps) => {
  const iconTime = weatherData.weather[0].icon.replace(/[0-9\n]/g, "");

  return (
    <>
      <Stack spacing={6} p={5}>
        <Flex direction="row" alignItems="center">
          <Box
            backgroundColor={iconTime === "n" ? "gray.400" : "yellow.400"}
            borderRadius="full"
            mr={2}
          >
            <Img
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt={`${weatherData.weather[0].icon}`}
              boxSize="60px"
              loading="lazy"
            />
          </Box>
          <Heading size="lg" color="gray.600">
            {weatherData.name}, {weatherData.sys.country}
          </Heading>
        </Flex>
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
        >
          {Math.floor(weatherData.main.temp)} °C
        </Text>
      </Stack>
      <Stack spacing={2} p={5} backgroundColor="gray.200" rounded={10}>
        <Text color="gray.600" fontSize="xl" fontWeight="medium">
          Feels like {Math.floor(weatherData.main.feels_like)} °C
        </Text>
        <Text color="gray.600" fontSize="md" fontWeight="medium">
          Humidity: {weatherData.main.humidity}%
        </Text>
        <Text color="gray.600" fontSize="md" fontWeight="medium">
          Wind Speed: {weatherData.wind.speed} m/s
        </Text>
      </Stack>
    </>
  );
};

export default Content;

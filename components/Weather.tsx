import { Stack, Heading, Text, Img, Flex, Box } from "@chakra-ui/react";

interface IProps {
  data: any;
}

const Weather = ({ data }: IProps) => {
  const { weather } = data;
  const iconTime = weather.weather[0].icon.replace(/[0-9\n]/g, "");

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
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={`${weather.weather[0].icon}`}
              boxSize="60px"
              loading="lazy"
            />
          </Box>
          <Heading size="lg" color="gray.600">
            {weather.name}, {weather.sys.country}
          </Heading>
        </Flex>
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
        >
          {Math.floor(weather.main.temp)} °C
        </Text>
      </Stack>
      <Stack spacing={5} p={5} backgroundColor="gray.200" rounded={10}>
        <Text color="gray.600" fontSize="xl" fontWeight="medium">
          Feels like {Math.floor(weather.main.feels_like)} °C
        </Text>
        <Text color="gray.600" fontSize="md" fontWeight="medium">
          Humidity: {weather.main.humidity}%
        </Text>
        <Text color="gray.600" fontSize="md" fontWeight="medium">
          Wind Speed: {weather.wind.speed} m/s
        </Text>
      </Stack>
    </>
  );
};

export default Weather;

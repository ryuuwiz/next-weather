import useSWR from "swr";
import fetcher from "./fetcher";

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

export default useWeather;

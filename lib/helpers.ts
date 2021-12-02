import axios from "axios";

const getWeatherByCity = async (city: string | string[]) => {
  const { data } = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}&units=metric`
  );

  return data;
};

export default getWeatherByCity;

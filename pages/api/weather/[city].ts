import getWeatherByCity from "../../../lib/helpers";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { city } = req.query;

    const weather = await getWeatherByCity(city);

    res.status(200).json({ weather });
  } catch (error) {
    res.status(500).json({ error });
  }
}

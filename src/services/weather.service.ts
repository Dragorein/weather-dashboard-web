import { reqWeatherI } from "@/common/interface/service/weather/request.interface";
import { apiSecureClientV1 } from "./axios";

export const GetWeather = async () => {
  const data = await apiSecureClientV1.get("weather");

  return data.data;
};

export const SearchWeather = async (body: reqWeatherI) => {
  const data = await apiSecureClientV1.post("weather", body);

  return data.data;
};

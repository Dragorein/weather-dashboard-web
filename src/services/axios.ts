import { API_URL_V1 } from "@/config/constants";
import axios from "axios";

export const apiClientV1 = axios.create({
  baseURL: API_URL_V1,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

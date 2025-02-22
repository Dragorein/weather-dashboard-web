import { API_URL_V1 } from "@/config/constants";
import axios from "axios";

export const apiClientV1 = axios.create({
  baseURL: API_URL_V1,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const apiSecureClientV1 = axios.create({
  baseURL: API_URL_V1,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

apiSecureClientV1.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = sessionStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

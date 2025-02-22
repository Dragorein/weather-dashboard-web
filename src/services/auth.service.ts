import {
  reqLoginI,
  reqRegisterI,
  resLoginI,
  resRegisterI,
} from "@/interface/service";
import { apiClientV1 } from "./axios";

export const LoginService = async (body: reqLoginI): Promise<resLoginI> => {
  const data: resLoginI = await apiClientV1
    .post("/auth/login", body)
    .then((response) => response.data);

  return data;
};

export const RegisterService = async (
  body: reqRegisterI
): Promise<resRegisterI> => {
  const data: resRegisterI = await apiClientV1.post("/auth/register", body);
  return data;
};

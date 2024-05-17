import axios from "axios";
import { updateToken } from "../utils";

export const extraConfig = () => {
  return axios.create({
    baseURL: "https://nodeuser-production-0fd1.up.railway.app/api/v1",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${updateToken()}`,
    },
    timeout: 60000,
  });
};

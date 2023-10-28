import axios from "axios";

export const HttpAxios = axios.create({
  baseURL: "http://localhost:4001/api/v1/",
  headers: {
    // accessToken :
    "Content-Type": "application/json",
  },
});

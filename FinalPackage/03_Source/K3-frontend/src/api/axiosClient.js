import axios from "axios";
import { BASE_URL } from "../constans/baseURL";
const axiosClien = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClien.interceptors.request.use(async (config) => {
  //   const token=localStorage.getItem('token');
  //   config.headers.Authorization=`Bearer ${token}`;
  return config;
});

axiosClien.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response.data;
  },
  (error) => {
    throw error;
  }
);

export default axiosClien;

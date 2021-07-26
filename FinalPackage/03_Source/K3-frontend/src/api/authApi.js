import axiosClien from "./axiosClient";

const AuthApi = {
  Login: (params) => {
    const url = "/login";
    return axiosClien.post(url, params);
  },
  SignUp: (params) => {
    const url = "/register";
    return axiosClien.post(url, params);
  },
};

export default AuthApi;

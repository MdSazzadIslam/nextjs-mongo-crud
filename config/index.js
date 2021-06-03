import axios from "axios";

const service = axios.create({
  baseURL: process.env.API_URI_PRODUCTION,
  timeout: 20000, // request timeout
});

// request interceptor

service.interceptors.request.use(
  (config) => {
    // Do something before request is sent

    config.headers["Content-Type"] = "application/json";

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default service;

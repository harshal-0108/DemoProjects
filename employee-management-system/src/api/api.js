import axios from "axios";

const api = axios.create({
  baseURL:
    "https://jsonplaceholder.typicode.com",
});

api.interceptors.request.use(
  (config) => {
    console.log(
      "Request Sent:",
      config.url
    );

    return config;
  },

  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => {
    console.log(
      "Success:",
      response.status
    );

    return response;
  },

  (error) => {
    console.log(
      "Global Error:",
      error.message
    );

    return Promise.reject(error);
  }
);

export default api;
import axios from "axios";

const api = axios.create({
  baseURL:
    "https://jsonplaceholder.typicode.com"
});
api.interceptors.request.use(

  (config) => {

    console.log(
      "Request Interceptor Running"
    );

    config.headers.Authorization =
      "Bearer fake-token-123";

    return config;
  },

  (error) => {

    return Promise.reject(error);

  }

);
api.interceptors.response.use(

  (response) => {

    console.log(
      "Response Interceptor Running"
    );

    return response;
  },

  (error) => {

    console.log(
      "Global Error Handler"
    );

    alert(
      "Something went wrong!"
    );

    return Promise.reject(error);
  }

);

export default api;
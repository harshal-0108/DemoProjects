import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

api.interceptors.response.use(

  (response) => {

    console.log(
      "Success Status:",
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
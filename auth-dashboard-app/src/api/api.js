import axios from "axios";

const api = axios.create({
  baseURL:
    "https://jsonplaceholder.typicode.com"
});

export default api;
api.interceptors.request.use(

  (config) => {

    const token =
      localStorage.getItem(
        "accessToken"
      );

    if (token) {

      config.headers.Authorization =
        `Bearer ${token}`;

    }

    return config;
  }

);
api.interceptors.response.use(

  (response) => response,

  async (error) => {

    if (
      error.response &&
      error.response.status === 401
    ) {

      console.log(
        "Refreshing Token..."
      );

      localStorage.setItem(
        "accessToken",
        "new-access-token"
      );

      alert(
        "Token Refreshed!"
      );
    }

    if (
      error.response &&
      error.response.status === 403
    ) {

      alert(
        "Session Expired!"
      );

      localStorage.clear();

      window.location.reload();
    }

    return Promise.reject(error);
  }

);
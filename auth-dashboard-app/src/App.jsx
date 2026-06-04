import { useState } from "react";

import Login
from "./components/Login";

import Dashboard
from "./components/Dashboard";

function App() {

  const [isLoggedIn,
    setIsLoggedIn] =
    useState(

      !!localStorage.getItem(
        "accessToken"
      )

    );

  const login = () => {

    setIsLoggedIn(true);

  };

  const logout = () => {

    localStorage.clear();

    setIsLoggedIn(false);

  };

  return (

    <>
      {

        isLoggedIn

          ?

          <Dashboard
            onLogout={logout}
          />

          :

          <Login
            onLogin={login}
          />

      }
    </>

  );

}

export default App;
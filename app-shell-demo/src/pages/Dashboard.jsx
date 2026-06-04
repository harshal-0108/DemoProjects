import {
  useContext
}
from "react";

import {
  AuthContext
}
from "../context/AuthContext";

import {
  ThemeContext
}
from "../context/ThemeContext";

function Dashboard() {

  const {
    user,
    logout
  }
  =
  useContext(
    AuthContext
  );

  const {
    theme,
    toggleTheme
  }
  =
  useContext(
    ThemeContext
  );

  return (

    <div>

      <h2>
        Dashboard
      </h2>

      <h3>
        Welcome
        {" "}
        {user?.name}
      </h3>

      <h3>
        Theme:
        {" "}
        {theme}
      </h3>

      <button
        onClick={
          toggleTheme
        }
      >
        Toggle Theme
      </button>

      <br />
      <br />

      <button
        onClick={
          logout
        }
      >
        Logout
      </button>

    </div>

  );

}

export default Dashboard;
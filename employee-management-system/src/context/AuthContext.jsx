import { createContext, useState } from "react";

export const AuthContext =
  createContext();

function AuthProvider({ children }) {

  const [user, setUser] =
    useState(() => {

      const token =
        localStorage.getItem("token");

      const username =
        localStorage.getItem("username");

      const role =
        localStorage.getItem("role");

      return token
        ? { username, role }
        : null;
    });

  const login = (
    username,
    role
  ) => {

    localStorage.setItem(
      "token",
      "fake-jwt-token"
    );

    localStorage.setItem(
      "username",
      username
    );

    localStorage.setItem(
      "role",
      role
    );

    setUser({
      username,
      role
    });
  };

  const logout = () => {

    localStorage.clear();

    setUser(null);
  };

  return (

    <AuthContext.Provider
      value={{
        user,
        login,
        logout
      }}
    >

      {children}

    </AuthContext.Provider>

  );
}

export default AuthProvider;
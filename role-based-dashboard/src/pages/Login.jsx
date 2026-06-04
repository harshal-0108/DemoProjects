import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const [role, setRole] =
    useState("student");

  const navigate =
    useNavigate();

  const handleLogin = () => {

    localStorage.setItem(
      "token",
      "fake-jwt-token"
    );

    localStorage.setItem(
      "role",
      role
    );

    navigate("/dashboard");
  };

  return (

    <div className="container">

      <h2>Login</h2>

      <select
        value={role}
        onChange={(e) =>
          setRole(e.target.value)
        }
      >

        <option value="student">
          Student
        </option>

        <option value="admin">
          Admin
        </option>

      </select>

      <br /><br />

      <button
        onClick={handleLogin}
      >
        Login
      </button>

    </div>

  );
}

export default Login;
import { useState } from "react";

function Login({ onLogin }) {

  const [username, setUsername] = useState("");

  const handleLogin = () => {

    if (!username) {
      alert("Enter Username");
      return;
    }

    const fakeToken =
      "jwt-token-" + Date.now();

    localStorage.setItem(
      "token",
      fakeToken
    );

    localStorage.setItem(
      "username",
      username
    );

    onLogin();
  };

  return (
    <div className="container">

      <h2>Login Page</h2>

      <input
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e) =>
          setUsername(e.target.value)
        }
      />

      <button
        onClick={handleLogin}
      >
        Login
      </button>

    </div>
  );
}

export default Login;
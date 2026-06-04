function Login({ onLogin }) {

  const handleLogin = () => {

    localStorage.setItem(
      "accessToken",
      "demo-access-token"
    );

    localStorage.setItem(
      "refreshToken",
      "demo-refresh-token"
    );

    onLogin();
  };

  return (

    <div className="container">

      <h2>Login Page</h2>

      <button
        onClick={handleLogin}
      >
        Login
      </button>

    </div>

  );

}

export default Login;
function Dashboard({ onLogout }) {

  const username =
    localStorage.getItem(
      "username"
    );

  const token =
    localStorage.getItem(
      "token"
    );

  return (

    <div className="container">

      <h2>
        Welcome {username}
      </h2>

      <p>
        Token:
      </p>

      <small>
        {token}
      </small>

      <br />
      <br />

      <button
        onClick={onLogout}
      >
        Logout
      </button>

    </div>

  );
}

export default Dashboard;
import api from "../api/api";

function Dashboard({ onLogout }) {

  const simulate401 =
    async () => {

      try {

        await api.get(
          "/wrong-url"
        );

      }
      catch {

      }

    };

  const simulate403 =
    () => {

      const fakeError = {

        response: {

          status: 403

        }

      };

      api.interceptors.response.handlers[0]
        .rejected(fakeError);

    };

  return (

    <div className="container">

      <h2>
        Dashboard
      </h2>

      <p>
        Access Token Stored
      </p>

      <button
        onClick={simulate401}
      >
        Simulate 401
      </button>

      <br /><br />

      <button
        onClick={simulate403}
      >
        Simulate 403
      </button>

      <br /><br />

      <button
        onClick={onLogout}
      >
        Logout
      </button>

    </div>

  );

}

export default Dashboard;
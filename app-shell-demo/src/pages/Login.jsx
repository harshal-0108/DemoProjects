import {
  useContext,
  useState
}
from "react";

import {
  AuthContext
}
from "../context/AuthContext";

function Login() {

  const [name,
    setName]
    = useState("");

  const {
    login
  }
  =
  useContext(
    AuthContext
  );

  return (

    <div>

      <h2>
        Login
      </h2>

      <input
        value={name}
        onChange={(e)=>
          setName(
            e.target.value
          )
        }
      />

      <button
        onClick={() =>
          login(name)
        }
      >

        Login

      </button>

    </div>

  );

}

export default Login;
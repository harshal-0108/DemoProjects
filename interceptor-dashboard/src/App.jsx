import { useEffect } from "react";
import { useState } from "react";

import api from "./api/api";
import UserCard from "./components/UserCard";

function App() {

  const [users, setUsers] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const fetchUsers =
      async () => {

        try {

          const response =
            await api.get("/users");

          setUsers(
            response.data
          );

        }

        catch (error) {

          console.log(error);

        }

        finally {

          setLoading(false);

        }

      };

    fetchUsers();

  }, []);

  if (loading) {

    return <h1>Loading...</h1>;

  }

  return (

    <div>

      <h1>
        Secure User Dashboard
      </h1>

      {

        users.map(user => (

          <UserCard
            key={user.id}
            user={user}
          />

        ))

      }

    </div>

  );

}

export default App;
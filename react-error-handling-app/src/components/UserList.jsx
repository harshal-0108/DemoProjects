import { useEffect, useState } from "react";
import api from "../api/api";

function UserList() {

  const [users, setUsers] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {

    const fetchUsers = async () => {

      try {

        const response =
          await api.get("/users");

        setUsers(response.data);

      }

      catch (err) {

        setError(
          "Unable to load users."
        );

      }

      finally {

        setLoading(false);

      }
    };

    fetchUsers();

  }, []);

  if (loading) {

    return (
      <h2 className="text-xl text-blue-600">
        Loading Users...
      </h2>
    );
  }

  if (error) {

    return (
      <h2 className="text-xl text-red-600">
        {error}
      </h2>
    );
  }

  return (

    <div className="grid gap-4">

      {users.map((user) => (

        <div
          key={user.id}
          className="bg-white p-4 rounded shadow"
        >

          <h3 className="font-bold">

            {user.name}

          </h3>

          <p>

            {user.email}

          </p>

        </div>

      ))}

    </div>
  );
}

export default UserList;
import { useQuery }
from "@tanstack/react-query";

import api
from "../api/api";

function UserList() {

  const fetchUsers =
    async () => {

      const response =
        await api.get("/users");

      return response.data;
    };

  const {
    data,
    isLoading,
    error,
    refetch
  }
  =
  useQuery({

    queryKey: ["users"],

    queryFn: fetchUsers

  });

  if (isLoading) {

    return <h2>Loading...</h2>;

  }

  if (error) {

    return (
      <h2>Error Loading Users</h2>
    );

  }

  return (

    <div>

      <button
        onClick={refetch}
      >
        Refresh Users
      </button>

      {
        data.map(user => (

          <div
            key={user.id}
          >

            <h3>
              {user.name}
            </h3>

          </div>

        ))
      }

    </div>

  );

}

export default UserList;
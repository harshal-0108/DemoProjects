import { useState } from "react";

import { useMutation, useQueryClient }
from "@tanstack/react-query";

import api from "../api/api";

function AddUser() {

  const [name, setName] =
    useState("");

  const queryClient =
    useQueryClient();

  const mutation =
    useMutation({

      mutationFn:
        async (newUser) => {

          const response =
            await api.post(
              "/users",
              newUser
            );

          return response.data;
        },

      onSuccess: () => {

        alert(
          "User Added Successfully!"
        );

        queryClient.invalidateQueries({
          queryKey: ["users"]
        });

        setName("");

      }

    });

  const handleSubmit =
    (e) => {

      e.preventDefault();

      mutation.mutate({

        name: name

      });

    };

  return (

    <form
      onSubmit={handleSubmit}
    >

      <input
        type="text"
        placeholder="Enter User Name"
        value={name}
        onChange={(e) =>
          setName(
            e.target.value
          )
        }
      />

      <button
        type="submit"
        disabled={
          mutation.isPending
        }
      >

        {
          mutation.isPending
            ? "Adding..."
            : "Add User"
        }

      </button>

    </form>

  );

}

export default AddUser;
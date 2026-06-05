import { useState } from "react";
import Notification from "./Notification";

function AddEmployee() {

  const [name, setName] =
    useState("");

  const [message, setMessage] =
    useState("");

  const handleAdd = () => {

    setMessage(
      `${name} added successfully`
    );

    setName("");
  };

  return (

    <div className="bg-white p-4 rounded shadow mb-4">

      <Notification
        message={message}
      />

      <h2 className="font-bold mb-2">
        Add Employee
      </h2>

      <input
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
        placeholder="Employee Name"
        className="border p-2 rounded w-full mb-2"
      />

      <button
        onClick={handleAdd}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Add
      </button>

    </div>

  );
}

export default AddEmployee;
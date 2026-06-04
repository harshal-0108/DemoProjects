import { useState } from "react";

function StudentForm({ addStudent }) {

  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) return;

    addStudent(name);

    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <button type="submit">
        Add Student
      </button>

    </form>
  );
}

export default StudentForm;
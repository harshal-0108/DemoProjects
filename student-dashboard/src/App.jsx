import { useState } from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import { useCallback } from "react";

import StudentCard from "./components/StudentCard";
import StudentForm from "./components/StudentForm";

import useCounter from "./hooks/useCounter";

function App() {

  const [students, setStudents] = useState([]);

  const [showStudents, setShowStudents] =
    useState(true);

  const { count, increase } =
    useCounter();

  const addStudent = useCallback(
    (name) => {

      const newStudent = {
        id: Date.now(),
        name
      };

      setStudents(prev => [
        ...prev,
        newStudent
      ]);

      increase();

    },
    [increase]
  );

  const deleteStudent = (id) => {

    setStudents(
      students.filter(
        student => student.id !== id
      )
    );
  };

  const totalStudents = useMemo(
    () => students.length,
    [students]
  );

  useEffect(() => {

    console.log("Component Mounted");

    return () => {
      console.log("Component Unmounted");
    };

  }, []);

  useEffect(() => {

    document.title =
      `Students: ${totalStudents}`;

  }, [totalStudents]);

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px"
      }}
    >

      <h1>
        Student Dashboard
      </h1>

      <StudentForm
        addStudent={addStudent}
      />

      <h2>
        Total Students:
        {totalStudents}
      </h2>

      <h3>
        Added Count:
        {count}
      </h3>

      <button
        onClick={() =>
          setShowStudents(
            !showStudents
          )
        }
      >
        Toggle List
      </button>

      {showStudents && (

        <div>

          {students.map(student => (

            <StudentCard
              key={student.id}
              student={student}
              deleteStudent={
                deleteStudent
              }
            />

          ))}

        </div>

      )}

    </div>
  );
}

export default App;
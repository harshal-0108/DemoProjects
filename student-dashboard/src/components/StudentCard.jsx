function StudentCard({ student, deleteStudent }) {

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        margin: "10px",
        borderRadius: "10px"
      }}
    >
      <h3>{student.name}</h3>

      <button
        onClick={() => deleteStudent(student.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default StudentCard;
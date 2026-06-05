import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

import EmployeeList from "../components/EmployeeList";
import AddEmployee from "../components/AddEmployee";

function Dashboard() {

  const { logout } =
    useContext(AuthContext);

  const username =
    localStorage.getItem("username");

  const role =
    localStorage.getItem("role");

  const handleLogout = () => {

    logout();

  };

  return (

    <div className="min-h-screen bg-gray-100">

      <div className="bg-blue-600 text-white p-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold">
          Employee Management System
        </h1>

        <button
          onClick={handleLogout}
          className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>

      </div>

      <div className="p-8">

        <h2 className="text-3xl font-bold mb-2">
          Welcome {username}
        </h2>

        <p className="text-lg mb-6">
          Role : <span className="font-semibold">{role}</span>
        </p>

        {role === "admin" && (
          <AddEmployee />
        )}

        <EmployeeList />

      </div>

    </div>

  );
}

export default Dashboard;
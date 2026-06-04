import { Link } from "react-router-dom";

function Dashboard() {

  const role =
    localStorage.getItem("role");

  return (

    <div className="container">

      <h2>Dashboard</h2>

      <h3>
        Role: {role}
      </h3>

      {
        role === "admin" && (

          <Link to="/admin">

            <button>
              Admin Panel
            </button>

          </Link>

        )
      }

    </div>

  );
}

export default Dashboard;
const logout = () => {

  localStorage.clear();

  window.location.href = "/";
};
<button
  onClick={logout}
>
  Logout
</button>
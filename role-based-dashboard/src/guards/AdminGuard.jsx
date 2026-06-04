import { Navigate }
from "react-router-dom";

function AdminGuard({
  children
}) {

  const role =
    localStorage.getItem(
      "role"
    );

  if (role !== "admin") {

    return (
      <Navigate
        to="/dashboard"
      />
    );

  }

  return children;
}

export default AdminGuard;
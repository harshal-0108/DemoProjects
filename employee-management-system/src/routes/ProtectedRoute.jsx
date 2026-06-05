import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Login from "../pages/Login";

function ProtectedRoute({ children }) {

  const { user } = useContext(AuthContext);

  if (!user) {

    return <Login />;

  }

  return children;
}

export default ProtectedRoute;
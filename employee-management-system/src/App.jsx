import { useContext } from "react";

import { AuthContext } from "./context/AuthContext";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import ProtectedRoute from "./routes/ProtectedRoute";

function App() {

  const { user } =
    useContext(AuthContext);

  if (!user) {

    return <Login />;

  }

  return (

    <ProtectedRoute>

      <Dashboard />

    </ProtectedRoute>

  );
}

export default App;
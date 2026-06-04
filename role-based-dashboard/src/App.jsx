import {
  BrowserRouter,
  Routes,
  Route
}
from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AdminPanel from "./pages/AdminPanel";

import ProtectedRoute
from "./guards/ProtectedRoute";

import AdminGuard
from "./guards/AdminGuard";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/dashboard"
          element={

            <ProtectedRoute>

              <Dashboard />

            </ProtectedRoute>

          }
        />

        <Route
          path="/admin"
          element={

            <ProtectedRoute>

              <AdminGuard>

                <AdminPanel />

              </AdminGuard>

            </ProtectedRoute>

          }
        />

      </Routes>

    </BrowserRouter>

  );

}

export default App;
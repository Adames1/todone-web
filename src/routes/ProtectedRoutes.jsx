import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";

function ProtectedRoutes() {
  const user = false;

  if (!user) {
    return <Navigate to="auth/login" replace />;
  }
  return <Outlet />;
}

export default ProtectedRoutes;

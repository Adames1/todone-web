import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoutes from "./PublicRoutes";

import Home from "../pages/app/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

function AppRoutes() {
  return (
    <Routes>
      {/* protected routes */}
      <Route path="/" element={<ProtectedRoutes />}>
        <Route index element={<Home />} />
      </Route>

      {/* public routes */}
      <Route element={<PublicRoutes />}>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;

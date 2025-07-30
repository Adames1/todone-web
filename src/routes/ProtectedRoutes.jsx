import { useEffect, useState } from "react";

import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";

import { onAuthListener } from "../firebase/auth/auth";

function ProtectedRoutes() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const unsubscribe = onAuthListener((currentUser) => {
      console.log("Usuario detectado por Firebase:", currentUser);
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  if (!user) {
    return <Navigate to="auth/login" replace />;
  }
  return <Outlet />;
}

export default ProtectedRoutes;

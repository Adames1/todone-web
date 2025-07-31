import { useEffect, useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import { Outlet, Navigate } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen";

function PublicRoutes() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <LoadingScreen />; // Puedes poner un spinner aquí
  }

  if (user) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

export default PublicRoutes;

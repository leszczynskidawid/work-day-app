import { Navigate, Outlet, useLocation } from "react-router";
import { useAuth } from "../../context/AuthContext";
import { SCircuralProgress } from "../../components/CircuralProgress";

export const PrivateRoute = () => {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();
  console.log("laoding", loading, <br />, "autH", isAuthenticated);

  if (loading) {
    return <SCircuralProgress />;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

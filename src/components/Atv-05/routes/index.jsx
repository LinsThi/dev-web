import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const PrivateRoutes = ({ children }) => {
  const { signed } = useAuth();

  return signed ? children : <Navigate to="/" />;
};

export const PrivateRouteWithoutLogin = () => {
  const { signed } = useAuth();
  return signed ? <Navigate to="createStudent" /> : <Outlet />;
};

import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const PrivateRoutes = () => {
  const { signed } = useAuth();
  // console.log("signed is " + signed);
  return signed ? <Outlet /> : <Navigate to="/" />;
};

export const PrivateRouteWithoutLogin = () => {
  const { signed } = useAuth();
  return signed ? <Navigate to="createStudent" /> : <Outlet />;
};

import { Outlet, Navigate } from "react-router-dom";

export const ProtectedRoutes = () => {
  const user: boolean | null = null;

  return user ? <Outlet /> : <Navigate to={"/login"} />;
};

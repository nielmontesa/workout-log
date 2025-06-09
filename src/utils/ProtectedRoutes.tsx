import { Outlet, Navigate } from "react-router-dom";
import { useAuthStore } from "../stores/authStore";

export const ProtectedRoutes = () => {
  const { user, isLoading } = useAuthStore();

  if (isLoading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        Loading ...
      </div>
    );
  }
  return user ? <Outlet /> : <Navigate to={"/login"} />;
};

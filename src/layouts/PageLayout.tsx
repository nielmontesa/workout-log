import { NavBar } from "../components/ui/NavBar";
import { Outlet } from "react-router-dom";

export const PageLayout = () => {
  return (
    <main>
      <NavBar />
      <Outlet />
    </main>
  );
};

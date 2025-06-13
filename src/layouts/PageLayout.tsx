import { NavBar } from "../components/ui/NavBar";
import { Outlet } from "react-router-dom";

export const PageLayout = () => {
  return (
    <main className="flex flex-col gap-1 items-center justify-center ">
      <NavBar />
      <div className="sm:max-w-xl max-w-sm w-screen p-2 text-center ">
        <div className="bg-neutral-800/30 border border-neutral-800 rounded-lg ">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

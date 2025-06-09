import { Link, useLocation } from "react-router-dom";
import { useAuthStore } from "../../stores/authStore";
import { LiaDumbbellSolid } from "react-icons/lia";
import { FaRunning } from "react-icons/fa";
import { RiLogoutBoxLine } from "react-icons/ri";

export const NavBar = () => {
  const { signOut, isLoading } = useAuthStore();

  const handleSignOut = () => {
    signOut();
  };

  const currentLocation: string = useLocation().pathname;

  const isActivePage = (pagePath: string) => {
    return pagePath === currentLocation;
  };

  return (
    <nav className="w-full flex gap-1 justify-center p-4">
      <div className="px-4 py-2 bg-neutral-800 flex gap-2 rounded-xl border border-neutral-700 shadow-sm">
        <Link
          to={"/workouts"}
          className={`${
            isActivePage(`/workouts`) ? "bg-neutral-600" : "bg-neutral-700 "
          } px-2 py-1 rounded-lg border border-neutral-800 flex gap-1 items-center`}>
          <LiaDumbbellSolid />
          Workouts
        </Link>
        <Link
          to={"/exercises"}
          className={`${
            isActivePage(`/exercises`) ? "bg-neutral-600" : "bg-neutral-700"
          } px-2 py-1 rounded-lg border border-neutral-800 flex gap-1 items-center`}>
          <FaRunning />
          Exercises
        </Link>
        <button
          onClick={handleSignOut}
          className="px-2 py-1 rounded-lg bg-red-900 border border-red-800 text-red-200 flex gap-1 items-center">
          {" "}
          <RiLogoutBoxLine />
          {isLoading ? "Signing Out" : "Sign Out"}
        </button>
      </div>
    </nav>
  );
};

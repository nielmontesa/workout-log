import { Link } from "react-router-dom";
import { useAuthStore } from "../../stores/authStore";

export const NavBar = () => {
  const { signOut, isLoading } = useAuthStore();

  const handleSignOut = () => {
    signOut();
  };

  return (
    <nav>
      <Link to={"/workouts"}>Workouts</Link>
      <Link to={"/exercises"}>Exercises</Link>
      <button onClick={handleSignOut}>
        {isLoading ? "Signing Out" : "Sign Out"}
      </button>
    </nav>
  );
};

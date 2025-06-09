import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Workouts } from "./pages/Workouts";
import { WorkoutDetail } from "./pages/WorkoutDetail";
import { Exercises } from "./pages/Exercises";
import { ProtectedRoutes } from "./utils/ProtectedRoutes";
import { useAuthStore } from "./stores/authStore";
import { useEffect } from "react";
import { PageLayout } from "./layouts/PageLayout";

function App() {
  const { initialize, isInitialized } = useAuthStore();

  useEffect(() => {
    initialize();
  }, [initialize]);

  if (!isInitialized) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        Checking the auth
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<Signup />} path="/signup" />

        <Route element={<ProtectedRoutes />}>
          <Route element={<PageLayout />}>
            <Route path="/" element={<Navigate to="/workouts" replace />} />
            <Route element={<Workouts />} path="/workouts" />
            <Route element={<WorkoutDetail />} path="/workoutdetail" />
            <Route element={<Exercises />} path="/exercises" />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

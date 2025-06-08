import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Workouts } from "./pages/Workouts";
import { WorkoutDetail } from "./pages/WorkoutDetail";
import { Settings } from "./pages/Settings";
import { Exercises } from "./pages/Exercises";
import { ProtectedRoutes } from "./utils/ProtectedRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<Signup />} path="/signup" />

        <Route element={<ProtectedRoutes />}>
          <Route element={<Workouts />} path="/workouts" />
          <Route element={<WorkoutDetail />} path="/workoutdetail" />
          <Route element={<Settings />} path="/settings" />
          <Route element={<Exercises />} path="/exercises" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

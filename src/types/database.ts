export type MuscleGroup =
  | "Back"
  | "Legs"
  | "Arms"
  | "Chest"
  | "Shoulders"
  | "Cardio"
  | "Glutes";

export interface Exercise {
  id: string;
  user_id: string;
  created_at: string;

  name: string;
  muscle_group: MuscleGroup;
  is_system: boolean;
}

export interface Set {
  id: string;
  workout_id: string;
  exercise_id: string;
  created_at: string;

  reps: number;
  weight: number | null;
  notes: string | null;
  set_order: number;
}

export interface Workout {
  id: string;
  user_id: string;
  created_at: string;

  name: string;
  date: string;
}

export interface CreateExerciseInput {
  name: string;
  muscle_group: MuscleGroup;
}

export interface UpdateExerciseInput {
  id: string;
  name?: string;
  muscle_group?: MuscleGroup;
}

export interface CreateSetInput {
  exercise_id: string;
  workout_id: string;
  reps: number;
  weight?: number | null;
  notes?: string;
  set_order: number;
}

export interface UpdateSetInput {
  id: string;
  exercise_id?: string;
  reps?: number;
  weight?: number | null;
  notes?: string;
  set_order?: number;
}

export interface CreateWorkoutInput {
  name: string;
  date: string;
}

export interface UpdateWorkoutInput {
  id: string;
  name?: string;
  date?: string;
}

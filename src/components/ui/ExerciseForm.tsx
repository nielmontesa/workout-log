import React, { useEffect, useState } from "react";
import { createExercise } from "../../services/exerciseService";
import type { CreateExerciseInput, MuscleGroup } from "../../types/database";
import { useAuthStore } from "../../stores/authStore";

export const ExerciseForm = () => {
  const [exerciseInput, setExerciseInput] = useState<CreateExerciseInput>({
    name: "",
    muscle_group: undefined,
  });

  const { user } = useAuthStore();

  const isValidMuscleGroup = (value: string): value is MuscleGroup => {
    return [
      "Back",
      "Legs",
      "Arms",
      "Chest",
      "Shoulders",
      "Cardio",
      "Glutes",
    ].includes(value);
  };

  const handleInputFields = (
    event: React.FormEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    if (event.currentTarget.name === "name") {
      setExerciseInput({
        name: event.currentTarget.value,
        muscle_group: exerciseInput.muscle_group,
      });
    } else if (event.currentTarget.name === "muscle_group") {
      setExerciseInput({
        name: exerciseInput.name,
        muscle_group: isValidMuscleGroup(event.currentTarget.value)
          ? event.currentTarget.value
          : undefined,
      });
    }
  };

  const handleExerciseSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await createExercise(user?.id, exerciseInput);
  };

  useEffect(() => {
    console.log(exerciseInput);
  }, [exerciseInput]);

  return (
    <form className="flex flex-col gap-2">
      <label className="flex gap-2 justify-between">
        Exercise Name
        <input
          onChange={handleInputFields}
          type="text"
          name="name"
          className="bg-neutral-700 rounded-sm w-52"
        />
      </label>
      <label className="flex gap-2 justify-between">
        Muscle Group
        <select
          onChange={handleInputFields}
          name="muscle_group"
          className="bg-neutral-700 rounded-sm w-52">
          <option value="Back">Back</option>
          <option value="Legs">Legs</option>
          <option value="Arms">Arms</option>
          <option value="Chest">Chest</option>
          <option value="Shoulders">Shoulders</option>
          <option value="Cardio">Cardio</option>
          <option value="Glutes">Glutes</option>
        </select>
      </label>
      <button
        onSubmit={handleExerciseSubmit}
        className="w-full bg-neutral-700 p-2 rounded-lg mt-3">
        Add Exercise
      </button>
    </form>
  );
};

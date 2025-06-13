import { useEffect, useState } from "react";
import { getExercises } from "../../services/exerciseService";
import { useAuthStore } from "../../stores/authStore";
import type { Exercise } from "../../types/database";
import { LuPersonStanding } from "react-icons/lu";

export const ExerciseList = () => {
  const { user } = useAuthStore();
  const [exerciseList, setExerciseList] = useState<Exercise[]>([]);
  const [exercisesLoading, setExercisesLoading] = useState<boolean>(false);
  const [exercisesError, setExercisesError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        setExercisesLoading(true);
        const exerciseData = await getExercises(user?.id);
        setExerciseList(exerciseData);
      } catch (error) {
        setExercisesError(
          error instanceof Error ? error.message : "Something went wrong"
        );
      } finally {
        setExercisesLoading(false);
      }
    };

    if (user?.id) {
      fetchExercises();
    }
  }, [user?.id]);

  useEffect(() => {
    console.log(exerciseList);
  }, [exerciseList]);

  if (exercisesLoading) return <div>Exercises are loading ...</div>;
  if (exercisesError)
    return <div>{`Error loading exercises: ${exercisesError}`}</div>;

  return (
    <main>
      <div className="flex flex-col gap-2 p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-md font-medium">Exercises</h1>
          <button className="bg-neutral-700 hover:bg-neutral-600 px-2 py-1 rounded-md">
            + Add Exercise
          </button>
        </div>
        {exerciseList.map((exercise) => {
          return (
            <div
              className="bg-neutral-700 rounded-sm text-left flex flex-col gap-2 p-4"
              key={exercise.id}>
              <div className="flex justify-between">
                <h3 className="flex items-center gap-1 text-neutral-300 font-medium ">
                  <LuPersonStanding />
                  {exercise.name}
                </h3>
                <h3 className="text-neutral-300 font-medium">
                  {exercise.is_system ? (
                    <span className="text-xs text-neutral-400">SYSTEM</span>
                  ) : (
                    <div></div>
                  )}
                </h3>
              </div>
              <div className="text-sm flex flex-col">
                <span className="text-neutral-400 text-xs">MUSCLE GROUP</span>
                <span className="font-medium">{exercise.muscle_group}</span>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

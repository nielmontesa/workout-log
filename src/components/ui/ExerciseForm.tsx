export const ExerciseForm = () => {
  return (
    <form className="flex flex-col gap-2">
      <label className="flex gap-2 justify-between">
        Exercise Name
        <input
          type="text"
          name="exercise-name"
          className="bg-neutral-700 rounded-sm w-52"
        />
      </label>
      <label className="flex gap-2 justify-between">
        Muscle Group
        <select className="bg-neutral-700 rounded-sm w-52">
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
        type="submit"
        className="w-full bg-neutral-700 p-2 rounded-lg mt-3">
        Add Exercise
      </button>
    </form>
  );
};

import type { ReactNode } from "react";

interface ExerciseModalProps {
  children: ReactNode;
  toggle: boolean;
  onClose: () => void;
}

export const ExerciseModal = ({
  children,
  onClose,
  toggle,
}: ExerciseModalProps) => {
  return (
    <div
      className={`fixed left-0 top-0 w-screen h-screen bg-neutral-900/90 ${
        toggle ? "" : "closed-modal"
      }`}>
      <div className="flex items-center justify-center min-h-full">
        <div className="bg-neutral-800 rounded-lg min-w-56 px-8 py-4">
          <div className="flex items-center justify-between mb-6">
            <h3>Add Exercise</h3>
            <button
              onClick={onClose}
              className="bg-red-500 hover:bg-neutral-600 px-2 py-1 rounded-md">
              Close
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

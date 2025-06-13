import type {
  CreateExerciseInput,
  UpdateExerciseInput,
} from "../types/database";
import { supabase } from "../lib/supabase";

export const createExercise = async (
  userId: string,
  input: CreateExerciseInput
) => {
  const { data, error } = await supabase
    .from("exercises")
    .insert({ ...input, user_id: userId })
    .select()
    .single();

  if (error) {
    throw new Error(`Error creating exercise: ${error.message}`);
  }

  return data;
};

export const updateExercise = async (input: UpdateExerciseInput) => {
  const { id, ...updates } = input;
  const { data, error } = await supabase
    .from("exercises")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    throw new Error(`Error updating exercise: ${error.message}`);
  }

  return data;
};

export const deleteExercise = async (exerciseId: string) => {
  const { data, error } = await supabase
    .from("exercises")
    .delete()
    .eq("id", exerciseId)
    .select()
    .single();

  if (error) {
    throw new Error(`Error deleting exercise: ${error.message}`);
  }

  return data;
};

export const getExercises = async (userId: string | undefined) => {
  const { data, error } = await supabase
    .from("exercises")
    .select()
    .or(`is_system.eq.true,user_id.eq.${userId}`);

  if (error) {
    throw new Error(`Error fetching exercises: ${error.message}`);
  }

  return data;
};

export const getSingleExercise = async (id: string) => {
  const { data, error } = await supabase
    .from("exercises")
    .select()
    .eq("id", id)
    .single();

  if (error) {
    throw new Error(`Error fetching exercise: ${error.message}`);
  }

  return data;
};

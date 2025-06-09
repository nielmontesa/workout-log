import { create } from "zustand";
import { supabase } from "../lib/supabase";
import type { AuthState } from "../types/auth";

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: false,
  isInitialized: false,

  signIn: async () => {
    try {
      set({ isLoading: true });

      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/workouts`,
        },
      });

      if (error) throw error;
    } catch (error) {
      console.error("Sign in error:", error);
      set({ isLoading: false });
    }
  },
  signOut: async () => {
    try {
      set({ isLoading: true });

      const { error } = await supabase.auth.signOut();

      if (error) throw error;
      set({ isLoading: false });
    } catch (error) {
      console.error("Sign out error:", error);
      set({ isLoading: false });
    }
  },
  initialize: async () => {
    try {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();

      if (error) throw error;

      set({
        user: session?.user ?? null,
        isInitialized: true,
        isLoading: false,
      });

      supabase.auth.onAuthStateChange((event, session) => {
        console.log("Auth state changed: ", event);
        set({ user: session?.user ?? null });
      });
    } catch (error) {
      console.error("Auth initialization error:", error);
      set({
        user: null,
        isInitialized: true,
        isLoading: false,
      });
    }
  },
}));

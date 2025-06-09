import type { User } from "@supabase/supabase-js";

export interface AuthState {
  // Received auth data
  user: User | null;
  isLoading: boolean;
  isInitialized: boolean;

  // Auth actions
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
  initialize: () => Promise<void>;
}

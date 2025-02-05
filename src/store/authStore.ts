import { create } from 'zustand';
import { User } from '../types';
import { authService } from '../services/authService';

interface AuthState {
  user: User | null;
  loading: boolean;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  updateProfile: (data: Partial<User>) => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: true,
  signUp: async (email, password, name) => {
    const user = await authService.signUp(email, password, name);
    set({ user });
  },
  signIn: async (email, password) => {
    const user = await authService.signIn(email, password);
    set({ user });
  },
  signOut: async () => {
    await authService.signOut();
    set({ user: null });
  },
  updateProfile: async (data) => {
    const userId = (await supabase.auth.getUser()).data.user?.id;
    if (!userId) throw new Error('No authenticated user');
    
    await authService.updateProfile(userId, data);
    set((state) => ({
      user: state.user ? { ...state.user, ...data } : null
    }));
  }
}));
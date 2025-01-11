import { supabase } from '../lib/supabase';
import { User } from '../types';

export const authService = {
  async signUp(email: string, password: string, name: string): Promise<User> {
    try {
      // Create auth user with metadata
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { name }
        }
      });

      if (authError) {
        if (authError.message === 'User already registered') {
          throw new Error('An account with this email already exists');
        }
        throw authError;
      }

      if (!authData.user) {
        throw new Error('Failed to create account');
      }

      return authData.user as User;
    } catch (error: any) {
      console.error('SignUp error:', error);
      throw error;
    }
  },

  async signIn(email: string, password: string): Promise<User> {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    if (error) throw error;
    return data.user as User;
  },

  async signOut(): Promise<void> {
    await supabase.auth.signOut();
  },

  async updateProfile(userId: string, data: Partial<User>): Promise<void> {
    // Update auth user data
    const { error: authError } = await supabase.auth.updateUser({ data });
    if (authError) throw authError;

    // Update profile data
    const { error: profileError } = await supabase
      .from('profiles')
      .update(data)
      .eq('id', userId);

    if (profileError) throw profileError;
  }
};
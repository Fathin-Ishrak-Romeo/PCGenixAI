import { supabase } from '../lib/supabase';
import { User } from '../types';

export const profileService = {
  async updateName(userId: string, name: string): Promise<void> {
    const { error: profileError } = await supabase
      .from('profiles')
      .update({ name })
      .eq('id', userId);

    if (profileError) throw profileError;

    const { error: authError } = await supabase.auth.updateUser({
      data: { name }
    });

    if (authError) throw authError;
  },

  async updatePassword(currentPassword: string, newPassword: string): Promise<void> {
    const { error } = await supabase.auth.updateUser({
      password: newPassword
    });

    if (error) {
      if (error.message.includes('auth')) {
        throw new Error('Current password is incorrect');
      }
      throw error;
    }
  },

  async getProfile(userId: string): Promise<User> {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();

    if (error) throw error;
    return data;
  }
};
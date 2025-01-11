import { supabase } from '../lib/supabase';
import { Product, SavedBuild } from '../types';

export const buildService = {
  async saveBuild(
    userId: string,
    components: Record<string, Product>
  ): Promise<SavedBuild> {
    if (!userId) {
      throw new Error('User ID is required');
    }

    if (Object.keys(components).length === 0) {
      throw new Error('At least one component is required');
    }

    const totalPrice = Object.values(components).reduce(
      (sum, component) => sum + component.price,
      0
    );

    const { data, error } = await supabase
      .from('saved_builds')
      .insert({
        user_id: userId,
        name: `Custom Build ${new Date().toLocaleDateString()}`,
        components,
        usage_category: 'Custom',
        total_price: totalPrice
      })
      .select()
      .single();

    if (error) {
      console.error('Error saving build:', error);
      throw error;
    }

    return data;
  },

  async getSavedBuilds(userId: string): Promise<SavedBuild[]> {
    const { data, error } = await supabase
      .from('saved_builds')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  }
};
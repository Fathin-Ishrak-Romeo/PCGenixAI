import { supabase } from '../lib/supabase';
import { Product } from '../types';

export const cartService = {
  async addToCart(userId: string, product: Product) {
    try {
      // Check if item already exists in cart
      const { data: existingItem } = await supabase
        .from('cart_items')
        .select('*')
        .eq('user_id', userId)
        .eq('product_id', product.id)
        .single();

      if (existingItem) {
        // Update quantity if item exists
        const { error } = await supabase
          .from('cart_items')
          .update({ quantity: existingItem.quantity + 1 })
          .eq('id', existingItem.id);

        if (error) throw error;
        return { success: true, message: 'Updated quantity in cart' };
      }

      // Add new item if it doesn't exist
      const { error } = await supabase
        .from('cart_items')
        .insert([
          {
            product_id: product.id,
            user_id: userId,
            quantity: 1,
          },
        ]);

      if (error) throw error;
      return { success: true, message: 'Added to cart' };
    } catch (error) {
      console.error('Cart operation failed:', error);
      throw error;
    }
  }
};
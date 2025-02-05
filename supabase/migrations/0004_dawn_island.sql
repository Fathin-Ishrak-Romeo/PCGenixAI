/*
  # Update cart items policies

  This migration safely updates the cart_items table policies by:
  1. Checking for existing policies before creating new ones
  2. Using DO blocks for conditional policy creation
  3. Ensuring idempotent execution
*/

-- Make sure RLS is enabled
ALTER TABLE IF EXISTS cart_items ENABLE ROW LEVEL SECURITY;

DO $$ 
BEGIN
  -- Create "view own cart items" policy if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'cart_items' 
    AND policyname = 'Users can view own cart items'
  ) THEN
    CREATE POLICY "Users can view own cart items"
      ON cart_items
      FOR SELECT
      TO authenticated
      USING (auth.uid() = user_id);
  END IF;

  -- Create "add items to cart" policy if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'cart_items' 
    AND policyname = 'Users can add items to cart'
  ) THEN
    CREATE POLICY "Users can add items to cart"
      ON cart_items
      FOR INSERT
      TO authenticated
      WITH CHECK (auth.uid() = user_id);
  END IF;

  -- Create "update own cart items" policy if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'cart_items' 
    AND policyname = 'Users can update own cart items'
  ) THEN
    CREATE POLICY "Users can update own cart items"
      ON cart_items
      FOR UPDATE
      TO authenticated
      USING (auth.uid() = user_id)
      WITH CHECK (auth.uid() = user_id);
  END IF;

  -- Create "delete own cart items" policy if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'cart_items' 
    AND policyname = 'Users can delete own cart items'
  ) THEN
    CREATE POLICY "Users can delete own cart items"
      ON cart_items
      FOR DELETE
      TO authenticated
      USING (auth.uid() = user_id);
  END IF;
END $$;
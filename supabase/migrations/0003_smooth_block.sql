/*
  # Create RLS Policies (Safe Version)
  
  1. Changes:
    - Add safety checks before creating policies
    - Ensures idempotent policy creation
*/

DO $$ 
BEGIN
  -- Profile policies
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE policyname = 'Public profiles are viewable by everyone'
  ) THEN
    CREATE POLICY "Public profiles are viewable by everyone"
      ON profiles FOR SELECT
      USING (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE policyname = 'Users can update own profile'
  ) THEN
    CREATE POLICY "Users can update own profile"
      ON profiles FOR UPDATE
      USING (auth.uid() = id);
  END IF;

  -- Product policies
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE policyname = 'Products are viewable by everyone'
  ) THEN
    CREATE POLICY "Products are viewable by everyone"
      ON products FOR SELECT
      USING (true);
  END IF;

  -- Cart policies
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE policyname = 'Users can view own cart items'
  ) THEN
    CREATE POLICY "Users can view own cart items"
      ON cart_items FOR SELECT
      USING (auth.uid() = user_id);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE policyname = 'Users can insert own cart items'
  ) THEN
    CREATE POLICY "Users can insert own cart items"
      ON cart_items FOR INSERT
      WITH CHECK (auth.uid() = user_id);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE policyname = 'Users can update own cart items'
  ) THEN
    CREATE POLICY "Users can update own cart items"
      ON cart_items FOR UPDATE
      USING (auth.uid() = user_id);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE policyname = 'Users can delete own cart items'
  ) THEN
    CREATE POLICY "Users can delete own cart items"
      ON cart_items FOR DELETE
      USING (auth.uid() = user_id);
  END IF;

  -- Order policies
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE policyname = 'Users can view own orders'
  ) THEN
    CREATE POLICY "Users can view own orders"
      ON orders FOR SELECT
      USING (auth.uid() = user_id);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE policyname = 'Users can insert own orders'
  ) THEN
    CREATE POLICY "Users can insert own orders"
      ON orders FOR INSERT
      WITH CHECK (auth.uid() = user_id);
  END IF;

  -- Order items policies
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE policyname = 'Users can view own order items'
  ) THEN
    CREATE POLICY "Users can view own order items"
      ON order_items FOR SELECT
      USING (EXISTS (
        SELECT 1 FROM orders 
        WHERE orders.id = order_items.order_id 
        AND orders.user_id = auth.uid()
      ));
  END IF;

  -- PC build suggestion policies
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE policyname = 'Users can view own PC build suggestions'
  ) THEN
    CREATE POLICY "Users can view own PC build suggestions"
      ON pc_build_suggestions FOR SELECT
      USING (auth.uid() = user_id);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE policyname = 'Users can insert own PC build suggestions'
  ) THEN
    CREATE POLICY "Users can insert own PC build suggestions"
      ON pc_build_suggestions FOR INSERT
      WITH CHECK (auth.uid() = user_id);
  END IF;
END $$;
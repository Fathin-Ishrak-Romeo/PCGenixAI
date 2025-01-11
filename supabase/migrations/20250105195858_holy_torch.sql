/*
  # Fix profiles table constraints

  1. Changes
    - Add ON DELETE CASCADE to profiles foreign key in saved_builds table
    - Ensure profiles table exists with correct constraints
*/

-- Recreate profiles table if it doesn't exist
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users ON DELETE CASCADE,
  name text NOT NULL,
  email text NOT NULL UNIQUE,
  created_at timestamptz DEFAULT now()
);

-- Recreate saved_builds table with correct foreign key
CREATE TABLE IF NOT EXISTS saved_builds (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  name text NOT NULL,
  components jsonb NOT NULL,
  usage_category text NOT NULL,
  total_price integer NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE saved_builds ENABLE ROW LEVEL SECURITY;

-- Create policies
DO $$ 
BEGIN
  -- Profile policies
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE policyname = 'Users can view own profile'
  ) THEN
    CREATE POLICY "Users can view own profile"
      ON profiles FOR SELECT
      USING (auth.uid() = id);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE policyname = 'Users can update own profile'
  ) THEN
    CREATE POLICY "Users can update own profile"
      ON profiles FOR UPDATE
      USING (auth.uid() = id);
  END IF;

  -- Saved builds policies
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE policyname = 'Users can view own saved builds'
  ) THEN
    CREATE POLICY "Users can view own saved builds"
      ON saved_builds FOR SELECT
      USING (auth.uid() = user_id);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE policyname = 'Users can create own saved builds'
  ) THEN
    CREATE POLICY "Users can create own saved builds"
      ON saved_builds FOR INSERT
      WITH CHECK (auth.uid() = user_id);
  END IF;
END $$;
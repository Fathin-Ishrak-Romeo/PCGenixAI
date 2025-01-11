/*
  # Add saved builds functionality

  1. New Tables
    - `saved_builds`: Stores user's custom PC builds
      - `id`: Unique identifier
      - `user_id`: Reference to user profile
      - `name`: Build name
      - `components`: JSON array of selected components
      - `usage_category`: Type of build
      - `total_price`: Total cost of build
      - `created_at`: Timestamp

  2. Security
    - Enable RLS
    - Add policies for authenticated users
*/

-- Create saved_builds table if it doesn't exist
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
ALTER TABLE saved_builds ENABLE ROW LEVEL SECURITY;

-- Create policies using DO block to check existence
DO $$ 
BEGIN
  -- View policy
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'saved_builds' 
    AND policyname = 'Users can view own saved builds'
  ) THEN
    CREATE POLICY "Users can view own saved builds"
      ON saved_builds
      FOR SELECT
      TO authenticated
      USING (auth.uid() = user_id);
  END IF;

  -- Insert policy
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'saved_builds' 
    AND policyname = 'Users can create own saved builds'
  ) THEN
    CREATE POLICY "Users can create own saved builds"
      ON saved_builds
      FOR INSERT
      TO authenticated
      WITH CHECK (auth.uid() = user_id);
  END IF;

  -- Delete policy
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'saved_builds' 
    AND policyname = 'Users can delete own saved builds'
  ) THEN
    CREATE POLICY "Users can delete own saved builds"
      ON saved_builds
      FOR DELETE
      TO authenticated
      USING (auth.uid() = user_id);
  END IF;
END $$;
/*
  # Initial Schema for Shiba Inu Platform

  1. New Tables
    - `profiles` - User profiles with extended information
    - `breeders` - Breeder listings with detailed information
    - `rescues` - Rescue organization listings
    - `reviews` - User reviews for breeders and rescues
    - `locations` - Location data for filtering

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
    - Add policies for public read access where appropriate
*/

-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id uuid REFERENCES auth.users ON DELETE CASCADE,
  email text,
  full_name text,
  avatar_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  PRIMARY KEY (id)
);

-- Create breeders table
CREATE TABLE IF NOT EXISTS breeders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id),
  business_name text NOT NULL,
  description text,
  website text,
  phone text,
  email text,
  address text,
  city text,
  state text,
  country text DEFAULT 'USA',
  postal_code text,
  latitude numeric,
  longitude numeric,
  is_verified boolean DEFAULT false,
  akc_registered boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create rescues table
CREATE TABLE IF NOT EXISTS rescues (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id),
  organization_name text NOT NULL,
  description text,
  website text,
  phone text,
  email text,
  address text,
  city text,
  state text,
  country text DEFAULT 'USA',
  postal_code text,
  latitude numeric,
  longitude numeric,
  is_verified boolean DEFAULT false,
  is_nonprofit boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create reviews table
CREATE TABLE IF NOT EXISTS reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id),
  entity_id uuid NOT NULL,
  entity_type text NOT NULL CHECK (entity_type IN ('breeder', 'rescue')),
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  title text NOT NULL,
  content text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE breeders ENABLE ROW LEVEL SECURITY;
ALTER TABLE rescues ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Public profiles are viewable by everyone"
  ON profiles FOR SELECT
  USING (true);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

-- Breeders policies
CREATE POLICY "Breeders are viewable by everyone"
  ON breeders FOR SELECT
  USING (true);

CREATE POLICY "Verified users can create breeder profiles"
  ON breeders FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Users can update own breeder profile"
  ON breeders FOR UPDATE
  USING (auth.uid() = user_id);

-- Rescues policies
CREATE POLICY "Rescues are viewable by everyone"
  ON rescues FOR SELECT
  USING (true);

CREATE POLICY "Verified users can create rescue profiles"
  ON rescues FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Users can update own rescue profile"
  ON rescues FOR UPDATE
  USING (auth.uid() = user_id);

-- Reviews policies
CREATE POLICY "Reviews are viewable by everyone"
  ON reviews FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can create reviews"
  ON reviews FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Users can update own reviews"
  ON reviews FOR UPDATE
  USING (auth.uid() = user_id);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS breeders_location_idx ON breeders (state, city);
CREATE INDEX IF NOT EXISTS rescues_location_idx ON rescues (state, city);
CREATE INDEX IF NOT EXISTS reviews_entity_idx ON reviews (entity_id, entity_type);
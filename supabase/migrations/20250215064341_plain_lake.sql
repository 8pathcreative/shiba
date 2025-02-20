/*
  # Create database schema and sample data

  1. Tables
    - Creates profiles, breeders, rescues, and reviews tables
    - Sets up proper relationships and constraints
    - Enables RLS on all tables
  
  2. Policies
    - Adds RLS policies for all tables
    - Ensures proper access control
  
  3. Sample Data
    - Adds sample breeders and rescues
    - Includes realistic descriptions and locations
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

-- Sample Breeders
INSERT INTO breeders (business_name, description, city, state, is_verified, akc_registered)
VALUES
  ('Sakura Shiba Kennel', 'Dedicated to preserving the authentic Japanese Shiba Inu bloodlines. Our breeding program focuses on health, temperament, and adherence to breed standards. All our parent dogs undergo comprehensive health testing.', 'Portland', 'OR', true, true),
  ('Mountain Peak Shibas', 'Family-owned breeder with over 15 years of experience. We raise our Shiba Inu puppies in our home with love and socialization from day one. Health guarantee provided.', 'Denver', 'CO', true, true),
  ('Coastal Shiba Haven', 'Specializing in cream and red Shiba Inus. Our puppies are raised with early neurological stimulation and socialization protocols. Regular vet checks and health testing for all breeding pairs.', 'San Diego', 'CA', true, true),
  ('Heritage Shiba Inus', 'Small, selective breeding program focused on maintaining the true Shiba Inu temperament and appearance. All puppies are AKC registered and come with health guarantees.', 'Austin', 'TX', true, true),
  ('Northern Lights Shibas', 'Breeding exceptional Shiba Inus with emphasis on health, temperament, and conformation. Our dogs excel in both show ring and as family companions.', 'Minneapolis', 'MN', true, true),
  ('Garden State Shibas', 'Dedicated to producing healthy, well-socialized Shiba Inu puppies. We provide lifetime support and guidance to all our puppy families.', 'Princeton', 'NJ', true, true);

-- Sample Rescues
INSERT INTO rescues (organization_name, description, city, state, is_verified, is_nonprofit)
VALUES
  ('Shiba Rescue Network', 'Dedicated to rescuing and rehabilitating Shiba Inus across the Pacific Northwest. We provide comprehensive medical care and behavioral assessment before adoption.', 'Seattle', 'WA', true, true),
  ('Second Chance Shibas', 'A foster-based rescue organization specializing in Shiba Inus and Shiba mixes. We work to match each dog with the perfect forever home.', 'Chicago', 'IL', true, true),
  ('Desert Shiba Sanctuary', 'Providing refuge and rehabilitation for abandoned and surrendered Shiba Inus. Our team includes behavioral specialists and experienced veterinarians.', 'Phoenix', 'AZ', true, true),
  ('East Coast Shiba Rescue', 'A volunteer-run organization dedicated to rescuing, rehabilitating, and rehoming Shiba Inus along the eastern seaboard.', 'Boston', 'MA', true, true),
  ('Southern Shiba Haven', 'Focused on rescuing and rehoming Shiba Inus in the southeastern United States. We provide thorough vetting and post-adoption support.', 'Atlanta', 'GA', true, true),
  ('Midwest Shiba Alliance', 'A network of foster homes providing temporary care and rehabilitation for Shiba Inus in need. We emphasize education and proper breed matching.', 'Detroit', 'MI', true, true);
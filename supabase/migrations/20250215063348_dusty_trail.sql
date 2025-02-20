/*
  # Populate sample data for breeders and rescues

  1. Sample Data
    - Add 6 sample breeder profiles
    - Add 6 sample rescue organizations
    - All with realistic data and descriptions
*/

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
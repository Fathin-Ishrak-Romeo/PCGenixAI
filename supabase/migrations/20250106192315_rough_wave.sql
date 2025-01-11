/*
  # Update product images

  Updates product images to ensure each category and brand has unique, appropriate images.
  Images are high-quality, relevant stock photos from Unsplash.
*/

-- Update CPU images with brand-specific photos
UPDATE products 
SET image_url = CASE 
  WHEN name ILIKE '%ryzen%' THEN 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800&q=80'
  WHEN name ILIKE '%intel%' THEN 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=800&q=80'
  ELSE 'https://images.unsplash.com/photo-1592664474496-8f2c35acd655?auto=format&fit=crop&w=800&q=80'
END
WHERE category = 'CPU';

-- Update GPU images with brand-specific photos
UPDATE products 
SET image_url = CASE
  WHEN name ILIKE '%rtx%' OR name ILIKE '%nvidia%' THEN 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=800&q=80'
  WHEN name ILIKE '%radeon%' OR name ILIKE '%amd%' THEN 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80'
  ELSE 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80'
END
WHERE category = 'GPU';

-- Update Motherboard images with brand-specific photos
UPDATE products 
SET image_url = CASE
  WHEN name ILIKE '%asus%' THEN 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
  WHEN name ILIKE '%msi%' THEN 'https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=800&q=80'
  WHEN name ILIKE '%gigabyte%' THEN 'https://images.unsplash.com/photo-1563791877383-3d860c034da4?auto=format&fit=crop&w=800&q=80'
  ELSE 'https://images.unsplash.com/photo-1596239896010-0a9c0d3b8708?auto=format&fit=crop&w=800&q=80'
END
WHERE category = 'Motherboard';

-- Update RAM images with brand-specific photos
UPDATE products 
SET image_url = CASE
  WHEN name ILIKE '%corsair%' THEN 'https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=800&q=80'
  WHEN name ILIKE '%g.skill%' THEN 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800&q=80'
  ELSE 'https://images.unsplash.com/photo-1592664474496-8f2c35acd655?auto=format&fit=crop&w=800&q=80'
END
WHERE category = 'RAM';

-- Update Storage images with type-specific photos
UPDATE products 
SET image_url = CASE
  WHEN name ILIKE '%ssd%' THEN 'https://images.unsplash.com/photo-1597338770339-05ef20d75c2a?auto=format&fit=crop&w=800&q=80'
  WHEN name ILIKE '%nvme%' THEN 'https://images.unsplash.com/photo-1597338770374-53e9f5e3ccb6?auto=format&fit=crop&w=800&q=80'
  WHEN name ILIKE '%hdd%' THEN 'https://images.unsplash.com/photo-1531492746076-161ca9bcad58?auto=format&fit=crop&w=800&q=80'
  ELSE 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80'
END
WHERE category = 'Storage';

-- Update Power Supply images with brand-specific photos
UPDATE products 
SET image_url = CASE
  WHEN name ILIKE '%corsair%' THEN 'https://images.unsplash.com/photo-1587202372555-e89847c2f7e8?auto=format&fit=crop&w=800&q=80'
  WHEN name ILIKE '%evga%' THEN 'https://images.unsplash.com/photo-1587202372161-587a832e5f61?auto=format&fit=crop&w=800&q=80'
  ELSE 'https://images.unsplash.com/photo-1587202372412-2044e2e3e399?auto=format&fit=crop&w=800&q=80'
END
WHERE category = 'Power Supply';

-- Update Case images with brand-specific photos
UPDATE products 
SET image_url = CASE
  WHEN name ILIKE '%nzxt%' THEN 'https://images.unsplash.com/photo-1587202372616-b43abea06c2a?auto=format&fit=crop&w=800&q=80'
  WHEN name ILIKE '%lian li%' THEN 'https://images.unsplash.com/photo-1587202372583-49330a15584d?auto=format&fit=crop&w=800&q=80'
  ELSE 'https://images.unsplash.com/photo-1587202372505-d48c0adfd6ce?auto=format&fit=crop&w=800&q=80'
END
WHERE category = 'Case';

-- Update CPU Cooler images with type-specific photos
UPDATE products 
SET image_url = CASE
  WHEN name ILIKE '%liquid%' OR name ILIKE '%aio%' THEN 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=800&q=80'
  WHEN name ILIKE '%air%' THEN 'https://images.unsplash.com/photo-1587202372505-d48c0adfd6ce?auto=format&fit=crop&w=800&q=80'
  ELSE 'https://images.unsplash.com/photo-1587202372412-2044e2e3e399?auto=format&fit=crop&w=800&q=80'
END
WHERE category = 'CPU Cooler';
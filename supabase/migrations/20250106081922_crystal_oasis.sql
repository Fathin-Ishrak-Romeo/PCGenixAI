-- Update CPU images
UPDATE products 
SET image_url = CASE 
  WHEN name ILIKE '%ryzen%' THEN 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800&q=80'
  WHEN name ILIKE '%intel%' THEN 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=800&q=80'
  ELSE 'https://images.unsplash.com/photo-1592664474496-8f2c35acd655?auto=format&fit=crop&w=800&q=80'
END
WHERE category = 'CPU';

-- Update GPU images
UPDATE products 
SET image_url = CASE
  WHEN name ILIKE '%rtx%' THEN 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=800&q=80'
  WHEN name ILIKE '%radeon%' THEN 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80'
  ELSE 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80'
END
WHERE category = 'GPU';

-- Update Motherboard images
UPDATE products 
SET image_url = 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
WHERE category = 'Motherboard';

-- Update RAM images
UPDATE products 
SET image_url = 'https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=800&q=80'
WHERE category = 'RAM';

-- Update Storage images
UPDATE products 
SET image_url = CASE
  WHEN name ILIKE '%ssd%' THEN 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80'
  ELSE 'https://images.unsplash.com/photo-1531492746076-161ca9bcad58?auto=format&fit=crop&w=800&q=80'
END
WHERE category = 'Storage';

-- Update Power Supply images
UPDATE products 
SET image_url = 'https://images.unsplash.com/photo-1587202372161-587a832e5f61?auto=format&fit=crop&w=800&q=80'
WHERE category = 'Power Supply';

-- Update Case images
UPDATE products 
SET image_url = 'https://images.unsplash.com/photo-1587202372583-49330a15584d?auto=format&fit=crop&w=800&q=80'
WHERE category = 'Case';

-- Update CPU Cooler images
UPDATE products 
SET image_url = CASE
  WHEN name ILIKE '%liquid%' OR name ILIKE '%aio%' THEN 'https://images.unsplash.com/photo-1587202372299-dd2f8e6f6cd4?auto=format&fit=crop&w=800&q=80'
  ELSE 'https://images.unsplash.com/photo-1587202372412-2044e2e3e399?auto=format&fit=crop&w=800&q=80'
END
WHERE category = 'CPU Cooler';
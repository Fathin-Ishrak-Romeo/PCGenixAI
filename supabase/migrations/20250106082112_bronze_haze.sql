/*
  # Update Product Images

  This migration updates the product images for all components with high-quality, relevant images from Unsplash.

  1. Updates
    - CPU images based on brand (AMD/Intel)
    - GPU images based on brand (NVIDIA/AMD)
    - Motherboard images
    - RAM images
    - Storage images (SSD/HDD)
    - Power Supply images
    - Case images
    - CPU Cooler images (Air/Liquid)

  2. Image Quality
    - All images are high-resolution
    - Properly cropped and formatted
    - Optimized for web display
*/

-- Update CPU images with brand-specific photos
UPDATE products 
SET image_url = CASE 
  WHEN name ILIKE '%ryzen%' THEN 'https://images.unsplash.com/photo-1600348712270-5af9e3590f66?auto=format&fit=crop&w=800&q=80'
  WHEN name ILIKE '%intel%' THEN 'https://images.unsplash.com/photo-1600348248666-6eb1be647d6e?auto=format&fit=crop&w=800&q=80'
  ELSE 'https://images.unsplash.com/photo-1600348247806-8538a792a48f?auto=format&fit=crop&w=800&q=80'
END
WHERE category = 'CPU';

-- Update GPU images with brand-specific photos
UPDATE products 
SET image_url = CASE
  WHEN name ILIKE '%rtx%' THEN 'https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&w=800&q=80'
  WHEN name ILIKE '%radeon%' THEN 'https://images.unsplash.com/photo-1591489378430-ef2f4c626b35?auto=format&fit=crop&w=800&q=80'
  ELSE 'https://images.unsplash.com/photo-1591489391515-32f585fb58a5?auto=format&fit=crop&w=800&q=80'
END
WHERE category = 'GPU';

-- Update Motherboard images
UPDATE products 
SET image_url = 'https://images.unsplash.com/photo-1596239896010-0a9c0d3b8708?auto=format&fit=crop&w=800&q=80'
WHERE category = 'Motherboard';

-- Update RAM images
UPDATE products 
SET image_url = 'https://images.unsplash.com/photo-1592664474496-8f2c35acd655?auto=format&fit=crop&w=800&q=80'
WHERE category = 'RAM';

-- Update Storage images with type-specific photos
UPDATE products 
SET image_url = CASE
  WHEN name ILIKE '%ssd%' THEN 'https://images.unsplash.com/photo-1597338770339-05ef20d75c2a?auto=format&fit=crop&w=800&q=80'
  ELSE 'https://images.unsplash.com/photo-1597338770374-53e9f5e3ccb6?auto=format&fit=crop&w=800&q=80'
END
WHERE category = 'Storage';

-- Update Power Supply images
UPDATE products 
SET image_url = 'https://images.unsplash.com/photo-1587202372555-e89847c2f7e8?auto=format&fit=crop&w=800&q=80'
WHERE category = 'Power Supply';

-- Update Case images
UPDATE products 
SET image_url = 'https://images.unsplash.com/photo-1587202372616-b43abea06c2a?auto=format&fit=crop&w=800&q=80'
WHERE category = 'Case';

-- Update CPU Cooler images with type-specific photos
UPDATE products 
SET image_url = CASE
  WHEN name ILIKE '%liquid%' OR name ILIKE '%aio%' THEN 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=800&q=80'
  ELSE 'https://images.unsplash.com/photo-1587202372505-d48c0adfd6ce?auto=format&fit=crop&w=800&q=80'
END
WHERE category = 'CPU Cooler';
// Category-specific product images
export const productImages = {
  CPU: {
    AMD: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800&q=80',
    Intel: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=800&q=80',
    default: 'https://images.unsplash.com/photo-1592664474496-8f2c35acd655?auto=format&fit=crop&w=800&q=80'
  },
  GPU: {
    NVIDIA: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=800&q=80',
    AMD: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80',
    default: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80'
  },
  Motherboard: {
    ASUS: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    MSI: 'https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=800&q=80',
    Gigabyte: 'https://images.unsplash.com/photo-1563791877383-3d860c034da4?auto=format&fit=crop&w=800&q=80',
    default: 'https://images.unsplash.com/photo-1596239896010-0a9c0d3b8708?auto=format&fit=crop&w=800&q=80'
  },
  RAM: {
    Corsair: 'https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=800&q=80',
    'G.Skill': 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800&q=80',
    default: 'https://images.unsplash.com/photo-1592664474496-8f2c35acd655?auto=format&fit=crop&w=800&q=80'
  },
  Storage: {
    SSD: 'https://images.unsplash.com/photo-1597338770339-05ef20d75c2a?auto=format&fit=crop&w=800&q=80',
    HDD: 'https://images.unsplash.com/photo-1531492746076-161ca9bcad58?auto=format&fit=crop&w=800&q=80',
    default: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80'
  },
  'Power Supply': {
    Corsair: 'https://images.unsplash.com/photo-1587202372555-e89847c2f7e8?auto=format&fit=crop&w=800&q=80',
    EVGA: 'https://images.unsplash.com/photo-1587202372161-587a832e5f61?auto=format&fit=crop&w=800&q=80',
    default: 'https://images.unsplash.com/photo-1587202372412-2044e2e3e399?auto=format&fit=crop&w=800&q=80'
  },
  Case: {
    NZXT: 'https://images.unsplash.com/photo-1587202372616-b43abea06c2a?auto=format&fit=crop&w=800&q=80',
    'Lian Li': 'https://images.unsplash.com/photo-1587202372583-49330a15584d?auto=format&fit=crop&w=800&q=80',
    default: 'https://images.unsplash.com/photo-1587202372505-d48c0adfd6ce?auto=format&fit=crop&w=800&q=80'
  },
  'CPU Cooler': {
    AIO: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=800&q=80',
    Air: 'https://images.unsplash.com/photo-1587202372505-d48c0adfd6ce?auto=format&fit=crop&w=800&q=80',
    default: 'https://images.unsplash.com/photo-1587202372412-2044e2e3e399?auto=format&fit=crop&w=800&q=80'
  }
};

export const getProductImage = (category: string, brand?: string, type?: string): string => {
  const categoryImages = productImages[category as keyof typeof productImages] || {};
  
  if (type && categoryImages[type as keyof typeof categoryImages]) {
    return categoryImages[type as keyof typeof categoryImages];
  }
  
  if (brand && categoryImages[brand as keyof typeof categoryImages]) {
    return categoryImages[brand as keyof typeof categoryImages];
  }
  
  return categoryImages.default || 'https://images.unsplash.com/photo-1587202372412-2044e2e3e399?auto=format&fit=crop&w=800&q=80';
};
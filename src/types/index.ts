export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  description: string;
  image_url: string;
  stock: number;
}

export interface SavedBuild {
  id: string;
  user_id: string;
  name: string;
  components: Record<string, Product>;
  usage_category: string;
  total_price: number;
  created_at: string;
}

export interface User {
  id: string;
  email: string;
  name?: string;
}
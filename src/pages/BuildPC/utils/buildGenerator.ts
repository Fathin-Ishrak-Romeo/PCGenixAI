import { supabase } from '../../../lib/supabase';
import { Product } from '../../../types';

export const generateBuildSuggestion = async (
  category: string,
  minBudget: number,
  maxBudget: number
): Promise<Product[]> => {
  try {
    // Fetch components based on category and budget
    const { data: products, error } = await supabase
      .from('products')
      .select('*')
      .order('price');

    if (error) throw error;

    // Implement your build generation logic here
    // This is a simplified example - you should implement more sophisticated logic
    const components: Product[] = [];
    let totalBudget = 0;

    // Basic component allocation based on category and budget
    const budgetDistribution = getBudgetDistribution(category);
    
    for (const [componentType, percentage] of Object.entries(budgetDistribution)) {
      const componentBudget = maxBudget * percentage;
      const component = findBestComponent(products, componentType, componentBudget);
      
      if (component) {
        components.push(component);
        totalBudget += component.price;
      }
    }

    // Check if build is within budget
    if (totalBudget < minBudget || totalBudget > maxBudget) {
      return [];
    }

    return components;
  } catch (error) {
    console.error('Error generating build:', error);
    throw error;
  }
};

const getBudgetDistribution = (category: string): Record<string, number> => {
  // Define budget distribution based on PC usage category
  switch (category) {
    case 'Gaming PC':
      return {
        CPU: 0.25,
        GPU: 0.35,
        RAM: 0.1,
        Motherboard: 0.12,
        Storage: 0.08,
        'Power Supply': 0.05,
        Case: 0.03,
        'CPU Cooler': 0.02
      };
    // Add more categories with their specific distributions
    default:
      return {
        CPU: 0.2,
        GPU: 0.2,
        RAM: 0.15,
        Motherboard: 0.15,
        Storage: 0.1,
        'Power Supply': 0.1,
        Case: 0.05,
        'CPU Cooler': 0.05
      };
  }
};

const findBestComponent = (
  products: Product[],
  category: string,
  budget: number
): Product | null => {
  const categoryProducts = products.filter(p => p.category === category);
  return categoryProducts.reduce((best, current) => {
    if (!best) return current;
    if (current.price > budget) return best;
    if (Math.abs(budget - current.price) < Math.abs(budget - best.price)) {
      return current;
    }
    return best;
  }, null as Product | null);
};
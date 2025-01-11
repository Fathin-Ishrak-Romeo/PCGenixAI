import { useState, ChangeEvent } from 'react';
import { Product } from '../../../types';
import { generateBuildSuggestion } from '../utils/buildGenerator';
import PriceBreakdown from './PriceBreakdown';

interface PCBuildGeneratorProps {
  onAddToCart: (products: Product[]) => void;
  onComponentClick: () => void;
}

const PCBuildGenerator = ({ onAddToCart, onComponentClick }: PCBuildGeneratorProps) => {
  const [category, setCategory] = useState('');
  const [minBudget, setMinBudget] = useState('');
  const [maxBudget, setMaxBudget] = useState('');
  const [generatedComponents, setGeneratedComponents] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const categories = [
    'Gaming PC',
    'Workstation',
    'Home Office',
    'Content Creation',
    'Student Budget'
  ];

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    onComponentClick();
    const { name, value } = e.target;
    setError(null);
    
    switch (name) {
      case 'category':
        setCategory(value);
        break;
      case 'minBudget':
        setMinBudget(value);
        break;
      case 'maxBudget':
        setMaxBudget(value);
        break;
    }
  };

  const handleGenerate = async () => {
    if (!category || !minBudget || !maxBudget) {
      setError('Please fill in all fields');
      return;
    }

    const min = parseInt(minBudget);
    const max = parseInt(maxBudget);

    if (min >= max) {
      setError('Maximum budget must be greater than minimum budget');
      return;
    }

    setLoading(true);
    setError(null);
    setGeneratedComponents([]);

    try {
      const components = await generateBuildSuggestion(category, min, max);
      if (components.length === 0) {
        setError('No build could be generated within this budget range');
      } else {
        setGeneratedComponents(components);
      }
    } catch (error) {
      console.error('Error generating build:', error);
      setError('An error occurred while generating the build');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-6">PC Build Generator</h2>

      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium mb-2">Usage Category</label>
          <select
            name="category"
            value={category}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Min Budget ($)</label>
            <input
              type="number"
              name="minBudget"
              value={minBudget}
              onChange={handleInputChange}
              placeholder="Enter minimum"
              className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Max Budget ($)</label>
            <input
              type="number"
              name="maxBudget"
              value={maxBudget}
              onChange={handleInputChange}
              placeholder="Enter maximum"
              className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
        </div>

        <button
          onClick={handleGenerate}
          disabled={loading || !category || !minBudget || !maxBudget}
          className="w-full bg-primary-500 text-white py-2 px-4 rounded-md hover:bg-primary-600 transition-colors disabled:opacity-50"
        >
          {loading ? 'Generating...' : 'Generate Build'}
        </button>

        {error && (
          <div className="text-red-500 text-center p-4 bg-red-50 dark:bg-red-900/10 rounded-md">
            {error}
          </div>
        )}
      </div>

      {generatedComponents.length > 0 && (
        <div className="space-y-6">
          <div className="space-y-4">
            {generatedComponents.map((component) => (
              <div
                key={component.id}
                className="flex items-center justify-between p-4 border rounded-lg dark:border-gray-700"
              >
                <div>
                  <h3 className="font-medium">{component.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {component.category}
                  </p>
                </div>
                <span className="font-semibold">${component.price}</span>
              </div>
            ))}
          </div>

          <PriceBreakdown components={generatedComponents} />

          <button
            onClick={() => onAddToCart(generatedComponents)}
            className="w-full bg-primary-500 text-white py-2 px-4 rounded-md hover:bg-primary-600 transition-colors"
          >
            Add All to Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default PCBuildGenerator;
import { useState } from 'react';
import { Product } from '../../../types';
import { X } from 'lucide-react';
import ComponentModal from './ComponentModal';
import PriceBreakdown from './PriceBreakdown';
import SelectedComponentDetails from './SelectedComponentDetails';

interface ComponentSelectorProps {
  selectedComponents: Record<string, Product>;
  onComponentSelect: (category: string, product: Product | null) => void;
  onAddToCart: () => void;
  onComponentClick: () => void;
}

const ComponentSelector = ({
  selectedComponents,
  onComponentSelect,
  onAddToCart,
  onComponentClick
}: ComponentSelectorProps) => {
  const [showModal, setShowModal] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('');

  const categories = [
    'CPU',
    'Motherboard',
    'RAM',
    'Storage',
    'GPU',
    'Power Supply',
    'Case',
    'CPU Cooler'
  ];

  const handleSelectClick = (category: string) => {
    onComponentClick();
    if (!showModal) {
      setActiveCategory(category);
      setShowModal(true);
    }
  };

  const handleClearComponent = (category: string) => {
    onComponentSelect(category, null);
  };

  return (
    <div className="card p-6">
      <h2 className="text-xl font-semibold mb-6">Manual Selection</h2>
      
      <div className="space-y-6 mb-6">
        {categories.map((category) => (
          <div key={category}>
            <div className="flex items-center justify-between">
              <span className="font-medium">{category}</span>
              <button
                onClick={() => handleSelectClick(category)}
                className="px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors"
              >
                {selectedComponents[category] ? 'Change' : 'Select'}
              </button>
            </div>
            {selectedComponents[category] && (
              <SelectedComponentDetails 
                component={selectedComponents[category]}
                onClear={() => handleClearComponent(category)}
              />
            )}
          </div>
        ))}
      </div>

      <PriceBreakdown components={selectedComponents} />

      <div className="mt-6">
        <button
          onClick={onAddToCart}
          className="w-full bg-primary-500 text-white py-2 px-4 rounded-md hover:bg-primary-600 transition-colors"
        >
          Add to Cart
        </button>
      </div>

      <ComponentModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        category={activeCategory}
        onSelect={(product) => {
          onComponentSelect(activeCategory, product);
          setShowModal(false);
        }}
      />
    </div>
  );
};

export default ComponentSelector;
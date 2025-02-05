import { useState } from 'react';
import { Product } from '../../../types';

export const useComponentSelection = () => {
  const [selectedComponents, setSelectedComponents] = useState<Record<string, Product>>({});
  const [showComponentModal, setShowComponentModal] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleComponentSelect = (category: string, product: Product | null) => {
    setSelectedComponents(prev => {
      if (product === null) {
        const newComponents = { ...prev };
        delete newComponents[category];
        return newComponents;
      }
      return {
        ...prev,
        [category]: product
      };
    });
    setShowComponentModal(false);
  };

  const calculateTotal = () => {
    return Object.values(selectedComponents).reduce(
      (total, product) => total + product.price,
      0
    );
  };

  return {
    selectedComponents,
    showComponentModal,
    activeCategory,
    setShowComponentModal,
    setActiveCategory,
    handleComponentSelect,
    calculateTotal
  };
};
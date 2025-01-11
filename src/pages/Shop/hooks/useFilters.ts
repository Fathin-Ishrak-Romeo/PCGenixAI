import { useState, useMemo } from 'react';
import { Product } from '../../../types';

export const useFilters = (products: Product[]) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [minPrice, setMinPrice] = useState<number | ''>('');
  const [maxPrice, setMaxPrice] = useState<number | ''>('');
  const [sortOrder, setSortOrder] = useState('');

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('');
    setSelectedBrand('');
    setMinPrice('');
    setMaxPrice('');
    setSortOrder('');
  };

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply category filter
    if (selectedCategory) {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Apply brand filter
    if (selectedBrand) {
      filtered = filtered.filter(product => product.brand === selectedBrand);
    }

    // Apply price filter
    if (minPrice !== '') {
      filtered = filtered.filter(product => product.price >= minPrice);
    }
    if (maxPrice !== '') {
      filtered = filtered.filter(product => product.price <= maxPrice);
    }

    // Apply sorting
    if (sortOrder) {
      filtered.sort((a, b) => {
        switch (sortOrder) {
          case 'price_desc':
            return b.price - a.price;
          case 'price_asc':
            return a.price - b.price;
          case 'name_desc':
            return b.name.localeCompare(a.name);
          case 'name_asc':
            return a.name.localeCompare(b.name);
          default:
            return 0;
        }
      });
    }

    return filtered;
  }, [products, searchQuery, selectedCategory, selectedBrand, minPrice, maxPrice, sortOrder]);

  return {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    selectedBrand,
    setSelectedBrand,
    minPrice,
    maxPrice,
    setMinPrice,
    setMaxPrice,
    sortOrder,
    setSortOrder,
    resetFilters,
    filteredProducts
  };
};
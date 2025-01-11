import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useAuthStore } from '../../store/authStore';
import { Product } from '../../types';
import { useProducts } from './hooks/useProducts';
import { useFilters } from './hooks/useFilters';
import SearchBar from './components/SearchBar';
import FilterPanel from './components/FilterPanel';
import ProductCard from './components/ProductCard';
import { cartService } from '../../services/cartService';

const Shop = () => {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const { products, loading } = useProducts();
  const {
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
  } = useFilters(products);

  const handleAddToCart = async (product: Product) => {
    if (!user) {
      toast.error('Please sign in to add items to cart');
      navigate('/signin');
      return;
    }

    try {
      const result = await cartService.addToCart(user.id, product);
      toast.success(result.message);
    } catch (error) {
      console.error('Error adding to cart:', error);
      toast.error('Failed to add to cart');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shop Components</h1>
      
      <div className="mb-8">
        <SearchBar 
          searchQuery={searchQuery} 
          onSearchChange={setSearchQuery} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <FilterPanel
            categories={Array.from(new Set(products.map(p => p.category)))}
            brands={Array.from(new Set(products.map(p => p.brand)))}
            minPrice={minPrice}
            maxPrice={maxPrice}
            selectedCategory={selectedCategory}
            selectedBrand={selectedBrand}
            selectedMinPrice={minPrice}
            selectedMaxPrice={maxPrice}
            sortOrder={sortOrder}
            onCategoryChange={setSelectedCategory}
            onBrandChange={setSelectedBrand}
            onMinPriceChange={setMinPrice}
            onMaxPriceChange={setMaxPrice}
            onSortOrderChange={setSortOrder}
            onReset={resetFilters}
          />
        </div>

        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
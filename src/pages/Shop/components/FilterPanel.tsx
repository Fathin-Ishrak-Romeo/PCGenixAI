import { ChangeEvent } from 'react';

interface FilterPanelProps {
  categories: string[];
  brands: string[];
  selectedCategory: string;
  selectedBrand: string;
  selectedMinPrice: number | '';
  selectedMaxPrice: number | '';
  sortOrder: string;
  onCategoryChange: (category: string) => void;
  onBrandChange: (brand: string) => void;
  onMinPriceChange: (price: number | '') => void;
  onMaxPriceChange: (price: number | '') => void;
  onSortOrderChange: (order: string) => void;
  onReset: () => void;
}

const FilterPanel = ({
  categories,
  brands,
  selectedCategory,
  selectedBrand,
  selectedMinPrice,
  selectedMaxPrice,
  sortOrder,
  onCategoryChange,
  onBrandChange,
  onMinPriceChange,
  onMaxPriceChange,
  onSortOrderChange,
  onReset,
}: FilterPanelProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2">Category</label>
        <select
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Brand</label>
        <select
          value={selectedBrand}
          onChange={(e) => onBrandChange(e.target.value)}
          className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
        >
          <option value="">All Brands</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Price Range ($)</label>
        <div className="flex space-x-2">
          <input
            type="number"
            value={selectedMinPrice}
            onChange={(e: ChangeEvent<HTMLInputElement>) => 
              onMinPriceChange(e.target.value ? Number(e.target.value) : '')
            }
            placeholder="Min"
            className="w-1/2 p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
          />
          <input
            type="number"
            value={selectedMaxPrice}
            onChange={(e: ChangeEvent<HTMLInputElement>) => 
              onMaxPriceChange(e.target.value ? Number(e.target.value) : '')
            }
            placeholder="Max"
            className="w-1/2 p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Sort By</label>
        <select
          value={sortOrder}
          onChange={(e) => onSortOrderChange(e.target.value)}
          className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
        >
          <option value="">Default</option>
          <option value="price_desc">Price: High to Low</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="name_desc">Name: Z to A</option>
          <option value="name_asc">Name: A to Z</option>
        </select>
      </div>

      <button
        onClick={onReset}
        className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
      >
        Reset Filters
      </button>
    </div>
  );
};

export default FilterPanel;
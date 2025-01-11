import { Product } from '../../../types';
import { X } from 'lucide-react';

interface SelectedComponentDetailsProps {
  component: Product;
  onClear: () => void;
}

const SelectedComponentDetails = ({ component, onClear }: SelectedComponentDetailsProps) => {
  return (
    <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-md">
      <div className="flex items-center gap-3">
        <img 
          src={component.image_url} 
          alt={component.name}
          className="w-12 h-12 object-cover rounded-md"
        />
        <div className="flex-1">
          <h4 className="font-medium text-sm">{component.name}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-300">{component.brand}</p>
          <p className="text-sm font-semibold text-primary-600 dark:text-primary-400">
            ${component.price}
          </p>
        </div>
        <button
          onClick={onClear}
          className="p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition-colors"
          title="Clear selection"
        >
          <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        </button>
      </div>
    </div>
  );
}

export default SelectedComponentDetails;
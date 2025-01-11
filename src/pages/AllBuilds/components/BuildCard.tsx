import { SavedBuild } from '../../../types';
import { formatDate } from '../../../utils/dateUtils';

interface BuildCardProps {
  build: SavedBuild;
  onAddToCart: (build: SavedBuild) => void;
}

const BuildCard = ({ build, onAddToCart }: BuildCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold">{build.name}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {formatDate(build.created_at)}
          </p>
        </div>
        <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
          {build.usage_category}
        </span>
      </div>

      <div className="space-y-4 mb-6">
        {Object.entries(build.components).map(([category, component]) => (
          <div key={category} className="flex items-center gap-4">
            <img
              src={component.image_url}
              alt={component.name}
              className="w-12 h-12 object-cover rounded"
            />
            <div>
              <p className="font-medium">{component.name}</p>
              <p className="text-sm text-gray-500">{category}</p>
            </div>
            <p className="ml-auto font-semibold">৳{component.price}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center pt-4 border-t dark:border-gray-700">
        <p className="text-lg font-bold">Total: ৳{build.total_price}</p>
        <button
          onClick={() => onAddToCart(build)}
          className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default BuildCard;
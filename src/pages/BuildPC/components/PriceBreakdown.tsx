import { Product } from '../../../types';

interface PriceBreakdownProps {
  components: Product[] | Record<string, Product>;
}

const PriceBreakdown = ({ components }: PriceBreakdownProps) => {
  const componentArray = Array.isArray(components) 
    ? components 
    : Object.values(components);

  const calculateTotal = () => {
    return componentArray.reduce((total, product) => total + product.price, 0);
  };

  if (componentArray.length === 0) {
    return null;
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Price Breakdown</h3>
      <div className="space-y-2">
        {componentArray.map((product) => (
          <div key={product.id} className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">{product.category}</span>
            <span>${product.price}</span>
          </div>
        ))}
        <div className="pt-2 border-t dark:border-gray-700">
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>${calculateTotal()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceBreakdown;
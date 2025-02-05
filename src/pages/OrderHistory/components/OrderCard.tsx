import { Order } from '../../../types';
import { formatDate } from '../../../utils/dateUtils';

interface OrderCardProps {
  order: Order;
}

const OrderCard = ({ order }: OrderCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold">Order #{order.id.slice(0, 8)}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {formatDate(order.created_at)}
          </p>
        </div>
        <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200">
          {order.status}
        </span>
      </div>

      <div className="space-y-4">
        {order.items.map((item) => (
          <div key={item.id} className="flex items-center gap-4">
            <img
              src={item.product.image_url}
              alt={item.product.name}
              className="w-16 h-16 object-cover rounded-md"
            />
            <div className="flex-grow">
              <h4 className="font-medium">{item.product.name}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Quantity: {item.quantity}
              </p>
            </div>
            <p className="font-medium">৳{item.product.price * item.quantity}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t dark:border-gray-700">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Payment Method</p>
            <p className="font-medium">{order.payment_method}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600 dark:text-gray-400">Total Amount</p>
            <p className="text-lg font-bold">৳{order.total_amount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
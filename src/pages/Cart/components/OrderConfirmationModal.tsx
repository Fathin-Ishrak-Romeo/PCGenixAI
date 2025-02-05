import { Dialog } from '@headlessui/react';
import { CheckCircle } from 'lucide-react';

interface OrderConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderDetails: {
    orderId: string;
    total: number;
    date: string;
  };
}

const OrderConfirmationModal = ({ isOpen, onClose, orderDetails }: OrderConfirmationModalProps) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-sm rounded-lg bg-white dark:bg-gray-800 p-6">
          <div className="text-center">
            <CheckCircle className="mx-auto h-12 w-12 text-green-500" />
            <Dialog.Title className="text-lg font-medium leading-6 text-gray-900 dark:text-white mt-4">
              Order Confirmed!
            </Dialog.Title>
            
            <div className="mt-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Order #{orderDetails.orderId}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Total: ৳{orderDetails.total}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Date: {orderDetails.date}
              </p>
            </div>

            <div className="mt-6">
              <button
                onClick={onClose}
                className="w-full bg-primary-500 text-white py-2 px-4 rounded-lg hover:bg-primary-600 transition-colors transform hover:scale-105"
              >
                View Order History
              </button>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default OrderConfirmationModal;
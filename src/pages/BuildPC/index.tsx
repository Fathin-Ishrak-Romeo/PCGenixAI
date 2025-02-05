import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useAuthStore } from '../../store/authStore';
import { useAuthGuard } from '../../hooks/useAuthGuard';
import { Product } from '../../types';
import { cartService } from '../../services/cartService';
import { useSaveBuild } from './hooks/useSaveBuild';
import ComponentSelector from './components/ComponentSelector';
import PCBuildGenerator from './components/PCBuildGenerator';
import { useComponentSelection } from './hooks/useComponentSelection';

const BuildPC = () => {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const { requireAuth } = useAuthGuard();
  const { saveBuild, saving } = useSaveBuild(user?.id);
  const {
    selectedComponents,
    handleComponentSelect,
    calculateTotal
  } = useComponentSelection(user?.id);

  const handleAddToCart = async (components: Product[] | Record<string, Product>) => {
    requireAuth(async () => {
      try {
        const componentsArray = Array.isArray(components) 
          ? components 
          : Object.values(components);

        for (const component of componentsArray) {
          await cartService.addToCart(user!.id, component);
        }
        toast.success('Added all components to cart');
      } catch (error) {
        console.error('Error adding to cart:', error);
        toast.error('Failed to add items to cart');
      }
    });
  };

  const handleComponentClick = () => {
    if (!user) {
      toast.error('Please sign in to use this feature');
      navigate('/signin');
      return;
    }
  };

  const handleSaveBuild = () => {
    requireAuth(() => saveBuild(selectedComponents));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Build Your PC</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <PCBuildGenerator 
            onAddToCart={handleAddToCart}
            onComponentClick={handleComponentClick}
          />
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-8">
            <ComponentSelector
              selectedComponents={selectedComponents}
              onComponentSelect={handleComponentSelect}
              onSaveBuild={handleSaveBuild}
              onAddToCart={() => handleAddToCart(selectedComponents)}
              onComponentClick={handleComponentClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildPC;
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useAuthStore } from '../../store/authStore';
import { cartService } from '../../services/cartService';
import { SavedBuild } from '../../types';
import { useAllBuilds } from './hooks/useAllBuilds';
import BuildCard from './components/BuildCard';

const AllBuilds = () => {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const { builds, loading } = useAllBuilds(user?.id);

  const handleAddToCart = async (build: SavedBuild) => {
    if (!user) {
      toast.error('Please sign in to add items to cart');
      navigate('/signin');
      return;
    }

    try {
      const components = Object.values(build.components);
      for (const component of components) {
        await cartService.addToCart(user.id, component);
      }
      toast.success('Build added to cart successfully');
    } catch (error) {
      console.error('Error adding build to cart:', error);
      toast.error('Failed to add build to cart');
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
      <h1 className="text-3xl font-bold mb-8">My Builds</h1>

      {builds.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500 dark:text-gray-400">No saved builds found</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {builds.map((build) => (
            <BuildCard
              key={build.id}
              build={build}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllBuilds;
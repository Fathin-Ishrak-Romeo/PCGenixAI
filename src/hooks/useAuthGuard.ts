import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useAuthStore } from '../store/authStore';

export const useAuthGuard = () => {
  const { user } = useAuthStore();
  const navigate = useNavigate();

  const requireAuth = (action: () => void) => {
    if (!user) {
      toast.error('Please sign in to use this feature');
      navigate('/signin');
      return;
    }
    action();
  };

  return { requireAuth };
};
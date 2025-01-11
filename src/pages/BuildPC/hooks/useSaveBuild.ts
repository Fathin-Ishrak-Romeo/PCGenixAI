import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { buildService } from '../../../services/buildService';
import { Product } from '../../../types';

export const useSaveBuild = (userId: string | undefined) => {
  const navigate = useNavigate();
  const [saving, setSaving] = useState(false);

  const saveBuild = async (components: Record<string, Product>) => {
    if (!userId) {
      toast.error('Please sign in to save your build');
      navigate('/signin');
      return;
    }

    if (Object.keys(components).length === 0) {
      toast.error('Please select at least one component');
      return;
    }

    setSaving(true);
    try {
      await buildService.saveBuild(userId, components);
      toast.success('Build saved successfully');
      navigate('/all-builds');
    } catch (error: any) {
      console.error('Error saving build:', error);
      toast.error(error.message || 'Failed to save build');
    } finally {
      setSaving(false);
    }
  };

  return { saveBuild, saving };
};
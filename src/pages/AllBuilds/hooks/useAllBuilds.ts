import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { supabase } from '../../../lib/supabase';
import { SavedBuild } from '../../../types';

export const useAllBuilds = (userId: string | undefined) => {
  const [builds, setBuilds] = useState<SavedBuild[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) return;
    fetchBuilds();
  }, [userId]);

  const fetchBuilds = async () => {
    try {
      const { data, error } = await supabase
        .from('saved_builds')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setBuilds(data || []);
    } catch (error) {
      console.error('Error fetching builds:', error);
      toast.error('Failed to load saved builds');
    } finally {
      setLoading(false);
    }
  };

  return { builds, loading, fetchBuilds };
};
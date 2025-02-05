import { useState, FormEvent } from 'react';
import { toast } from 'react-hot-toast';
import { profileService } from '../../services/profileService';

interface NameFormProps {
  userId: string;
  currentName: string;
  onUpdate: (name: string) => void;
}

const NameForm = ({ userId, currentName, onUpdate }: NameFormProps) => {
  const [name, setName] = useState(currentName);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!name.trim()) {
      toast.error('Please enter your name');
      return;
    }

    setLoading(true);
    try {
      await profileService.updateName(userId, name);
      onUpdate(name);
      toast.success('Name updated successfully');
    } catch (error) {
      console.error('Error updating name:', error);
      toast.error('Failed to update name');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
          placeholder="Your name"
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading || name === currentName}
        className="w-full bg-primary-500 text-white py-2 px-4 rounded-lg hover:bg-primary-600 transition-colors disabled:opacity-50"
      >
        {loading ? 'Updating...' : 'Update Name'}
      </button>
    </form>
  );
};

export default NameForm;
import { useState, FormEvent } from 'react';
import { toast } from 'react-hot-toast';
import { profileService } from '../../services/profileService';

const PasswordForm = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (newPassword.length < 6) {
      toast.error('Password must be at least 6 characters long');
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error('New passwords do not match');
      return;
    }

    setLoading(true);
    try {
      await profileService.updatePassword(currentPassword, newPassword);
      toast.success('Password updated successfully');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (error: any) {
      console.error('Error updating password:', error);
      toast.error(error.message || 'Failed to update password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="currentPassword" className="block text-sm font-medium mb-2">
          Current Password
        </label>
        <input
          id="currentPassword"
          type="password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
          required
        />
      </div>

      <div>
        <label htmlFor="newPassword" className="block text-sm font-medium mb-2">
          New Password
        </label>
        <input
          id="newPassword"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
          minLength={6}
          required
        />
      </div>

      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
          Confirm New Password
        </label>
        <input
          id="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-primary-500 text-white py-2 px-4 rounded-lg hover:bg-primary-600 transition-colors disabled:opacity-50"
      >
        {loading ? 'Updating...' : 'Update Password'}
      </button>
    </form>
  );
};

export default PasswordForm;
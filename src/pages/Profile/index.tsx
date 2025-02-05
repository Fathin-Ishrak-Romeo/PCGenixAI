import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useAuthStore } from '../../store/authStore';
import { profileService } from '../../services/profileService';
import NameForm from '../../components/Profile/NameForm';
import PasswordForm from '../../components/Profile/PasswordForm';

const Profile = () => {
  const { user, updateProfile } = useAuthStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      loadProfile();
    }
  }, [user]);

  const loadProfile = async () => {
    try {
      const profile = await profileService.getProfile(user!.id);
      updateProfile(profile);
    } catch (error) {
      console.error('Error loading profile:', error);
      toast.error('Failed to load profile');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-2 border-primary-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-8">Profile Settings</h1>

        <div className="space-y-8">
          <div className="card p-6">
            <h2 className="text-xl font-semibold mb-4">Update Name</h2>
            <NameForm
              userId={user!.id}
              currentName={user!.name || ''}
              onUpdate={(name) => updateProfile({ ...user!, name })}
            />
          </div>

          <div className="card p-6">
            <h2 className="text-xl font-semibold mb-4">Change Password</h2>
            <PasswordForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
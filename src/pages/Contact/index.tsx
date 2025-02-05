import { useState, FormEvent, useRef } from 'react';
import { toast } from 'react-hot-toast';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { user } = useAuthStore();
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error('Please fill in all fields');
      return;
    }

    setLoading(true);

    try {
      const result = await emailjs.sendForm(
        'service_gkl19tl', // Replace with your EmailJS service ID
        'template_7yb7xws', // Replace with your EmailJS template ID
        formRef.current!,
        '5dC-yj75nByT-J9b4' // Replace with your EmailJS public key
      );

      if (result.text === 'OK') {
        toast.success('Message sent successfully');
        setMessage(''); // Only clear message, keep name and email
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="text-primary-500" />
                <span>fathin.ishrak7@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-primary-500" />
                <span>+880 1234567890</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-primary-500" />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Business Hours</h2>
            <div className="space-y-2">
              <p>Sunday - Thursday: 9:00 AM - 5:00 PM</p>
              <p>Saturday: 11:00 AM - 4:00 PM</p>
              <p>Friday: Closed</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Send us a Message</h2>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                id="name"
                name="from_name" // Required for EmailJS
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border rounded-md dark:border-gray-600 dark:bg-gray-700"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                id="email"
                name="from_email" // Required for EmailJS
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border rounded-md dark:border-gray-600 dark:bg-gray-700"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message" // Required for EmailJS
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full p-3 border rounded-md dark:border-gray-600 dark:bg-gray-700"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary-500 text-white py-3 rounded-md hover:bg-primary-600 transition-colors disabled:opacity-50"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
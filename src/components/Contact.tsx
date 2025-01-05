import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useSpring, animated } from '@react-spring/web';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const hoverAnimation = useSpring({
    transform: hovered ? 'scale(1.05)' : 'scale(1)',
    config: { tension: 300, friction: 10 }
  });

  const clickAnimation = useSpring({
    backgroundColor: clicked ? '#1E40AF' : '#3B82F6',
    config: { duration: 200 }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setClicked(true);
    setTimeout(() => setClicked(false), 200); // Reset the click state after animation
    console.log(formData);
  };

  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Get In Touch</h2>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                required
              />
            </div>
            <animated.button
              type="submit"
              style={{ ...hoverAnimation, ...clickAnimation }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="w-full py-3 px-6 text-white rounded-lg font-medium flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Send Message
            </animated.button>
          </form>
        </div>
      </div>
    </section>
  );
}

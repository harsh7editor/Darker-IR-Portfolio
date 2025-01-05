import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <a
            href="#"
            className={`text-xl font-bold ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            JD
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ scale: 1.1 }}
                className={`${
                  isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-gray-300 hover:text-white'
                } transition-colors duration-300`}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={isScrolled ? 'text-gray-900' : 'text-white'} size={24} />
            ) : (
              <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="md:hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={isMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ ease: 'easeOut', duration: 0.3 }}
        >
          {isMenuOpen && (
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileTap={{ scale: 0.95 }}
                  className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </nav>
  );
}

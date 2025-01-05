import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const technologies = [
  { name: 'React', level: 'Expert', icon: '⚛️' }, // Atom-like icon for React
  { name: 'Spring Boot', level: 'Expert', icon: '🌱' }, // Seedling for Spring Boot
  { name: 'Node.js', level: 'Advanced', icon: '🟢' }, // Green circle for Node.js
  { name: 'Tailwind CSS', level: 'Advanced', icon: '💨' }, // Wind gust for Tailwind CSS
  { name: 'Core Java', level: 'Intermediate', icon: '☕' }, // Coffee cup for Java
  { name: 'MySQL', level: 'Advanced', icon: '🐬' }, // Dolphin for MySQL
  { name: 'Hibernate (ORM)', level: 'Intermediate', icon: '🛠️' }, // Tools for development
  { name: 'JPA', level: 'Intermediate', icon: '📚' }, // Books for persistence and knowledge
  { name: 'AJAX', level: 'Intermediate', icon: '📡' }, // Antenna for asynchronous communication
  { name: 'Bootstrap', level: 'Advanced', icon: '🎨' }, // Palette for styling and design
  { name: 'JavaScript', level: 'Advanced', icon: '📜' }, // Scroll for scripting
];

export const TechGrid = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200"
        >
          <div className="text-4xl mb-2">{tech.icon}</div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
            {tech.name}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{tech.level}</p>
        </motion.div>
      ))}
    </div>
  );
};
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Github, Linkedin, Instagram, FileText } from 'lucide-react'; 3
import { ThemeToggle } from './components/ThemeToggle';
import { ProjectCard } from './components/ProjectCard';
import { TechGrid } from './components/TechGrid';
import { CertificateSlider } from './components/CertificateSlider';
import Navigation from './components/Navigation';



const projects = [
  {
    title: 'Expense-Tracker',
    description: 'Motivation Behind Project As a university student it is very important to be able to keep track of where I am spending my money',
    image: 'https://codingtorque.com/wp-content/uploads/2023/01/1-12.png.webp',
    technologies: ['React', 'HTML', 'CSS', 'JAVASCRIPT',],
    liveUrl: 'https://expense-tracker-react-ts-app.netlify.app/',
    githubUrl: 'https://github.com/harsh7editor/Expense-Tracker-App.in',
  }, {
    title: ' Wibe-Studio',
    description: 'Build a Stunning Fashion Studio Website with React JS[ Locomotive Scroll ]',
    image: 'https://raw.githubusercontent.com/codebucks27/wibe-studio-starter-files/main/Wibe-Home-Desktop.png',
    technologies: ['React', 'HTML', 'CSS', 'JAVASCRIPT', 'GSAP', 'Framer-mMtion',],
    liveUrl: 'https://wibes-studio.netlify.app/',
    githubUrl: 'https://github.com/harsh7editor/Wibe-Studio',
  }, {
    title: 'Re-jouice',
    description: 'Explore GSAP (GreenSock Animation Platform): Learn the ropes of GSAP and unlock the magic of smooth animations that will captivate your audience.',
    image: 'https://res.cloudinary.com/esntial/image/upload/f_auto,c_limit,w_1920,q_auto/v1695019445/rejouice_website_the_essential_design_8_42f3800edb.jpg',
    technologies: ['React', 'HTML', 'CSS', 'JAVASCRIPT', 'GSAP', 'React-Locomotive-Scroll',],
    liveUrl: 'https://re-jouice.netlify.app/',
    githubUrl: 'https://github.com/harsh7editor/rejouice.com',
  }, {
    title: 'SmartCity-Traveller',
    description: ' Replace the "google_maps_key" with your own google map api key.',
    image: 'https://nordicapis.com/wp-content/uploads/How-APIs-Are-Driving-Smart-Cities-Nordic-APIs.png',
    technologies: ['Oracle', 'HTML', 'CSS', 'JAVASCRIPT', 'XML', 'SRINGBOOT', 'MYSQL', 'GOOGLE API'],
    liveUrl: 'https://smart-city-traveller.netlify.app/',
    githubUrl: 'https://github.com/harsh7editor/SmartCity-Traveller',
  },
  // Add more projects
];
// Set current year in the footer
const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}

// Scroll to top functionality
const scrollToTopButton = document.getElementById('scrollToTop');
if (scrollToTopButton) {
  scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}


function App() {
  // Using `useInView` for observing section visibility
  const [aboutRef, aboutInView] = useInView({ threshold: 0.1 });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Theme Toggle Component */}
      <ThemeToggle />

      {/* Navigation Bar */}
      <Navigation />


      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center" />
        <div className="container mx-auto px-6 relative">
          <div className="flex flex-col items-center text-center space-y-8">

            {/* Introduction */}
            <a href="https://github.com/harsh7editor">
              <img
                style={{ float: "right" }}
                src="https://user-images.githubusercontent.com/74038190/229223156-0cbdaba9-3128-4d8e-8719-b6b4cf741b67.gif"
                alt="GitHub Avatar"
                width="170"
              />
            </a>
            <div className="text-center mt-12">
              <h1 className="text-center">
                <a href="https://git.io/typing-svg">
                  <img
                    src="https://readme-typing-svg.herokuapp.com/?lines=Hi+There!+👋;+Myself+HARSH!;&center=true&font=Righteous&size=35"
                    alt="Typing SVG"
                  />
                </a>
              </h1>

              <h3 className="text-center">
                <a href="https://git.io/typing-svg">
                  <img
                    src="https://readme-typing-svg.demolab.com?font=Fira+Code&pause=1000&width=435&lines=A+passionate+FULL+STACK+JAVA+developer+from+India"
                    alt="Typing SVG"
                  />
                </a>
              </h3>
            </div>


            {/* Social Links */}
            <div className="flex justify-center gap-6 mb-12">
              <a
                href="harshkori389@gmail.com"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/harsh7editor"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/harsh-kori%E2%99%BE%EF%B8%8F-ba2413247/"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/harsh_kori27/"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                <Instagram className="w-6 h-6" />
              </a>
            </div>

            {/* Resume Button */}
            <button className="mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2 animate-bounce-subtle">
              <FileText size={20} />
              View Resume
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/60 rounded-full" />
          </div>
        </div>
      </section>


      {/* About Section */}
      <section
        ref={aboutRef}
        className="py-20 px-4 md:px-8 max-w-6xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={aboutInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
         About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center max-w-3xl mx-auto">
            I'm a passionate  FULL stack developer with  in building
            scalable web applications and cloud solutions. I specialize in
            React, Node.js, and AWS architecture.
          </p>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Technologies & Skills
          </h2>
          <TechGrid />
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Certifications
          </h2>
          <CertificateSlider />
        </div>

      </section>
       {/* Contributed Profile */}
<div className="flex flex-col items-center max-w-screen-md mx-auto p-4">
  <h5 className="mb-8 text-3xl font-bold text-center text-silvertxt custom-underline pb-8">
    Top Contributed Repo
  </h5>
  <a href="https://github.com/harsh7editor">
    <img 
      className="max-w-full h-auto" 
      src="https://github-contributor-stats.vercel.app/api?username=harsh7editor&limit=5&theme=blue-green&combine_all_yearly_contributions=true" 
      width="600" 
      alt="Contributor Stats"
    />
  </a>
</div>



      {/* Competitive Profile */}
      <h5 className="mb-8 text-3xl font-bold text-center text-silvertxt custom-underline pb-8">
        Competitive Profile
      </h5>

      <div className="relative w-full mx-auto max-w-xl my-5" data-aos="fade-right">
        {/* Animation wrapper */}
        <div
          className="animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg] 
        before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-1/2 before:w-12 before:h-px 
        before:bg-gradient-to-r before:from-[#64748b] before:to-transparent">
        </div>

        {/* LeetCode Profile Card */}
        <div className="relative shadow-xl bg-gray-900 border border-gray-800 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <img
            src="https://leetcard.jacoblin.cool/harsh_kori277?theme=chartreuse&font=Noto%20Sans%20Georgian&ext=heatmap"
            className="h-full w-full"
            alt="LeetCode Profile"
          />
        </div>
      </div>


      {/* Contact Section */}
      <section className="py-20 bg-gray-50" id="contact">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Get In Touch</h2>
          <div className="max-w-2xl mx-auto">
            <form id="contactForm" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 12h9m-9 0l3 3m-3-3l3-3" />
                </svg>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="bg-gray-900 text-gray-400">
        <footer className="bg-gray-900 text-gray-400 py-12">
          <div className="container mx-auto px-6">
            <div className="flex flex-col items-center">
              <div className="flex space-x-6 mb-8">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 2C6.475 2 2 6.475 2 12c0 4.418 2.867 8.166 6.839 9.491.5.092.682-.217.682-.482v-1.694c-2.781.604-3.37-1.342-3.37-1.342-.454-1.152-1.11-1.46-1.11-1.46-.908-.62.068-.607.068-.607 1.004.07 1.533 1.032 1.533 1.032.892 1.529 2.34 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.254-4.555-1.112-4.555-4.947 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.277.098-2.66 0 0 .84-.27 2.751 1.025A9.635 9.635 0 0 1 12 6.801a9.635 9.635 0 0 1 2.511.338c1.91-1.295 2.75-1.025 2.75-1.025.545 1.383.202 2.407.1 2.66.64.7 1.028 1.595 1.028 2.688 0 3.843-2.337 4.69-4.564 4.94.36.31.68.919.68 1.852v2.75c0 .267.182.576.687.48A10.002 10.002 0 0 0 22 12c0-5.525-4.475-10-10-10z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  {/* LinkedIn Icon*/}

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 8a6 6 0 0 1 6 6v4.5A1.5 1.5 0 0 1 20.5 20H17a1 1 0 0 1-1-1v-4.5a3.5 3.5 0 1 0-7 0V19a1 1 0 0 1-1 1h-3.5A1.5 1.5 0 0 1 2 17.5V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v10.5a1.5 1.5 0 0 1 3 0V13a5 5 0 0 1 5-5z" />
                  </svg>
                </a>
                <a
                  href="mailto:email@example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-300"
                  aria-label="Email"
                >
                  {/* Mail Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 8.5l9 5.5 9-5.5v8.25a1.25 1.25 0 0 1-1.25 1.25H4.25A1.25 1.25 0 0 1 3 16.75V8.5z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 8.5L12 3l9 5.5M3 8.5v8.25a1.25 1.25 0 0 0 1.25 1.25H20.75a1.25 1.25 0 0 0 1.25-1.25V8.5" />
                  </svg>
                </a>
              </div>
              <p className="text-center mb-8">
                © 2024 <span id="year"></span> Harsh Kori. All rights reserved .
              </p>
              <button
                id="scrollToTop"
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-300"
                aria-label="Scroll to top"
              >
                {/* Arrow  Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25 12 7.5l6.75 6.75" />
                </svg>
              </button>
            </div>
          </div>
        </footer>
      </section>

    </div>
  );

}

export default App;
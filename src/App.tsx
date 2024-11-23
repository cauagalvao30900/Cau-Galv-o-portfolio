import { motion, useScroll, useSpring } from 'framer-motion';
import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="relative">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-red-600 origin-left z-50"
        style={{ scaleX }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-black py-8 text-center text-gray-400">
        <p>© {new Date().getFullYear()} Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
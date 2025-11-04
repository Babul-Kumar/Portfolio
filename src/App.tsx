import Ballpit from './components/Ballpit';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <div className="fixed inset-0 z-0">
        <Ballpit />
      </div>

      <div className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact />

        <footer className="py-8 text-center text-gray-500 text-sm border-t border-gray-800">
          <p>&copy; 2025 Babul Kumar. Built with React, TypeScript, and Tailwind CSS.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;

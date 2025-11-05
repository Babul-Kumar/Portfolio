import Ballpit from './components/Ballpit';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';

// Component inspired by Kevin Levron:
// https://x.com/soju22/status/1858925191671271801

function App() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <div style={{position: 'relative', overflow: 'hidden', minHeight: '500px', maxHeight: '500px', width: '100%'}}>
        <Ballpit
          count={200}
          gravity={0.7}
          friction={0.8}
          wallBounce={0.95}
          followCursor={true}
        />
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

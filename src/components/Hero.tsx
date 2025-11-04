import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="max-w-4xl mx-auto text-center z-10">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-green-400 via-orange-400 to-red-400 bg-clip-text text-transparent animate-fade-in">
          Babul Kumar
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-delay-1">
          AI Engineer • Full-Stack Developer • Innovation Enthusiast
        </p>

        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in-delay-2">
          Passionate about building intelligent systems and automation solutions.
          Transforming ideas into impactful AI-powered applications.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-12 animate-fade-in-delay-3">
          <a
            href="mailto:bk7321634@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-all duration-300 hover:scale-105"
          >
            <Mail size={20} />
            <span>Email Me</span>
          </a>

          <a
            href="https://github.com/babul-kumar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-300 hover:scale-105"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>

          <a
            href="https://linkedin.com/in/babul-kumar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300 hover:scale-105"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm animate-fade-in-delay-4">
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>+91-9113797406</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>Punjab, India</span>
          </div>
        </div>
      </div>
    </section>
  );
}

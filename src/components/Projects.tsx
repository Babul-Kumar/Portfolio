import { Brain, Activity, Smile, Globe, Film, Lightbulb } from 'lucide-react';

const projects = [
  {
    icon: Brain,
    title: 'Steganography Detector',
    description:
      'Python-based GUI application detecting hidden data in images using LSB pixel-level analysis with optimized parsing algorithms.',
    tech: ['Python', 'OpenCV', 'GUI'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Activity,
    title: 'Smart System Monitor',
    description:
      'Real-time system performance monitor displaying CPU, RAM, battery, and network usage with junk cleaner and auto alerts.',
    tech: ['Python', 'System APIs', 'Real-time'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Smile,
    title: 'Emotion & Age Detection',
    description:
      'AI-powered computer vision model detecting emotions and estimating age using OpenCV and deep learning with live webcam integration.',
    tech: ['Python', 'OpenCV', 'TensorFlow', 'Deep Learning'],
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Globe,
    title: 'Pollution Monitoring Website',
    description:
      'Responsive web platform displaying real-time pollution levels for multiple cities with alert notifications and graph-based analytics.',
    tech: ['HTML', 'CSS', 'JavaScript', 'APIs'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Film,
    title: 'Movie Information Website',
    description:
      'Interactive movie database with genre filters, ratings, and search functionality deployed with responsive design.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    color: 'from-orange-500 to-yellow-500',
  },
  {
    icon: Lightbulb,
    title: 'Automatic Street Light (IoT)',
    description:
      'Arduino-based LDR sensor system controlling streetlights based on ambient light, reducing energy consumption by up to 30%.',
    tech: ['Arduino', 'IoT', 'Sensors'],
    color: 'from-indigo-500 to-purple-500',
  },
];

export default function Projects() {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-orange-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 group"
            >
              <div
                className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <project.icon className="text-white" size={24} />
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>

              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

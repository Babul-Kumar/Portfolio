import { Code, Database, Brain, Wrench, Users, Sparkles } from 'lucide-react';

const skillCategories = [
  {
    icon: Code,
    title: 'Programming Languages',
    skills: ['Python', 'JavaScript', 'C', 'HTML', 'CSS'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Sparkles,
    title: 'Web Technologies',
    skills: ['Flask', 'React', 'Tailwind CSS', 'Responsive Design'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Brain,
    title: 'AI & ML',
    skills: ['OpenCV', 'TensorFlow', 'scikit-learn', 'Computer Vision', 'Deep Learning'],
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Database,
    title: 'Databases & Tools',
    skills: ['MySQL', 'SQLite', 'Git', 'GitHub'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Wrench,
    title: 'Development',
    skills: ['IoT', 'Arduino', 'System Monitoring', 'Automation'],
    color: 'from-orange-500 to-yellow-500',
  },
  {
    icon: Users,
    title: 'Soft Skills',
    skills: ['Problem-Solving', 'Team Collaboration', 'Adaptability', 'Communication', 'Project Management'],
    color: 'from-indigo-500 to-purple-500',
  },
];

export default function Skills() {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-orange-400 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 group"
            >
              <div
                className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <category.icon className="text-white" size={24} />
              </div>

              <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs hover:bg-purple-600 hover:text-white transition-colors duration-300"
                  >
                    {skill}
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

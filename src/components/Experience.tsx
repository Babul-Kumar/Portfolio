import { Award, Trophy, BookOpen } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: 'TechForge-25 Hackathon',
    organization: 'The Code Breakers & Tatva',
    description: 'Secured 4th Place at national-level hackathon with Team BotBros at Lovely Professional University',
    date: 'April 2025',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Award,
    title: 'Hack The Vibe 2025',
    organization: 'Industry Mentors',
    description: 'Participated and certified by Kavya Chouhan, Aliasgar Sogiawala, and Bhadra Gada',
    date: '2025',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: BookOpen,
    title: 'AWS Cloud Club - GameOn!',
    organization: 'AWS',
    description: 'Learned cloud computing through project-based collaboration',
    date: '2025',
    color: 'from-blue-500 to-cyan-500',
  },
];

const certifications = [
  {
    title: 'Effective Time Management',
    issuer: 'Master Union',
    date: 'October 2024',
  },
  {
    title: 'Introduction to DSA (Proctored Exam)',
    issuer: 'Coding Tantra',
    date: 'January 2025',
  },
];

export default function Experience() {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-orange-400 bg-clip-text text-transparent">
          Achievements & Certifications
        </h2>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-8">Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 group"
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${achievement.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <achievement.icon className="text-white" size={24} />
                </div>

                <h4 className="text-lg font-semibold text-white mb-2">{achievement.title}</h4>
                <p className="text-purple-400 text-sm mb-3">{achievement.organization}</p>
                <p className="text-gray-400 text-sm mb-3">{achievement.description}</p>
                <p className="text-gray-500 text-xs">{achievement.date}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-white mb-8">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
              >
                <h4 className="text-lg font-semibold text-white mb-2">{cert.title}</h4>
                <p className="text-purple-400 text-sm mb-2">{cert.issuer}</p>
                <p className="text-gray-500 text-xs">{cert.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

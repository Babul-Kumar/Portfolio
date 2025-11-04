import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Technology',
    field: 'Computer Science & Engineering',
    institution: 'Lovely Professional University',
    location: 'Punjab, India',
    period: 'August 2024 - Present',
    color: 'from-purple-500 to-pink-500',
  },
  {
    degree: 'Intermediate',
    field: 'Science Stream',
    institution: 'Mount Carmel International School',
    location: 'Bihar, India',
    period: 'April 2022 - March 2024',
    score: '63.3%',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    degree: 'Matriculation',
    field: 'General',
    institution: 'Central Public School',
    location: 'Bihar, India',
    period: 'April 2021 - March 2022',
    score: '87.6%',
    color: 'from-green-500 to-emerald-500',
  },
];

export default function Education() {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-orange-400 bg-clip-text text-transparent">
          Education
        </h2>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:scale-102 group"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${edu.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                >
                  <GraduationCap className="text-white" size={24} />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                    {edu.score && (
                      <span className="text-purple-400 font-semibold">{edu.score}</span>
                    )}
                  </div>

                  <p className="text-purple-400 mb-2">{edu.field}</p>
                  <p className="text-gray-300 mb-1">{edu.institution}</p>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 text-gray-500 text-sm">
                    <span>{edu.location}</span>
                    <span className="hidden md:inline">•</span>
                    <span>{edu.period}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

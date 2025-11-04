export default function About() {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-orange-400 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I'm a motivated Computer Science Engineering student at{' '}
            <span className="text-purple-400 font-semibold">Lovely Professional University</span>,
            passionate about Artificial Intelligence, Automation, and Full-Stack Development.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            With hands-on experience developing AI-powered applications, real-time monitoring tools,
            and responsive web platforms, I bring ideas to life through code. My expertise spans
            Python, JavaScript, and modern web technologies, with a focus on creating intelligent,
            user-centric solutions.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            I've demonstrated my skills through competitive hackathons, including securing{' '}
            <span className="text-pink-400 font-semibold">4th place at TechForge-25</span> with
            Team BotBros. I'm eager to contribute to innovative AI and automation solutions that
            make a real-world impact.
          </p>
        </div>
      </div>
    </section>
  );
}

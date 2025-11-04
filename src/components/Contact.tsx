import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-orange-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>

        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
          <div className="text-center mb-10">
            <p className="text-lg text-gray-300 mb-6">
              I'm always open to discussing new projects, opportunities, or collaborations.
              Feel free to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <a
              href="mailto:bk7321634@gmail.com"
              className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg hover:bg-purple-600/20 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Mail className="text-white" size={20} />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-white font-semibold">bk7321634@gmail.com</p>
              </div>
            </a>

            <a
              href="tel:+919113797406"
              className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg hover:bg-purple-600/20 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Phone className="text-white" size={20} />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Phone</p>
                <p className="text-white font-semibold">+91-9113797406</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                <MapPin className="text-white" size={20} />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Location</p>
                <p className="text-white font-semibold">Punjab, India</p>
              </div>
            </div>

            <div className="flex flex-col gap-3 p-4">
              <a
                href="https://github.com/babul-kumar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Github size={20} />
                <span>GitHub Profile</span>
              </a>

              <a
                href="https://linkedin.com/in/babul-kumar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Linkedin size={20} />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>

          <div className="text-center pt-6 border-t border-gray-800">
            <a
              href="mailto:bk7321634@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg transition-all duration-300 hover:scale-105 font-semibold"
            >
              <Send size={20} />
              <span>Send me a message</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

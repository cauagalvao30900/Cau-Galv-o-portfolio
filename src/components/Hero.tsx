import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            Olá, eu sou <span className="gradient-text">Cauã Galvão</span>
          </h1>
          <h2 className="text-xl sm:text-2xl text-gray-400 mb-8">
           Desenvolvedor
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center space-x-6 mb-12"
        >
          {[
            { Icon: Github, href: 'https://github.com/cauagalvao30900' },
            { Icon: Linkedin, href: 'https://www.linkedin.com/in/cauã-galvão-dev/' },
            { Icon: Mail, href: 'cauadev20@gmail.com' },
          ].map(({ Icon, href }, index) => (
            <motion.a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-400 hover:text-red-500 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
            >
              <Icon size={24} />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2070"
            alt="Code background"
            className="w-full h-64 object-cover rounded-lg opacity-50"
          />
        </motion.div>
      </div>
    </section>
  );
}
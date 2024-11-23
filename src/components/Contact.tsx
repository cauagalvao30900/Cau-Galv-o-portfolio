import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Entre em contato!</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
          Tem um projeto em mente? Vamos trabalhar juntos para criar algo incrível.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto"
        >
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Nome
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md bg-black border-gray-800 shadow-sm focus:border-red-500 focus:ring-red-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md bg-black border-gray-800 shadow-sm focus:border-red-500 focus:ring-red-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                Mensagem
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md bg-black border-gray-800 shadow-sm focus:border-red-500 focus:ring-red-500"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors"
            >
             Enviar mensagem
              <Send className="ml-2 h-4 w-4" />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
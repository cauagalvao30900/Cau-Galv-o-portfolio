import { motion } from 'framer-motion';
import { Code2, Database, Globe } from 'lucide-react';

export default function About() {
  const skills = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Desenvolvimento Frontend',
      description: 'Especialista em React, React Native, JavaScript, HTML, CSS e frameworks modernos de CSS',
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Desenvolvimento Backend',
      description: 'Proficiente em PHP, SQL, Firebase e Python',
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Desenvolvimento de UI/UX',
      description: 'Criando interfaces de usuário bonitas, intuitivas e responsivas com React, React Native e princípios modernos de design',
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Sobre mim</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
          Sou um desenvolvedor apaixonado com experiência na criação de aplicações web modernas.
          Adoro transformar problemas complexos em soluções simples e bonitas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-black p-6 rounded-lg hover:shadow-red-500/10 hover:shadow-lg transition-shadow"
            >
              <div className="text-red-500 mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-400">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
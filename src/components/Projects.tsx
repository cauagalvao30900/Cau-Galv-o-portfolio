import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'TechLearn',
      description: 'TechLearn, uma plataforma completa e interativa para aprender programação. Este aplicativo oferece uma série de recursos para ajudar os usuários a aprender e praticar programação de forma eficaz.',
      image: 'https://cdn.discordapp.com/attachments/1041866062939045909/1309715297460158504/Modelo_2_iPhone_Home_e_Comunidade.png?ex=674296ec&is=6741456c&hm=03146c45bf9da262eef90ac9b9687aeda2331c855cf8fbb5e7e2f355a071d8fc&',
      github: 'https://github.com/cauagalvao30900/Desenvolvimento-de-um-Aplicativo-M-vel-para-Ensino-de-Programa-o-com-Funcionalidades-Interativas',
      demo: 'https://site-tcc-tech-learn.vercel.app',
    },
    {
      title: 'Projeto de Banco de Dados para Loja de Produtos Tecnológicos',
      description: 'Script SQL para a criação, atualização e gerenciamento de um banco de dados destinado a uma loja de produtos tecnológicos. ',
      image: 'https://ehgomes.com.br/wp-content/uploads/2023/08/banco-de-dados-relacionais.webp',
      github: 'https://github.com/cauagalvao30900/Projeto-de-Banco-de-Dados-para-Loja-de-Produtos-Tecnol-gicos',
      demo: 'https://github.com/cauagalvao30900/Projeto-de-Banco-de-Dados-para-Loja-de-Produtos-Tecnol-gicos',
    },
    {
      title: 'Project 3',
      description: 'AI-powered data analytics dashboard',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=2076',
      github: 'https://github.com',
      demo: 'https://example.com',
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Meus Projetos</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
          Aqui estão alguns dos meus projetos recentes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-secondary rounded-lg overflow-hidden"
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-red-500 transition-colors"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-red-500 transition-colors"
                  >
                    <ExternalLink size={24} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
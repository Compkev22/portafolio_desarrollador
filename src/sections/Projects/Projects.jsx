import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { projects } from '../../data/projects.js';
import ProjectCarousel from '../../components/ProjectCarousel/ProjectCarousel.jsx';

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-surface-container/60 backdrop-blur-xl border border-outline/20 rounded-xl overflow-hidden flex flex-col"
    >
      <ProjectCarousel images={project.images} title={project.title} />

      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-on-surface mb-3">{project.title}</h3>
        <p className="text-sm text-on-surface-variant leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((tech, i) => (
            <span
              key={tech}
              className={`inline-block font-label text-xs px-3 py-1 rounded-full ${
                i % 2 === 0 ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-auto">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-surface-container-high border border-outline/20 text-on-surface px-5 py-2 rounded-full text-sm font-label hover:bg-surface-container-highest transition-colors"
          >
            <FiGithub size={16} /> Repositorio
          </a>
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-primary/20 border border-primary/50 text-primary px-5 py-2 rounded-full text-sm font-label hover:bg-primary/30 transition-colors shadow-[0_0_10px_rgba(124,58,237,0.2)]"
          >
            <FiExternalLink size={16} /> Ver Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-on-surface"
        >
          Proyectos Destacados
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm text-on-surface-variant text-center mb-12"
        >
          Haz clic en una captura para verla en tamaño completo.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

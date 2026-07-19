import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import {
  SiReact, SiJavascript, SiTailwindcss,
  SiSpring, SiNodedotjs, SiExpress,
  SiPostgresql, SiMysql, SiMongodb,
  SiGit, SiGithub,
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';

const categorias = [
  {
    titulo: 'Frontend',
    titleColor: 'text-primary',
    skills: [
      { name: 'React', pct: 85, icon: SiReact, desc: 'Creo interfaces dinámicas y manejo el estado de mis aplicaciones usando componentes funcionales.' },
      { name: 'JavaScript', pct: 86, icon: SiJavascript, desc: 'Desarrollo la lógica de mis proyectos web, dándoles interactividad y conectando el frontend con el backend.' },
      { name: 'Tailwind CSS', pct: 82, icon: SiTailwindcss, desc: 'Maqueto las vistas de mis proyectos de forma rápida y responsiva para que se vean bien en cualquier pantalla.' },
    ],
  },
  {
    titulo: 'Backend',
    titleColor: 'text-secondary',
    skills: [
      { name: 'Spring Boot', pct: 70, icon: SiSpring, desc: 'Armo servicios backend y APIs, aprovechando el framework para agilizar la configuración inicial.' },
      { name: 'Node.js', pct: 75, icon: SiNodedotjs, desc: 'Configuro el entorno de mis servidores y manejo la lógica principal detrás de mis aplicaciones web.' },
      { name: 'Express', pct: 80, icon: SiExpress, desc: 'Estructuro APIs RESTful prácticas para comunicar mis bases de datos con el frontend.' },
      { name: 'Java', pct: 82, icon: DiJava, desc: 'Aplico mis bases de programación orientada a objetos para crear aplicaciones backend estructuradas.' },
    ],
  },
  {
    titulo: 'Bases de datos',
    titleColor: 'text-primary',
    skills: [
      { name: 'PostgreSQL', pct: 70, icon: SiPostgresql, desc: 'Diseño tablas y relaciones estructuradas para guardar la información de mis proyectos de forma segura.' },
      { name: 'MySQL', pct: 80, icon: SiMysql, desc: 'Manejo bases de datos relacionales para organizar, consultar y actualizar los registros de mis aplicaciones.' },
      { name: 'MongoDB', pct: 78, icon: SiMongodb, desc: 'Utilizo esta base de datos NoSQL para guardar información más flexible y basada en documentos.' },
    ],
  },
  {
    titulo: 'Herramientas',
    titleColor: 'text-secondary',
    skills: [
      { name: 'Git', pct: 85, icon: SiGit, desc: 'Llevo el control de los cambios en mi código para mantener el historial ordenado y no perder mi progreso.' },
      { name: 'GitHub', pct: 85, icon: SiGithub, desc: 'Subo mis repositorios a la nube para respaldar mi código y poder trabajar en equipo.' },
    ],
  },
];

function FilaSkill({ name, pct, icon: Icon, desc }) {
  const [open, setOpen] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setOpen((o) => !o)}
      className="group/skill w-full text-left rounded-lg p-3 transition-colors duration-300 hover:bg-surface-container-high/50 cursor-pointer"
    >
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center shrink-0">
          <Icon className="text-primary" size={16} />
        </div>
        <span className="text-sm font-medium text-on-surface flex-1">{name}</span>
        <FiChevronDown
          size={16}
          className={`text-on-surface-variant transition-transform duration-300 ${open ? 'rotate-180' : ''} md:group-hover/skill:rotate-180`}
        />
      </div>

      <div className={`grid ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'} md:group-hover/skill:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out`}>
        <div className="overflow-hidden">
          <div className="pt-3 pl-11">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs text-on-surface-variant leading-relaxed">{desc}</p>
              <span className="text-sm font-semibold text-primary ml-3 shrink-0">{pct}%</span>
            </div>
            <div className="w-full h-1 rounded-full bg-surface-container-high overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-on-surface"
        >
          Tecnologías que domino
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm text-on-surface-variant text-center mb-12"
        >
          Pasa el cursor o toca cada tecnología para conocer cómo la uso.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {categorias.map((cat) => (
            <motion.div
              key={cat.titulo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-surface-container/60 backdrop-blur-xl border border-outline/20 rounded-xl p-6 flex flex-col gap-4 group hover:-translate-y-2 transition-transform duration-300"
            >
              <h3 className={`text-lg font-bold ${cat.titleColor} border-b border-outline/20 pb-4`}>
                {cat.titulo}
              </h3>
              <div className="flex flex-col gap-2">
                {cat.skills.map((s) => (
                  <FilaSkill key={s.name} {...s} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

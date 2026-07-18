import { motion } from 'framer-motion';
import {
  SiReact, SiJavascript, SiTailwindcss,
  SiSpring, SiNodedotjs, SiExpress, SiOpenjdk,
  SiPostgresql, SiMysql, SiMongodb,
  SiGit, SiGithub,
} from 'react-icons/si';

const categorias = [
  {
    titulo: 'Frontend',
    skills: [
      { name: 'React', pct: 85, icon: SiReact },
      { name: 'JavaScript', pct: 86, icon: SiJavascript },
      { name: 'Tailwind CSS', pct: 82, icon: SiTailwindcss },
    ],
  },
  {
    titulo: 'Backend',
    skills: [
      { name: 'Spring Boot', pct: 70, icon: SiSpring },
      { name: 'Node.js', pct: 75, icon: SiNodedotjs },
      { name: 'Express', pct: 80, icon: SiExpress },
      { name: 'Java', pct: 82, icon: SiOpenjdk },
    ],
  },
  {
    titulo: 'Bases de datos',
    skills: [
      { name: 'PostgreSQL', pct: 70, icon: SiPostgresql },
      { name: 'MySQL', pct: 80, icon: SiMysql },
      { name: 'MongoDB', pct: 78, icon: SiMongodb },
    ],
  },
  {
    titulo: 'Herramientas',
    skills: [
      { name: 'Git', pct: 85, icon: SiGit },
      { name: 'GitHub', pct: 85, icon: SiGithub },
    ],
  },
];

function BarraSkill({ name, pct, icon: Icon }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <span className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
          <Icon className="text-blue-600 dark:text-blue-400" size={16} />
          {name}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">{pct}%</span>
      </div>
      <div className="w-full h-2 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="h-full rounded-full bg-blue-600 dark:bg-blue-400"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Habilidades
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {categorias.map((cat) => (
            <div key={cat.titulo}>
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
                {cat.titulo}
              </h3>
              <div className="space-y-4">
                {cat.skills.map((s) => (
                  <BarraSkill key={s.name} {...s} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

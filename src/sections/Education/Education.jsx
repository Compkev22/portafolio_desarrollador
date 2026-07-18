import { motion } from 'framer-motion';
import { FiBookOpen, FiBriefcase } from 'react-icons/fi';

const timeline = [
  {
    tipo: 'educacion',
    icon: FiBookOpen,
    periodo: '2022',
    titulo: 'Inicio en el Centro Educativo Técnico Laboral Kinal',
    detalle: 'Segundo Básico.',
  },
  {
    tipo: 'educacion',
    icon: FiBookOpen,
    periodo: '2024',
    titulo: 'Cuarto Perito',
    detalle: 'Inicio en la programación.',
  },
  {
    tipo: 'experiencia',
    icon: FiBriefcase,
    periodo: 'Oct – Nov 2025',
    titulo: 'Tecnología Transaccional S.A.',
    detalle: 'Guatemala, Ciudad de Guatemala. Colaborador/desarrollador, ayudando a optimizar el programa de la empresa.',
  },
  {
    tipo: 'educacion',
    icon: FiBookOpen,
    periodo: '2026 · Actual',
    titulo: 'Sexto Perito en Informática',
    detalle: 'Último año de diversificado, a punto de entrar a la universidad.',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Educación y experiencia
        </motion.h2>

        <div className="relative pl-10">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gray-200 dark:bg-gray-700" />

          <div className="space-y-10">
            {timeline.map((item, i) => (
              <motion.div
                key={item.titulo}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative"
              >
                <div className="absolute -left-10 top-1 w-8 h-8 rounded-full bg-blue-600 dark:bg-blue-400 flex items-center justify-center">
                  <item.icon className="text-white dark:text-gray-900" size={16} />
                </div>

                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  {item.periodo}
                </span>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mt-1">
                  {item.titulo}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  {item.detalle}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

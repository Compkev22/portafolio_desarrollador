import { motion } from 'framer-motion';
import { FiUser, FiCalendar, FiMapPin, FiMail, FiCode, FiBookOpen } from 'react-icons/fi';

const datos = [
  { icon: FiUser, label: 'Nombre', value: 'Kevin Velásquez' },
  { icon: FiCalendar, label: 'Edad', value: '18 años' },
  { icon: FiMapPin, label: 'Ubicación', value: 'Guatemala' },
  { icon: FiMail, label: 'Email', value: 'kevinvelasquez2207@gmail.com' },
  { icon: FiCode, label: 'Programando desde', value: 'hace más de 2 años' },
  { icon: FiBookOpen, label: 'Actualmente', value: 'Estudiante de Sexto Perito en Informática' },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Sobre mí
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed"
          >
            Soy un desarrollador en constante aprendizaje, siempre buscando adaptarme a las nuevas tecnologías para no quedarme atrás. Disfruto convertir ideas en proyectos web completos — desde el frontend y el backend hasta el diseño de la base de datos — llevándolas de principio a fin.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 space-y-4"
          >
            {datos.map((d) => (
              <div key={d.label} className="flex items-center gap-3">
                <d.icon className="text-blue-600 dark:text-blue-400 shrink-0" size={20} />
                <span className="text-gray-500 dark:text-gray-400 text-sm">{d.label}:</span>
                <span className="text-gray-900 dark:text-gray-100 font-medium">{d.value}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

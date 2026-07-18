import { motion } from 'framer-motion';
import { FiUser, FiCalendar, FiMapPin, FiMail, FiCode, FiBookOpen } from 'react-icons/fi';

const colorClasses = {
  primary: 'text-primary',
  secondary: 'text-secondary',
};

const datos = [
  { icon: FiUser, label: 'Nombre', value: 'Kevin Velásquez', color: 'primary' },
  { icon: FiCalendar, label: 'Edad', value: '18 años', color: 'secondary' },
  { icon: FiMapPin, label: 'Ubicación', value: 'Guatemala', color: 'primary' },
  { icon: FiMail, label: 'Email', value: 'kevinvelasquez2207@gmail.com', color: 'secondary' },
  { icon: FiCode, label: 'Programando desde', value: 'hace más de 2 años', color: 'primary' },
  { icon: FiBookOpen, label: 'Actualmente', value: 'Estudiante de Sexto Perito en Informática', color: 'secondary' },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-8 items-stretch">
        {/* Descripción personal */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-7 bg-surface-container/60 backdrop-blur-xl border border-outline/20 rounded-xl p-8 flex flex-col justify-center gap-6 relative overflow-hidden group hover:scale-[1.01] transition-transform duration-500"
        >
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/40 transition-colors duration-500" />
          <h2 className="text-3xl md:text-4xl font-bold text-on-surface relative z-10">
            Sobre mí
          </h2>
          <p className="text-on-surface-variant text-lg leading-relaxed relative z-10">
            Soy un desarrollador en constante aprendizaje, siempre buscando adaptarme a las nuevas tecnologías para no quedarme atrás. Disfruto convertir ideas en proyectos web completos — desde el frontend y el backend hasta el diseño de la base de datos — llevándolas de principio a fin.
          </p>
        </motion.div>

        {/* Tarjeta de datos generales */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-5 bg-surface-container/60 backdrop-blur-xl border border-outline/20 rounded-xl p-8 flex flex-col gap-5 relative overflow-hidden group hover:scale-[1.01] transition-transform duration-500"
        >
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl group-hover:bg-secondary/40 transition-colors duration-500" />
          <h3 className="text-xl font-bold text-on-surface relative z-10 mb-2">Info General</h3>
          {datos.map((d) => (
            <div key={d.label} className="flex items-center gap-4 relative z-10">
              <div className={`w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center shrink-0 ${colorClasses[d.color]}`}>
                <d.icon size={18} />
              </div>
              <div className="min-w-0">
                <p className="text-sm text-on-surface-variant font-label">{d.label}</p>
                <p className="text-on-surface font-semibold truncate">{d.value}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

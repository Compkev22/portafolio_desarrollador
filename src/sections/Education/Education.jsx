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
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-on-surface"
        >
          Educación y experiencia
        </motion.h2>

        <div className="relative">
          {/* Línea central (desktop) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-outline/20" />
          {/* Línea lateral (mobile) */}
          <div className="md:hidden absolute left-5 top-2 bottom-2 w-px bg-outline/20" />

          <div className="space-y-12 md:space-y-16">
            {timeline.map((item, i) => {
              const isEven = i % 2 === 0;

              const card = (
                <div className="bg-surface-container/60 backdrop-blur-xl border border-outline/20 rounded-xl p-6">
                  <span className="inline-block font-label text-xs px-3 py-1 rounded-full bg-primary/10 text-primary mb-2">
                    {item.periodo}
                  </span>
                  <h3 className="text-lg font-bold text-on-surface">{item.titulo}</h3>
                  <p className="text-on-surface-variant mt-1">{item.detalle}</p>
                </div>
              );

              return (
                <motion.div
                  key={item.titulo}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="relative pl-14 md:pl-0 md:grid md:grid-cols-[1fr_3.5rem_1fr] md:gap-6 md:items-center"
                >
                  {/* Slot izquierdo (desktop) */}
                  <div className="hidden md:block">{isEven && card}</div>

                  {/* Ícono centrado en la línea */}
                  <div className="absolute left-0 top-0 md:static md:flex md:justify-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center shadow-[0_0_16px_rgba(124,58,237,0.4)]">
                      <item.icon className="text-on-primary" size={18} />
                    </div>
                  </div>

                  {/* Card en mobile (siempre visible) */}
                  <div className="md:hidden">{card}</div>

                  {/* Slot derecho (desktop) */}
                  <div className="hidden md:block">{!isEven && card}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

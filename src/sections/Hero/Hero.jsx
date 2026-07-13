import { motion } from 'framer-motion';
import heroImg from '../../assets/images/hero.png';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <motion.img
          src={heroImg}
          alt="Kevin Velásquez"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-48 h-48 rounded-full object-cover"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            Hola, soy <span className="text-blue-600 dark:text-blue-400">Kevin Velásquez</span>
          </h1>
          <p className="text-xl md:text-2xl mt-2 text-gray-600 dark:text-gray-400">
            Desarrollador Full Stack
          </p>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-md">
            Convierto problemas reales en sistemas que funcionan, de principio a fin.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
            >
              Ver proyectos
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-medium hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
            >
              Contactarme
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

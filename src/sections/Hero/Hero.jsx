import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import profileImg from '../../assets/images/profile.png';

const roles = ['Desarrollador Full Stack', 'Desarrollador Frontend', 'Desarrollador Backend'];

function useTypewriter(words, typingSpeed = 80, deletingSpeed = 40, pauseTime = 1500) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!deleting && subIndex === words[index].length) {
      const timeout = setTimeout(() => setDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    }
    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, words]);

  return words[index].substring(0, subIndex);
}

export default function Hero() {
  const text = useTypewriter(roles);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Blobs orgánicos de fondo */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] rounded-full bg-primary/15 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] rounded-full bg-secondary/15 blur-[120px]" />
        <div className="absolute top-[5%] right-[15%] w-[400px] h-[400px] rounded-full bg-surface-container-high/40 blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* Foto de perfil con glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative flex items-center justify-center"
        >
          <div className="absolute inset-[-50%] w-[200%] h-[200%] rounded-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.8)_0%,rgba(255,177,199,0.5)_40%,transparent_70%)] opacity-60 animate-pulse pointer-events-none" />
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-surface-container-high shadow-[0_0_40px_rgba(124,58,237,0.3)]">
            <img
              src={profileImg}
              alt="Kevin Velásquez"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-on-surface tracking-tight">
            Kevin Velásquez
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            {text}
            <span className="border-r-2 border-primary animate-pulse ml-1" />
          </h2>

          <p className="mt-6 text-lg text-on-surface-variant max-w-lg border-l-4 border-primary pl-4">
            Programar no se trata de lo que ya sabes, sino de lo que eres capaz de averiguar.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-on-primary font-semibold transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(124,58,237,0.4),6px_6px_16px_rgba(0,0,0,0.15),-6px_-6px_16px_rgba(255,255,255,0.05)] dark:shadow-[0_0_20px_rgba(124,58,237,0.4),6px_6px_16px_rgba(0,0,0,0.5),-6px_-6px_16px_rgba(255,255,255,0.03)]"
            >
              Ver Proyectos
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full bg-surface-container-high border border-outline text-on-surface font-semibold transition-all duration-300 hover:bg-surface-container-high/80 hover:scale-105 shadow-[6px_6px_16px_rgba(0,0,0,0.15),-6px_-6px_16px_rgba(255,255,255,0.05)] dark:shadow-[6px_6px_16px_rgba(0,0,0,0.5),-6px_-6px_16px_rgba(255,255,255,0.03)]"
            >
              Contactarme
            </a>
            <a
              href="/cv/kevin-velasquez-cv.pdf"
              download="Kevin-Velasquez-CV.pdf"
              className="flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-surface-container-high border border-outline text-on-surface font-semibold transition-all duration-300 hover:bg-surface-container-high/80 hover:scale-105 shadow-[6px_6px_16px_rgba(0,0,0,0.15),-6px_-6px_16px_rgba(255,255,255,0.05)] dark:shadow-[6px_6px_16px_rgba(0,0,0,0.5),-6px_-6px_16px_rgba(255,255,255,0.03)]"
            >
              <FiDownload size={18} />
              Descargar CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

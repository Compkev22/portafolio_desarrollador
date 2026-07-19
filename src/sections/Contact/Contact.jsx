import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiMail, FiLinkedin, FiGithub, FiSend } from 'react-icons/fi';

const contactMethods = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'kevinvelasquez2207@gmail.com',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=kevinvelasquez2207@gmail.com',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'Próximamente',
    href: null,
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'github.com/Compkev22',
    href: 'https://github.com/Compkev22',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date().toLocaleString('es-GT'),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-on-surface"
        >
          Ponte en Contacto
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm text-on-surface-variant text-center mb-12"
        >
          ¿Tienes un proyecto en mente? Escríbeme, con gusto lo platicamos.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-surface-container/60 backdrop-blur-xl border border-outline/20 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3">
              Conectemos
            </h3>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-8">
              ¿Tienes un proyecto en mente o simplemente quieres saludar? Estaré encantado de escucharte.
            </p>

            <div className="flex flex-col gap-5">
              {contactMethods.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center shrink-0 text-primary">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-label text-on-surface-variant">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-bold text-on-surface hover:text-primary transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-bold text-on-surface-variant/70">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-surface-container/60 backdrop-blur-xl border border-outline/20 rounded-xl p-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="name" className="block text-xs font-label text-on-surface-variant mb-2">
                  Nombre
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  className="w-full bg-surface-container-high border border-outline/20 rounded-lg px-4 py-2 text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-label text-on-surface-variant mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  className="w-full bg-surface-container-high border border-outline/20 rounded-lg px-4 py-2 text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-xs font-label text-on-surface-variant mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="¿De qué trata tu proyecto?"
                className="w-full bg-surface-container-high border border-outline/20 rounded-lg px-4 py-2 text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-on-primary px-6 py-3 rounded-full font-label font-semibold text-sm shadow-[0_0_16px_rgba(124,58,237,0.3)] hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FiSend size={16} />
              {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
            </button>

            {status === 'success' && (
              <p className="text-sm text-primary mt-4">
                ¡Mensaje enviado! Te responderé lo antes posible.
              </p>
            )}
            {status === 'error' && (
              <p className="text-sm text-red-400 mt-4">
                Algo salió mal. Intenta de nuevo o escríbeme directo a mi correo.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const footerLinks = [
  { href: '#hero', label: 'Inicio' },
  { href: '#about', label: 'Sobre mí' },
  { href: '#skills', label: 'Tecnologías' },
  { href: '#education', label: 'Educación' },
  { href: '#projects', label: 'Proyectos' },
  { href: '#contact', label: 'Contacto' },
];

const socials = [
  {
    icon: FiMail,
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=kevinvelasquez2207@gmail.com',
    label: 'Email',
  },
  {
    icon: FiGithub,
    href: 'https://github.com/Compkev22',
    label: 'GitHub',
  },
  {
    icon: FiLinkedin,
    href: 'https://www.linkedin.com/in/kevin-velasquez-dev/',
    label: 'LinkedIn',
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-outline/20 bg-surface-container/40 backdrop-blur-xl px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-lg font-semibold font-display text-on-surface">Kevin Velásquez</p>
          <p className="text-sm text-on-surface-variant mt-1">
            Convierto problemas reales en sistemas que funcionan, de principio a fin.
          </p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-on-surface-variant hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {socials.map(({ icon: Icon, href, label }) =>
            href ? (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-full bg-surface-container-high border border-outline/20 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/40 transition-colors"
              >
                <Icon size={16} />
              </a>
            ) : (
              <span
                key={label}
                aria-label={`${label} próximamente`}
                title="Próximamente"
                className="w-9 h-9 rounded-full bg-surface-container-high border border-outline/20 flex items-center justify-center text-on-surface-variant/40"
              >
                <Icon size={16} />
              </span>
            )
          )}
        </div>
      </div>

      <p className="text-center text-xs text-on-surface-variant/60 mt-8">
        © {new Date().getFullYear()} Kevin Velásquez. Hecho con React + Tailwind CSS.
      </p>
    </footer>
  );
}

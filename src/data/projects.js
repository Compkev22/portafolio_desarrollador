import loginRestaurante from '../assets/images/Login Restaurante.png';
import inicioRestaurante from '../assets/images/Inicio Restaurante.png';
import menuRestaurante from '../assets/images/Menu Restaurante.png';
import loginBanco from '../assets/images/Login Banco.png';
import cuentasBanco from '../assets/images/Cuentas Banco.png';
import tarjetasBanco from '../assets/images/Tarjetas Banco.png';

export const projects = [
  {
    id: 'kinal-fried-chicken',
    title: 'Kinal Fried Chicken',
    description:
      'Proyecto de gestión de restaurantes, tanto para la parte administrativa como para los clientes, con acceso a menú, usuarios y método de autenticación.',
    technologies: ['Node.js', 'Express', 'React', 'React Native', 'PostgreSQL', 'MongoDB'],
    images: [loginRestaurante, inicioRestaurante, menuRestaurante],
    repoUrl: 'https://github.com/Compkev22/Client-User-Restaurante.git',
    demoUrl: 'https://kinal-fried-chicken-user.web.app/login',
  },
  {
    id: 'kinal-bank',
    title: 'Kinal Bank',
    description:
      'Sistema bancario para administrar cuentas, tarjetas y clientes, con un panel para consultar saldos y movimientos, generar tarjetas asociadas a cada cuenta y gestionar la información de los usuarios de forma segura.',
    technologies: ['Node.js', 'Express', 'React', 'React Native', 'PostgreSQL', 'MongoDB'],
    images: [loginBanco, cuentasBanco, tarjetasBanco],
    repoUrl: 'https://github.com/orgs/KinalBank/repositories',
    demoUrl: 'https://client-user-bank-system.vercel.app/',
  },
];

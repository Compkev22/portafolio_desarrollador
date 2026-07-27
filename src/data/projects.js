import loginRestaurante from '../assets/images/Login Restaurante.png';
import inicioRestaurante from '../assets/images/Inicio Restaurante.png';
import menuRestaurante from '../assets/images/Menu Restaurante.png';
import loginBanco from '../assets/images/Login Banco.png';
import cuentasBanco from '../assets/images/Cuentas Banco.png';
import tarjetasBanco from '../assets/images/Tarjetas Banco.png';
import loginWorkDispatch from '../assets/images/Login WorkDispatch.png';
import clienteWorkDispatch from '../assets/images/Panel Cliente Workdispatch.png';
import trabajadorWorkDispatch from '../assets/images/panel Trabajador WorkDispatch.png';

export const projects = [
  {
    id: 'kinal-fried-chicken',
    title: 'Kinal Fried Chicken',
    description:
      'Proyecto de gestión de restaurantes, tanto para la parte administrativa como para los clientes, con acceso a menú, usuarios y método de autenticación.',
    technologies: ['Node.js', 'Express', 'React', 'React Native', 'PostgreSQL', 'MongoDB'],
    images: [loginRestaurante, inicioRestaurante, menuRestaurante],
    repoUrl: 'https://github.com/restaurantSystemKFC',
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
  {
    id: 'workdispatch',
    title: 'WorkDispatch',
    description:
      'Plataforma tipo inDrive para trabajos informales en Guatemala (plomeros, albañiles y oficios similares), que conecta clientes con trabajadores evitando la desconfianza de contratar a alguien desconocido sin referencias.',
    technologies: ['React', 'Node.js', 'Express', '.NET', 'PostgreSQL', 'MongoDB'],
    images: [loginWorkDispatch, clienteWorkDispatch, trabajadorWorkDispatch],
    repoUrl: 'https://github.com/ProjectWorkDispatch',
    demoUrl: null,
  },
];
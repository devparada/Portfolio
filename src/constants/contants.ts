// Este archivo contiene constantes como los enlaces a redes sociales y el correo electrónico

export const PROYECTOS = [
  {
    nombre: "RitmosBot",
    urlCodigo: "https://github.com/devparada/RitmosBot",
    urlDemo: "https://ritmosweb.vercel.app",
    urlImg: "/src/assets/ritmos-proyecto.png",
    descripcion:
      "Bot de música que permite a los usuarios disfrutar de su música en Discord con comandos simples.",
    lenguajes: [
      { nombre: "NodeJS" },
      { nombre: "JavaScript" },
      { nombre: "TypeScript" },
      { nombre: "Vitest" },
      { nombre: "Discord.js" },
    ],
  },
  {
    nombre: "TresEnrayaJS",
    urlCodigo: "https://github.com/devparada/TresEnRayaJS",
    urlDemo: "https://tresenraya.devparada.dev",
    urlImg: "/src/assets/tresenrayajs-proyecto.png",
    descripcion:
      "Versión del tres en raya en la que puedes jugar contra la CPU o contra otro jugador en la misma pantalla.",
    lenguajes: [
      { nombre: "HTML5" },
      { nombre: "CSS3" },
      { nombre: "JavaScript" },
    ],
  },
  {
    nombre: "TaskVelocity",
    urlCodigo: "https://github.com/devparada/taskvelocity",
    urlImg: "/src/assets/taskvelocity-proyecto.png",
    descripcion:
      "Proyecto de fin de ciclo de desarrollo de aplicaciones web, que permite a los usuarios gestionar sus tareas de manera eficiente y visual.",
    lenguajes: [
      { nombre: "PHP" },
      { nombre: "MySQL" },
      { nombre: "Bootstrap" },
    ],
  },
  {
    nombre: "ArgosBot",
    urlCodigo: "https://github.com/devparada/ArgosBot",
    urlImg: "/src/assets/argosbot-proyecto.png",
    descripcion:
      "Bot que avsia cuando se va el wifi de la casa mediante la API de Telegram.",
    lenguajes: [
      { nombre: "Python" },
      { nombre: "Scripts" },
      { nombre: "Telegram" },
    ],
  },
];

export const CERTIFICACIONES = [
  {
    nombre: "Drupal 11 Backend",
    empresa: "Forcontu",
    fecha: "Abril 2026",
    url: "/src/assets/certificados/drupal-11-backend.png",
  },
  {
    nombre: "FCOI12 - Análisis de Información Digital",
    empresa: "Junta de Galicia",
    fecha: "Enero 2026",
    url: "/src/assets/certificados/fcoi12.png",
  },
];

export const REDES_SOCIALES = {
  email: "raul.paradadelafuente@gmail.com",
  github: "https://github.com/devparada/",
  linkedin: "https://www.linkedin.com/in/raul-parada-de-la-fuente/",
  discord: "https://discord.com/channels/@me/554718560916733955"
};

export const STACK_TECNOLOGICO = {
  frontend: ["JavaScript", "TypeScript", "React", "Astro", "Tailwind CSS"],
  backend: ["Node.js", "Java", "MySQL"],
  herramientas: ["Git", "Docker", "Figma", "Vitest"],
};

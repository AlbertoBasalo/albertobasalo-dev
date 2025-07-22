import type { SectionProps } from "../components/Section.astro";

export type Home = {
  layout: {
    title: string;
    description: string;
  };
  hero: SectionProps;
  services: SectionProps;
  technologies: SectionProps;
  aidd: SectionProps;
  us: SectionProps;
};

export const HOME: Home = {
  layout: {
    title: "Alberto Basalo",
    description:
      "La programación evoluciona como nunca. Ayudo a empresas y profesionales a estar al día.",
  },
  hero: {
    title: "Alberto Basalo",
    subtitle: "Consultoría y formación para programadores profesionales.",
    cards: [],
    cta: {
      text: "AI code Quality",
      link: "",
    },
  },
  services: {
    title: "¿En qué te puedo ayudar?",
    subtitle:
      "La programación evoluciona como nunca; pero no es magIA, es tecnología.",
    cards: [
      {
        title: "Consultoría",
        description:
          "Arquitectura de software, migraciones, refactoring, buenas prácticas, testing e IA.",
        cta: {
          text: "Necesito una consultoría",
          link: "/consultoria",
        },
      },
      {
        title: "Formación",
        description:
          "Cursos a medida, formación en video o en directo. Bonificada para empresas.",
        cta: {
          text: "Necesito formación",
          link: "/formacion",
        },
      },
    ],
  },
  aidd: {
    title: "AI-Driven Development",
    subtitle:
      "Una metodología de desarrollo profesional con 3 agentes I.A.",
    cards: [
      {
        title: "Architect",
        description: "Definición de requerimientos, modelo de dominio y diseño del sistema.",
      },
      {
        title: "Builder",
        description:
          "Arquetipos y reglas para planificar tareas y generar código.",
      },
      {
        title: "Craftsman",
        description: "Mantenimiento y calidad con pruebas y documentación.",
      },
    ],
    cta: {
      text: "Más info en AI code Academy",
      link: "https://aicode.academy",
    },
  },
  technologies: {
    title: "Tecnologías que utilizo",
    subtitle:
      "Puedo ayudarte o formar a tu equipo en las tecnologías que te interesen.",
    cards: [
      {
        title: "Angular",
        description:
          "Migraciones, gestión de estado, micro frontends, testing...",
      },
      {
        title: "Express",
        description:
          "APIs, rendimiento, seguridad. Arquitecturas limpias, CQRS...",
      },
      {
        title: "Cypress",
        description:
          "Automatización de pruebas end-to-end de aplicaciones web y APIs.",
      },
      {
        title: "Jest",
        description:
          "Pruebas unitarias, de integración y TDD con TypeScript.",
      },
    ],
  },
  us: {
    title: "¿Quién soy?",
    subtitle:
      "Programador profesional, formador y consultor desde el siglo pasado.",
    cards: [],
    cta: {
      text: "Contacta conmigo en LinkedIn",
      link: "https://www.linkedin.com/in/albertobasalo/",
    },
  },
};

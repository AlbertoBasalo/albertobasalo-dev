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
      "La industria del software evoluciona como nunca; pero no es magIA, es tecnología.",
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
  technologies: {
    title: "Tecnologías que utilizo",
    subtitle:
      "Puedo ayudarte o formar a tu equipo en las tecnologías que te interesen.",
    cards: [
      {
        title: "Angular",
        description:
          "Migraciones, gestión de estado, micro frontends, testing, etc. (Angular clásico o moderno con señales y sin módulos)",
      },
      {
        title: "Express",
        description:
          "APIs, rendimiento, seguridad. Arquitecturas limpias, CQRS, etc. (También con Bun y NestJS)",
      },
      {
        title: "Cypress",
        description:
          "Automatización de pruebas end-to-end de aplicaciones web y APIs. (También con Playwright o Puppeteer)",
      },
      {
        title: "Jest",
        description:
          "Pruebas unitarias, de integración y TDD con TypeScript. (También con Vitest)",
      },
    ],
  },
  aidd: {
    title: "AI-Driven Development",
    subtitle:
      "Aplica los principios AI-DD para desarrollar profesionalmente con I.A.",
    cards: [
      {
        title: "Human in the Loop",
        description:
          "El humano es estratega, colaborador y responsable. Cambio de rol para los programadores: más documentación y arquitectura de software.",
      },
      {
        title: "Rules over Tools",
        description:
          "Las herramientas se someten a metodologías de desarrollo. Guías, reglas y buenas prácticas para tus agentes.",
      },
      {
        title: "A.I. Quality code",
        description:
          "El desarrollo es productivo, mantenible y de calidad. Testing a todos los niveles para garantizar la funcionalidad.",
      },
    ],
    cta: {
      text: "Más info en AI code Academy",
      link: "https://aicode.academy",
    },
  },
};

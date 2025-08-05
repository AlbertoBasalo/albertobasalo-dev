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
      "Una metodología de desarrollo profesional para programadores de cualquier lenguaje.",
    cards: [
      {
        title: "Agentes",
        description: "La IA afecta a todo el ciclo de vida del desarrollo. AIDD te ayuda a usarla con los tres modos: Architect, Builder y Craftsman.",
      },
      {
        title: "Tecnologías",
        description:
          "Cualquier modelo, editor y agente es bienvenido. AIDD te permite sacarle el máximo partido actual y adaptarte a los cambios.",
      },
      {
        title: "Calidad",
        description: "Generar código rápidamente no vale de nada si no es de calidad y mantenible. Se necesitan pruebas y documentación.",
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
        title: "Frontend",
        description:
          "Todo sobre Angular: Migraciones, gestión de estado, micro frontends, testing...",
      },
      {
        title: "Backend",
        description:
          "Express, NestJS, APIs, rendimiento, seguridad. Arquitecturas limpias, CQRS...",
      },
      {
        title: "Testing",
        description:
          "Automatización de pruebas de integración y end-to-end de aplicaciones web y APIs con Jest, Vitest, Playwright, Cypress...",
      },
      {
        title: "Arquitecturas",
        description:
          "Desarrollo corporativo basado en microservicios, CQRS, DDD, Hexagonal, etc. en CSharp, Java y TypeScript.",
      }
    ],
  },
  us: {
    title: "¿Quién soy?",
    subtitle:
      "Programador profesional, formador y consultor... desde el siglo pasado.",
    cards: [],
    cta: {
      text: "Contacta conmigo en LinkedIn",
      link: "https://www.linkedin.com/in/albertobasalo/",
    },
  },
};

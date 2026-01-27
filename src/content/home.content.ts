import type { SectionProps } from "../components/Section.types";

export type Home = {
  layout: {
    title: string;
    description: string;
  };
  hero: SectionProps;
  services: SectionProps;
  technologies: SectionProps;
  bestPractices: SectionProps;
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
      text: "A.I. Code Quality",
      link: "",
    },
  },
  services: {
    title: "¿En qué te puedo ayudar?",
    subtitle:
      "La programación evoluciona como nunca; pero no es magIA, es Tecnología.",
    cards: [
      {
        title: "Consultoría",
        description:
          "Arquitectura de software, refactoring, buenas prácticas, testing con IA.",
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
      "Metodología de programación con IA para aumentar tu productividad y la calidad de tu código.",
    cards: [
      {
        title: "Human in the Loop",
        description: "El programador es el estratega, colaborador y responsable.",
      },
      {
        title: "Rules Over Tools",
        description: "Instrucciones para que los agentes se comporten como se espera.",
      },
      {
        title: "Spec Driven Development",
        description: "Requerimientos funcionales completos y detallados.",
      },
    ],
    cta: {
      text: "Más info en AI Code Academy",
      link: "https://aicode.academy",
    },
  },
  bestPractices: {
    title: "Buenas prácticas de programación",
    subtitle:
      "Puedo ayudarte o formar a tu equipo en las buenas prácticas de programación que te interesen.",
    cards: [
      {
        title: "Arquitectura",
        description:
          "Arquitecturas limpias, DDD, CQRS, Microservicios.",
      },
      {
        title: "Testing",
        description:
          "Pruebas unitarias, integración y end-to-end de aplicaciones web y APIs",
      },
      {
        title: "Refactoring",
        description:
          "Código limpio, mantenible y de calidad. Modernización de código legacy.",
      }
    ],
  },
  technologies: {
    title: "Tecnologías que utilizo",
    subtitle:
      "Puedo ayudarte o formar a tu equipo en las tecnologías que te interesen.",
    cards: [
      {
        title: "Frontend",
        description:
          "Todo sobre Angular: clásico, moderno, MFE, testing...",
      },
      {
        title: "Backend",
        description:
          "Express, NestJS, Java, C#, APIs...",
      },
      {
        title: "Testing",
        description:
          "Jest, Vitest, Playwright, Cypress...",
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

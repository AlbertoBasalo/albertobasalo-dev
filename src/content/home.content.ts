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
      "Ayudo a equipos de desarrollo a usar IA sin sacrificar arquitectura ni calidad.",
  },
  hero: {
    title: "Alberto Basalo",
    subtitle: "Consultoría y formación para crear software profesional con IA.",
    cards: [],
    cta: {
      text: "A.I. Code Quality",
      link: "",
    },
  },
  services: {
    title: "¿En qué te puedo ayudar?",
    subtitle:
      "Arquitectura, testing y calidad en desarrollos con IA.",
    cards: [
      {
        title: "Consultoría",
        description:
          "Ayudo a equipos a integrar IA en su desarrollo sin perder mantenibilidad.",
        cta: {
          text: "Quiero mejorar mi arquitectura",
          link: "/consultoria",
        },
      },
      {
        title: "Formación",
        description:
          "Formación práctica para programadores profesionales.",
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
      "Una forma de trabajar con IA para generar software mantenible, testeable y profesional.",
    cards: [
      {
        title: "Human in the Loop",
        description: "El programador sigue tomando las decisiones importantes. La IA acelera el desarrollo.",
      },
      {
        title: "Rules Over Tools",
        description: "La productividad no depende del agente, sino del contexto y las reglas que recibe.",
      },
      {
        title: "Spec Driven Development",
        description: "Especificaciones claras para alinear agentes, programadores y negocio.",
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
      "Puedo ayudarte a construir software más fácil de evolucionar, probar y mantener.",
    cards: [
      {
        title: "Arquitectura",
        description:
          "Diseño de sistemas mantenibles: desde monolitos bien estructurados hasta arquitecturas distribuidas.",
      },
      {
        title: "Testing",
        description:
          "Implanta testing útil y mantenible para reducir bugs y desplegar con confianza.",
      },
      {
        title: "Refactoring",
        description:
          "Reduce deuda técnica y moderniza aplicaciones legacy sin poner en riesgo producción.",
      }
    ],
  },
  technologies: {
    title: "Tecnologías que utilizo",
    subtitle:
      "Puedo ayudarte o formar a tu equipo en las tecnologías que te interesen.",
    cards: [
      {
        title: "AI Powered IDEs",
        description:
          "Antigravity, Cursor, IntelliJ, VSCode.",
      },
      {
        title: "AI Dev Agents",
        description:
          "ClaudeCode, Codex, Copilot, OpenCode.",
      }
    ],
  },
  us: {
    title: "¿Quién soy?",
    subtitle:
      "Programador profesional, formador y consultor combinando experiencia clásica con herramientas modernas.",
    cards: [],
    cta: {
      text: "Contacta conmigo en LinkedIn",
      link: "https://www.linkedin.com/in/albertobasalo/",
    },
  },
};

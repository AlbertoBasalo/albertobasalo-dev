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
      "Aumenta tu productividad manteniendo control y calidad.",
    cards: [
      {
        title: "Consultoría",
        description:
          "Ayudo a equipos a integrar IA en su desarrollo sin perder mantenibilidad.",
        cta: {
          text: "Quiero integrar IA en el SDLC",
          link: "/consultoria",
        },
      },
      {
        title: "Formación",
        description:
          "Formación práctica en herramientas IA para programadores profesionales.",
        cta: {
          text: "Necesito usar mejor las herramientas IA",
          link: "/formacion",
        },
      },
    ],
  },
  aidd: {
    title: "¿Qué es AI-Driven Development?",
    subtitle:
      "Una metodología para usar IA durante todo el ciclo de desarrollo sin perder control, calidad ni mantenibilidad.",
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
      text: "My agente AIDDbot te ayuda a implementar AI-Driven Development",
      link: "https://aiddbot.com/",
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
      "No importa tu framework o lenguaje, puedo ayudarte o formar a tu equipo en las tecnologías que te interesen.",
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
    title: "Alberto Basalo",
    subtitle:
      "Programador profesional, formador y consultor combinando experiencia clásica con herramientas modernas.",
    cards: [],
    cta: {
      text: "Contacta conmigo en LinkedIn",
      link: "https://www.linkedin.com/in/albertobasalo/",
    },
  },
};

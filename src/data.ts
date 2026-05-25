import { Project, Skill } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "feelbox",
    title: "Feelsbox Indonesia - Design System Platform",
    category: "dual",
    tags: ["Design System", "Laravel", "Figma", "Tailwind", "Motion"],
    description:
      "Feelsbox is a digital product focused on creating a simple and engaging user experience through modern UI/UX design and responsive web development.",
    longDescription:
      "Feelsbox is a web-based digital product designed with a user-centered approach to deliver a clean, intuitive, and visually engaging experience. The project involved translating ideas into wireframes, designing modern interfaces in Figma, and implementing responsive layouts with Laravel. The focus was on usability, visual consistency, and creating a seamless experience across devices while maintaining a strong and appealing product identity.",
    image: "/img/feelsbox.png",
    figmaUrl:
      "https://www.figma.com/design/UjnMP2Mjo1kpfNa9tA0WDv/Feelsbox?m=auto&t=b8hkdMmIk3k1aTde-6",
    githubUrl: "#",
    liveUrl: "#",
    metrics: [
      { label: "Figma to React Sync", value: "Instant" },
      { label: "Core UX Auditing Score", value: "100%" },
      { label: "Build Footprint Reduction", value: "35%" },
    ],
    deliverables: [
      "Tailwind CSS-compliant design token mapper utility",
      "45+ high-fidelity accessible component building blocks",
      "Complete developer and designer playground interactive manual",
      "Automated documentation extraction workflow",
    ],
  },
  {
    id: "vibeliners",
    title: "VibeLiners - Frontend & API Development",
    category: "engineering",
    tags: ["React", "TypeScript", "Recharts", "D3", "Responsive Desktop"],
    description:
      "VibeLiners is a modern landing page project focused on delivering a visually engaging and responsive user experience through clean UI design and interactive web development.",
    longDescription:
      "VibeLiners is a web-based landing page project designed to present a bold and modern digital experience with a strong visual identity. The project focused on creating an intuitive user flow, clean interface layouts, and responsive interactions across desktop and mobile devices. Starting from UI exploration in Figma to front-end implementation, the goal was to combine visual consistency, usability, and engaging web interactions to create a seamless and memorable user experience. The development process involved translating design concepts into React components, implementing interactive data visualizations with Recharts and D3, and optimizing performance for smooth user interactions.",
    image: "/img/vibeliners.png",
    githubUrl: "https://github.com/rickyrohaendi12/VibeLiners",
    liveUrl: "https://vibe-liners.vercel.app/",
    metrics: [
      { label: "Data Render latency", value: "<12ms" },
      { label: "Responsive UX Coverage", value: "100%" },
      { label: "Client Lighthouse Score", value: "98" },
    ],
    deliverables: [
      "Full-page canvas data rendering systems utilizing Recharts",
      "Responsive workspace skeleton containing custom grid layout controls",
      "Extensive dashboard widget customization panel",
      "Keyboard navigating shortcut suite for analytical actions",
    ],
  },
  {
    id: "tour-and-travel",
    title: "Tour & Travel - Responsive Landing Page",
    category: "ui-ux",
    tags: [
      "UI/UX Design",
      "Figma Spec",
      "Motion",
      "Canvas Effects",
      "WebGL Ambient",
    ],
    description:
      "A responsive tourism landing page designed to simplify destination discovery and booking through a clean interface and user-friendly experience.",
    longDescription:
      "A web-based tourism landing page created to provide a seamless experience for users exploring destinations and planning trips. The design focused on intuitive navigation, destination discovery, and a simple booking flow supported by a clean visual layout and responsive interface. From UI design in Figma to front-end development, the project emphasized usability, visual consistency, and creating an engaging digital experience across desktop and mobile devices.",
    image: "/img/t&t.png",
    figmaUrl:
      "https://www.figma.com/design/6x6Kk3D1teyUEB7mjTdHqF/Tour---Travel?node-id=0-1&t=FWAWg6dkPx3XwopZ-1",
    liveUrl: "https://travel-website-navy-nu.vercel.app/",
    metrics: [
      { label: "UX Micro-interactions", value: "Fluid 60fps" },
      { label: "Color Sync Latency", value: "Instant" },
      { label: "User Emotional Uplift", value: "92%" },
    ],
    deliverables: [
      "Interactive Figma design blueprints with rigorous user journey maps",
      "Responsive design with tactile slider controls for touch screens",
      "Real-time image palette extraction utility (Canvas & JavaScript)",
      "Smooth micro-animations for song change, volume scroll, and track skipping",
    ],
  },
  {
    id: "e-commerce",
    title: "Cortex Note - Visual Brainstorming Tool",
    category: "dual",
    tags: ["React", "Cytoscape.js", "Markdown Engine", "Design Token System"],
    description:
      "A modern e-commerce website designed to deliver a smooth shopping experience through intuitive navigation, promotional highlights, and responsive product browsing.",
    longDescription:
      "A web-based e-commerce platform designed to provide users with a seamless and engaging online shopping experience. The project focused on building intuitive product navigation, promotional sections such as flash sales and featured banners, and a clean product catalog layout to improve browsing and purchasing flow. From UI design to front-end implementation, the website was developed with a user-centered approach, emphasizing visual consistency, responsiveness, and an efficient shopping experience across devices.",
    image: "/img/saas.png",
    githubUrl: "https://github.com/kooo-design/ecommerce",
    figmaUrl:
      "https://www.figma.com/design/flXISvXP21wNiA4wVDA24p/ecom?m=auto&t=b8hkdMmIk3k1aTde-6",
    liveUrl: "https://ecommerce-pearl-nu.vercel.app/",
    metrics: [
      { label: "Rendering FPS (500 nodes)", value: "60fps" },
      { label: "Text Parsing Time", value: "3ms" },
      { label: "UX Learnability Index", value: "4.8/5" },
    ],
    deliverables: [
      "Interactive force-directed graph panel featuring custom SVG styling",
      "Optimized AST parser connecting links and backlinks on the fly",
      "Custom typographic systems matching screen and technical needs",
      "Multi-format note exporter (MD, JSON, PDF)",
    ],
  },
];

export const SKILLS: Skill[] = [
  // DESIGN
  {
    id: "figma",
    name: "Figma & Design Systems",
    category: "design",
    level: 95,
    icon: "Layers",
    description:
      "Component architecture, auto-layout 5.0, variables, robust interactive prototyping, and developer handoff grids.",
    details:
      "I construct design structures that look excellent and export directly to CSS variables, utilizing modern Figma properties such as nested components, property mapping, and logical state tracking.",
  },
  {
    id: "visual-design",
    name: "Interface & Visual Craft",
    category: "design",
    level: 92,
    icon: "Palette",
    description:
      "Typography hierarchy, spacing systems, layouts, fluid scales, and color theory optimized for accessibility.",
    details:
      "My designs default to pristine high-contrast light or elegant dark spaces that guide reading flow and feature strong contrast ratios compliant with WCAG AAA recommendations.",
  },
  {
    id: "micro-interactions",
    name: "Motion & Micro-interactions",
    category: "design",
    level: 90,
    icon: "Sparkles",
    description:
      "Creating motion choreographies, layout transition curves, tactile feed-backs, and responsive animation feel.",
    details:
      "I specify visual transitions in milliseconds and cubic-bezier curves, bridging the designer-developer transition using custom-configured physics engines and high-fps Web Animation APIs.",
  },
  {
    id: "user-research",
    name: "User Experience & Strategy",
    category: "design",
    level: 90,
    icon: "Eye",
    description:
      "User personas, heuristic checks, quantitative feedback gathering, detailed user flows, and interactive mockups.",
    details:
      "I leverage behavioral statistics, qualitative interviews, and screen-eye mapping analysis to formulate structural adjustments, avoiding speculative layout modifications.",
  },

  // ENGINEERING
  {
    id: "react-next",
    name: "React & Ecosystem",
    category: "engineering",
    level: 94,
    icon: "Cpu",
    description:
      "Functional hooks, advanced memoization rules, context isolation, routing models, and modular architecture.",
    details:
      "I write clean modular React trees, using advanced patterns like component compound states and isolated context stores to prevent unexpected broad application re-renders.",
  },
  {
    id: "typescript",
    name: "TypeScript & JavaScript Programming",
    category: "engineering",
    level: 90,
    icon: "Code",
    description:
      "Strict type validation, abstract interfaces, custom generics, enums, discriminated unions, and reliable typing.",
    details:
      "My codebases operate under strict compiler flags, utilizing clear generic utilities and structural typing definitions to completely eliminate runtime syntax crashes.",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS Mastery",
    category: "engineering",
    level: 85,
    icon: "Wind",
    description:
      "Utility frameworks, advanced layout structures, configuration layers, responsive presets, and style tokens.",
    details:
      "I craft responsive web structures using container configurations, responsive layout prefixes, and clean CSS variables mapping, avoiding unmaintainable custom inline rules.",
  },
  {
    id: "motion-eng",
    name: "Motion & Canvas Web Dev",
    category: "engineering",
    level: 88,
    icon: "Zap",
    description:
      "Complex layout changes, hardware-accelerated animations, pixel manipulations, and coordinate mathematics.",
    details:
      "Using framer-motion (Motion) and native HTML Canvas APIs, I implement web animations that bypass main-thread bottlenecks and translate layouts seamlessly across viewports.",
  },
];

import { Project, Skill } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "feelbox",
    title: "Feelsbox Indonesia - Design System Platform",
    category: "engineering",
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
      {
        label:
          "Clean and intuitive design focused on seamless user interactions",
        value: "User-Centered Interface",
      },
      { label: "User Experience Satisfaction", value: "95%" },
      { label: "Visual Consistency Score", value: "98%" },
    ],
    deliverables: [
      "User-centered interface with clean and engaging visual design",
      "High-fidelity UI design focused on seamless user experience",
      "Complete interactive prototype and front-end implementation",
      "Automated documentation extraction workflow",
    ],
  },
  {
    id: "vacationdotcom",
    title: "VacationDotCom - Fullstack Development",
    category: "fullstack",
    tags: [
      "React",
      "TypeScript",
      "Web App",
      "Laravel",
      "Tailwind",
      "Motion",
      "Maidtrans",
      "MySQL",
    ],
    description:
      "A fullstack web application for booking flight and train tickets with a seamless user experience, featuring authentication, ticket booking, payment processing, and digital ticket management.",
    longDescription:
      "VacationDotCom is a fullstack ticket booking platform designed to simplify the process of purchasing flight and train tickets. The application was built using React and TypeScript for the frontend, with Laravel and MySQL powering the backend system. It provides a complete user journey, including account registration, login authentication, personalized dashboards, ticket search, booking management, payment processing, PDF ticket generation, and booking history tracking. The project focused on creating a responsive interface, efficient data management, and a seamless booking experience across devices.",
    image: "/img/vacationdotcom.png",
    githubUrls: [
      {
        label: "Frontend Repository",
        url: "https://github.com/rickyrohaendi12/vacationdotcom-fe",
      },
      {
        label: "Backend Repository",
        url: "https://github.com/rickyrohaendi12/vacationdotcom-be",
      },
    ],
    liveUrl: "https://vacationdotcom.vercel.app/",
    metrics: [
      { label: "Fullstack Architecture", value: "React + Laravel" },
      { label: "Database Management", value: "MySQL Integration" },
      { label: "Booking Experience", value: "End-to-End Workflow" },
    ],
    deliverables: [
      "Developed a responsive ticket booking web application using React, TypeScript, and Tailwind CSS",
      "Built RESTful backend services using Laravel with MySQL database integration for managing users, tickets, and transactions",
      "Implemented authentication system including register, login, and personalized user dashboard",
      "Created ticket booking workflow with payment processing and booking confirmation",
      "Implemented PDF ticket generation and download functionality for digital travel tickets",
      "Developed booking history features to allow users to view and manage their purchased tickets",
    ],
  },
  {
    id: "vibeliners",
    title: "VibeLiners - Frontend & API Development",
    category: "engineering",
    tags: ["React", "TypeScript", "Music", "Responsive Desktop"],
    description:
      "VibeLiners is a modern landing page project focused on delivering a visually engaging and responsive user experience through clean UI design and interactive web development.",
    longDescription:
      "VibeLiners is a web-based landing page project designed to present a bold and modern digital experience with a strong visual identity. The project focused on creating an intuitive user flow, clean interface layouts, and responsive interactions across desktop and mobile devices. Starting from UI exploration in Figma to front-end implementation, the goal was to combine visual consistency, usability, and engaging web interactions to create a seamless and memorable user experience. The development process involved translating design concepts into React components, implementing interactive data visualizations with Recharts and D3, and optimizing performance for smooth user interactions.",
    image: "/img/vibeliners.png",
    githubUrl: "https://github.com/rickyrohaendi12/VibeLiners",
    liveUrl: "https://vibe-liners.vercel.app/",
    metrics: [
      { label: "Responsive UX Coverage", value: "100%" },
      { label: "Visual Consistency Score", value: "95%" },
      { label: "Lighthouse Performance Score", value: "96" },
    ],
    deliverables: [
      "Responsive layouts optimized for desktop and mobile listening experiences",
      "Interactive music player interface with AI-powered intuitive playback controls",
      "Consistent visual design with immersive user interaction",
      "Playlist browsing and music discovery experience",
    ],
  },
  {
    id: "tour-and-travel",
    title: "Tour & Travel - Responsive Landing Page",
    category: "ui-ux",
    tags: ["UI/UX Design", "Figma Spec", "Motion", "Canvas Effects"],
    description:
      "A responsive tourism landing page designed to simplify destination discovery and booking through a clean interface and user-friendly experience.",
    longDescription:
      "A web-based tourism landing page created to provide a seamless experience for users exploring destinations and planning trips. The design focused on intuitive navigation, destination discovery, and a simple booking flow supported by a clean visual layout and responsive interface. From UI design in Figma to front-end development, the project emphasized usability, visual consistency, and creating an engaging digital experience across desktop and mobile devices.",
    image: "/img/t&t.png",
    figmaUrl:
      "https://www.figma.com/design/6x6Kk3D1teyUEB7mjTdHqF/Tour---Travel?node-id=0-1&t=FWAWg6dkPx3XwopZ-1",
    liveUrl: "https://travel-website-navy-nu.vercel.app/",
    metrics: [
      { label: "Cross-Device Compatibility", value: "Adaptive" },
      { label: "Destination Browsing Experience", value: "Seamless" },
      { label: "Visual Engagement Retention", value: "90%" },
    ],
    deliverables: [
      "Interactive Figma wireframes with complete travel booking user flow",
      "Modern destination showcase with immersive hero sections and CTA components",
      "Travel-themed design system focused on exploration, comfort, and user engagement",
      "SEO-friendly structure with performance-focused frontend implementation",
    ],
  },
  {
    id: "e-commerce",
    title: "E-Commerce Website - Front-End Development & UI/UX Design",
    category: "fullstack",
    tags: ["React", "Node.js", "JavaScript", "E-Commerce"],
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
      { label: "Responsive UI Consistency", value: "90%" },
      { label: "User Interaction Efficiency", value: "90%" },
      { label: "Cart & Product Synchronization", value: "Real-Time" },
    ],
    deliverables: [
      "Responsive product catalog optimized for desktop and mobile shopping",
      "Smooth micro-interactions for product browsing and checkout experience",
      "User-centered design system focused on accessibility and conversion flow",
      "Reusable frontend components for scalable development and maintenance",
    ],
  },
  {
    id: "fortex-mobile",
    title: "Fortex Mobile App - UI/UX Design & Front-End Development",
    category: "engineering",
    tags: ["React Native", "TypeScript", "Mobile App"],
    description:
      "A modern mobile application designed to provide a seamless and engaging user experience with intuitive navigation, personalized content, and responsive interactions.",
    longDescription:
      "A mobile application designed to provide users with a seamless and engaging experience. The project focused on building intuitive navigation, personalized content delivery, and responsive interactions to improve user engagement and satisfaction. From UI design to front-end implementation, the app was developed with a user-centered approach, emphasizing visual consistency, responsiveness, and an efficient user experience across devices.",
    image: "/img/fortex.png",
    githubUrl: "https://github.com/rickyrohaendi12/react-native-firebase-suite",
    liveUrl: "#",
    metrics: [
      { label: "Responsive UI Consistency", value: "90%" },
      { label: "User Interaction Efficiency", value: "90%" },
      { label: "Firebase Integration", value: "Real-Time" },
    ],
    deliverables: [
      "Firebase-powered mobile app with real-time data synchronization and user authentication",
      "CRUD operations for dynamic content management and user interactions",
      "Register account, login/logout, and personalized user experience features",
    ],
  },
  {
    id: "wc-2026",
    title: "World Cup 2026 Website - UI/UX Design & Front-End Development",
    category: "fullstack",
    tags: ["React", "TypeScript", "Web App"],
    description:
      "A modern web application designed to provide a seamless and engaging user experience with intuitive navigation, personalized content, and responsive interactions.",
    longDescription:
      "A web application designed to provide users with a seamless and engaging experience. The project focused on building intuitive navigation, personalized content delivery, and responsive interactions to improve user engagement and satisfaction. From UI design to front-end implementation, the app was developed with a user-centered approach, emphasizing visual consistency, responsiveness, and an efficient user experience across devices.",
    image: "/img/wc.png",
    githubUrl: "https://github.com/rickyrohaendi12/world-cup-2026",
    liveUrl: "https://world-cup-2026-coral-seven.vercel.app/",
    metrics: [
      { label: "Responsive UI Consistency", value: "90%" },
      { label: "User Interaction Efficiency", value: "90%" },
    ],
    deliverables: [
      "Interactive live score dashboard with real-time match simulation system",
      "AI-powered tactical analysis panel for match prediction and squad insights",
      "Responsive multi-section interface including schedules, standings, squads, and live events tracking",
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
    id: "laravel-mysql",
    name: "Laravel & MySQL",
    category: "engineering",
    level: 88,
    icon: "Database",
    description:
      "Backend architecture, RESTful APIs, database design, migrations, and efficient data models.",
    details:
      "I build reliable Laravel applications with structured MySQL databases, clean APIs, and maintainable backend logic for scalable products.",
  },
  {
    id: "motion-eng",
    name: "Tailwind CSS & Motion Web Dev",
    category: "engineering",
    level: 88,
    icon: "Zap",
    description:
      "Utility-first styling, responsive layouts, smooth animations, and polished UI transitions.",
    details:
      "I combine Tailwind CSS with motion-driven interactions to build responsive interfaces with clean structure, consistent styling, and fluid user experiences.",
  },
];

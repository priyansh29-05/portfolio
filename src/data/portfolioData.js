/**
 * Centralized Portfolio Data for Priyansh Soni
 * Verified against actual public repositories and project documentation.
 */

export const personalInfo = {
  name: "Priyansh Soni",
  title: "Freelance React & Full-Stack Developer",
  headline: "Web experiences built with clarity and purpose.",
  supportingCopy:
    "I help businesses and startups build responsive websites and practical web applications with React, thoughtful UI, and reliable API integrations.",
  location: "India • Available Worldwide (Remote)",
  availability: "Available for select freelance projects & contracts",
  availabilityStatus: "active", // active | booked
  responseGuarantee: "Typically replies within 24 hours",
  github: "https://github.com/priyansh29-05",
  linkedin: "https://www.linkedin.com/in/priyansh-soni-489617211/",
  email: "priyanshsoni2905@gmail.com",
  socialLinks: [
    { name: "GitHub", url: "https://github.com/priyansh29-05" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/priyansh-soni-489617211/" }
  ],
  stats: [
    { label: "Client-Centric", value: "100%", description: "Tailored to your business requirements" },
    { label: "Core Expertise", value: "React & MERN", description: "Modern component-driven full-stack" },
    { label: "Code Quality", value: "Production-Grade", description: "Responsive, clean & accessible" },
    { label: "Communication", value: "<24h", description: "Direct developer access & clear updates" }
  ]
};

export const projects = [
  {
    id: "itzfizz",
    title: "ItzFizz Scroll-Driven Landing Page",
    category: "Interactive Frontend Experience",
    shortDescription:
      "A high-impact interactive landing page featuring 3D scroll-driven geometry animation, responsive capability cards, and performance-optimized rendering.",
    image: "/projects/itzfizz.png",
    demoUrl: "https://priyansh29-05.github.io/itzfizz-scroll-animation/",
    repoUrl: "https://github.com/priyansh29-05/itzfizz-scroll-animation",
    hasLiveDemo: true,
    tags: ["React 18", "Three.js", "React Three Fiber", "@react-three/drei", "Vite", "CSS3"],
    purpose:
      "Engineered to showcase modern web graphics and scroll interaction by binding canvas camera transforms directly to user viewport progression while retaining smooth frame rates.",
    highlights: [
      "Dynamic 3D metallic torus knot geometry rendered via WebGL & R3F",
      "Scroll-responsive camera angles and depth-of-field movement",
      "Modular capability grid with crisp typography and clean card hover states",
      "Lightweight bundle architecture with optimized asset loading"
    ],
    roleDetails: "Solo Frontend Architecture & 3D WebGL Animation Implementation.",
    clientTakeaway: "Demonstrates capability to build visually captivating, brand-defining landing pages that captivate visitors without sluggish load times."
  },
  {
    id: "arise",
    title: "ARISE Career Recommendation System",
    category: "AI Web Platform & Full-Stack",
    shortDescription:
      "An intelligent career guidance platform that analyzes student skills, interests, and background to deliver personalized career recommendations, roadmaps, and curated learning resources.",
    image: "/projects/arise.png",
    demoUrl: null, // As specified: No live demo button unless deployed URL verified
    repoUrl: "https://github.com/priyansh29-05/ARISE",
    hasLiveDemo: false,
    tags: ["React 18", "Vite 5", "Node.js", "Express", "MongoDB", "Google Gemini AI", "JWT", "Vanilla CSS"],
    purpose:
      "Empowers students and early-career developers to discover matching tech careers through AI skill-gap assessment, interactive visual roadmaps, and free curated course recommendations.",
    highlights: [
      "AI-driven match scoring powered by Google Gemini (gemini-3-flash-preview)",
      "Interactive step-by-step visual learning roadmap for each recommended role",
      "Resilient database architecture featuring auto fallback to in-memory DB if local MongoDB is offline",
      "AI fallback system that ensures UI never crashes if external API limits are reached",
      "Secure authentication flow with JWT tokens and bcrypt password hashing"
    ],
    isTeamProject: true,
    roleDetails: "Collaborative Team Project — Led React frontend architecture, responsive dashboard components, Gemini AI prompt integration & client-side state handling, with fallback mock data integration.",
    clientTakeaway: "Demonstrates experience integrating generative AI APIs, designing complex dashboards, and building resilient full-stack systems with reliable fallbacks."
  },
  {
    id: "mini-erp",
    title: "Mini ERP & CRM Operations Portal",
    category: "Full-Stack Business Operations",
    shortDescription:
      "A complete enterprise operations portal designed for small-to-medium businesses to manage customer relationships, product inventories, and sales delivery challans with role-based security.",
    image: "/projects/mini-erp.png",
    demoUrl: "https://mini-erp-crm-portal-ui.netlify.app/login",
    repoUrl: "https://github.com/priyansh29-05/mini-erp-crm-portal",
    hasLiveDemo: true,
    demoAuthNote: "Live demo opens on an authentication-protected portal. Demo test accounts provided in the repository (e.g., admin@test.com / Admin@123).",
    tags: ["React", "Vite", "Node.js", "Express", "Prisma ORM", "PostgreSQL", "JWT Auth", "REST API"],
    purpose:
      "Solves operational fragmentation for SMBs by unifying customer databases, real-time product catalogs, and transactional challan workflows within an authenticated management interface.",
    highlights: [
      "Role-Based Access Control (Admin, Sales, Warehouse, Accounts) with scoped privileges",
      "Comprehensive customer registry with search, status filtering, and pagination",
      "Product catalog tracking inventory and automated challan generation",
      "Relational database modeling with Prisma ORM deployed against PostgreSQL (Supabase)",
      "Tested with a complete Postman API collection featuring token auto-persistence"
    ],
    roleDetails: "Full-Stack Developer — Architected frontend interfaces, REST API endpoints, Prisma database schema, and role-based route guards.",
    clientTakeaway: "Demonstrates practical full-stack engineering for internal business tools, complex data tables, and secure multi-user workflows."
  }
];

export const services = [
  {
    number: "01",
    title: "Responsive Websites & Web Apps",
    subtitle: "Fluid, mobile-first interfaces tailored for speed and clarity",
    description:
      "I craft bespoke websites and web applications that adapt smoothly to every screen size—from smartphones and tablets to ultra-wide displays—with crisp typography and fast load speeds.",
    deliverables: [
      "Mobile-first, fully responsive layouts",
      "Clean semantic HTML & modern CSS",
      "Cross-browser testing & verification",
      "Fast page loads & Core Web Vitals focus"
    ],
    bestFor: "Startups, small businesses, and agencies looking for a high-converting web presence."
  },
  {
    number: "02",
    title: "React Frontend Engineering",
    subtitle: "Modular component architecture and interactive UI systems",
    description:
      "Transforming designs and wireframes into clean, maintainable React components with disciplined state management, reusable design tokens, and smooth micro-interactions.",
    deliverables: [
      "Custom React component systems",
      "State management & custom hook design",
      "Interactive forms with real-time validation",
      "Polished UI animations and transitions"
    ],
    bestFor: "Teams needing a reliable React engineer to build new features or revamp existing frontends."
  },
  {
    number: "03",
    title: "REST API & Backend Integration",
    subtitle: "Reliable data wiring, authentication, and third-party services",
    description:
      "Connecting client interfaces to Node.js/Express backends, databases, and third-party APIs. Handling authentication tokens, asynchronous data fetching, and graceful error boundaries.",
    deliverables: [
      "RESTful API design and consumption",
      "Secure JWT authentication flows",
      "Data validation, loading, and error states",
      "Third-party API and AI model integration"
    ],
    bestFor: "Projects that require dynamic data, user accounts, or external service connections."
  },
  {
    number: "04",
    title: "Full-Stack MVPs & Prototypes",
    subtitle: "From conceptual roadmap to functional production launch",
    description:
      "Building practical full-stack MVPs that enable founders to validate ideas quickly, onboard early users, and present working software to stakeholders without technical debt.",
    deliverables: [
      "End-to-end database schema design",
      "Backend business logic and API routes",
      "Responsive React client interface",
      "Deployment setup on Netlify, Vercel, or Render"
    ],
    bestFor: "Founders and startups needing a rapid, functional prototype built with solid foundations."
  }
];

export const processSteps = [
  {
    step: "01",
    title: "Discovery & Technical Scope",
    description:
      "We discuss your business objectives, target audience, and key technical requirements. I provide clear recommendations on tech stack, architecture, and milestones."
  },
  {
    step: "02",
    title: "Design & Prototyping",
    description:
      "Reviewing visual hierarchy, responsive layout wireframes, and design tokens to ensure alignment on user experience before writing extensive code."
  },
  {
    step: "03",
    title: "Clean Production Engineering",
    description:
      "Writing modular, typed, and well-structured React and backend code. I provide transparent milestone updates and review links throughout development."
  },
  {
    step: "04",
    title: "Testing, Polish & Deployment",
    description:
      "Rigorous cross-browser QA, mobile responsiveness verification, performance optimization, and smooth deployment to your chosen hosting platform."
  }
];

export const technicalSkills = [
  {
    category: "Frontend Development",
    skills: ["React 18", "JavaScript (ES6+)", "Vite", "HTML5", "CSS3", "Three.js / R3F", "Responsive UI"]
  },
  {
    category: "Backend & APIs",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Postman", "API Integration"]
  },
  {
    category: "Databases & ORM",
    skills: ["MongoDB", "Mongoose", "PostgreSQL", "Prisma ORM"]
  },
  {
    category: "Workflow & Tools",
    skills: ["Git", "GitHub", "Vercel", "Netlify", "Render", "VS Code"]
  }
];

export const clientFaqs = [
  {
    question: "What is your typical project turnaround time?",
    answer:
      "A focused landing page or responsive website typically takes 1–2 weeks. A multi-page React application or full-stack MVP usually ranges from 3–5 weeks depending on scope."
  },
  {
    question: "Do you work with international clients across time zones?",
    answer:
      "Yes. I collaborate regularly with clients worldwide, using structured async communication (Slack, Email, GitHub) paired with scheduled video or audio syncs when needed."
  },
  {
    question: "How do you handle code handoff and ownership?",
    answer:
      "You retain 100% ownership of all code, assets, and repositories. I provide a clean Git repository, setup documentation, and deployment guides so you or your team can manage it effortlessly."
  },
  {
    question: "Can we start with a small milestone or trial task?",
    answer:
      "Absolutely. Starting with a focused first milestone (such as a single page or component architecture) is a great way to verify communication and code quality before expanding scope."
  }
];

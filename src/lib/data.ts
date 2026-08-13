/* ============================================================
   PORTFOLIO CONTENT — edit everything here in one place.
   Skills, projects, automation workflows, experience, contact.
   ============================================================ */

export const profile = {
  name: "Ahmad",
  firstName: "Ahmad",
  role: "Full-Stack Developer",
  subRole: "& Automation Engineer",
  tagline:
    "I architect and ship products across the entire stack — pixel-perfect React interfaces, scalable Laravel & MERN backends, Flutter and native Android apps, and n8n automation pipelines that run your business on autopilot.",
  email: "ahmadmustafa.dev@gmail.com",
  location: "Pakistan — Remote worldwide",
  availability: "Available for freelance & full-time",
  resumeUrl: "#contact", // swap with /resume.pdf when ready
  socials: {
    github: "https://github.com/ahmadmustafa-dev/",
    linkedin: "https://www.linkedin.com/in/ahmadmustafa-dev/",
    // twitter: "https://x.com/yourusername", // add back when the handle is ready
  },
};

export const stats = [
  { value: 4, suffix: "+", label: "Years building" },
  { value: 30, suffix: "+", label: "Projects shipped" },
  { value: 40, suffix: "+", label: "n8n workflows" },
  { value: 10, suffix: "+", label: "Tech stacks" },
];

export type SkillCluster = {
  title: string;
  blurb: string;
  items: string[];
};

export const skillClusters: SkillCluster[] = [
  {
    title: "Frontend",
    blurb: "Interfaces that feel effortless — responsive, accessible, and fast.",
    items: [
      "HTML5 / CSS3",
      "JavaScript (ES2025)",
      "React 19",
      "Next.js 15/16 (App Router)",
      "Tailwind CSS",
      "Responsive & A11y",
    ],
  },
  {
    title: "Backend",
    blurb: "APIs and systems built to scale, secured and documented.",
    items: [
      "Laravel (PHP 8.3)",
      "Node.js — Express",
      "MERN Stack",
      "MySQL / PostgreSQL / SQL",
      "REST API Design",
      "Auth & Middleware",
    ],
  },
  {
    title: "Mobile",
    blurb: "Native-quality apps, single codebase, shipped to both stores.",
    items: [
      "Flutter / Dart",
      "Android (Java)",
      "Firebase Integration",
      "REST Clients",
      "State Management",
      "Play Store Publishing",
    ],
  },
  {
    title: "Automation",
    blurb: "Workflows that replace hours of manual work with deterministic pipelines.",
    items: [
      "n8n (self-hosted & cloud)",
      "Vector Databases & AI Agents",
      "Webhooks (Stripe, Slack, Gmail)",
      "API Integrations",
      "Scheduling & Triggers",
      "Error Handling & Logging",
    ],
  },
];

/* Project detail-page fields. Add `details` to a project and its card
   automatically links to /project/{id}. Screenshots live in
   public/images/Projects_Imgs/<folder>/ — reference them with
   "/images/Projects_Imgs/<folder>/<file>.webp" (URL-safe names work best). */
export type ProjectDetails = {
  category: string;
  overview: {
    problemSolved: string;
    targetAudience: string;
    whyBuilt: string;
  };
  role: string[];
  features: string[];
  screenshots: string[];
  demoUrl?: string;
};

export type Project = {
  id: string;
  year: string;
  title: string;
  description: string;
  summary?: string;
  category?: string;
  stack: string[];
  accent: string;
  n8n?: boolean;
  link?: string;
  image?: string;
  details?: ProjectDetails;
};

export const projects: Project[] = [
  {
    id: "043",
    year: "2025–26",
    title: "Ko Ramen — Pakistan's First Korean Convenience Store & Noodle Lounge",
    summary:
      "A dynamic, modern brand and web platform for Pakistan's premier Korean convenience store chain, featuring dynamic noodle cataloging, self-cook lounge previews, and delivery integrations.",
    description:
      "Designed and built a sleek, aesthetic web experience for Ko Ramen, Pakistan's first authentic Korean convenience store operating in DHA Phase 6, Lahore and Bahria Town Phase 4, Islamabad. The platform brings the iconic Korean store culture to life digitally, showcasing their signature 50+ variety noodle wall, interactive self-cook lounge experience, curated K-food menu items, and direct online ordering pathways via WhatsApp and Foodpanda.",
    stack: [
      "React.js",
      "Tailwind CSS",
      "JavaScript (ES6+)",
      "HTML5",
      "Vercel",
      "Git",
      "Vite",
      "WhatsApp API Integration",
    ],
    accent: "Neon, Food & Retail",
    image: "/images/Projects_Imgs/Ko-Ramen/1.webp",
    link: "/project/043",
    details: {
      category: "Web Development",
      overview: {
        problemSolved:
          "Introduced a new retail and culinary concept to the local market by translating a physical interactive self-cook store setup into an engaging online platform. The site solves menu discovery issues by organizing dozens of imported noodle varieties (Buldak, Samyang, Shin) with live pricing and flavors, while streamlining delivery and location discovery for multi-city branches.",
        targetAudience:
          "K-pop/K-drama fans, Asian food lovers, late-night snackers, and adventurous foodies in Lahore and Islamabad looking for authentic imported Korean snacks and an interactive ramen-cooking dining experience.",
        whyBuilt:
          "To build a high-impact digital presence that reflects the modern, minimalist retail aesthetic of Ko Ramen and drives foot traffic to physical stores while scaling online delivery orders.",
      },
      role: [
        "Full-Stack Web Developer",
        "UI/UX Designer",
        "Frontend Developer",
        "Performance Optimization Engineer",
      ],
      features: [
        "Signature Noodle Wall Catalog",
        "Interactive Menu & Live Pricing Display",
        "Self-Cook Noodle Lounge Preview",
        "Multi-City Location Details (Lahore & Islamabad)",
        "One-Click WhatsApp Ordering",
        "Foodpanda Delivery Integration",
        "Interactive Cart Simulator",
        "Mobile-First Responsive Layout",
        "SEO Optimized Metadata",
      ],
      screenshots: [
        "/images/Projects_Imgs/Ko-Ramen/1.webp",
        "/images/Projects_Imgs/Ko-Ramen/2.webp",
        "/images/Projects_Imgs/Ko-Ramen/3.webp",
      ],
      demoUrl: "https://www.ko-ramen.com/",
    },
  },
  {
    id: "042",
    year: "2024–25",
    title: "Operational Analytics",
    description:
      "Real-time operational dashboard — Next.js + Laravel, websockets, and role-based auth. React-Query for cache, MySQL, charting to the minute.",
    stack: ["Next.js", "Laravel", "MySQL", "WebSockets"],
    accent: "Neon, Full-stack SaaS",
  },
  {
    id: "041",
    year: "2024",
    title: "AI Automation",
    description:
      "AI workflow suite in n8n — incoming emails, invoices and Slack pings trigger AI agents that extract data and push it to MySQL.",
    stack: ["n8n", "OpenAI", "MySQL", "Slack API"],
    accent: "Neon, AI Workflows",
    n8n: true,
  },
  {
    id: "040",
    year: "2023–24",
    title: "Skincare E-commerce",
    description:
      "SEO-first store theme + custom WordPress plugin for dynamic pricing and inventory sync. LCP under 2s.",
    stack: ["PHP", "WordPress", "JavaScript", "WooCommerce"],
    accent: "Champagne, E-commerce",
  },
  {
    id: "039",
    year: "2023",
    title: "Fitness App — Flutter",
    description:
      "Cross-platform iOS/Android fitness tracker — progress rings, sync, offline-first.",
    stack: ["Flutter", "Dart", "Firebase"],
    accent: "Neon, Mobile",
  },
  {
    id: "038",
    year: "2022–23",
    title: "Inventory Suite — MERN",
    description:
      "Barcode-stocked inventory engine — Node.js, Express, MongoDB. REST API consumed by Flutter clients.",
    stack: ["MongoDB", "Express", "React", "Node"],
    accent: "Neon, MERN",
  },
  {
    id: "037",
    year: "2021",
    title: "Restaurant Apps",
    description:
      "Menu app + ordering dashboard — Java Android with Firebase Auth, push notifications, order states.",
    stack: ["Java", "Android", "Firebase"],
    accent: "Neon, Android",
  },
  {
    id: "044",
    year: "2025",
    title: "Daebak Korean BBQ — Modern Dining & Digital Brand Experience",
    summary:
      "A modern, high-performance web platform for Lahore's premier Korean BBQ restaurant, featuring interactive menus, brand storytelling, and seamless WhatsApp/Foodpanda integrations.",
    description:
      "Designed and built a sleek, luxury digital experience for Daebak Korean BBQ, located in Defence Raya, DHA Phase 6, Lahore. The platform captures the energetic, high-tech Seoul dining ambiance while offering prospective guests an effortless way to explore the menu, check reviews, find location details, and place direct orders or reservations. The site was engineered with a mobile-first approach to ensure fast load times, smooth scrolling, and high conversion rates.",
    stack: [
      "React.js",
      "Tailwind CSS",
      "JavaScript (ES6+)",
      "HTML5",
      "Vercel",
      "Git",
      "Hostinger",
      "Webpack/Vite",
      "WhatsApp API Integration",
    ],
    accent: "Neon, Luxury Dining",
    image: "/images/Projects_Imgs/Daebak-korean-bbq/1.webp",
    link: "/project/044",
    details: {
      category: "Web Development",
      overview: {
        problemSolved:
          "Traditional restaurant pages often struggle with slow image loading, complex PDF menu downloads, and disjointed contact flows. This project solves those friction points by delivering a lightning-fast, visually rich website with dynamic menu categories, integrated social proof, and one-click actions for WhatsApp inquiries and Foodpanda delivery.",
        targetAudience:
          "Food enthusiasts, luxury diners, and the DHA Phase 6 / Defence Raya crowd in Lahore seeking authentic Korean BBQ, interactive DIY table-side grilling, and premium dining experiences.",
        whyBuilt:
          "To elevate Daebak Korean BBQ’s online presence to match its high-end physical dining experience, bridging the gap between social media discovery and real-world table bookings and orders.",
      },
      role: [
        "Full-Stack Web Developer",
        "UI/UX Designer",
        "Frontend Developer",
        "Performance Optimization Engineer",
      ],
      features: [
        "Interactive Menu Categories",
        "One-Click WhatsApp Ordering & Reservations",
        "Foodpanda Delivery Integration",
        "Ambiance & Dining Visual Gallery",
        "Customer Reviews & Ratings Showcase",
        "Mobile-First Responsive Layout",
        "SEO Optimized Metadata",
        "Location & Map Portal",
      ],
      screenshots: [
        "/images/Projects_Imgs/Daebak-korean-bbq/1.webp",
        "/images/Projects_Imgs/Daebak-korean-bbq/2.webp",
        "/images/Projects_Imgs/Daebak-korean-bbq/3.webp",
      ],
      demoUrl: "https://www.daebak-korean-bbq.com/",
    },
  },
  {
    id: "9",
    year: "2024",
    title: "Project Manager Pro | Enterprise Portfolio & Gallery Agent",
    summary:
      "A powerful WordPress portfolio plugin for agencies, featuring custom project metadata, high-performance media galleries, and AJAX-powered frontend filtering.",
    description:
      "A robust, full-featured project management and showcase plugin for WordPress. Designed for architectural firms and creative agencies, it provides a structured system for tracking professional projects across different locations and clients, featuring a high-performance image gallery with advanced WordPress Media Library integration.",
    stack: [
      "HTML5",
      "CSS3 Grid",
      "JavaScript (Vanilla/jQuery)",
      "PHP 8.2",
      "WordPress Core",
      "MySQL",
      "Shortcode API",
      "Meta Box API",
      "Media Uploader Integration",
    ],
    accent: "Neon, WordPress",
    image: "/images/Projects_Imgs/Project-Manager-Pro/1.webp",
    link: "/project/9",
    details: {
      category: "Web Development",
      overview: {
        problemSolved:
          "Provided a standardized method for agencies to document and display their project history with consistent metadata (Location, Client, Date) and rich media.",
        targetAudience:
          "Architectural firms, construction companies, and creative agencies requiring a professional project portfolio system.",
        whyBuilt:
          "To create a scalable, easily deployable project showcase engine that outperforms generic portfolio plugins in both speed and metadata flexibility.",
      },
      role: [
        "Plugin Product Owner",
        "Backend PHP Developer",
        "Media Pipeline Engineer",
        "Tailwind UI Implementation",
      ],
      features: [
        "Custom Post Type 'Project' with unlimited taxonomy and metadata support",
        "Advanced Media Gallery with drag-and-drop image reordering and captions",
        "Responsive 3-Column Admin Dashboard for efficient project oversight",
        "Dynamic Frontend Shortcode [projects_grid] with AJAX-powered filtering",
        "Location & Client Metadata tracking for better project organization",
        "High-bandwidth image processing via native WordPress media functions",
      ],
      screenshots: [
        "/images/Projects_Imgs/Project-Manager-Pro/1.webp",
        "/images/Projects_Imgs/Project-Manager-Pro/2.webp",
        "/images/Projects_Imgs/Project-Manager-Pro/3.webp",
        "/images/Projects_Imgs/Project-Manager-Pro/4.webp",
        "/images/Projects_Imgs/Project-Manager-Pro/5.webp",
        "/images/Projects_Imgs/Project-Manager-Pro/6.webp",
        "/images/Projects_Imgs/Project-Manager-Pro/7.webp",
        "/images/Projects_Imgs/Project-Manager-Pro/8.webp",
      ],
    },
  },
  {
    id: "8",
    year: "2024",
    title: "Greenshift Query Enhancer | Drag-and-Drop Content Manager",
    description:
      "An essential productivity extension for the Greenshift Page Builder ecosystem. This plugin introduces intuitive drag-and-drop post reordering within the WordPress Gutenberg editor, allowing content managers to manually curate the order of items in complex query loops without touching code or database queries.",
    stack: [
      "React (wp.element)",
      "JavaScript (ESNext)",
      "SASS",
      "PHP",
      "Gutenberg REST API",
      "WordPress Post Meta",
      "WordPress Hooks/Filters",
      "WP-Scripts",
    ],
    accent: "Neon, WordPress",
    image: "/images/Projects_Imgs/Greenshift-Query-Enhancer/1.webp",
    link: "/project/8",
    details: {
      category: "Web Development",
      overview: {
        problemSolved:
          "Fixed the lack of manual reordering capabilities in standard query loop blocks, providing a visual way to manage content priority for marketing pages.",
        targetAudience:
          "WordPress developers and digital marketers using the Greenshift ecosystem for high-end landing page design.",
        whyBuilt:
          "To fill a specific functional gap in one of the world's leading block-based page builders, focusing on enhancing user experience for non-technical editors.",
      },
      role: [
        "Gutenberg Block Developer",
        "React/WP Element Engineer",
        "Plugin Architect",
        "UX/UI Researcher",
      ],
      features: [
        "Seamless React-based Drag-and-Drop sorting within the Block Editor",
        "Dynamic AJAX data fetching for live post title & meta",
        "Native integration with Greenshift query loop parameters",
        "Lightweight PHP backend for persistent order storage",
      ],
      screenshots: [
        "/images/Projects_Imgs/Greenshift-Query-Enhancer/1.webp",
        "/images/Projects_Imgs/Greenshift-Query-Enhancer/2.webp",
      ],
      demoUrl: "https://hammad-mustafa-portfolio.vercel.app/project/8",
    },
  }
];

export type Automation = {
  id: string;
  title: string;
  steps: string[];
  output: string;
  accents: [string, string];
};

export const automations: Automation[] = [
  {
    id: "wf-01",
    title: "Stripe payments",
    steps: ["n8n", "Lookup customer", "Email receipt", "Push to Sheets"],
    output: "30s of human work removed",
    accents: ["Stripe", "Sheets"],
  },
  {
    id: "wf-02",
    title: "Slack / command",
    steps: ["n8n agents", "Query database", "Summarize", "Reply in thread"],
    output: "Self-serve internal answers",
    accents: ["Slack", "Slack"],
  },
  {
    id: "wf-03",
    title: "Scheduled 08:00 UTC",
    steps: ["Scrape sources", "LLM draft", "Review queue", "WordPress publish"],
    output: "Content pipeline on autopilot",
    accents: ["Scheduler", "WordPress"],
  },
];

export type Role = {
  period: string;
  title: string;
  org: string;
  description: string;
  tech: string[];
};

export const experience: Role[] = [
  {
    period: "2023 — Present",
    title: "Full-Stack Developer",
    org: "Freelance — Clients worldwide",
    description:
      "Delivering full products — from Next.js dashboards to n8n automation suites — end-to-end for startups and agencies.",
    tech: ["Next.js", "Laravel", "React", "Flutter", "n8n"],
  },
  {
    period: "2022 — 2023",
    title: "WordPress Plugin Developer",
    org: "Agency remote",
    description:
      "Built custom plugins, pricing engines and payment integrations; brought LCP under 2s across 5 client sites.",
    tech: ["PHP", "WordPress", "React", "MySQL"],
  },
  {
    period: "2021 — 2022",
    title: "Mobile App Developer",
    org: "Startup — Android & Flutter",
    description:
      "Designed and shipped native Android apps in Java and cross-platform apps in Flutter with Firebase backends.",
    tech: ["Java", "Flutter", "Firebase"],
  },
];

export const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#work", label: "Work" },
  { href: "/#automation", label: "Automation" },
  { href: "/#contact", label: "Contact" },
];
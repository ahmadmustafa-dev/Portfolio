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
    title: "Ko-Ramen — Restaurant Web App",
    description:
      "Full-stack restaurant platform — digital menu, table reservations, online ordering with Stripe checkout, and a live admin dashboard for menu, orders and bookings.",
    stack: ["Next.js", "Laravel", "MySQL", "Stripe"],
    accent: "Neon, Web Development",
    image: "/images/Projects_Imgs/Ko-Ramen/1.webp",
    link: "/project/043",
    details: {
      category: "Web Development",
      overview: {
        problemSolved:
          "The restaurant ran on paper menus and phone orders — high missed-call rates, lost bookings and no visibility into daily sales. This platform moves the entire operation online: customers browse, book and pay themselves, while staff get one dashboard for everything.",
        targetAudience:
          "Restaurant owners and their customers — diners who want menus, reservations and ordering without phone calls, and staff who need a simple, real-time view of orders and bookings.",
        whyBuilt:
          "It's a complete full-stack product under one roof — public Next.js frontend, Laravel API, MySQL schema design, Stripe payments and an authenticated admin panel. It demonstrates the exact end-to-end skills the portfolio promises.",
      },
      role: [
        "Full-Stack Web Developer",
        "UI/UX Designer",
        "API & Database Design",
        "Payment Integration",
        "Deployment & Performance",
      ],
      features: [
        "Digital menu with categories, dietary tags and dish photos",
        "Table reservations with date, party size and time slots",
        "Online ordering with cart, modifiers and live totals",
        "Stripe checkout — cards, one-click and saved payments",
        "Admin dashboard for menu, orders, reservations and customers",
        "Order status tracking — received, preparing, ready, served",
        "Booking & order confirmation notifications",
        "Fully responsive — mobile-first for on-the-go diners",
      ],
      screenshots: [
        "/images/Projects_Imgs/Ko-Ramen/1.webp",
        "/images/Projects_Imgs/Ko-Ramen/2.webp",
        "/images/Projects_Imgs/Ko-Ramen/3.webp",
        "/images/Projects_Imgs/Ko-Ramen/4.webp",
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
    title: "Daebak Korean BBQ — Restaurant Web App",
    description: "Full‑stack web app for a Korean BBQ restaurant — menu, reservation, online ordering and loyalty program.",
    stack: ["Next.js", "Laravel", "MySQL", "Stripe", "Tailwind CSS"],
    accent: "Neon, Food Service",
    image: "/images/Projects_Imgs/Daebak-korean-bbq/1.webp",
    link: "/project/044",
    details: {
      category: "Web Development",
      overview: {
        problemSolved: "The restaurant needed a modern online presence to showcase its menu, accept reservations and orders, and manage loyalty points.",
        targetAudience: "Diners who want to view the menu, book a table, and order takeout online; staff who need a unified dashboard.",
        whyBuilt: "Demonstrates end‑to‑end capabilities: Next.js UI, Laravel API, MySQL data, Stripe payments, and a custom admin panel."
      },
      role: [
        "Full‑Stack Web Developer",
        "UI/UX Designer",
        "API & Database Design",
        "Payment Integration",
        "Admin Dashboard"
      ],
      features: [
        "Dynamic menu with categories and dietary tags",
        "Table reservation system with time‑slot selection",
        "Online ordering with cart and modifiers",
        "Stripe checkout for secure payments",
        "Loyalty points tracking",
        "Responsive design — mobile first"
      ],
      screenshots: [
        "/images/Projects_Imgs/Daebak-korean-bbq/1.webp",
        "/images/Projects_Imgs/Daebak-korean-bbq/2.webp",
        "/images/Projects_Imgs/Daebak-korean-bbq/3.webp",
        "/images/Projects_Imgs/Daebak-korean-bbq/4.webp"
      ],
      demoUrl: "https://www.daebak-korean-bbq.com/"
    }
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
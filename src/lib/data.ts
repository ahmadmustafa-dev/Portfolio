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
  { value: 3, suffix: "+", label: "Years building" },
  { value: 20, suffix: "+", label: "Projects shipped" },
  { value: 5, suffix: "+", label: "n8n workflows" },
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
        "/images/Projects_Imgs/Ko-Ramen/4.webp",
      ],
      demoUrl: "https://www.ko-ramen.com/",
    },
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
        "/images/Projects_Imgs/Daebak-korean-bbq/4.webp",
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
      category: "WordPress Plugin Development",
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
          category: "WordPress Plugin Development",
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
      demoUrl: "https://ahmad-mustafa-portfolio.vercel.app/project/8",
    },
  },
  {
    id: "045",
    year: "2026",
    title: "Al Hara Cafeteria — Dubai",
    summary:
      "A modern restaurant website and digital ordering experience for a lively Dubai cafeteria, designed to improve menu discovery, ordering flow, and online brand presence.",
    description:
      "Al Hara Cafeteria is a fast-casual dining brand in Dubai. The project delivered a mobile-first, highly visual website with quick menu discovery, one-click order links, and an admin-friendly CMS for menu updates, helping the brand present a more premium and conversion-focused digital experience.",
    stack: ["Next.js", "React", "Tailwind CSS", "Node.js", "Vercel"],
    accent: "Warm, Hospitality",
    image: "/images/Projects_Imgs/Al-Hara-Cafeteria-Dubai/1.webp",
    link: "/project/045",
    details: {
      category: "Web Development",
      overview: {
        problemSolved:
          "Reimagined the cafeteria's online presence to reduce ordering friction, highlight menu categories, and make daily special updates effortless for staff.",
        targetAudience:
          "Local diners, office workers and tourists in Dubai looking for fast, fresh meals with clear online ordering options.",
        whyBuilt:
          "To modernize the brand, provide a fast menu browsing experience, and simplify promotional updates for the client through an easy CMS workflow.",
      },
      role: [
        "Frontend & UX Developer",
        "CMS Integration",
        "Performance Optimization",
        "Accessibility Improvements",
      ],
      features: [
        "Mobile-first menu gallery with category filters",
        "One-click WhatsApp & online order links",
        "CMS-powered daily specials and promo banners",
        "Image-optimized gallery and fast LCP performance",
      ],
      screenshots: [
        "/images/Projects_Imgs/Al-Hara-Cafeteria-Dubai/1.webp",
        "/images/Projects_Imgs/Al-Hara-Cafeteria-Dubai/2.webp",
        "/images/Projects_Imgs/Al-Hara-Cafeteria-Dubai/3.webp",
        "/images/Projects_Imgs/Al-Hara-Cafeteria-Dubai/4.webp",
        "/images/Projects_Imgs/Al-Hara-Cafeteria-Dubai/5.webp",
      ],
      demoUrl: "https://al-hara-cafeteria-restaurant-dubai.vercel.app/",
    },
  },
  {
    id: "1",
    year: "2025",
    title: "Garage ERP SaaS | Multi-Tenant Workshop & Customer Portal Platform",
    summary:
      "A multi-tenant SaaS ERP system for car repair workshops with job workflow automation, accounting integration, customer portal, and subscription billing.",
    description:
      "Garage ERP SaaS is a production-grade, multi-tenant business management system designed specifically for car repair workshops. Built with SaaS-first architecture, the platform standardizes the entire workshop lifecycle from intake and inspection to invoicing, accounting, and customer retention. The system includes dual login portals (Garage & Customer), subscription-based tenant management, feature request voting, automated reminders, and a finance-integrated job card workflow.",
    stack: [
      "Laravel",
      "PHP",
      "MySQL",
      "React",
      "Tailwind CSS",
      "Stripe",
      "REST APIs",
      "RBAC",
    ],
    accent: "SaaS, Garage & CRM",
    image: "/images/Projects_Imgs/Garage-ERP-SaaS/1.webp",
    link: "/project/1",
    details: {
      category: "Customer Relationship Management (CRM)",
      overview: {
        problemSolved:
          "Automated workshop operations and customer lifecycle management for multi-tenant repair businesses needing one unified SaaS platform for operations, billing, and service tracking.",
        targetAudience:
          "Car repair workshops, multi-location garages, and service businesses scaling operations across teams, customers, and subscriptions.",
        whyBuilt:
          "To create a SaaS platform that standardizes operations and customer experience while reducing manual admin friction across car repair businesses.",
      },
      role: [
        "Lead Full-Stack Developer",
        "SaaS Architect",
        "CRM Workflow Engineer",
        "Finance & Billing Integration",
      ],
      features: [
        "Multi-tenant garage dashboard and business admin console",
        "Customer portal with job status tracking and reminders",
        "Invoice, accounting, and subscription billing workflow",
        "Role-based access and operational permissions",
        "Feature voting and request management for tenants",
      ],
      screenshots: [
        "/images/Projects_Imgs/Garage-ERP-SaaS/1.webp",
      ],
      demoUrl: "https://car-garage-erp.vercel.app/",
    },
  },
  {
    id: "2",
    year: "2025",
    title: "Ledgrz | Enterprise Modular Business Management System",
    summary:
      "A scalable Laravel ERP system with custom-built modules for WhatsApp automation, enterprise data backups, and real-time logistics tracking.",
    description:
      "Ledgrz is a high-performance, modular ERP and business management system built on Laravel. As a lead module architect, I engineered critical infrastructure including automated Backup Management, secure WhatsApp API Integration for real-time notifications, and a sophisticated Vehicle tracking system. This project demonstrates expert-level PHP, Laravel architecture, and seamless third-party API implementation.",
    stack: [
      "Laravel",
      "PHP",
      "MySQL",
      "JavaScript",
      "WhatsApp API",
      "Bootstrap",
      "REST APIs",
      "Admin Panels",
    ],
    accent: "ERP, Logistics & Automation",
    image: "/images/Projects_Imgs/Ledgrz/1.webp",
    link: "/project/2",
    details: {
      category: "Customer Relationship Management (CRM)",
      overview: {
        problemSolved:
          "Needed a modular enterprise workspace for managing backup systems, vehicle operations, communication, and internal workflow automation without fragile manual operations.",
        targetAudience:
          "Growing enterprise teams and logistics-led businesses that depend on real-time tracking, notifications, and secure operational data flows.",
        whyBuilt:
          "To build a flexible ERP foundation that supports multiple business modules while keeping performance, security, and extensibility high.",
      },
      role: [
        "Module Architect",
        "Laravel Backend Developer",
        "WhatsApp Automation Engineer",
        "Systems Integration Lead",
      ],
      features: [
        "Custom ERP modules for operations and workflow management",
        "Automated backup scheduling and recovery management",
        "WhatsApp notification and alert system",
        "Vehicle tracking and logistics monitoring",
        "Enterprise-grade admin dashboards",
      ],
      screenshots: [
        "/images/Projects_Imgs/Ledgrz/1.webp",
      ],
    },
  },
  {
    id: "4",
    year: "2025",
    title: "TradePro | High-Performance Proprietary Trading Platform",
    summary:
      "A sophisticated FinTech solution for prop trading with multi-phase evaluation challenges, secure crypto payments, and real-time P&L analytics.",
    description:
      "TradePro is a high-performance proprietary trading platform engineered for secure evaluation flows, real-time portfolio insights, and operational scale. The system supports challenge-based account progression, payment processing, risk analytics, and account dashboards for traders seeking transparent evaluation journeys.",
    stack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Stripe",
      "JWT",
      "WebSockets",
    ],
    accent: "FinTech, Prop Trading",
    image: "/images/Projects_Imgs/TradePro/1.webp",
    link: "/project/4",
    details: {
      category: "Full-Stack Web Development",
      overview: {
        problemSolved:
          "Needed a secure, modern platform for prop trading firms to run evaluation challenges, manage payments, and maintain clear client performance visibility in one place.",
        targetAudience:
          "Prop trading firms, performance traders, and operators needing a scalable, investor-friendly trading challenge ecosystem.",
        whyBuilt:
          "To deliver a modern trading infrastructure that handles challenge progression, analytics, and secure transaction flows with speed and clarity.",
      },
      role: [
        "Full-Stack Developer",
        "Product Architect",
        "Analytics & Dashboard Engineer",
        "Payment System Integrator",
      ],
      features: [
        "Multi-phase evaluation challenge workflow",
        "Secure crypto and payment processing",
        "Real-time profit and loss analytics",
        "Trader dashboard with account visibility",
        "Transparent challenge progression and status tracking",
      ],
      screenshots: [
        "/images/Projects_Imgs/TradePro/1.webp",
        "/images/Projects_Imgs/TradePro/2.webp",
        "/images/Projects_Imgs/TradePro/3.webp",
        "/images/Projects_Imgs/TradePro/4.webp",
        "/images/Projects_Imgs/TradePro/5.webp",
        "/images/Projects_Imgs/TradePro/6.webp",
        "/images/Projects_Imgs/TradePro/7.webp",
        "/images/Projects_Imgs/TradePro/8.webp",
        "/images/Projects_Imgs/TradePro/9.webp",
      ],
      demoUrl: "https://tradeprofunded.com/", 
    },
  },
  {
    id: "6",
    year: "2024",
    title: "Soccer Stats & League Manager | Sports Administration System",
    summary:
      "An all-in-one WordPress soccer management suite featuring team analytics, automated scheduling, and a dedicated referee control portal.",
    description:
      "This project delivers a complete sports administration infrastructure for soccer clubs and leagues. It includes competitive analytics, scheduling orchestration, custom team management, and a dedicated referee portal for match-day operations. The system is designed to help admins manage league flow with clarity and efficiency.",
    stack: [
      "WordPress",
      "PHP",
      "MySQL",
      "JavaScript",
      "React",
      "Custom Post Types",
      "Gutenberg",
      "Admin UI",
    ],
    accent: "Sports Admin, WordPress",
    image: "/images/Projects_Imgs/Soccer-Stats-League-Manager/1.webp",
    link: "/project/6",
    details: {
      category: "WordPress Plugin Development",
      overview: {
        problemSolved:
          "Built a tailored competition and team management system that replaces fragmented manual scheduling and organization for soccer operations.",
        targetAudience:
          "Soccer leagues, clubs, administrators, referees, and sports managers needing a structured digital command center.",
        whyBuilt:
          "To centralize team data, schedules, and referee workflows into one admin-facing experience for better league organization.",
      },
      role: [
        "Plugin Product Developer",
        "Backend Integrations",
        "Admin Workflow Designer",
        "WordPress System Engineer",
      ],
      features: [
        "League and team management portal",
        "Automated schedule generation and data display",
        "Referee control interface for match operations",
        "Stats and performance reporting panels",
        "WordPress-native admin experience",
      ],
      screenshots: [
        "/images/Projects_Imgs/Soccer-Stats-League-Manager/1.webp",
        "/images/Projects_Imgs/Soccer-Stats-League-Manager/2.webp",
        "/images/Projects_Imgs/Soccer-Stats-League-Manager/3.webp",
        "/images/Projects_Imgs/Soccer-Stats-League-Manager/4.webp",
        "/images/Projects_Imgs/Soccer-Stats-League-Manager/5.webp",
        "/images/Projects_Imgs/Soccer-Stats-League-Manager/6.webp",
      ],
    },
  },
  {
    id: "7",
    year: "2024",
    title: "AI Dental Treatment Planner | GPT-4 Powered Clinical Assistant",
    summary:
      "An AI-driven dental clinical tool that uses GPT-4 to generate personalized treatment plans and professional PDF reports for patients.",
    description:
      "The AI Dental Treatment Planner is a clinical assistant designed to help dentists generate tailored treatment plans quickly and professionally. By combining WordPress workflow tools, structured patient input, and GPT-4-powered analysis, the product creates patient-friendly recommendations and downloadable PDF reports.",
    stack: [
      "WordPress",
      "PHP",
      "OpenAI GPT-4",
      "React",
      "JavaScript",
      "PDF Generation",
      "Custom Admin UI",
      "MySQL",
    ],
    accent: "AI, Clinical tools",
    image: "/images/Projects_Imgs/AI-Dental-Treatment-Planner/1.webp",
    link: "/project/7",
    details: {
      category: "AI-Powered WordPress Plugin Development",
      overview: {
        problemSolved:
          "Reduced dentist workload by automating treatment-plan drafting while maintaining professional clinical communication and reporting quality.",
        targetAudience:
          "Dental clinics, orthodontists, cosmetic dentists, and practice managers using WordPress and looking for AI-assisted treatment workflows.",
        whyBuilt:
          "To merge AI capabilities with the clinical process in a user-friendly way that saves time without sacrificing medical clarity.",
      },
      role: [
        "AI Product Developer",
        "WordPress Plugin Engineer",
        "Clinical Workflow Designer",
        "Frontend Integration Lead",
      ],
      features: [
        "GPT-4 powered treatment planning workflow",
        "Structured patient input and exam data capture",
        "Professional PDF report generation",
        "Practice-friendly dashboard and admin controls",
        "AI-generated treatment recommendations",
      ],
      screenshots: [
        "/images/Projects_Imgs/AI-Dental-Treatment-Planner/1.webp",
        "/images/Projects_Imgs/AI-Dental-Treatment-Planner/2.webp",
        "/images/Projects_Imgs/AI-Dental-Treatment-Planner/3.webp",
      ],
      demoUrl: "https://dentalsherpa.org/",
    },
  },
  {
    id: "10",
    year: "2024",
    title: "AI socialReviews Aggregator | Intelligent Social Proof Engine",
    summary:
      "A multi-platform review aggregator with AI-generated summaries, location-aware filtering, and high-speed caching for WordPress.",
    description:
      "The AI socialReviews Aggregator centralizes customer reviews from multiple platforms, applies AI-based summarization, and delivers location-aware product proof to businesses. It is built for speed and clarity, helping brands surface reputation and social proof in a clean, conversion-ready format.",
    stack: [
      "WordPress",
      "PHP",
      "React",
      "JavaScript",
      "OpenAI",
      "MySQL",
      "Caching",
      "APIs",
    ],
    accent: "AI Reviews, WordPress",
    image: "/images/Projects_Imgs/AI-socialReviews-Aggregator/1.webp",
    link: "/project/10",
    details: {
      category: "AI-Powered WordPress Plugin Development",
      overview: {
        problemSolved:
          "Consolidated review data from multiple channels into a digestible experience and helped businesses turn scattered social proof into actionable marketing assets.",
        targetAudience:
          "Brands, agencies, and local businesses needing easy review aggregation and social proof for sales and SEO performance.",
        whyBuilt:
          "To give businesses a single intelligent review layer that reduces manual curation and increases trust signals on-site.",
      },
      role: [
        "AI Plugin Engineer",
        "Review Architecture Developer",
        "Performance Optimization Lead",
        "WordPress Integration Specialist",
      ],
      features: [
        "Multi-source review aggregation",
        "AI summary generation for trust signals",
        "Location-aware filtering and ranking",
        "High-speed caching and performance optimization",
        "WordPress-shortcode-ready content output",
      ],
      screenshots: [
        "/images/Projects_Imgs/AI-socialReviews-Aggregator/1.webp",
        "/images/Projects_Imgs/AI-socialReviews-Aggregator/2.webp",
        "/images/Projects_Imgs/AI-socialReviews-Aggregator/3.webp",
        "/images/Projects_Imgs/AI-socialReviews-Aggregator/4.webp",
      ],
    },
  },
  {
    id: "11",
    year: "2024",
    title: "DMT Digital Agency Hub | Multi-Service Marketing Platform",
    summary:
      "An enterprise-level agency website for DMT, optimized for high-volume lead generation and global service showcasing.",
    description:
      "DMT Digital Agency Hub is a polished, conversion-focused digital marketing platform designed to showcase agencies’ service ecosystems and capture leads through a strong, well-structured web experience. The build focuses on performance, messaging clarity, and conversion-first journey design.",
    stack: [
      "WordPress",
      "PHP",
      "JavaScript",
      "CSS3",
      "SEO",
      "Lead Forms",
      "Responsive Design",
      "WordPress CMS",
    ],
    accent: "Marketing, Lead Generation",
    image: "/images/Projects_Imgs/DMT-Digital-Agency-Hub/1.webp",
    link: "/project/11",
    details: {
      category: "WordPress Website Development",
      overview: {
        problemSolved:
          "Needed a cleaner, higher-converting agency website that positioned multiple services clearly and improved inbound lead capture at scale.",
        targetAudience:
          "Marketing clients, service buyers, and businesses seeking digital agency support across multiple channels and industries.",
        whyBuilt:
          "To create a strong digital storefront that mirrors the agency’s expertise while converting traffic into service inquiries.",
      },
      role: [
        "WordPress Developer",
        "UX Strategy Contributor",
        "Lead Generation Designer",
        "Performance Optimization Engineer",
      ],
      features: [
        "Service-heavy marketing architecture",
        "Conversion-first page layouts and CTAs",
        "Responsive, premium branded experience",
        "SEO-friendly content structure",
        "Lead generation and inquiry flow",
      ],
      screenshots: [
        "/images/Projects_Imgs/DMT-Digital-Agency-Hub/1.webp",
        "/images/Projects_Imgs/DMT-Digital-Agency-Hub/2.webp",
        "/images/Projects_Imgs/DMT-Digital-Agency-Hub/3.webp",
        "/images/Projects_Imgs/DMT-Digital-Agency-Hub/4.webp",
        "/images/Projects_Imgs/DMT-Digital-Agency-Hub/5.webp",
        "/images/Projects_Imgs/DMT-Digital-Agency-Hub/6.webp",
      ],
      demoUrl: "https://www.digitalmarketingtechno.com/",
    },
  },
  {
    id: "13",
    year: "2024",
    title: "SKEK GEAR | US City-Targeted WooCommerce Store with Local SEO Architecture",
    summary:
      "A WooCommerce-based hoodie store built with city-targeted SEO landing pages to capture localized U.S. search traffic.",
    description:
      "SKEK GEAR is a city-focused eCommerce storefront built to rank and convert across regional U.S. search demand. The system combines a performant WooCommerce foundation with local SEO architecture, product presentation, and conversion-focused store design for high-intent product discovery.",
    stack: [
      "WooCommerce",
      "WordPress",
      "PHP",
      "SEO",
      "JavaScript",
      "Tailwind CSS",
      "Product UX",
      "Local Landing Pages",
    ],
    accent: "E-commerce, Local SEO",
    image: "/images/Projects_Imgs/SKEK-GEAR/1.webp",
    link: "/project/13",
    details: {
      category: "WordPress eCommerce Platform",
      overview: {
        problemSolved:
          "Designed a geographically targeted storefront to capture local buyer intent and improve quality traffic acquisition through city-specific SEO design.",
        targetAudience:
          "U.S.-based shoppers, local product audiences, and stores needing region-targeted digital marketing synergy.",
        whyBuilt:
          "To combine a high-converting storefront with local search architecture so the business could win regional traffic without excessive ad spend.",
      },
      role: [
        "WooCommerce Developer",
        "E-commerce UX Engineer",
        "SEO Landing Page Architect",
        "Storefront Optimization Lead",
      ],
      features: [
        "City-targeted SEO landing pages",
        "Conversion-focused WooCommerce layout",
        "Product presentation optimized for sales",
        "Localized shopping experience and regional strategy",
        "High-velocity storefront performance",
      ],
      screenshots: [
        "/images/Projects_Imgs/SKEK-GEAR/1.webp",
        "/images/Projects_Imgs/SKEK-GEAR/2.webp",
        "/images/Projects_Imgs/SKEK-GEAR/3.webp",
        "/images/Projects_Imgs/SKEK-GEAR/4.webp",
      ],
      demoUrl: "https://skekgear.com/", 
    },
  },
  {
    id: "18",
    year: "2025",
    title: "Via Kashmir Itinerary & CRM | Premium B2B Travel Platform",
    summary:
      "A high-performance SaaS platform featuring an automated Itinerary Builder, Lead CRM, and financial tracking for travel agencies.",
    description:
      "Via Kashmir is a premium B2B travel platform built to streamline planning, lead management, and financial control for travel agencies. The application combines itinerary generation, CRM workflows, and operational reporting to help agencies manage bookings more efficiently.",
    stack: [
      "Laravel",
      "PHP",
      "MySQL",
      "React",
      "Tailwind CSS",
      "Travel CRM",
      "Reporting",
      "Admin Workflow",
    ],
    accent: "Travel SaaS, CRM",
    image: "/images/Projects_Imgs/Via-Kashmir-Itinerary-CRM/1.webp",
    link: "/project/18",
    details: {
      category: "Customer Relationship Management (CRM)",
      overview: {
        problemSolved:
          "Needed a unified system for travel agency leads, itinerary planning, and financial tracking to replace disconnected spreadsheets and operational overhead.",
        targetAudience:
          "Travel agencies, B2B tour operators, and destination managers handling multiple itineraries and client interactions.",
        whyBuilt:
          "To create a useful operational system that keeps itinerary planning, client relations, and sales workflows visible in one place.",
      },
      role: [
        "Full-Stack Developer",
        "CRM Product Engineer",
        "Travel Workflow Designer",
        "SaaS Systems Integrator",
      ],
      features: [
        "Automated itinerary builder",
        "Lead and customer CRM tracking",
        "Financial reporting and agency records",
        "Booking workflow dashboards",
        "Operational visibility across client travel pipelines",
      ],
      screenshots: [
        "/images/Projects_Imgs/Via-Kashmir-Itinerary-CRM/1.webp",
        "/images/Projects_Imgs/Via-Kashmir-Itinerary-CRM/2.webp",
        "/images/Projects_Imgs/Via-Kashmir-Itinerary-CRM/3.webp",
      ],
      demoUrl: "https://viakashmiritinerary.in/",
    },
  },
  {
    id: "19",
    year: "2025",
    title: "Qckserve | Multi-Vertical Business Services Ecosystem",
    summary:
      "A comprehensive multi-vertical marketplace for professional services, real estate, and digital commerce.",
    description:
      "Qckserve is a multi-vertical digital ecosystem bringing together local service discovery, real estate listings, and commerce-related business operations within one scalable web platform. The platform is designed to support broad marketplace discovery and conversion across multiple service lines.",
    stack: [
      "Next.js",
      "React",
      "Laravel",
      "Node.js",
      "Tailwind CSS",
      "Marketplace UX",
      "REST APIs",
      "Database Design",
    ],
    accent: "Marketplace, Services",
    image: "/images/Projects_Imgs/Qckserve/1.webp",
    link: "/project/19",
    details: {
      category: "Full-Stack Web Development",
      overview: {
        problemSolved:
          "Built a unified marketplace platform to centralize different service verticals and give businesses a single entry point for discovery, inquiry, and commerce flows.",
        targetAudience:
          "Service providers, real estate operators, commerce businesses, and users looking for multi-vertical local discovery.",
        whyBuilt:
          "To unify multiple business categories into a cohesive digital experience while keeping architecture modular and easy to scale.",
      },
      role: [
        "Full-Stack Developer",
        "Marketplace Architect",
        "Frontend Product Lead",
        "Platform Scalability Engineer",
      ],
      features: [
        "Multi-vertical business discovery layout",
        "Marketplace UX patterns for service conversion",
        "Modular system architecture for multiple categories",
        "Scalable backend with business logic separation",
        "Responsive experience across device sizes",
      ],
      screenshots: [
        "/images/Projects_Imgs/Qckserve/1.webp",
        "/images/Projects_Imgs/Qckserve/2.webp",
        "/images/Projects_Imgs/Qckserve/3.webp",
        "/images/Projects_Imgs/Qckserve/4.webp",
        "/images/Projects_Imgs/Qckserve/5.webp",
      ],
      demoUrl: "https://qckserve.in/",
    },
  },
  {
    id: "22",
    year: "2025",
    title: "Henna by Eishah — Luxury Bridal & Occasion Henna Artistry",
    summary:
      "A sophisticated, high-aesthetic web platform for a luxury bespoke bridal and occasion henna artist, featuring service galleries, a booking process breakdown, and client testimonials.",
    description:
      "Henna by Eishah is a luxury bridal and occasion henna artistry brand. The website was designed to reflect a premium, intimate experience through elegant visuals, ceremony-focused service storytelling, strong portfolio galleries, and a clear client journey for bookings and inquiries.",
    stack: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "Responsive Design",
      "SEO",
      "Brand Storytelling",
      "Booking UX",
      "CMS",
    ],
    accent: "Luxury Branding, Weddings",
    image: "/images/Projects_Imgs/Henna-by-Eishah/1.webp",
    link: "/project/22",
    details: {
      category: "Web Development",
      overview: {
        problemSolved:
          "Needed a premium web presence that matched the artistry and emotional positioning of the brand while helping clients discover services and book confidently.",
        targetAudience:
          "Brides, event planners, and clients seeking premium henna artistry for weddings and special occasions.",
        whyBuilt:
          "To turn the brand’s visual identity into a polished digital experience with stronger trust and conversion opportunities.",
      },
      role: [
        "Frontend Developer",
        "Brand Experience Designer",
        "UX/UI Developer",
        "Booking Journey Optimizer",
      ],
      features: [
        "Elegant luxury branding and editorial design",
        "Portfolio gallery with service presentation",
        "Booking and inquiry journey improvements",
        "Client testimonial and trust signals",
        "Mobile-first conversion experience",
      ],
      screenshots: [
        "/images/Projects_Imgs/Henna-by-Eishah/1.webp",
        "/images/Projects_Imgs/Henna-by-Eishah/2.webp",
        "/images/Projects_Imgs/Henna-by-Eishah/3.webp",
        "/images/Projects_Imgs/Henna-by-Eishah/4.webp",
        "/images/Projects_Imgs/Henna-by-Eishah/5.webp",
      ],
      demoUrl: "https://wedding-mehndi.vercel.app/",
    },
  },
  {
    id: "23",
    year: "2025",
    title: "Invoice & CRM Management Mobile App",
    summary:
      "A cross-platform mobile CRM and invoicing solution built with Flutter, allowing business owners, staff, and clients to manage invoices, payments, customer ledgers, and granular permissions on the go.",
    description:
      "Invoice & CRM Management Mobile App is a cross-platform mobile management platform for modern businesses. It combines customer relationship tools, invoice creation, payment visibility, and permission-based access into a single mobile-first experience designed for owners and teams to operate from anywhere.",
    stack: [
      "Flutter",
      "Dart",
      "Firebase",
      "REST APIs",
      "Mobile App Design",
      "State Management",
      "Authentication",
      "Flutter UI",
    ],
    accent: "Mobile App, CRM",
    image: "/images/Projects_Imgs/Invoice-CRM-Mobile-App/1.webp",
    link: "/project/23",
    details: {
      category: "Mobile Applications",
      overview: {
        problemSolved:
          "Needed a mobile-friendly CRM and invoicing system that let business teams track clients, payment status, and account history without depending on desktop-only workflows.",
        targetAudience:
          "Small businesses, service firms, and management teams needing mobile-first financial and customer operations tools.",
        whyBuilt:
          "To create a mobile-first customer and payment management system with clearer workflows and better on-the-go access to business operations.",
      },
      role: [
        "Mobile App Developer",
        "CRM UX Designer",
        "Flutter Developer",
        "Cross-Platform Engineer",
      ],
      features: [
        "Client and invoice management dashboard",
        "Permission-based user roles and staff access",
        "Payment and ledger tracking",
        "Mobile-first business operations workflow",
        "Responsive customer relationship management",
      ],
      screenshots: [
        "/images/Projects_Imgs/Invoice-CRM-Mobile-App/1.webp",
        "/images/Projects_Imgs/Invoice-CRM-Mobile-App/2.webp",
        "/images/Projects_Imgs/Invoice-CRM-Mobile-App/3.webp",
        "/images/Projects_Imgs/Invoice-CRM-Mobile-App/4.webp",
      ],
    },
  },
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
    period: "2026 — Present",
    title: "AI Automations",
    org: "Freelance — AI & Automation",
    description:
      "Designing and operating AI-powered automation pipelines and agents that connect LLMs to business systems. Deliverables include n8n and Zapier flows, Make integrations, Python agents, and vector-DB backed retrieval systems for reliable, production-ready automation.",
    tech: ["n8n", "Zapier", "Make", "Python", "OpenAI", "Vector DBs"],
  },
  {
    period: "2026 — Present",
    title: "Full-Stack Developer",
    org: "Freelance — Clients worldwide",
    description:
      "Delivering full products — from Next.js dashboards to n8n automation suites — end-to-end for startups and agencies.",
    tech: ["Next.js", "Laravel", "React", "Flutter", "n8n"],
  },
  {
    period: "2025",
    title: "WordPress Plugin Developer",
    org: "onsite",
    description:
      "Built custom plugins, pricing engines and payment integrations; brought LCP under 2s across 5 client sites.",
    tech: ["PHP", "WordPress", "React", "MySQL"],
  },
  {
    period: "2026 — Present",
    title: "Mobile App Developer",
    org: "Startup — Android & Flutter",
    description:
      "Designed and shipped native Android apps in Java and cross-platform apps in Flutter with Firebase backends.",
    tech: ["Java", "Flutter", "Firebase"],
  },
];

export const navLinks = [
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/work", label: "Work" },
  { href: "/automation", label: "Automation" },
  { href: "/contact", label: "Contact" },
];
export const PersonalInfo = {
  name: "MOHAMMAD",
  title: "Frontend Developer & Data Administrator",
  // Hero tagline — updated to be specific
  description:
    "Frontend developer with a data background — I build things that are clean, structured, and actually useful.",
  longDescription:
    "I'm a frontend developer based in Indonesia with a background that started in data administration and operations — not a bootcamp or a CS degree. That path taught me how real business data works, and why structure matters.\n\nBefore focusing on web development, I built an Excel-based application for production tracking and bookkeeping using Excel's built-in developer tools — automating reports that were previously done manually. That project pushed me toward building tools people actually use, which eventually led me to web development.\n\nOn the web side, I've worked on several projects independently: a full-stack wedding invitation site with RSVP functionality deployed on Vercel, an e-commerce frontend for a local store, and a top-up service platform currently in progress. Each one taught me something different — from animation and UI polish to deployment and database integration.\n\nI work mainly with Next.js, React, and Tailwind CSS. I care about clean UI, readable code, and shipping things that actually work. Still growing, but I've been building consistently — and that's what matters.",
  email: "mfrk081@gmail.com",
  // Phone removed from public display — keep here for internal use if needed
  location: "Ciamis, Indonesia",
  profileImage: "/images/profile.jpg",
  cvUrl:
    "https://drive.google.com/file/d/1CzkrQ1KI9x2-7Qux1iWEh-MsFgCsEaZO/view?usp=drive_link",
  availableForWork: true,
  socialLinks: {
    github: "https://github.com/mahmud-18",
    linkedin: "https://linkedin.com/in/mohammad-basalamah",
  },
};

export const heroRoles = [
  PersonalInfo.title,
  "Frontend Developer",
  "UI Builder",
  "Next.js Developer",
  "Data-Aware Builder",
];

export const SocialLinks = [
  {
    name: "GitHub",
    href: PersonalInfo.socialLinks.github,
    iconName: "Github",
  },
  {
    name: "LinkedIn",
    href: PersonalInfo.socialLinks.linkedin,
    iconName: "Linkedin",
  },
  {
    name: "Email",
    href: `mailto:${PersonalInfo.email}`,
    iconName: "Mail",
  },
];

// ── Skills split into two groups ────────────────────────────────

export const skillsWebDev = [
  { name: "HTML & CSS", icon: "🌐", category: "Core" },
  { name: "JavaScript", icon: "⚡", category: "Core" },
  { name: "Responsive Design", icon: "📱", category: "Core" },
  { name: "React.js", icon: "⚛️", category: "Framework" },
  { name: "Next.js", icon: "▲", category: "Framework" },
  { name: "Tailwind CSS", icon: "🎨", category: "Styling" },
  { name: "Framer Motion", icon: "🎬", category: "Animation" },
  { name: "Lucide React", icon: "✦", category: "UI Library" },
  { name: "Prisma", icon: "🔷", category: "Backend" },
  { name: "Git & GitHub", icon: "🐙", category: "Tools" },
  { name: "Vercel", icon: "🚀", category: "Tools" },
];

export const skillsDataTools = [
  { name: "Data Management", icon: "🗂️", category: "Operations" },
  { name: "Reporting", icon: "📊", category: "Operations" },
  { name: "Bookkeeping", icon: "🧾", category: "Finance" },
  { name: "Quality Control", icon: "✅", category: "Operations" },
];

export const skillGroups = [
  {
    title: "Web Development",
    description:
      "Frontend stack and tools I use to build responsive web interfaces.",
    skills: skillsWebDev,
  },
  {
    title: "Data & Tools",
    description:
      "Operational strengths from data, reporting, and quality workflows.",
    skills: skillsDataTools,
  },
];

export const skills = [...skillsWebDev, ...skillsDataTools];

// ── Projects ─────────────────────────────────────────────────────

export const projects = [
  {
    id: 1,
    title: "Wedding Invitation — Undangan",
    // "problem" field: one sentence explaining the real-world problem solved
    problem:
      "Physical wedding invitations are slow to distribute, hard to update, and can't capture RSVPs in real time.",
    description:
      "A full-stack interactive wedding invitation website. Built with Next.js, Tailwind CSS v4, Framer Motion, and Vercel Postgres. Features animated transitions, per-component backgrounds, and an RSVP form — all managed through a centralized content file.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel Postgres"],
    liveUrl: "https://undangannikahanfahmidanhaifa.vercel.app/",
    githubUrl: "https://github.com/mahmud-18/undangan",
    imageSrc: "/images/wedding.png",
    featured: true,
    accent: "#00c8ff",
  },
  {
    id: 2,
    title: "E-Commerce — Amberik Store",
    problem:
      "Local stores lose potential customers by having no online presence or way to browse and purchase products digitally.",
    description:
      "A full-stack e-commerce shopping website with product catalog and transaction flow. Built with Next.js and Tailwind CSS on the frontend, Prisma as the ORM for database management.",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "Prisma",
      "Framer Motion",
      "Lucide React",
      "Swiper.js",
      "Vercel Postgres",
    ],
    imageSrc: "/images/Amberik.png",
    liveUrl: "https://amberik.vercel.app/",
    githubUrl: "https://github.com/mahmud-18/amberikStore",
    featured: false,
    accent: "#7b5fff",
  },
  {
    id: 3,
    title: "Top-Up Service — Cherizzle",
    problem:
      "Game top-up platforms are often cluttered and untrustworthy — this aims to build a clean, focused UI for game credit purchases.",
    description:
      "A game top-up service platform currently in development. Features a product catalog and transaction flow UI, with Next.js on the frontend and Prisma handling the backend database layer.",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "Prisma",
      "Framer Motion",
      "Lucide React",
      "Swiper.js",
    ],
    imageSrc: "/images/cherizzle.png",
    liveUrl: "",
    liveStatus: "In Development",
    githubUrl: "https://github.com/mahmud-18/cherizzle",
    featured: false,
    accent: "#ff3d8b",
  },
];

// ── Experience ────────────────────────────────────────────────────

export const experience = [
  {
    id: 1,
    year: "2024 – Present",
    role: "Freelance Web Developer",
    company: "Self-employed",
    type: "Freelance",
    description:
      "Delivered 3 web projects independently, from UI design to full deployment on Vercel. Built a full-stack wedding invitation with live RSVP, an e-commerce store with database integration, and a top-up service platform. Managed the full development cycle solo across each project.",
    skills: ["Next.js", "Tailwind CSS", "Framer Motion", "Prisma", "Vercel"],
  },
  {
    id: 2,
    year: "Aug 2025 – Present",
    role: "QC & Data Administrator",
    company: "BWR RIB",
    type: "Full-time",
    description:
      "Conducted quality checks on yarn and rib production outputs. Built a tracking system covering production input, output, and operational expenses, replacing a fully manual process and centralizing 3 core reporting areas for faster review.",
    skills: ["Microsoft Excel", "Data Management", "QC", "Reporting"],
  },
  {
    id: 3,
    year: "Apr 2024 – Aug 2025",
    role: "Operations & Field Staff",
    company: "Dejavani Modifikasi",
    type: "Full-time",
    description:
      "Coordinated daily field operations and on-site activities across the workshop. Maintained daily financial transaction records and income logs while handling direct customer interactions, keeping service delivery consistent across workshop activity.",
    skills: ["Operations", "Financial Records", "Customer Service"],
  },
  {
    id: 4,
    year: "Feb 2023 – Mar 2024",
    role: "Data Administrator",
    company: "Jaya Jati",
    type: "Full-time",
    description:
      "Managed product order data across quantities, specifications, and delivery schedules for multiple clients. Prepared daily and monthly bookkeeping reports, then coordinated directly with clients on order fulfillment and payment tracking to keep records consistent.",
    skills: ["Data Entry", "Bookkeeping", "Client Coordination"],
  },
  {
    id: 5,
    year: "Jun 2022 – Dec 2022",
    role: "Front Desk Intern",
    company: "Hotel Sakinah",
    type: "Internship",
    description:
      "Handled all front desk operations including guest check-in/check-out, complaint resolution, and cash transaction processing. Prepared daily revenue reports in accordance with hotel SOP throughout the 7-month internship.",
    skills: ["Hotel Management System", "Customer Handling", "Cash Reporting"],
  },
];

export const contactForm = {
  title: "Send a message",
  intro: "Share a few details and I will reply by email.",
  fields: {
    name: {
      label: "Name",
      placeholder: "Your name",
      requiredMessage: "Please enter your name.",
    },
    email: {
      label: "Email",
      placeholder: "you@example.com",
      requiredMessage: "Please enter your email.",
      invalidMessage: "Please enter a valid email address.",
    },
    message: {
      label: "Message",
      placeholder: "Tell me about your project",
      requiredMessage: "Please enter a message.",
    },
  },
  submitLabel: "Send message",
  successMessage: "Message ready. Your email app will open with the details.",
  subject: "Portfolio contact",
};

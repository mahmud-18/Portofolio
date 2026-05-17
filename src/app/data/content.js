export const PersonalInfo = {
  name: "MOHAMMAD",
  title: "Frontend Developer, Data Administrator, Virtual Assistant",
  description:
    "I work in data administration and build web projects on the side. My background across manufacturing, automotive, and hospitality taught me to care about accuracy and detail — the same mindset I bring into code.",
  longDescription:
    "I'm a frontend developer based in Indonesia with a background that started in data administration and operations — not a bootcamp or a CS degree. That path taught me how real business data works, and why structure matters.\n\nBefore focusing on web development, I built an Excel-based application for production tracking and bookkeeping using Excel's built-in developer tools — automating reports that were previously done manually. That project pushed me toward building tools people actually use, which eventually led me to web development.\n\nOn the web side, I've worked on several projects independently: a full-stack wedding invitation site with RSVP functionality deployed on Vercel, an e-commerce frontend for a local store, and a top-up service platform currently in progress. Each one taught me something different — from animation and UI polish to deployment and database integration.\n\nI work mainly with Next.js, React, and Tailwind CSS. I care about clean UI, readable code, and shipping things that actually work. Still growing, but I've been building consistently — and that's what matters.",
  email: "mfrk081@gmail.com",
  phone: "+6281564964988",
  location: "Ciamis, Indonesia",
  profileImage: "/images/profile.jpg",
  cvUrl:
    "https://drive.google.com/file/d/1CzkrQ1KI9x2-7Qux1iWEh-MsFgCsEaZO/view?usp=drive_link",
  availableForWork: true,
  socialLinks: {
    github: "https://github.com/mahmud-18",
    linkedin: "https://linkedin.com/en/mohammad-basalamah",
  },
};

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

export const skills = [
  { name: "HTML & CSS", icon: "🌐", category: "Core" },
  { name: "JavaScript", icon: "⚡", category: "Core" },
  { name: "Responsive Design", icon: "📱", category: "Core" },
  { name: "React.js", icon: "⚛️", category: "Framework" },
  { name: "Next.js", icon: "▲", category: "Framework" },
  { name: "Tailwind CSS", icon: "🎨", category: "Styling" },
  { name: "Framer Motion", icon: "🎬", category: "Animation" },
  { name: "Swiper.js", icon: "🎠", category: "UI Library" },
  { name: "Lucide React", icon: "✦", category: "UI Library" },
  { name: "Prisma", icon: "🔷", category: "Backend" },
  { name: "Vercel", icon: "🚀", category: "Tools" },
  { name: "Git & GitHub", icon: "🐙", category: "Tools" },
  { name: "Microsoft Excel", icon: "📊", category: "Tools" },
  { name: "Data Entry", icon: "🗂️", category: "Tools" },
];

export const projects = [
  {
    id: 1,
    title: "Wedding Invitation — Undangan",
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
    liveUrl: "#",
    githubUrl: "https://github.com/mahmud-18/cherizzle",
    featured: false,
    accent: "#ff3d8b",
  },
];

export const experience = [
  {
    id: 1,
    year: "2024 – Present",
    role: "Freelance Web Developer",
    company: "Self-employed",
    type: "Freelance",
    description:
      "Built web projects independently — a full-stack wedding invitation site, an e-commerce frontend, and a top-up service platform. Handled everything from UI design to deployment.",
    skills: ["Next.js", "Tailwind CSS", "Framer Motion", "Prisma", "Vercel"],
  },
  {
    id: 2,
    year: "Aug 2025 – Present",
    role: "QC & Data Administrator",
    company: "BWR RIB",
    type: "Full-time",
    description:
      "Conducted quality checks on yarn and rib production outputs. Built an Excel-based tracking system for production input, output, and operational expenses — replacing manual processes with automated reporting.",
    skills: ["Microsoft Excel", "Data Management", "QC", "Reporting"],
  },
  {
    id: 3,
    year: "Apr 2024 – Aug 2025",
    role: "Operations & Field Staff",
    company: "Dejavani Modifikasi",
    type: "Full-time",
    description:
      "Managed day-to-day operational activities and on-site field coordination. Handled financial transactions, maintained income records, and engaged directly with customers to ensure service satisfaction.",
    skills: ["Operations", "Financial Records", "Customer Service"],
  },
  {
    id: 4,
    year: "Feb 2023 – Mar 2024",
    role: "Data Administrator",
    company: "Jaya Jati",
    type: "Full-time",
    description:
      "Managed product order data including quantities, specifications, and delivery schedules. Prepared daily and monthly bookkeeping reports, and coordinated with clients on order fulfillment and payments.",
    skills: ["Data Entry", "Bookkeeping", "Client Coordination"],
  },
  {
    id: 5,
    year: "Jun 2022 – Dec 2022",
    role: "Front Desk Intern",
    company: "Hotel Sakinah",
    type: "Internship",
    description:
      "Handled guest check-in/check-out and resolved complaints in accordance with SOP. Processed cash transactions and prepared daily revenue reports.",
    skills: ["Hotel Management System", "Customer Handling", "Cash Reporting"],
  },
];

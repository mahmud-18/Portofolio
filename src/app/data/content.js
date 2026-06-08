export const PersonalInfo = {
  name: "MOHAMMAD",

  title: "Frontend Developer & Systems Builder",

  description:
    "Frontend developer with an operations background, building practical systems and web applications that solve real business problems.",

  longDescription:
    "My background started in operations, reporting, and data administration before moving into software development. Working directly with production records, bookkeeping, inventory data, and operational workflows taught me how businesses actually function behind the scenes.\n\nOne of my earliest projects was building an Excel-based production tracking and bookkeeping system that replaced manual reporting processes. That experience introduced me to system design and sparked my interest in building digital solutions.\n\nToday, I develop modern web applications using Next.js, React, Tailwind CSS, and related technologies. Beyond creating user interfaces, I enjoy solving workflow problems, organizing information, and building tools that make work more efficient.\n\nI combine operational thinking with technical execution — focusing not only on how things look, but also on how they work and the value they provide.",

  email: "mfrk081@gmail.com",

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
  "Frontend Developer",
  "Systems Builder",
  "Problem Solver",
  "Next.js Developer",
  "Operations-Minded Developer",
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
  { name: "Process Improvement", icon: "⚙️", category: "Operations" },
  { name: "Workflow Design", icon: "🔄", category: "Operations" },
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
    id: 0,
    title: "Production Tracking & Reporting System",

    problem:
      "Production records, inventory movement, and operational expenses were managed manually, causing fragmented reporting and slower decision making.",

    description:
      "Designed and implemented an Excel-based tracking system covering production input, output, inventory movement, and operational expenses. Centralized reporting workflows and improved visibility across multiple operational areas.",

    tags: ["Excel", "Operations", "Reporting", "Process Improvement"],

    imageSrc: "/images/reporting-system.png",

    liveUrl: "",

    githubUrl: "",

    featured: true,

    accent: "#22c55e",
  },

  {
    id: 1,

    title: "Wedding Invitation — Undangan",

    problem:
      "Physical wedding invitations are slow to distribute, hard to update, and can't capture RSVPs in real time.",

    description:
      "A full-stack RSVP platform designed to simplify invitation distribution and guest attendance tracking. Built with Next.js, Tailwind CSS, Framer Motion, and Vercel Postgres, featuring dynamic invitation management and real-time RSVP collection.",

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
      "Local businesses lose potential customers by having no online presence or way to browse and purchase products digitally.",

    description:
      "A full-stack e-commerce platform developed to help local businesses establish an online presence. Features product browsing, database integration, and a scalable transaction workflow.",

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

    problem: "Game top-up platforms are often cluttered and untrustworthy.",

    description:
      "An in-progress digital top-up platform focused on creating a cleaner, more trustworthy purchasing experience through streamlined UI and scalable architecture.",

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

    year: "Aug 2025 – Present",

    role: "QC & Data Administrator",

    company: "BWR RIB",

    type: "Full-time",

    description:
      "Performed quality control across yarn and rib production while developing an internal tracking system for production activity, inventory flow, and operational expenses. Replaced manual reporting processes and centralized reporting into a single structured workflow.",

    skills: ["Microsoft Excel", "Data Management", "QC", "Reporting"],
  },

  {
    id: 2,

    year: "Apr 2024 – Aug 2025",

    role: "Operations & Field Staff",

    company: "Dejavani Modifikasi",

    type: "Full-time",

    description:
      "Coordinated workshop operations, maintained financial records, monitored daily activity, and handled direct customer interaction while ensuring smooth service delivery.",

    skills: ["Operations", "Financial Records", "Customer Service"],
  },

  {
    id: 3,

    year: "Feb 2023 – Mar 2024",

    role: "Data Administrator",

    company: "Jaya Jati",

    type: "Full-time",

    description:
      "Managed order data, production specifications, delivery schedules, bookkeeping records, and client communication. Maintained data accuracy across operational and financial reporting processes.",

    skills: ["Data Entry", "Bookkeeping", "Client Coordination"],
  },

  {
    id: 4,

    year: "2024 – Present",

    role: "Freelance Web Developer",

    company: "Self-employed",

    type: "Freelance",

    description:
      "Designed, developed, and deployed multiple web applications independently, managing the entire lifecycle from planning and UI implementation to deployment and maintenance. Delivered solutions focused on usability, workflow efficiency, and business value.",

    skills: ["Next.js", "Tailwind CSS", "Framer Motion", "Prisma", "Vercel"],
  },

  {
    id: 5,

    year: "Jun 2022 – Dec 2022",

    role: "Front Desk Intern",

    company: "Hotel Sakinah",

    type: "Internship",

    description:
      "Handled front desk operations, guest services, cash transactions, and daily reporting while following hospitality service standards.",

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

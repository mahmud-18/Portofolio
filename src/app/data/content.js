export const PersonalInfo = {
  name: "MOHAMMAD",

  title: "Tech-Savvy Operations Specialist",

  description:
    "Operations professional who bridges traditional workflows and digital tools. Built Excel tracking systems at a yarn manufacturer that cut reporting time by 60%, then digitized inventory for 200+ items at a vehicle workshop (85%→98% accuracy). Experienced across manufacturing, service, and distribution.",

  longDescription:
    "I specialize in organizing daily workflows, managing inventory data, and ensuring quality control. I enjoy building useful systems, like Excel tracking tools and inspection checklists, to help teams work faster and make fewer mistakes.\n\nThroughout my career, I've worked across manufacturing (yarn & rib production), vehicle modification & service, furniture manufacturing & distribution, and hospitality — giving me a well-rounded understanding of how different industries operate.\n\nI'm looking for an opportunity to bring my hands-on experience in process improvement and team coordination to a growing company.",

  email: "mfrk018@gmail.com",

  location: "Bandung, Indonesia",

  languages: ["Indonesian (Native)", "English (Intermediate)"],

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
  "Operations Specialist",
  "QC & Data Administrator",
  "Process Improvement",
  "Inventory Management",
  "Systems Builder",
];

export const highlights = [
  "98% Inventory Accuracy (up from 85%)",
  "100% Order Accuracy across 50+ monthly transactions",
  "4.8★ Customer Rating (Dejavani)",
  "4.9★ Guest Satisfaction (Hotel Sakinah)",
  "95% On-Time Delivery Rate",
  "Built 3 Custom Tracking Systems (Excel & Digital)",
  "Trained 3 Team Members on SOPs",
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
  { name: "Excel (Advanced)", icon: "📊", category: "Data" },
  { name: "Pivot Tables", icon: "🔄", category: "Data" },
  { name: "VLOOKUP", icon: "🔍", category: "Data" },
  { name: "Data Visualization", icon: "📈", category: "Data" },
  { name: "Microsoft Office", icon: "📎", category: "Tools" },
  { name: "Google Workspace", icon: "📧", category: "Tools" },
  { name: "Canva", icon: "🎨", category: "Tools" },
  { name: "Basic Video Editing", icon: "🎬", category: "Tools" },
  { name: "Hotel Management Systems", icon: "🏨", category: "Tools" },
];

export const skillsDataTools = [
  { name: "Process Optimization", icon: "⚙️", category: "Operations" },
  { name: "Inventory Management", icon: "📦", category: "Operations" },
  { name: "Vendor Negotiations", icon: "🤝", category: "Operations" },
  { name: "Quality Control", icon: "✅", category: "Operations" },
  { name: "Project Coordination", icon: "📋", category: "Operations" },
  { name: "Operations Scheduling", icon: "🗓️", category: "Operations" },
  { name: "Compliance & Documentation", icon: "📝", category: "Operations" },
  { name: "Expense Tracking & Admin Support", icon: "🧾", category: "Finance" },
  { name: "Data Entry & Accuracy", icon: "🎯", category: "Finance" },
  { name: "Data Preparation for Audit", icon: "💰", category: "Finance" },
  { name: "Report Generation", icon: "📄", category: "Finance" },
  { name: "Customer Communication", icon: "💬", category: "Interpersonal" },
  { name: "Problem-Solving", icon: "🧩", category: "Interpersonal" },
  { name: "Time Management", icon: "⏰", category: "Interpersonal" },
  { name: "Cross-Functional Teamwork", icon: "👥", category: "Interpersonal" },
  { name: "Stakeholder Coordination", icon: "🔗", category: "Interpersonal" },
  { name: "Training & Mentoring", icon: "🎓", category: "Interpersonal" },
  { name: "Attention to Detail", icon: "🔎", category: "Interpersonal" },
];

export const skillGroups = [
  {
    title: "Data & Tools",
    description:
      "Software and tools I use for data management, reporting, and documentation.",
    skills: skillsWebDev,
  },
  {
    title: "Operations & Admin Support",
    description:
      "Core operational strengths from process improvement, quality control, and administrative management.",
    skills: skillsDataTools,
  },
];

export const skills = [...skillsWebDev, ...skillsDataTools];

// ── Operations Projects (Primary) ────────────────────────────────

export const projects = [
  {
    id: 0,
    title: "Excel Production Tracking System",

    problem:
      "Production records, inventory movement, and operational expenses were managed manually, causing fragmented reporting and slower decision making.",

    description:
      "Built an Excel tracking system to monitor production input, output, and expenses at BWR RIB, which made monthly reporting much faster and more accurate. Centralized reporting workflows and improved visibility across multiple operational areas.",

    tags: ["Excel", "Operations", "Reporting", "Process Improvement"],

    imageSrc: "/images/reporting-system.png",

    liveUrl: "",

    githubUrl: "",

    featured: true,

    accent: "#22c55e",
  },

  {
    id: 1,

    title: "Digital Inventory System — Dejavani",

    problem:
      "Spare parts inventory for over 200 items was tracked manually, leading to stock discrepancies and ordering errors.",

    description:
      "Created a digital inventory system for over 200 items and ran regular stock checks, improving order accuracy from 85% to 98%. Enabled better vendor coordination and improved operational efficiency.",

    tags: ["Inventory Management", "Data Accuracy", "Operational Efficiency"],

    liveUrl: "",

    githubUrl: "",

    imageSrc: "/images/reporting-system.png",

    featured: true,

    accent: "#f59e0b",
  },

  {
    id: 2,

    title: "QC Checklist & Handover System",

    problem:
      "Vehicle modification projects suffered from rework due to inconsistent quality checks before customer handover.",

    description:
      "Introduced a strict quality control checklist before handover at Dejavani Modifikasi, which eliminated rework and ensured every vehicle met customer expectations. Maintained a 4.8-star average customer rating.",

    tags: ["Quality Control", "Process Improvement", "Customer Satisfaction"],

    imageSrc: "/images/reporting-system.png",

    liveUrl: "",

    githubUrl: "",

    featured: false,

    accent: "#3b82f6",
  },
];

// ── Technical Projects (Proof of Digital Tool-Building) ──────────

export const techProjects = [
  {
    id: 0,

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
    id: 1,

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
    id: 2,

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

// ── Experience (Operations & Administration only) ───────────────

export const experience = [
  {
    id: 1,

    year: "Aug 2025 – Present",

    role: "QC & Data Administrator",

    company: "BWR RIB",

    type: "Full-time",

    description:
      "Performed daily quality checks on yarn and rib production, significantly minimizing material waste and ensuring all outputs met strict company standards before packaging. Built an Excel tracking system to centralize production input, output, and operational data, reducing manual reporting time and ensuring 100% data accuracy for the finance team's audit process. Maintained detailed inventory records for incoming and outgoing goods, ensuring zero discrepancies for the procurement team. Documented all supply purchases clearly to support the finance team with data preparation for audits.",

    skills: [
      "Quality Control",
      "Excel (Advanced)",
      "Inventory Management",
      "Reporting",
      "Data Preparation for Audit",
    ],
  },

  {
    id: 2,

    year: "Apr 2024 – Aug 2025",

    role: "Operations & Field Staff",

    company: "Dejavani Modifikasi",

    type: "Full-time",

    description:
      "Managed daily workshop operations including spare parts inventory, tool availability, and vendor coordination, streamlining procurement tracking to ensure zero stock-outs and improving operational efficiency. Created a digital inventory system for over 200 items and ran regular stock checks, improving order accuracy from 85% to 98%. Coordinated up to 5 vehicle modification projects simultaneously, ensuring on-time delivery. Introduced a strict quality control checklist before handover, eliminating rework and maintaining a 4.8-star average customer rating. Handled daily admin tasks including reporting, purchase orders, expense tracking, and filing. Trained 3 new team members on workshop safety, quality standards, and daily procedures.",

    skills: [
      "Operations Management",
      "Inventory Management",
      "Vendor Coordination",
      "Project Coordination",
      "Quality Control",
      "Customer Service",
      "Training & Mentoring",
      "Expense Tracking",
    ],
  },

  {
    id: 3,

    year: "Feb 2023 – Mar 2024",

    role: "Data Administrator",

    company: "Jaya Jati",

    type: "Full-time",

    description:
      "Managed end-to-end product order lifecycle: captured specifications, tracked quantities, coordinated delivery schedules, and ensured 100% order accuracy across 50+ monthly client transactions. Prepared daily and monthly operational reports for sales and operational data to support management planning and audits. Communicated directly with clients regarding delivery schedules, helping the company achieve a 95% on-time delivery rate.",

    skills: [
      "Data Entry & Accuracy",
      "Expense Tracking",
      "Client Coordination",
      "Report Generation",
      "Operations Scheduling",
    ],
  },

  {
    id: 4,

    year: "Jun 2022 – Dec 2022",

    role: "Front Desk Intern",

    company: "Hotel Sakinah",

    type: "Internship",

    description:
      "Managed daily front desk administration and guest services, resolving complaints politely and earning a 4.9-star satisfaction rating. Recorded daily operational data and shift reports with 100% accuracy, ensuring zero discrepancies for the management's end-of-day review.",

    skills: [
      "Hotel Management Systems",
      "Customer Service",
      "Cash Handling",
      "Operational Reporting",
    ],
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

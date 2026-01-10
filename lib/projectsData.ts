// All projects data
export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  link?: string;
  github?: string;
  status: "live" | "beta" | "development";
  featured?: boolean;
  licenseRequired?: boolean;
  image?: string;
}

export const projectsData: Project[] = [
  // Learning Tools
  {
    id: "studygen",
    title: "StudyGen",
    description: "AI-powered learning tool that transforms PDF documents into organized study notes and interactive flashcards. Leverages machine learning to extract key concepts and generate comprehensive study materials automatically.",
    category: "Learning Tools",
    tags: ["AI", "Next.js", "TypeScript", "OpenAI", "PDF Processing"],
    link: "https://studygenapp.online/",
    status: "live",
    featured: true,
  },

  // Landing Pages
  {
    id: "jazzy-flower-shop",
    title: "Jazzy Flower Shop",
    description: "Beautiful e-commerce showcase website for a flower shop featuring elegant product displays, responsive design, and modern UI/UX. Built to help small businesses establish their online presence.",
    category: "Landing Page",
    tags: ["Next.js", "React", "Tailwind CSS", "Responsive Design"],
    link: "https://jazzy-flower-shop.vercel.app/",
    status: "beta",
    featured: false,
  },
  {
    id: "grace-mountain-cafe",
    title: "Grace Mountain Cafe",
    description: "Charming cafe website showcasing menu items, ambiance, and location information. Features smooth animations and mobile-first design to attract customers and enhance brand presence.",
    category: "Landing Page",
    tags: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    link: "https://grace-mountain-cafe.vercel.app/",
    status: "beta",
    featured: false,
  },
  {
    id: "outback-servo",
    title: "Outback Servo",
    description: "Modern coffee shop website highlighting specialty coffee offerings, location details, and cafe atmosphere. Designed with conversion-focused layouts and engaging visual elements.",
    category: "Landing Page",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "SEO"],
    link: "https://outback-servo.vercel.app/",
    status: "beta",
    featured: false,
  },
  {
    id: "macau-inasal-tops",
    title: "Macau's Inasal Tops",
    description: "Restaurant website showcasing authentic Filipino cuisine menu and dining ambiance. Features gallery, menu sections, and contact information with appetizing food photography.",
    category: "Landing Page",
    tags: ["React", "Next.js", "Tailwind CSS", "Image Optimization"],
    link: "https://macau-inasal-tops.vercel.app/",
    status: "beta",
    featured: false,
  },

  {
    id: "rnl-pro-hauling",
    title: "RNL Pro Hauling",
    description: "Professional hauling and logistics landing page showcasing services, fleet, and contact. Built for lead generation with clear CTAs and mobile-first design.",
    category: "Landing Page",
    tags: ["Next.js", "Tailwind CSS", "Responsive", "SEO"],
    link: "https://rnl-pro-hauling.vercel.app/",
    status: "live",
    featured: false,
  },
  {
    id: "rnl-mini-pos",
    title: "RNL Mini POS",
    description: "Lightweight point-of-sale web app for small businesses. Access is gated and requires a license key to view the live demo.",
    category: "Business Tools",
    tags: ["Next.js", "React", "POS", "GCash"],
    link: "https://rnl-mini-pos.vercel.app/",
    status: "beta",
    featured: false,
    licenseRequired: true,
  },

  // Portfolio / Business Site
  {
    id: "rnlstudio",
    title: "RNLStudio",
    description: "Freelance studio website showcasing services, projects, and contact. Built with a highly animated, modern Next.js UI to highlight client work and capabilities.",
    category: "Landing Page",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "https://www.rnlstudio.online/",
    status: "live",
    featured: true,
  },

  // Payment Tools
  {
    id: "dealvault",
    title: "DealVault",
    description: "Secure escrow payment platform enabling safe transactions between buyers and sellers. Integrated with PayMongo for payment processing, featuring dispute resolution and automated fund release mechanisms.",
    category: "Payment Tools",
    tags: ["Next.js", "PayMongo API", "PostgreSQL", "Authentication", "Payment Processing"],
    link: "https://deal-vault-liard.vercel.app/",
    status: "live",
    featured: true,
  },

  // Business Tools
  {
    id: "order-tracker-profit",
    title: "Order Tracker Profit",
    description: "Comprehensive business management tool for tracking orders, calculating profits, and managing inventory for small businesses. Features real-time analytics and MongoDB database integration.",
    category: "Business Tools",
    tags: ["React", "MongoDB", "Node.js", "Express", "Charts.js"],
    link: "https://rnl-ordertracker.vercel.app/",
    status: "live",
    featured: false,
  },

  // Academic/Professional Projects
  {
    id: "5s-methodology-api",
    title: "5S Methodology API",
    description: "Enterprise-grade RESTful API built with ASP.NET Core for workplace organization data management. Features comprehensive CRUD operations, data validation, and 90%+ unit test coverage ensuring production reliability and scalability.",
    category: "API Development",
    tags: ["ASP.NET Core", "C#", "xUnit", "SQL Server", "REST API"],
    link: "",
    github: "https://github.com/Raymart-Leyson",
    status: "live",
    featured: true,
  },
  {
    id: "3s-methodology-fullstack",
    title: "3S Methodology FullStack App",
    description: "Full-stack web application integrating computer vision and .NET for workplace organization management. Features user authentication, real-time data processing, and comprehensive dashboard for 3S methodology tracking.",
    category: "Full Stack",
    tags: ["ASP.NET Core", "Computer Vision", "React", "SQL Server", "Authentication"],
    link: "https://3s-citu.netlify.app/",
    status: "beta",
    featured: false,
  },
  {
    id: "barangay-api",
    title: "Barangay API",
    description: "RESTful API for managing barangay (community) information system built with ASP.NET Core and C#. Provides endpoints for citizen records, community announcements, and administrative data management.",
    category: "API Development",
    tags: ["ASP.NET Core", "C#", "REST API", "SQL Server"],
    github: "https://github.com/Raymart-Leyson/barangay-api",
    status: "beta",
    featured: false,
  },
  {
    id: "discussify-api",
    title: "Discussify API",
    description: "Interactive engagement API built with ASP.NET Core facilitating real-time communication between teachers and students. Supports discussion threads, announcements, and collaborative learning features.",
    category: "API Development",
    tags: ["ASP.NET Core", "C#", "REST API", "Education"],
    github: "https://github.com/Raymart-Leyson/discussify-api-project",
    status: "beta",
    featured: false,
  },
  {
    id: "pokemon-website",
    title: "Pokemon Website V1.0",
    description: "Interactive Pokemon starter selection website showcasing Pokemon details, stats, and characteristics. Built with React to demonstrate component-based architecture and state management.",
    category: "Web Development",
    tags: ["React", "JavaScript", "CSS", "API Integration"],
    github: "https://github.com/CITUCCS/csit341-react-exercise-2-Raymart-Leyson",
    status: "beta",
    featured: false,
  },
];

// Helper functions
export const getFeaturedProjects = () => 
  projectsData.filter(project => project.featured);

export const getProjectsByCategory = (category: string) =>
  projectsData.filter(project => project.category === category);

export const getLiveProjects = () =>
  projectsData.filter(project => project.status === "live");

export const getProjectById = (id: string) =>
  projectsData.find(project => project.id === id);

export const getAllCategories = () =>
  Array.from(new Set(projectsData.map(project => project.category)));

// Projects data
export const PROJECTS = [
  {
    id: 1,
    title: "Online Shoes Store",
    description: "A full-featured e-commerce platform for selling shoes online. Features include product catalog with filtering and search, shopping cart functionality, user authentication, payment integration, order management, and admin dashboard. Built with modern web technologies for a seamless shopping experience.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB"],
    image: "/images/project1.jpg",
    github: "https://github.com/username/ecommerce-platform",
    live: "https://ecommerce-demo.netlify.app",
    featured: true,
    category: "Full Stack"
  },
  {
    id: 2,
    title: "BMI Calculator",
    description: "A user-friendly web application to calculate Body Mass Index (BMI) with instant results. Features include height and weight input validation, BMI category classification, health recommendations based on results, responsive design for all devices, and ability to track BMI history. Built with clean UI/UX principles.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Firebase"],
    image: "/images/project2.jpg",
    github: "https://github.com/username/task-manager",
    live: "https://taskapp-demo.netlify.app",
    featured: true,
    category: "Frontend"
  },
  {
    id: 3,
    title: "Online Ticket Reservation",
    description: "A comprehensive booking system for reserving tickets for events, movies, or travel. Features include real-time seat/venue selection, user registration and authentication, secure payment processing, booking confirmation and tickets, admin panel for managing events and bookings, and email notifications. Built with secure transaction handling.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "PostgreSQL"],
    image: "/images/project3.jpg",
    github: "https://github.com/username/weather-dashboard",
    live: "https://weather-dash-demo.netlify.app",
    featured: false,
    category: "Full Stack"
  }
];

// Skills data
export const SKILLS = {
  frontend: [
    { name: "HTML/CSS", level: 85, category: "Frontend" },
    { name: "JavaScript", level: 75, category: "Frontend" },
    { name: "React", level: 70, category: "Frontend" },
    { name: "Bootstrap/Tailwind", level: 70, category: "Frontend" }
  ],
  backend: [
    { name: "Node.js", level: 65, category: "Backend" },
    { name: "Express", level: 60, category: "Backend" },
    { name: "MongoDB", level: 60, category: "Backend" },
    { name: "SQL (PostgreSQL/MySQL)", level: 60, category: "Backend" },
    { name: "Java (Basics)", level: 55, category: "Backend" }
  ],
  tools: [
    { name: "Git & GitHub", level: 80, category: "Tools" },
    { name: "VS Code", level: 85, category: "Tools" },
    { name: "Postman", level: 40, category: "Tools" },
    { name: "Firebase", level: 35, category: "Tools" },
    { name: "Netlify/Vercel", level: 40, category: "Tools" }
  ]
};

// Social links and contact information
export const SOCIAL_LINKS = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
  email: "surajbhai90043@gmail.com",
  phone: "702*****02"
};

// Navigation items
export const NAV_ITEMS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" }
];

// Resume data
export const RESUME_DATA = {
  experience: [
    {
      id: 1,
      position: "Fresher",
      company: "Full‑Stack Web Developer (Seeking Opportunities)",
      period: "2025 - Present",
      description: "Entry‑level developer with academic experience in full‑stack projects and a focus on clean, responsive web apps.",
      achievements: [
        "Built academic projects: Online Shoes Store, BMI Calculator, Online Ticket Reservation",
        "Strengthening skills in React, Node.js, and Java"
      ]
    }
  ],
  education: [
    {
      id: 1,
      degree: "B.Sc. Information Technology",
      institution: "University of Technology",
      period: "2022 - 2025",
      description: "Coursework focused on web development, data structures, and software engineering fundamentals."
    }
  ]
};

// Animation delays
export const ANIMATION_DELAYS = {
  short: 100,
  medium: 300,
  long: 500,
  veryLong: 800
};

// Breakpoints for responsive design
export const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  desktop: 1200
};
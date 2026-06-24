export const personalInfo = {
  name: "Naufal Bhanu",
  role: "Ngerjain apa yg bisa dikerjain",
  roleTexts: [
    "Udah sidang, belum wisuda",
    "Bismillah Komisaris",
    "Mau S2 tapi dimana nyak",
    "Asik dengan vibecode gini, cihuuy",
  ],
  tagline: "Building Digital Experiences That Matter",
  email: "naufalbhanu21@gmail.com",
  github: "https://github.com/nbhan21",
  linkedin: "https://linkedin.com/in/nbhanu21",
  instagram: "https://instagram.com/naufal.bhanu",
};

export const about = {
  bio: [
    [
      {
        text: "Saya adalah seorang developer yang passionate dalam menciptakan solusi digital yang inovatif dan berdampak.",
      },
    ],
    [
      { text: "Dengan pengalaman lebih dari 5 tahun", highlight: true },
      {
        text: " dalam pengembangan web, saya telah bekerja dengan berbagai teknologi modern untuk membangun aplikasi yang ",
      },
      { text: "scalable dan user-friendly.", highlight: true },
    ],
    [
      { text: "Saya percaya bahwa kode yang " },
      { text: "bersih dan well-structured", highlight: true },
      { text: " adalah kunci untuk " },
      { text: "maintainability jangka panjang", highlight: true },
      { text: "." },
    ],
  ],
  location: "Jakarta, Indonesia",
};

export interface SkillCategory {
  name: string;
  icon: string;
  skills: { name: string; icon: string }[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "TypeScript", icon: "📘" },
      { name: "Tailwind CSS", icon: "🎨" },
    ],
  },
  {
    name: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js", icon: "🟢" },
      { name: "Python", icon: "🐍" },
    ],
  },
  {
    name: "Database",
    icon: "🗄️",
    skills: [
      { name: "PostgreSQL", icon: "🐘" },
      { name: "MongoDB", icon: "🍃" },
    ],
  },
  {
    name: "DevOps",
    icon: "🚀",
    skills: [
      { name: "Docker", icon: "🐳" },
      { name: "AWS", icon: "☁️" },
    ],
  },
];

export const experiences = [
  {
    id: 1,
    company: "Tech Company ABC",
    role: "Senior Full-Stack Developer",
    period: "2023 - Sekarang",
    description:
      "Memimpin pengembangan aplikasi web skala enterprise dengan React dan Node.js.",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    id: 2,
    company: "Startup XYZ",
    role: "Frontend Developer",
    period: "2021 - 2023",
    description:
      "Membangun UI/UX yang responsif dan performa tinggi untuk platform SaaS.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 3,
    company: "Digital Agency",
    role: "Junior Developer",
    period: "2019 - 2021",
    description:
      "Mengembangkan website dan web application untuk berbagai klien.",
    technologies: ["React", "Vue.js", "PHP", "MySQL"],
  },
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Platform e-commerce lengkap dengan fitur pembayaran, manajemen produk, dan dashboard admin.",
    image: "/projects/ecommerce.jpg",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    demoUrl: "https://demo.example.com",
    repoUrl: "https://github.com/username/ecommerce",
    category: "Web App",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Aplikasi manajemen tugas kolaboratif dengan real-time updates dan notifikasi.",
    image: "/projects/taskapp.jpg",
    technologies: ["React", "Firebase", "Material UI"],
    demoUrl: "https://demo.example.com",
    repoUrl: "https://github.com/username/taskapp",
    category: "Web App",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "Dashboard cuaca interaktif dengan visualisasi data dan prediksi 7 hari ke depan.",
    image: "/projects/weather.jpg",
    technologies: ["Vue.js", "OpenWeather API", "Chart.js"],
    demoUrl: "https://demo.example.com",
    repoUrl: "https://github.com/username/weather",
    category: "API Integration",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "Website portfolio pribadi dengan scrollytelling animation dan design minimalis.",
    image: "/projects/portfolio.jpg",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
    demoUrl: "https://demo.example.com",
    repoUrl: "https://github.com/username/portfolio",
    category: "Personal",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

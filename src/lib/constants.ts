import { Github, Instagram, Linkedin } from "lucide-react";
import { FaShopify } from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiStrapi,
  SiNginx,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiGit,
  SiLinux,
  SiVercel,
  SiSupabase,
  SiPython,
  SiCplusplus,
  SiFirebase,
  SiClerk,
  SiGithub,
  SiCanva,
  SiUnrealengine,
  SiGnubash,
  SiFishshell,
  SiPm2,
  SiFigma,
  SiFramer,
  SiDocker,
  SiPostman,
  SiBlender,
} from "react-icons/si";

import { DiRuby } from "react-icons/di";

export const navLinks = [
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Blogs",
    url: "/blogs",
  },
  {
    name: "Projects",
    url: "/projects",
  },
  {
    name: "Skills",
    url: "/skills",
  },
  {
    name: "Contact",
    url: "/contact",
  },
];

export const socials = [
  {
    name: "Github",
    url: "https://github.sidlakhani.in/",
    logo: Github,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.sidlakhani.in/",
    logo: Linkedin,
  },
  {
    name: "Instagram",
    url: "https://instagram.sidlakhani.in/",
    logo: Instagram,
  },
];

export const projects = [
  {
    title:"DWM Dots",
    description:"A minimal and customized configuration for my riced Arch Linux using the Dynamic Window Manager (DWM) and the Suckless toolset.",
    image: "/projects/dwm-dots.png",
    website: null,
    github: "https://github.com/sid-lakhani/dwm-dots",
  },
  {
    title: "Label Jui Lakhani",
    description:
      "A luxury fashion brand showcase website, self-hosted on a VPS with Nginx and Strapi CMS. Built for seamless content management and optimized performance.",
    image: "/projects/labeljuilakhani.png",
    website: "https://labeljuilakhani.in",
    github: null,
  },
  {
    title:"VaultX",
    description:"A full-stack secure storage platform that proves encrypted cloud storage, searchable data, and tamper-proof auditing can live under one roof. Built with FastAPI, Next.js, and PostgreSQL, the system handles all encryption and verification internally — no external key managers, no third-party crypto.",
    image: "/projects/vaultx.png",
    website: null,
    github: "https://github.com/sid-lakhani/vaultx",
  },
  {
    title: "StockWise",
    description:
      "A stock market dashboard showcasing UI/UX design for portfolio management and trading. Built with Next.js, but live stock data is not fully functional.",
    image: "/projects/stockwise.svg",
    website: "https://stockwise.sidlakhani.in",
    github: "https://github.com/sid-lakhani/StockWise",
  },
  {
    title: "Facial Emotion Recognition",
    description:
      "A machine learning project that detects facial expressions using OpenCV, Haar cascades, and the FER-2013 dataset. Implements CNN classification for real-time emotion analysis.",
    image: "/projects/fer.png",
    website: null,
    github: "https://github.com/sid-lakhani/fer-ml",
  },
  {
    title: "Auto-Selfie",
    description:
      "An AI-powered tool that automatically captures selfies when it detects a smile using computer vision. Built with OpenCV, it ensures hands-free, real-time photo capture based on facial emotion recognition.",
    image: "/projects/auto-selfie.png",
    website: null,
    github: "https://github.com/sid-lakhani/Auto-Selfie",
  },
];

export const skills = {
  frontend: [
    { name: "Next.js", icon: SiNextdotjs },
    { name: "React", icon: SiReact },
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "CSS3", icon: SiCss3 },
    { name: "HTML5", icon: SiHtml5 },
    { name: "Framer Motion", icon: SiFramer },
  ],
  backend: [
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Python", icon: SiPython },
    { name: "C++", icon: SiCplusplus },
    { name: "Docker", icon: SiDocker },
    { name: "Firebase", icon: SiFirebase },
    { name: "Supabase", icon: SiSupabase },
    { name: "Ruby", icon: DiRuby}
  ],
  devops: [
    { name: "Nginx", icon: SiNginx },
    { name: "Linux", icon: SiLinux },
    { name: "Bash", icon: SiGnubash },
    { name: "Fish", icon: SiFishshell }, 
    { name: "PM2", icon: SiPm2 }, 
  ],
  tools: [
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "Vercel", icon: SiVercel },
    { name: "Postman", icon: SiPostman }, 
    { name: "Clerk", icon: SiClerk },
    { name: "Strapi", icon: SiStrapi },
  ],
  misc: [
    { name: "Canva", icon: SiCanva },
    { name: "Unreal Engine", icon: SiUnrealengine },
    { name: "Blender", icon: SiBlender },
    { name: "Figma", icon: SiFigma },
    { name: "Shopify", icon: FaShopify },
  ],
};

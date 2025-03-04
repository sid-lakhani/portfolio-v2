import { Github, Instagram, Linkedin } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiStrapi,
  SiNginx, SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiGit, SiLinux,
  SiVercel,
  SiSupabase, SiPython,
  SiCplusplus,
  SiFirebase,
  SiClerk,
  SiGithub,
  SiCanva,
  SiUnrealengine
} from "react-icons/si";

export const navLinks = [
  {
    name: "About",
    url: "/about",
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
    url: "https://github.com/sid-lakhani",
    logo: Github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/siddhesh-lakhani/",
    logo: Linkedin,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/sidlakhani_/",
    logo: Instagram,
  },
];

export const projects = [
  {
    title: "Label Jui Lakhani",
    description:
      "A luxury fashion brand showcase website, self-hosted on a VPS with Nginx and Strapi CMS. Built for seamless content management and optimized performance.",
    image: "/projects/labeljuilakhani.png",
    website: "https://labeljuilakhani.in",
    github: null,
  },
  {
    title: "StockWise",
    description:
      "A stock market dashboard showcasing UI/UX design for portfolio management and trading. Built with Next.js, but live stock data is not fully functional.",
    image: "/projects/stockwise.svg",
    website: "https://stockwise.sidlakhani.tech",
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
    title: "TaskCanvas",
    description:
      "A minimalist task management web app for adding, deleting, and marking tasks as complete. Built with a clean UI for efficient productivity tracking.",
    image: "/projects/TaskCanvas.jpg",
    website: "https://taskcanvas.sidlakhani.tech",
    github: "https://github.com/sid-lakhani/TaskCanvas-Hackathon",
  },
];

export const skills = {
  frontend: [
    { name: "Next.js", icon: SiNextdotjs, link: "https://nextjs.org/" },
    { name: "React", icon: SiReact, link: "https://react.dev/" },
    { name: "JavaScript", icon: SiJavascript, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "TypeScript", icon: SiTypescript, link: "https://www.typescriptlang.org/" },
    { name: "Tailwind CSS", icon: SiTailwindcss, link: "https://tailwindcss.com/" },
    { name: "CSS3", icon: SiCss3, link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "HTML5", icon: SiHtml5, link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  ],
  backend: [
    { name: "PostgreSQL", icon: SiPostgresql, link: "https://www.postgresql.org/" },
    { name: "Strapi", icon: SiStrapi, link: "https://strapi.io/" },
    { name: "Python", icon: SiPython, link: "https://www.python.org/" },
    { name: "C++", icon: SiCplusplus, link: "https://isocpp.org/" },
    { name: "Firebase", icon: SiFirebase, link: "https://firebase.google.com/" },
    { name: "Clerk", icon: SiClerk, link: "https://clerk.dev/" },
    { name: "Supabase", icon: SiSupabase, link: "https://supabase.com/" },
  ],
  devops: [
    { name: "Nginx", icon: SiNginx, link: "https://www.nginx.com/" },
    { name: "Linux", icon: SiLinux, link: "https://www.linux.org/" },
  ],
  tools: [
    { name: "Git", icon: SiGit, link: "https://git-scm.com/" },
    { name: "GitHub", icon: SiGithub, link: "https://github.com/" },
    { name: "Vercel", icon: SiVercel, link: "https://vercel.com/" },
  ],
  misc: [
    { name: "Canva", icon: SiCanva, link: "https://www.canva.com/" },
    { name: "Unreal Engine", icon: SiUnrealengine, link: "https://www.unrealengine.com/" },
  ],
};

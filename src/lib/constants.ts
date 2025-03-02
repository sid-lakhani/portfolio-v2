import { Github, Instagram, Linkedin } from "lucide-react";

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
  

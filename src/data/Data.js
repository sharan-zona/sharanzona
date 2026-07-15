import {
  SiPython,
  SiHtml5,
  SiCss as SiCss3,
  SiJavascript,
  SiReact,
} from "react-icons/si";

import awsImg from "../assets/certificates/aws.png";
import cicdImg from "../assets/certificates/cicd.png";
import uiuxImg from "../assets/certificates/uiux.png";

export const NAME = "Sharan Zona I";

export const ROLES = [
  "Aspiring Full-Stack Developer",
  "Final-Year IT Student",
];

export const GITHUB_URL = "https://github.com/sharan-zona";

export const LINKEDIN_URL =
  "https://www.linkedin.com/in/sharan-zona-i/";

export const EMAIL = "sharanzona@gmail.com";

export const PROJECTS = [
  {
    n: "01",
    name: "Personal Portfolio",
    desc: "A responsive portfolio website showcasing my projects, skills, education, and certifications with a modern UI built using React.",
    stack: ["React", "CSS", "JavaScript"],
    link: "https://github.com/sharan-zona/sharanzona",
  },
  {
    n: "02",
    name: "Travel Planner",
    desc: "A travel planning website that helps users explore destinations, organize trips, and view travel information through a clean and responsive interface.",
    stack: ["HTML", "CSS"],
    link: "https://github.com/sharan-zona/Travel-planner",
  },
];

export const CERTIFICATIONS = [
  {
    title: "CI/CD for Beginners",
    issuer: "Simplilearn",
    year: "2026",
    image: cicdImg,
    pdf: "/certifications/cicd.pdf",
  },
  {
    title: "AWS network Basics",
    issuer: "Simplilearn",
    year: "2025",
    image: awsImg,
    pdf: "/certifications/aws.pdf",
  },
  {
    title: "UI/UX for Beginners",
    issuer: "Simplilearn",
    year: "2026",
    image: uiuxImg,
    pdf: "/certifications/uiux.pdf",
  },
];

export const SKILLS = [
  { icon: SiPython, label: "Python" },
  { icon: SiHtml5, label: "HTML" },
  { icon: SiCss3, label: "CSS" },
  { icon: SiJavascript, label: "JavaScript" },
  { icon: SiReact, label: "React" },
];
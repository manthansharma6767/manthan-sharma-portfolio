import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";

export const SOCIALS = [
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/manthansharma6767",
  },
  {
    name: "Linkedin",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/manthan-sharma-2185ba378/",
  },
  {
    name: "X",
    icon: FaXTwitter,
    link: "https://x.com/MANTHAN66538229",
  },
  {
    name: "LeetCode",
    icon: SiLeetcode,
    link: "https://leetcode.com/u/manthansharma795/",
  },
] as const;

export const SKILL_CATEGORIES = [
  {
    title: "Languages & Core",
    skills: [
      { skill_name: "Java", src: "java.svg" },
      { skill_name: "Python", src: "python.svg" },
      { skill_name: "JavaScript", src: "javascript.svg" },
      { skill_name: "C++", src: "cplusplus.svg" },
      { skill_name: "SQL", src: "sql.svg" },
      { skill_name: "HTML5", src: "html5.svg" },
      { skill_name: "CSS3", src: "css3.svg" },
    ],
  },
  {
    title: "Backend & Security",
    skills: [
      { skill_name: "Spring Boot", src: "spring.svg" },
      { skill_name: "Spring Security", src: "springsecurity.svg" },
      { skill_name: "Hibernate / JPA", src: "hibernate.svg" },
      { skill_name: "REST APIs", src: "openapi.svg" },
      { skill_name: "WebSockets", src: "websocket.svg" },
      { skill_name: "JWT", src: "jwt.svg" },
      { skill_name: "Microservices", src: "microservices.svg" },
    ],
  },
  {
    title: "Frontend & Web",
    skills: [
      { skill_name: "React", src: "react.svg" },
      { skill_name: "Vite", src: "vite.svg" },
      { skill_name: "Material UI", src: "materialui.svg" },
      { skill_name: "Tailwind CSS", src: "tailwindcss.svg" },
      { skill_name: "Appwrite", src: "appwrite.svg" },
    ],
  },
  {
    title: "ML & Data Science",
    skills: [
      { skill_name: "Scikit-Learn", src: "scikitlearn.svg" },
      { skill_name: "Pandas", src: "pandas.svg" },
      { skill_name: "NumPy", src: "numpy.svg" },
      { skill_name: "SciPy", src: "scipy.svg" },
      { skill_name: "Streamlit", src: "streamlit.svg" },
    ],
  },
  {
    title: "Databases, DevOps & Tools",
    skills: [
      { skill_name: "MySQL", src: "mysql.svg" },
      { skill_name: "PostgreSQL", src: "postgresql.svg" },
      { skill_name: "Flyway", src: "flyway.svg" },
      { skill_name: "Maven", src: "maven.svg" },
      { skill_name: "Docker", src: "docker.svg" },
      { skill_name: "Git", src: "git.svg" },
      { skill_name: "Postman", src: "postman.svg" },
      { skill_name: "Swagger", src: "swagger.svg" },
    ],
  },
] as const;

export const PROJECTS = [
  {
    title: "Campus Exam Scheduler",
    description:
      "A full-stack university examination platform managing timetables, seating plans, and absentee paper workflows. Built with Java 17, Spring Boot, React 19, and MySQL, featuring stateless JWT authentication, timetable PDF import with OCR (Tesseract / PDFBox), Flyway migrations, and iCalendar exports.",
    image: "/projects/manthan-project-1.png",
    link: "https://github.com/manthansharma6767/campus-exam-scheduler",
  },
  {
    title: "RentLoop (RentKart)",
    description:
      "A peer-to-peer rental marketplace built for the university community. Features an end-to-end booking lifecycle, real-time messaging over WebSockets (STOMP), item availability search, ratings and reviews, and administrative dashboards — powered by Spring Boot and React.",
    image: "/projects/manthan-project-2.png",
    link: "https://github.com/manthansharma6767/RentKart",
  },
  {
    title: "GateKeeper — Smart API Gateway",
    description:
      "A distributed microservices API gateway providing a unified client entry point, intelligent reverse-proxy request routing, and centralized monitoring. Comprises modular services including smart-gateway-service, api-management-service, and an integrated analytics-service.",
    image: "/projects/manthan-project-3.png",
    link: "https://github.com/manthansharma6767/GateKeeper",
  },
  {
    title: "Sleep Apnea Prediction System",
    description:
      "A machine learning healthcare project analyzing Polysomnography (PSG) signals to predict the Apnea-Hypopnea Index (AHI) and classify severity levels. Employs Random Forest regressors, SVM classifiers, and signal processing (MNE, SciPy), packaged into an interactive Streamlit app.",
    image: "/projects/manthan-project-4.png",
    link: "https://github.com/manthansharma6767/Sleep-Disorder",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Connect with me",
    data: [
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/manthan-sharma-2185ba378/",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/manthansharma6767",
      },
      {
        name: "X",
        icon: FaXTwitter,
        link: "https://x.com/MANTHAN66538229",
      },
      {
        name: "LeetCode",
        icon: SiLeetcode,
        link: "https://leetcode.com/u/manthansharma795/",
      },
      {
        name: "manthansharma795@gmail.com",
        icon: null,
        link: "mailto:manthansharma795@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

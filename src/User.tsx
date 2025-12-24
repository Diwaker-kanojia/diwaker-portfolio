import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLeetcode,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";

const Info = {
  name: "Diwaker Kanojia",
  stack: [
    "Software Developer",
    "Full Stack Web Developer",
    "Problem Solver",
    "React Developer",
    "UI Designer",
    "Mern Developer",
  ],
  bio: "I'm a passionate software developer specialized in crafting efficient and scalable solutions, deliver top-notch web applications, and provide freelance services that exceed client expectations. Let's connect and create something amazing together!",
};

const ProjectInfo = [
  {
    title: "Crypto Tracker",
    desc: "CryptoTracker is a modern, fully responsive cryptocurrency tracking platform built using React and Tailwind CSS, designed to deliver real-time insights into the digital currency market. It allows users to explore, compare, and analyze various cryptocurrencies through an intuitive and visually appealing interface. The platform features a Compare Page where users can evaluate two coins side by side, and a Single Coin Page that provides detailed information, including current prices, market trends, and historical data. With powerful search functionality and clean navigation, users can easily find specific coins and track their performance. CryptoTracker combines speed, accuracy, and elegant design to offer a seamless experience for crypto enthusiasts, traders, and investors alike.",
    image: "Crypto.png",
    live: true,
    technologies: [
      "React",
      "Tailwind",
      "Chartjs",
      "Framer Motion",
      "Axios",
      "Material UI",
      "React Toast",
    ],
    link: "https://crypto-tracker-ruddy-one.vercel.app/",
    github: "https://github.com/diwaker-kanojia/crypto-tracker/",
  },
  {
    title: "Nike Store",
    desc: "Nike Store is a modern, fully responsive e-commerce web application built using React JS, Tailwind CSS, and Redux Toolkit for efficient state and cart management. Inspired by Nike’s iconic design language, the platform delivers a smooth, engaging, and performance-optimized shopping experience through dynamic product listings, detailed product pages, and interactive carousels powered by SplideJS. Users can easily add or remove items from the cart, adjust quantities, and view real-time updates managed by Redux Toolkit, while React Hot Toast provides stylish notifications, Heroicons enhance the UI with modern icons, and Lodash ensures optimized data handling. Designed with a strong focus on responsiveness and usability, Nike Store combines elegant design with robust functionality to offer a seamless and enjoyable online shopping experience across all devices.",
    image: "Nike.png",
    live: true,
    technologies: [
      "React",
      "Redux",
      "Tailwind",
      "React Hot Toast",
      "Heroro-Icons",
      "Splide js",
    ],
    link: "https://nike-store-ruby-one.vercel.app/",
    github: "https://github.com/Diwaker-kanojia/Nike-Store",
  },
  {
    title: "News & Blog",
    desc: "News & Blog App is a fully responsive web application built using React 19, Tailwind CSS 4, and Vite, designed to provide a fast and interactive reading experience. It allows users to explore the latest news, trending stories, and blog posts through a clean and intuitive interface. The app includes category-based filtering to view preferred topics and lets users save articles for later reading. It also integrates Calendar and Weather APIs to keep users updated with current conditions and manage their reading schedule. Powered by Axios for real-time data fetching and ESLint for clean, optimized code, News & Blog App ensures smooth performance, scalability, and a seamless experience across all devices.",
    image: "News&Blog.png",
    live: true,
    technologies: ["React", "Tailwind", "Axios", "Weather API", "News API"],
    link: "https://new-blog-azure-six.vercel.app/",
    github: "https://github.com/Diwaker-kanojia/news-blog",
  },
  {
    title: "Admin Dashboard",
    desc: "Admin Dashboard is a sleek, fully responsive multi-page web application built with React JS, Tailwind CSS 4, and Vite, offering advanced tools for real-time data visualization and management. It features a modern, intuitive UI with fluid Framer Motion animations and seamless routing powered by React Router DOM.The dashboard includes essential modules like Overview, Analytics, Users, Products, and Settings, enabling administrators to monitor KPIs, manage data, and track performance efficiently. Interactive visualizations powered by Recharts provide insightful analytics, while Lucide React Icons enhance the interface with a clean, professional aesthetic.",
    image: "Dashboard.png",
    live: true,
    technologies: ["React", "Tailwind", "Chartjs", "Express", "Bootstrap"],
    link: "https://admin-dashboard-iota-three-20.vercel.app/",
    github: "https://github.com/Diwaker-kanojia/AdminDashboard",
  },
  {
    title: "Weatherio",
    desc: "Weatherio Dashboard is a modern and responsive web application built using HTML, CSS, and JavaScript, providing real-time weather updates powered by the OpenWeather API. It displays current conditions, a 5-day forecast, and detailed insights like air quality, humidity, and wind speed. Users can search for any city to view accurate, location-based weather data. With a clean, intuitive interface and dynamic visuals that change based on conditions, the Weather Dashboard offers a fast, engaging, and informative way to stay updated on the weather anytime, anywhere.",
    image: "Weatherio.png",
    live: true,
    technologies: ["HTML", "CSS", "JavaScript", "API"],
    link: "https://weatherio-diwaker.netlify.app/",
    github: "https://github.com/Diwaker-kanojia/weatherio",
  },
  {
    title: "Spylt",
    desc: "SPYLT Clone is a modern, interactive web application built using React, Tailwind CSS, and GSAP, designed to replicate the dynamic and engaging experience of the original SPYLT website. It showcases high-protein, caffeinated milk products with vibrant visuals, animated hero sections, and interactive product cards. Users can explore different flavors, view detailed product information, and experience smooth scroll-based animations for an immersive browsing experience. With a clean, responsive design and lively interface, the SPYLT Clone delivers an engaging and realistic way to experience the brand’s energy and style online.",
    image: "Spylt.png",
    live: true,
    technologies: ["React", "Tailwind", "Gsap"],
    link: "https://spylt-chi.vercel.app/",
    github: "https://github.com/Diwaker-kanojia/Spylt",
  },
];

const SkillInfo = [
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "SASS",
      "JavaScript",
      "React JS",
      "Jquery",
      // "Angular",
      "Redux",
      "Tailwind CSS",
      "GSAP",
      // "Material UI",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    skills: [
      // "Springboot",
      "Node JS",
      "Express JS",
      "MySQL",
      "MongoDB",
      "Firebase",
      // "PostgresSQL",
    ],
  },
  {
    title: "Languages",
    skills: ["C", "C++", "Java", "JavaScript", "TypeScript"],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "Github",
      "VS Code",
      "Intellij",
      "Postman",
      "MongoDB Compass",
      // "Spring Tool Suite",
    ],
  },
];
const socialLinks = [
  {
    link: "https://github.com/diwaker-kanojia",
    icon: IconBrandGithub,
  },
  {
    link: "https://www.linkedin.com/in/diwaker-kanojia-490585254",
    icon: IconBrandLinkedin,
  },
  {
    link: "https://www.instagram.com/diwaker_k_17",
    icon: IconBrandInstagram,
  },
  {
    link: "https://x.com/Diwaker_Kanojia",
    icon: IconBrandX,
  },
  {
    link: "https://leetcode.com/u/Diwaker123/",
    icon: IconBrandLeetcode,
  },
];

const ExperienceInfo = [
  {
    role: "Front-end Intern",
    company: "Cetpa",
    date: "July 2025 - Present",
    desc: "I led frontend development using React and JavaScript, building dynamic, responsive, and user-friendly interfaces. I optimized performance by enhancing UI efficiency and integrating with backend services through RESTful APIs. Collaborating in agile teams, I drove innovative designs and seamless user experiences for high-quality web applications.",
    skills: [
      "React JS",
      "JavaScript",
      "FrontEnd",
      "Java",
    ],
  },
];

const Slugs = [
  "typescript",
  "spring",
  "javascript",
  "dart",
  "java",
  "react",
  "angular",
  "flutter",
  "android",
  "html5",
  "css3",
  "springboot",
  "mongodb",
  "selenium",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "mysql",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];
export { Info, ProjectInfo, socialLinks, SkillInfo, ExperienceInfo, Slugs };

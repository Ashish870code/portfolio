import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  java,
  html,
  css,
  reactjs,
  php,
  tailwind,
  nodejs,
  mongodb,
  git,
  laravel,
  docker,
  cetpa,
  techprolabz,
  chess,
  chatApplication,
  threejs,
  piehost,
  financialApi,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "PHP Developer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "WordPress",
    icon: creator,
  },
  {
    title: "Java ",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "laravel",
    icon: laravel,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Android Developer Intern",
    company_name: "Cetpa Infotech",
    icon: cetpa,
    iconBg: "#E6DEDD",
    date: "June 2021 - August 2021",
    points: [
      "Developed and maintained Android application features using Java/Kotlin, focusing on clean UI and smooth user experience.",
      "Integrated REST APIs for dynamic data fetching and implemented error handling for reliable app performance.",
      "Optimized app performance by debugging issues, reducing load time, and improving responsiveness across devices.",
      "Collaborated with the development team using Git for version control and followed agile practices for timely feature delivery.",
    ],
  },
  {
    title: "Robotics Intern",
    company_name: "TechProLabz",
    icon: techprolabz,
    iconBg: "#FFFF",
    date: "June 2022 - August 2022",
    points: [
      "Built and tested basic robotic prototypes using sensors, motors, and microcontrollers to perform automated tasks.",
      "Implemented control logic and hardware interfacing to enable real-time movement and obstacle detection.",
      "Worked on circuit design, wiring, and troubleshooting to ensure stable and accurate robot performance.",
      "Collaborated on project planning, testing, and documentation while following iterative development and testing approaches.",
    ],
  },

  {
    title: "Full Stack Developer Intern",
    company_name: "Cetpa Infotech",
    icon: cetpa,
    iconBg: "#FFFF",
    date: "June 2024 - August 2024",
    points: [
      "Developed responsive web applications using modern frontend and backend technologies, ensuring clean UI and efficient functionality.",
      "Designed and integrated RESTful APIs for seamless data flow between client and server.",
      "Implemented database operations, authentication, and CRUD features to support dynamic application requirements.",
      "Used Git for version control and collaborated in an agile environment to deliver features and fix bugs efficiently.",
    ],
  },

  {
    title: "Software Developer Intern",
    company_name: "CodeBihar Technologies",
    icon: "",
    iconBg: "#FFFF",
    date: "January 2025 - December 2025",
    points: [
      "Developed and maintained web application modules using JavaScript, PHP, Wordpress and modern frameworks to deliver scalable features.",
      "Worked on REST API integration, debugging issues, and optimizing application performance for better user experience.",
      "Implemented database operations, form validations, and authentication to enhance application functionality.",
      "Collaborated with the team using Git, participated in code reviews, and followed agile practices for timely task completion.",
    ],
  },
];



const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Chess Game",
    description:
      "A fully playable 2-player local chess game built with React.Supports all basic chess rules including valid moves, pawn promotion, check & checkmate detection.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
    ],
    image: chess,
    source_code_link: "https://github.com/Ashish870code/React-chess-game",
  },
  {
    name: "Mini-Chat Application",
    description:
      "A full-stack real-time team chat application with user authentication, channels, online presence, and message history built using React, Node.js, Socker.IO, and MySQL.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
       {
        name: "Socket.IO",
        color: "pink-text-gradient",
      },
       {
        name: "Node.js",
        color: "orange-text-gradient",
      },
    ],
    image: chatApplication,
    source_code_link: "https://github.com/Ashish870code/mini-team-chat",
  },
  {
    name: "Piehost",
    description:
      "Developed and deployed multiple web-based utility tools using full-stack technologies.Focused on responsive UI, backend integration, and performance optimization.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Laravel",
        color: "pink-text-gradient",
      },
      {
        name: "Git",
        color: "orange-text-gradient",
      }
    ],
    image: piehost,
    source_code_link: "https://piehost.com/tools",
  },
  {
    name: "Financial Record API",
    description:
      "Developed a backend API for managing financial records with role-based access control, validation, and dashboard summary endpoints.",
    tags: [
      {
        name: "Blade",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "Laravel",
        color: "pink-text-gradient",
      },
      {
        name: "SQLite",
        color: "orange-text-gradient",
      }
    ],
    image: financialApi,
    source_code_link: "https://github.com/Ashish870code/Financial-records-api-laravel.git",
  }
];

export { services, technologies, experiences, testimonials, projects };

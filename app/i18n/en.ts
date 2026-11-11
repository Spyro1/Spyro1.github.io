import type { CvContent } from "~/types/cv";

export default {
  fullName: "Marton Szenes",
  meta: {
    title: "Marton Szenes - Software Engineer and Web Developer",
    description: "I produce quality projects with intelligent solutions and creativity",
    ogLocale: "en_US",
  },
  nav: {
    about: "about-me",
    experience: "experience",
    projects: "projects",
    skills: "skills",
    contact: "contacts",
    menu: "Menu",
    language: "Language",
  },
  hero: {
    title: [
      "I'm a ",
      { highlight: "software engineer" },
      " and a ",
      { highlight: "full-stack" },
      " web-developer",
    ],
    description: "I produce quality projects with intelligent solutions and creativity",
    status: "Learn | Build | Succeed",
    contactCta: "Contact ME =>",
    downloadCv: "Download CV",
    photoAlt: "Portrait of Marton Szenes",
  },
  quote: {
    text: "Time travel is hard. So is CSS grid.",
    author: "Doctor Who",
  },
  about: {
    heading: "about-me",
    paragraphs: [
      "I am a dedicated and logic-oriented computer science student currently in my third year at Budapest University of Technology and Economics (BME), pursuing a Bachelor's degree in Computer Science Engineering.",
      "I have a genuine passion for dissecting intricate problems, spending hours pondering complex challenges that push my intellectual limits. Although these endeavors can be mentally demanding, the thrill of arriving at an elegant solution is incredibly rewarding.",
      "My academic and project experiences have sharpened my skills in software engineering, project management, and both frontend and backend web development. I believe in continuous learning and staying updated with the latest technologies and best practices to further expand my skills.",
    ],
    stats: {
      yearsCoding: "Years Coding",
      projectsCompleted: "Projects Completed",
      technologies: "Technologies",
    },
    studying: { label: "Currently Studying", detail: "BME Computer Science" },
  },
  experience: {
    heading: "experience",
    items: [
      {
        period: "2025 - Present",
        title: "Full-Stack Software Engineer",
        place: "Evosoft Hungary Kft.",
        description:
          "Working on large micro-service architecture projects as a full-stack developer. My main responsibilities include developing and maintaining backend services in C# .NET, implementing new features, fixing bugs and optimizing existing code, as well as upgrading the UI and improving the user experience of our web applications.",
        tags: ["Full-Stack Development", "C# .NET", "Angular", "Scrum"],
      },
      {
        period: "2024 - Present",
        title: "Developer Team Member & Former DevTeam Leader",
        place: "KSZK BME",
        description:
          "As Developer Team Leader, I oversaw the software development lifecycle of internal services and community platforms within the dormitory's IT organization, including technical architecture planning, team and project management. Today I'm a Developer Team Member, contributing to projects such as the BecskasszaSCH 2 system, the BeleptetosCH frontend and the Levlista-service backend.",
        tags: ["Team Leadership", "Project Management", "Python FastAPI", "React TS"],
      },
    ],
  },
  education: {
    heading: "education",
    items: [
      {
        period: "2023 - Present",
        title: "Bachelor of Science in Computer Science Engineering",
        place: "Budapest University of Technology and Economics (BME)",
        description:
          "Currently in my third year of Software Engineering, focusing on new software techniques, data structures, and full-stack web development to deepen my knowledge in a wide range of areas.",
      },
    ],
  },
  projects: {
    heading: "projects",
    items: {
      levlista: {
        name: "Levlista-service",
        description:
          "A Python FastAPI backend service for managing Google Group mailing lists. It integrates into the AdminSCH micro-service architecture, providing REST API endpoints for list management, user subscriptions and administrative controls. With over 16,000 users relying on it, it is one of the most significant projects of my career so far.",
      },
      belepteto: {
        name: "BeleptetosCH",
        description:
          "Frontend development for an access control system in 2026, focused on clear interfaces, a consistent user experience and responsive layouts for everyday operational use.",
      },
      becskassza: {
        name: "BecskasszaSCH 2",
        description:
          "A comprehensive admin and transaction management system developed for KSZK BME. Features secure user authentication, financial transaction tracking, administrative dashboard, and real-time reporting capabilities. Built with Python Flask framework and PostgreSQL database.",
      },
      sprinkle: {
        name: "Automatic Sprinkle System",
        description:
          "An innovative IoT solution for automated garden irrigation. Features real-time clock scheduling, TFT display interface for easy configuration, soil moisture sensors for intelligent watering decisions, and weather-responsive controls.",
      },
      luxus: {
        name: "Luxusfinance",
        description:
          "A professional, responsive website designed for a financial expert. Features modern design principles, smooth user experience, contact forms with backend processing, and SEO optimization.",
      },
      basicLite: {
        name: "BASIC-lite Interpreter",
        description:
          "An interpreter for a simplified BASIC programming language built in C++. Features a complete CLI interface, expression evaluation, conditionals, loops, variable management and file I/O, with proper error handling and extensive unit tests.",
      },
    },
    links: { live: "Live =>", github: "Github =>", gitlab: "GitLab =>" },
  },
  skills: {
    heading: "skills",
    categories: {
      languages: "Programming Languages",
      web: "Web Technologies",
      frameworks: "Frameworks & Tools",
      other: "Databases & Other",
    },
    levels: { advanced: "Advanced", intermediate: "Intermediate", beginner: "Beginner" },
  },
  interests: {
    heading: "interests",
    items: [
      {
        title: "Problem Solving",
        description:
          "I love tackling complex algorithmic challenges and finding elegant solutions to difficult problems.",
      },
      {
        title: "Continuous Learning",
        description:
          "Always exploring new technologies, frameworks, and programming paradigms to stay current in the field.",
      },
      {
        title: "Hardware Projects",
        description:
          "Enjoy working with Arduino and embedded systems to create practical IoT solutions.",
      },
    ],
  },
  contact: {
    heading: "contacts",
    title: "Let's Work Together",
    description:
      "I'm always interested in new opportunities and exciting projects. If my background has piqued your interest, please feel free to contact me.",
    boxTitle: "Message me here",
  },
  footer: {
    description: "I'm a software engineer and a full-stack web-developer",
    links: "Links",
    copyright: (year) => `© Copyright ${year}. Made by Marton Szenes`,
  },
} satisfies CvContent;

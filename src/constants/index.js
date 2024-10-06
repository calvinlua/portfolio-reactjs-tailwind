// single source of truth, all the values on the website
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  hyundai,
  dsp,
  jks,
  boilermech,
  dindings,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Engineer",
    icon: web,
  },
  {
    title: "FullStack Developer",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name:
      "Hyundai Motor Innovation Center Singapore (HMGICS) Pte. Ltd.",
    icon: hyundai,
    iconBg: "#FFFFFF",
    date: "Feb 2023 - Present",

    points: [
      "Developed in-house applications for an integrated web portal with various use cases such as KPI, Inventory system, and others.",
      "Implemented Event Driven Micro-Architecture (EDMA) and Domain Driven Design pattern for application development.",
      "Followed MVC principles and test-driven development practices, strictly adhering to YAGNI coding standards to write clean, maintainable, and efficient code.",
      "Experienced in React and Vue for frontend, and Express.js, Spring Boot for backend.",
      "Applied Test Driven Development (TDD) practices using unit and integration test libraries such as Jest, React Testing Library, Cypress, and JUnit for comprehensive end-to-end testing to ensure application stability and quality.",
      "Experienced with TypeScript and applied TypeScript annotations when developing React applications.",
      "Created reusable common components with both functional and class components to ensure reusability and shorter development time in React.",
      "Experienced in using React Redux as a web store for React.",
      "Developed CI/CD pipelines by automating processes with coverage checks, Dockerizing applications, storing version images, and deploying to Kubernetes environments.",
      "Worked with databases such as PostgreSQL, OracleDB, MSSQL DB, and Tibero, and with database ORMs such as Prisma ORM and Sequelize.",
      "Experienced with container orchestration tools such as Docker, Minikube, and Rancher Kubernetes.",
      "Created Spring Boot (Java) backend applications and interfaced them with C# Unity.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "DSP Solutions Engineering Pte. Ltd.",
    icon: dsp,
    iconBg: "#FFFFFF",
    date: "May 2022 - Feb 2023",
    points: [
      "ByteDance Data Center Kidex Sedenak Project",
      "Provide consulting services on web applications for smart control systems.",
      "Experienced in React, Redux Toolkit Store, and Node.js for web applications.",
      "Experienced in Django, Flask, and Python for backend development.",
      "Implemented and deployed High Availability and Redundancy setups for MSSQL Database on servers across various sites.",
      "Worked with AWS Cloud, deploying Infrastructure as a Service (IaaS).",
      "Experienced with communication protocols such as WebSocket, ProtoBuf, gRPC, MQTT, REST, BACnet IP/MSTP, Modbus TCP/RTU, and OPC UA/OPC DA.",
    ],
  },
  {
    title: "R&D Software Engineer Lead",
    company_name: "JKS Engineering (M) Sdn Bhd",
    icon: jks,
    iconBg: "#FFFFFF",
    date: "May 2021 - May 2022",
    points: [
      "Created in-house application webpages using Node.js Express with React.",
      "Worked with React libraries such as Material UI (MUI), PrimeReact, and TailwindCSS.",
      "Experienced with databases like MongoDB, NoSQL, and phpMyAdmin.",
      "Developed a Python backend for a Vision System to monitor industrial machines for safety using OpenCV.",
      "Created a Python Flask application for multipart file upload and download, facilitating operational data analysis with Node.js backend rerouting.",
      "Developed Django applications for administrative HR systems to track employee data and manage account settlements.",
      "Wrote unit tests for backend APIs using coverage.py and assertions for Django backend.",
    ],
  },
  {
    title: "R&D Software Engineer (Part Time)",
    company_name: "JKS Engineering (M) Sdn Bhd",
    icon: jks,
    iconBg: "#FFFFFF",
    date: "May 2020 - May 2021",
    points: [
      "Assist in creating webpage for the company in React and Nodejs",
      "Work with mySQL and MariaDB databases with phpMyAdmin administrative tool",
      "Assisted in developing C# programs for both frontend and backend to interface with PLCs for cleaning progress interfaces on TwinCAT2",
      "Established file control and backup management system and deployed OwnCloud X for the company’s cloud storage server",
    ],
  },
  {
    title: "PLC Programmer (Internship) ",
    company_name: "JKS Engineering (M) Sdn. Bhd.",
    icon: jks,
    iconBg: "#FFFFFF",
    date: "Jan 2020 - Mar 2020",
    points: [
      "Developed industrial PLC programs using Structured Text and Ladder logic for cleaning machines.",
      "Created barcode reading functions with pointers to reduce code length.",
      "Developed function blocks to verify I/O connections to industrial PLCs for point-to-point wiring tests and flexible I/O address mapping, enabling swift Factory Acceptance Testing (FAT) and reducing machine production time dependencies.",
      "Developed and improved CSV read and write functions for Beckhoff TwinCAT3 programs.",
      "Experienced in programming Siemens, Omron, and Beckhoff PLCs.",
      "Created a function block to handle handshaking between primary and secondary PLCs, using index registers (pointers) to bypass Omron PLC limitations on array passing.",
      "Wrote High Pass Filter Alarm and Low Pass Filter Alarm function blocks using ladder logic and structured text.",
    ],
  },
  {
    title: "Assistant Engineering Consultant (Internship) ",
    company_name: "Boilermech Holdings Berhad Sdn. Bhd.",
    icon: boilermech,
    iconBg: "#FFFFFF",
    date: "Aug 2019 - Oct 2019",
    points: [
      "Involved in SolidWorks design and CAD simulation for a Rotary Drum Dryer for Oil Palm Empty Fruit Bunch (EFB), optimizing drying time with minimal power consumption within a fixed budget, space constraints, cost, and timeframe.",
      "Experienced in creating House of Quality planning, cost planning, and project timeline management with job rotation during the project period.",
      "Showcased various Rotary Drum designs in simulation software, comparing results to assess design model improvements with pros and cons for enhancing the existing Rotary Drum design.",
      "Performed physics simulations in Ansys and designed CAD models in SolidWorks 3D CAD.",
    ],
  },
  {
    title: "Maintanence Engineer (Internship) ",
    company_name: "Malayan Flour Mill - Dindings Poultry Sdn. Bhd.",
    icon: dindings,
    iconBg: "#FFFFFF",
    date: "Mar 2019 - May 2019",
    points: [
      "Involved primarily in maintenance tasks, including troubleshooting automated wrapper machines using industrial PLCs (MultiVAC) based on Beckhoff PLC.",
      "Developed daily maintenance checklists, Machine Startup and Shutdown SOPs, as well as Autonomous Maintenance (AM) and Preventive Maintenance (PM) for processed food operations.",
      "Recorded and improved production by reducing machine faults through Root Cause Analysis.",
      "Experienced in daily stock counts, inventory sorting, and manual inventory management for machine spare parts, as well as assisting with purchase orders and goods receipts for inventory stock.",
      "Created documents and conducted analyses for identifying and controlling potential safety hazards in the industrial plant using HIRARC (Hazard Identification, Risk Assessment, and Risk Control).",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };

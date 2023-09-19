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
  // {
  //   id: "contact",
  //   title: "Contact",
  // },
];

const services = [
  {
    title: "Fullstack Engineer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "IoT Engineer",
    icon: mobile,
  },
  {
    title: "PLC Engineer",
    icon: creator,
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
    title: "Maintanence Engineer",
    company_name: "Malayan Flour Mill - Dindings Poultry Sbn. Bhd.",
    icon: dindings,
    iconBg: "#FFFFFF",
    date: "Oct 2019 - Dec 2019",
    points: [
      "Internship",
      "Involved in Maintanence in smart machines with PLC (Multivac) . ",
      "Developed Root Cause Analysis, Standard Operating Procedure , Automous Maintanence (AM) and Preventive Maintanence(PM) .",
      "Create document and analyze possible safety precautions in plant with HIRARC (Hazard Identification, Risk Assessment and Risk Control) .",
      "Participating and improve overall Industrial 4.0 factories",
    ],
  },
  {
    title: "Assistant Engineering Consultant",
    company_name: "Boilermech Holdings Berhad",
    icon: boilermech,
    iconBg: "#FFFFFF",
    date: "Jan 2020 - Dec 2020",
    points: [
      "Part-time Engineer",
      "Draw Design 3D CAD Drawings to suit customer requirements - Fuel Drying System for 245000kg/hr of EFB and rotary dryer to reduce power consumption of boiler with a given budget, space constriction, cost of completion and timeframe of completion.",
      "Experiences of rotation job including planning of project timeline planning, create House Of Quality based on , Plan of Costing , design boiler with particle & stress test simulation and etc.",
      "Compare and showcase different design of Boiler structure with physics simulations program on effectiveness of design to produce palm oil supported with proof of simulation and physical test",
      "Improve company’s simulation on stress test on Boiler design with different simulation program like Solidworks , Ansys, Comsol Multiphysics and more",
    ],
  },
  {
    title: "R&D Automotion Software Engineer Lead",
    company_name: "JKS Engineering (M) Sdn Bhd",
    icon: jks,
    iconBg: "#FFFFFF",
    date: "Jun 2021 - May 2022",
    points: [
      "Design , Improvise and Developed PLC programs for various PLC Machine programs for company's multinational client like Amkor , Western Digital, Nexperia and many more. ",
      "Create dynamic test unit program for hardware IO testing with quick and fast deployment of PLC programs for other programmers and Factory Acceptance Test (FAT) ",
      "Provide CI/CD solutions with git and git actions for faster and reliable deployment for PLC programs ",
      "Create and establish Companys’s Cloud Storage Server OwnCloud X with Linux OS and migration of Company's OwnCloud Server",
    ],
  },
  {
    title: "SCADA Engineer",
    company_name: "DSP Solutions Engineering Pte. Ltd.",
    icon: dsp,
    iconBg: "#FFFFFF",
    date: "May 2022 - Feb 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "IoT Engineer",
    company_name: "Hyundai Motor Innovation Center Singapore(HMGICS) Pte. Ltd.",
    icon: hyundai,
    iconBg: "#FFFFFF",
    date: "Feb 2023 - Present",
    points: [
      "Developing and maintaining web applications using Vue.js, Node.js and Springboot Java , implementing responsive design and ensuring cross-browser compatibility for factory applications  ",
      "Handling Digital Factory Metaverse Backend ",
      "Design and maintain IoT communication protocol between hardware and application",
      "Play key role in company projects in unifying hardware and database into asset hierachy and Single Data Model.",
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

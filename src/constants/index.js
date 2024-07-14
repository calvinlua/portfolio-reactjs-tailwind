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
    title: "Frontend Engineer",
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
    title: "Full Stack Engineer",
    company_name: "Hyundai Motor Innovation Center Singapore(HMGICS) Pte. Ltd.",
    icon: hyundai,
    iconBg: "#FFFFFF",
    date: "Feb 2023 - Present",
    points: [
      "Strict and adhere with SOLID and YAGNI/DRY/KISS in coding principles.",
      "Experience in Vue, React, Java, Java Spring Boot framework, Node applications, and Python.",
      "Experience in both TypeScript and JavaScript.",
      "Experience with databases like PostgreSQL, Oracle DB, MySQL, MongoDB, Tibero, and others.",
      "Experience in dockerizing back-end and front-end applications and deployments in Kubernetes.",
      "Experience in Kafka, Zookeeper, and server deployments.",
      "Experience creating applications with React-Redux//Java Spring, React/Node, Vue/Java, and Vue/Node.",
      "Experience in creating authorization, logging, workflow, and endpoints for backend.",
      "Create web applications for automation as well as monitoring OT systems and bridging data between machines.",
      "Experience in dockerizing applications and deployment.",
      "Experience in Kubernetes, Docker for deployments.",
      "Experience in CI/CD pipelines.",
      "Proficient in Git and able to work efficiently with others. Have a good understanding of the importance of branching and merge requests.",
      "Participated in Hyundai Metaverse Project, creating backend applications with Java Spring Boot and interfacing with UNITY C# frontend.",
      "Experience in unit testing frameworks like Jest and others.",
    ],
  },
  {
    title: "Full Stack Engineer",
    company_name: "DSP Solutions Engineering Pte. Ltd.",
    icon: dsp,
    iconBg: "#FFFFFF",
    date: "May 2022 - Feb 2023",
    points: [
      "Building websites with Frontend - React.js and Backend - Node.js Express.",
      "Provide solutions for smart control systems.",
      "Mega Projects Involvement for Building Automation System (BMS) in NTU Singapore, NUS Singapore, Civil Service College Singapore, Geras Data Center Singapore, and Kidex Sedenak Malaysia Data Center.",
      "Experience in React, Redux Toolkit Store, and Node.js.",
      "Experience in Django, Flask, and Python.",
      "Have good understanding of Node.js and React.",
      "Work with AWS Cloud where Infrastructure is deployed as a Service (IaaS).",
      "Work with protocols like GRPC Protocols,  MQTT Communication, REST Architecture, BACnet IP and MSTP,  Modbus TCP and RTU,  OPCUA and OPCDA",
    ],
  },
  {
    title: "R&D Automation Software Engineer Lead",
    company_name: "JKS Engineering (M) Sdn Bhd",
    icon: jks,
    iconBg: "#FFFFFF",
    date: "Jun 2020 - May 2022",
    points: [
      "Researched on Web Protocols and intercommunication with OT controllers.",
      "Create template with Web Backend using Node for communications with OT controllers such as Siemens, Beckhoff, Omron, and Mitsubishi Industrial PLC.",
      "Experience in communications platform in RabbitMQ, MQTT, and Kafka for uncoupling systems and event-driven architecture communications.",
      "Researched on databases such as MongoDB, PostgreSQL, MSSQL, phpMyAdmin for its interoperability with OT Systems and Backend Systems.",
      "Create git CI/CD pipeline to GitHub Enterprise for source control and cooperation on OT and IT code.",
      "Work with React dashboarding library like Material UI (MUI) and PrimeReact.",
      "Experience in using Tailwind CSS for React.",
    ],
  },
  {
    title: "R&D Automation Software Engineer ",
    company_name: "JKS Engineering (M) Sdn Bhd",
    icon: jks,
    iconBg: "#FFFFFF",
    date: "Jun 2020 - May 2022",
    points: [
      "Developed PLC coding script with reduced coding size.",
      "Read barcode with max limit and full-time scan without need pressing.",
      "Compare barcode function with pointers to reduce script length.",
      "Developed Modbus Function Block Plug & Play (Hardcode with Allocated Words) with Omron PLC.",
      "Developed and improved write and read CSV function in Beckhoff TwinCAT3.",
      "Write High Pass Filter Alarm and Low Pass Filter Alarm with ladder and structure text.",
      "Create function block using Omron Index Register Handshaking FB to bypass Omron’s limitation on array passing in Function Block.",
      "Took part in multiple multinational projects that involved China, Thailand, and overseas companies like Nexperia China and Amsonic, implementing a more efficient code in the machine to increase company’s machine functionality.",
      "Developed and coded flexible FAT-oriented HMI Interface and PLC Program to reduce the lag time between departments to achieve greater overall company’s production time.",
      "Allow user to choose E-stop location and control servo motor on any machine model using Omron Controller in the company to take positioning on the machine.",
      "Create a plug-and-play FAT-oriented Omron PLC program and allow user to make changes on HMI machine to change the configuration of different addresses inside the controller via HMI.",
      "Improved company’s production time on producing machine and allow checking to be done with ease by non-programmer individuals for different departments before actual software is loaded on the machine in the final stage.",
      "Developed and explored Beckhoff TwinCAT3 (TC3) & Siemens Environment for the company.",
      "Established file control and file backup management system.",
      "Created and established Company’s Cloud Storage Server OwnCloud X.",
    ],
  },
  {
    title: "Assistant Engineering Consultant",
    company_name: "Boilermech Holdings Berhad",
    icon: boilermech,
    iconBg: "#FFFFFF",
    date: "Jan 2020 - Dec 2020",
    points: [
      "Internship",
      "Draw Design 3D CAD Drawings to suit customer requirements - Fuel Drying System for 245000kg/hr of EFB and rotary dryer to reduce power consumption of boiler with a given budget, space constriction, cost of completion and timeframe of completion.",
      "Experiences of rotation job including planning of project timeline planning, create House Of Quality based on , Plan of Costing , design boiler with particle & stress test simulation and etc.",
      "Compare and showcase different design of Boiler structure with physics simulations program on effectiveness of design to produce palm oil supported with proof of simulation and physical test",
      "Improve company’s simulation on stress test on Boiler design with different simulation program like Solidworks , Ansys, Comsol Multiphysics and more",
    ],
  },
  {
    title: "Maintanence Engineer",
    company_name: "Malayan Flour Mill - Dindings Poultry Sbn. Bhd.",
    icon: dindings,
    iconBg: "#FFFFFF",
    date: "Mar 2019 - Jun 2019",
    points: [
      "Internship",
      "Involved in Maintanence in smart machines with PLC (Multivac) . ",
      "Developed Root Cause Analysis, Standard Operating Procedure , Automous Maintanence (AM) and Preventive Maintanence(PM) .",
      "Create document and analyze possible safety precautions in plant with HIRARC (Hazard Identification, Risk Assessment and Risk Control) .",
      "Participating and improve overall Industrial 4.0 factories",
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

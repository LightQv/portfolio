import wildfest from "../assets/image/projects/wildfest.png";
import pokedex from "../assets/image/projects/pokedex.png";
import keskonregarde from "../assets/image/projects/keskonregarde.png";
import animalz from "../assets/image/projects/animalz.png";
import discovery from "../assets/image/projects/discovery.png";
import emmaus from "../assets/image/projects/emmaus.png";
import serenity from "../assets/image/projects/serenity.png";
import instagif from "../assets/image/projects/instagif.png";

export const skills = [
  {
    skill_id: 1,
    title: "Hard Skills",
    types: [
      {
        type_id: 1,
        category: "Development",
        content: [
          "React.js",
          "Node.js",
          "Express.js",
          "CSS",
          "Tailwind CSS",
          "JavaScript",
          "HTML",
          "mySQL",
          "Prisma",
        ],
      },
      {
        type_id: 2,
        category: "Design",
        content: [
          "Figma",
          "Adobe inDesign",
          "Adobe Photoshop",
          "Adobe Illustrator",
        ],
      },
    ],
  },
  {
    skill_id: 2,
    title: "Soft Skills",
    types: [
      {
        type_id: 3,
        category: "Personal skills",
        content: [
          "Curious",
          "Initiative",
          "Logical",
          "CSS",
          "Resilient",
          "Teamwork",
        ],
      },
      {
        type_id: 4,
        category: "Language",
        content: [
          "English (C1)",
          "French (Native)",
          "Spanish (B1)",
          "Japanese (A1)",
        ],
      },
    ],
  },
];

export const experiences = [
  {
    xp_id: 1,
    title: "Full-Stack Developer",
    references: [
      {
        ref_id: 1,
        name: "Serenity",
        description:
          "Website to support patients until their appointment to surgeries using React.js, Express.js, Tailwind CSS & mySQL.",
      },
      {
        ref_id: 2,
        name: "Hackathon (Regional Winner - National Finalist - 48h)",
        description:
          "Emmaüs-Connect internal price calculator using React.js, Express.js & mySQL.",
      },
      {
        ref_id: 3,
        name: "Keskonregarde ?",
        description:
          "Website to search for movies using React.js & Node.js with TMDB API.",
      },
      {
        ref_id: 4,
        name: "Hackathon (Winner - 24h)",
        description:
          "Meeting website for travelers using React.js, Node.js & Leaflet.",
      },
      {
        ref_id: 5,
        name: "Wild Festival",
        description:
          "Website for a fictive music event using HTML, CSS & JavaScript.",
      },
    ],
    location: "Wild Code School, Lyon",
    duration: "5 months, 2023",
  },
  {
    xp_id: 2,
    title: "Graphic Designer",
    references: [
      {
        ref_id: 6,
        name: null,
        description:
          "Analysis of the client's needs and of their sector of activity.",
      },
      {
        ref_id: 7,
        name: null,
        description:
          "Monitoring of current trends in order to offer appropriate communication and designs.",
      },
      {
        ref_id: 8,
        name: null,
        description:
          "Creation of adapted visual media: logo, posters, business cards, signs.",
      },
    ],
    location: "Lyon",
    duration: "2016-2020",
  },
  {
    xp_id: 3,
    title: "UX/UI Designer",
    references: [
      {
        ref_id: 9,
        name: "Collaboration on a student project",
        description:
          "Analysis of the player's expectations and the targeted market.",
      },
      {
        ref_id: 10,
        name: null,
        description: "Prototyping of different visual atmospheres.",
      },
      {
        ref_id: 11,
        name: null,
        description: "Implementation of graphic design.",
      },
      {
        ref_id: 12,
        name: null,
        description:
          "Creation of a HUD, title screen, menus and various minor elements.",
      },
    ],
    location: "Ariès School, Lyon",
    duration: "2 months, 2020",
  },
  {
    xp_id: 4,
    title: "Other",
    references: [
      {
        ref_id: 13,
        name: null,
        description:
          "During these years, I also held a position of Community Manager (Lush - Lyon Part Dieu, 12/2017 - 09/2019) as well as a position of storekeeper (Décathlon - St Quentin Fallavier, 06/2021 - 02/2022 ) and made a long-distance trip to South America (Mexico, Belize, Guatemala, Peru, February 2022 - June 2022).",
      },
    ],
    location: null,
    duration: null,
  },
];

export const educations = [
  {
    edu_id: 1,
    title: "Web Developer Full Stack",
    description:
      "Learning over a year in apprenticeship : React.js, Node.js, TypeScript, GraphQL, Docker, Flutter and React Native. (BAC+4 degree)",
    location: "Wild Code School, Remote",
    duration: "09/2023 - 09/2024",
  },
  {
    edu_id: 2,
    title: "Web Developer Bootcamp",
    description:
      "Learning over 700h, at full time with a teacher : HTML, CSS, JavaScript, React.js, Node.js, Express.js and mySQL. (BAC+2 degree)",
    location: "Wild Code School, Lyon",
    duration: "5 months, 2023",
  },
  {
    edu_id: 3,
    title: "BTS Graphic Design",
    description: "Double degree : BTS and a professional certification.",
    location: "École Presqu'Île, Lyon",
    duration: "2013 - 2016",
  },
  {
    edu_id: 4,
    title: "Baccalauréat STI2D ITEC",
    description: "Degree with honours.",
    location: "Lycée Galilée, Vienne",
    duration: "2011 - 2013",
  },
];

const projects = [
  {
    id: 1,
    name: "WildFest",
    img: wildfest,
    description:
      "is a website for a music festival that allow the users to check every different artists and prices.",
    language: ["HTML", "CSS", "JavaScript"],
    deployed: "gh-pages",
    code_source: "https://github.com/LightQv/Wild-Festival",
    demo_link:
      "https://wildcodeschool.github.io/2023-02-JS-FT-Lyon-P1-BrainForge/index.html",
  },
  {
    id: 2,
    name: "Pokedex",
    img: pokedex,
    description: "is an app which lists every Pokemon's datas sorted by areas.",
    language: ["React.js", "CSS", "Node.js"],
    deployed: "gh-pages",
    code_source: "https://github.com/LightQv/pokedex",
    demo_link: "https://lightqv.github.io/pokedex/",
  },
  {
    id: 3,
    name: "Keskonregarde ?",
    img: keskonregarde,
    description:
      "is a search website that aim to help the users to find a movie to watch.",
    language: ["React.js", "CSS", "Node.js"],
    deployed: "Netlify",
    code_source: "https://github.com/LightQv/keskonregarde",
    demo_link: "https://lightqv-keskonregarde.netlify.app/",
  },
  {
    id: 4,
    name: "Animalz",
    img: animalz,
    description:
      "is a meeting app that help travelers to find a partner. Hackathon 24h.",
    language: ["React.js", "CSS", "Node.js"],
    deployed: null,
    code_source: "https://github.com/LightQv/animalz",
    demo_link: null,
  },
  {
    id: 5,
    name: "Discovery",
    img: discovery,
    description:
      "is a Spotify client to center the most usefull datas from the user's account.",
    language: ["React.js", "Tailwind CSS", "Express.js"],
    deployed: null,
    code_source: "https://github.com/LightQv/discovery",
    demo_link: null,
  },
  {
    id: 6,
    name: "Emmaüs-Connect",
    img: emmaus,
    description:
      "is a website builded for Emmaüs volunteers to help them calculate smartphone's prices. Hackathon 48h.",
    language: ["React.js", "Express.js", "mySQL"],
    deployed: null,
    code_source: "https://github.com/LightQv/hackathon_emmaus_connect",
    demo_link: null,
  },
  {
    id: 7,
    name: "Serenity",
    img: serenity,
    description:
      "is a website to support patients until their appointment to surgeries.",
    language: ["React.js", "Tailwind CSS", "Express.js", "mySQL"],
    deployed: null,
    code_source: "https://github.com/LightQv/serenity",
    demo_link: null,
  },
  {
    id: 8,
    name: "Instagif",
    img: instagif,
    description: "is a GIPHY's based Social App.",
    language: ["React.js", "Tailwind CSS", "Express.js", "Prisma"],
    deployed: null,
    code_source: "https://github.com/LightQv/instagif",
    demo_link: null,
  },
];

export default projects;

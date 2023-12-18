import wildfest from "../assets/image/projects/wildfest.png";
import wildfestDesktop from "../assets/image/projects/wildfest_desktop.png";
import pokedex from "../assets/image/projects/pokedex.png";
import pokedexDesktop from "../assets/image/projects/pokedex_desktop.png";
import discovery from "../assets/image/projects/discovery.png";
import discoveryDesktop from "../assets/image/projects/discovery_desktop.png";
import serenity from "../assets/image/projects/serenity.png";
import serenityDesktop from "../assets/image/projects/serenity_desktop.png";
import instagif from "../assets/image/projects/instagif.png";
import instagifDesktop from "../assets/image/projects/instagif_desktop.png";
import wdiwt from "../assets/image/projects/wdiwt.png";
import wdiwtDesktop from "../assets/image/projects/wdiwt_desktop.png";

export const skills = [
  {
    title: "Hard Skills",
    content: [
      "React.js",
      "Node.js",
      "Express.js",
      "CSS",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
      "HTML",
      "mySQL",
      "Prisma",
      "Firebase",
    ],
  },
];

export const links = [
  {
    github: "https://github.com/LightQv",
    linkedin: "https://www.linkedin.com/in/vivianquerenet/",
    resume:
      "https://drive.google.com/file/d/1om2jSjWNoAydE_xOrhKy3ATcY4kjtfzz/view?usp=sharing",
  },
];

const projects = [
  {
    id: 1,
    name: "WildFest",
    img: [{ mobile: wildfest, desktop: wildfestDesktop }],
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
    img: [{ mobile: pokedex, desktop: pokedexDesktop }],
    description: "is an app which lists every Pokemon's datas sorted by areas.",
    language: ["React.js", "CSS", "Node.js"],
    deployed: "gh-pages",
    code_source: "https://github.com/LightQv/pokedex",
    demo_link: "https://pokedex.vivianquerenet.com",
  },
  {
    id: 3,
    name: "Discovery",
    img: [{ mobile: discovery, desktop: discoveryDesktop }],
    description:
      "is a Spotify client to center the most usefull datas from the user's account.",
    language: ["React.js", "Tailwind CSS", "Express.js"],
    deployed: null,
    code_source: "https://github.com/LightQv/discovery",
    demo_link: "https://discovery.vivianquerenet.com",
  },
  {
    id: 4,
    name: "Serenity",
    img: [{ mobile: serenity, desktop: serenityDesktop }],
    description:
      "is a website to support patients until their appointment to surgeries.",
    language: ["React.js", "Tailwind CSS", "Express.js", "mySQL"],
    deployed: null,
    code_source: "https://github.com/LightQv/serenity",
    demo_link: null,
  },
  {
    id: 5,
    name: "Instagif",
    img: [{ mobile: instagif, desktop: instagifDesktop }],
    description: "is a GIPHY's based Social App.",
    language: ["React.js", "Tailwind CSS", "Express.js", "Prisma", "Firebase"],
    deployed: "Vercel",
    code_source: "https://github.com/LightQv/instagif",
    demo_link: "https://instagif.vivianquerenet.com",
  },
  {
    id: 6,
    name: "DIWIT?",
    img: [{ mobile: wdiwt, desktop: wdiwtDesktop }],
    description:
      "Do I watch it tonight ? Here's an app helping you answering that.",
    language: [
      "React.js",
      "Tailwind CSS",
      "Express.js",
      "TypeScript",
      "Prisma",
    ],
    deployed: "Vercel",
    code_source: "https://github.com/LightQv/wdiwt",
    demo_link: "https://diwit.vivianquerenet.com",
  },
];

export default projects;

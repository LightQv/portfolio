import { useState } from "react";
import { Link } from "react-router-dom";
import profileImg from "../assets/image/profile-smile.jpg";
import SkillsCard from "../components/about/SkillsCard";
import ExperienceCard from "../components/about/ExperienceCard";
import EducationCard from "../components/about/EducationCard";
import MessageSvg from "../components/svg/MessageSvg";
import LinkedInSvg from "../components/svg/LinkedInSvg";
import GithubSvg from "../components/svg/GithubSvg";

export default function About() {
  const [isHover, setIsHover] = useState(false);

  return (
    <main className="flex min-h-screen flex-col gap-6 bg-slate-50 px-8 pb-6 pt-16 lg:grid lg:grid-cols-6 lg:grid-rows-1">
      <section className="mt-6 flex flex-col items-center justify-center gap-2 rounded-2xl bg-mustard-0 px-4 py-6 lg:col-span-2 lg:row-start-1 lg:row-end-3 lg:mt-0 lg:gap-6">
        <img
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          src={profileImg}
          alt="profile-pic"
          className={`${
            isHover ? "scale-105" : "scale-100"
          } h-48 w-48 rounded-full transition-all lg:h-60 lg:w-60`}
        />
        <div className="text-center text-slate-50">
          <h1 className="text-2xl font-bold lg:text-3xl">
            I'm Vivian Querenet,
          </h1>
          <h3 className="-mt-1 text-base font-normal italic lg:text-lg">
            a Full Stack Web Developer.
          </h3>
          <h5 className="mt-1 text-sm font-bold lg:text-base">
            Nice meeting you !
          </h5>
        </div>
      </section>
      <ExperienceCard />
      <SkillsCard />
      <EducationCard />
      <section className="flex flex-col items-center justify-center gap-2 rounded-2xl bg-mustard-0 px-4 py-6 text-gray-100 lg:h-full">
        <div className="text-center">
          <h1 className="text-2xl font-semibold">Hit me up,</h1>
          <h3 className="-mt-1 text-base italic">don't be shy !</h3>
        </div>
        <div className="flex gap-2 text-black">
          <Link
            to="/contact"
            className="transition-all hover:-translate-x-1 hover:translate-y-1 hover:scale-125"
          >
            <MessageSvg />
          </Link>
          <a
            href="https://www.linkedin.com/in/vivianquerenet/"
            target="_blank"
            rel="noreferrer"
            className="transition-all hover:translate-y-2 hover:scale-125"
          >
            <LinkedInSvg />
          </a>
          <a
            href="https://github.com/LightQv"
            target="_blank"
            rel="noreferrer"
            className="transition-all hover:translate-x-1 hover:translate-y-1 hover:scale-125"
          >
            <GithubSvg />
          </a>
        </div>
      </section>
    </main>
  );
}

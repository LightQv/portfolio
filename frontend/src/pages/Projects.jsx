import { useState } from "react";
import projects, { skills } from "../services/data";
import ProjectCard from "../components/projects/ProjectCard";
import ProjectDescription from "../components/projects/ProjectDescription";
import ModalDetails from "../components/projects/ModalDetails";
import PlusSvg from "../components/svg/PlusSvg";

export default function Projects() {
  const [isActive, setIsActive] = useState(0);
  const [activeProject, setActiveProject] = useState(null);
  const [filter, setFilter] = useState("");
  const [modal, setModal] = useState(false);

  function findProject(e) {
    setFilter(e.target.value);
    setIsActive(false);
  }

  return (
    <main className="relative flex h-screen w-screen flex-col justify-center bg-mustard-0 pt-16 text-slate-50 lg:pt-20">
      <div className="lg:hidden">
        <button
          onClick={() => setModal(true)}
          type="button"
          className="fixed left-[calc(50vw-1.25rem)] top-20 mx-auto flex h-10 w-10 animate-bounce items-center justify-center rounded-full bg-mustard-0 font-bold text-yellow-950 shadow-lg"
        >
          <PlusSvg />
        </button>
        {modal && <ModalDetails setModal={setModal} projects={projects} />}
      </div>
      <div className="hidden w-full lg:flex lg:items-center lg:justify-between lg:px-14">
        {activeProject ? (
          <ProjectDescription activeProject={activeProject} />
        ) : (
          <div>
            <h2 className="text-4xl font-bold">Select a project</h2>
            <h4 className="text-base italic">to learn more about it !</h4>
          </div>
        )}
        <div className="flex items-center gap-4">
          <p className="text-base font-bold">Filter by</p>
          <select
            id="project-filter"
            onChange={findProject}
            className="cursor-pointer rounded-lg bg-slate-50 px-4 py-2 text-sm font-bold text-gray-950"
          >
            <option value="">All</option>
            {skills[0].types[0].content
              .sort((a, b) => a.localeCompare(b))
              .map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
          </select>
        </div>
      </div>
      <div className="h-full w-full overflow-x-scroll px-8 scrollbar-hide lg:flex">
        <ul className="flex h-full w-fit transition-all ease-linear lg:mx-auto [&>*:not(:first-child)]:-ml-16 lg:[&>*:not(:first-child)]:-ml-32">
          {projects &&
            projects
              .filter((project) =>
                filter !== "" ? project.language.includes(filter) : project
              )
              .map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  isActive={isActive}
                  setIsActive={setIsActive}
                  setActiveProject={setActiveProject}
                />
              ))}
        </ul>
      </div>
    </main>
  );
}

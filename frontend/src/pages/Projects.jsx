import { useState } from "react";
import ModalDetails from "../components/projects/mobile/ModalDetails";
import ProjectDescription from "../components/projects/desktop/ProjectDescription";
import Caroussel from "../components/projects/desktop/Caroussel";
import Slides from "../components/projects/mobile/Slides";
import FilterBar from "../components/projects/desktop/FilterBar";
import DisplaySwitch from "../components/projects/desktop/DisplaySwitch";
import ContactBar from "../components/ContactBar";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [filter, setFilter] = useState("");
  const [format, setFormat] = useState("mobile");

  return (
    <main className="relative flex h-screen w-screen flex-col items-center justify-center bg-mustard-0 pt-16 font-roboto text-slate-50 scrollbar-hide lg:justify-start lg:px-20 lg:pt-20">
      {/* Mobile Display */}
      <div className="h-full w-full overflow-x-scroll px-8 scrollbar-hide lg:hidden">
        <ModalDetails />
        <Slides />
      </div>

      {/* Desktop Display */}
      <div className="relative z-30 hidden w-full lg:flex lg:items-start lg:justify-between">
        {activeProject && <ProjectDescription activeProject={activeProject} />}
        <div className="flex flex-col gap-2">
          <FilterBar setFilter={setFilter} />
          <DisplaySwitch format={format} setFormat={setFormat} />
        </div>
      </div>
      <Caroussel
        filter={filter}
        format={format}
        setActiveProject={setActiveProject}
      />
      <h1 className="-left-10 bottom-0 z-10 hidden text-[10rem] font-bold text-yellow-950 lg:absolute lg:block">
        Magic.
      </h1>
      <ContactBar />
    </main>
  );
}

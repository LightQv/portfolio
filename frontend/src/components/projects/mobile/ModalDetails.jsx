import { useState } from "react";
import PlusSvg from "../../svg/projects/PlusSvg";
import CodeSvg from "../../svg/projects/CodeSvg";
import MoreSvg from "../../svg/projects/MoreSvg";
import projects from "../../../services/data";

export default function ModalDetails() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        type="button"
        className="fixed left-[calc(50vw-1.25rem)] top-20 mx-auto flex h-10 w-10 animate-bounce items-center justify-center rounded-full bg-mustard-0 font-bold text-yellow-950 shadow-lg"
      >
        <PlusSvg />
      </button>
      {showModal && (
        <div className="absolute left-0 top-0 z-20 flex min-h-screen min-w-full items-center justify-center overflow-auto bg-slate-950/80 p-4 text-yellow-950">
          <div className="flex flex-col rounded-lg bg-mustard-0 px-4 py-2">
            <button
              onClick={() => setShowModal(false)}
              type="button"
              className="ml-auto h-4 w-2 bg-mustard-0 text-center text-base font-bold"
            >
              X
            </button>
            <ul className="space-y-6 p-2 pb-4">
              {projects.map((project) => (
                <li key={project.id} className="">
                  <h2 className="text-xl font-bold">{project.name}</h2>
                  <p className="text-sm italic">{project.description}</p>
                  <p className="my-1 text-base font-medium opacity-80">
                    {project.language.join(" - ")}
                  </p>
                  <div className="flex w-full gap-2">
                    <button
                      type="button"
                      className="flex w-1/2 items-center justify-center gap-2 rounded-md border-2 border-slate-100 px-4 py-2 text-sm font-medium italic text-slate-100 transition-all hover:bg-slate-100 hover:text-yellow-950"
                    >
                      <a
                        href={project.code_source}
                        target="_blank"
                        rel="noreferrer"
                        className=""
                      >
                        Code
                      </a>
                      <CodeSvg />
                    </button>
                    {project.demo_link && (
                      <button
                        type="button"
                        className="flex w-1/2 items-center justify-center gap-2 rounded-md border-2 border-slate-100 px-4 py-2 text-sm font-medium italic text-slate-100 transition-all hover:bg-slate-100 hover:text-yellow-950"
                      >
                        <a
                          href={project.demo_link}
                          target="_blank"
                          rel="noreferrer"
                          className=""
                        >
                          Live demo
                        </a>
                        <MoreSvg />
                      </button>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

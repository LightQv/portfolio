import PropTypes from "prop-types";
import CodeSvg from "../svg/CodeSvg";
import MoreSvg from "../svg/MoreSvg";

export default function ModalDetails({ setModal, projects }) {
  return (
    <div className="absolute left-0 top-0 z-20 flex min-h-screen min-w-full items-center justify-center overflow-auto bg-slate-950/80 p-4">
      <div className="flex flex-col rounded-lg bg-mustard-0 px-4 py-2">
        <button
          onClick={() => setModal(false)}
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
              <p className="my-1 text-base font-semibold">
                {project.language.join(" - ")}
              </p>
              <div className="flex w-full gap-2">
                <button
                  type="button"
                  className="flex w-1/2 items-center justify-center gap-2 rounded-lg bg-slate-50 px-4 py-2 text-xs font-semibold text-yellow-950 transition-all hover:scale-105 hover:bg-slate-100"
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
                    className="flex w-1/2 items-center justify-center gap-2 rounded-lg bg-slate-50 px-4 py-2 text-xs font-semibold text-yellow-950 transition-all hover:scale-105 hover:bg-slate-100"
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
  );
}

ModalDetails.propTypes = {
  setModal: PropTypes.func.isRequired,
  projects: PropTypes.shape().isRequired,
};

import PropTypes from "prop-types";
import CodeSvg from "../../svg/projects/CodeSvg";
import MoreSvg from "../../svg/projects/MoreSvg";

export default function ProjectDescription({ activeProject }) {
  return (
    <div className="flex">
      <div className="text-yellow-950">
        <div className="flex items-end gap-4">
          <h2 className="text-5xl font-bold">{activeProject.name}</h2>
          <h4 className="text-lg font-bold opacity-60">
            {activeProject.language.join(" - ")}
          </h4>
        </div>
        <p className="ml-1 text-base font-semibold italic">
          {activeProject.description}
        </p>
      </div>
      <div
        className={`fixed bottom-12 z-30 flex w-[18rem] space-x-4 ${
          activeProject.demo_link
            ? "left-[calc(50vw-9rem)]"
            : "left-[calc(50vw-5rem)]"
        }`}
      >
        <button
          type="button"
          className="flex w-40 items-center justify-center gap-2 rounded-md border-2 border-slate-100 px-4 py-2 text-sm font-medium italic text-slate-100 transition-all hover:bg-slate-100 hover:text-yellow-950"
        >
          <a
            href={activeProject.code_source}
            target="_blank"
            rel="noreferrer"
            className=""
          >
            Code
          </a>
          <CodeSvg />
        </button>
        {activeProject.demo_link && (
          <button
            type="button"
            className="flex w-40 items-center justify-center gap-2 rounded-md border-2 border-slate-100 px-4 py-2 text-sm font-medium italic text-slate-100 transition-all hover:bg-slate-100 hover:text-yellow-950"
          >
            <a
              href={activeProject.demo_link}
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
    </div>
  );
}

ProjectDescription.propTypes = {
  activeProject: PropTypes.shape().isRequired,
};

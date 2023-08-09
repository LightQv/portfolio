import PropTypes from "prop-types";
import CodeSvg from "../svg/CodeSvg";
import MoreSvg from "../svg/MoreSvg";

export default function ProjectDescription({ activeProject }) {
  return (
    <div className="flex">
      <div>
        <div className="flex items-end gap-4">
          <h2 className="text-4xl font-bold">{activeProject.name}</h2>
          <h4 className="text-base font-bold text-yellow-950">
            {activeProject.language.join(" - ")}
          </h4>
        </div>
        <p className="text-base italic">{activeProject.description}</p>
      </div>
      <div
        className={`fixed bottom-12 flex w-[17rem] space-x-4 ${
          activeProject.demo_link
            ? "left-[calc(50vw-8.5rem)]"
            : "left-[calc(50vw-3.5rem)]"
        }`}
      >
        <button
          type="button"
          className="flex w-32 items-center justify-center gap-2 rounded-lg bg-slate-50 px-4 py-2 text-xs font-semibold text-yellow-950 transition-all hover:scale-105 hover:bg-slate-100"
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
            className="flex w-32 items-center justify-center gap-2 rounded-lg bg-slate-50 px-4 py-2 text-xs font-semibold text-yellow-950 transition-all hover:scale-105 hover:bg-slate-100"
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

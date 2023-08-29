import PropTypes from "prop-types";
import { skills } from "../../../services/data";

export default function FilterBar({ setFilter }) {
  function findProject(e) {
    setFilter(e.target.value);
  }

  return (
    <div className="flex items-center gap-4">
      <p className="text-base font-medium">Filter by</p>
      <select
        id="project-filter"
        onChange={findProject}
        className="cursor-pointer rounded-md border-2 border-slate-100 bg-transparent px-4 py-2 text-sm font-medium italic text-slate-100 transition-all hover:bg-slate-100 hover:text-yellow-950"
      >
        <option value="">All</option>
        {skills[0].content
          .sort((a, b) => a.localeCompare(b))
          .map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
      </select>
    </div>
  );
}

FilterBar.propTypes = {
  setFilter: PropTypes.func.isRequired,
};

import PropTypes from "prop-types";

export default function ProjectCard({
  project,
  isActive,
  setIsActive,
  setActiveProject,
}) {
  const handleActiveProject = () => {
    if (isActive !== project.id) {
      setIsActive(project.id);
      setActiveProject(project);
    } else {
      setIsActive(0);
      setActiveProject(null);
    }
  };

  return (
    <li
      style={
        isActive === project.id
          ? {
              transform: "translateY(-2rem)",
              transition: "0.4s ease-in-out",
            }
          : { transition: "0.4s ease-in-out" }
      }
      className="my-auto flex h-fit w-80 items-center overflow-hidden rounded-3xl shadow-3xl transition-all hover:z-10 hover:-translate-y-8 lg:border-[1px] lg:border-mustard-0"
    >
      <button
        type="button"
        onClick={() => handleActiveProject()}
        className="h-full w-full"
      >
        <img src={project.img} alt={project.name} className="object-fit" />
      </button>
    </li>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape().isRequired,
  isActive: PropTypes.number.isRequired,
  setIsActive: PropTypes.func.isRequired,
  setActiveProject: PropTypes.func.isRequired,
};

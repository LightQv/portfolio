import PropTypes from "prop-types";

export default function ProjectCard({ project, format }) {
  return (
    <li
      className={`my-auto flex h-fit items-center overflow-hidden ${
        format === "desktop" ? "w-[60rem] rounded-sm" : "w-80 rounded-3xl"
      } border-[1px] border-mustard-0 shadow-3xl`}
    >
      <img
        src={
          format === "desktop" ? project.img[0].desktop : project.img[0].mobile
        }
        alt={project.name}
        className="object-fit"
      />
    </li>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape().isRequired,
  format: PropTypes.string.isRequired,
};

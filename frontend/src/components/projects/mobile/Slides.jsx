import projects from "../../../services/data";
import ProjectCard from "../ProjectCard";

export default function Slides() {
  return (
    <ul className="flex h-full w-fit transition-all ease-linear lg:mx-auto lg:hidden [&>*:not(:first-child)]:-ml-16 lg:[&>*:not(:first-child)]:-ml-32">
      {projects &&
        projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
    </ul>
  );
}

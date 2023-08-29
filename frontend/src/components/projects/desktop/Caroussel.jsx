import PropTypes from "prop-types";
import Carousel from "react-spring-3d-carousel";
import { config } from "@react-spring/web";
import { useEffect, useState } from "react";
import projects from "../../../services/data";
import ProjectCard from "../ProjectCard";

export default function Caroussel({ filter, format, setActiveProject }) {
  const [goToSlide, setGoToSlide] = useState(null);
  const [list, setList] = useState(null);
  const [isFiltered, setIsFiltered] = useState(false);

  const handleClick = (el, index) => {
    setActiveProject(el.content.props.project);
    setGoToSlide(index);
  };

  useEffect(() => {
    if (!isFiltered) {
      setList(
        projects
          .filter((project) =>
            filter !== "" ? project.language.includes(filter) : project
          )
          .reverse()
          .map((project) => ({
            key: project.id,
            content: <ProjectCard project={project} format={format} />,
          }))
          .map((el, index) => {
            return { ...el, onClick: () => handleClick(el, index) };
          })
      );
      setIsFiltered(true);
    }
  }, [filter, format]);

  useEffect(() => {
    if (isFiltered) {
      setActiveProject(list[0]?.content.props.project);
      setIsFiltered(false);
      setGoToSlide(0);
    }
  }, [isFiltered]);

  if (!list) return null;
  return (
    <div
      className={`relative z-20 hidden h-full ${
        filter === "desktop" ? "w-full" : "w-[40%]"
      } pb-24 scrollbar-hide lg:block`}
    >
      <Carousel
        slides={list}
        goToSlide={goToSlide}
        animationConfig={config.slow}
      />
    </div>
  );
}

Caroussel.propTypes = {
  filter: PropTypes.string.isRequired,
  format: PropTypes.string.isRequired,
  setActiveProject: PropTypes.func.isRequired,
};

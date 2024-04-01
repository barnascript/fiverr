import ProjectCard from "../../mini_components/project_card/ProjectCard";
import styles from "./Projects.module.scss";
import Slider from "infinite-react-carousel";
import { projects } from "../../data";
import { IoArrowBackCircle, IoArrowForwardCircle } from "react-icons/io5";

const Projects = () => {
  const CustomPrevArrow = ({ onClick }) => {
    return (
      <IoArrowBackCircle onClick={onClick} className={styles.prev_arrow} />
    );
  };
  const CustomNextArrow = ({ onClick }) => {
    return (
      <IoArrowForwardCircle onClick={onClick} className={styles.next_arrow} />
    );
  };
  return (
    <div className={`sw ${styles.wrapper}`}>
      <div className={styles.container}>
        <Slider
          dots
          slidesToShow={4}
          arrowscroll={5}
          prevArrow={<CustomPrevArrow />}
          nextArrow={<CustomNextArrow />}
        >
          {projects.map((card) => (
            <ProjectCard item={card} key={card.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Projects;

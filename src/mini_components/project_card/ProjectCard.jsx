import { Link } from "react-router-dom";
import styles from "./Project_Card.module.scss";

const ProjectCard = ({ item }) => {
  return (
    <div className={styles.wrapper}>
      <Link className={styles.container}>
        <img src={item.img} alt={item.title} />
        <div className={styles.content}>
          <img src={item.pp} alt={item.title} />
          <div className={styles.text}>
            <span className={styles.title}>{item.cat}</span>
            <span className={styles.username}>{item.username}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;

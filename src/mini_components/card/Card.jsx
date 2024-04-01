import { Link } from "react-router-dom";
import styles from "./Card.module.scss";

const Card = ({ item }) => {
  return (
    <div className={styles.wrapper}>
      <Link className={styles.container}>
        <div className={styles.text}>
          <span className={styles.title}>{item.title}</span>
          <span>{item.desc}</span>
        </div>
        <img src={item.img} alt={item.title} />
      </Link>
    </div>
  );
};

export default Card;

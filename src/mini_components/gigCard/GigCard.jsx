import styles from "./GigCard.module.scss";
import { Link } from "react-router-dom";
import star from "../../assets/img/star.png";
import heart from "../../assets/img/heart.png";

const GigCard = ({ item }) => {
  return (
    <Link to="/gig/123">
      <div className={styles.wrapper}>
        <img src={item.img} alt={item.desc} className={styles.card_image} />
        <div className={styles.info}>
          <div className={styles.user}>
            <img src={item.pp} alt={item.username} />
            <span>{item.username}</span>
          </div>
          <p>
            {item.desc.length > 50
              ? item.desc.substr(0, 50) + `...`
              : item.desc}
          </p>
          <div className={styles.star}>
            <img src={star} alt={"star"} />
            <span>{item.star}</span>
          </div>
        </div>
        <hr />
        <div className={styles.details}>
          <img src={heart} alt="a gray heart emoji" />
          <div className={styles.price}>
            <span>STARTING AT</span>
            <h6>
              ${item.price}.<sup>99</sup>
            </h6>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;

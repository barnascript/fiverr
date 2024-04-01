import styles from "./Review.module.scss";
import star from "../../assets/img/star.png";
import like from "../../assets/img/like.png";
import dislike from "../../assets/img/dislike.png";

const Review = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.user_info}>
        <img src={star} alt="user-photo" className={styles.passport} />
        <div className={styles.name}>
          <b>John Doe</b>
          <div className={styles.country}>
            <img src={like} alt="" className={styles.flag} />
            <small>United States</small>
          </div>
        </div>
      </div>
      <div className={styles.star}>
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <b>5</b>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
        pariatur nulla magnam porro rerum perferendis doloremque at aperiam
        incidunt perspiciatis suscipit ex, consequuntur nihil id inventore culpa
        soluta vitae vero debitis veritatis beatae! Dolore voluptatum, sunt
        fugit perspiciatis ut facilis non nam rem possimus doloremque quos
        repellat ex consequatur accusantium.
      </p>

      <div className={styles.action}>
        <b>
          Helpful? Yes
          <img src={like} alt="like" />
          No <img src={dislike} alt="dislike" />
        </b>
      </div>
    </div>
  );
};

export default Review;

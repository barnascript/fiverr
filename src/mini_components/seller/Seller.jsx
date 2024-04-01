import styles from "./Seller.module.scss";
import star from "../../assets/img/star.png";

const Seller = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.seller_info}>
        <img src={star} alt="user" className={styles.passport} />
        <div className={styles.metadata}>
          <b>
            <small>Anna Bell</small>
          </b>
          <div className={styles.star}>
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <b>5</b>
          </div>
          <button>Contact Me</button>
        </div>
      </div>
      <div className={styles.seller_condition}>
        <div className={styles.top}>
          <span>
            From{" "}
            <b>
              <small>USA</small>
            </b>
          </span>
          <span>
            Avg. response time
            <b>
              <small>4 hours</small>
            </b>
          </span>
          <span>
            Languages
            <b>
              <small>English</small>
            </b>
          </span>
        </div>
        <hr />
        <p className={styles.seller_desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, animi
          voluptate debitis inventore culpa corrupti sunt assumenda fugiat enim
          earum!
        </p>
      </div>
    </div>
  );
};

export default Seller;

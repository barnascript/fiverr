import styles from "./FiverrBusiness.module.scss";
import { FaCheckCircle } from "react-icons/fa";
import freelance from "../../assets/freelance.jpg";

const Features = () => {
  return (
    <div className={styles.wrapper}>
      <div className={`sw ${styles.container}`}>
        <div className={styles.left}>
          <h5>
            <b>fiverr</b> <i>business</i>
          </h5>

          <h5>
            <b>
              A business solution designed for <i>teams</i>
            </b>
          </h5>

          <p>
            Upgrade to a curated experience packed with tools and benefits,
            dedicated to business
          </p>

          <ul className={styles.lists}>
            <li className={styles.list}>
              <div className={styles.title}>
                <FaCheckCircle className={styles.icon} />
                <small>Connect to freelancers with proven experience</small>
              </div>
            </li>
            <li className={styles.list}>
              <div className={styles.title}>
                <FaCheckCircle className={styles.icon} />
                <small>
                  Get matched with the perfect talent by a customer success
                  manager
                </small>
              </div>
            </li>
            <li className={styles.list}>
              <div className={styles.title}>
                <FaCheckCircle className={styles.icon} />
                <small>
                  Manage teamwork and boost productivity with one powerful
                  workspace
                </small>
              </div>
            </li>
          </ul>

          <button>Explore Fiverr Business</button>
        </div>
        <div className={styles.image}>
          <img src={freelance} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Features;

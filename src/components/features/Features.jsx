import styles from "./Features.module.scss";
import { FaCheckCircle } from "react-icons/fa";
import freelance from "../../assets/freelance.jpg";
const Features = () => {
  return (
    <div className={styles.wrapper}>
      <div className={`sw ${styles.container}`}>
        <div className={styles.left}>
          <h4>A whole world of freelance talent at your fingertips</h4>

          <ul className={styles.lists}>
            <li className={styles.list}>
              <div className={styles.title}>
                <FaCheckCircle className={styles.icon} />
                <span>The best for every budget</span>
              </div>
              <p>
                Find high quality freelancer to begin working on your project
                within minutesA whole world of freelance talent at your
                fingertips
              </p>
            </li>
            <li className={styles.list}>
              <div className={styles.title}>
                <FaCheckCircle className={styles.icon} />
                <span>The best for every budget</span>
              </div>
              <p>
                Find high quality freelancer to begin working on your project
                within minutesA whole world of freelance talent at your
                fingertips
              </p>
            </li>
            <li className={styles.list}>
              <div className={styles.title}>
                <FaCheckCircle className={styles.icon} />
                <span>The best for every budget</span>
              </div>
              <p>
                Find high quality freelancer to begin working on your project
                within minutesA whole world of freelance talent at your
                fingertips
              </p>
            </li>
            <li className={styles.list}>
              <div className={styles.title}>
                <FaCheckCircle className={styles.icon} />
                <span>The best for every budget</span>
              </div>
              <p>
                Find high quality freelancer to begin working on your project
                within minutesA whole world of freelance talent at your
                fingertips
              </p>
            </li>
          </ul>
        </div>
        <div className={styles.video}>
          <iframe
            src="https://www.youtube.com/embed/sJcL3WTDQkY?si=dv46DmuU4nllHaoA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Features;

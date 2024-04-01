import twitter from "../../assets/img/twitter.png";
import facebook from "../../assets/img/facebook.png";
import linkedin from "../../assets/img/linkedin.png";
import pinterest from "../../assets/img/pinterest.png";
import accessibility from "../../assets/img/accessibility.png";
import coin from "../../assets/img/coin.png";
import language from "../../assets/img/language.png";
import styles from "./Snippet.module.scss";

const Snippet = () => {
  return (
    <div className={`sw ${styles.wrapper}`}>
      <h2>fiverr</h2>
      <div className={styles.block}></div>

      <div className={styles.socials}>
        <img src={twitter} alt={twitter} />
        <img src={facebook} alt={facebook} />
        <img src={linkedin} alt={linkedin} />
        <img src={pinterest} alt={pinterest} />
        <div className={styles.language}>
          <img src={language} alt="language" />
          <span>English</span>
        </div>
        <div className={styles.coin}>
          <img src={coin} alt="coin" />
          <span>USD</span>
        </div>
        <img src={accessibility} alt="accessibility" />
      </div>
    </div>
  );
};

export default Snippet;

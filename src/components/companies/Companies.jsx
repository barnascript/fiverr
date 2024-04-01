import styles from "./Companies.module.scss";
import meta from "../../../src/assets/icons/meta.svg";
import google from "../../../src/assets/icons/google.svg";
import netflix from "../../../src/assets/icons/netflix.svg";
import paypal from "../../../src/assets/icons/paypal.svg";

const Companies = () => {
  return (
    <div className={styles.wrapper}>
      <div className={`sw ${styles.logos}`}>
        <b> Trusted by:</b>
        <img src={google} alt="google" />
        <img src={netflix} alt="netflix" />
        <img src={paypal} alt="paypal" />
      </div>
    </div>
  );
};

export default Companies;

import styles from "./Gig.module.scss";
import star from "../../assets/img/star.png";
import clock from "../../assets/img/clock.png";
import recycle from "../../assets/img/recycle.png";
import { Link } from "react-router-dom";
import greencheck from "../../assets/img/greencheck.png";
import Seller from "../../mini_components/seller/Seller";
import Review from "../../components/review/Review";
import Slider from "infinite-react-carousel";
// import image1 from "../../assets/img/image1.jpeg";
// import image2 from "../../assets/img/image2.jpeg";
// import image3 from "../../assets/img/image3.jpeg";
// import image4 from "../../assets/img/image4.jpeg";

const Gig = () => {
  return (
    <div className={`sw ${styles.wrapper}`}>
      <div className={styles.left}>
        <div className={styles.intro}>
          <div className={styles.links}>
            <Link>FIVERR</Link> {`>`} <Link>GRAPHICS & DESIGN</Link> {`>`}
          </div>
          <h3>I will create AI generated art for you.</h3>

          <div className={styles.username}>
            <div className={styles.name}>
              <img
                src={greencheck}
                alt="greencheck"
                className={styles.passport}
              />
              <b>Anna Bell</b>
            </div>
            <div className={styles.star}>
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <b>5</b>
            </div>
          </div>
        </div>
        {/* <Slider slideToShow={1} arrowsScroll={1}>
          <img src={image1} alt="" />
          <img src={image2} alt="" />
          <img src={image3} alt="" />
          <img src={image4} alt="" />
        </Slider> */}
        <div className={styles.about_gig}>
          <h4>About this Gig</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aut
            fugit unde amet ab libero ex at eius ipsum nihil corporis cumque
            perspiciatis optio blanditiis totam explicabo beatae, iste esse
            quos. Quia totam hic libero. Maiores, voluptates esse asperiores
            officiis nostrum repudiandae veniam odio, fuga, obcaecati nemo
            facilis similique pariatur?
          </p>
        </div>
        <div className={styles.about_seller}>
          <h4>About this Seller</h4>
          <Seller />
        </div>
        <div className={styles.reviews}>
          <h4>Reviews</h4>
          <Review />
          <hr />
          <Review />
          <hr />
          <Review />
          <hr />
          <Review />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.job_title}>
          <b>1 A1 Generated Image</b>
          <b>$ 59.99</b>
        </div>
        <div className={styles.job_desc}>
          <p>
            I will create a unique high quality AI generated image based on a
            description that you give me.
          </p>
        </div>
        <div className={styles.metadata}>
          <div className={styles.delivery}>
            <img src={clock} alt="clock" />
            <b>
              <small>2 Days Delivery</small>
            </b>
          </div>
          <div className={styles.revisions}>
            <img src={recycle} alt="" />{" "}
            <b>
              <small>3 revisions</small>
            </b>
          </div>
        </div>

        <ul>
          <li>
            <img src={greencheck} alt="" />
            <small>Prompt Writing</small>
          </li>
          <li>
            <img src={greencheck} alt="" />
            <small>Prompt Writing</small>
          </li>
          <li>
            <img src={greencheck} alt="" />
            <small>Prompt Writing</small>
          </li>
          <li>
            <img src={greencheck} alt="" />
            <small>Prompt Writing</small>
          </li>
          <li>
            <img src={greencheck} alt="" />
            <small>Prompt Writing</small>
          </li>
        </ul>
        <button>Continue</button>
      </div>
    </div>
  );
};

export default Gig;

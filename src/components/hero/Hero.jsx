import React from "react";
import styles from "./Hero.module.scss";
import man from "../../../src/assets/woman.jpg";
import { IoSearch } from "react-icons/io5";

const Hero = () => {
  return (
    <div className={styles.wrapper}>
      <div className={`sw ${styles.hero_content}`}>
        <div className={` ${styles.hero_text}`}>
          <h2>
            Find the perfect <i className={styles.freelance}>freelance</i>{" "}
            services for your business
          </h2>
          <div className={styles.input_box}>
            <input type="search" placeholder="Search for something..." />
            <div className={styles.search_box}>
              <IoSearch className={styles.search_icon} />
            </div>
          </div>
          <ul>
            Popular: <li>Web Design</li> <li>WordPress</li> <li>Logo Design</li>{" "}
            <li>AI Services</li>
          </ul>
        </div>
        <img src={man} alt="a smiling man" className={styles.hero_image} />
      </div>
    </div>
  );
};

export default Hero;

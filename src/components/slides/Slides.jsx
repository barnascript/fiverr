import Card from "../../mini_components/card/Card";
import styles from "./Slides.module.scss";
import Slider from "infinite-react-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useEffect, useRef, useState } from "react";
import { cards } from "../../data";
import { IoArrowBackCircle, IoArrowForwardCircle } from "react-icons/io5";
// import { register } from "swiper/element/bundle";

// register();

const Slides = () => {
  // const swiperElRef = useRef(null);

  // useEffect(() => {
  //   // listen for Swiper events using addEventListener
  //   swiperElRef.current.addEventListener("swiperprogress", (e) => {
  //     const [swiper, progress] = e.detail;
  //     console.log(progress);
  //   });

  //   swiperElRef.current.addEventListener("swiperslidechange", (e) => {
  //     console.log("slide changed");
  //   });
  // }, []);
  const [slides, setSlides] = useState(5);

  const CustomPrevArrow = ({ onClick }) => {
    return (
      <IoArrowBackCircle onClick={onClick} className={styles.prev_arrow} />
    );
  };

  const CustomNextArrow = ({ onClick }) => {
    return (
      <IoArrowForwardCircle onClick={onClick} className={styles.next_arrow} />
    );
  };

  const sliderRef = useRef(null);
  const innerWidth = window.innerWidth;

  const handleSlides = () => {
    if (window.innerWidth <= 600) {
      setSlides(1);
    } else if (window.innerWidth > 600 && window.innerWidth < 901) {
      setSlides(2);
    } else {
      setSlides(5);
    }
  };

  useEffect(() => {
    handleSlides();
    window.addEventListener("resize", handleSlides);
    return () => window.removeEventListener("resize", handleSlides);
  }, []);

  console.log(innerWidth);

  return (
    <div className={`sw ${styles.wrapper}`}>
      <div className={styles.container}>
        <h3>Popular Services</h3>
        <Slider
          dots
          slidesToShow={slides}
          arrowscroll={5}
          prevArrow={<CustomPrevArrow />}
          nextArrow={<CustomNextArrow />}
          ref={sliderRef}
        >
          {cards.map((card) => (
            <Card item={card} key={card.id} />
          ))}
        </Slider>
      </div>
      {/* <swiper-container
        ref={swiperElRef}
        slides-per-view="3"
        navigation="true"
        pagination="true"
      >
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        ...
      </swiper-container> */}
    </div>
  );
};

export default Slides;

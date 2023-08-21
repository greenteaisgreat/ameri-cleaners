import React from "react";
import styles from "../style";
import { slides } from "../constants";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Hero = () => {
  return (
    <section
      id="hero"
      className={`flex md:flex-row flex-col  ${styles.paddingY}`}
      style={{ background: "#3ABD72" }} // Set background color
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="font-poppins font-bold ss:text-[50px] text-[60px] ss:leading-[75px] leading-[100px] w-full text-white">
            Your Clothes, Our Care
          </h1>
        </div>
        <div>
          <p
            className={`${styles.paragraph} max-w-[470px] mt-5 ml-1 text-white`}
          >
            Here at Ameri-Cleaners we dedicate ourselves to professional
            cleaning and services. Here at Ameri-Cleaners we dedicate ourselves
            to professional cleaning and services. Here at Ameri-Cleaners we
            dedicate ourselves to professional cleaning and services.
          </p>
        </div>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0 mx-4 object-center flex justify-center">
        <Carousel showThumbs={false} autoPlay infiniteLoop>
            {slides.map((slide, index) => (
              <div key={index}>
                <img src={slide.src} alt={`Slide ${index + 1}`} className="h-auto w-full rounded-xl"/>
              </div>
            ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Hero;

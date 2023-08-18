import React from "react";
import styles from "../style";
import hero from "../assets/hero.png"

const Hero = () => {
  return (
    <section
      id="hero"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
      style={{ background: "#3ABD72" }} // Set background color
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="font-poppins font-bold ss:text-[50px] text-[60px] ss:leading-[75px] leading-[100px] w-full text-white">
            Your Clothes,
            Our Care
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
        <img src={hero} alt="hero" className="rounded-xl shadow-lg"/>
      </div>
    </section>
  );
};

export default Hero;

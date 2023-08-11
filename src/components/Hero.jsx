import React from "react";
import styles from "../style";

const Hero = () => {
  return (
    <section
      id="hero"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px 6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="font-poppins font-bold ss:text-[50px] text-[60px] ss:leading-[75px] leading-[100px] w-full">
            Our customers are our #1 priority
          </h1>
        </div>
        <div>
          <p className={`${styles.paragraph} max-w-[470px] mt-5 ml-1`}>
            Here at Ameri-Cleaners we dedicate ourselves to professional
            cleaning and services. Here at Ameri-Cleaners we decidate ourselves
            to professional cleaning and services. Here at Ameri-Cleaners we
            decidate ourselves to professional cleaning and services.
          </p>
        </div>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        Picture Here
      </div>
    </section>
  );
};

export default Hero;

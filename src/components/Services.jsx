import React from "react";
import styles from "../style";

const services = [
  {
    id: "service-1",
    title: "Dry Cleaning",
  },
  {
    id: "service-2",
    title: "Clothing Restoration",
  },
  {
    id: "service-3",
    title: "Tailoring",
  },
  {
    id: "service-4",
    title: "And many more!",
  },
];

const Services = () => {
  return (
    <div id="services">
      <div className="font-poppins font-bold ss:text-[42px] text-[50px] ss:leading-[100px] leading-[75px] w-full sm:px-16 px-6 text-green-900 text-center">
        Services
      </div>
      
      <section
        className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
      >
        {services.map((service) => (
          <div
            key={service.id}
            className={`flex-1 flex justify-start items-center flex-row m-3`}
          >
            {/* IMAGE/LOGO RENDER HERE */}
            <h4 className="font-poppins font-italic xs:text-[35px] text-[20px] xs:leading-[40px] leading-[18px] sm:px-16 px-6 text-green-900">
              {service.title}
            </h4>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Services;

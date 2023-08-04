import React from 'react';
import { services } from '../constants';
import styles from '../style';

const Services = () => {
  return (
    <div id="services">
        <div className="font-poppins font-bold ss:text-[40px] text-[52px] ss:leading-[100px] leading-[75px] w-full">Services</div>
        <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
            {services.map((service) => (
                <div key={service.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
                    <h4 className="font-poppins font-italic xs:text-[35px] text-[20px] xs:leading-[40px] leading-[18px] text-black">{service.title}</h4>
                </div>
            ))}
        </section>
    </div>
  )
}

export default Services
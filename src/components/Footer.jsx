import React from "react";

const Footer = () => {
  return (
    <footer
      className="py-10 sm:px-16 px-6"
      style={{ background: "#006724" }} // Set darker background color
    >
      <div className="mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 md:pr-8">
            <h2 className="text-2xl font-semibold mb-1 font-poppins text-white">
              Our Mission
            </h2>
            <div className="w-1/4">
              <hr className="border-t-2 border-green-600 mb-4" />
            </div>

            <p className="font-poppins text-white">
              Here at Ameri-Cleaners, we take pride in providing the best dry
              cleaning service to our customers. Our dedication to
              professionalism and attention to detail set us apart from the
              rest. Contact us today to experience the difference!
            </p>
          </div>

          <div className="md:w-1/3 mt-8 md:mt-0 md:ml-auto">
            <h2 className="text-2xl font-semibold mb-1 font-poppins text-white">
              Contact Us
            </h2>
            <div className="w-1/4">
              <hr className="border-t-2 border-green-600 mb-4" />
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 font-poppins text-white">
                Email
              </h3>
              <p className="font-poppins text-white">info@example.com</p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 font-poppins text-white">
                Store and Mobile Phone Number
              </h3>
              <p className="font-poppins text-white">+1 (123) 456-7890</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 font-poppins text-white">
                Address
              </h3>
              <p className="font-poppins text-white">
                1234 Elm Street
                <br />
                City, State 12345
                <br />
                Country
              </p>
            </div>
            <div className="mt-4 mb-4">
              <h3 className="text-xl font-semibold mb-2 font-poppins text-white">
                Hours of Service
              </h3>
              <p className="font-poppins text-lg text-white">
                MON-FRI: 9AM-7PM
              </p>
              <p className="font-poppins text-lg text-white">SAT: 9AM-6PM</p>
              <p className="font-poppins text-lg text-white">SUN: CLOSED</p>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-white">
          &copy; {new Date().getFullYear()} Ameri-Cleaners. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

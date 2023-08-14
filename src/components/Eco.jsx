import React from "react";

const Eco = () => {
  return (
    <div
      id="eco"
      className="sm:px-16 px-6"
      style={{ background: "#78B9A5" }} // Set background color
    >
      <div className="mx-auto px-2 py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white">Eco-Friendly Dry Cleaning</h3> {/* Set text color */}
            <p className="text-lg leading-relaxed font-poppins text-white"> {/* Set text color */}
              We are extremely environmentally conscious and always make sure
              that we are using only the most environmentally friendly products
              and cleaning methods. At the same time, we are aware that many of
              our clients have environmental or chemical sensitivities. If you
              have concerns about any products that we may be using, please do
              not hesitate to ask us any questions. We will do our best to find
              a solution that will make everyone happy.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">Picture Here</div>
        </div>
      </div>
    </div>
  );
};


export default Eco;

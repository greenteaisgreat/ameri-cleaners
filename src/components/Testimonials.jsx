import React from "react";

const Testimonials = () => {
  return (
    <section id="testimonials" className="sm:px-16 px-6 py-10">
      <div className="mx-auto px-3">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <h3 className="font-poppins text-4xl md:text-5xl font-bold mb-6 text-green-900">
              Testimonials
            </h3>
            <div className="mb-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-green-900 text-lg mb-4 font-poppins">
                  "I have been a loyal customer of Ameri-Cleaners for years now,
                  and I must say they provide the best dry cleaning service in
                  town. The staff is friendly, and my clothes always come back
                  looking fresh and spotless. Highly recommended!"
                </p>
                <p className="text-green-700 text-sm font-poppins">- John Doe</p>
              </div>
            </div>
            <div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-green-900 text-lg mb-4 font-poppins">
                  "Ameri-Cleaners has exceeded my expectations with their
                  attention to detail and quick turnaround times. Their service
                  is impeccable, and I wouldn't trust anyone else with my
                  delicate fabrics. Thank you for your outstanding work!"
                </p>
                <p className="text-green-700 text-sm">- Jane Smith</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

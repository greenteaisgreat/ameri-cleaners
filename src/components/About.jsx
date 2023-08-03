import React from 'react'

const About = () => {
  return (
    <section id="about" className="bg-gray-100 py-10">
      <div className="mx-auto px-2">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <h3 className="text-4xl md:text-5xl font-bold mb-6">About Us</h3>
            <p className="text-gray-700 text-lg leading-relaxed font-poppins">
              Hi there! I'm Khiet Ta, a passionate busniess owner based in the Seattle, WA.
              I love serving the community and helping others. My journey in the world of dry cleaning began recently
              but I haven't looked back since. I believe in continuous learning and
              staying up-to-date with the latest practices to create amazing experiences for my clients.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 ">
              Picture Here
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
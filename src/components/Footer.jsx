import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-primary py-10">
    <div className=" mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 md:pr-8">
          <h2 className="text-2xl font-semibold mb-4 font-poppins">Our Mission</h2>
          <p className="text-gray-800 font-poppins">
            Here at Ameri-Cleaners, we take pride in providing the best dry cleaning service to our customers.
            Our dedication to professionalism and attention to detail set us apart from the rest.
            Contact us today to experience the difference!
          </p>
        </div>

        <div className="md:w-1/3 mt-8 md:mt-0 md:ml-auto">
          <h2 className="text-2xl font-semibold mb-4 font-poppins">Contact Us</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2 font-poppins">Email</h3>
            <p className="text-gray-800 font-poppins">info@example.com</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2 font-poppins">Store and Mobile Phone Number</h3>
            <p className="text-gray-800 font-poppins">+1 (123) 456-7890</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 font-poppins">Address</h3>
            <p className="text-gray-800 font-poppins">
              1234 Elm Street
              <br />
              City, State 12345
              <br />
              Country
            </p>
          </div>
          <div className="mt-4 mb-4">
            <h3 className="text-xl font-semibold mb-2 font-poppins">Hours of Service</h3>
            <p className="font-poppins text-gray-800 text-lg">MON-FRI: 9AM-7PM</p>
            <p className="font-poppins text-gray-800 text-lg">SAT: 9AM-6PM</p>
            <p className="font-poppins text-gray-800 text-lg">SUN: CLOSED</p>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500">
        &copy; {new Date().getFullYear()} Ameri-Cleaners. All rights reserved.
      </div>
    </div>
  </footer>
  )
}

export default Footer
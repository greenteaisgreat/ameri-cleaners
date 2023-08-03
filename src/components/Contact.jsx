import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="bg-primary py-10">
      <div className=" mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <h1 className="font-poppins text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <div className="mb-6">
              <h2 className="font-poppins text-xl font-semibold mb-4">Email</h2>
              <p className="font-poppins text-gray-700 text-lg">info@example.com</p>
            </div>
            <div className="mb-6">
              <h2 className="font-poppins text-xl font-semibold mb-4">Store Phone Number</h2>
              <p className="font-poppins text-gray-700 text-lg">+1 (123) 456-7890</p>
            </div>
            <div className="mb-6">
              <h2 className="font-poppins text-xl font-semibold mb-4">Mobile Phone Number</h2>
              <p className="font-poppins text-gray-700 text-lg">+1 (123) 456-7890</p>
            </div>
            <div>
              <h2 className="font-poppins text-xl font-semibold mb-4">Address</h2>
              <p className="font-poppins text-gray-700 text-lg">
                1234 Elm Street
                <br />
                City, State 12345
                <br />
                Country
              </p>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            Picture Here
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
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
          <div className="mt-4 mb-6">
            <h2 className="font-poppins text-xl font-semibold mb-4">Hours of Service</h2>
            <p className="font-poppins text-gray-700 text-lg">MON-FRI: 9AM-7PM</p>
            <p className="font-poppins text-gray-700 text-lg">SAT: 9AM-6PM</p>
            <p className="font-poppins text-gray-700 text-lg">SUN: CLOSED</p>
          </div>
        </div>
  
        <div className="md:w-1/2 md:pl-8">
          <div className="flex flex-col h-full">
            <p className="font-poppins font-semibold text-2xl md:text-lg py-6 text-center justify-center">For inquiries, submit a form below!</p>
          </div>
          <div className="flex justify-center items-center">
            <form action="https://getform.io/f/92f9f4f0-8afa-4e28-9167-4bfb7ebbc27f"
              method="POST" className="flex flex-col w-full md:w-2/3">
              <input type="text" name="name" placeholder="Enter your name"
                className="p-2 bg-transparent border-2 border-green-400 rounded-md text-black focus:outline-none" />
  
              <input type="text" name="email" placeholder="Enter your email"
                className="my-4 p-2 bg-transparent border-2 border-green-400 rounded-md text-black focus:outline-none" />
  
              <textarea name="message" placeholder="Enter your message" rows="10"
                className="p-2 bg-transparent border-2 border-green-400 rounded-md text-black focus:outline-none"></textarea>
  
              <button
                className="text-white bg-gradient-to-b from-green-600 to-green-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Contact
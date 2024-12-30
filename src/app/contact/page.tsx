import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-cover bg-center min-h-screen flex items-center justify-center" style={{ backgroundImage: "url('/hero-img.jpg')" }}>
      <div className="bg-black bg-opacity-70 p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-3xl font-bold text-lime-300 mb-4 text-center">Contact us</h1>
        <p className="text-gray-200 text-center mb-6">Leave us a message and we will get back to you <br /> As Soon As Possible</p>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-lime-300 font-semibold mb-2">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-300"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lime-300 font-semibold mb-2">Email address</label>
            <input
              type="email"
              id="email"
              placeholder="Your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-300"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lime-300 font-semibold mb-2">Message</label>
            <textarea
              id="message"
              
              placeholder="Your message"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-300"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-lime-300 text-black font-bold py-2 px-4 rounded-lg hover:bg-lime-400 transition duration-200"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;

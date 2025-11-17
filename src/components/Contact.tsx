import React from "react";

import Spline from "@splinetool/react-spline";

export default function ContactPage() {
  return (
    <>
   
     <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800   px-6 md:px-20 py-20 ">
      
      <h1 className="text-white text-5xl text-center  font-bold mb-5">
        Contact
      </h1>
      <p className="text-center text-white mb-12">Contact us if you want to collaborate and want to interact further.</p>
    <div className=" flex flex-col md:flex-row justify-between items-center gap-16 pt-12">
      {/* Left: Contact Info + Title */}
      <div className="md:w-1/2 flex flex-col justify-center">
          <Spline
        scene="https://prod.spline.design/sB9nN4m4eXcf87-g/scene.splinecode" 
      />
      </div>

      {/* Right: Modern Form */}
      <div className="md:w-1/2 w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl">
        <form  className="flex flex-col gap-6">
          <div>
            <label className="block text-sm mb-2 text-gray-300">Name</label>
            <input
              type="text"
              className="w-full text-white bg-black/40 border border-gray-700 px-4 py-3 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-300">Email</label>
            <input
              type="email"
              className="w-full text-white bg-black/40 border border-gray-700 px-4 py-3 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-300">Message</label>
            <textarea
              rows={5}
              className="w-full text-white bg-black/40 border border-gray-700 px-4 py-3 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full text-white bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 hover:bg-blue-700 transition-all py-4 rounded-xl font-semibold text-lg shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    </div>
     </>
  );
}
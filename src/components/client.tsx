import React from "react";
import Spline from "@splinetool/react-spline";

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white grid grid-cols-1 md:grid-cols-2 px-10 py-20">
      
      {/* Left Column - Contact Form */}
      <div className="flex flex-col justify-center max-w-lg">
        <h1 className="text-5xl font-bold leading-tight mb-6">
          Let’s <span className="text-blue-400">Talk.</span>
        </h1>

        <p className="text-gray-300 mb-10">
          Fill out the form below and our team will contact you shortly.
        </p>

        <form className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-[#111] border border-gray-700 px-4 py-3 rounded-xl focus:outline-none focus:border-blue-400"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="bg-[#111] border border-gray-700 px-4 py-3 rounded-xl focus:outline-none focus:border-blue-400"
          />

          <textarea
            placeholder="Your Message"
            rows={5}
            className="bg-[#111] border border-gray-700 px-4 py-3 rounded-xl focus:outline-none focus:border-blue-400"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 transition-all text-white py-3 rounded-xl font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Right Column — 3D Spline */}
      <div className="flex justify-center items-center">
        <div className="w-[350px] h-[350px] md:w-[500px] md:h-[500px]">
             <Spline
        scene="https://prod.spline.design/sB9nN4m4eXcf87-g/scene.splinecode" 
      />
        </div>
      </div>

    </div>
  );
};

export default ContactPage;

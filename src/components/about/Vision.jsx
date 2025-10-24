import React from "react";
import visionimg from "/public/about/vision.webp";

const Vision = () => {
  return (
    <section className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center text-white px-6 sm:px-10 lg:px-20 py-16">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
        <div className="relative w-[90%] max-w-lg rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-700 ease-out">
          <img
            src={visionimg}
            alt="Our Founder Vision"
            className="w-full h-full object-cover"
          />
          {/* Overlay for style */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left space-y-6">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-black mb-4">
          Our Founder’s <span className="text-[#7E9AD1]">Vision</span>
        </h1>

        <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
          “It means so much to me to be able to create a product line for absolutely everybody and anybody who wants to wear it and feel incredible. 
          Makeup is so personal, and to have the opportunity to help people feel even more beautiful than they already are in their own skin — and 
          to provide tools that support and encourage creativity and self-expression — is a gift I’ll never take for granted.”
        </p>

        <div className="mt-6">
          <p className="text-[#7E9AD1] font-semibold text-lg">— Founder & Visionary</p>
        </div>
      </div>
    </section>
  );
};

export default Vision;

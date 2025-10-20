import React from "react";

const Hero = () => {
  return (
    <div
      className="w-full h-screen flex flex-col  sm:py-2  sm:pl-10 justify-end bg-cover bg-center"
      style={{ backgroundImage: "url('/home/h1hero.webp')" }} // ✅ direct access from public folder
    >
      <div className="text-white ml-5 mb-10">
        <h3 className="">new glinda makeup set</h3>
        <div className="flex flex-col gap-2 mt-2 mb-5">
          <h1 className="text-5xl font-semibold">everyday enchantment</h1>
          <p className=" w-auto sm:w-sm">
            a beautifully bubbly 4-piece makeup set inspired by glinda's
            opalescent tones.
          </p>
        </div>
        <button className="px-5 py-3 rounded-4xl bg-transparent border-white cursor-pointer  uppercase border ">Shop Now</button>
      </div>
    </div>
  );
};

export default Hero;

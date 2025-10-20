import React from "react";

const Everyday = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center  bg-no-repeat flex flex-col justify-end"
      style={{ backgroundImage: "url('/home/everyday.jpg')" }} // ✅ full width background
    >
      <div className="text-white ml-8 mb-16 max-w-xl">
        <h3 className="uppercase tracking-widest text-sm">
          new elphaba makeup set
        </h3>
        <div className="flex flex-col gap-3 mt-2 mb-6">
          <h1 className="text-5xl sm:text-5xl font-semibold leading-tight">
            everyday enchantment
          </h1>
          <p className="text-lg sm:text-base opacity-90">
            master the magic with an alluring 4-piece makeup set inspired by
            elphaba's magical & powerful color palette.
          </p>
        </div>
        <button className="px-6 py-3 border border-white rounded-full uppercase text-sm hover:bg-white hover:text-black transition-all duration-300">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Everyday;

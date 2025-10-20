import React from "react";

const Poppy = () => {
  const allItems = [
    {
      id: 1,
      bgimg: "./home/prdct2.webp",
      about: "new",
      heading: "poppy plumping lip glosses",
      desc: "inspired by the vibrant and bold poppy fields of oz, this high-shine lip gloss instantly plumps lips with lasting hydration.",
    },
    {
      id: 2,
      bgimg: "./home/blushpink.webp",
      about: "new",
      heading: "cherry blossom blush palette",
      desc: "a trio of blushes inspired by glinda's signature cherry blossoms. with matte, shimmer & melange finishes for a soft floral look.",
    },
  ];

  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
        {allItems.map((item) => (
          <div 
            key={item.id} 
            className="shadow-md border-gray-100  rounded-lg w-full lg:w-1/2"
          >
            {/* Image Section */}
            <div className="w-full  h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 2xl:h-96">
              <img
                src={item.bgimg}
                className="w-full h-full object-cover bg-center "
                alt={item.heading}
              />
            </div>

            {/* Content Section */}
            <div className="flex  bg-white flex-col  lg:flex-row lg:items-center lg:justify-between p-3 sm:p-4 md:p-5 lg:p-6 gap-4 md:gap-6">
              <div className="">
                <h4 className="text-xs  text-gray-600 uppercase tracking-wide">
                  {item.about}
                </h4>
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl  font-semibold my-2 md:my-3 capitalize">
                  {item.heading}
                </h1>
                <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <button className="px-4 sm:px-5 whitespace-nowrap md:px-6 py-2 sm:py-3 md:py-3 border border-black rounded-full cursor-pointer hover:bg-black hover:text-white transition-all duration-300 text-sm sm:text-base md:text-sm w-full lg:w-auto text-center mt-2 lg:mt-0">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Poppy;
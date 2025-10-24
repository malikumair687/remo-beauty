import React from "react";
import { CiInstagram, CiGlobe } from "react-icons/ci";
import { Link } from "react-router-dom";
import { BsPlusCircle } from "react-icons/bs";
import { GiRadarCrossSection } from "react-icons/gi";
import { BiRecycle } from "react-icons/bi";
import { RiRestartFill } from "react-icons/ri";
import { motion } from "framer-motion";
const childImgAry = [
  { id: 1, img: "/home/m1.webp" },
  { id: 2, img: "/home/m2.webp" },
  { id: 3, img: "/home/m3.webp" },
  { id: 4, img: "/home/m4.webp" },
  { id: 5, img: "/home/m5.webp" },
  { id: 6, img: "/home/m6.webp" },
];

const iconAry = [
  { id: 1, icon: <BsPlusCircle />, name: "Cruelty Free" },
  { id: 2, icon: <GiRadarCrossSection />, name: "Paraben Free" },
  { id: 3, icon: <CiGlobe />, name: "Consciously Made" },
  { id: 4, icon: <BiRecycle />, name: "Recyclable" },
  { id: 5, icon: <RiRestartFill />, name: "Vegan Friendly" },
];

const Feed = () => {
  return (
    <div className="p-4 bg-[#E2E7F1] sm:p-5 md:p-6 lg:p-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 uppercase">
        shop the feed
      </h1>

      <div className="flex items-center gap-2 mb-4 sm:mb-5 text-base sm:text-lg">
        <CiInstagram className="text-xl sm:text-2xl" />
        <p>@r.e.m.beauty</p>
      </div>

      {/* Images Section */}
      <div className="flex flex-col lg:flex-row gap-3 sm:gap-4">
        {/* Left main image */}
        <div className="w-full lg:w-1/2">
          <Link>
            <img
              src="/home/blushpink.webp"
              alt="Main feed"
              className="w-full h-48 sm:h-56 md:h-64 lg:h-80 xl:h-96 object-cover rounded-lg"
            />
          </Link>
        </div>

        {/* Grid of child images */}
        <div className="w-full lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
          {childImgAry.map((item) => (
            <div key={item.id} className="w-full aspect-square">
              <Link>
                <img
                  src={item.img}
                  alt={`feed-${item.id}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 text-center">
  {iconAry.map((item) => (
    <motion.div
      key={item.id}
      className="flex flex-col lg:flex-row items-center bg-white justify-center rounded-lg py-4 gap-2 transition"
      animate={{
        x: [0, 20, 0], // moves 0 → 20px → 0 (left to right and back)
      }}
      transition={{
        duration: 3,        // total time for one full cycle
        repeat: Infinity,   // loop forever
        ease: "linear",     // smooth continuous motion
      }}
    >
      <div className="text-4xl">{item.icon}</div>
      <p className="text-xl font-medium">{item.name}</p>
    </motion.div>
  ))}
</div>
    </div>
  );
};

export default Feed;

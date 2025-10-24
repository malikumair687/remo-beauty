import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, EffectFade } from "swiper/modules";
import aboutimg from "/public/about/about.webp";

const Hero = () => {
  return (
    <div className="h-screen w-full relative">
      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{ 
          delay: 2000, 
          disableOnInteraction: false,
          pauseOnMouseEnter: true 
        }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true}
        speed={1200}
        className="h-full w-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="h-screen bg-cover bg-center bg-no-repeat relative flex flex-col justify-between p-4 sm:p-6 md:p-8 lg:p-12 text-white"
            style={{ backgroundImage: `url(${aboutimg})` }}
          >
            {/* Top Content */}
            <div className="relative z-10 pt-40 sm:pt-20 md:pt-12 lg:pt-16 xl:pt-20">
              <h1 className="text-5xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
                WE DREAM
              </h1>
            </div>

            {/* Bottom Content */}
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end pb-4 sm:pb-6 md:pb-8 lg:pb-12 xl:pb-20 gap-4 sm:gap-6 md:gap-8">
              {/* Left Text */}
              <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                <p className="text-xs sm:text-sm md:text-base lg:text-lg opacity-90">
                  r.e.m. \\ ar-ee-em \\ noun
                </p>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mt-1 sm:mt-2 md:mt-3 leading-relaxed">
                  the sleep phase where your most creative, vivid dreams occur.
                </p>
              </div>
              
              {/* Right Text */}
              <div className="self-end md:self-auto mt-4 sm:mt-0">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight">
                 IN  R.E.M
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="h-screen bg-cover bg-center bg-no-repeat relative flex flex-col justify-between p-4 sm:p-6 md:p-8 lg:p-12 text-white"
            style={{ backgroundImage: `url(${aboutimg})` }}
          >
            {/* Top Content */}
            <div className="relative z-10 pt-40 sm:pt-20 md:pt-12 lg:pt-16 xl:pt-20">
              <h1 className="text-5xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
                WE DREAM
              </h1>
            </div>

            {/* Bottom Content */}
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end pb-4 sm:pb-6 md:pb-8 lg:pb-12 xl:pb-20 gap-4 sm:gap-6 md:gap-8">
              {/* Left Text */}
              <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                <p className="text-xs sm:text-sm md:text-base lg:text-lg opacity-90">
                  r.e.m. \\ ar-ee-em \\ noun
                </p>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mt-1 sm:mt-2 md:mt-3 leading-relaxed">
                  the sleep phase where your most creative, vivid dreams occur.
                </p>
              </div>
              
              {/* Right Text */}
              <div className="self-end md:self-auto mt-4 sm:mt-0">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight">
                 IN  R.E.M
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {[0, 1].map((index) => (
          <div
            key={index}
            className="w-2 h-2 rounded-full bg-white/60 hover:bg-white/80 cursor-pointer transition-all duration-300"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
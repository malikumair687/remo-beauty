import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const naviAbtAry = [
  {
    id: 1,
    date: "November 2021",
    title: "r.e.m. beauty launches",
    desc: "featuring our first 12 products and over 60 individual shades",
    img: "/public/about/n1.webp"
  },
  {
    id: 2,
    date: "april 2022",
    title: "Ulta Beauty launch",
    desc: "r.e.m. beauty launches at over 1000 ulta beauty doors across the US",
    img: "/public/about/n2.webp"
  },
  {
    id: 3,
    date: "july 2022",
    title: "sweetener concealer launch",
    desc: "an inclusive 60 shades of concealer, delivering clinical hydration and artistry results",
    img: "/public/about/n3.webp"
  },
  {
    id: 4,
    date: "february 2023",
    title: "r.e.m. beauty arrives in Europe",
    desc: "in-store and online, exclusive at Sephora EU",
    img: "/public/about/n4.webp"
  },
  {
    id: 5,
    date: "august 2023",
    title: "Sweetener foundation launch",
    desc: "60 skincare infused shades, introduced by Ari at our sweetener shoppe pop-up in NYC",
    img: "/public/about/n5.webp"
  },
  {
    id: 6,
    date: "r.e.m. beauty lands in Canada",
    title: "launching exclusively at our first 100 Shoppers Drug Mart locations",
    desc: "november 202",
    img: "/public/about/n6.webp"
  },
];

const NavigationAbout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Celebrating milestones and innovations that define r.e.m. beauty's evolution
          </p>
        </div>

        {/* Swiper Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
          <Swiper
            modules={[Autoplay, EffectFade]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: false, // This ensures it never pauses on hover
            }}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            loop={true}
            speed={1000}
            className="w-full"
          >
            {naviAbtAry.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                  {/* Text Content */}
                  <div className="flex-1 lg:pr-8">
                    <div className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                      {item.date}
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                    
                    {/* Progress Indicator */}
                    <div className="flex items-center gap-4 mt-8">
                      <div className="flex gap-2">
                        {naviAbtAry.map((_, index) => (
                          <div
                            key={index}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                              index === item.id - 1 
                                ? 'bg-purple-600 w-8' 
                                : 'bg-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500 font-medium">
                        {item.id} / {naviAbtAry.length}
                      </span>
                    </div>
                  </div>
                  
                  {/* Image */}
                  <div className="flex-1">
                    <div className="relative group">
                      <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl blur opacity-25 transition duration-1000"></div>
                      <img 
                        src={item.img} 
                        alt={item.title} 
                        className="relative w-full h-72 lg:h-96 object-cover rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Continue to follow our journey as we redefine beauty standards
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavigationAbout;
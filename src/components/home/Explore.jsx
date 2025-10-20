import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const ProductAry = [
  {
    id: 1,
    img: "/home/prdct1.webp",
    desc: "r.e.m. beauty x Wicked: For Good Ozian Forest Eyeshadow Palette",
    price: "Rs.17,246.76",
    rating: "★★★★★",
    ratingNumber: "5",
  },
  {
    id: 2,
    img: "/home/prdct1.webp",
    desc: "r.e.m. beauty x Wicked: For Good Lip Gloss Set",
    price: "Rs.9,999.99",
    rating: "★★★★☆",
    ratingNumber: "4.5",
  },
  {
    id: 3,
    img: "/home/prdct1.webp",
    desc: "r.e.m. beauty x Wicked: For Good Ozian Forest Eyeshadow Palette",
    price: "Rs.17,246.76",
    rating: "★★★★★",
    ratingNumber: "5",
  },
  {
    id: 4,
    img: "/home/prdct1.webp",
    desc: "r.e.m. beauty x Wicked: For Good Lip Gloss Set",
    price: "Rs.9,999.99",
    rating: "★★★★☆",
    ratingNumber: "4.5",
  },
  {
    id: 5,
    img: "/home/prdct1.webp",
    desc: "r.e.m. beauty x Wicked: For Good Ozian Forest Eyeshadow Palette",
    price: "Rs.17,246.76",
    rating: "★★★★★",
    ratingNumber: "5",
  },
  {
    id: 6,
    img: "/home/prdct1.webp",
    desc: "r.e.m. beauty x Wicked: For Good Lip Gloss Set",
    price: "Rs.9,999.99",
    rating: "★★★★☆",
    ratingNumber: "4.5",
  },
  {
    id: 7,
    img: "/home/prdct1.webp",
    desc: "r.e.m. beauty x Wicked: For Good Lip Gloss Set",
    price: "Rs.9,999.99",
    rating: "★★★★☆",
    ratingNumber: "4.5",
  },
];

const Explore = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(1);

  // Update cards per page based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerPage(3); // lg screens and above
      } else if (window.innerWidth >= 640) {
        setCardsPerPage(2); // sm screens and above
      } else {
        setCardsPerPage(1); // mobile screens
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scroll = (direction) => {
    if (direction === "left") {
      setCurrentIndex((prev) => Math.max(0, prev - cardsPerPage));
    } else {
      setCurrentIndex((prev) => 
        Math.min(ProductAry.length - cardsPerPage, prev + cardsPerPage)
      );
    }
  };

  // Get current products to display
  const currentProducts = ProductAry.slice(currentIndex, currentIndex + cardsPerPage);

  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8 lg:p-10 bg-transparent">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">Explore</h1>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-10">
          <Link>
            <div className="uppercase flex items-center justify-center gap-2 text-sm sm:text-base">
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-black"></div>
              R.E.M beauty x Wicked : For Good
            </div>
          </Link>
          <Link>
            <div className="underline text-sm sm:text-base">DISCOVER ALL</div>
          </Link>
        </div>
      </div>

      {/* Product Carousel */}
      <div className="relative mt-6 sm:mt-8 lg:mt-10">
        <div className="flex gap-4 sm:gap-6 lg:gap-8 justify-center">
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className="p-3 sm:p-4 rounded-2xl bg-[#F1F3F8] shadow-md hover:shadow-lg transition-shadow w-full sm:w-[48%] lg:w-[30%]"
            >
              <div className="w-full py-2 sm:py-3">
                <img
                  src={product.img}
                  alt={product.desc}
                  className="w-full h-40 sm:h-48 lg:h-50 object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col mt-3 sm:mt-4">
                <h1 className="text-base sm:text-lg uppercase font-semibold line-clamp-2">
                  {product.desc}
                </h1>
                <div className="flex flex-col sm:flex-row sm:gap-2 items-start sm:items-center mt-2 text-gray-700 text-sm sm:text-base">
                  <span>{product.price}</span>
                  <div className="flex gap-1 sm:gap-2 items-center">
                    <span>{product.rating}</span>
                    <span>({product.ratingNumber})</span>
                  </div>
                </div>
                <button className="mt-3 sm:mt-4 px-3 sm:px-4 cursor-pointer py-2 sm:py-3 border rounded-full hover:bg-black hover:text-white transition-all text-sm sm:text-base">
                  Add to BAG {product.price}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <div className="flex justify-end items-center mt-4 sm:mt-6">
        <div className="flex gap-3">
          <div
            className={`p-2 border text-xl sm:text-2xl rounded-full cursor-pointer ${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => currentIndex > 0 && scroll("left")}
          >
            <GoArrowLeft />
          </div>
          <div
            className={`p-2 border text-xl sm:text-2xl rounded-full cursor-pointer ${
              currentIndex >= ProductAry.length - cardsPerPage ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => currentIndex < ProductAry.length - cardsPerPage && scroll("right")}
          >
            <GoArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
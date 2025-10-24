import React, { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "/public/home/skin1.webp";
import img2 from "/public/home/skin2.webp";
import img3 from "/public/home/skin3.webp";
import img4 from "/public/home/skin4.webp";
import img5 from "/public/home/skin5.webp";
import img6 from "/public/home/skin6.webp";
import img7 from "/public/home/skin7.webp";
import img8 from "/public/home/skin8.webp";

const ItemNamAry = [
  { id: 1, name: "Lip Gloss" },
  { id: 2, name: "Lip Oil" },
  { id: 3, name: "Lipstick" },
  { id: 4, name: "Lip Stain" },
  { id: 5, name: "lip balm" },
  { id: 6, name: "lip liner" },
  
];

const PrdctAry = [
  {
    id: 1,
    img: img1,
    name: "r.e.m. beauty x Wicked: For Good Luxury Beautification Undereye Masks",
    price: "Rs.11,212.13",
    rates: "★★★★★",
    rating: "4.7",
  },
  {
    id: 2,
    img: img2,
    name: "Cooling Makeup Prep Set",
    price: "Rs.9,499.00",
    rates: "★★★★☆",
    rating: "4.5",
  },
  {
    id: 3,
    img: img3,
    name: "Calm & Cool Prep Set",
    price: "Rs.8,799.50",
    rates: "★★★★★",
    rating: "4.9",
  },
  {
    id: 4,
    img: img4,
    name: "Essential Drip Lip Oil",
    price: "Rs.12,000.00",
    rates: "★★★★☆",
    rating: "4.6",
  },
  {
    id: 5,
    img: img5,
    name: "Full Night's Sleep Energizing Undereye Balm",
    price: "Rs.10,299.99",
    rates: "★★★★★",
    rating: "4.8",
  },
  {
    id: 6,
    img: img6,
    name: "Full Night's Sleep Cooling Blurring Undereye Balm",
    price: "Rs.7,599.50",
    rates: "★★★★☆",
    rating: "4.5",
  },
  {
    id: 7,
    img: img7,
    name: "Lash & Brow Boosting Serum",
    price: "Rs.9,899.00",
    rates: "★★★★★",
    rating: "4.9",
  },
  {
    id: 8,
    img: img8,
    name: "Lunar Magic Blurring Primer",
    price: "Rs.10,999.00",
    rates: "★★★★☆",
    rating: "4.6",
  },
];

const LipMakeup = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;
  const totalPages = Math.ceil(PrdctAry.length / productsPerPage);

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = PrdctAry.slice(indexOfFirstProduct, indexOfLastProduct);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <div className="px-5 mt-30 sm:px-10 sm:mt-24">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
          <Link to="/" className="hover:underline text-gray-600">
            Home
          </Link>
          <span>/</span>
          <span className="text-gray-800">lip makeup

</span>
        </div>

        {/* Title */}
        <h1 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
          lip makeup


          <sub className="text-gray-500 text-lg">[12]</sub>
        </h1>

        {/* Category bar + sort section */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-b border-gray-200 pb-4">
          <ul className="flex flex-wrap gap-6 text-gray-600 font-medium">
            {ItemNamAry.map((item) => (
              <li
                key={item.id}
                className="cursor-pointer uppercase hover:text-black text-sm relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-black after:left-0 after:-bottom-1 hover:after:w-full after:transition-all"
              >
                {item.name}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 text-sm text-gray-500 mt-3 sm:mt-0">
            <p>12 Products</p>
            <span>|</span>
            <div className="cursor-pointer hover:text-black font-medium">
              SORT
            </div>
          </div>
        </div>
      </div>

      {/* Product Cards */}
      <div className="px-3 sm:px-10 sm:py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10">
        {currentProducts.map((product) => (
          <div
            key={product.id}
            className="group bg-gray-50 shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            {/* Image (Fixed Height) */}
            <div className="overflow-hidden h-64 flex items-center justify-center bg-white">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Details */}
            <div className="flex flex-col justify-between flex-grow p-4">
              <div>
                <h1 className="text-sm xl:text-md font-semibold text-gray-900 mb-2 line-clamp-2 leading-tight min-h-[3rem]">
                  {product.name}
                </h1>

                <div className="flex justify-between items-center text-sm text-gray-600 mb-3">
                  <p className="font-medium text-gray-800">{product.price}</p>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <span>{product.rates}</span>
                    <span className="text-gray-500 text-xs">{product.rating}</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-[#E2E7F1] cursor-pointer text-black py-2.5 rounded-md font-medium hover:bg-black hover:text-white transition-all duration-200">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-12 mb-8">
        <div className="flex items-center gap-2">
          {/* Previous Button */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 cursor-pointer rounded-md border border-gray-300 text-sm font-medium transition-all duration-200 ${
              currentPage === 1
                ? "text-gray-400 cursor-not-allowed bg-gray-100"
                : "text-gray-700 hover:bg-gray-50 hover:border-gray-400"
            }`}
          >
            Prev
          </button>

          {/* Page Numbers */}
          {[...Array(totalPages)].map((_, index) => {
            const pageNumber = index + 1;
            return (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className={`w-10 h-10 cursor-pointer rounded-md text-sm font-medium transition-all duration-200 ${
                  currentPage === pageNumber
                    ? "bg-black text-white border border-black"
                    : "text-gray-700 border border-gray-300 hover:bg-gray-50"
                }`}
              >
                {pageNumber}
              </button>
            );
          })}

          {/* Next Button */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 cursor-pointer rounded-md border border-gray-300 text-sm font-medium transition-all duration-200 ${
              currentPage === totalPages
                ? "text-gray-400 cursor-not-allowed bg-gray-100"
                : "text-gray-700 hover:bg-gray-50 hover:border-gray-400"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default LipMakeup;


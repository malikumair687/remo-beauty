import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { RiRedPacketFill } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { FiShoppingBag } from "react-icons/fi";
import { BsArrowLeft, BsSearch } from "react-icons/bs";

const navLink = [
  { id: 1, name: "R.E.M Beauty X Wicked For Good", path: "/wickedx" },
  { id: 2, name: "Best Sellers", path: "/bestseller" },
  { id: 3, name: "Eyes", path: "/eye" },
  { id: 4, name: "Lip", path: "/lip" },
  { id: 5, name: "Face", path: "/face" },
  { id: 6, name: "SkinCare", path: "/skincare" },
  { id: 7, name: "About", path: "/about" },
];

// Mock cart items
const cartItems = [
  {
    id: 1,
    name: "r.e.m. beauty x Wicked: For Good So Popular pH Adaptive Lip Oil",
    price: "Rs.3,433.00",
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
    quantity: 1
  },
  {
    id: 2,
    name: "Sweetener Foundation - 60 Shades",
    price: "Rs.2,899.00",
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.1.0&auto=format&fit=crop&w=500&q=60",
    quantity: 2
  },
  {
    id: 3,
    name: "Lunar Magic Blurring Primer",
    price: "Rs.1,799.00",
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.1.0&auto=format&fit=crop&w=500&q=60",
    quantity: 1
  }
];

const topSearches = [
  "FEMBOT", "STARLET", "Eyeshadow", "DreamGlow", 
  "Cotton Candy", "Blush", "Wicked", "SET", "Fembot"
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseInt(item.price.replace(/[^0-9]/g, ''));
      return total + (price * item.quantity);
    }, 0).toLocaleString();
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log("Searching for:", searchQuery);
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50">
      {/* Top Banner */}
      <div className="bg-[#e2e7f1] text-black text-center py-2 text-xs">
        Free International shipping on orders $150+ USD. Free returns always.
      </div>

      {/* Main Navbar */}
      <motion.div
        animate={{
          backgroundColor: isScrolled
            ? "rgba(255,255,255,0)"
            : "rgba(255,255,255,1)",
          boxShadow: isScrolled
            ? "0px 2px 10px rgba(0,0,0,0.1)"
            : "0px 0px 0px rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="flex items-center justify-between border-b border-gray-200 px-6 md:px-10 py-3 backdrop-blur-md"
      >
        {/* Left: Mobile Menu Icon */}
        <div className="xl:hidden flex justify-center items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <RxCross1
                className={`text-3xl ${
                  isScrolled ? "text-[#7e9ad1]" : "text-black"
                } transition-colors`}
              />
            ) : (
              <IoMenu
                className={`text-3xl ${
                  isScrolled ? "text-[#7e9ad1]" : "text-black"
                } transition-colors`}
              />
            )}
          </button>
        </div>

        {/* Logo */}
        <Link
          to="/"
          className={`text-3xl hidden xl:block font-bold font-mono tracking-wide transition-colors duration-300 ${
            isScrolled ? "text-[#7e9ad1]" : "text-black"
          }`}
        >
          r.e.m Beauty
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden xl:flex gap-10 text-md">
          {navLink.map((item) => (
            <li key={item.id}>
              <Link
                to={item.path}
                className={`uppercase font-semibold transition-colors duration-300 ${
                  isScrolled
                    ? "text-white hover:text-gray-700"
                    : "text-black-300 hover:text-gray-200"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Icons */}
        <div
          className={`flex items-center gap-6 text-2xl transition-colors duration-300 ${
            isScrolled ? "text-[#7ea2eb]" : "text-black"
          }`}
        >
          <button 
            onClick={() => setSearchOpen(true)}
            className="hover:scale-110 cursor-pointer transition-transform"
          >
            <CiSearch />
          </button>
          <Link to="/login">
            <CgProfile className="hover:scale-110 cursor-pointer transition-transform" />
          </Link>
          {/* Add to Cart Button */}
          <button 
            onClick={() => setCartOpen(true)}
            className="relative hover:scale-110 transition-transform"
          >
            <RiRedPacketFill className="cursor-pointer" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="xl:hidden p-6 bg-white h-[80vh] shadow-md"
        >
          <ul className="flex flex-col gap-8 text-lg">
            {navLink.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="text-black font-semibold uppercase hover:text-gray-600 transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* Add to Cart Sidebar */}
      <AnimatePresence>
        {cartOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setCartOpen(false)}
              className="fixed inset-0 bg-black/60 bg-opacity-50 z-40"
            />
            
            {/* Cart Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <FiShoppingBag className="text-2xl text-[#7E9AD1]" />
                  <h1 className="text-2xl font-bold text-gray-900">My Bag</h1>
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm">
                    {cartItems.length} items
                  </span>
                </div>
                <button
                  onClick={() => setCartOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <RxCross1 className="text-xl text-gray-600" />
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-6">
                {cartItems.length === 0 ? (
                  <div className="text-center py-12">
                    <FiShoppingBag className="text-6xl text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 text-lg">Your bag is empty</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex gap-4 pb-6 border-b border-gray-100">
                        <div className="flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-20 h-20 object-cover rounded-lg"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 text-sm line-clamp-2 mb-1">
                            {item.name}
                          </h3>
                          <p className="text-[#7E9AD1] font-bold text-lg mb-2">
                            {item.price}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <button className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50">
                                -
                              </button>
                              <span className="text-sm font-medium w-8 text-center">
                                {item.quantity}
                              </span>
                              <button className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50">
                                +
                              </button>
                            </div>
                            <button className="text-red-500 hover:text-red-700 text-sm font-medium">
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {cartItems.length > 0 && (
                <div className="border-t border-gray-200 p-6 space-y-4">
                  <div className="flex justify-between items-center text-lg">
                    <span className="font-semibold text-gray-700">Subtotal:</span>
                    <span className="font-bold text-gray-900">Rs.{calculateTotal()}</span>
                  </div>
                  <p className="text-sm text-gray-500 text-center">
                    Free shipping on orders over $150
                  </p>
                  <div className="space-y-3">
                    <button className="w-full bg-[#7E9AD1] text-white py-3 rounded-xl font-semibold hover:bg-[#6a8bc5] transition-colors">
                      Checkout Now
                    </button>
                    <button 
                      onClick={() => setCartOpen(false)}
                      className="w-full border border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                    >
                      <BsArrowLeft />
                      Continue Shopping
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Search Sidebar */}
      <AnimatePresence>
        {searchOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSearchOpen(false)}
              className="fixed inset-0 bg-black/60 z-40"
            />
            
            {/* Search Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <BsSearch className="text-2xl text-[#7E9AD1]" />
                  <h1 className="text-2xl font-bold text-gray-900">SEARCH</h1>
                </div>
                <button
                  onClick={() => setSearchOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <RxCross1 className="text-xl text-gray-600" />
                </button>
              </div>

              {/* Search Form */}
              <div className="p-6">
                <form onSubmit={handleSearchSubmit} className="mb-6">
                  <div className="relative">
                    <BsSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search for products..."
                      className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#7E9AD1] focus:border-transparent transition-all duration-200 text-lg"
                    />
                  </div>
                </form>

                {/* Divider */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-start">
                    <span className="bg-white pr-3 text-sm font-semibold text-gray-700">
                      TOP SEARCHES
                    </span>
                  </div>
                </div>

                {/* Top Searches */}
                <div className="grid grid-cols-2 gap-3">
                  {topSearches.map((search, index) => (
                    <motion.button
                      key={search}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => setSearchQuery(search)}
                      className="text-left p-3 rounded-lg border border-gray-200 hover:border-[#7E9AD1] hover:bg-blue-50 transition-all duration-200 group"
                    >
                      <span className="text-gray-700 group-hover:text-[#7E9AD1] font-medium">
                        {search}
                      </span>
                    </motion.button>
                  ))}
                </div>

                {/* Recent Searches (Optional) */}
                <div className="mt-8">
                  <h3 className="text-sm font-semibold text-gray-700 mb-3">RECENT SEARCHES</h3>
                  <div className="space-y-2">
                    <button className="w-full text-left p-2 text-gray-500 hover:text-[#7E9AD1] transition-colors">
                      Lip gloss
                    </button>
                    <button className="w-full text-left p-2 text-gray-500 hover:text-[#7E9AD1] transition-colors">
                      Foundation
                    </button>
                    <button className="w-full text-left p-2 text-gray-500 hover:text-[#7E9AD1] transition-colors">
                      Eyeshadow palette
                    </button>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-auto p-6 border-t border-gray-200">
                <p className="text-sm text-gray-500 text-center">
                  Press Enter to search or click on suggestions
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
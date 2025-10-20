import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { RiRedPacketFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

const navLink = [
  { id: 1, name: "R.E.M Beauty X Wicked For Good", path: "/" },
  { id: 2, name: "Best Sellers", path: "/bestSellers" },
  { id: 3, name: "Eyes", path: "/eyes" },
  { id: 4, name: "Lip", path: "/lip" },
  { id: 5, name: "Face", path: "/face" },
  { id: 6, name: "SkinCare", path: "/skincare" },
  { id: 7, name: "About", path: "/about" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            ? "rgba(255,255,255,1)"
            : "rgba(255,255,255,0)",
          color: isScrolled ? "#000000" : "#ffffff",
          boxShadow: isScrolled
            ? "0px 2px 10px rgba(0,0,0,0.1)"
            : "0px 0px 0px rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="flex items-center justify-between border-b border-gray-300 px-6 md:px-10 py-3 backdrop-blur-lg transition-colors"
      >
        {/* Left: Menu icon (mobile only) */}
        <div className="xl:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <RxCross1
                className={`text-3xl transition-colors ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              />
            ) : (
              <IoMenu
                className={`text-3xl transition-colors ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              />
            )}
          </button>
        </div>

        {/* Logo */}
        <div>
          <Link
            to="/"
            className={`text-3xl font-bold font-mono tracking-wide transition-colors duration-300 ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            r.e.m Beauty
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden xl:flex gap-10 text-md">
          {navLink.map((item) => (
            <li key={item.id}>
              <Link
                to={item.path}
                className={`uppercase transition-colors duration-300 ${
                  isScrolled
                    ? "text-black hover:text-gray-700"
                    : "text-white hover:text-gray-200"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div
          className={`flex items-center gap-6 text-2xl transition-colors duration-300 ${
            isScrolled ? "text-black" : "text-white"
          }`}
        >
          <button className="hover:scale-110 cursor-pointer transition-transform">
            <CiSearch />
          </button>
          <button className="hover:scale-110 cursor-pointer transition-transform">
            <CgProfile />
          </button>
          <button className="hover:scale-110 cursor-pointer transition-transform">
            <RiRedPacketFill />
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
                  onClick={() => setMenuOpen(false)} // close menu on click
                  className="text-black font-semibold uppercase hover:text-gray-600 transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;

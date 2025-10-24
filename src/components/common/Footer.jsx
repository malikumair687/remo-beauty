import React from "react";
import { Link } from "react-router-dom";

const itemLink = [
  {
    heading: "SHOP",
    subheading: [
      { name: "Best Sellers", path: "/bestseller" },
      { name: "Makeup", path: "/bestseller" },
      { name: "Skincare", path: "/skincare" },
      { name: "Sets", path: "/" },
    ],
  },
  {
    heading: "NAVIGATION",
    subheading: [
      { name: "Our Vision", path: "/about" },
      { name: "FAQ", path: "/faq" },
      { name: "Returns & Exchanges", path: "/returns" },
    ],
  },
  {
    heading: "SOCIAL",
    subheading: [
      { name: "Instagram", path: "/instagram" },
      { name: "X", path: "/twitter" },
      { name: "Facebook", path: "/facebook" },
      { name: "Tiktok", path: "/tiktok" },
      { name: "Youtube", path: "/youtube" },
    ],
  },
];

const supportiveLink = [
  { id: 1, name: "Customer Support", path: "/customerSupport" },
  { id: 2, name: "Contact", path: "/contact" },
  { id: 3, name: "Legal", path: "/legal" },
  { id: 4, name: "Privacy Policy", path: "/privacyPolicy" },
];

const Footer = () => {
  return (
    <footer className="p-5  bg-[#E2E7F1]">
      <div className="flex flex-col xl:flex-row pb-5 justify-between flex-wrap">
        {/* LEFT SIDE */}
        <div className="max-w-lg">
          <h1 className="text-2xl mb-3">
            Multi-dimensional tools for everyday expression
          </h1>
          <p className=" mb-4 text-sm lg:text-md text-justify">
            Join our newsletter for exclusive offers, 10% off your first order
            and to stay up to date on features and releases.
          </p>
          <div className="p-3 bg-white mb-5 rounded-3xl flex justify-between items-center">
            <input
              type="text"
              placeholder="Email Address"
              className="focus:outline-none flex-1 px-2"
            />
            <span className="uppercase lg:text-2xl cursor-pointer">Subscribe</span>
          </div>
          <p className="text-sm">
            I have read and agree to r.e.m. beauty’s Terms of Service and
            Privacy Policy.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-5 lg:grid-cols-3 gap-5 lg:gap-20 lg:mr-10">
          {itemLink.map((item, index) => (
            <div key={index}>
              <h1 className="text-lg lg:text-2xl mb-3">{item.heading}</h1>
              <ul className="flex flex-col gap-3 uppercase">
                {item.subheading.map((sub, i) => (
                  <li key={i}>
                    <Link
                      to={sub.path}
                      className=" hover:text-gray-700 text-sm transition-all"
                    >
                      {sub.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-gray-300 my-5" />

      <div className="flex flex-wrap items-center justify-between mt-5 text-sm">
        <div className="order-2 sm:order-none mt-4">
          <h1 className="font-semibold">Wicked For Good</h1>
          <p className="mt-2">© UNIVERSAL CITY STUDIOS LLC. ALL RIGHTS RESERVED.</p>
          <p>© R.E.M. Beauty 2025</p>
        </div>
        <ul className="flex flex-col md:flex-row gap-4 mt-3 md:mt-0">
          {supportiveLink.map((link) => (
            <li key={link.id}>
              <Link
                to={link.path}
                className=" hover:text-gray-700 transition-all"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

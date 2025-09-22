import React from "react";
import footerLogo from "../../assets/logo-footer.png";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="max-w-7xl mx-auto pt-[240px] pb-[50px]">
        <div className="flex justify-center items-center ">
          <img src={footerLogo} alt="" />
        </div>
        <div className="text-white flex flex-col md:flex-row justify-between gap-[60px] md:gap-[120px] mt-[64px] px-2.5 md:px-0">
          <div className="flex-1">
            <h3>About Us</h3>
            <p className="text-[#ffffff99] mt-2.5">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>
          <div className="flex-1">
            <h3>Quick Links</h3>
            <ul className="text-[#ffffff99] mt-2.5">
              <li className="mb-2 ">
                <a className="hover:border-b border-pink-200" href="#">
                  Home
                </a>
              </li>
              <li className="mb-2 ">
                <a className="hover:border-b border-pink-200" href="#">
                  Services
                </a>
              </li>
              <li className="mb-2 ">
                <a className="hover:border-b border-pink-200" href="#">
                  About
                </a>
              </li>
              <li className="mb-2 ">
                <a className="hover:border-b border-pink-200" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <h3>Subscribe</h3>
            <p className="text-[#ffffff99] my-2.5">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="input bg-white rounded-xl text-black flex-3/4"
              />
              <button className="rounded-xl py-2 px-4 bg-gradient-to-r from-[pink] to-[orange] ml-4 cursor-pointer flex-1/4">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-[#ffffff26] py-8">
        <p className="text-white text-center">
          © {new Date().getFullYear()} BPL-DREAMS. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import logo from "../../assets/logo.png";
import coin from "../../assets/coin.png";

const Navbar = ({ availableBalance }) => {
  return (
    <div className="navbar max-w-7xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 bg-black text-white"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Fixtures</a>
            </li>
            <li>
              <a>Teams</a>
            </li>
            <li>
              <a>Schedules</a>
            </li>
          </ul>
        </div>
        <a className=" ">
          <img className="w-[50px] h-[50px]" src={logo} alt="" />
        </a>
      </div>
      <div className="navbar-end  lg:flex">
        <ul className="menu menu-horizontal hidden px-1 lg:flex justify-between items-center">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Fixtures</a>
          </li>
          <li>
            <a>Teams</a>
          </li>
          <li>
            <a>Schedules</a>
          </li>
        </ul>
        <a className="btn rounded-xl bg-white">
          <span>{availableBalance}</span>
          <span>Coin</span>
          <img src={coin} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;

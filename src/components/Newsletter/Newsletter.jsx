import React from "react";
import bgImg from "../../assets/bg-shadow.png";

const Newsletter = () => {
  return (
    <div className="relative flex justify-center">
      <div className="max-w-7xl mx-auto w-full rounded-xl border border-red-300 absolute -bottom-[200px]">
        <div
          className="bg-center bg-cover m-6 bg-white rounded-xl"
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          <div className="text-center py-[90px]">
            <h2 className="text-3xl font-bold">Subscribe to our Newsletter</h2>
            <p className="text-xl font-medium text-[#131313b3] py-4">
              Get the latest updates and news right in your inbox!
            </p>
            <div>
              <input
                type="email"
                placeholder="Enter your email"
                className="input bg-white rounded-xl"
              />
              <button className="rounded-xl py-2 px-4 bg-gradient-to-r from-[pink] to-[orange] ml-4 cursor-pointer">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

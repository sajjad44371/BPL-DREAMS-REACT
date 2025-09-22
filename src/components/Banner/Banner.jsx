import React from "react";
import bannerImg from "../../assets/banner-main.png";
import bannerBg from "../../assets/bg-shadow.png";

const Banner = () => {
  return (
    <div
      className="mt-6 max-w-7xl mx-auto flex justify-center items-center bg-center bg-cover bg-[#131313] rounded-xl px-2.5 md:px-0"
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
      <div className="py-[64px] text-center">
        <img src={bannerImg} alt="" className="block mx-auto" />
        <h1 className="text-4xl font-bold text-white my-5">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className="text-2xl font-medium text-[#ffffffb3]">
          Beyond Boundaries Beyond Limits
        </p>
        <div className="border border-[#e7fe29] rounded-xl p-2 w-fit mx-auto mt-6">
          <button className="bg-[#e7fe29] py-2 px-4 rounded-xl text-[#131313] font-bold cursor-pointer">
            Claim Free Credit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

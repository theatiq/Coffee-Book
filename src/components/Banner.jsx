import React from "react";
import banner from "../assets/banner.jpg";
const Banner = () => {
  return (
    <div className="hero bg-banner bg-base-200 min-h-[600px]">
      <img src={banner} alt="" />
    </div>
  );
};

export default Banner;

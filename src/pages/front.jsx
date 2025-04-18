import React from "react";
import { Link } from "react-router-dom";
import transition from "../components/PageAnimation";


function Front() {
  return (
    <div className="md:h-[280px] h-[180px]  lg:h-screen bg-gradient-to-b from-blue-100 to-transparent flex items-center justify-center relative mt-18 overflow-hidden">
      <div className="absolute inset-0 flex justify-center items-center w-full h-full ">
        <div className="relative w-full h-full lg:h-[90%] lg:mt-[-90px] ">
          <Link to="/mens">
          <img  loading=" lazy"
            src="/Assets/ShopBanner.png"
            alt="hero"
            className="w-full h-full"
          />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default transition(Front);

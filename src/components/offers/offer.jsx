import React from "react";

const Offer = () => {
  return (
    <div className="w-full lg:w-3/4 h-auto justify-center flex flex-col-2 lg:flex-row mx-auto lg:mt-50 p-10 lg:p-20 bg-gradient-to-b from-[#caedff] to-[#e1ffea22]">
      <div className="flex-1 flex flex-col ">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-semibold text-gray-900">Exclusive</h1>
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-semibold text-gray-900">Offer for you</h1>
        <p className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 mt-4">ONLY ON BEST SELLERS PRODUCTS</p>
        <button className="  mt-6 w-full lg:w-[282px] h-[70px] bg-blue-500 text-white rounded-full text-lg md:text-xl font-medium">
          Check Now
        </button>
      </div>
      <div className="flex-1 hidden sm:block  lg:justify-end  lg:pt-0">
        <img  loading=" lazy" src="/Assets/exclusive_image.png" alt="Exclusive Offer" className="w-64 lg:w-72" />
      </div>
    </div>
  );
};

export default Offer;

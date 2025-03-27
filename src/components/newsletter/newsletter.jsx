import React from "react";

function Newsletter() {
  return (
    <div className="w-full lg:w-3/4 h-[40vh] flex flex-col lg:mt-40 items-center justify-center mx-auto mb-16 px-4 lg:px-36 bg-gradient-to-b from-[#c1edff] to-[#e1ffea22] space-y-6">
      <h1 className="text-xl md:text-4xl lg:text-5xl font-semibold text-gray-700 text-center">
        Get Exclusive Offers On Your Email
      </h1>
      <p className="text-md md:text-lg text-gray-600 text-center">
        Subscribe to our newsletter and stay updated
      </p>
      <div className="flex items-center justify-between w-full lg:w-[730px] h-[60px] bg-white rounded-full border border-gray-300 px-6">
        <input
          type="email"
          placeholder="Your Email id"
          className="flex-grow outline-none text-gray-600 text-md px-2 bg-transparent"
        />
        <button className="w-[200px] h-[60px] bg-blue-500 text-white text-md font-medium rounded-full">
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default Newsletter;

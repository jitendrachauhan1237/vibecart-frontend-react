import React from "react";
import { motion } from "framer-motion";

const Offer = () => {
  return (
    <div className="relative w-full lg:w-3/4 lg:h-auto h-3/4 flex flex-col lg:flex-row justify-center mx-auto lg:mt-50 p-10 lg:p-20 rounded-xl bg-gradient-to-b from-[#caedff] to-[#6ad0ff]">
      {/* Left Side - Text Content */}
      <motion.div
        className="flex-1 text-center lg:text-left"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
          Exclusive <span className="text-red-500">Fashion</span>
        </h1>
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-gray-900">
          Deals for You! 
        </h1>
        <p className="text-sm sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-700 mt-3 sm:mt-4">
          Grab the <span className="font-semibold">hottest trends</span> at{" "}
          <span className="font-semibold">unbeatable prices!</span>
        </p>
        <motion.button
          className="mt-4 sm:mt-6 w-full sm:w-[200px] md:w-[240px] lg:w-[280px] h-[50px] sm:h-[55px] md:h-[60px] lg:h-[65px] bg-red-500 hover:bg-red-600 text-white rounded-full text-sm sm:text-lg md:text-xl font-semibold shadow-md transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          Shop Now
        </motion.button>
      </motion.div>

      {/* Right Side - Image Section */}
      <motion.div
        className="flex-1 flex justify-center lg:justify-end mt-6 sm:mt-8 lg:mt-0"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <img
          loading="lazy"
          src="/Assets/exclusive_image.png"
          alt="Exclusive Offer"
          className="hidden md:block w-44 sm:w-56 md:w-72 lg:w-96 drop-shadow-lg"
        />
      </motion.div>

      {/* Floating Discount Badge */}
      <motion.div
        className="absolute top-6 right-6 bg-red-600 text-white text-xs sm:text-sm md:text-lg font-bold px-3 sm:px-4 py-1 sm:py-2 rounded-lg shadow-lg z-10"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        50% OFF
      </motion.div>
    </div>
  );
};

export default Offer;

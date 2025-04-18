import React from "react";
import { motion } from "framer-motion";

function Newsletter() {
  return (
    <div className="w-full lg:w-3/4 h-auto lg:h-[45vh] flex flex-col items-center justify-center mx-auto mt-16 lg:mt-40 mb-16 px-4 lg:px-36 bg-gradient-to-b from-[#c1edff] to-[#e1ffea22] py-10 rounded-2xl shadow-lg space-y-6">
      {/* Heading */}
      <motion.h1
        className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        Get Exclusive Offers On Your Email
      </motion.h1>

      {/* Subtext */}
      <motion.p
        className="text-md md:text-lg text-gray-600 text-center"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        Subscribe to our newsletter and stay updated
      </motion.p>

      {/* Input and Button */}
      <motion.div
        className="flex items-center justify-between w-full lg:w-[730px] h-[60px] bg-white rounded-full border border-gray-300 px-4 shadow-md"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-grow outline-none text-gray-600 text-md px-4 bg-transparent placeholder-gray-500 focus:ring-0 focus:outline-none"
        />
        <motion.button
          className="w-[160px] h-[50px] bg-blue-500 hover:bg-blue-600 text-white text-md font-medium rounded-full transition-all duration-300 shadow-md"
          whileHover={{ scale: 1.05 }}
        >
          Subscribe
        </motion.button>
      </motion.div>
    </div>
  );
}

export default Newsletter;

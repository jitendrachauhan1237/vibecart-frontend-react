import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { motion, useInView } from "framer-motion"; // Import Framer Motion for animations

const Item = ({ id, img, name, new_price, old_price, index }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Animates only once per scroll

  const handleWishlistClick = (e) => {
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  return (
    <motion.div
      ref={ref}
      className="relative bg-gray-50 rounded-md overflow-hidden p-4 shadow-sm"
      initial={{ opacity: 0, scale: 0.8, y: 50 }} 
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }} 
    >
      {/* Discount Badge */}
      <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
        50% OFF
      </div>

      {/* Wishlist Icon */}
      <div
        className="absolute top-3 lg:right-3 right-1 cursor-pointer hover:text-red-100"
        onClick={handleWishlistClick}
      >
        <FaHeart
          className={`transition duration-300 text-lg ${
            isWishlisted ? "text-red-500" : "text-gray-600 hover:text-red-500"
          }`}
        />
      </div>

      <Link to={`/product/${id}`}>
        <div className="relative top-7 overflow-hidden rounded-lg">
          <img
            loading="lazy"
            onClick={() => window.scrollTo(0, 0)}
            className="w-full md:h-68 h-36 bg-cover rounded-lg transition-transform duration-300 hover:scale-110"
            src={img}
            alt={name}
          />
        </div>
      </Link>

      {/* Product Name */}
      <p className="mt-10 text-gray-900 font-bold ">{name}</p>

      {/* Price Section */}
      <div className="flex items-center justify-between mt-2">
        <div className="text-green-600 font-bold text-xl">${new_price}</div>
        <div className="text-gray-400 line-through text-sm">${old_price}</div>
      </div>
    </motion.div>
  );
};

export default Item;

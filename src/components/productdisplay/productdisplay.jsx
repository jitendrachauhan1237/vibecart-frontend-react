import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const Productdisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);
  const [selectedSize, setSelectedSize] = useState("M");
  const [showModal, setShowModal] = useState(false);

  const handleAddToCart = () => {
    addToCart(product.id, selectedSize);
    setShowModal(true);
    setTimeout(() => setShowModal(false), 1000);
  };

  return (
    <div className="container mx-auto px-4 lg:px-16 py-10 font-poppins">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-gray-600 text-sm font-semibold mb-5">
        <Link to="/" className="hover:text-blue-500 transition">HOME</Link>
        <span className="text-lg">{">"}</span>
        <span className="capitalize text-gray-800">{product.category}</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 items-start">
        {/* Product Images */}
        <div className="flex gap-4">
          <div className="flex flex-col gap-3">
            {[...Array(4)].map((_, index) => (
              <motion.img
                key={index}
                className="h-20 lg:h-24 cursor-pointer rounded-lg shadow-sm hover:shadow-md transition"
                src={product.image}
                alt="Thumbnail"
                whileHover={{ scale: 1.1 }}
              />
            ))}
          </div>
          <motion.img
            className="w-72 lg:w-96 h-96 rounded-xl shadow-md object-cover"
            src={product.image}
            alt="Main Product"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-4 w-full lg:w-1/2">
          <h1 className="text-gray-900 text-2xl font-bold">{product.name}</h1>
          
          <div className="flex items-center gap-2 text-yellow-500 text-lg">
            <span>★★★★☆</span>
            <span className="text-gray-600 text-sm">(125 Reviews)</span>
          </div>

          <div className="flex items-center gap-4 text-2xl font-bold">
            <span className="text-gray-400 line-through">${product.old_price}</span>
            <span className="text-red-500">${product.new_price}</span>
          </div>
          
          <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
          
          {/* Size Selection */}
          <div>
            <h1 className="text-lg font-semibold text-gray-700">Select Size:</h1>
            <div className="flex gap-3 mt-2">
              {["S", "M", "L"].map((size) => (
                <motion.div
                  key={size}
                  className={`px-5 py-2 rounded-lg cursor-pointer font-semibold shadow-md transition text-sm ${
                    selectedSize === size ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-blue-100"
                  }`}
                  onClick={() => setSelectedSize(size)}
                  whileTap={{ scale: 0.9 }}
                >
                  {size}
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Add to Cart Button */}
          <motion.button
            onClick={handleAddToCart}
            className="w-52 py-3 text-lg font-semibold text-white bg-blue-500 rounded-lg shadow-lg transition hover:bg-blue-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.4 }}
          >
            <FaShoppingCart className="inline mr-2" /> Add to Cart
          </motion.button>
          
          <div className="text-gray-700 text-sm">
            <span className="font-semibold">Category:</span> {product.category}
          </div>
        </div>
      </div>

      {/* Modal for Item Added Confirmation */}
      {showModal && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg w-80 text-center"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
          >
            <FaCheckCircle className="text-green-500 text-4xl mx-auto" />
            <p className="text-lg font-semibold text-gray-800 mt-3">Item added to cart!</p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Productdisplay;
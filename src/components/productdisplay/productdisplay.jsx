import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Productdisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  const [selectedSize, setSelectedSize] = useState("M"); // Default size M
  const [showModal, setShowModal] = useState(false);

  const handleAddToCart = () => {
    addToCart(product.id, selectedSize); // Add size to cart
    setShowModal(true);

    setTimeout(() => {
      setShowModal(false);
    }, 2500);
  };

  return (
    <>
      <div className="flex items-center mt-20 gap-2 text-gray-600 text-base font-semibold my-5 mx-4 sm:mx-12 capitalize font-poppins">
        <Link to="/"> HOME</Link>
        <span className="text-lg">{"<"} </span>  
        {product.category}
      </div>

      <div className="flex flex-col lg:flex-row gap-6 mx-4 lg:mx-16 font-poppins">
        <div className="flex gap-4">
          <div className="flex flex-col gap-4">
            <img className="h-20 lg:h-24" src={product.image} alt="Thumbnail" />
            <img className="h-20 lg:h-24" src={product.image} alt="Thumbnail" />
            <img className="h-20 lg:h-24" src={product.image} alt="Thumbnail" />
            <img className="h-20 lg:h-24" src={product.image} alt="Thumbnail" />
          </div>
          <img className="w-72 lg:w-80 h-96" src={product.image} alt="Main Product" />
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-gray-800 text-lg lg:text-xl font-semibold">
            {product.name}
          </h1>

          <div className="flex items-center gap-2 text-xs text-gray-900">
            <span>★★★★☆</span>
          </div>

          <div className="flex items-center gap-4 text-xl font-bold">
            <span className="text-gray-400 line-through">${product.old_price}</span>
            <span className="text-red-500">${product.new_price}</span>
          </div>

          <p className="text-sm font-sans text-gray-600">{product.description}</p>

          <div>
            <h1 className="text-lg font-semibold text-gray-500">Select Size:</h1>
            <div className="flex gap-2 mt-2">
              {["S", "M", "L"].map((size) => (
                <div
                  key={size}
                  className={`px-4 py-2 rounded cursor-pointer ${
                    selectedSize === size ? "bg-blue-500 text-white" : "bg-gray-200"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="w-52 py-2 border-none text-lg font-semibold text-white bg-blue-500 rounded mt-4"
          >
            Add to Cart
          </button>

          <div className="mt-2">
            <span className="font-semibold">Category:</span> {product.category}
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white border-blue-500 border-4 rounded shadow-lg p-6 w-64">
            <p className="text-center text-gray-800 font-semibold">
              Item added to your cart!
            </p>
            <div className="flex justify-center mt-4">
              <FaShoppingCart size={24} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Productdisplay;

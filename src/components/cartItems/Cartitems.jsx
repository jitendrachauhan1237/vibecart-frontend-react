import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import { Link } from "react-router-dom";
import StepIndicator from "../ProcedToPay/StepIndicator";

const Cartitems = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);
  

  return (
    <div className="my-24 mx-6 lg:mx-24 font-poppins">
        <StepIndicator/>
     
      <div className="hidden md:block mt-2">
      <div className="grid  md:grid-cols-6 grid-cols-5 items-center gap-8 text-gray-700 text-lg font-semibold bg-gray-100 p-4 rounded-lg shadow-md">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p className="md:block hidden">Total</p>
        <p>Remove</p>
      </div>
      <hr className="my-4 h-[2px] bg-gray-200" />
      </div>
      
      {all_product.map((product) => {
        if (cartItems[product.id] > 0) {
          return (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-md my-4">
              <div className="grid md:grid-cols-6 grid-cols-5 items-center gap-8 text-gray-700 text-lg font-medium py-4">
                <img
                  className="w-16 h-16 object-cover rounded-lg shadow"
                  src={product.image}
                  alt={product.name}
                />
                <p className="text-gray-900 font-semibold">{product.name}</p>
                <p className="text-green-600 font-bold">Rs. {product.new_price}</p>
                <button className="w-12 h-12 border-2 border-gray-300 bg-gray-100 rounded-md text-lg font-bold text-gray-700">
                  {cartItems[product.id]}
                </button>
                <p className="md:block hidden font-semibold text-gray-800">
                  Rs. {cartItems[product.id] * product.new_price}
                </p>
                <FaTrash
                  className="text-red-500 cursor-pointer hover:text-red-700 transition-transform transform hover:scale-110"
                  onClick={() => removeFromCart(product.id)}
                  size={20}
                />
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}

      <div className="flex flex-col lg:flex-row justify-between mt-16 gap-7">
        {/* Cart Total */}
        <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-gray-900">Cart Totals</h1>
          <div className="mt-6 space-y-4 text-lg">
            <div className="flex justify-between text-gray-700 font-medium">
              <p>Subtotal</p>
              <p>Rs. {getTotalCartAmount()}</p>
            </div>
            <hr className="h-[2px] bg-gray-200" />
            <div className="flex justify-between text-gray-700 font-medium">
              <p>Shipping Fee</p>
              <p className="text-green-600 font-bold">Free</p>
            </div>
            <hr className="h-[2px] bg-gray-200" />
            <div className="flex justify-between font-bold text-xl">
              <h3>Total</h3>
              <h3>Rs. {getTotalCartAmount()}</h3>
            </div>
          </div>
          <Link to="/shipping">
            <button
              onClick={() => window.scrollTo(0, 0)}
              className="w-full lg:w-60 h-14 mt-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold text-lg uppercase tracking-wider rounded-lg shadow-lg hover:from-indigo-500 hover:to-blue-700 hover:scale-105 transform transition-all duration-300"
            >
              🚀 Proceed to Checkout
            </button>
          </Link>
        </div>

        {/* Promo Code */}
        <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <p className="text-lg font-medium text-gray-700">Have a promo code?</p>
          <div className="flex mt-4">
            <input
              type="text"
              placeholder="Enter Promo Code"
              className="w-full lg:w-2/3 p-4 bg-gray-100 focus:outline-none rounded-l-lg shadow-sm text-gray-700"
            />
            <button className="w-full lg:w-1/3 h-14 bg-gray-800 text-white ml-2 font-semibold rounded-r-lg hover:bg-gray-900">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartitems;

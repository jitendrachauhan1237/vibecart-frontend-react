import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaCreditCard, FaUniversity } from "react-icons/fa";
import Lottie from "lottie-react";
import paymentMethod from "../../assets/Payment-method.json";
import paymentSuccess from "../../assets/Payment-sucess.json";
import { ShopContext } from "../../context/ShopContext";
import StepIndicator from "./StepIndicator";

const ProceedToPay = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);

  return (
    <>
  
    <div className="flex flex-col items-center justify-center h-auto bg-white  py-22 font-poppins">
    <StepIndicator />
      {/* Payment Container */}
      <div className="bg-white mt-10 mb-5 p-0 rounded-xl  w-full max-w-5xl ">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left: Payment Form */}
          <div className="bg-white p-5 rounded-lg shadow-md w-full">
            <h2 className="text-2xl font-extrabold text-gray-700 mb-5">Checkout</h2>
            <h3 className="text-lg font-bold mb-3">Card Type</h3>
            <div className="flex space-x-4 mb-5">
              <label className="flex items-center p-3 border rounded-lg cursor-pointer bg-gray-100">
                <input type="radio" name="cardType" className="mr-2" />
                <FaCreditCard className="text-lg text-blue-600 mr-2" />
                Credit Card
              </label>
              <label className="flex items-center p-3 border rounded-lg cursor-pointer bg-gray-100">
                <input type="radio" name="cardType" className="mr-2" />
                <FaUniversity className="text-lg text-green-600 mr-2" />
                Debit Card
              </label>
            </div>

            {/* Card Details Form */}
            <div>
              <label className="block font-bold text-gray-700">Name On Card</label>
              <input
                type="text"
                placeholder="Cardholder Name"
                className="w-full p-2 mt-1 mb-4 border border-gray-300 rounded-md"
              />
              <label className="block font-bold text-gray-700">Card Number</label>
              <input
                type="text"
                placeholder="xxxx-xxxx-xxxx-xxxx"
                className="w-full p-2 mt-1 mb-4 border border-gray-300 rounded-md"
              />
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label className="block font-bold text-gray-700">Valid On</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full p-2 mt-1 mb-4 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="w-1/2">
                  <label className="block font-bold text-gray-700">CVV</label>
                  <input
                    type="text"
                    placeholder="***"
                    className="w-full p-2 mt-1 mb-4 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="flex items-center mb-4">
                <input type="checkbox" className="mr-2" />
                <span className="text-gray-600">Securely save this card for faster checkout next time</span>
              </div>
            </div>

            
          </div>

          {/* Right: Order Summary */}
          <div className="bg-gray-100 p-5 rounded-lg shadow-md">
            <h2 className="text-2xl font-extrabold text-gray-700 mb-5">Order Summary</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Subtotal</span>
                <span className="font-bold text-gray-700">Rs. {getTotalCartAmount()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Shipping Fee</span>
                <span className="text-green-500">Free</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Discount</span>
                <span className="text-red-500">- Rs. 0</span>
              </div>
              <hr className="my-2 border-gray-400" />
              <div className="flex justify-between">
                <span className="text-xl font-bold text-gray-700">Total</span>
                <span className="text-xl font-bold text-gray-700">Rs. {getTotalCartAmount()}</span>
              </div>
            </div>

            <div className="mt-5 text-right">
              <button
                onClick={() => navigate(-1)}
                className="text-blue-500 hover:underline"
              >
                Change Shipping Details
              </button>
              <button
              onClick={() => setIsModalOpen(true)}
              className="w-full mt-3 bg-green-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-green-700 transition"
            >
              Pay Rs. {getTotalCartAmount()}
            </button>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm w-full">
            <Lottie animationData={paymentSuccess} className="w-32 mx-auto" />
            <h2 className="text-xl font-bold text-gray-800 mb-4">Payment Successful! ✅</h2>
            <p className="text-gray-600">Thank you for your payment. Your order has been placed successfully.</p>

            <button
              onClick={() => {
                setIsModalOpen(false);
                navigate("/");
              }}
              className="mt-4 w-full bg-green-500 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-green-600 transition"
            >
              Go to Home 🏠
            </button>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default ProceedToPay;

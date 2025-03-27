import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const Cartitems = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);

  return (
    <div className="my-36 mx-6 lg:mx-24 font-poppins">
      <div className="grid md:grid-cols-6 grid-cols-5 items-center gap-8 text-gray-700 text-base font-semibold">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p className="md:block hidden">Total</p>
        <p>Remove</p>
      </div>
      <hr className="my-4 h-[2px] bg-gray-200" />
      {all_product.map((product) => {
        if (cartItems[product.id] > 0) {
          return (
            <div key={product.id}>
              <div className="grid md:grid-cols-6 grid-cols-5 items-center gap-8 text-gray-700 text-lg font-medium py-4">
                <img  loading=" lazy"
                  className="w-16"
                  src={product.image}
                  alt={product.name}
                />
                <p>{product.name}</p>
                <p>Rs. {product.new_price}</p>
                <button className="w-12 h-12 border-2 border-gray-300">
                  {cartItems[product.id]}
                </button>
                <p className="md:block hidden">Rs. {cartItems[product.id] * product.new_price}</p>
                {/* <img  loading=" lazy"
                  className="w-4 cursor-pointer"
                  src="/Assets/cart_cross_icon.png"
                  onClick={() => removeFromCart(product.id)}
                  alt="Remove"
                /> */}
                <span className=" cursor-pointer">x</span>
              </div>
              <hr className="my-4 h-[2px] bg-gray-200" />
            </div>
          );
        } else {
          return null;
        }
      })}

      <div className="flex flex-col lg:flex-row justify-between mt-16 gap-7 ">
        {/* Cart Total */}
        <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
          <h1 className="text-2xl font-bold">Cart Totals</h1>
          <div className="mt-8 space-y-4">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>Rs. {getTotalCartAmount()}</p>
            </div>
            <hr className="h-[2px] bg-gray-200" />
            <div className="flex justify-between">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr className="h-[2px] bg-gray-200" />
            <div className="flex justify-between font-bold">
              <h3>Total</h3>
              <h3>Rs. {getTotalCartAmount()}</h3>
            </div>
          </div>
          <button className="w-60 h-14 mt-6 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">
            PROCEED TO CHECKOUT
          </button>
        </div>

        {/* Promo Code */}
        <div className="w-full lg:w-1/2 ">
          <p className="text-lg font-medium text-gray-600">
            If you have a promo code, enter it here
          </p>
          <div className="flex mt-4">
            <input
              type="text"
              placeholder="Promo Code"
              className="w-full lg:w-2/3 p-4 bg-gray-100 focus:outline-none rounded-tl-lg rounded-bl-lg"
            />
            <button className="w-full lg:w-1/3 h-14 bg-gray-800 text-white ml-2 font-semibold rounded-tr-lg  rounded-br-lg">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartitems;

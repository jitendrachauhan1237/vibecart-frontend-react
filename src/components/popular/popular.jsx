import React from "react";
import data_product from "../../../public/Assets/data.js";
import { Link } from "react-router-dom";

function PopularItem({ id, name, image, newPrice, oldPrice }) {
  return (
    <div className="transform transition-transform duration-500 w-full max-w-xs mx-auto">
      <Link to={`/product/${id}`} onClick={() => window.scrollTo(0, 0)}>
        <img
          loading="lazy"
          className="rounded-lg object-cover mb-4"
          src={image}
          alt={name}
        />
      </Link>
      <h2 className="text-gray-800 text-lg font-semibold">{name}</h2>
      <p className="text-green-600 font-bold">₹{newPrice}</p>
      <p className="text-gray-400 line-through">₹{oldPrice}</p>
    </div>
  );
}

function Popular() {
  return (
    <div className="flex flex-col items-center md:my-0 my-10">
      <div className="text-center">
        <h1 className="text-2xl lg:text-3xl font-bold mb-4">POPULAR IN WOMEN</h1>
        <hr className="w-20 h-1 bg-gray-800 rounded-full mx-auto mb-6" />
      </div>

      {/* Flexbox to Center the Grid Container */}
      <div className="w-full max-w-screen-xl mx-auto px-5">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {data_product.map((item) => (
            <PopularItem
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              newPrice={item.new_price}
              oldPrice={item.old_price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Popular;

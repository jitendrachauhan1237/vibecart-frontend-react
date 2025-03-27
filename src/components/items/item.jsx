import React from "react";
import { Link } from "react-router-dom";

const Item = ({ id, img, name, new_price, old_price }) => {
  return (
    <div className="transform transition-transform hover:scale-105 duration-500 lg:w-64 lg:h-72">
      <Link to={`/product/${id}`}>
        <img
         loading=" lazy"
          onClick={() => window.scrollTo(0, 0)}
          className=" object-cover mb-4"
          src={img}
          alt={name}
        />
      </Link>
      <p className="text-gray-800 text-lg font-semibold">{name}</p>
   
        <div className="text-green-600 font-bold">${new_price}</div>
        <div className="text-gray-400 line-through">
          ${old_price}
        </div>
  
    </div>
  );
};

export default Item;

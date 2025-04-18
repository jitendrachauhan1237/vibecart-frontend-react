import React from "react";
import data_product from "../../../public/Assets/data.js";
import Item from "../items/item";

const Relatedproduct = () => {
  return (
    <div className="flex flex-col items-center mt-10 md:mb-40">
      <h1 className="text-2xl lg:text-3xl font-bold mb-4">Related Product</h1>
      <hr className="w-20 h-1 bg-gray-800 rounded-full mx-auto mb-6"/>
      <div className="grid grid-cols-2 md:m-5 m-5 lg:mx-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-20 gap-6">
        {data_product.map((item) => {
          return (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              img={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Relatedproduct;

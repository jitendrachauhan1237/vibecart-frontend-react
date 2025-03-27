import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Item from "../components/items/item"; // Update the path if necessary

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-category">
     <div className="">
     <img
        loading=" lazy"
        className="block mx-auto mt-18 mb-10 "
        src={props.banner}
        alt=""
      />
     </div>
      <div className="flex justify-center items-center mx-auto my-5 ">
        <p className="text-lg">
          <span className="font-semibold">Showing 1-12</span> out of 36 products
        </p>
        
      </div>
      <div className="grid grid-cols-2 md:m-5 m-5 lg:mb-50 lg:mx-40 sm:grid-cols-2 lg:grid-cols-4 lg:gap-40 gap-6 ">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
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
          } else {
            return null;
          }
        })}
      </div>
     
    </div>
  );
};

export default ShopCategory;

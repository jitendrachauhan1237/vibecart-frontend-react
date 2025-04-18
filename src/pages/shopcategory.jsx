// import React, { useContext, useLocation } from "react";
// import { ShopContext } from "../context/ShopContext";
// import Item from "../components/items/item"; // Update the path if necessary
// import { motion, AnimatePresence } from "framer-motion";

// const ShopCategory = (props) => {
//   const { all_product } = useContext(ShopContext);
//   const location = useLocation();

//   return (
//     <div className="flex flex-col items-center">
//      <div className="">
//      <img
//         loading=" lazy"
//         className="block mx-auto mt-18 mb-10 "
//         src={props.banner}
//         alt=""
//       />
//      </div>
//       <div className="flex justify-center items-center mx-auto my-5 ">
//         <p className="text-lg">
//           <span className="font-semibold">Showing 1-12</span> out of 36 products
//         </p>
        
//       </div>
//       <div className="grid grid-cols-2 md:m-5 m-5 lg:mx-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-20 gap-6">
//         {all_product.map((item, i) => {
//           if (props.category === item.category) {
//             return (
//               <Item
//                 key={item.id}
//                 id={item.id}
//                 name={item.name}
//                 img={item.image}
//                 new_price={item.new_price}
//                 old_price={item.old_price}
                
//               />
//             );
//           } else {
//             return null;
//           }
//         })}
//       </div>
     
//     </div>
//   );
// };

// export default ShopCategory;

import React, { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShopContext } from "../context/ShopContext";
import Item from "../components/items/item"; // Update the path if necessary
import { useLocation } from "react-router-dom"; // Import useLocation from react-router-dom

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const location = useLocation(); // Get the current location (path)

  return (
    <AnimatePresence>
      <motion.div
        className="shop-category"
        key={location.key} // Use location.key to trigger animation on route change
        
      >
        <div className="flex flex-col items-center">
      <div className="">
      <img
        loading=" lazy"
        className="block mx-auto mt-20 mb-10 md:rounded-2xl shadow-sm"
        src={props.banner}
        alt=""
      />
      
     </div>
      <div className="flex justify-center items-center mx-auto my-5 ">
        <p className="text-lg">
          <span className="font-semibold">Showing 1-12</span> out of 36 products
        </p>
        
      </div>
      <div className="grid grid-cols-2 md:m-5 m-5 lg:mx-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-20 gap-6">
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
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 w-full h-screen bg-blue-300 bg-opacity-50 transform origin-bottom z-50"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="fixed top-0 left-0 w-full h-screen bg-blue-300 bg-opacity-50 transform origin-top z-50"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </AnimatePresence>
  );
};

export default ShopCategory;


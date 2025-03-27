import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import Productdisplay from "../components/productdisplay/productdisplay";
import Descriptionbox from "../components/discriptionbox/Descriptionbox";
import Relatedproduct from "../components/RelatedProducts/Relatedproduct";

function Product() {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div>
      <Productdisplay product={product} />
      <Descriptionbox />
      <Relatedproduct />
    </div>
  );
}

export default Product;

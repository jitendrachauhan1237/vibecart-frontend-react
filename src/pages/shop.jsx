import React from "react";
import Front from "./front";
import Popular from "../components/popular/popular";
import Offer from "../components/offers/offer";
import NewCollection from "../components/newCollection/newcollection";
import Newsletter from "../components/newsletter/newsletter";
import Navbar from "../components/Navbar/Navbar";

function Shop() {
  return (
    <>
    <Navbar/>
       <Front />
      <Popular />
      <Offer />
      <NewCollection />
      <Newsletter />
    </> 
  );
}

export default Shop;

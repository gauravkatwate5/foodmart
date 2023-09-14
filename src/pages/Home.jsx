import React from "react";
import Navbar from "../components/Navbar";
import CatogaryMenu from "../components/CatogaryMenu";
import FoodCard from "../components/FoodCard";
import Cart from "../components/Cart";

const Home = () => {
  return (
    <>
      <Navbar />
      <CatogaryMenu />
      <FoodCard />
      <Cart />
    </>
  );
};

export default Home;

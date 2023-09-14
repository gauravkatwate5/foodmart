import React, { useEffect, useState } from "react";
import FoodData from "../FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategorydata } from "../redux/slice/CategorySlice";

const CatogaryMenu = () => {
  const [category, setCatagory] = useState([]);
  const Selectedcategory = useSelector((state) => state.category.category);
  const Dispatch = useDispatch();
  const listUnqueCategory = () => {
    const uniquecategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCatagory(uniquecategories);
    console.log(uniquecategories);
  };
  useEffect(() => {
    listUnqueCategory();
  }, []);

  return (
    <div className="mx-6">
      <h3 className="text-xl font-semibold">Find the best food</h3>
      <div className="my-5 flex gap-3 overflow-scroll scroll-smooth lg:overflow-hidden">
        <button
          className={`px-3 py-2 cursor-pointer bg-gray-200 hover:text-white hover:bg-green-500 rounded-lg font-bold ${
            Selectedcategory === "All" && "bg-green-500 text-white"
          }`}
          onClick={() => Dispatch(setCategorydata("All"))}
        >
          All
        </button>
        {category.map((category, index) => {
          return (
            <button
              key={index}
              className={`px-3 py-2 cursor-pointer bg-gray-200 hover:text-white hover:bg-green-500 rounded-lg font-bold ${
                Selectedcategory === category && "bg-green-500 text-white"
              }`}
              onClick={() => Dispatch(setCategorydata(category))}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CatogaryMenu;

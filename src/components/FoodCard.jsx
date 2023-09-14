import React, { useState } from "react";
import Fooddata from "../FoodData";
import { data } from "autoprefixer";
import { AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "../redux/slice/CartSlice";
import toast, { Toaster } from "react-hot-toast";

const FoodCard = () => {
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);

  console.log(search);
  const [fooditem, setFooditem] = useState(Fooddata);
  const dispatch = useDispatch();

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-wrap gap-10 justify-center lg:justify-start ml-7 py-10">
        {fooditem
          .filter((food) => {
            if (category === "All") {
              return food.name.toLowerCase().includes(search.toLowerCase());
            } else {
              return (
                category === food.category &&
                food.name.toLowerCase().includes(search.toLowerCase())
              );
            }
          })
          .map((food) => {
            return (
              <div className="font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg gap-2">
                <img
                  src={food.img}
                  class=" rounded-top"
                  alt=""
                  className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500"
                />
                <div className="text-sm flex justify-between">
                  <h2>{food.name}</h2>
                  <span className="text-green-500 ">₹{food.price}</span>
                </div>
                <p className="text-sm font-normal">
                  {food.desc.slice(0, 50)}...
                </p>
                <div className="flex justify-between">
                  <span className="flex justify-center items-center">
                    <AiFillStar className="mr-1 text-yellow-400" />
                    {food.rating}
                  </span>
                  <button
                    className="p-1 text-white text-sm rounded-lg bg-green-500 hover:bg-green-600"
                    onClick={() => {
                      dispatch(addTocart(food));
                      toast.success(`Added ${food.name}`);
                    }}
                  >
                    Add TO Cart
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default FoodCard;

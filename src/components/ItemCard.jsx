import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  decrementqty,
  incrementqty,
  removefromcart,
} from "../redux/slice/CartSlice";
import toast, { Toaster } from "react-hot-toast";

const ItemCard = ({ id, name, price, img, qty, food }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3">
      <MdDelete
        className="absolute right-7 m-1 text-gray-600 cursor-pointer"
        onClick={() => {
          dispatch(removefromcart(food));
          toast.success(`removed ${name}`);
        }}
      />
      <img src={img} alt="" className="w-[50px] h-[50px]" />
      <div className="leading-5">
        <h2 className="font-bold pr-1 text-gray-800">{name}</h2>
        <div className="flex justify-between">
          <span className="font-bold text-green-500">₹{price}</span>
          <div className="flex justify-center items-center gap-2 absolute right-7">
            <AiOutlineMinus
              className="text-xl border-2 text-gray-600 border-gray-600 hover:text-white hover:bg-green-500 rounded-lg transition-all ease-linear cursor-pointer p-1 hover:border-none"
              onClick={() => {
                qty > 1
                  ? dispatch(decrementqty(food))
                  : dispatch(removefromcart(food)) &&
                    toast.success(`removed ${name}`);
              }}
            />
            <span>{qty}</span>
            <AiOutlinePlus
              className="text-xl border-2 text-gray-600 border-gray-600 hover:text-white hover:bg-green-500 rounded-lg transition-all ease-linear cursor-pointer p-1 hover:border-none"
              onClick={() => {
                dispatch(incrementqty(food));
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;

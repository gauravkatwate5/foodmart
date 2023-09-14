import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const navigate = useNavigate();
  const cartData = useSelector((state) => state.cart.cart);
  const totalqty = cartData.reduce((totalqty, item) => totalqty + item.qty, 0);
  const totalprice = cartData.reduce(
    (totalprice, item) => totalprice + item.price * item.qty,
    0
  );
  const data = cartData;
  console.log(data);
  const [activecart, setActivecart] = useState(false);

  return (
    <>
      <div
        className={`fixed right-0 top-0 lg:w-[20vw] w-full h-full p-5 bg-white mb-3 ${
          activecart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50`}
      >
        <div className="flex justify-between items-center my-3 ">
          <span className="text-xl font-bold text-gray-800">my order</span>
          <IoMdClose
            onClick={() => {
              setActivecart(!activecart);
            }}
            className="border-2 border-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer"
          />
        </div>
        {cartData.length > 0 ? (
          cartData.map((food, index) => {
            return (
              <ItemCard
                key={index}
                id={food.id}
                name={food.name}
                price={food.price}
                img={food.img}
                qty={food.qty}
                food={food}
              />
            );
          })
        ) : (
          <h1 className="text-center font-bold text-xl text-gray-800">
            Your cart is empty
          </h1>
        )}

        <div className="absolute bottom-0">
          <h3 className="font-semibold text-gray-800">items:{totalqty}</h3>
          <h3 className="font-semibold text-gray-800">
            total amount : {totalprice}
          </h3>
          <hr className="lg:w-[18vw] w-[90vw] my-2" />
          <button
            className="bg-green-500 font-bold px-3 py-2 text-white rounded-lg lg:w-[18vw] w-[90vw] mb-5"
            onClick={() => {
              navigate("/success");
            }}
          >
            CheckOut
          </button>
        </div>
      </div>
      <FaShoppingCart
        onClick={() => {
          setActivecart(!activecart);
        }}
        className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4 
        ${cartData.length && "animate-bounce delay-500 transition-all"}`}
      />
    </>
  );
};

export default Cart;

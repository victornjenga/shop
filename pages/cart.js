import Link from "next/link";
import React, { useRef } from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { useStateContext } from "../context/StateContext";
import { urlFor } from "../lib/client";

const Cart = () => {
  const cartRef = useRef();
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleCartItemQuanitity,
    onRemove,
  } = useStateContext();

  return (
    <div className="pt-16" ref={cartRef}>
      <div className="flex flex-col items-center  justify-center">
        <button className="flex pt-4 text-center text-xl items-center font-bold">
          <span className="">Your Cart:</span>
          <span className="">{totalQuantities} items</span>
        </button>
        {cartItems.length < 1 ? (
          <div className=" justify-center pb-10 items-center flex flex-col">
            <AiOutlineShopping size={150} />
            <h3>Your Shopping Cart is Empty</h3>
            <Link href="/">
              <button
                type="button"
                className="bg-green-500 text-white px-3 py-2 rounded-xl text-2xl font-bold hover:scale-105 duration-300 mt-10"
              >
                Continue Shoppping
              </button>
            </Link>
          </div>
        ) : (
          <div className="flex space-y-1 flex-col items-center justify-center">
            {cartItems.map((item) => (
              <div className="block md:flex p-5  pt-4 space-x-6" key={item._id}>
                <img
                  className="w-[180px] h-[150px] bg-gray-500"
                  src={urlFor(item?.image[0])}
                />
                <div className="">
                  <div className="flex space-x-10 items-center justify-center">
                    <h5 className="font-medium text-2xl">{item.name}</h5>
                    <h4 className="font-medium text-2xl">Ksh{item.price}</h4>
                  </div>
                  <div className="flex spaxe-x-10 justify-between">
                    <p className="flex space-x-3 justify-center   ">
                      <span
                        onClick={() => toggleCartItemQuanitity(item._id, "dec")}
                        className="bg-red-500 p-3 cursor-pointer  text-xl font-bold"
                      >
                        <AiOutlineMinus />
                      </span>
                      <span className="text-2xl font-semibold">
                        {item.quantity}
                      </span>
                      <span
                        onClick={() => toggleCartItemQuanitity(item._id, "inc")}
                        className="bg-green-500 p-3 cursor-pointer text-xl font-bold"
                      >
                        <AiOutlinePlus />
                      </span>
                    </p>
                    <button
                      type="button"
                      className="text-3xl ml-10 text-red-600"
                      onClick={() => onRemove(item)}
                    >
                      <TiDeleteOutline />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {cartItems.length >= 1 && (
        <div className="pt-4 pb-10 bottom-4 w-full  justify-center items-center flex- flex-col">
          <div className="flex text-2xl font-bold justify-around">
            <h3>Subtotal:</h3>
            <h3>Ksh {totalPrice}</h3>
          </div>
          <div className="flex pt-6 items-center justify-center">
            <Link href="/pay">
              <button
                type="button"
                className="bg-green-500 text-white px-3  py-2 rounded-xl text-2xl font-bold hover:scale-105 duration-300 "
                onClick=""
              >
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

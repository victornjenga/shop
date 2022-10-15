import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineShopping,
  AiOutlineStar,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../lib/client";

function Products({ product: { image, name, slug, price } }) {
  // const { image, name, slug, price }=product
  return (
    <>
      <div className="px-5 justify-center flex items-center flex-col ">
        <Link href={`/product/${slug.current}`}>
          <div className="flex flex-col bg-white px-2 rounded-2xl py-2">
            {/* <Image width="200px" height="200px" src={image} alt="/" /> */}
            <img
              src={urlFor(image && image[0])}
              width={200}
              height={200}
              className=""
              alt=""
            />
            <div className="">
              <h1>{name}</h1>
              <div className="flex items-center space-x-3 text-center ">
                <div className="text-[#f58e49] flex space-x-1 text-center ">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                </div>
                <p className="text-[#324d67] ]">(20)</p>
              </div>

              <div className="flex  space-x-10 items-center  ">
                <p className="font-semibold ">Ksh {""}{price}</p>
                <AiOutlineShoppingCart className="text-xl" />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Products;

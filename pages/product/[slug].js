import React, { useState } from "react";
import { client, urlFor } from "../../lib/client";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import Link from "next/link";
import { Products } from "../../components/Products";
import { useStateContext } from "../../context/StateContext";
import Router from "next/router";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Axios from "axios";

const ProductDetails = ({ product, products }) => {
  const [phone, setPhone] = useState();
  const [amount, setAmount] = useState();

  const [openMpesa, setOpenMpesa] = useState("");

  //   Form validation
  const [buttonText, setButtonText] = useState("Confirm Payment");

  const { incQty, decQty, qty, onAdd, totalPrice } = useStateContext();
  // console.log(products)
  const { image, name, details, price } = product;

  const payHandler = (event) => {
    event.preventDefault();
    setButtonText("Processing");
    Axios.post("https://railwaympesa.up.railway.app/token", {
      amount:price,
      phone,
    })
      .then((res) => {
        console.log(res);
        setButtonText("Pay");
      })
      .catch((error) => {
        console.log(error);
        setButtonText("Pay");
      });
  };

  const OrderButtonWrapper = () => {
    return (
      <PayPalButtons
        className="w-[80%] z-0 md:w-[30%]"
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: price / 100,
                },
              },
            ],
          });
        }}
      />
    );
  };
  return (
    <div className="pt-10">
      <div className="flex justify-center items-center">
        <div className=" flex-wrap md:flex space-x-10 m-10 mt-15 justify-center items-center">
          <div className="image-container">
            <img
              src={urlFor(image && image[0])}
              className="rounded-3xl w-[350px] w-[350px] md:w-[400px] md:h-[400px] scale-105 duration-300"
            />
          </div>
          <div className="mt-10">
            <h1 className="text-3xl font-lg">{name}</h1>
            <div className="flex items-center space-x-3 text-center ju">
              <div className="text-[#f02d34] mt-3 flex space-x-2 text-center ">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
              <p className="text-[#324d67] mt-0]">(20)</p>
            </div>
            <h4 className="font-bold py-2 text-xl">Details</h4>
            <p>{details}</p>
            <p className="font-semibold text-red-500">Ksh{price}</p>
            <div className="space-x-2 flex">
              <h3>Quantity:</h3>
              <p className="flex space-x-3 items-center  ">
                <span
                  onClick={decQty}
                  className="bg-red-500 p-3 cursor-pointer  text-xl font-bold"
                >
                  <AiOutlineMinus />
                </span>
                <span className="text-2xl font-semibold">{qty}</span>
                <span
                  onClick={incQty}
                  className="bg-green-500 p-3 cursor-pointer text-xl font-bold"
                >
                  <AiOutlinePlus />
                </span>
              </p>
            </div>
            <div className="flex flex-col mt-4 space-y-4 items-center justify-center">
              <button
                type="button"
                onClick={() => onAdd(product, qty)}
                className="px-3 py-2  border-solid border-red-600 border rounded-2xl cursor-pointer  hover:scale-105 duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex relative justify-center items-center z-0 flex-col">
        <h2 className="text-2xl font-bold">Buy Now</h2>
        <h2 className="text-xl font-lg">
          Pay Ksh {""}
          <span>{price}</span>
        </h2>
        <button
          onClick={() => setOpenMpesa(!openMpesa)}
          className="w-[80%] z-0 md:w-[30%] bg-green-600 px-3 text-white my-2 py-2 rounded-xl font-medium"
        >
          Pay With Mpesa
        </button>
        {openMpesa && (
          <div className="flex flex-col items-center justify-center my-2">
            {/* <h2 className="italic font-medium text-xl">Payment Instructions</h2>
            <ol>
              <li>1.Go to M-Pesa menu</li>
              <li>2.Click on Lipa na M-Pesa</li>
              <li>3.Click on Buy Goods and Services</li>
              <li>4.Enter till no 9956353</li>
              <li>
                5.Enter amount {""} <span>Ksh {price}</span>
              </li>
              <li>6.Wait for the M-Pesa message</li>
              <li>8.Enter Transaction Code </li>
              <li>9.Click Confirm</li>
            </ol> */}
            <form onClick={payHandler} className="flex flex-col space-y-2">
              {/* <input
                type="text"
                onChange={(e) => setAmount(e.target.value)}
                name="Amount"
                className="border-black  text-center border rounded-lg"
                placeholder=" Amount"
              /> */}

              <input
                type="text"
                onChange={(e) => setPhone(e.target.value)}
                name="Phone"
                className="border-black text-center border rounded-lg"
                placeholder="Phone Number"
              />

              <button
                type="submit"
                className="text-sm py-1 px-2 hover:bg-green-600 bg-gray-800 rounded-md text-white"
              >
                {buttonText}
              </button>
              {/* <div className="text-left">
                {showSuccessMessage && (
                  <p className="text-green-500 font-semibold text-[10px] my-2">
                    Thankyou! Your Code has been delivered for confirmation.{" "}
                    <br></br>Getting Back To You shortly
                  </p>
                )}
                {showFailureMessage && (
                  <p className="text-red-500">
                    Oops! Something went wrong, please try again.
                  </p>
                )}
              </div> */}
            </form>
          </div>
        )}
        <PayPalScriptProvider
          options={{
            "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
            components: "buttons",
            "data-namespace": "paypalOrder",
          }}
        >
          <OrderButtonWrapper className="w-[500px]  z-0" />
        </PayPalScriptProvider>
      </div>
      {/* <div className="justify-center items-center flex flex-col">
        <h2 className="text-3xl py-4 font-bold italic">You may also like</h2>
        <div className="">
          <div className="flex flex-wrap space-x-3 justify-center items-center  ">
            {products.map((product) => (
              <>
              <Products key={product._id} product={product} />
              </>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
      slug {
        current
      }
    }
    `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: { products, product },
  };
};

export default ProductDetails;

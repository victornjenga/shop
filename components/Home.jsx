import React from "react";
import { getSession } from "next-auth/react";
import Image from "next/image";
// import { useSession, signIn, signOut } from "next-auth/react";
import contact from "../public/assets/contact.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
function Home() {
  // const { data: session } = useSession();

  return (
    <div className="  w-full pt-20  flex flex-col  ">
      <h1 className="justify-start text-2xl font-bold pl-[20%] ">
        Special Offers
      </h1>
      <div className="  block md:flex w-full  md:space-x-10 items-center justify-center ">
        <Carousel infiniteLoop="true">
          <div className="justify-center items-center text-center flex ">
            <div className="relative w-[250px] md:w-[400px] h-[200px] ">
              <Image
                layout="fill"
                src={contact}
                alt="/"
                className=" rounded-3xl"
              />
            </div>
            <div className="absolute flex flex-col w-[250px] md:w-[400px]  h-[200px] rounded-3xl bg-black/50 px-2  justify-center items-start ">
              <h2 className="text-3xl text-white font-bold">
                High quality Fruits
              </h2>
              <p className="text-white text-sm">
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <button className="bg-orange-600 rounded-xl text-white px-2 py-1 font-medium hover:bg-black/40 duration-300 text-sm">
                Buy Now
              </button>
            </div>
          </div>
          <div className="justify-center py-4 items-center text-center flex ">
            <div className="relative w-[250px] md:w-[400px] h-[200px] ">
              <Image
                layout="fill"
                src={contact}
                alt="/"
                className=" rounded-3xl"
              />
            </div>
            <div className="absolute flex flex-col w-[250px] md:w-[400px] h-[200px] rounded-3xl bg-black/50  justify-center items-start px-6 ">
              <h2 className="text-xl text-white font-bold">Discounts Up to </h2>
              <h2 className="text-4xl text-white font-bold">20%</h2>
              <p className="text-white">Lorem ipsum dolor sit ?</p>
              <button className="bg-orange-600 rounded-xl text-white px-2 py-1 font-medium hover:bg-black/40 duration-300 text-sm">
                Buy Now
              </button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Home;

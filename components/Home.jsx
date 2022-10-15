import React, { useEffect, useState } from "react";
import Image from "next/image";
import civrot from "../public/assets/civrot.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Home() {
  return (
    <div className="pt-10">
      <Carousel autoPlay infiniteLoop="true">
        <div>
          <section
            className={`flex items-center justify-center  space-y-8 bg-gradient-to-b to-black from-red-500 h-80 text-white p-8`}
          >
            <div>
              {" "}
              <h1 className="text-2xl md:text-3xl xl:text-5xl py-2 font-bold">
                Fresh Fruits
              </h1>
              <p className=" py-2text-lg">
                Fresh and healthy fruits delivered to your doorsteps
              </p>
              <h1 className="text-xl  py-2 font-bold">Free delivery</h1>
              <button className="bg-black  text-sm hover:bg-green-600  text-white rounded-2xl px-1 py-2">
                Buy Now
              </button>
            </div>
          </section>
        </div>
        <div>
          <section
            className={`flex items-center justify-center  space-y-8 bg-gradient-to-b to-black from-blue-500 h-80 text-white p-8`}
          >
            <div>
              <h1 className="text-2xl py-2 md:text-3xl xl:text-5xl font-bold">
                Affordable and Reliable
              </h1>
              <p className="text-lg py-2">
                Our fruits are toxic free and fresh out of the farm
              </p>
              <h1 className="text-xl py-2 font-bold">Juicy and delicios</h1>
              <p className="text-lg py-2">Up to 20% Off</p>
            </div>
          </section>
        </div>
        <div>
          <section
            className={`flex items-center justify-center  space-y-8 bg-gradient-to-b to-black from-yellow-500 h-80 text-white p-8`}
          >
            <div>
              <h1 className="text-2xl py-2 md:text-3xl xl:text-5xl font-bold">
                100% refund guarantee
              </h1>
              <p className="text-lg py-2">
                In case of an erroneous delivery of an item,Our dedicated
                delivery team will restore the situation ASAP
              </p>
              <h1 className="text-xl py-2 font-bold">
                Easier to manage stores
              </h1>
              <p className="text-lg py-2">Up to 80% Off</p>
            </div>
          </section>
        </div>
      </Carousel>
    </div>
  );
}

export default Home;

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
                Robust ecommerce store
              </h1>
              <p className=" py-2text-lg">
                Fully fledged ecommmerce stores with checkout functionality and
                payment intergrations
              </p>
              <h1 className="text-xl  py-2 font-bold">
                One free Month maintenance
              </h1>
              <button className="bg-black  text-sm hover:bg-green-600  text-white rounded-2xl px-1 py-2">
                Get Started
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
                Free Domain,Hosting and SSL
              </h1>
              <p className="text-lg py-2">
                Our stores come with a free domain bearing your preffered domain
                name at such an affordable rates
              </p>
              <h1 className="text-xl py-2 font-bold">SEO Friendly websites</h1>
              <p className="text-lg py-2">
                Up to 80% Off
              </p>
            </div>
          </section>
        </div>
        <div>
          <section
            className={`flex items-center justify-center  space-y-8 bg-gradient-to-b to-black from-yellow-500 h-80 text-white p-8`}
          >
            <div>
              <h1 className="text-2xl py-2 md:text-3xl xl:text-5xl font-bold">
                CMS Intergration
              </h1>
              <p className="text-lg py-2">
                Clients have admin privilages to change the content of thier
                websites easily on their phone
              </p>
              <h1 className="text-xl py-2 font-bold">
                Easier to manage stores
              </h1>
              <p className="text-lg py-2">
                Up to 80% Off
              </p>
            </div>
          </section>
        </div>
      </Carousel>
    </div>
  );
}

export default Home;

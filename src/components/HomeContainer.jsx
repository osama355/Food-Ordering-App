import React from "react";
import Delivery from "../assests/delivery.png";
import HeroBg from "../assests/heroBg.png";
import { heroData } from "../utils/data";

function HomeContainer() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
      <div className="py-2 flex flex-col items-start justify-center flex-1 gap-5">
        <div className="flex items-center justify-center gap-2 px-4 py-1 bg-orange-100 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Bike Delievery
          </p>
          <div className="w-8 h-8 drop-shadow-xl bg-white rounded-full overflow-hidden">
            <img
              className="w-full h-full object-contain"
              src={Delivery}
              alt="delivery"
            />
          </div>
        </div>
        <p className="text-[2.5rem] lg:text-[3rem] font-bold tracking-wide text-headingColor">
          The Fastest Delivery in{" "}
          <span className="text-orange-600 text-[3rem] lg:text-[4rem]">
            Your City
          </span>
        </p>
        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eos
          hic, quasi optio eligendi ipsa rem fugiat, quidem quam sapiente
          eveniet nihil beatae ipsam cupiditate! Voluptate accusantium animi
          deleniti dignissimos?
        </p>
        <button
          type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-600 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Order Now
        </button>
      </div>
      {/* p-4 */}
      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={HeroBg}
          className="ml-auto h-420 w-full lg:w-auto lg:h-505"
          alt="hero-bg"
        />
        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center xl:justify-end xl:px-24 py-6 gap-4 flex-wrap">
          {heroData.map((h) => (
            <div
              key={h.id}
              className="p-2 lg:p-4 w-150 lg:w-190 bg-cardOverlay backdrop-blur-md rounded-lg flex items-center justify-center flex-col drop-shadow-lg"
            >
              <img
                src={h.imageSrc}
                className="w-20 lg:w-28 lg:-mt-[85px] h-28"
                alt="ice-1"
              />
              <p className="lg:text-lg mt-2 text-[12px] font-semibold text-textColor">
                {h.name}
              </p>
              <p className="lg:text-sm text-[12px] text-gray-400 font-semibold my-1 lg:my-3">
                {h.decp}
              </p>
              <p className="lg:text-sm text-[12px] font-semibold text-headingColor">
                <span className="lg:text-xs text-[12px] text-red-600">Rs</span>{" "}
                {h.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeContainer;

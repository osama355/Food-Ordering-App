import React from "react";
import Delivery from "../assests/delivery.png";

function HomeContainer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
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

      <div className="p-4 bg-blue-400 flex-1"></div>
    </div>
  );
}

export default HomeContainer;

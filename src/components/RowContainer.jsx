import React from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useEffect } from "react";
import NotFound from '../assests/NotFound.svg';

function RowContainer({ flag, data, scrollValue }) {
  const ref = useRef();

  useEffect(() => {
    ref.current.scrollLeft += scrollValue;
  }, [scrollValue]);

  console.log(data);
  return (
    <div
      ref={ref}
      className={`w-full my-12 flex items-center gap-3 scroll-smooth ${
        flag
          ? "overflow-x-scroll scrollbar-none"
          : "overflow-x-hidden flex-wrap justify-center"
      }`}
    >
      {data && data.length > 0 ? (
        data.map((item) => (
          <div
            key={item?.id}
            className="w-275 h-auto min-w-[275px] md:min-w-[300px] md:w-300 my-12 backdrop-blur-lg bg-cardOverlay rounded-lg py-2 px-4 hover:drop-shadow-lg flex flex-col items-center justify-even relative"
          >
            <div className="w-full flex items-center justify-between">
              <motion.div
                className=" w-36 h-40 -mt-8 drop-shadow-2xl"
                whileHover={{ scale: 1.2 }}
              >
                <img
                  className="w-full h-full object-contain"
                  src={item?.imageURL}
                  alt=""
                />
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.75 }}
                className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md -mt-8"
              >
                <MdShoppingBasket className="text-white" />
              </motion.div>
            </div>

            <div className="w-full flex flex-col items-end justify-end -mt-8">
              <p className="text-textColor font-semibold text-base md:text-lg">
                {item?.title}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                {item?.calories} Calories
              </p>
              <div className="flex items-center gap-8">
                <p className="text-lg text-headingColor font-semibold">
                  <span className="text-sm text-red-500">Rs</span> {item?.price}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="w-300 h-300 flex flex-col items-center justify-center">
          <img src={NotFound} alt="" />
          <p className="text-xl text-headingColor font-semibold my-2">Item not found</p>
        </div>
      )}
    </div>
  );
}

export default RowContainer;

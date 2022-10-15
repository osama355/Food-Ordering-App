import React from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useEffect } from "react";

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
          : "overflow-x-hidden flex-wrap"
      }`}
    >
      {data &&
        data.map((item) => (
          <div
            key={item.id}
            className="w-300 min-w-[300px] md:min-w-[340px] md:w-275 h-auto my-12 backdrop-blur-lg bg-cardOverlay rounded-lg p-2 hover:drop-shadow-lg"
          >
            <div className="w-full flex items-center justify-between">
              <motion.img
                whileHover={{ scale: 1.2 }}
                src="https://firebasestorage.googleapis.com/v0/b/restaurant-app-4e569.appspot.com/o/Images%2F1665491948627-d6.png?alt=media&token=302d389e-3f19-4dfd-a222-8a4fd8c88615"
                alt=""
                className="w-40 -mt-8 drop-shadow-2xl"
              />
              <motion.div
                whileTap={{ scale: 0.75 }}
                className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md"
              >
                <MdShoppingBasket className="text-white" />
              </motion.div>
            </div>

            <div className="w-full flex flex-col items-end justify-end">
              <p className="text-textColor font-semibold text-base md:text-lg">
                Fanta
              </p>
              <p className="mt-1 text-sm text-gray-500">45 Calories</p>
              <div className="flex items-center gap-8">
                <p className="text-lg text-headingColor font-semibold">
                  <span className="text-sm text-red-500">Rs</span> 100
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default RowContainer;

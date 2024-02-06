"use client";
import React, { useEffect, useState } from "react";
import data from "../constants/images";
import Image from "next/image";
import { easeInOut, motion } from "framer-motion";

export default function Services() {
  const [img, setImg] = useState(1);
  const [index, setIndex] = useState(0);
  const handleNextImage = () => {
    setIndex((index) => (index + 1) % data.length);
  };
  useEffect(() => {
    setTimeout(() => {
      if (index === 4) {
        setIndex(1);
      }
      handleNextImage();
    }, 1000);
    return () => {
      clearTimeout(0);
    };
  }, [index]);
  console.log(index);
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { ease: easeInOut, type: "spring", delay: 0.4 },
      }}
      className="p-3 relative justify-center items-center bg-gray-100"
    >
      <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { ease: easeInOut, delay: 1, type: "tween" },
          }}
          className="md:w-[70%] md:pl-4 ml-3 md:flex flex-col items-center 
          justify-center text-center uppercase "
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: { ease: easeInOut, type: "tween", delay: 0.6 },
            }}
            className="text-[20px] pt-3 font-bold text-red-600"
          >
            our services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: { ease: easeInOut, type: "tween", delay: 0.8 },
            }}
            className="text-center text-gray-600 pt-[1rem] md:text-lg text-sm"
          >
            wedding1 The Old English “Wedding” starts off pretty
            straightforward: “State of being wed; pledge, betrothal; action of
            marrying.” Okay, we don't think anyone's surprised by that. It's how
            we use the word today
          </motion.p>
        </motion.div>
        <div className=" bg-gray-100 p-3 w-[100%] ">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { ease: easeInOut, delay: 1, type: "tween" },
            }}
            className="items-center justify-center text-center"
          >
            {data.map((data) => (
              <motion.div
                initial={{ opacity: 1, scale: 0.9 }}
                whileHover={{
                  opacity: 1,
                  scale: 1,
                  transition: { ease: easeInOut, type: "spring" },
                }}
                className="object-contain"
              >
                <Image
                  src={data.img}
                  width={300}
                  height={300}
                  className={`${
                    data?.index === index ? "block" : "hidden"
                  } w-full rounded-md`}
                />
                <div></div>
                <div className="">
                  {/* //<h1 className="bg-glassmorphism text-center text-xl font-bold">{data?.index===index &&data.index}</h1> */}
                  <h1 className="text-xl font-bold pt-3 text-center">
                    {data?.index === index && data.data}
                  </h1>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

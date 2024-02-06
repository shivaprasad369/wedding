"use client";
import Image from "next/image";
import React from "react";
import img from "../assets/slide1.jpeg";
import { easeInOut, motion } from "framer-motion";

export default function Specialization() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.3, ease: easeInOut, type: "spring " },
      }}
      className="pt-5 justify-center items-center md:pl-[7rem] text-center gap-4 "
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.6, ease: easeInOut, type: "spring " },
        }}
        className="font-bold text-[2rem] pb-[3rem]"
      >
        Our Specialization
      </motion.h1>
      <div className="grid md:grid-rows-2 md:grid-flow-col max-md:grid-cols-1 gap-3 pt-3">
        <motion.div  initial={{ opacity: 0, scale:1}}
      whileInView={{
        opacity: 1,
        scale:1.2,
        transition: { delay: 0.3, ease: easeInOut, type: "spring " },
      }} className="md:row-start-1 max-md:w-[100%] md:row-span-3 items-center flex flex-col">
          <div>
            <Image
              src={img}
              width={100}
              height={150}
              className="rounded-full max-md:w-[100%]"
            />
          </div>
          <div>
            <h1>One stop solution</h1>
          </div>
        </motion.div>
        <motion.div  initial={{ opacity: 0, scale:1}}
      whileInView={{
        opacity: 1,
        scale:1.2,
        transition: { delay: 0.5, ease: easeInOut, type: "spring " },
      }} className="md:row-end-2 md:row-span-3 flex flex-col items-center ">
          <div>
            <Image
              src={img}
              width={100}
              height={100}
              className="rounded-full max-md:w-[100%]"
            />
          </div>
          <div>
            <h1>One stop solution</h1>
          </div>
        </motion.div>
        <motion.div  initial={{ opacity: 0, scale:1}}
      whileInView={{
        opacity: 1,
        scale:1.2,
        transition: { delay: 0.7, ease: easeInOut, type: "spring " },
      }} className="md:row-start-1 md:row-span-3 flex flex-col items-center ">
          <div>
            <Image
              src={img}
              width={100}
              height={100}
              className="rounded-full max-md:w-[100%]"
            />
          </div>
          <div>
            <h1>One stop solution</h1>
          </div>
        </motion.div>
        <motion.div  initial={{ opacity: 0, scale:1}}
      whileInView={{
        opacity: 1,
        scale:1.2,
        transition: { delay: 0.9, ease: easeInOut, type: "spring " },
      }} className="md:row-end-2 md:row-span-3 flex flex-col items-center">
          <div>
            <Image
              src={img}
              width={100}
              height={100}
              className="rounded-full max-md:w-[100%]"
            />
          </div>
          <div>
            <h1>One stop solution</h1>
          </div>
        </motion.div>
        <motion.div  initial={{ opacity: 0, scale:1}}
      whileInView={{
        opacity: 1,
        scale:1.2,
        transition: { delay: 1.1, ease: easeInOut, type: "spring " },
      }} className="md:row-start-1 md:row-span-3 flex flex-col items-center">
          <div>
            <Image
              src={img}
              width={100}
              height={100}
              className="rounded-full max-md:w-[100%]"
            />
          </div>
          <div>
            <h1>One stop solution</h1>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

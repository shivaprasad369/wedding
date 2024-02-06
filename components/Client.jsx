"use client";
import Image from "next/image";
import React from "react";
import img from "../assets/slide1.jpeg";
import { easeIn, motion } from "framer-motion";

export default function Client() {
  return (
    <div>
      <div className="flex md:flex-row max-md:flex-col gap-4 bg-slate-200 md:h-[20rem] h-full md:pl-3">
        <motion.div
          initial={{ opacity: 0, x: -50, rotate: 50 }}
          whileInView={{
            opacity: 1,
            x: 0,
            rotate: 0,
            transition: {
              ease: easeIn,
              type: "spring",
              duration: 1,
              delay: 0.5,
            },
          }}
          className=" w-auto pt-[2rem]"
        >
          <Image src={img} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50,  }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              ease: easeIn,
              type: "spring",
              duration: 1,
              delay: 0.7,
            },
          }}
          className=" border-black px-3 items-center justify-center"
        >
          <div className="text-center flex-wrap font-sans justify-center object-cover">
            <h1 className="text-[2rem] font-bold pt-[2rem] pb-[1rem] text-red-400">
              What our client says?
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              natus doloremque itaque mollitia laudantium architecto tempore ad,
              temporibus aspernatur obcaecati harum iusto ipsum porro! Illo
              cupiditate cum earum ipsa soluta.
            </p>
            <div className="px-[45%] border-black h-fit pt-5 ">
              <Image src={img} className="rounded-full text-center w-auto" />
            </div>
            <p className="font-bold py-3">Shivaprasad</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

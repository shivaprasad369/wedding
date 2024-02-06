"use client";
import React from "react";
import data from "../constants/Gallary";
import Image from "next/image";
import { easeInOut, motion } from "framer-motion";

export default function Gallary() {
  return (
    <div className="justify-center items-center pt-[4rem]">
      <motion.h1 initial={{opacity:0,y:-40}} whileInView={{opacity:1,y:0,transition:{ease:easeInOut,delay:0.2,type:'spring'}}} className="uppercase text-center text-[2rem] font-bold text-red-400 pb-3">
        Gallary
      </motion.h1>
      <div className=" md:pl-[9rem]">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 items-center text-center">
          {data.map((data,index) => (
            <motion.div initial={{opacity:0,y:0}} whileHover={{scale:1.1,type:'spring'}} whileInView={{opacity:1,transition:{ease:easeInOut,delay:0.4*index,type:'spring'}}}
              className={` bg-slate-100 p-2 flex-wrap w-[100%] shadow-md md:w-[70%] md:mt-[10px] ${data.style} `}
              key={data?.id}
            >
              <Image
                src={data?.img}
                width={400}
                height={400}
                className="w-full"
              />
              <h1 className="text-[1.5rem] font bold text-orange-600 pt-[1.4rem]">
                {data?.name}
              </h1>
              <p>{data?.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

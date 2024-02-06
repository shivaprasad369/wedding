import React from "react";
import w1 from "../assets/wedding1.jpg";
import w2 from "../assets/w2.jpg";
import Image from "next/image";
export default function About() {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 p-3 pt-6 ">
      
      <div className="flex flex-col gap-3 ">
        <div>
          <h1 className="uppercase text-center font-bold text-[30px]">
            ABout US
          </h1>
          <div className=" px-4">
            <p className="text-center text-gray-600 pt-[1rem]  ">
              wedding1 The Old English “Wedding” starts off pretty
              straightforward: “State of being wed; pledge, betrothal; action of
              marrying.” Okay, we don't think anyone's surprised by that. It's
              how we use the word today
            </p>
          </div>
        </div>
        <div>
          <div className="text-center">
            <div className="">
              <div className="absolute z-10 md:right-[24rem] items-center justify-center pt-[12rem]">
                <Image
                  src={w2}
                  height={550}
                  width={200}
                  alt="wedding2"
                  className="rounded-t-full max-[750px]:hidden hidden"
                />
              </div>

              <Image
                src={w1}
                alt="wedding1"
                width={350}
                height={130}
                className="relative md:pl-[7rem] pt-[3rem] w-[80%] h-[30rem] max-[750px]:w-full "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="items-center m-0 gap-3 flex-wrap text-center max-md:w-[100%] md:pt-[4rem] max-md:pt-[2rem]">
        <div className="">
          <Image
            src={w2}
            height={250}
            width={250}
            alt="wedding2"
            className="absolute z-10 max-[385px]:hidden  "
          />
          <div className="relative rounded-t-full md:pl-[7rem] max-[385px]:pl-0 max-[368px]:pl-[0rem] max-[752px]:pl-[7rem] pt-[3rem]">
            <Image
              src={w1}
              alt="wedding1"
              width={350}
              height={130}
              className="rounded-t-full max-[750px]:w-[80%] max-[385px]:w-full "
            />
          </div>
        </div>
        <div className="flex flex-col flex-wrap object-cover">
          <p className="md:pl-[7rem] whitespace-none text-md font-semibold md:py-3 md:w-[80%]">
            The Old English “Wedding” starts off pretty straightforward: “State
            of being wed; pledge, betrothal; action of marrying.” Okay, we don't
            think anyone's surprised by that. It's how we use the word today
          </p>
          <div className="text-center pb-3">
            <button className=" border-2 w-[8rem] text-center font-serif 
             whitespace-nowrap text-red-500 h-[3rem] font-bold">
              Know More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

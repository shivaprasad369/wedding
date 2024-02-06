"use client";
import React from "react";
import { FaFacebook, FaLinkedinIn, FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoTwitter, IoMail } from "react-icons/io5";
import { LuInstagram } from "react-icons/lu";
import logo from "../assets/slide4.jpg";
import Image from "next/image";
export default function Footer() {
  return (
    <div className="bg-orange-400 mt-8">
      <div className="flex md:justify-between justify-center items-center flex-wrap px-8">
        <div className="text-left gap-4 ">
          <h1 className="text-center font-bold">Get In Touch</h1>
          <ul className="flex flex-col">
            <li className="flex px-2 my-2">
              <FaLocationDot  className="mr-2"/> <span className="text-md">veernarayana temple, gadag-58201</span>
            </li>
            <li className="flex px-2 my-2">
              <FaPhoneAlt className="mr-2"/>{" "}
              <span className="text-md">
                +91 7878787878 <br />
                +91 9898989898
              </span>
            </li>
            <li className="flex px-2 my-2">
              <IoMail className="mr-2" />
              <span className="text-md">Shivu369sapare@gmail.com</span>
            </li>
          </ul>
        </div>
        <div className="text-center mt-[3rem] gap-3">
         <p className="font-bold text-xl mb-4">Saaj Weeding</p>
          {/* <iframe
            src="https://www.google.com/maps/place/SRI+VARADANJANEYA+TEMPLE+%E0%B2%B6%E0%B3%8D%E0%B2%B0%E0%B3%80+%E0%B2%B5%E0%B2%B0%E0%B2%A6%E0%B2%BE%E0%B2%82%E0%B2%9C%E0%B2%A8%E0%B3%87%E0%B2%AF+%E0%B2%A6%E0%B3%87%E0%B2%B5%E0%B2%B8%E0%B3%8D%E0%B2%A5%E0%B2%BE%E0%B2%A8/@15.43462,75.6153966,16.96z/data=!4m19!1m12!4m11!1m3!2m2!1d75.6180837!2d15.4343776!1m6!1m2!1s0x3bb8fb364783febd:0xde24b67e95fcb560!2sGangimadi+Rd,+Vijay+Nagara,+Gadag-Betageri,+Gadag-Betigeri,+Karnataka+582101!2m2!1d75.6180897!2d15.4322417!3m5!1s0x3bb8fb364783febd:0xde24b67e95fcb560!8m2!3d15.4322417!4d75.6180881!16s%2Fg%2F11v06qdf3d?entry=ttu"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          /> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d348041.86796211504!2d75.46377668537234!3d15.465287616155509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1707211014536!5m2!1sen!2sin"
            width="300"
            height="200"
            // style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="text-center gap-3 flex flex-col mt-[4rem]">
          <h1 className="font-bold ">Get Update</h1>
          <input type="text" name="text" className="border-0 text-center border-b-2 bg-orange-400 text-black" placeholder="Your Email Address" />
          <button className="border-2 px-4 py-2">Send Enquiry</button>
          <div className="flex flex-row mt-7">
            <p className="flex gap-3"><span className="pr-3 ">Follow Us on</span><FaFacebook /> <LuInstagram /> <IoLogoTwitter /> <FaLinkedinIn /></p>
          </div>
        </div>
      </div>
      <div className="border-t-2 mt-5"/>
      <div className="text-center pt-2">
        <p>Developed by Shivaprasad</p>
      </div>
    </div>
  );
}

import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Home() {
  return (
    <div className='flex md:justify-between max-[700px]:justify-center max-[792px]:text-sm items-center flex-wrap md:p-4'>
      <div className='flex flex-col bg-[#0f020240] gap-3 items-center justify-center py-[4rem] px-[2rem] object-contain ' >
        <ol type='1' className=' flex flex-col max-[942px]:text-[1rem]  max-[702px]:text-[7px] gap-10 font-semibold object-cover  max-[792px]:text-sm '>
            <li><div className='flex flex-col hover:w-[130%] hover:h-[6rem] hover:pt-[1rem] hover:bg-[#0a0a0a35] md:px-[3rem] hover:text-black text-gray-800'><h1 className='text-xl'>1. Destination wedding</h1>
            <div className='border-b-2'/> <p>Import trace for requested module</p></div></li>
            <li><div className='flex flex-col hover:w-[130%] hover:h-[6rem] hover:pt-[1rem] hover:bg-[#0a0a0a35] md:px-[3rem]  hover:text-black text-gray-900'><h1 className='text-xl'>2. Destination wedding</h1>
            <div className='border-b-2'/> <p>Import trace for requested module</p></div></li>
            <li><div className='flex flex-col hover:w-[130%] hover:h-[6rem] hover:pt-[1rem] hover:bg-[#0a0a0a35] md:px-[3rem]  hover:text-black text-gray-950'><h1 className='text-xl'>3. Destination wedding</h1>
            <div className='border-b-2'/> <p>Import trace for requested module</p></div></li>
            <li><div className='flex flex-col hover:w-[130%] hover:h-[6rem] hover:pt-[1rem] hover:bg-[#0a0a0a35] md:px-[3rem] w-full  hover:text-black text-gray-900'><h1 className='text-xl'>4. Destination wedding</h1>
            <div className='border-b-2'/> <p>Import trace for requested module</p></div></li>
            
        </ol>
      </div>
      <div className='flex flex-col md:pt-[200px] md:pr-3'> 
        <div className='gap-2 max-[722px]:flex-reight'>
            <div className='font-semibold uppercase max-[722px]:text-right  max-[792px]:text-md '>
                <h5 className='text-sm text-right font-bold max-[792px]:mb-3'>destination</h5>
                <h1 className='text-[6rem] max-[976px]:text-[2.7rem]  max-[702px]:text-[2rem]  '>JODHPUR</h1>
            </div>
            <div>
                <div className='flex flex-row text-right text-black justify-end max-[600px]:text-center' >
                    <div className='border-3 w-3 text-black' />
                    <ul className='flex text-end gap-4 cursor-pointer text-xl pt-[120px]'>
                        <li><FaInstagram /></li>
                        <li><FaYoutube /></li>
                        <li><FaFacebookF /></li>
                        <li><FaTwitter /></li>
                     </ul> 
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

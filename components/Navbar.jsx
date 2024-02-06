"use client";
import React, { useState } from 'react'

export default function Navbar() {
  const [showMenu,setShowMenu]=useState(false)
  const handleShowMenu=()=>{
    setShowMenu(()=>!showMenu)
  }
  const menu=<>
  {showMenu &&
  <div className=' items-center justify-center'>
     <ul className={` absolute leading-10 gap-4 font-bold h-[40%] w-[100%] text-center pt-[1.4rem]  uppercase ${showMenu ? 'flex-col block ' :"max-md:hidden"} backdrop-blur-xl list-none`}>
                <li>HOME</li>
                <li>About us</li>
                <li>services</li>
                <li>Gallary</li>
                <li>why saaj</li>
            </ul>
  </div>
  }
  </>
  return (
    <>
        <div className='flex items-center justify-between gap-2 relative px-8 py-2 pt-6 ' >
        <div>
            <img src="#" alt="logo" />
        </div>
        <div className='flex flex-2 items-center justify-center uppercase font-bold '>
            <ul className={`flex gap-[3rem] max-md:hidden max-[826px]:text-[1rem] md:text-xl list-none`}>
                <li>HOME</li>
                <li>About us</li>
                <li>services</li>
                <li>Gallary</li>
                <li>why saaj</li>
            </ul>

            <button className='flex gap-[3rem] max-md:block text-xl list-none md:hidden' onClick={handleShowMenu}>X</button>
        </div>
    </div>
    <div className='md:hidden'>
        {showMenu && menu}

    </div>
        </>
  )
}

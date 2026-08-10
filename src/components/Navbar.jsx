import React from 'react'

function Navbar() {
  return (
    <div>
    <nav>
      <div className='w-[100%] h-[50px] flex justify-center items-center'>
       <div className='md:hidden lg:hidden w-[100%] flex justify-start items-center '><h1 className='font-extrabold text-[20px] whitespace-nowrap'>S_M_U</h1>  </div>

<div className='md:flex w-[30%] justify-center items-center hidden'>
        <ul className='flex gap-7 font-bold'>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        </ul>
        </div>
      
       <div className='w-[40%] md:flex justify-center items-start hidden '><h1 className='font-extrabold text-5xl whitespace-nowrap'>SYED MUHAMMAD UMER</h1> </div>
     <div className='md:flex w-[30%] justify-center items-center hidden'>
        <ul className='flex gap-7 font-bold'>
        <li>Projects</li>
        <li>Experience</li>
        <li>Contact</li>
        </ul>
        </div>
      </div>
      
    </nav>
    </div>
  )
}

export default Navbar

import React from 'react'

function Navbar() {
  return (
    <div>
    <nav>
      <div className='w-[100%] h-[50px] flex justify-center items-center'>

<div className='flex w-[30%] justify-center items-center'>
        <ul className='flex gap-7 font-bold'>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        </ul>
        </div>
      
       <div className='w-[40%] flex justify-center items-start '><h1 className='font-extrabold text-5xl'>SYED MUHAMMAD UMER</h1> </div>
     <div className='flex w-[30%] justify-center items-center'>
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

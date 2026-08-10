import React from 'react'

function Navbar() {
  return (
    <div>
    <nav>
      <div className='w-[100%] h-[50px] flex justify-center items-center'>

<div className='flex w-[30%] justify-center items-center'>
        <ul className='flex gap-4 '>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        </ul>
        </div>
      
       <div className='w-[40%]  '></div>
     <div className='flex w-[30%] justify-center items-center'>
        <ul className='flex gap-4 '>
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

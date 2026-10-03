import React from 'react'
import '@fontsource/bebas-neue';

function Navbar() {
  return (
    <div className='w-full flex justify-between items-center mb-3.5 px-0.5 sm:px-1'>
      
      <div className='shrink-0'>
        <h3 className='font-bebas text-[var(--text-bg)] text-[0.62rem] xs:text-[0.7rem] sm:text-sm md:text-base tracking-[0.5px] md:tracking-[3px] uppercase whitespace-nowrap'>
          FULLSTACK AND AI/ML ENGINEER
        </h3>
      </div>
      
      <div className='flex-1 h-[1.5px] md:h-[2px] rounded-3xl bg-[var(--text-bg)] mx-1.5 sm:mx-2 min-w-[8px]'></div>
      
      <div className='font-bebas flex items-center gap-1.5 md:gap-2 text-[var(--text-bg)] text-[0.62rem] xs:text-[0.7rem] sm:text-sm md:text-base tracking-[0.5px] md:tracking-[3px] uppercase shrink-0 whitespace-nowrap'>
        <h3>AVAILABLE FOR FREELANCE</h3>
        <div className='w-[7px] h-[7px] md:w-[10px] md:h-[10px] bg-[var(--bg-red)] rounded-full flex-shrink-0 red-blink'></div>
      </div>
      
    </div>
  )
}

export default Navbar
import React from 'react'
import '@fontsource/bebas-neue';

function Navbar() {
  return (
    <div className='w-full flex justify-between items-center'>
      
      <div>
        <h3 className='font-bebas font-bold text-[var(--text-bg)] text-[0.5rem] tracking-[0.5px] md:text-base md:tracking-[3px] uppercase'>
          FULLSTACK AND AI/ML ENGINEER
        </h3>
      </div>
      
      <div className='flex-1 h-[1.5px] md:h-[2px] rounded-3xl bg-[var(--text-bg)] mx-2 '></div>
      
      {/* Right Text & Red Dot */}
      <div className='font-bebas font-thin flex items-center gap-1 md:gap-2 text-[var(--text-bg)] text-[0.5rem] tracking-[0.5px] md:text-base md:tracking-[3px] uppercase'>
        <h3>AVAILABLE FOR FREELANCE</h3>
        <div className='w-[6px] h-[6px] md:w-[10px] md:h-[10px] bg-[var(--bg-red)] rounded-full flex-shrink-0'></div>
      </div>
      
    </div>
  )
}

export default Navbar
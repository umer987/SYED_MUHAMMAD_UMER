import React from 'react'
import '@fontsource/bebas-neue';
function Navbar() {
  return (
    <div className='w-[100%] flex justify-between items-center'>
      <div><h3 className='md:navtext navtextr text-[var(--text-bg)] '>FULLSTACK AND AI/ML ENGINEER</h3></div>
      <div className='w-[230px] md:w-[1000px] h-[1.5px] md:h-0.5 rounded-3xl bg-[var(--text-bg)]'></div>
      <div className='md:navtext navtextr flex justify-between items-center gap-2'><h3 className='text-[var(--text-bg)]'>AVALABE FOR FREELANCE</h3><div className='w-[8px] h-[8px] md:w-[10px] md:h-[10px] bg-[var(--bg-red)] rounded-full'></div> </div>
    </div>
  )
}

export default Navbar

import React from 'react'
import '@fontsource/bebas-neue';
function Navbar() {
  return (
    <div className='w-[100%] flex justify-between items-center'>
      <div><h3 className='navtext text-[var(--text-bg)] '>FULLSTACK AND AI/ML ENGINEER</h3></div>
      <div className='w-[1000px] h-0.5 rounded-3xl bg-[var(--text-bg)]'></div>
      <div className='navtext flex justify-between items-center gap-2'><h3 className='text-[var(--text-bg)]'>AVALABE FOR FREELANCE</h3><div className='w-[10px] h-[10px] bg-[var(--bg-red)] rounded-full'></div> </div>
    </div>
  )
}

export default Navbar

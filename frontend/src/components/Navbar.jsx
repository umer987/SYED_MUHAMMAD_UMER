import React, { useEffect, useRef } from 'react'
import '@fontsource/bebas-neue';
import gsap from 'gsap';

function Navbar() {
  const navRef = useRef(null);

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.1 }
      );
    }
  }, []);

  return (
    <div ref={navRef} className='w-full flex justify-between items-center mb-3.5 px-0.5 sm:px-1'>
      
      <div className='shrink-0'>
        <h3 className='font-bebas text-[var(--text-bg)] text-[0.62rem] xs:text-[0.7rem] sm:text-sm md:text-base tracking-[0.5px] md:tracking-[3px] uppercase whitespace-nowrap hover:text-white transition-colors cursor-default'>
          FULLSTACK AND AI/ML ENGINEER
        </h3>
      </div>
      
      <div className='flex-1 h-[1.5px] md:h-[2px] rounded-3xl bg-[var(--text-bg)] mx-1.5 sm:mx-2 min-w-[8px] opacity-75'></div>
      
      <div className='font-bebas flex items-center gap-1.5 md:gap-2 text-[var(--text-bg)] text-[0.62rem] xs:text-[0.7rem] sm:text-sm md:text-base tracking-[0.5px] md:tracking-[3px] uppercase shrink-0 whitespace-nowrap hover:text-white transition-colors cursor-default'>
        <h3>AVAILABLE FOR FREELANCE</h3>
        <div className='w-[7px] h-[7px] md:w-[10px] md:h-[10px] bg-[var(--bg-red)] rounded-full flex-shrink-0 red-blink shadow-[0_0_8px_#ff0808]'></div>
      </div>
      
    </div>
  )
}

export default Navbar
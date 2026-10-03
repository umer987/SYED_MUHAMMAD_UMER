import React from 'react'
import Whatido from './Whatido'
import Process from './Process'
import Aboutme from './Aboutme'
import Letscollab from './Letscollab'
function Hero() {
  return (
    <div className='flex flex-col w-full max-w-full'>
    <div className='w-full flex justify-center items-center overflow-hidden py-2'>
      <h1 className='font-bebas inline-block uppercase origin-bottom scale-y-[1.2] md:scale-y-[1.3] text-[#E7CEB0] text-[2.1rem] xs:text-[2.6rem] sm:text-[3.8rem] md:text-[6.5rem] lg:text-[8.5rem] xl:text-[10rem] leading-none md:leading-[0.8] font-bold md:font-[900] tracking-normal sm:tracking-wide md:tracking-[10px] mt-4 md:mt-[5rem] text-center whitespace-nowrap'>
        SYED MUHAMMAD UMER
      </h1>
    </div>


    <div className="grid grid-cols-1 md:grid-cols-3 w-full h-auto gap-8 md:gap-4 my-6 md:my-0 items-center">

  {/* 1 - Headings */}
  <div className="order-2 md:order-1 md:mt-8 flex flex-col justify-center items-center text-center md:items-start md:text-left md:ml-8 lg:ml-16 w-full">
    <h1 className='font-bebas text-[#E7CEB0] text-[20px] sm:text-2xl md:text-4xl'>FULL-STACK / AI-ML ENGINEER</h1>
    <h3 className='font-bebasl font-extralight text-[#E7CEB0] text-[1.1rem] sm:text-[1.25rem] md:text-[1.5rem]'>Web Development</h3>
    <h3 className='font-bebasl font-extralight text-[#E7CEB0] text-[1.1rem] sm:text-[1.25rem] md:text-[1.5rem]'>Intellegent Systems</h3>
    <h3 className='font-bebasl font-extralight text-[#E7CEB0] text-[1.1rem] sm:text-[1.25rem] md:text-[1.5rem]'>ML Models</h3>
    <div className='w-[30px] md:w-[40px] h-[5px] bg-[#79231C] rounded-2xl mt-3.5 mx-auto md:mx-0'></div>
    <div className='flex items-center justify-center md:justify-start mt-6 gap-2'>
      <img className='w-[30px] h-[20px] md:w-[80px] md:h-[50px] object-contain shrink-0' src="/comma.png" alt="" />
      <p className='font-bebas text-[var(--text-bg)] text-[16px] sm:text-[18px] md:text-[20px] mt-2 md:mt-6 text-center md:text-left'>
        I Build Web And Intelligent Systems <br className="hidden sm:inline"/> That Solves The Real World Problem.
      </p>
    </div> 
    <div className="w-full flex justify-center md:justify-start">
      <img src="SIGN.png" className='w-[80px] mt-3 h-[30px] md:w-[110px] md:ml-60 md:mt-2 md:h-[80px] object-contain mx-auto md:mx-0' alt="Signature" />
    </div>
  </div>

  {/* 2 - Image */}
  <div className="order-1 md:order-2 relative bottom-0 md:bottom-12 flex justify-center items-center w-full my-2 md:my-0">
    <img className='w-[240px] xs:w-[280px] sm:w-[320px] md:w-[400px] md:h-[450px] object-contain max-w-full' src="/umer2.png" alt="Umer" />
  </div>

  {/* 3 - Heading + paragraph */}
  <div className="order-3 md:order-3 md:mt-8 flex flex-col justify-center items-center text-center md:items-start md:text-left w-full">
    <h2 className='font-bebas text-[var(--text-bg)] mt-3.5 md:mt-0 text-[26px] sm:text-[28px] md:text-4xl'>About me</h2>
    <h2 className='text-[var(--bg-red)] font-bebas text-[22px] sm:text-[25px] md:text-3xl'>AI/ML & Full-Stack Web Developer</h2>

    <p className='font-bebas text-[var(--text-bg)] mt-2 text-[14px] sm:text-[15px] leading-relaxed tracking-wide md:text-[20px] max-w-md md:max-w-none'>
      I’m a Full-Stack Web Developer & AI/ML Engineer focused on<br className="hidden sm:inline"/> building modern, scalable web applications and intelligent<br className="hidden sm:inline"/> solutions. I combine strong development skills with AI/ML<br className="hidden sm:inline"/> to create smart, efficient, and impactful digital experiences.
    </p>
    <div className='w-full max-w-[320px] md:w-[280px] h-auto pb-4 md:h-[200px] border-t-3 mt-4 flex justify-around md:justify-start border-[#79231C] gap-6 sm:gap-10 md:gap-12 mx-auto md:mx-0'>
      <div className='text-center md:text-left text-[var(--c-text)] mt-3.5 flex flex-col items-center md:items-start'>
        <img src="/experience.png" className='w-[45px] h-[45px] md:w-[50px] md:h-[50px] object-contain' alt="" />
        <h1 className='font-bebas text-[var(--text-bg)] text-xl sm:text-2xl leading-relaxed tracking-wide'>1.5+</h1>
        <h3 className='font-bebas text-[var(--text-bg)] text-xs sm:text-sm'>YEARS <br/> EXPERIENCE</h3>
      </div>
      <div className='text-center md:text-left text-[var(--c-text)] mt-3.5 flex flex-col items-center md:items-start'>
        <img src="/projects.png" className='w-[45px] h-[45px] md:w-[50px] md:h-[50px] object-contain' alt="" />
        <h1 className='font-bebas text-[var(--text-bg)] text-xl sm:text-2xl leading-relaxed tracking-wide'>10+</h1>
        <h3 className='font-bebas text-[var(--text-bg)] text-xs sm:text-sm'>projects <br/>complete</h3>
      </div>
      <div className='text-center md:text-left text-[var(--c-text)] mt-3.5 flex flex-col items-center md:items-start'>
        <img src="/clients.png" className='w-[45px] h-[45px] md:w-[50px] md:h-[50px] object-contain' alt="" />
        <h1 className='font-bebas text-[var(--text-bg)] text-xl sm:text-2xl leading-relaxed tracking-wide'>5+</h1>
        <h3 className='font-bebas text-[var(--text-bg)] text-xs sm:text-sm'>happy <br/>clients</h3>
      </div>
    </div>
  </div>
</div>

<Whatido />
<Process/>
<Aboutme/>
<Letscollab/>
    </div>
  )
}

export default Hero

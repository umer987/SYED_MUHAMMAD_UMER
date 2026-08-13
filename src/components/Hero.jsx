import React from 'react'
function Hero() {
  return (
    <div>
    <div className='w-full flex justify-center items-center '>
      <h1 className='font-bebas inline-block uppercase origin-bottom scale-y-[1.3] text-[#E7CEB0] text-[2.8rem] leading-[0.4] font-bold mt-[2rem] md:text-[10rem] md:leading-[0.8] md:font-[900] md:tracking-[10px] md:mt-[5rem]'>
        SYED MUHAMMAD UMER
      </h1>
    </div>


    <div className="grid grid-cols-1 md:grid-cols-3 w-[100%] h-[500px]  " >

  {/* 1 - Headings */}
  <div className="order-2 md:order-1 md:mt-8 flex-col justify-center items-center"  >
    <h1 className='font-bebas text-[#E7CEB0] text-[18px] md:text-4xl'>FULL-STACK / AI-ML ENGINEER</h1>
    <h3 className='font-bebasl font-extralight text-[#E7CEB0] text-[1rem] md:text-[1.5rem] '>Web Development</h3>
    <h3 className='font-bebasl font-extralight text-[#E7CEB0] text-[1rem] md:text-[1.5rem] '>Intellegent Systems</h3>
    <h3 className='font-bebasl font-extralight text-[#E7CEB0] text-[1rem] md:text-[1.5rem] '>ML Models</h3>
    <div className='w-[30px] md:w-[40px] h-[5px] bg-[#79231C] rounded-2xl mt-3.5'></div>
    <div className='flex mt-6 gap-2'>
      <img className='w-[30px] h-[20px]  md:w-[80px] md:h-[50px]'  src="/comma.png" alt="" srcset="" />
      <p className='font-bebas text-[var(--text-bg)]  text-[17px] md:text-[20px] mt-2 md:mt-6'>I Build Web And Intelligent Systems <br/> That Solves The Real World Problem. </p>
    </div> 
    <div>
    <img src="SIGN.png" className='w-[80px] ml-42 mt-2 h-[30px] md:w-[110px] md:ml-60 md:mt-2 md:h-[80px]' alt="" srcset="" />
    </div>
  </div>

  {/* 2 - Image */}
  <div className="order-1 md:order-2 relative bottom-2.5 md:bottom-12 flex justify-center ">
    <img className='w-[300px] md:w-[400px] md:h-[450px] ' src="/umer2.png" alt="Umer" />
  </div>

  {/* 3 - Heading + paragraph */}
  <div className="order-3 md:order-3 md:mt-8 flex-col  justify-center items-center">
    <h2 className='font-bebas text-[var(--text-bg)] mt-1 text-4xl '>About me</h2>
    <h2 className='text-[var(--bg-red)] font-bebas mt-1 text-3xl'>AI/ML & Full-Stack Web Developer</h2>

    <p className='font-bebas text-[var(--text-bg)] mt-1 text-[12px] leading-relaxed tracking-wide md:text-[20px] '>
      I’m a Full-Stack Web Developer & AI/ML Engineer focused on<br/> building modern, scalable web applications and intelligent<br/> solutions. I combine strong development skills with AI/ML<br/> to create smart, efficient, and impactful digital experiences.
    </p>
    <div className='w-[280px] h-[200px] border-t-3 mt-3.5 flex border-[#79231C] gap-12'>
      <div className='text-left text-[var(--c-text)] mt-3.5'>
        <img src="/experience.png"  className='w-[50px] h-[50px]' alt="" srcset="" />
        <h1 className='font-bebas text-2xl leading-relaxed tracking-wide'>4+</h1>
        <h3 className='font-bebas'>YEARS <br/> EXPERIENCE</h3>
      </div>
      <div className='text-left text-[var(--c-text)] mt-3.5' >
        <img src="/projects.png" className='w-[50px] h-[50px]'  alt="" srcset="" />
        <h1 className='font-bebas text-2xl leading-relaxed tracking-wide'>23+</h1>
        <h3 className='font-bebas'>projects <br/>complete</h3>
      </div>
      <div className='text-left text-[var(--c-text)] mt-3.5'>
        <img src="/clients.png" className='w-[50px] h-[50px]'  alt="" srcset="" />
        <h1 className='font-bebas text-2xl leading-relaxed tracking-wide'>12+</h1>
        <h3 className='font-bebas'>happy <br/>clients</h3>
      </div>
    </div>
  </div>
<div></div>
  
</div>
    </div>
  )
}

export default Hero

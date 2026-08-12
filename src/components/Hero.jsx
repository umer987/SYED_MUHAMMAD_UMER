import React from 'react'
function Hero() {
  return (
    <div>
    <div className='w-full flex justify-center items-center '>
      <h1 className='font-bebas inline-block uppercase origin-bottom scale-y-[1.3] text-[#E7CEB0] text-[3rem] leading-[0.4] font-bold mt-[2rem] md:text-[10rem] md:leading-[0.8] md:font-[900] md:tracking-[10px] md:mt-[5rem]'>
        SYED MUHAMMAD UMER
      </h1>
    </div>


    <div className="grid grid-cols-1 md:grid-cols-3 w-[100%] h-[500px]  " >

  {/* 1 - Headings */}
  <div className="order-2 md:order-1 "  >
    <h1 className='font-bebas text-[#E7CEB0] text-2xl'>FULLSTACK ENGINEER / AI-ML ENGINEER</h1>
    <h3 className='font-bebasl font-extralight text-[#E7CEB0] text-[1rem] '>Web Development</h3>
    <h3 className='font-bebasl font-extralight text-[#E7CEB0] text-[1rem] '>Intellegent Systems</h3>
    <h3 className='font-bebasl font-extralight text-[#E7CEB0] text-[1rem] '>ML Models</h3>
    <div className='w-[30px] md:w-[40px] h-[5px] bg-[#79231C] rounded-2xl mt-3.5'></div>
    <div className='flex mt-6 gap-2'>
      <img className='w-[30px] h-[20px]  md:w-[80px] md:h-[50px]'  src="/comma.png" alt="" srcset="" />
      <p className='font-bebas text-[var(--text-bg)]  text-[10px] md:text-[20px] mt-2 md:mt-6'>I Build Web And Intelligent Systems <br/> That Solves The Real World Problem. </p>
    </div> 
    <div>
    <img src="SIGN.png" className='w-[80px] ml-24 mt-2 h-[30px] md:w-[110px] md:ml-60 md:mt-2 md:h-[80px]' alt="" srcset="" />
    </div>
  </div>

  {/* 2 - Image */}
  <div className="order-1 md:order-2">
    <img src="/umer.png" alt="Umer" />
  </div>

  {/* 3 - Heading + paragraph */}
  <div className="order-3 md:order-3">
    <h2>About me</h2>
    <p>
      Software Engineer and MERN Stack Developer...
    </p>
  </div>

</div>
    </div>
  )
}

export default Hero

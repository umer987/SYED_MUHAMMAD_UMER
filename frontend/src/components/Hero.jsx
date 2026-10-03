// import React, { useEffect, useRef } from 'react'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import Whatido from './Whatido'
// import Process from './Process'
// import Aboutme from './Aboutme'
// import Letscollab from './Letscollab'

// gsap.registerPlugin(ScrollTrigger)

// function Hero() {
//   const containerRef = useRef(null)
//   const titleRef = useRef(null)
//   const leftColRef = useRef(null)
//   const imageRef = useRef(null)
//   const imageWrapperRef = useRef(null)
//   const rightColRef = useRef(null)
//   const statsRef = useRef(null)

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // 1. Title cinematic entrance
//       gsap.fromTo(
//         titleRef.current,
//         {
//           y: 70,
//           opacity: 0,
//           scaleY: 0.6,
//           letterSpacing: '-2px',
//         },
//         {
//           y: 0,
//           opacity: 1,
//           scaleY: 1.25,
//           letterSpacing: '0px',
//           duration: 1.4,
//           ease: 'power4.out',
//           delay: 0.1,
//         }
//       )

//       // 2. Left Column staggered entrance
//       if (leftColRef.current) {
//         gsap.fromTo(
//           leftColRef.current.children,
//           {
//             x: -35,
//             opacity: 0,
//           },
//           {
//             x: 0,
//             opacity: 1,
//             stagger: 0.1,
//             duration: 1,
//             ease: 'power3.out',
//             delay: 0.35,
//           }
//         )
//       }

//       // 3. Hero Portrait entrance & parallax
//       if (imageRef.current) {
//         gsap.fromTo(
//           imageRef.current,
//           {
//             scale: 0.8,
//             opacity: 0,
//             y: 40,
//           },
//           {
//             scale: 1,
//             opacity: 1,
//             y: 0,
//             duration: 1.3,
//             ease: 'power3.out',
//             delay: 0.25,
//           }
//         )

//         // ScrollTrigger Parallax on Portrait
//         gsap.to(imageRef.current, {
//           y: -40,
//           ease: 'none',
//           scrollTrigger: {
//             trigger: containerRef.current,
//             start: 'top top',
//             end: 'bottom top',
//             scrub: 1.2,
//           },
//         })
//       }

//       // 4. Right Column staggered entrance
//       if (rightColRef.current) {
//         const textElements = rightColRef.current.querySelectorAll('h2, p');
//         gsap.fromTo(
//           textElements,
//           {
//             x: 35,
//             opacity: 0,
//           },
//           {
//             x: 0,
//             opacity: 1,
//             stagger: 0.12,
//             duration: 1,
//             ease: 'power3.out',
//             delay: 0.45,
//           }
//         )
//       }

//       // 5. Stats pop-in on scroll
//       if (statsRef.current) {
//         gsap.fromTo(
//           statsRef.current.children,
//           {
//             scale: 0.7,
//             opacity: 0,
//             y: 20,
//           },
//           {
//             scale: 1,
//             opacity: 1,
//             y: 0,
//             stagger: 0.15,
//             duration: 0.8,
//             ease: 'back.out(1.7)',
//             delay: 0.6,
//           }
//         )
//       }
//     }, containerRef)

//     // Interactive mouse floating parallax for portrait (desktop)
//     const handleMouseMove = (e) => {
//       if (window.innerWidth < 768 || !imageWrapperRef.current) return;
//       const { clientX, clientY } = e;
//       const xOffset = (clientX / window.innerWidth - 0.5) * 22;
//       const yOffset = (clientY / window.innerHeight - 0.5) * 22;

//       gsap.to(imageWrapperRef.current, {
//         x: xOffset,
//         y: yOffset,
//         rotationY: xOffset * 0.4,
//         rotationX: -yOffset * 0.4,
//         duration: 0.9,
//         ease: 'power2.out',
//         transformPerspective: 800,
//       });
//     };

//     window.addEventListener('mousemove', handleMouseMove, { passive: true });

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       ctx.revert();
//     };
//   }, [])

//   return (
//     <div ref={containerRef} className='flex flex-col w-full max-w-full relative'>
//       <div className='w-full flex justify-center items-center overflow-hidden py-2'>
//         <h1
//           ref={titleRef}
//           className='font-bebas inline-block uppercase origin-bottom scale-y-[1.2] md:scale-y-[1.3] text-[#E7CEB0] text-[2.1rem] xs:text-[2.6rem] sm:text-[3.8rem] md:text-[6.5rem] lg:text-[8.5rem] xl:text-[10rem] leading-none md:leading-[0.8] font-bold md:font-[900] tracking-normal sm:tracking-wide md:tracking-[10px] mt-4 md:mt-[5rem] text-center whitespace-nowrap will-change-transform'
//         >
//           SYED MUHAMMAD UMER
//         </h1>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 w-full h-auto gap-8 md:gap-4 my-6 md:my-0 items-center">
//         {/* 1 - Headings */}
//         <div ref={leftColRef} className="order-2 md:order-1 md:mt-8 flex flex-col justify-center items-center text-center md:items-start md:text-left md:ml-8 lg:ml-16 w-full">
//           <h1 className='font-bebas text-[#E7CEB0] text-[20px] sm:text-2xl md:text-4xl transition-colors hover:text-white'>FULL-STACK / AI-ML ENGINEER</h1>
//           <h3 className='font-bebasl font-extralight text-[#E7CEB0] text-[1.1rem] sm:text-[1.25rem] md:text-[1.5rem]'>Web Development</h3>
//           <h3 className='font-bebasl font-extralight text-[#E7CEB0] text-[1.1rem] sm:text-[1.25rem] md:text-[1.5rem]'>Intellegent Systems</h3>
//           <h3 className='font-bebasl font-extralight text-[#E7CEB0] text-[1.1rem] sm:text-[1.25rem] md:text-[1.5rem]'>ML Models</h3>
//           <div className='w-[30px] md:w-[40px] h-[5px] bg-[#79231C] rounded-2xl mt-3.5 mx-auto md:mx-0'></div>
//           <div className='flex items-center justify-center md:justify-start mt-6 gap-2'>
//             <img className='w-[30px] h-[20px] md:w-[80px] md:h-[50px] object-contain shrink-0' src="/comma.png" alt="" />
//             <p className='font-bebas text-[var(--text-bg)] text-[16px] sm:text-[18px] md:text-[20px] mt-2 md:mt-6 text-center md:text-left'>
//               I Build Web And Intelligent Systems <br className="hidden sm:inline"/> That Solves The Real World Problem.
//             </p>
//           </div> 
//           <div className="w-full flex justify-center md:justify-start">
//             <img src="SIGN.png" className='w-[80px] mt-3 h-[30px] md:w-[110px] md:ml-60 md:mt-2 md:h-[80px] object-contain mx-auto md:mx-0 hover:scale-105 transition-transform' alt="Signature" />
//           </div>
//         </div>

//         {/* 2 - Image with interactive 3D parallax */}
//         <div ref={imageWrapperRef} className="order-1 md:order-2 relative bottom-0 md:bottom-12 flex justify-center items-center w-full my-2 md:my-0 will-change-transform">
//           <div className="relative group">
//             <div className="absolute inset-0 bg-[#79231C]/20 rounded-full blur-2xl group-hover:bg-[#79231C]/35 transition-all duration-700 pointer-events-none"></div>
//             <img ref={imageRef} className='w-[240px] xs:w-[280px] sm:w-[320px] md:w-[400px] md:h-[450px] object-contain max-w-full relative z-10 drop-shadow-[0_15px_30px_rgba(121,35,28,0.35)]' src="/umer2.png" alt="Umer" />
//           </div>
//         </div>

//         {/* 3 - Heading + paragraph */}
//         <div ref={rightColRef} className="order-3 md:order-3 md:mt-8 flex flex-col justify-center items-center text-center md:items-start md:text-left w-full">
//           <h2 className='font-bebas text-[var(--text-bg)] mt-3.5 md:mt-0 text-[26px] sm:text-[28px] md:text-4xl'>About me</h2>
//           <h2 className='text-[var(--bg-red)] font-bebas text-[22px] sm:text-[25px] md:text-3xl'>AI/ML & Full-Stack Web Developer</h2>

//           <p className='font-bebas text-[var(--text-bg)] mt-2 text-[14px] sm:text-[15px] leading-relaxed tracking-wide md:text-[20px] max-w-md md:max-w-none'>
//             I’m a Full-Stack Web Developer & AI/ML Engineer focused on<br className="hidden sm:inline"/> building modern, scalable web applications and intelligent<br className="hidden sm:inline"/> solutions. I combine strong development skills with AI/ML<br className="hidden sm:inline"/> to create smart, efficient, and impactful digital experiences.
//           </p>
//           <div ref={statsRef} className='w-full max-w-[320px] md:w-[280px] h-auto pb-4 md:h-[200px] border-t-3 mt-4 flex justify-around md:justify-start border-[#79231C] gap-6 sm:gap-10 md:gap-12 mx-auto md:mx-0'>
//             <div className='text-center md:text-left text-[var(--c-text)] mt-3.5 flex flex-col items-center md:items-start group cursor-default'>
//               <img src="/experience.png" className='w-[45px] h-[45px] md:w-[50px] md:h-[50px] object-contain group-hover:scale-110 transition-transform' alt="" />
//               <h1 className='font-bebas text-[var(--text-bg)] text-xl sm:text-2xl leading-relaxed tracking-wide text-glow'>1.5+</h1>
//               <h3 className='font-bebas text-[var(--text-bg)] text-xs sm:text-sm'>YEARS <br/> EXPERIENCE</h3>
//             </div>
//             <div className='text-center md:text-left text-[var(--c-text)] mt-3.5 flex flex-col items-center md:items-start group cursor-default'>
//               <img src="/projects.png" className='w-[45px] h-[45px] md:w-[50px] md:h-[50px] object-contain group-hover:scale-110 transition-transform' alt="" />
//               <h1 className='font-bebas text-[var(--text-bg)] text-xl sm:text-2xl leading-relaxed tracking-wide text-glow'>10+</h1>
//               <h3 className='font-bebas text-[var(--text-bg)] text-xs sm:text-sm'>projects <br/>complete</h3>
//             </div>
//             <div className='text-center md:text-left text-[var(--c-text)] mt-3.5 flex flex-col items-center md:items-start group cursor-default'>
//               <img src="/clients.png" className='w-[45px] h-[45px] md:w-[50px] md:h-[50px] object-contain group-hover:scale-110 transition-transform' alt="" />
//               <h1 className='font-bebas text-[var(--text-bg)] text-xl sm:text-2xl leading-relaxed tracking-wide text-glow'>5+</h1>
//               <h3 className='font-bebas text-[var(--text-bg)] text-xs sm:text-sm'>happy <br/>clients</h3>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Whatido />
//       <Process/>
//       <Aboutme/>
//       <Letscollab/>
//     </div>
//   )
// }

// export default Hero




import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Whatido from './Whatido'
import Process from './Process'
import Aboutme from './Aboutme'
import Letscollab from './Letscollab'

gsap.registerPlugin(ScrollTrigger)

function Hero() {
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const leftColRef = useRef(null)
  const imageRef = useRef(null)
  const imageWrapperRef = useRef(null)
  const rightColRef = useRef(null)
  const statsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Title cinematic entrance
      gsap.fromTo(
        titleRef.current,
        {
          y: 70,
          opacity: 0,
          scaleY: 0.6,
          letterSpacing: '-2px',
        },
        {
          y: 0,
          opacity: 1,
          scaleY: 1.25,
          letterSpacing: '0px',
          duration: 1.4,
          ease: 'power4.out',
          delay: 0.1,
        }
      )

      // 2. Left Column staggered entrance
      if (leftColRef.current) {
        gsap.fromTo(
          leftColRef.current.children,
          {
            x: -35,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 1,
            ease: 'power3.out',
            delay: 0.35,
          }
        )
      }

      // 3. Hero Portrait entrance & parallax
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          {
            scale: 0.8,
            opacity: 0,
            y: 40,
          },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 1.3,
            ease: 'power3.out',
            delay: 0.25,
          }
        )

        // ScrollTrigger Parallax on Portrait
        gsap.to(imageRef.current, {
          y: -40,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.2,
          },
        })
      }

      // 4. Right Column staggered entrance
      if (rightColRef.current) {
        const textElements = rightColRef.current.querySelectorAll('h2, p');
        gsap.fromTo(
          textElements,
          {
            x: 35,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            stagger: 0.12,
            duration: 1,
            ease: 'power3.out',
            delay: 0.45,
          }
        )
      }

      // 5. Stats pop-in on scroll
      if (statsRef.current) {
        gsap.fromTo(
          statsRef.current.children,
          {
            scale: 0.7,
            opacity: 0,
            y: 20,
          },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.8,
            ease: 'back.out(1.7)',
            delay: 0.6,
          }
        )
      }
    }, containerRef)

    // Interactive mouse floating parallax for portrait (desktop)
    const handleMouseMove = (e) => {
      if (window.innerWidth < 768 || !imageWrapperRef.current) return;
      const { clientX, clientY } = e;
      const xOffset = (clientX / window.innerWidth - 0.5) * 22;
      const yOffset = (clientY / window.innerHeight - 0.5) * 22;

      gsap.to(imageWrapperRef.current, {
        x: xOffset,
        y: yOffset,
        rotationY: xOffset * 0.4,
        rotationX: -yOffset * 0.4,
        duration: 0.9,
        ease: 'power2.out',
        transformPerspective: 800,
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      ctx.revert();
    };
  }, [])

  return (
    <div ref={containerRef} className='flex flex-col w-full max-w-full relative'>
      {/* Heading - behind the image */}
      <div className='w-full flex justify-center items-center overflow-hidden py-2 relative z-10'>
        <h1
          ref={titleRef}
          className='font-bebas inline-block uppercase origin-bottom scale-y-[1.2] md:scale-y-[1.3] text-[#E7CEB0] text-[2.1rem] xs:text-[2.6rem] sm:text-[3.8rem] md:text-[6.5rem] lg:text-[8.5rem] xl:text-[10rem] leading-none md:leading-[0.8] font-bold md:font-[900] tracking-normal sm:tracking-wide md:tracking-[10px] mt-4 md:mt-[5rem] text-center whitespace-nowrap will-change-transform'
        >
          SYED MUHAMMAD UMER
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 w-full h-auto gap-8 md:gap-4 my-6 md:my-0 items-center">
        {/* 1 - Headings */}
        <div ref={leftColRef} className="order-2 md:order-1 md:mt-8 flex flex-col justify-center items-center text-center md:items-start md:text-left md:ml-8 lg:ml-16 w-full">
          <h1 className='font-bebas text-[#E7CEB0] text-[20px] sm:text-2xl md:text-4xl transition-colors hover:text-white'>FULL-STACK / AI-ML ENGINEER</h1>
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
            <img src="SIGN.png" className='w-[80px] mt-3 h-[30px] md:w-[110px] md:ml-60 md:mt-2 md:h-[80px] object-contain mx-auto md:mx-0 hover:scale-105 transition-transform' alt="Signature" />
          </div>
        </div>

        {/* 2 - Image with interactive 3D parallax - pulled up over the heading */}
        <div
          ref={imageWrapperRef}
          className="order-1 md:order-2 relative md:bottom-12 flex justify-center items-center w-full my-2 md:my-0 will-change-transform z-20 md:-mt-[150px]"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-[#79231C]/20 rounded-full blur-2xl group-hover:bg-[#79231C]/35 transition-all duration-700 pointer-events-none"></div>
            <img ref={imageRef} className='w-[240px] xs:w-[280px] sm:w-[320px] md:w-[500px] md:h-[480px] object-contain max-w-full relative z-10 drop-shadow-[0_15px_30px_rgba(121,35,28,0.35)]' src="/umer2.png" alt="Umer" />
          </div>
        </div>

        {/* 3 - Heading + paragraph */}
        <div ref={rightColRef} className="order-3 md:order-3 md:mt-8 flex flex-col justify-center items-center text-center md:items-start md:text-left w-full">
          <h2 className='font-bebas text-[var(--text-bg)] mt-3.5 md:mt-0 text-[26px] sm:text-[28px] md:text-4xl'>About me</h2>
          <h2 className='text-[var(--bg-red)] font-bebas text-[22px] sm:text-[25px] md:text-3xl'>AI/ML & Full-Stack Web Developer</h2>

          <p className='font-bebas text-[var(--text-bg)] mt-2 text-[14px] sm:text-[15px] leading-relaxed tracking-wide md:text-[20px] max-w-md md:max-w-none'>
            I’m a Full-Stack Web Developer & AI/ML Engineer focused on<br className="hidden sm:inline"/> building modern, scalable web applications and intelligent<br className="hidden sm:inline"/> solutions. I combine strong development skills with AI/ML<br className="hidden sm:inline"/> to create smart, efficient, and impactful digital experiences.
          </p>
          <div ref={statsRef} className='w-full max-w-[320px] md:w-[280px] h-auto pb-4 md:h-[200px] border-t-3 mt-4 flex justify-around md:justify-start border-[#79231C] gap-6 sm:gap-10 md:gap-12 mx-auto md:mx-0'>
            <div className='text-center md:text-left text-[var(--c-text)] mt-3.5 flex flex-col items-center md:items-start group cursor-default'>
              <img src="/experience.png" className='w-[45px] h-[45px] md:w-[50px] md:h-[50px] object-contain group-hover:scale-110 transition-transform' alt="" />
              <h1 className='font-bebas text-[var(--text-bg)] text-xl sm:text-2xl leading-relaxed tracking-wide text-glow'>1.5+</h1>
              <h3 className='font-bebas text-[var(--text-bg)] text-xs sm:text-sm'>YEARS <br/> EXPERIENCE</h3>
            </div>
            <div className='text-center md:text-left text-[var(--c-text)] mt-3.5 flex flex-col items-center md:items-start group cursor-default'>
              <img src="/projects.png" className='w-[45px] h-[45px] md:w-[50px] md:h-[50px] object-contain group-hover:scale-110 transition-transform' alt="" />
              <h1 className='font-bebas text-[var(--text-bg)] text-xl sm:text-2xl leading-relaxed tracking-wide text-glow'>10+</h1>
              <h3 className='font-bebas text-[var(--text-bg)] text-xs sm:text-sm'>projects <br/>complete</h3>
            </div>
            <div className='text-center md:text-left text-[var(--c-text)] mt-3.5 flex flex-col items-center md:items-start group cursor-default'>
              <img src="/clients.png" className='w-[45px] h-[45px] md:w-[50px] md:h-[50px] object-contain group-hover:scale-110 transition-transform' alt="" />
              <h1 className='font-bebas text-[var(--text-bg)] text-xl sm:text-2xl leading-relaxed tracking-wide text-glow'>5+</h1>
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
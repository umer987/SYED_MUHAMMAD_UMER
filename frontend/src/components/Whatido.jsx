import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import frontendPng from "../../assets/frontend.png";
import backendPng from "../../assets/backend.png";
import aiPng from "../../assets/ai.png";
import dataPng from "../../assets/data.png";
import systemPng from "../../assets/system.png";

gsap.registerPlugin(ScrollTrigger)

function Whatido() {
  const containerRef = useRef(null)
  const headerRef = useRef(null)
  const lineRef = useRef(null)
  const cardsRef = useRef(null)

  const services = [
    {
      title: "Frontend",
      description: "Creating responsive and interactive interfaces with React and modern web technologies.",
      icon: frontendPng,
    },
    {
      title: "Backend",
      description: "Building scalable APIs, server-side applications and database-driven systems.",
      icon: backendPng,
    },
    {
      title: "AI / ML",
      description: "Developing intelligent solutions using machine learning, NLP and predictive models.",
      icon: aiPng,
    },
    {
      title: "Data Analytics",
      description: "Transforming raw data into insights through analysis, visualization and machine learning.",
      icon: dataPng,
    },
    {
      title: "System Design",
      description: "Designing scalable architectures that are reliable, maintainable and performance-focused.",
      icon: systemPng,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading & line reveal
      gsap.fromTo(
        headerRef.current,
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
          },
        }
      );

      gsap.fromTo(
        lineRef.current,
        { width: 0 },
        {
          width: 50,
          duration: 0.8,
          ease: 'power2.out',
          delay: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
          },
        }
      );

      // Staggered cards reveal
      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          {
            y: 50,
            opacity: 0,
            scale: 0.92,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            stagger: 0.1,
            duration: 0.8,
            ease: 'back.out(1.3)',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 85%',
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className='w-full h-auto flex flex-col md:flex-row gap-6 md:gap-8 flex-wrap xl:flex-nowrap justify-center md:justify-start items-center md:items-stretch bg-[var(--bg-w)] p-5 sm:p-6 md:p-8 border border-[var(--bg-red)] relative overflow-hidden'
    >
      <div className='w-full md:w-[200px] lg:w-[220px] flex flex-col items-center text-center md:items-start md:text-left shrink-0'>
        <h1 ref={headerRef} className='font-bebas text-2xl md:text-3xl text-[var(--text-bg)]'>
          What i do
        </h1>
        <div ref={lineRef} className='h-[4px] bg-[var(--bg-red)] mt-1 mx-auto md:mx-0 w-[50px]'></div>
      </div>

      <div ref={cardsRef} className='w-full flex-1 flex flex-wrap gap-4 sm:gap-6 justify-center md:justify-start items-stretch'>
        {services.map((service, index) => (
          <div
            key={index}
            className="
              group
              w-full
              max-w-[320px]
              sm:w-[220px]
              md:w-[210px]
              lg:w-[230px]

              min-h-[170px]
              sm:min-h-[190px]
              md:h-auto

              rounded-[8px]
              p-4
              sm:p-4
              md:p-5

              border
              border-[var(--bg-red)]
              flex
              flex-col
              items-center
              text-center
              sm:items-start
              sm:text-left
              transition-all
              duration-500
              hover:-translate-y-2
              hover:shadow-[0_8px_25px_rgba(121,35,28,0.4)]
              hover:border-[#ff2b2b]
              relative
              overflow-hidden
              cursor-pointer
            "
          >
            {/* Subtle glow on hover */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-[#79231C]/0 group-hover:bg-[#79231C]/30 rounded-full blur-xl transition-all duration-500 pointer-events-none"></div>

            <img
              className="
                w-[26px]
                h-[26px]
                sm:w-[27px]
                sm:h-[27px]
                md:w-[30px]
                md:h-[30px]
                mb-2
                md:mb-2.5
                object-contain
                group-hover:scale-115
                group-hover:rotate-6
                transition-transform
                duration-300
              "
              src={service.icon}
              alt={service.title}
            />

            <h3
              className="
                font-bebas
                text-xl
                sm:text-[22px]
                md:text-2xl
                text-[var(--text-bg)]
                group-hover:text-white
                transition-colors
              "
            >
              {service.title}
            </h3>

            <p
              className="
                whitespace-pre-line
                font-oswald
                font-light
                text-sm
                sm:text-[15px]
                md:text-base
                leading-[1.35]
                text-[var(--text-bg)]
                group-hover:text-[#E7CEB0]/95
                transition-colors
              "
            >
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Whatido

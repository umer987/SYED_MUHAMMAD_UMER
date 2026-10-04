import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import location from "../assets/location.png";
import web from "../assets/web.png";
import email from "../assets/email.png";
import phone from "../assets/phone.png";
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    { id: 1, image: email, text: "umershakir987@gmail.com" },
    { id: 2, image: phone, text: "+92-3132711470" },
    { id: 3, image: web, text: "www.syedmuhammadumer.com" },
    { id: 4, image: location, text: "KARACHI, PAKISTAN" },
]

function Letscollab() {
    const navigate = useNavigate();
    const containerRef = useRef(null);
    const contactColRef = useRef(null);
    const socialColRef = useRef(null);
    const ctaColRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Left Column (Contact Info)
            if (contactColRef.current) {
                gsap.fromTo(
                    contactColRef.current.children,
                    { opacity: 0, x: -30 },
                    {
                        opacity: 1,
                        x: 0,
                        stagger: 0.12,
                        duration: 0.8,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: 'top 85%',
                        },
                    }
                );
            }

            // Middle Column (Social Badges)
            if (socialColRef.current) {
                gsap.fromTo(
                    socialColRef.current.children,
                    { opacity: 0, scale: 0.75, y: 30 },
                    {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        stagger: 0.15,
                        duration: 0.8,
                        ease: 'back.out(1.6)',
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: 'top 85%',
                        },
                    }
                );
            }

            // Right Column (CTA)
            if (ctaColRef.current) {
                gsap.fromTo(
                    ctaColRef.current.children,
                    { opacity: 0, x: 30 },
                    {
                        opacity: 1,
                        x: 0,
                        stagger: 0.12,
                        duration: 0.8,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: containerRef.current,
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
            className="
                text-[var(--text-bg)]
                font-bebas
                w-full
                h-auto
                min-h-[300px]
                flex
                flex-col
                lg:flex-row
                border
                justify-between
                items-center
                border-[var(--bg-red)]
                bg-[var(--bg-w)]
                p-6
                sm:p-8
                lg:p-6
                gap-8
                lg:gap-4
                relative
                overflow-hidden
            "
        >
            {/* Ambient Background glow */}
            <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#79231C]/15 rounded-full blur-3xl pointer-events-none"></div>

            {/* Contact Info */}
            <div ref={contactColRef} className="w-full lg:w-[33%] flex flex-col items-center text-center lg:items-start lg:text-left relative z-10">
                <h1 className="font-bold text-2xl sm:text-3xl mb-1 tracking-wide">LET'S COLLABORATE</h1>
                <p className="text-[16px] mb-4 text-[#E7CEB0]/80">Have a Project In Mind?</p>
                <div className="flex gap-3.5 flex-col mt-2 items-center lg:items-start w-full max-w-[290px] lg:max-w-none">
                    {projects.map((project) => (
                        <div key={project.id} className="flex items-center gap-3 sm:gap-4 w-full justify-start group cursor-default">
                            <div
                                className="
                                    w-[35px]
                                    h-[35px]
                                    rounded-full
                                    border
                                    border-[var(--bg-red)]
                                    flex
                                    justify-center
                                    items-center
                                    shrink-0
                                    group-hover:border-[#ff2b2b]
                                    group-hover:scale-110
                                    transition-all
                                "
                            >
                                <img
                                    src={project.image}
                                    alt="contact icon"
                                    className="w-[18px] h-[18px] object-contain"
                                />
                            </div>
                            <p className="text-sm md:text-[15px] font-medium font-oswald break-all text-left group-hover:text-white transition-colors">
                                {project.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Social Badges */}
            <div ref={socialColRef} className='flex gap-6 sm:gap-8 justify-center items-center w-full lg:w-[33%] p-2 lg:p-4 my-2 lg:my-0 relative z-10'>
                {/* LinkedIn */}
                <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='flex flex-col items-center gap-2 group cursor-pointer'
                >
                    <div className="relative">
                        <div className="absolute inset-0 bg-[#79231C]/30 rounded-2xl blur-md group-hover:bg-[#ff2b2b]/40 transition-all duration-300"></div>
                        <img 
                            src="/linkdin.png" 
                            className='w-[150px] h-[150px] sm:w-[130px] sm:h-[130px] lg:w-[200px] lg:h-[200px] rounded-2xl object-cover group-hover:scale-108 transition-all duration-300 border border-[#79231C]/60 group-hover:border-[#ff2b2b] shadow-xl relative z-10' 
                            alt="LinkedIn" 
                        />
                    </div>
                    <span className='text-sm sm:text-base lg:text-lg font-semibold text-[#E7CEB0] tracking-wide group-hover:text-white transition-colors'>
                        LinkedIn
                    </span>
                </a>

                {/* GitHub */}
                <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='flex flex-col items-center gap-2 group cursor-pointer'
                >
                    <div className="relative">
                        <div className="absolute inset-0 bg-[#79231C]/30 rounded-2xl blur-md group-hover:bg-[#ff2b2b]/40 transition-all duration-300"></div>
                        <img 
                            src="/github.png" 
                            className='w-[150px] h-[150px] sm:w-[130px] sm:h-[130px] lg:w-[200px] lg:h-[200px] rounded-2xl object-cover group-hover:scale-108 transition-all duration-300 border border-[#79231C]/60 group-hover:border-[#ff2b2b] shadow-xl relative z-10' 
                            alt="GitHub" 
                        />
                    </div>
                    <span className='text-sm sm:text-base lg:text-lg font-semibold text-[#E7CEB0] tracking-wide group-hover:text-white transition-colors'>
                        GitHub
                    </span>
                </a>
            </div>

            {/* CTA Section */}
            <div ref={ctaColRef} className='w-full lg:w-[33%] flex flex-col items-center text-center lg:items-end lg:text-right p-2 lg:p-4 leading-relaxed tracking-wide relative z-10'>
                <h1 className="font-bold text-xl sm:text-2xl mb-2 max-w-[360px] leading-tight">
                    DESIGNING INTELLIGENT, SCALABLE USER EXPERIENCES.
                    <br className="hidden sm:inline" />
                    THROUGH SEAMLESS FULL-STACK ENGINEERING.
                </h1>
                <img src="/SIGN.png" className='w-[90px] h-[50px] my-2 object-contain hover:scale-105 transition-transform' alt="Signature" />

                <div>
                    <button 
                        onClick={() => navigate('/message-me')} 
                        className='relative group overflow-hidden p-3 px-7 sm:p-3.5 sm:px-8 bg-[#79231C] border-2 mt-3 cursor-pointer border-[#E7CEB0] rounded-[10px] text-white font-bebas text-lg tracking-wider shadow-[0_0_20px_rgba(121,35,28,0.5)] hover:shadow-[0_0_30px_rgba(255,43,43,0.7)] transition-all duration-300 hover:scale-105 active:scale-95'
                    >
                        <span className="relative z-10">MESSAGE ME!</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-[#79231C] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default Letscollab
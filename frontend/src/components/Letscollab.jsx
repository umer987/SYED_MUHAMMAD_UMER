import React from 'react'
import location from "../assets/location.png";
import web from "../assets/web.png";
import email from "../assets/email.png";
import phone from "../assets/phone.png";
import { useNavigate } from 'react-router-dom';

const projects = [
    { id: 1, image: email, text: "umershakir987@gmail.com" },
    { id: 2, image: phone, text: "+92-3132711470" },
    { id: 3, image: web, text: "www.syedmuhammadumer.com" },
    { id: 4, image: location, text: "KARACHI, PAKISTAN" },
]

function Letscollab() {
      const navigate = useNavigate();

  return (
    <div
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
        "
    >
        {/* Contact Info */}
        <div className="w-full lg:w-[33%] flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1 className="font-bold text-2xl sm:text-3xl mb-1 tracking-wide">LET'S COLLABORATE</h1>
            <p className="text-[16px] mb-4 text-[#E7CEB0]/80">Have a Project In Mind?</p>
            <div className="flex gap-3.5 flex-col mt-2 items-center lg:items-start w-full max-w-[290px] lg:max-w-none">
                
                {projects.map((project) => (
                    <div key={project.id} className="flex items-center gap-3 sm:gap-4 w-full justify-start">
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
                            "
                        >
                            <img
                                src={project.image}
                                alt="contact icon"
                                className="w-[18px] h-[18px] object-contain"
                            />
                        </div>
                        <p className="text-sm md:text-[15px] font-medium font-oswald break-all text-left">
                            {project.text}
                        </p>
                    </div>
                ))}
                
            </div>
        </div>
        
        {/* Social Badges */}
       {/* Social Badges */}
<div className='flex gap-6 sm:gap-8 justify-center items-center w-full lg:w-[33%] p-2 lg:p-4 my-2 lg:my-0'>
    {/* LinkedIn */}
    <div className='flex flex-col items-center gap-2'>
        <img 
            src="/linkdin.png" 
            className='w-[150px] h-[150px] sm:w-[130px] sm:h-[130px] lg:w-[200px] lg:h-[200px] rounded-2xl object-cover hover:scale-105 transition-transform duration-300 border border-[#79231C]/30 shadow-lg' 
            alt="LinkedIn" 
        />
        <span className='text-sm sm:text-base lg:text-lg font-semibold text-[#E7CEB0] tracking-wide'>
            LinkedIn
        </span>
    </div>

    {/* GitHub */}
    <div className='flex flex-col items-center gap-2'>
        <img 
            src="/github.png" 
            className='w-[100px] h-[100px] sm:w-[130px] sm:h-[130px] lg:w-[200px] lg:h-[200px] rounded-2xl object-cover hover:scale-105 transition-transform duration-300 border border-[#79231C]/30 shadow-lg' 
            alt="GitHub" 
        />
        <span className='text-sm sm:text-base lg:text-lg font-semibold text-[#E7CEB0] tracking-wide'>
            GitHub
        </span>
    </div>
</div>

        {/* CTA Section */}
        <div className='w-full lg:w-[33%] flex flex-col items-center text-center lg:items-end lg:text-right p-2 lg:p-4 leading-relaxed tracking-wide'>
            <h1 className="font-bold text-xl sm:text-2xl mb-2 max-w-[360px] leading-tight">
                DESIGNING INTELLIGENT, SCALABLE USER EXPERIENCES.
                <br className="hidden sm:inline" />
                THROUGH SEAMLESS FULL-STACK ENGINEERING.
            </h1>
            <img src="/SIGN.png" className='w-[90px] h-[50px] my-2 object-contain' alt="Signature" />

            <div>
                <button 
                    onClick={() => navigate('/message-me')} 
                    className='p-3 px-6 sm:p-3.5 sm:px-6 bg-[#79231C] border-2 mt-3 cursor-pointer border-[#E7CEB0] rounded-[10px] hover:bg-[#5a1b15] transition-all hover:scale-105 active:scale-95'
                >
                    MESSAGE ME!
                </button>
            </div>
        </div>
        
    </div>
  )
}
// done here
export default Letscollab
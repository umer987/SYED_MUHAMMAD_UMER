import React from 'react'
import location from "../assets/location.png";
import web from "../assets/web.png";
import email from "../assets/email.png";
import phone from "../assets/phone.png";

const projects = [
    { id: 1, image: email, text: "umershakir987@gmail.com" },
    { id: 2, image: phone, text: "+92-3132711470" },
    { id: 3, image: web, text: "www.syedmuhammadumer.com" },
    { id: 4, image: location, text: "PAKISTAN" },
]

function Letscollab() {
  return (
    <div
        className="
            text-[var(--text-bg)]
            font-bebas
            w-full
            h-[300px]
            flex
            lg:flex-row
            border
            justify-between
            items-center
            border-[var(--bg-red)]
            bg-[var(--bg-w)]
            p-5
            md:p-6
        "
    >
        <div>
            <h1 className="font-bold text-2xl mb-1">LET'S COLLABORATE</h1>
            <p className="text-[16px] mb-4">Have a Project In Mind?</p>
            <div className="flex gap-4 flex-col mt-2.5">
                
                {projects.map((project) => (
                    // This wrapper flexbox aligns the icon and text side-by-side
                    <div key={project.id} className="flex items-center gap-4">
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
                                className="w-[20px] h-[20px] object-contain"
                            />
                        </div>
                        {/* Text mapping next to the logo */}
                        <p className="text-sm md:text-[15px] font-medium font-oswald">
                            {project.text}
                        </p>
                    </div>
                ))}
                
            </div>
        </div>
        
        {/* Empty divs from your original layout */}
        <div className='flex gap-12 w-[33%] p-12 ml-12'>
            <img src="/linkdin.png" className='w-[200px] rounded-2xl h-[200px]'  alt="" srcset="" />
            <img src="/github.png"  className='w-[200px] rounded-2xl h-[200px]' alt="" srcset="" />

        </div>
        <div className='p-12 w-[33%] flex flex-col items-end leading-relaxed tracking-wide'>
                <h1 className="font-bold text-2xl mb-1">DESIGNING INTELLIGENT, SCALABLE USER EXPERIENCES.
THROUGH SEAMLESS FULL-STACK ENGINEERING.</h1>
                <img src="/SIGN.png" className=' w-[90px] h-[50px] ' alt="" srcset="" />

        </div>
    </div>
  )
}

export default Letscollab
import React from 'react'
import frontendPng from "../../assets/frontend.png";
import backendPng from "../../assets/backend.png";
import aiPng from "../../assets/ai.png";
import dataPng from "../../assets/data.png";
import systemPng from "../../assets/system.png";
function Whatido() {
 const services = [
    {
        title: "Frontend",
        description:
            "Creating responsive and interactive interfaces with React and modern web technologies.",
        icon: frontendPng,
    },
    {
        title: "Backend",
        description:
            "Building scalable APIs, server-side applications and database-driven systems.",
        icon: backendPng,
    },
    {
        title: "AI / ML",
        description:
            "Developing intelligent solutions using machine learning, NLP and predictive models.",
        icon: aiPng,
    },
    {
        title: "Data Analytics",
        description:
            "Transforming raw data into insights through analysis, visualization and machine learning.",
        icon: dataPng,
    },
    {
        title: "System Design",
        description:
            "Designing scalable architectures that are reliable, maintainable and performance-focused.",
        icon: systemPng,
    },
];
    return (
        <div className='w-full h-[250px]  flex gap-8 flex-wrap md:flex-nowrap bg-[var(--bg-w)] p-8 border border-[var(--bg-red)]'>
            <div className=' w-[16%]  h-[200px]'>
                <h1 className='font-bebas text-3xl text-[var(--text-bg)]'>What i do</h1>
                <div className='w-[50px] h-[4px] bg-[var(--bg-red)]'></div>
            </div>


            {services.map((service, index) => (
                <div className=' w-[250px] border-1 border-[var(--bg-red)]  h-[200px] rounded-[8px] p-4' key={index}>
                    <img className='w-[30px] h-[30px] mb-2.5' src={service.icon } alt="" />
                    <h3 className='font-bebas text-2xl text-[var(--text-bg)]'>{service.title}</h3>

                    <p className="whitespace-pre-line font-oswald font-extralight text-[var(--text-bg)]">{service.description}</p>

                    {/* icon */}
                    {/* render based on service.icon */}
                </div>
            ))}

        </div>
    )
}

export default Whatido

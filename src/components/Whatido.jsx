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
        <div className='w-full h-auto  flex gap-8 flex-wrap  justify-start  md:flex-nowrap bg-[var(--bg-w)] p-8 border border-[var(--bg-red)]'>
            <div className='  md:w-[250px] self-s '>
                <h1 className='font-bebas text-[20px] md:text-3xl text-[var(--text-bg)]'>What i do</h1>
                <div className='w-[50px] h-[4px] bg-[var(--bg-red)]'></div>
            </div>


           {services.map((service, index) => (
    <div
        key={index}
        className="
            w-full
            sm:w-[220px]
            md:w-[230px]
            lg:w-[250px]

            min-h-[180px]
            sm:min-h-[190px]
            md:h-[200px]

            rounded-[8px]
            p-4
            sm:p-4
            md:p-5

            border
            border-[var(--bg-red)]
        "
    >
        <img
            className="
                w-[24px]
                h-[24px]
                sm:w-[27px]
                sm:h-[27px]
                md:w-[30px]
                md:h-[30px]
                mb-2
                md:mb-2.5
                object-contain
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
            "
        >
            {service.description}
        </p>
    </div>
))}

        </div>
    )
}

export default Whatido

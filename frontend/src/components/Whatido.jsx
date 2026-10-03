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
        <div className='w-full h-auto flex flex-col md:flex-row gap-6 md:gap-8 flex-wrap xl:flex-nowrap justify-center md:justify-start items-center md:items-stretch bg-[var(--bg-w)] p-5 sm:p-6 md:p-8 border border-[var(--bg-red)]'>
            <div className='w-full md:w-[200px] lg:w-[220px] flex flex-col items-center text-center md:items-start md:text-left shrink-0'>
                <h1 className='font-bebas text-2xl md:text-3xl text-[var(--text-bg)]'>What i do</h1>
                <div className='w-[50px] h-[4px] bg-[var(--bg-red)] mt-1 mx-auto md:mx-0'></div>
            </div>


            <div className='w-full flex-1 flex flex-wrap gap-4 sm:gap-6 justify-center md:justify-start items-stretch'>
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="
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
                            duration-300
                            hover:-translate-y-1
                            hover:shadow-[0_4px_12px_rgba(121,35,28,0.3)]
                        "
                    >
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

        </div>
    )
}

export default Whatido

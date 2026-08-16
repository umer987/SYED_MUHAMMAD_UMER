import React from "react";
import { FaArrowRight } from "react-icons/fa";

import discover from "../../assets/discover.png";
import architect from "../../assets/architect.png";
import ai from "../../assets/ai.png";
import build from "../../assets/build.png";
import deploy from "../../assets/deploy.png";

function Process() {
    const process = [
        {
            number: "01",
            title: "DISCOVER",
            description:
                "Analyzing requirements, defining the problem and identifying the right technical approach.",
            img: discover,
        },
        {
            number: "02",
            title: "ARCHITECT",
            description:
                "Designing application architecture, APIs, databases and scalable system workflows.",
            img: architect,
        },
        {
            number: "03",
            title: "BUILD",
            description:
                "Developing responsive frontends, robust backends and seamless full-stack applications.",
            img: build,
        },
        {
            number: "04",
            title: "INTELLIGENT",
            description:
                "Building and integrating machine learning models, NLP pipelines and AI-powered features.",
            img: ai,
        },
        {
            number: "05",
            title: "DEPLOY",
            description:
                "Testing, optimizing and deploying production-ready applications with continuous improvements.",
            img: deploy,
        },
    ];

    return (
        <div className="w-full flex flex-col lg:flex-row">

            {/* ================= MY PROCESS ================= */}

            <div className="w-full lg:w-[30%] bg-[var(--bg-w)] border border-[var(--bg-red)] p-5 md:p-6">

                {/* Heading */}
                <div className="mb-7">
                    <h1 className="font-bebas text-xl sm:text-2xl md:text-3xl text-[var(--text-bg)]">
                        MY PROCESS
                    </h1>

                    <div className="w-[50px] h-[4px] bg-[var(--bg-red)] mt-1"></div>
                </div>

                {/* Process */}
                <div className="flex flex-col gap-7">

                    {process.map((item, index) => (
                        <div
                            key={index}
                            className="flex w-full gap-3 sm:gap-4  items-start"
                        >

                            {/* Number */}
                            <span className="font-bebas text-[var(--bg-red)] text-2xl sm:text-3xl md:text-4xl leading-none shrink-0 mt-3 w-[35px]">
                                {item.number}
                            </span>
                            <div className="w-[20px] h-[4px] mt-6 rounded-2xl bg-[var(--bg-red)]"></div>
                            {/* Icon */}
                            <div className="w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] md:w-[55px] md:h-[55px] shrink-0 rounded-full border border-[var(--bg-red)] flex justify-center items-center">

                                <img
                                    className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] md:w-[30px] md:h-[30px] object-contain"
                                    src={item.img}
                                    alt={item.title}
                                />

                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">

                                <h3 className="font-bebas text-xl sm:text-2xl text-[var(--text-bg)] leading-none">
                                    {item.title}
                                </h3>

                                <p className="font-oswald font-extralight text-xs sm:text-sm md:text-base leading-[1.4] text-[var(--text-bg)] mt-1 max-w-[300px]">
                                    {item.description}
                                </p>

                            </div>

                        </div>
                    ))}

                </div>

            </div>


            {/* ================= FEATURED WORK ================= */}

            <div className="w-full lg:w-[70%] bg-[var(--bg-w)] border border-[var(--bg-red)] p-5 md:p-6">

                <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">

                    {/* Heading */}
                    <div>
                        <h1 className="font-bebas text-xl sm:text-2xl md:text-3xl text-[var(--text-bg)]">
                            FEATURED WORK
                        </h1>

                        <div className="w-[50px] h-[4px] bg-[var(--bg-red)] mt-1"></div>
                    </div>

                    {/* View More */}
                    <div className="text-[var(--bg-red)] flex items-center gap-2 cursor-pointer group">

                        <h2 className="font-oswald text-sm sm:text-base">
                            View More Projects
                        </h2>

                        <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Process;
import React from "react";

import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";
import image8 from "../assets/image8.png";
import image10 from "../assets/image10.png";
import image12 from "../assets/image12.png";
import image13 from "../assets/image13.png";
import image14 from "../assets/image14.png";
import image15 from "../assets/image15.png";
import image16 from "../assets/image16.png";
import image17 from "../assets/image17.png";
import image18 from "../assets/image18.png";
import image19 from "../assets/image19.png";
import image20 from "../assets/image20.png";

const projects = [
    { id: 1, image: image1 },
    { id: 2, image: image2 },
    { id: 3, image: image3 },
    { id: 4, image: image4 },
    { id: 5, image: image5 },
    { id: 6, image: image6 },
    { id: 7, image: image7 },
    { id: 8, image: image8 },
    { id: 10, image: image10 },
    { id: 12, image: image12 },
    { id: 13, image: image13 },
    { id: 14, image: image14 },
    { id: 15, image: image15 },
    { id: 16, image: image16 },
    { id: 17, image: image17 },
    { id: 18, image: image18 },
    { id: 19, image: image19 },
    { id: 20, image: image20 },
];

function Aboutme() {
    return (
        <div
            className="
                w-full
                flex
                flex-col
                lg:flex-row
                border
                border-[var(--bg-red)]
                bg-[var(--bg-w)]
                p-5
                md:p-6
            "
        >

            {/* =====================================================
                LEFT SIDE — ABOUT ME
            ====================================================== */}

            <div className="w-full lg:w-[50%]">

                {/* Heading */}
                <div className="mb-6">

                    <h1
                        className="
                            font-bebas
                            text-xl
                            sm:text-2xl
                            md:text-3xl
                            text-[var(--text-bg)]
                        "
                    >
                        ABOUT ME
                    </h1>

                    <div className="w-[50px] h-[4px] bg-[var(--bg-red)] mt-1"></div>

                </div>


                {/* Image + About Text */}
                <div
                    className="
                        w-full
                        flex
                        flex-col
                        md:flex-row
                        gap-5
                        md:gap-6
                        items-start
                    "
                >

                    {/* Profile Image */}
                    <img
                        src="/umer3.jpg"
                        className="
                            w-[200px]
                            h-[250px]
                            md:w-[220px]
                            md:h-[280px]
                            rounded-[10px]
                            object-cover
                            shrink-0
                        "
                        alt="Umer"
                    />


                    {/* About Content */}
                    <div
                        className="
                            font-oswald
                            text-[var(--text-bg)]
                            flex-1
                            min-w-0
                            mt-1
                            md:mt-0
                        "
                    >

                        <p className="text-sm md:text-base leading-relaxed">
                            I'm a Full-Stack & AI/ML Engineer passionate
                            about building scalable web applications,
                            intelligent systems and clean, efficient
                            solutions.
                        </p>


                        <p className="mt-4 text-sm md:text-base leading-relaxed">
                            I believe great software is not just about
                            how it looks, but how effectively it solves
                            real-world problems and performs at scale.
                        </p>


                        {/* Skills */}
                        <ul className="mt-4 space-y-1">

                            <li className="flex items-center gap-2">
                                <span className="w-[7px] h-[7px] rounded-full bg-[#79231C] shrink-0"></span>
                                Detail oriented
                            </li>

                            <li className="flex items-center gap-2">
                                <span className="w-[7px] h-[7px] rounded-full bg-[#79231C] shrink-0"></span>
                                Problem solver
                            </li>

                            <li className="flex items-center gap-2">
                                <span className="w-[7px] h-[7px] rounded-full bg-[#79231C] shrink-0"></span>
                                Scalable & efficient
                            </li>

                            <li className="flex items-center gap-2">
                                <span className="w-[7px] h-[7px] rounded-full bg-[#79231C] shrink-0"></span>
                                AI/ML focused
                            </li>

                        </ul>

                    </div>

                </div>

            </div>



            <div
                className="
                    hidden
                    lg:block
                    w-[1px]
                    bg-[var(--bg-red)]
                    mx-6
                    self-stretch
                "
            ></div>


            <div
                className="
                    w-full
                    lg:w-[50%]
                    mt-8
                    lg:mt-0
                "
            >

                <div className="mb-6">

                    <h1
                        className="
                            font-bebas
                            text-xl
                            sm:text-2xl
                            md:text-3xl
                            text-[var(--text-bg)]
                        "
                    >
                        TOOLS I USE
                    </h1>

                    <div className="w-[50px] h-[4px] bg-[var(--bg-red)] mt-1"></div>

                </div>


                <div className="flex flex-wrap items-center gap-2">

                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="
                                w-[60px]
                                h-[60px]
                                sm:w-[65px]
                                sm:h-[65px]
                                border
                                border-[var(--bg-red)]
                                flex
                                justify-center
                                items-center
                                rounded-[10px]
                                shrink-0
                            "
                        >

                            <img
                                className="
                                    w-[38px]
                                    h-[38px]
                                    sm:w-[40px]
                                    sm:h-[40px]
                                    object-contain
                                "
                                src={project.image}
                                alt={`Tool ${project.id}`}
                            />

                        </div>
                    ))}

                </div>


                

                <div
                    className="
                        p-3
                        md:p-3.5
                        bg-[var(--bg-w)]
                        flex
                        w-full
                        max-w-[400px]
                        min-h-[140px]
                        border
                        border-[var(--bg-red)]
                        rounded-bl-3xl
                        rounded-tr-3xl
                        mt-5
                    "
                >

                    <div className="shrink-0">

                        <img
                            src="/comma.png"
                            className="
                                w-[50px]
                                h-[35px]
                                md:w-[60px]
                                md:h-[40px]
                                object-contain
                            "
                            alt=""
                        />

                    </div>


                    <div
                        className="
                            p-2
                            md:p-2.5
                            w-full
                            font-oswald
                            text-[var(--text-bg)]
                        "
                    >

                        <p className="text-sm md:text-base leading-relaxed">
                            "Umer bridges ML models and production apps
                            seamlessly. Delivered on time, intuitive
                            for users."
                        </p>


                        <p
                            className="
                                italic
                                flex
                                justify-end
                                text-[10px]
                                md:text-xs
                                mt-2
                            "
                        >
                            - CEO Better Future Pakistan (BFFP)
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Aboutme;
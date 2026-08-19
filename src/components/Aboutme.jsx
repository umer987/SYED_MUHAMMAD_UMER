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
    {
        id: 1,
        image: image1,
    },
    {
        id: 2,
        image: image2,
    },
    {
        id: 3,
        image: image3,
    },
    {
        id: 4,
        image: image4,
    },
    {
        id: 5,
        image: image5,
    },
    {
        id: 6,
        image: image6,
    },
    {
        id: 7,
        image: image7,
    },
    {
        id: 8,
        image: image8,
    },
    {
        id: 10,
        image: image10,
    },
    {
        id: 12,
        image: image12,
    },
    {
        id: 13,
        image: image13,
    },
    {
        id: 14,
        image: image14,
    },
    {
        id: 15,
        image: image15,
    },
    {
        id: 16,
        image: image16,
    },
    {
        id: 17,
        image: image17,
    },
    {
        id: 18,
        image: image18,
    },
    {
        id: 19,
        image: image19,
    },
    {
        id: 20,
        image: image20,
    },
];
function Aboutme() {
    return (
        <div className="w-full flex flex-col h-auto lg:flex-row min-h-[600px] border border-[var(--bg-red)] bg-[var(--bg-w)] p-6">


            <div className="w-full lg:w-[50%] ">

                <div className="mb-7">

                    <h1 className="font-bebas text-xl sm:text-2xl md:text-3xl text-[var(--text-bg)]">
                        ABOUT ME
                    </h1>

                    <div className="w-[50px] h-[4px] bg-[var(--bg-red)] mt-1"></div>

                </div>


                {/* Image + Content */}
                <div className="w-full">

                    <div className="flex flex-col md:flex-row gap-6 mt-4 items-start">

                        <img
                            src="/umer3.jpg"
                            className="
                                w-[200px]
                                md:w-[250px]
                                h-[250px]
                                md:h-[280px]
                                rounded-[10px]
                                object-cover
                                shrink-0
                            "
                            alt="Umer"
                        />


                        {/* Text */}
                        <div className="font-oswald text-[var(--text-bg)] mt-3.5 flex-1">

                            <p className="text-sm md:text-base leading-relaxed">
                                I'm a Full-Stack & AI/ML Engineer passionate about
                                building scalable web applications, intelligent
                                systems and clean, efficient solutions.
                            </p>

                            <p className="mt-4 text-sm md:text-base leading-relaxed">
                                I believe great software is not just about how it
                                looks, but how effectively it solves real-world
                                problems and performs at scale.
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

            </div>



            <div className="hidden lg:block w-[1px] h-[400px] bg-[var(--bg-red)] mx-6"></div>


<div className="w-full lg:w-[50%] mt-8 lg:mt-0">

    {/* Heading */}
    <div className="mb-7">
        <h1 className="font-bebas text-xl sm:text-2xl md:text-3xl text-[var(--text-bg)]">
            TOOLS I USE
        </h1>

        <div className="w-[50px] h-[4px] bg-[var(--bg-red)] mt-1"></div>
    </div>

    {/* Images */}
    <div className="flex flex-wrap items-center gap-2">
        {projects.map((project) => (
            <div
                key={project.id}
                className="
                    h-[65px]
                    w-[65px]
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
                    className="w-[40px] h-[40px] object-contain"
                    src={project.image}
                    alt={`Project ${project.id}`}
                />
            </div>
        ))}
    </div>

</div>
        </div>
    );
}

export default Aboutme;
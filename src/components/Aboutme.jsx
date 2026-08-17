import React from "react";

function Aboutme() {
    return (
        <div className="w-full flex flex-col h-[450px] lg:flex-row min-h-[600px] border border-[var(--bg-red)] p-6">


            <div className="w-full lg:w-[50%] h-[400px] ">

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



            <div className="w-full lg:w-[50%]  h-[400px] mt-8 lg:mt-0">


            </div>

        </div>
    );
}

export default Aboutme;
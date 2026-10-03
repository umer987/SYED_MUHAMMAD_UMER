import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

gsap.registerPlugin(ScrollTrigger);

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
    const containerRef = useRef(null);
    const profileImgRef = useRef(null);
    const aboutTextRef = useRef(null);
    const toolsGridRef = useRef(null);
    const testimonialRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Profile image reveal
            if (profileImgRef.current) {
                gsap.fromTo(
                    profileImgRef.current,
                    { scale: 0.85, opacity: 0, y: 25 },
                    {
                        scale: 1,
                        opacity: 1,
                        y: 0,
                        duration: 0.9,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: profileImgRef.current,
                            start: "top 85%",
                        },
                    }
                );
            }

            // About text & bullets reveal
            if (aboutTextRef.current) {
                gsap.fromTo(
                    aboutTextRef.current.children,
                    { opacity: 0, x: 25 },
                    {
                        opacity: 1,
                        x: 0,
                        stagger: 0.12,
                        duration: 0.8,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: aboutTextRef.current,
                            start: "top 85%",
                        },
                    }
                );
            }

            // Tool icons staggered popping entrance
            if (toolsGridRef.current) {
                gsap.fromTo(
                    toolsGridRef.current.children,
                    { scale: 0, opacity: 0, rotation: -12 },
                    {
                        scale: 1,
                        opacity: 1,
                        rotation: 0,
                        stagger: {
                            amount: 0.65,
                            from: "center",
                            grid: "auto",
                        },
                        duration: 0.5,
                        ease: "back.out(2)",
                        scrollTrigger: {
                            trigger: toolsGridRef.current,
                            start: "top 85%",
                        },
                    }
                );
            }

            // Testimonial card bounce-in
            if (testimonialRef.current) {
                gsap.fromTo(
                    testimonialRef.current,
                    { opacity: 0, y: 35, scale: 0.95 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.8,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: testimonialRef.current,
                            start: "top 90%",
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
                w-full
                flex
                flex-col
                lg:flex-row
                border
                border-[var(--bg-red)]
                bg-[var(--bg-w)]
                p-5
                md:p-6
                relative
                overflow-hidden
            "
        >

            {/* =====================================================
                LEFT SIDE — ABOUT ME
            ====================================================== */}

            <div className="w-full lg:w-[50%] flex flex-col items-center md:items-start">

                {/* Heading */}
                <div className="mb-6 flex flex-col items-center text-center md:items-start md:text-left w-full">

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

                    <div className="w-[50px] h-[4px] bg-[var(--bg-red)] mt-1 mx-auto md:mx-0"></div>

                </div>


                <div
                    className="
                        w-full
                        flex
                        flex-col
                        md:flex-row
                        gap-5
                        md:gap-6
                        items-center
                        md:items-start
                        text-center
                        md:text-left
                    "
                >

                    {/* Profile Image */}
                    <div className="relative group shrink-0">
                        <div className="absolute inset-0 bg-[#79231C]/30 rounded-[12px] blur-lg group-hover:bg-[#79231C]/50 transition-all duration-500 pointer-events-none"></div>
                        <img
                            ref={profileImgRef}
                            src="/umer3.jpg"
                            className="
                                w-[180px]
                                h-[230px]
                                sm:w-[200px]
                                sm:h-[250px]
                                md:w-[220px]
                                md:h-[280px]
                                rounded-[10px]
                                object-cover
                                shrink-0
                                mx-auto
                                md:mx-0
                                relative
                                z-10
                                border
                                border-[#79231C]/60
                                shadow-xl
                                transition-transform
                                duration-500
                                group-hover:scale-103
                            "
                            alt="Umer"
                        />
                    </div>


                    <div
                        ref={aboutTextRef}
                        className="
                            font-oswald
                            text-[var(--text-bg)]
                            flex-1
                            min-w-0
                            mt-1
                            md:mt-0
                            flex
                            flex-col
                            items-center
                            md:items-start
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
                        <ul className="mt-4 space-y-1.5 inline-block text-left">

                            <li className="flex items-center gap-2 group cursor-default">
                                <span className="w-[7px] h-[7px] rounded-full bg-[#79231C] shrink-0 group-hover:bg-[#ff2b2b] group-hover:scale-125 transition-all"></span>
                                <span className="group-hover:text-white transition-colors">Detail oriented</span>
                            </li>

                            <li className="flex items-center gap-2 group cursor-default">
                                <span className="w-[7px] h-[7px] rounded-full bg-[#79231C] shrink-0 group-hover:bg-[#ff2b2b] group-hover:scale-125 transition-all"></span>
                                <span className="group-hover:text-white transition-colors">Problem solver</span>
                            </li>

                            <li className="flex items-center gap-2 group cursor-default">
                                <span className="w-[7px] h-[7px] rounded-full bg-[#79231C] shrink-0 group-hover:bg-[#ff2b2b] group-hover:scale-125 transition-all"></span>
                                <span className="group-hover:text-white transition-colors">Scalable & efficient</span>
                            </li>

                            <li className="flex items-center gap-2 group cursor-default">
                                <span className="w-[7px] h-[7px] rounded-full bg-[#79231C] shrink-0 group-hover:bg-[#ff2b2b] group-hover:scale-125 transition-all"></span>
                                <span className="group-hover:text-white transition-colors">AI/ML focused</span>
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

            {/* Mobile divider */}
            <div className="block lg:hidden w-full h-[1px] bg-[var(--bg-red)] my-8"></div>


            <div
                className="
                    w-full
                    lg:w-[50%]
                    mt-2
                    lg:mt-0
                    flex
                    flex-col
                    items-center
                    lg:items-start
                "
            >

                <div className="mb-6 flex flex-col items-center text-center lg:items-start lg:text-left w-full">

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

                    <div className="w-[50px] h-[4px] bg-[var(--bg-red)] mt-1 mx-auto lg:mx-0"></div>

                </div>


                <div ref={toolsGridRef} className="flex flex-wrap items-center justify-center lg:justify-start gap-2 max-w-[480px]">

                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="
                                group
                                cursor-pointer
                                transition-all
                                duration-300
                                ease-out
                                hover:-translate-y-1.5
                                hover:shadow-[0_6px_20px_rgba(255,43,43,0.35)]
                                hover:border-[#ff2b2b]
                                w-[55px]
                                h-[55px]
                                sm:w-[65px]
                                sm:h-[65px]
                                border
                                border-[var(--bg-red)]
                                flex
                                justify-center
                                items-center
                                rounded-[10px]
                                shrink-0
                                bg-black/40
                                backdrop-blur-xs
                            "
                        >
                            <img
                                className="
                                    transition-transform
                                    duration-300
                                    ease-out
                                    group-hover:scale-125
                                    w-[34px]
                                    h-[34px]
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
                    ref={testimonialRef}
                    className="
                        p-3.5
                        md:p-4
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
                        mx-auto
                        lg:mx-0
                        shadow-lg
                        hover:border-[#ff2b2b]
                        transition-all
                        duration-500
                    "
                >

                    <div className="shrink-0">

                        <img
                            src="/comma.png"
                            className="
                                w-[45px]
                                h-[32px]
                                sm:w-[50px]
                                sm:h-[35px]
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
                                text-[#E7CEB0]/80
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
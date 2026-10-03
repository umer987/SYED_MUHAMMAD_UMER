import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import api from '../api';
import discover from "../../assets/discover.png";
import architect from "../../assets/architect.png";
import ai from "../../assets/ai.png";
import build from "../../assets/build.png";
import deploy from "../../assets/deploy.png";
import { useNavigate } from 'react-router-dom';

function Process() {
      const navigate = useNavigate();
    const process = [
        {
            number: "01",
            title: "DISCOVER",
            description: "Analyzing requirements, defining the problem and identifying the right technical approach.",
            img: discover,
        },
        {
            number: "02",
            title: "ARCHITECT",
            description: "Designing application architecture, APIs, databases and scalable system workflows.",
            img: architect,
        },
        {
            number: "03",
            title: "BUILD",
            description: "Developing responsive frontends, robust backends and seamless full-stack applications.",
            img: build,
        },
        {
            number: "04",
            title: "INTELLIGENT",
            description: "Building and integrating machine learning models, NLP pipelines and AI-powered features.",
            img: ai,
        },
        {
            number: "05",
            title: "DEPLOY",
            description: "Testing, optimizing and deploying production-ready applications with continuous improvements.",
            img: deploy,
        },
    ];

    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await api.get('/project/all-project');
                const data = response.data.projects || response.data;
                setProjects(data);
            } catch (err) {
                setError('Failed to load projects');
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div className="w-full flex flex-col lg:flex-row">

            {/* ================= MY PROCESS ================= */}
            <div className="w-full lg:w-[30%] bg-[var(--bg-w)] border border-[var(--bg-red)] p-5 md:p-6 flex flex-col items-center sm:items-start">
                <div className="mb-7 flex flex-col items-center text-center sm:items-start sm:text-left w-full">
                    <h1 className="font-bebas text-xl sm:text-2xl md:text-3xl text-[var(--text-bg)]">MY PROCESS</h1>
                    <div className="w-[50px] h-[4px] bg-[var(--bg-red)] mt-1 mx-auto sm:mx-0"></div>
                </div>

                <div className="flex flex-col gap-6 sm:gap-7 w-full max-w-[420px] sm:max-w-none mx-auto sm:mx-0">
                    {process.map((item, index) => (
                        <div key={index} className="flex w-full gap-2.5 sm:gap-4 items-center sm:items-start">
                            <span className="font-bebas text-[var(--bg-red)] text-2xl sm:text-3xl md:text-4xl leading-none shrink-0 w-[30px] sm:w-[35px] text-center">
                                {item.number}
                            </span>
                            <div className="w-[14px] sm:w-[20px] h-[4px] sm:mt-6 rounded-2xl bg-[var(--bg-red)] shrink-0"></div>
                            <div className="w-[42px] h-[42px] sm:w-[50px] sm:h-[50px] md:w-[55px] md:h-[55px] shrink-0 rounded-full border border-[var(--bg-red)] flex justify-center items-center">
                                <img className="w-[22px] h-[22px] sm:w-[28px] sm:h-[28px] md:w-[30px] md:h-[30px] object-contain" src={item.img} alt={item.title} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="font-bebas text-lg sm:text-xl md:text-2xl text-[var(--text-bg)] leading-none">{item.title}</h3>
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
                <div className="w-full flex flex-col sm:flex-row sm:justify-between items-center sm:items-center gap-4 text-center sm:text-left">
                    <div className="flex flex-col items-center sm:items-start">
                        <h1 className="font-bebas text-xl sm:text-2xl md:text-3xl text-[var(--text-bg)]">FEATURED WORK</h1>
                        <div className="w-[50px] h-[4px] bg-[var(--bg-red)] mt-1 mx-auto sm:mx-0"></div>
                    </div>
                    <div className="text-[var(--bg-red)] flex items-center justify-center gap-2 cursor-pointer group" onClick={() => navigate('/all-projects')}>
                        <h2 className="font-oswald text-sm sm:text-base">View More Projects</h2>
                        <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                </div>

                {/* --- MAPPED PROJECTS GRID --- */}
                <div className="mt-8">
                    {isLoading ? (
                        <div className="text-[var(--bg-red)] font-oswald text-xl animate-pulse text-center sm:text-left">Loading projects...</div>
                    ) : error ? (
                        <div className="text-red-500 font-oswald text-xl text-center sm:text-left">{error}</div>
                    ) : projects.length === 0 ? (
                        <div className="text-[var(--text-bg)] font-oswald text-xl text-center sm:text-left">No projects found.</div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-[500px] sm:max-w-none mx-auto sm:mx-0">
                            {projects.slice(0, 4).map((project) => (
                                <div 
                                    key={project._id} 
                                    className="group cursor-pointer flex flex-col border border-[var(--bg-red)] rounded-lg overflow-hidden transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_8px_20px_rgba(121,35,28,0.3)] bg-[var(--bg-w)]"
                                >
                                    <div className="w-full h-[160px] sm:h-[180px] overflow-hidden border-b border-[var(--bg-red)]">
                                        <img 
                                            src={project.image} 
                                            alt={project.title} 
                                            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                                        />
                                    </div>
                                    
                                    <div className="p-4 flex flex-col gap-1.5 items-center sm:items-start text-center sm:text-left">
                                        <span className="font-oswald tracking-widest text-[var(--bg-red)] text-[10px] sm:text-xs uppercase">
                                            {project.category}
                                        </span>
                                        
                                        <h3 className="font-bebas text-xl text-[var(--text-bg)] tracking-wide leading-none mt-1">
                                            {project.title}
                                        </h3>
                                        
                                        <p className="font-oswald text-[var(--text-bg)] text-xs sm:text-sm font-extralight line-clamp-2 mt-1">
                                            {project.description || project.discription || 'Project showcase'}
                                        </p>
                                        {project.liveLink && (
                                            <a
                                                href={project.liveLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="mt-3 flex w-fit items-center gap-2 bg-[var(--bg-red)] text-white font-oswald px-4 py-2 rounded-full text-[11px] hover:opacity-90 transition-opacity mx-auto sm:mx-0"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                LIVE DEMO <span className="text-sm">↗</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                {/* ---------------------------- */}
                
            </div>
        </div>
    );
}

export default Process;
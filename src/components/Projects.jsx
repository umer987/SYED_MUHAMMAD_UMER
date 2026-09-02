


import { useEffect, useState } from "react";
import axios from "axios";
import { FaArrowRight, FaGithub, FaExternalLinkAlt, FaTimes, FaCode, FaLaptopCode } from "react-icons/fa";
import Navbar from "./Navbar";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:3000/api/project/all-project",
                    {
                        withCredentials: true,
                    }
                );
                const data = response.data.projects || response.data;
                setProjects(data);
            } catch (error) {
                console.error("Failed to load projects:", error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <section className="min-h-screen bg-[#180809] py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <Navbar/>
            {/* Creative Background Elements */}
            <div className=" mt-8 absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-[#79231C]/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#79231C]/5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#79231C]/10 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-[#79231C]/20 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border border-[#79231C]/30 rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Creative Header */}
                <div className="text-center mb-16 relative">
                    <div className="inline-block relative">
                        <span className="absolute -top-2 -left-2 w-3 h-3 bg-[#79231C] rotate-45"></span>
                        <span className="absolute -bottom-2 -right-2 w-3 h-3 bg-[#79231C] rotate-45"></span>
                        <p className="text-[#E7CEB0] font-oswald tracking-[0.3em] text-sm uppercase mb-2 opacity-60">
                            SYED MUHAMMAD UMER
                        </p>
                    </div>
                    <h1 className="font-oswald text-5xl sm:text-6xl md:text-7xl text-[#E7CEB0] font-bold tracking-wider">
                        <span className="relative">
                            Featured
                            <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#79231C]"></span>
                        </span>
                        <br />
                        <span className="text-[#79231C]">Projects</span>
                    </h1>
                    <div className="flex justify-center gap-3 mt-6">
                        <div className="w-12 h-[2px] bg-[#79231C]"></div>
                        <div className="w-4 h-[2px] bg-[#79231C]"></div>
                        <div className="w-12 h-[2px] bg-[#79231C]"></div>
                    </div>
                </div>

                {/* Projects Grid - More Creative Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={project._id}
                            className="group relative bg-[#201011] rounded-2xl overflow-hidden border border-[#79231C]/30 hover:border-[#79231C] transition-all duration-700 ease-out hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#79231C]/20 cursor-pointer"
                            onClick={() => setSelectedProject(project)}
                            style={{
                                animation: 'fadeInUp 0.8s ease-out forwards',
                                animationDelay: `${index * 0.1}s`,
                                opacity: 0,
                            }}
                        >
                            {/* Creative Corner Decor */}
                            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#79231C]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#79231C]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

                            {/* Image Container with Creative Overlay */}
                            <div className="relative overflow-hidden h-64 bg-[#201011]">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#180809] via-[#180809]/60 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>
                                
                                {/* Creative Category Badge */}
                                <div className="absolute top-4 left-4 flex items-center gap-2">
                                    <span className="bg-[#79231C] text-[#E7CEB0] text-xs font-oswald font-medium px-4 py-1.5 rounded-full shadow-lg transform -rotate-3 group-hover:rotate-0 transition-transform duration-300">
                                        {project.category || 'Project'}
                                    </span>
                                </div>

                                {/* Creative View Project Button */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    <div className="bg-[#201011]/90 backdrop-blur-sm border-2 border-[#79231C] rounded-full px-6 py-3 transform scale-90 group-hover:scale-100 transition-all duration-500">
                                        <span className="text-[#E7CEB0] font-oswald flex items-center gap-3">
                                            <FaLaptopCode className="text-[#79231C]" />
                                            Explore Project
                                            <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-2" />
                                        </span>
                                    </div>
                                </div>

                                {/* Project Number */}
                                <div className="absolute bottom-4 right-4 font-oswald text-5xl font-bold text-[#79231C]/20 group-hover:text-[#79231C]/40 transition-colors duration-500">
                                    {String(index + 1).padStart(2, '0')}
                                </div>
                            </div>

                            {/* Content with Creative Typography */}
                            <div className="p-6 relative">
                                <div className="absolute -top-3 left-6 w-8 h-[2px] bg-[#79231C] group-hover:w-12 transition-all duration-300"></div>
                                <h2 className="font-oswald text-2xl text-[#E7CEB0] font-bold tracking-wide mb-2 group-hover:text-[#E7CEB0]/80 transition-colors duration-300">
                                    {project.title}
                                </h2>
                                <p className="font-oswald text-sm text-[#E7CEB0]/50 font-light leading-relaxed line-clamp-2">
                                    {project.description}
                                </p>
                                {project.technologies && project.technologies.length > 0 && (
                                    <div className="mt-4 flex flex-wrap gap-1.5">
                                        {project.technologies.slice(0, 3).map((tech, idx) => (
                                            <span 
                                                key={idx} 
                                                className="text-[10px] font-oswald text-[#E7CEB0]/40 border border-[#79231C]/20 px-2.5 py-1 rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies.length > 3 && (
                                            <span className="text-[10px] font-oswald text-[#79231C] px-2.5 py-1 rounded-full">
                                                +{project.technologies.length - 3}
                                            </span>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Creative Project Modal */}
                {selectedProject && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#180809]/98 backdrop-blur-xl animate-fadeIn"
                        onClick={() => setSelectedProject(null)}
                    >
                        <div
                            className="bg-[#201011] rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#79231C]/50 animate-slideUp relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Creative Close Button */}
                            <button
                                className="absolute top-6 right-6 z-10 bg-[#180809] text-[#E7CEB0] w-14 h-14 rounded-full flex items-center justify-center hover:bg-[#79231C] hover:text-white transition-all duration-500 shadow-xl border border-[#79231C] group"
                                onClick={() => setSelectedProject(null)}
                            >
                                <FaTimes className="text-xl group-hover:rotate-90 transition-transform duration-500" />
                            </button>

                            {/* Modal Content - Creative Layout */}
                            <div className="relative">
                                {/* Image with Gradient */}
                                <div className="relative h-[50vh] bg-[#180809] overflow-hidden">
                                    <img
                                        src={selectedProject.image}
                                        alt={selectedProject.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#201011] via-[#201011]/50 to-transparent"></div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#180809]/50 to-transparent"></div>
                                    
                                    {/* Creative Category in Modal */}
                                    <div className="absolute bottom-8 left-8 flex items-center gap-4">
                                        <span className="bg-[#79231C] text-[#E7CEB0] text-sm font-oswald font-medium px-6 py-2.5 rounded-full shadow-2xl transform -rotate-2">
                                            {selectedProject.category || 'Project'}
                                        </span>
                                        <div className="flex items-center gap-2 text-[#E7CEB0]/40">
                                            <div className="w-8 h-[2px] bg-[#79231C]"></div>
                                            <span className="font-oswald text-xs tracking-wider">FEATURED</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Details with Creative Layout */}
                                <div className="p-8 md:p-10 -mt-12 relative z-10">
                                    <div className="bg-[#201011]/90 backdrop-blur-sm rounded-2xl p-8 border border-[#79231C]/30">
                                        <div className="flex items-start gap-2 mb-4">
                                            <div className="w-1 h-8 bg-[#79231C]"></div>
                                            <h2 className="font-oswald text-4xl md:text-5xl text-[#E7CEB0] font-bold tracking-wide leading-tight">
                                                {selectedProject.title}
                                            </h2>
                                        </div>

                                        <p className="font-oswald text-base text-[#E7CEB0]/70 leading-relaxed mb-8 pl-3 border-l-2 border-[#79231C]/30">
                                            {selectedProject.description}
                                        </p>

                                        {/* Technologies with Creative Display */}
                                        {selectedProject.technologies && selectedProject.technologies.length > 0 && (
                                            <div className="mb-8">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <FaCode className="text-[#79231C]" />
                                                    <h4 className="font-oswald text-sm font-semibold text-[#E7CEB0] uppercase tracking-wider">
                                                        Tech Stack
                                                    </h4>
                                                    <div className="flex-1 h-[1px] bg-[#79231C]/30"></div>
                                                </div>
                                                <div className="flex flex-wrap gap-3">
                                                    {selectedProject.technologies.map((tech, index) => (
                                                        <span
                                                            key={index}
                                                            className="bg-[#180809] border border-[#79231C]/40 text-[#E7CEB0] text-sm font-oswald px-5 py-2 rounded-full shadow-lg hover:border-[#79231C] transition-all duration-300 hover:scale-105 hover:shadow-[#79231C]/20"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Creative Links */}
                                        <div className="flex flex-wrap gap-4 pt-6 border-t border-[#79231C]/20">
                                            {selectedProject.link && (
                                                <a
                                                    href={selectedProject.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-3 bg-[#79231C] text-[#E7CEB0] font-oswald px-8 py-3.5 rounded-full hover:bg-[#79231C]/80 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#79231C]/30 group"
                                                >
                                                    <FaExternalLinkAlt className="text-sm group-hover:rotate-12 transition-transform duration-300" />
                                                    Live Project
                                                    <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
                                                </a>
                                            )}
                                            {selectedProject.github && (
                                                <a
                                                    href={selectedProject.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-3 border-2 border-[#79231C]/50 text-[#E7CEB0] font-oswald px-8 py-3.5 rounded-full hover:bg-[#79231C]/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#79231C]/10 group"
                                                >
                                                    <FaGithub className="text-sm group-hover:rotate-12 transition-transform duration-300" />
                                                    Source Code
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Animation Keyframes */}
            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(40px) scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        backdrop-filter: blur(0px);
                    }
                    to {
                        opacity: 1;
                        backdrop-filter: blur(12px);
                    }
                }
                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(50px) scale(0.9) rotate(-2deg);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1) rotate(0deg);
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.4s ease-out;
                }
                .animate-slideUp {
                    animation: slideUp 0.5s cubic-bezier(0.15, 0.85, 0.3, 1.05);
                }
                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>
        </section>
    );
};

export default Projects;
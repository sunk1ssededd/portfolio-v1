'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink, Code2 } from 'lucide-react';
import { SiNextdotjs, SiReact, SiTailwindcss, SiTypescript, SiSupabase, SiFigma, SiHtml5, SiCss3, SiJavascript } from 'react-icons/si';

// --- DATA DUMMY ---
const projects = [
  {
    id: 1,
    title: "Palworld Web Redesign",
    category: "Front-End Web Development",
    description: "Website interaktif dengan fitur peta kustom, katalog item real-time, dan UI sinematik modern.",
    stack: [
        { icon: SiHtml5, name: "HTML5", color: "hover:text-[#E34F26]" },
        { icon: SiCss3, name: "CSS3", color: "hover:text-[#1572B6]" },
        { icon: SiJavascript, name: "JavaScript", color: "hover:text-[#F7DF1E]" }
    ],
    image: "/Palworld-project.png",
    link: "https://palworld-web-redesign.vercel.app/",
    github: "https://github.com/sunk1ssededd/palworld-web-redesign"
  },
  {
    id: 2,
    title: "Valorant Redesign",
    category: "Front-End Web Development",
    description: "Antarmuka obrolan cerdas berbasis LLM dengan dukungan voice-to-text dan memori percakapan.",
    stack: [
        { icon: SiHtml5, name: "HTML5", color: "hover:text-[#E34F26]" },
        { icon: SiCss3, name: "CSS3", color: "hover:text-[#1572B6]" },
        { icon: SiJavascript, name: "JavaScript", color: "hover:text-[#F7DF1E]" }
    ],
    image: "/project2.jpg",
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "Konecta - Web Pembelajaran",
    category: "Mobile Web",
    description: "Aplikasi pencatat keuangan pribadi dengan visualisasi data pengeluaran dan fitur budgeting.",
    stack: [
        { icon: SiHtml5, name: "HTML5", color: "hover:text-[#E34F26]" },
        { icon: SiCss3, name: "CSS3", color: "hover:text-[#1572B6]" },
        { icon: SiJavascript, name: "JavaScript", color: "hover:text-[#F7DF1E]" }
    ],
    image: "/project3.jpg",
    link: "#",
    github: "#"
  },
//   {
//     id: 4,
//     title: "Portfolio V1",
//     category: "Personal Branding",
//     description: "Versi pertama portofolio personal dengan animasi GSAP dan Three.js.",
//     stack: [
//         { icon: SiNextdotjs, name: "Next.js", color: "hover:text-white" },
//         { icon: SiReact, name: "React", color: "hover:text-[#61DAFB]" }
//     ],
//     image: "/project4.jpg",
//     link: "#",
//     github: "#"
//   }
];

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(0);

  return (
    // Mengurangi padding vertical di mobile (py-20) vs desktop (py-32)
    <section id="projects" className="relative w-full bg-black text-white py-20 md:py-32 px-4 sm:px-6 overflow-hidden">

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:40px_40px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* --- HEADER --- */}
        <div className="mb-12 md:mb-20 border-b border-white/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
           <div>
              <span className="text-xs font-mono text-neutral-500 mb-2 block tracking-widest">02 / PORTFOLIO</span>
              {/* Responsive Font Size */}
              <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-white">
                Selected <span className="text-neutral-600">Works.</span>
              </h2>
           </div>
           <p className="text-neutral-400 max-w-sm text-sm md:text-base leading-relaxed">
              Sebuah kurasi proyek yang menggabungkan estetika desain dengan performa teknis yang tinggi.
           </p>
        </div>


        {/* --- MAIN CONTENT --- */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

           {/* KIRI: LIST PROYEK */}
           <div className="w-full lg:w-1/2 flex flex-col gap-4">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  // Mobile: Click to activate, Desktop: Hover to activate
                  onClick={() => setActiveProject(index)}
                  onMouseEnter={() => setActiveProject(index)}
                  className={`group relative p-4 md:p-6 border-b border-white/10 transition-all duration-300 cursor-pointer ${
                    activeProject === index ? 'opacity-100 bg-white/5 lg:bg-transparent' : 'opacity-60 lg:opacity-40 hover:opacity-100'
                  }`}
                >
                    {/* Active Indicator (Desktop Only) */}
                    <div className={`hidden lg:block absolute left-0 top-0 bottom-0 w-1 bg-white transition-all duration-300 ${
                       activeProject === index ? 'h-full' : 'h-0 group-hover:h-full'
                    }`}></div>

                    <div className="flex justify-between items-start mb-2 lg:pl-4">
                       <div>
                          <span className="text-xs font-mono text-neutral-500 mb-1 block">{project.category}</span>
                          <h3 className="text-2xl md:text-3xl font-bold transition-transform duration-300 lg:group-hover:translate-x-2">
                            {project.title}
                          </h3>
                       </div>
                       <ArrowUpRight className={`transition-transform duration-300 ${activeProject === index ? 'rotate-45 text-white' : 'text-neutral-600'}`} />
                    </div>

                    {/* --- MOBILE ONLY: IMAGE PREVIEW ---
                        Gambar ini hanya muncul di layar kecil (lg:hidden) ketika item aktif
                    */}
                    <div className={`lg:hidden overflow-hidden transition-all duration-500 ${
                        activeProject === index ? 'max-h-64 mt-4 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                         <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover rounded-lg border border-white/10"
                            onError={(e) => { e.currentTarget.style.display = 'none'; }}
                         />
                    </div>

                    {/* Deskripsi & Tombol */}
                    <div className={`lg:pl-4 transition-all duration-500 overflow-hidden ${
                        activeProject === index ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0 lg:max-h-0 lg:opacity-0'
                    }`}>
                        <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                            {project.description}
                        </p>

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">

                            {/* Icons Stack */}
                            <div className="flex gap-4">
                                {project.stack.map((tech, i) => (
                                    <div
                                        key={i}
                                        className={`group/icon relative flex items-center justify-center transition-colors duration-300 text-neutral-500 ${tech.color}`}
                                    >
                                        <tech.icon size={24} />
                                        {/* Tooltip (Desktop Only) */}
                                        <span className="hidden lg:block absolute -top-8 left-1/2 -translate-x-1/2 scale-0 opacity-0 group-hover/icon:scale-100 group-hover/icon:opacity-100 transition-all duration-200 bg-neutral-800 text-white text-[10px] font-bold py-1 px-2 rounded whitespace-nowrap shadow-lg">
                                            {tech.name}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Buttons */}
                            <div className="flex gap-3">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs flex items-center gap-1 border border-white/20 px-3 py-2 rounded-full hover:bg-white hover:text-black transition-colors"
                                >
                                    <Github size={14} /> Code
                                </a>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs flex items-center gap-1 bg-white text-black px-3 py-2 rounded-full hover:bg-neutral-200 transition-colors"
                                >
                                    Live <ExternalLink size={14} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
              ))}
           </div>


           {/* KANAN: PREVIEW GAMBAR (Sticky) - Hidden on Mobile */}
           <div className="hidden lg:block lg:w-1/2 relative">
               <div className="sticky top-32 w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl">

                  {/* Browser Bar Decoration */}
                  <div className="absolute top-0 left-0 right-0 h-8 bg-black/60 backdrop-blur-md border-b border-white/10 flex items-center px-4 gap-2 z-20">
                      <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>

                  <AnimatePresence mode="wait">
                      <motion.div
                        key={activeProject}
                        initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="absolute inset-0 w-full h-full"
                      >
                         <div className="w-full h-full bg-neutral-800 flex flex-col items-center justify-center relative overflow-hidden group">
                             <img
                                src={projects[activeProject].image}
                                alt={projects[activeProject].title}
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                onError={(e) => { e.currentTarget.style.display = 'none'; }}
                             />
                             <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none -z-10">
                                <Code2 size={64} className="text-white/10 mb-4" />
                             </div>
                         </div>
                      </motion.div>
                  </AnimatePresence>

                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none z-10"></div>
               </div>
           </div>

        </div>

        {/* View All Button */}
        <div className="mt-16 md:mt-20 flex justify-center">
            <a href="https://github.com/sunk1ssededd" target="_blank" className="group flex items-center gap-3 text-neutral-400 hover:text-white transition-colors">
                <span className="font-mono text-xs md:text-sm tracking-widest border-b border-transparent group-hover:border-white pb-1">LIHAT SEMUA REPO</span>
                <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
        </div>

      </div>
    </section>
  );
}

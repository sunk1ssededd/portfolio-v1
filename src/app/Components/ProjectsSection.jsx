'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink, Code2 } from 'lucide-react';
import { SiNextdotjs, SiReact, SiTailwindcss, SiTypescript, SiSupabase, SiFigma } from 'react-icons/si';

// --- DATA DUMMY PROYEK ---
const projects = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    category: "Web Application",
    description: "Platform manajemen toko dengan analitik realtime, manajemen stok, dan laporan keuangan otomatis.",
    stack: [<SiNextdotjs key="1"/>, <SiSupabase key="2"/>, <SiTailwindcss key="3"/>],
    image: "/project1.jpg", // Pastikan ada file gambar ini atau ganti url
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "AI Chat Interface",
    category: "Artificial Intelligence",
    description: "Antarmuka obrolan cerdas berbasis LLM dengan dukungan voice-to-text dan memori percakapan.",
    stack: [<SiReact key="1"/>, <SiTypescript key="2"/>, <SiTailwindcss key="3"/>],
    image: "/project2.jpg",
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "Finance Tracker App",
    category: "Mobile Web",
    description: "Aplikasi pencatat keuangan pribadi dengan visualisasi data pengeluaran dan fitur budgeting.",
    stack: [<SiReact key="1"/>, <SiFigma key="2"/>, <SiSupabase key="3"/>],
    image: "/project3.jpg",
    link: "#",
    github: "#"
  },
  {
    id: 4,
    title: "Portfolio V1",
    category: "Personal Branding",
    description: "Versi pertama portofolio personal dengan animasi GSAP dan Three.js.",
    stack: [<SiNextdotjs key="1"/>, <SiReact key="2"/>],
    image: "/project4.jpg",
    link: "#",
    github: "#"
  }
];

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section id="projects" className="relative w-full bg-black text-white py-32 px-4 sm:px-6 overflow-hidden">

      {/* Background Decor (Grid Halus) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:40px_40px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* --- HEADER --- */}
        <div className="mb-20 border-b border-white/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
           <div>
              <span className="text-xs font-mono text-neutral-500 mb-2 block tracking-widest">02 / PORTFOLIO</span>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
                Selected <span className="text-neutral-600">Works.</span>
              </h2>
           </div>
           <p className="text-neutral-400 max-w-sm text-sm md:text-base leading-relaxed">
              Sebuah kurasi proyek yang menggabungkan estetika desain dengan performa teknis yang tinggi.
           </p>
        </div>


        {/* --- MAIN CONTENT (Desktop: Split Layout, Mobile: Stack) --- */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

           {/* KIRI: LIST PROYEK (Interactive) */}
           <div className="lg:w-1/2 flex flex-col gap-4">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  onMouseEnter={() => setActiveProject(index)}
                  className={`group relative p-6 border-b border-white/10 transition-all duration-300 cursor-pointer ${
                    activeProject === index ? 'opacity-100' : 'opacity-40 hover:opacity-100'
                  }`}
                >
                    {/* Active Indicator (Garis di kiri) */}
                    <div className={`absolute left-0 top-0 bottom-0 w-1 bg-white transition-all duration-300 ${
                       activeProject === index ? 'h-full' : 'h-0 group-hover:h-full'
                    }`}></div>

                    <div className="flex justify-between items-start mb-2 pl-4">
                       <div>
                          <span className="text-xs font-mono text-neutral-500 mb-1 block">{project.category}</span>
                          <h3 className="text-3xl font-bold transition-transform duration-300 group-hover:translate-x-2">
                            {project.title}
                          </h3>
                       </div>
                       <ArrowUpRight className={`transition-transform duration-300 ${activeProject === index ? 'rotate-45 text-white' : 'text-neutral-600'}`} />
                    </div>

                    {/* Deskripsi (Hanya muncul jika aktif di Desktop, selalu muncul di Mobile) */}
                    <div className={`pl-4 transition-all duration-500 overflow-hidden ${
                        activeProject === index ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0 lg:max-h-0 lg:opacity-0'
                    }`}>
                        <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                            {project.description}
                        </p>

                        <div className="flex items-center gap-4">
                            {/* Tech Stack Icons */}
                            <div className="flex gap-3 text-lg text-neutral-300">
                                {project.stack.map((icon, i) => (
                                    <span key={i} title="Tech">{icon}</span>
                                ))}
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-3 ml-auto">
                                <a href={project.github} className="text-xs flex items-center gap-1 border border-white/20 px-3 py-1.5 rounded-full hover:bg-white hover:text-black transition-colors">
                                    <Github size={12} /> Code
                                </a>
                                <a href={project.link} className="text-xs flex items-center gap-1 bg-white text-black px-3 py-1.5 rounded-full hover:bg-neutral-200 transition-colors">
                                    Live <ExternalLink size={12} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
              ))}
           </div>


           {/* KANAN: PREVIEW GAMBAR (Sticky) - Hidden on Mobile */}
           <div className="hidden lg:block lg:w-1/2 relative">
               <div className="sticky top-24 w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-neutral-900">

                  {/* Dekorasi Jendela Browser */}
                  <div className="absolute top-0 left-0 right-0 h-8 bg-black/50 backdrop-blur-md border-b border-white/10 flex items-center px-4 gap-2 z-20">
                      <div className="w-3 h-3 rounded-full bg-neutral-600"></div>
                      <div className="w-3 h-3 rounded-full bg-neutral-700"></div>
                      <div className="w-3 h-3 rounded-full bg-neutral-800"></div>
                  </div>

                  {/* Animate Presence untuk transisi gambar */}
                  <AnimatePresence mode="wait">
                      <motion.div
                        key={activeProject} // Kunci animasi saat index berubah
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0 w-full h-full"
                      >
                         {/* Gambar Proyek */}
                         <img
                            src={projects[activeProject].image}
                            alt={projects[activeProject].title}
                            className="w-full h-full object-cover opacity-80"
                            onError={(e) => {
                                // Fallback jika gambar rusak/tidak ada: Tampilkan Pola Gradient
                                e.currentTarget.style.display = 'none';
                                e.currentTarget.parentElement.style.background = `
                                    radial-gradient(circle at 50% 50%, #222, #000)
                                `;
                            }}
                         />

                         {/* Fallback Text jika gambar tidak load (Untuk demo ini) */}
                         <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-0">
                            <Code2 size={48} className="text-neutral-700 mb-4" />
                            <p className="text-neutral-600 font-mono text-sm uppercase tracking-widest">
                                {projects[activeProject].title} Preview
                            </p>
                         </div>
                      </motion.div>
                  </AnimatePresence>

                  {/* Noise Overlay */}
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none z-10"></div>
               </div>
           </div>

        </div>

        {/* View All Button */}
        <div className="mt-20 flex justify-center">
            <a href="https://github.com/satchuloo" target="_blank" className="group flex items-center gap-3 text-neutral-400 hover:text-white transition-colors">
                <span className="font-mono text-sm tracking-widest border-b border-transparent group-hover:border-white pb-1">LIHAT SEMUA REPO</span>
                <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
        </div>

      </div>
    </section>
  );
}

'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Check, Mail, Github, Linkedin, Terminal } from 'lucide-react';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs } from 'react-icons/si';

const HeroSection = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [counter, setCounter] = useState(0);

  // --- LOGIC PRELOADER / LOADING SCREEN ---
  useEffect(() => {
    // Animasi angka 0 ke 100
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev < 100) return prev + 1;
        clearInterval(interval);
        return 100;
      });
    }, 20); // Kecepatan counter

    // Hilangkan loading screen setelah 2.5 detik
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('contact@satriadewangga.com');
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="relative">

      {/* =========================================
          1. PRELOADER (LOADING SCREEN)
         ========================================= */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
            className="fixed inset-0 z-50 bg-black flex flex-col justify-end p-8 sm:p-20 text-white"
          >
            {/* Angka Loading di pojok kanan bawah */}
            <div className="flex justify-between items-end border-t border-neutral-800 pt-4">
              <span className="text-neutral-500 font-mono text-xs sm:text-sm">SYSTEM BOOTING...</span>
              <span className="text-6xl sm:text-9xl font-bold font-mono tracking-tighter">
                {counter}%
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* =========================================
          2. HERO SECTION CONTENT
         ========================================= */}
      <section className="relative w-full min-h-screen bg-black text-white flex items-center justify-center overflow-hidden px-4 sm:px-6 py-20 selection:bg-white selection:text-black">

        {/* Background Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:32px_32px] opacity-20 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>

        {/* Content Wrapper (Delay muncul setelah loading selesai) */}
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">

          {/* --- LEFT CONTENT --- */}
          <div className="flex-1 flex flex-col items-start text-left space-y-8 order-2 md:order-1">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={!isLoading ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }} // Delay agar muncul setelah layar terangkat
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs font-mono tracking-wider"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              AVAILABLE FOR PROJECTS
            </motion.div>

            {/* Headline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={!isLoading ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9]"
              >
                Building <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-neutral-200 to-neutral-600">
                  Digital Magic.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={!isLoading ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="text-neutral-400 text-lg md:text-xl max-w-xl leading-relaxed"
              >
                Hi, saya <strong className="text-white">Satria Dewangga</strong>. Full-stack Developer yang merancang kode bersih dengan estetika visual minimalis.
              </motion.p>
            </div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={!isLoading ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-wrap items-center gap-4 w-full"
            >
              <a href="#projects" className="group relative px-8 py-4 bg-white text-black rounded-full font-bold text-sm tracking-wide overflow-hidden hover:scale-105 transition-transform duration-300">
                <span className="relative z-10 flex items-center gap-2">
                  LIHAT PROJECT <ArrowUpRight size={18} />
                </span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="px-6 py-4 rounded-full border border-neutral-800 bg-black hover:bg-neutral-900 text-neutral-300 font-medium text-sm transition-all flex items-center gap-2 active:scale-95"
              >
                {isCopied ? <Check size={18} className="text-white" /> : <Mail size={18} />}
                {isCopied ? "EMAIL COPIED" : "COPY EMAIL"}
              </button>
            </motion.div>

            {/* Footer Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={!isLoading ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="pt-6 border-t border-neutral-900 w-full flex items-center gap-8 text-neutral-500"
            >
              <div className="flex items-center gap-4">
                  <a href="#" className="hover:text-white transition-colors"><Github size={20} /></a>
                  <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
              </div>
              <div className="h-4 w-[1px] bg-neutral-900"></div>
              <div className="text-sm font-mono flex items-center gap-2">
                  <Terminal size={14} className="text-white" />
                  <span>Based in Bali, ID</span>
              </div>
            </motion.div>
          </div>

          {/* --- RIGHT CONTENT (IMAGE) --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={!isLoading ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ duration: 1, delay: 0.8, type: "spring" }}
            className="flex-1 w-full relative h-[500px] flex items-center justify-center order-1 md:order-2 perspective-1000"
          >
              <div className="absolute w-[350px] h-[350px] border border-neutral-800 rounded-full animate-[spin_60s_linear_infinite]"></div>
              <div className="absolute w-[450px] h-[450px] border border-neutral-900 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>

              <div className="relative w-72 md:w-80 h-96 bg-[#0a0a0a] rounded-2xl border border-neutral-800 shadow-2xl overflow-hidden transform hover:rotate-0 transition-all duration-500 ease-out group z-20">
                  <div className="h-8 bg-neutral-900 border-b border-neutral-800 flex items-center px-3 gap-2">
                      <div className="w-3 h-3 rounded-full bg-neutral-600"></div>
                      <div className="w-3 h-3 rounded-full bg-neutral-700"></div>
                      <div className="w-3 h-3 rounded-full bg-neutral-800"></div>
                      <div className="ml-auto text-[10px] font-mono text-neutral-600">satria.tsx</div>
                  </div>

                  <div className="relative w-full h-full cursor-pointer">
                      <img
                          src="https://i.pinimg.com/736x/f1/40/5d/f1405db3db97882bac1c6f3b71e9d623.jpg"
                          alt="Satria Dewangga"
                          className="w-full h-full object-cover filter grayscale contrast-125 hover:grayscale-0 transition-all duration-500 ease-in-out"
                          onError={(e) => e.currentTarget.style.display = 'none'}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 pointer-events-none"></div>

                      <div className="absolute bottom-12 left-4 right-4">
                          <div className="bg-neutral-900/80 backdrop-blur-md border border-white/10 p-3 rounded-xl">
                              <div className="flex justify-between items-center mb-2">
                                  <span className="text-xs text-neutral-400 font-mono">Tech Stack</span>
                              </div>
                              <div className="flex gap-3 text-xl text-neutral-500">
                                  <SiNextdotjs className="hover:text-white transition-colors duration-300 cursor-help" />
                                  <SiReact className="hover:text-[#61DAFB] transition-colors duration-300 cursor-help" />
                                  <SiTypescript className="hover:text-[#3178C6] transition-colors duration-300 cursor-help" />
                                  <SiTailwindcss className="hover:text-[#38BDF8] transition-colors duration-300 cursor-help" />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              {/* Floating Icons */}
              <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute right-10 top-20 md:right-20 md:top-10 z-10 bg-black border border-neutral-800 p-4 rounded-xl shadow-2xl rotate-[10deg] hidden md:block group/icon"
              >
                  <SiReact className="text-4xl text-neutral-600 group-hover/icon:text-[#61DAFB] transition-colors duration-500" />
              </motion.div>

              <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute left-10 bottom-32 md:left-20 md:bottom-20 z-30 bg-black border border-neutral-800 p-4 rounded-xl shadow-2xl rotate-[-10deg] hidden md:block group/icon"
              >
                  <SiNodedotjs className="text-4xl text-neutral-600 group-hover/icon:text-[#339933] transition-colors duration-500" />
              </motion.div>

          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default HeroSection;

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Github, Linkedin, Twitter, ArrowUp } from 'lucide-react';

// --- 1. KOMPONEN FALLING TEXT ---
// Ini adalah logika untuk membuat teks jatuh satu per satu dengan efek fisika
const FallingText = ({ text = "SATRIA DEWANGGA", className = "" }) => {
  const letters = text.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 * i },
    }),
  };

  const child = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      y: -100, // Mulai dari atas (seolah jatuh)
      opacity: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className={`flex overflow-hidden ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }} // Animasi mulai saat elemen terlihat
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          whileHover={{ y: -20, color: "#fff" }} // Efek loncat saat di-hover
          className="inline-block cursor-default transition-colors duration-300 hover:text-white"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

// --- 2. MAIN FOOTER ---
export default function Footer() {

  // Fungsi Scroll to Top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black text-white pt-24 pb-10 px-4 sm:px-6 overflow-hidden border-t border-neutral-900">

      {/* Background Decor (Grid Halus di bawah) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:32px_32px] opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col">

        {/* --- TOP SECTION: CTA & LINKS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">

            {/* Kiri: Call To Action */}
            <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight">
                    Have an idea? <br />
                    <span className="text-neutral-500">Let's build it.</span>
                </h2>
                <p className="text-neutral-400 max-w-sm text-sm leading-relaxed">
                    Saya selalu terbuka untuk mendiskusikan proyek web application, desain sistem, atau sekadar bertukar pikiran tentang teknologi.
                </p>
                <div className="pt-4">
                    <a
                        href="mailto:contact@satriadewangga.com"
                        className="inline-flex items-center gap-2 text-white border-b border-white pb-1 hover:text-neutral-400 hover:border-neutral-400 transition-all text-lg"
                    >
                        <Mail size={20} /> contact@satriadewangga.com
                    </a>
                </div>
            </div>

            {/* Kanan: Navigation Links (Simple Grid) */}
            <div className="grid grid-cols-2 gap-8 md:pl-20">

                {/* Kolom 1 */}
                <div className="flex flex-col gap-4">
                    <span className="text-xs font-mono text-neutral-600 uppercase tracking-widest mb-2">Socials</span>
                    <a href="#" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2 group">
                        LinkedIn <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                    <a href="#" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2 group">
                        Github <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                    <a href="#" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2 group">
                        Instagram <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                </div>

                {/* Kolom 2 */}
                <div className="flex flex-col gap-4">
                    <span className="text-xs font-mono text-neutral-600 uppercase tracking-widest mb-2">Sitemap</span>
                    <a href="#home" className="text-neutral-400 hover:text-white transition-colors">Home</a>
                    <a href="#projects" className="text-neutral-400 hover:text-white transition-colors">Projects</a>
                    <a href="#about" className="text-neutral-400 hover:text-white transition-colors">About</a>
                </div>
            </div>
        </div>


        {/* --- BOTTOM SECTION: THE FALLING TEXT --- */}
        <div className="border-t border-neutral-900 pt-10 flex flex-col items-center justify-center relative">

            {/* Copyright Small */}
            <div className="flex w-full justify-between items-end mb-4 text-xs font-mono text-neutral-600 uppercase tracking-widest">
                <span>&copy; 2025 Satria Dewangga</span>

                {/* Back to Top Button */}
                <button
                    onClick={scrollToTop}
                    className="flex items-center gap-2 hover:text-white transition-colors group"
                >
                    BACK TO TOP
                    <div className="p-2 border border-neutral-800 rounded-full group-hover:bg-neutral-800 transition-colors">
                        <ArrowUp size={14} />
                    </div>
                </button>
            </div>

            {/* --- BIG ANIMATED SIGNATURE --- */}
            {/* Ini bagian yang kamu minta: Falling Text yang besar */}
            <div className="w-full flex justify-center overflow-hidden py-4">
                <FallingText
                    text="SATRIA DEWANGGA"
                    className="text-[12vw] md:text-[13vw] font-black leading-none tracking-tighter text-neutral-800 select-none"
                />
            </div>

        </div>

      </div>
    </footer>
  );
}

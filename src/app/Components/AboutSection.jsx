'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal';

export default function AboutSection() {

  const bioText = "Saya Satria Dewangga, seorang Front-end Developer yang menggabungkan logika teknis dengan estetika desain. Fokus utama saya adalah menciptakan pengalaman web yang tidak hanya cepat dan fungsional, tetapi juga memberikan kesan mendalam bagi penggunanya.";

  return (
    <section className="relative py-32 px-6 bg-black text-white overflow-hidden border-t border-white/10">

      <div className="max-w-7xl mx-auto">

        {/* --- HEADER KECIL (Label) --- */}
        <div className="flex items-center gap-4 mb-12 opacity-50">
            <span className="text-xs font-mono tracking-widest uppercase">01 / WHO AM I</span>
            <div className="h-px flex-1 bg-white/30"></div>
        </div>

        {/* --- GRID LAYOUT (Balance Kiri-Kanan) --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-start">

            {/* BAGIAN KIRI: JUDUL RAKSASA (Headline) */}
            <div className="md:col-span-5">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white"
                >
                    front-end <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-500 to-neutral-800">
                        developer.
                    </span>
                </motion.h2>
            </div>

            {/* BAGIAN KANAN: TEKS ANIMASI & TOMBOL */}
            <div className="md:col-span-7 flex flex-col justify-between h-full pt-2">

                {/* Scroll Reveal Text */}
                <div className="min-h-[120px] mb-10">
                    <ScrollReveal
                        text={bioText}
                        // Text-left agar rapi rata kiri, ukuran font pas
                        className="text-xl md:text-3xl font-medium leading-relaxed tracking-tight text-left text-white"
                    />
                </div>

                {/* Tombol Aksi */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <Link href="/about" className="inline-block">
                        <button className="group flex items-center gap-4 text-white hover:text-neutral-400 transition-colors">
                            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                                <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform" />
                            </div>
                            <span className="text-sm font-bold tracking-widest uppercase">
                                Baca Selengkapnya
                            </span>
                        </button>
                    </Link>
                </motion.div>

            </div>

        </div>

      </div>
    </section>
  );
}

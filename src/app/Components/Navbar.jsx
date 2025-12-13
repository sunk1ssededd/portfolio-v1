'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SiGithub, SiLinkedin, SiInstagram } from 'react-icons/si';
import { X, Menu } from 'lucide-react';
import Link from 'next/link'; // PENTING: Pakai Link dari Next.js
import { usePathname } from 'next/navigation'; // Untuk cek halaman aktif

// --- UPDATE LINK DI SINI ---
const navItems = [
    { name: 'BERANDA', href: '/' },
    { name: 'PROJECT', href: '/#projects' }, // Tetap scroll di home atau buat page terpisah nanti
    { name: 'TENTANG', href: '/about' },     // Mengarah ke file src/app/about/page.jsx
    { name: 'KONTAK', href: '/contact' },    // Mengarah ke file src/app/contact/page.jsx
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname(); // Cek URL saat ini

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Helper untuk cek link aktif
    const isActive = (href) => pathname === href;

    return (
        <>
            {/* NAVIGASI DESKTOP */}
            <AnimatePresence>
                {!isScrolled && !isOpen && (
                    <motion.header
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        className="fixed top-0 left-0 w-full z-50 py-8 px-6 mix-blend-difference text-white"
                    >
                        <div className="max-w-7xl mx-auto flex items-center justify-center">
                            <nav className="flex gap-6 md:gap-8">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={`relative group text-base md:text-lg font-normal uppercase transition-colors ${isActive(item.href) ? 'text-white' : 'text-neutral-400 hover:text-white'}`}
                                    >
                                        {item.name}
                                        {isActive(item.href) ? (
                                            <motion.div layoutId="underline" className="absolute left-0 -bottom-1 w-full h-[1px] bg-white" />
                                        ) : (
                                            <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
                                        )}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                    </motion.header>
                )}
            </AnimatePresence>

            {/* TOMBOL HAMBURGER */}
            <AnimatePresence>
                {(isScrolled || isOpen) && (
                    <motion.button
                        initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
                        onClick={() => setIsOpen(!isOpen)}
                        className={`fixed top-6 right-6 z-[60] w-14 h-14 rounded-full flex items-center justify-center shadow-lg backdrop-blur-md transition-colors duration-300 ${isOpen ? 'bg-white text-black' : 'bg-neutral-900/80 text-white border border-white/10'}`}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </motion.button>
                )}
            </AnimatePresence>

            {/* FULLSCREEN MENU */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ clipPath: "circle(0% at 100% 0%)" }}
                        animate={{ clipPath: "circle(150% at 100% 0%)" }}
                        exit={{ clipPath: "circle(0% at 100% 0%)" }}
                        transition={{ duration: 0.7, ease: [0.32, 0, 0.67, 0] }}
                        className="fixed inset-0 z-50 bg-black text-white flex flex-col justify-center items-center"
                    >
                        <nav className="flex flex-col gap-8 text-center">
                            {navItems.map((item, i) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block text-5xl md:text-7xl font-bold tracking-tighter hover:text-neutral-500 transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>

                        {/* Social Icons di Menu */}
                        <div className="absolute bottom-12 flex gap-8">
                            <SiGithub size={24} className="hover:text-indigo-500 cursor-pointer"/>
                            <SiLinkedin size={24} className="hover:text-indigo-500 cursor-pointer"/>
                            <SiInstagram size={24} className="hover:text-indigo-500 cursor-pointer"/>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SiGithub, SiLinkedin, SiInstagram } from 'react-icons/si';
import { Home, FolderGit2, User, Mail, Sun, Moon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';

const navItems = [
    { name: 'Home', href: '/', icon: <Home size={18} /> }, // Ukuran icon dikecilkan sedikit (18px) biar proporsional di HP
    { name: 'Projects', href: '/#projects', icon: <FolderGit2 size={18} /> },
    { name: 'About', href: '/about', icon: <User size={18} /> },
    { name: 'Contact', href: '/contact', icon: <Mail size={18} /> },
];

export default function Navbar() {
    const pathname = usePathname();
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <>
            {/* --- 1. SPOTLIGHT BACKGROUND EFFECT --- */}
            <div className="fixed inset-0 z-[-1] pointer-events-none flex justify-center items-center">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
            </div>

            {/* --- 2. FLOATING DOCK NAVIGATION --- */}
            {/*
                Perubahan Responsif:
                - bottom-4: Jarak dari bawah lebih sedikit di HP.
                - w-fit: Lebar menyesuaikan isi, bukan full width.
                - max-w-[90%]: Mencegah dock menabrak pinggir layar di HP sangat kecil.
            */}
            <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 w-fit max-w-[95%] sm:max-w-md">
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="flex items-center gap-1 sm:gap-2 px-2 py-2 sm:px-3 sm:py-3 rounded-full border border-white/20 shadow-2xl backdrop-blur-xl
                    bg-white/90 dark:bg-black/80 supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/60"
                >
                    {/* MENU ITEMS LOOP */}
                    {navItems.map((item) => {
                        const isActive = item.href === '/'
                            ? pathname === '/'
                            : pathname.startsWith(item.href);

                        return (
                            <Link key={item.name} href={item.href} className="relative z-10">
                                <div className="relative px-3 py-2 sm:px-4 sm:py-3 rounded-full cursor-pointer group">

                                    {/* ACTIVE PILL */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="active-pill"
                                            className="absolute inset-0 bg-neutral-900 dark:bg-white rounded-full"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}

                                    {/* ICON */}
                                    <motion.div
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.9 }}
                                        className={`relative z-10 flex items-center justify-center transition-colors duration-200
                                        ${isActive
                                            ? 'text-white dark:text-black'
                                            : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
                                        }`}
                                    >
                                        {/* Clone elemen icon untuk mengubah ukuran dinamis jika perlu, atau pakai default */}
                                        {React.cloneElement(item.icon, {
                                            size: 18, // Paksa ukuran icon konsisten di mobile
                                            className: "sm:w-[20px] sm:h-[20px]" // Di desktop (sm) jadi 20px
                                        })}
                                    </motion.div>

                                    {/* TOOLTIP (Desktop Only - Hidden on Mobile) */}
                                    <span className="hidden sm:block absolute -top-12 left-1/2 -translate-x-1/2 px-2 py-1 bg-neutral-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                        {item.name}
                                        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-neutral-900 rotate-45"></span>
                                    </span>
                                </div>
                            </Link>
                        );
                    })}

                    {/* SEPARATOR */}
                    <div className="w-[1px] h-5 sm:h-6 bg-neutral-300 dark:bg-neutral-700 mx-1"></div>

                    {/* THEME TOGGLE */}
                    <motion.button
                        whileHover={{ rotate: 180 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="p-2 sm:p-3 rounded-full text-neutral-500 hover:text-black dark:hover:text-white transition-colors"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'dark' ? <Sun size={18} className="sm:w-[20px] sm:h-[20px]" /> : <Moon size={18} className="sm:w-[20px] sm:h-[20px]" />}
                    </motion.button>
                </motion.div>
            </div>

            {/* --- 3. SOCIALS (Desktop Only) --- */}
            {/* Tetap hidden di mobile agar tidak menumpuk layar */}
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="fixed top-6 right-6 z-40 hidden md:flex flex-col gap-4"
            >
                <SocialLink href="https://github.com/sunk1ssededd" icon={<SiGithub />} />
                {/* <SocialLink href="https://linkedin.com" icon={<SiLinkedin />} /> */}
                <SocialLink href="https://instagram.com" icon={<SiInstagram />} />
            </motion.div>

            {/* --- 4. BRAND / LOGO --- */}
             <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                // Ubah di sini:
                // 1. Hapus 'mix-blend-difference' agar warnanya solid putih jelas
                // 2. Tambahkan 'bg-transparent' untuk memastikan tidak ada kotak background
                // 3. Pastikan 'z-50' agar dia di atas segalanya tapi backgroundnya bolong
                className="fixed top-5 left-5 md:top-6 md:left-6 z-50 font-bold text-lg md:text-xl tracking-tighter text-white bg-transparent pointer-events-none"
            >
                Satria Dewangga.
            </motion.div>
        </>
    );
}

// Komponen Kecil untuk Social Link
function SocialLink({ href, icon }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-neutral-500 hover:text-white hover:bg-white/20 transition-all hover:scale-110"
        >
            {icon}
        </a>
    )
}

'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function ProfileCard({
  name = "Satria Dewangga",
  title = "Full-Stack Developer",
  handle = "@satriadev",
  status = "Available",
  contactText = "Lihat Proyek",
  avatarUrl,
  showUserInfo = true,
  enableTilt = true,
  enableMobileTilt = false,
  onContactClick,
}) {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 30 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    if (!enableTilt) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXFromCenter = e.clientX - rect.left - width / 2;
    const mouseYFromCenter = e.clientY - rect.top - height / 2;
    x.set(mouseXFromCenter / width);
    y.set(mouseYFromCenter / height);
  };

  const handleMouseLeave = () => {
    if (!enableTilt) return;
    x.set(0);
    y.set(0);
  };

  return (
    <div className="flex items-center justify-center perspective-1000" style={{ perspective: 1000 }}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: enableTilt ? rotateX : 0,
          rotateY: enableTilt ? rotateY : 0,
          transformStyle: "preserve-3d",
        }}
        className="group relative w-[320px] h-[480px] rounded-[35px] bg-[#0f111a] border border-white/10 shadow-2xl transition-all duration-200 overflow-hidden"
      >
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay pointer-events-none">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <filter id="noiseFilter">
                    <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch"/>
                </filter>
                <rect width="100%" height="100%" filter="url(#noiseFilter)" opacity="0.5"/>
            </svg>
        </div>

        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0%,transparent_60%)] z-0 pointer-events-none"></div>

        <div className="absolute inset-0 z-10 pointer-events-none" style={{ transform: "translateZ(40px)" }}>

            <div className="absolute top-20 left-6 opacity-30 group-hover:opacity-60 transition-opacity">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M0 0H4V4H0V0ZM8 8H12V12H8V8ZM16 16H20V20H16V16Z" fill="#6366f1"/>
                </svg>
            </div>

            <div className="absolute top-24 right-8 opacity-40 group-hover:opacity-80 transition-opacity">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2">
                    <path d="M8 3L3 12L8 21M16 3L21 12L16 21" />
                </svg>
            </div>

            <div className="absolute bottom-32 left-4 opacity-20 group-hover:opacity-50 transition-opacity">
                <div className="flex gap-1">
                    <div className="w-1 h-1 bg-indigo-400"></div>
                    <div className="w-1 h-1 bg-indigo-400 translate-y-2"></div>
                    <div className="w-1 h-1 bg-indigo-400"></div>
                </div>
            </div>

             {/* Kanan Bawah - Glitch Block */}
             <div className="absolute bottom-20 right-6 opacity-30 group-hover:opacity-70 transition-opacity">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                     <rect x="10" y="10" width="4" height="4" fill="#a5b4fc"/>
                     <rect x="20" y="20" width="8" height="2" fill="#a5b4fc"/>
                     <rect x="15" y="30" width="4" height="4" fill="#a5b4fc"/>
                </svg>
            </div>
        </div>

        <div className="relative z-30 flex flex-col h-full pointer-events-none" style={{ transform: "translateZ(50px)" }}>
            {showUserInfo && (
                <div className="pt-12 px-6 text-center space-y-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/50 border border-white/10 backdrop-blur-md mb-2 shadow-inner">
                        <span className={`w-2 h-2 rounded-full ${status === 'Available' ? 'bg-green-400 shadow-[0_0_10px_#4ade80]' : 'bg-gray-500'}`}></span>
                        <span className="text-[10px] uppercase tracking-wider text-gray-300 font-bold">{status}</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                        {name}
                    </h2>
                    <p className="text-sm font-semibold text-indigo-300 uppercase tracking-[0.2em] drop-shadow-md">
                        {title}
                    </p>
                </div>
            )}

            <div className="mt-8 flex justify-center pointer-events-auto">
                <button
                    onClick={onContactClick}
                    className="px-6 py-2.5 text-xs font-bold text-white bg-indigo-600/20 hover:bg-indigo-600/40 border border-indigo-500/50 rounded-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]"
                >
                    {contactText}
                </button>
            </div>
        </div>


        {avatarUrl && (
            <div
                className="absolute bottom-0 left-0 w-full h-[65%] z-20 overflow-hidden pointer-events-none rounded-b-[35px]"
                style={{ transform: "translateZ(30px)" }}
            >
                <img
                    src={avatarUrl}
                    alt={name}
                    className="w-full h-full object-cover object-bottom transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0f111a] via-[#0f111a]/80 to-transparent"></div>

                <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
            </div>
        )}

      </motion.div>
    </div>
  );
}

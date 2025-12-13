'use client';
import React, { useRef } from 'react';

export default function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(255, 255, 255, 0.25)"
}) {
  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Mengupdate CSS variable secara real-time saat mouse bergerak
    divRef.current.style.setProperty('--mouse-x', `${x}px`);
    divRef.current.style.setProperty('--mouse-y', `${y}px`);
    divRef.current.style.setProperty('--spotlight-color', spotlightColor);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 group ${className}`}
    >
      {/*
         LAYER 1: SPOTLIGHT EFFECT
         Menggunakan radial-gradient yang posisinya diambil dari variable --mouse-x dan --mouse-y
      */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 40%)`,
        }}
      />

      {/* LAYER 2: CONTENT */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

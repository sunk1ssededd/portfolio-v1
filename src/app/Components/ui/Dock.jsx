// src/components/ui/Dock.jsx
'use client';

import React from 'react'; // Pastikan import React
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

const DISTANCE = 140;

export default function Dock({ children, className }) {
  const mouseX = useMotionValue(Infinity);

  // PENTING: React.Children.toArray() memecah array navItems menjadi elemen terpisah
  const childrenArray = React.Children.toArray(children);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={`mx-auto flex h-16 items-end gap-4 rounded-2xl bg-gray-950/80 border border-white/10 px-4 pb-3 backdrop-blur-xl shadow-2xl ${className}`}
    >
      {/* Loop menggunakan array yang sudah di-flatten/dipecah */}
      {childrenArray.map((child, i) => (
        <DockIcon key={i} mouseX={mouseX}>
          {child}
        </DockIcon>
      ))}
    </motion.div>
  );
}

function DockIcon({ mouseX, children }) {
  const ref = useRef(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-DISTANCE, 0, DISTANCE], [45, 80, 45]);

  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="aspect-square w-12 cursor-pointer rounded-full flex items-center justify-center bg-gray-900/50 border border-white/5 hover:bg-indigo-600 hover:border-indigo-400 transition-colors duration-200 group relative"
    >
      <div className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-200 flex items-center justify-center">
         {children}
      </div>
    </motion.div>
  );
}

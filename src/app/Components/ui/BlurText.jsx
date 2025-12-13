// src/components/ui/BlurText.jsx
'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function BlurText({
  text = '',
  className = '',
  animateBy = 'words', // 'words' atau 'letters'
  direction = 'top',   // 'top' atau 'bottom'
  delay = 0.05,        // Kecepatan muncul
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Memecah teks jadi array
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');

  // Konfigurasi Animasi Induk
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: delay },
    },
  };

  // Konfigurasi Animasi Anak (Huruf/Kata)
  const child = {
    hidden: {
      filter: 'blur(10px)',
      opacity: 0,
      y: direction === 'top' ? -20 : 20,
    },
    visible: {
      filter: 'blur(0px)',
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9]
      },
    },
  };

  return (
    <motion.p
      ref={ref}
      className={`flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {elements.map((el, i) => (
        <motion.span key={i} variants={child} className="inline-block">
          {el}
          {animateBy === 'words' && i !== elements.length - 1 && '\u00A0'}
        </motion.span>
      ))}
    </motion.p>
  );
}

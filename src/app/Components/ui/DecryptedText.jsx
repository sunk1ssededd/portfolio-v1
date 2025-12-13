'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

/**
 * DecryptedText Component
 * Efek teks teracak ala hacker yang perlahan terungkap.
 */
export default function DecryptedText({
  text,
  speed = 50,          // Kecepatan ganti huruf (ms)
  maxIterations = 10,  // Berapa kali ngacak sebelum huruf asli muncul
  className = '',
  animateOn = 'hover', // Pilihan: 'hover' | 'view' | 'always'
}) {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef(null);
  const isMounted = useRef(false);

  // Kumpulan karakter untuk efek acak (Angka, Huruf Besar, Simbol)
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+";

  const startScramble = () => {
    let iteration = 0;

    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText((prev) =>
        text
          .split("")
          .map((letter, index) => {
            // Jangan acak spasi, biarkan tetap spasi
            if (letter === " ") return " ";

            // Jika iterasi sudah melewati index huruf ini, tampilkan huruf asli
            if (index < iteration) {
              return text[index];
            }

            // Jika belum, tampilkan karakter acak
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );

      // Hentikan animasi jika semua huruf sudah terbuka
      if (iteration >= text.length) {
        clearInterval(intervalRef.current);
      }

      // Kecepatan terbukanya huruf (makin kecil angka pembagi, makin cepat)
      iteration += 1 / 3;
    }, speed);
  };

  useEffect(() => {
    isMounted.current = true;

    // Jika mode 'view' atau 'always', jalankan animasi saat komponen muncul pertama kali
    if (animateOn === 'view' || animateOn === 'always') {
      startScramble();
    }

    return () => {
      isMounted.current = false;
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <motion.span
      className={`inline-block whitespace-nowrap font-mono cursor-default ${className}`}
      onMouseEnter={() => {
        if (animateOn === 'hover') startScramble();
      }}
    >
      {displayText}
    </motion.span>
  );
}

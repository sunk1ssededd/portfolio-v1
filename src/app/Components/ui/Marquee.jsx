'use client';
import { motion } from "framer-motion";

export default function Marquee({ children, speed = 20, className = "" }) {
  return (
    <div className={`flex overflow-hidden whitespace-nowrap select-none ${className}`}>

      {/* Container 1 (Utama) */}
      <motion.div
        className="flex min-w-full shrink-0 items-center gap-10 pr-10" // pr-10 untuk jarak antar sesi loop
        initial={{ x: "0%" }}
        animate={{ x: "-100%" }}
        transition={{
            repeat: Infinity,
            ease: "linear",
            duration: speed
        }}
      >
        {children}
      </motion.div>

      {/* Container 2 (Penyambung - Langsung nempel di belakang) */}
      <motion.div
        className="flex min-w-full shrink-0 items-center gap-10 pr-10"
        initial={{ x: "0%" }}
        animate={{ x: "-100%" }}
        transition={{
            repeat: Infinity,
            ease: "linear",
            duration: speed
        }}
      >
        {children}
      </motion.div>

    </div>
  );
}

'use client';
import { motion } from 'framer-motion';

export default function InfiniteText({ text = "SATRIA DEWANGGA" }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none z-0">
      <div className="relative w-full max-w-full flex items-center transform scale-110 md:scale-150">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40
          }}
              >

          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-[15vw] md:text-[20vw] font-black text-white/[0.03] tracking-tighter leading-none px-4 uppercase">
              {text}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

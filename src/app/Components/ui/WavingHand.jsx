'use client';
import { motion } from 'framer-motion';

export default function WavingHand() {
  return (
    <div className="flex items-center gap-4 mb-8">
        <motion.div
            style={{ originX: 0.7, originY: 0.7 }}
            animate={{ rotate: [0, 20, -10, 20, 0] }}
            transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 2, // Jeda sebentar sebelum melambai lagi
                ease: "easeInOut"
            }}
            className="text-4xl md:text-5xl"
        >
            👋
        </motion.div>
        <span className="text-xl md:text-2xl font-mono text-neutral-300">
            Hey! It's me <span className="text-white font-bold">Satria</span>,
        </span>
    </div>
  );
}

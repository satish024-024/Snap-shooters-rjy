"use client";

import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import { motion, AnimatePresence } from "framer-motion";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Setup Preloader timer (1.2 seconds for luxury reveal)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-black"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center flex flex-col items-center justify-center p-6"
            >
              {/* Subtle pulsing gold outer ring around brand initial */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="w-16 h-16 rounded-full border border-champagne/20 flex items-center justify-center mb-8 relative"
              >
                <motion.span
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                  className="font-serif text-xl text-champagne font-bold mt-[1px] select-none"
                >
                  S
                </motion.span>
                {/* Glow ring */}
                <motion.div
                  animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.3, 0.1] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-full border border-champagne/40 pointer-events-none"
                />
              </motion.div>

              {/* Brand Name with letter-spacing animation */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <h1 className="font-serif text-2xl md:text-3xl tracking-[0.3em] uppercase text-white font-light leading-none select-none">
                  SNAP SHOOTER
                </h1>
                <h1 className="font-serif text-[11px] md:text-xs tracking-[0.55em] text-champagne uppercase mt-2.5 font-light leading-none select-none">
                  STUDIOS
                </h1>
              </motion.div>
              
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
                className="w-16 h-[0.5px] bg-champagne/30 my-6"
              />
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="font-sans text-[9px] tracking-[0.25em] text-white uppercase leading-relaxed max-w-[280px] select-none"
              >
                India’s Premium Wedding Experience Company
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="w-full flex-grow flex flex-col"
      >
        {children}
      </motion.div>
    </>
  );
}

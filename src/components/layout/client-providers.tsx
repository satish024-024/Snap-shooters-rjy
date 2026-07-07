"use client";

import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import { motion, AnimatePresence } from "framer-motion";

interface ShutterBlade {
  id: number;
  angle: number;
}

const BLADES: ShutterBlade[] = [
  { id: 1, angle: 0 },
  { id: 2, angle: 60 },
  { id: 3, angle: 120 },
  { id: 4, angle: 180 },
  { id: 5, angle: 240 },
  { id: 6, angle: 300 },
];

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

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

    // iris shutter opens after 900ms, preloader exits after 1900ms
    const openTimer = setTimeout(() => {
      setIsOpen(true);
    }, 950);

    const closeTimer = setTimeout(() => {
      setLoading(false);
    }, 1900);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(closeTimer);
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
            {/* Shutter & Logo Center Area */}
            <div className="relative flex flex-col items-center justify-center min-h-[300px]">
              
              {/* Camera Iris Shutter Container */}
              <div className="relative w-28 h-28 flex items-center justify-center mb-8">
                
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full overflow-hidden relative select-none pointer-events-none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Outer lens ring boundary */}
                  <circle
                    cx="50"
                    cy="50"
                    r="46"
                    className="stroke-champagne/30 fill-none"
                    strokeWidth="1.5"
                  />
                  
                  {/* 6 Overlapping Iris Shutter Blades */}
                  <g className="origin-center" style={{ transform: "rotate(30deg)" }}>
                    {BLADES.map((b) => (
                      <g
                        key={b.id}
                        style={{
                          transform: `rotate(${b.angle}deg)`,
                          transformOrigin: "50px 50px",
                        }}
                      >
                        <motion.path
                          d="M 50 50 L 50 4 L 92 28 L 70 60 Z" // Mechanical wedge path meeting at center (50,50)
                          fill="#C9A86A"
                          stroke="#000000"
                          strokeWidth="0.5"
                          animate={{
                            // Rotational opening transition slides wedges outward and slightly pivots them
                            x: isOpen ? 32 : 0,
                            y: isOpen ? 0 : 0,
                            rotate: isOpen ? -35 : 0,
                          }}
                          transition={{
                            duration: 0.7,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          style={{
                            transformOrigin: "50px 50px",
                          }}
                        />
                      </g>
                    ))}
                  </g>

                  {/* Inner logo monogram revealed when shutter opens */}
                  {isOpen && (
                    <motion.text
                      x="50"
                      y="56"
                      textAnchor="middle"
                      className="font-serif text-xl font-bold fill-champagne"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.15 }}
                    >
                      S
                    </motion.text>
                  )}
                </svg>

                {/* High Contrast Watermark shown only when Shutter is closed */}
                <AnimatePresence>
                  {!isOpen && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute z-30 font-serif text-[10px] tracking-[0.25em] text-black font-bold uppercase pointer-events-none select-none text-center"
                    >
                      smile please! 📸
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Brand Name revealed under the Shutter */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 15 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-center"
              >
                <h1 className="font-serif text-2xl md:text-3xl tracking-[0.3em] uppercase text-white font-light leading-none select-none">
                  SNAP SHOOTER
                </h1>
                <h1 className="font-serif text-[11px] md:text-xs tracking-[0.55em] text-champagne uppercase mt-2.5 font-light leading-none select-none">
                  STUDIOS
                </h1>
                
                <div className="w-16 h-[0.5px] bg-champagne/30 mx-auto my-6" />
                
                <p className="font-sans text-[9px] tracking-[0.25em] text-white/50 uppercase leading-relaxed max-w-[280px] select-none mx-auto">
                  India’s Premium Wedding Experience Company
                </p>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="w-full flex-grow flex flex-col"
      >
        {children}
      </motion.div>
    </>
  );
}

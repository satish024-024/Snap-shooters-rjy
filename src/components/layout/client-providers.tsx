"use client";

import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    lenisInstance?: Lenis;
  }
}

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
  const [isOpen, setIsOpen] = useState(true); // Starts OPEN
  const [flash, setFlash] = useState(false); // Shutter flash effect

  const pathname = usePathname();

  // Initialize Lenis Smooth Scroll + Shutter Preloader Timers
  useEffect(() => {
    // Shutter starts OPEN, snaps CLOSED at 450ms
    const snapCloseTimer = setTimeout(() => {
      setIsOpen(false);
    }, 450);

    // Camera flash at 550ms
    const flashOnTimer = setTimeout(() => {
      setFlash(true);
    }, 550);
    const flashOffTimer = setTimeout(() => {
      setFlash(false);
    }, 700);

    // Shutter opens back up at 1300ms
    const snapOpenTimer = setTimeout(() => {
      setIsOpen(true);
    }, 1300);

    // Preloader screen exits at 2400ms
    const exitTimer = setTimeout(() => {
      setLoading(false);
    }, 2400);

    // Only initialize Lenis if we are NOT on the homepage
    let lenis: Lenis | undefined;
    let rafId: number | undefined;

    if (pathname !== "/") {
      lenis = new Lenis({
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
      });

      window.lenisInstance = lenis;

      const raf = (time: number) => {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    } else {
      window.lenisInstance = undefined;
    }

    return () => {
      clearTimeout(snapCloseTimer);
      clearTimeout(flashOnTimer);
      clearTimeout(flashOffTimer);
      clearTimeout(snapOpenTimer);
      clearTimeout(exitTimer);
      if (rafId) cancelAnimationFrame(rafId);
      if (lenis) {
        lenis.destroy();
      }
      window.lenisInstance = undefined;
    };
  }, [pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#070707] overflow-hidden"
          >
            {/* Camera Flash Screen Overlay */}
            <AnimatePresence>
              {flash && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.95 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.12 }}
                  className="absolute inset-0 bg-white z-[10005] pointer-events-none"
                />
              )}
            </AnimatePresence>

            {/* Background elements behind the shutter (revealed in the center circle when open) */}
            <div className="absolute z-0 flex flex-col items-center justify-center text-center p-6 select-none pointer-events-none">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ opacity: isOpen ? 1 : 0, scale: isOpen ? 1 : 0.8 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="w-16 h-16 rounded-full border border-champagne/20 flex items-center justify-center mb-6 relative"
              >
                <span className="font-serif text-xl text-champagne font-bold mt-[1px]">S</span>
                <div className="absolute inset-0 rounded-full border border-champagne/40 animate-pulse" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 15 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <h1 className="font-serif text-2xl tracking-[0.3em] uppercase text-white font-light leading-none">
                  SNAP SHOOTER
                </h1>
                <h1 className="font-serif text-[10px] tracking-[0.55em] text-champagne uppercase mt-2.5 font-light leading-none">
                  STUDIOS
                </h1>
                
                <div className="w-12 h-[0.5px] bg-champagne/30 mx-auto my-5" />
                
                <p className="font-sans text-[8px] tracking-[0.25em] text-white/40 uppercase max-w-[240px] mx-auto">
                  17 Years of Creative Artistry
                </p>
              </motion.div>
            </div>

            {/* Camera Lens Body & Shutter Container (Kept at a perfect 1:1 aspect-ratio circle) */}
            <div className="relative w-[290px] h-[290px] xs:w-[320px] xs:h-[320px] sm:w-[400px] sm:h-[400px] md:w-[480px] md:h-[480px] aspect-square flex items-center justify-center z-10 select-none pointer-events-none">
              
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full overflow-visible select-none pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Premium brushed carbon/metallic shutter blade gradient */}
                  <linearGradient id="shutter-gradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#222222" />
                    <stop offset="40%" stopColor="#141414" />
                    <stop offset="80%" stopColor="#0B0B0B" />
                    <stop offset="100%" stopColor="#040404" />
                  </linearGradient>

                  {/* Circular path for lens text markings (radius 36) */}
                  <path
                    id="lens-text-path"
                    d="M 50 14 A 36 36 0 1 1 49.9 14"
                    fill="none"
                  />

                  {/* Clip Path to keep shutter blades strictly inside the aperture circle */}
                  <clipPath id="aperture-clip">
                    <circle cx="50" cy="50" r="34" />
                  </clipPath>
                </defs>

                {/* --- SHUTTER BLADES GROUP (CLIPPED TO APERTURE) --- */}
                <g clipPath="url(#aperture-clip)">
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
                          d="M 50 50 Q 56 16, 50 16 L 95 16 L 85 55 Z" // Curved wedge blade meeting exactly at center (50,50) and boundary (50,16)
                          fill="url(#shutter-gradient)"
                          stroke="#C9A86A"
                          strokeWidth="0.35"
                          strokeOpacity="0.8"
                          animate={{
                            // Slides outward and pivots behind the lens barrel body overlay
                            x: isOpen ? 36 : 0,
                            y: isOpen ? 0 : 0,
                            rotate: isOpen ? -30 : 0,
                          }}
                          transition={{
                            duration: 0.65, // Faster, snappier opening and closing action
                            ease: [0.25, 1, 0.5, 1],
                          }}
                          style={{
                            transformOrigin: "50px 50px",
                          }}
                        />
                      </g>
                    ))}
                  </g>
                </g>

                {/* --- LENS BARREL OUTER MARKINGS (PERFECTLY ALIGNED CIRCLES) --- */}
                {/* Red lens mount alignment mark */}
                <circle cx="50" cy="5.5" r="0.75" className="fill-red-500" />

                {/* Outer metallic barrel ring */}
                <circle
                  cx="50"
                  cy="50"
                  r="45.5"
                  className="stroke-champagne/15 fill-none"
                  strokeWidth="0.5"
                />

                {/* Lens barrel ticks marks */}
                {Array.from({ length: 24 }).map((_, i) => {
                  const angle = i * 15;
                  const x1 = (50 + 42.5 * Math.cos((angle * Math.PI) / 180)).toFixed(4);
                  const y1 = (50 + 42.5 * Math.sin((angle * Math.PI) / 180)).toFixed(4);
                  const x2 = (50 + 44.5 * Math.cos((angle * Math.PI) / 180)).toFixed(4);
                  const y2 = (50 + 44.5 * Math.sin((angle * Math.PI) / 180)).toFixed(4);
                  return (
                    <line
                      key={i}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      className="stroke-champagne/25 fill-none"
                      strokeWidth="0.3"
                    />
                  );
                })}

                {/* Circular typography ring boundary */}
                <circle
                  cx="50"
                  cy="50"
                  r="41"
                  className="stroke-champagne/10 fill-none"
                  strokeWidth="0.25"
                />
                
                {/* Circular Lens mark text path */}
                <circle
                  cx="50"
                  cy="50"
                  r="36"
                  className="stroke-champagne/20 fill-none"
                  strokeWidth="0.4"
                  strokeDasharray="2 2"
                />

                <text className="font-sans text-[2px] tracking-[0.26em] fill-champagne/45 uppercase font-medium">
                  <textPath href="#lens-text-path" startOffset="0%">
                    SNAP SHOOTER STUDIOS • 17 YEARS OF ARTISTRY • NIKON RECOMMENDED CREATIVE PARTNER
                  </textPath>
                </text>

                {/* Inner aperture boundary ring (where shutter lines terminate) */}
                <circle
                  cx="50"
                  cy="50"
                  r="34"
                  className="stroke-champagne/40 fill-none"
                  strokeWidth="0.6"
                />
                
                <circle
                  cx="50"
                  cy="50"
                  r="34.6"
                  className="stroke-[#070707] fill-none"
                  strokeWidth="0.4"
                />

                {/* Bottom focal details */}
                <text x="50" y="91" textAnchor="middle" className="font-sans text-[1.8px] tracking-[0.25em] fill-champagne/30 uppercase font-medium">
                  LENS 50MM F/1.2 S
                </text>
              </svg>

              {/* --- VIEW-FINDER FOCUS HUD OVERLAY (CENTERED INSIDE APERTURE) --- */}
              <AnimatePresence>
                {!isOpen && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="absolute inset-0 z-20 flex items-center justify-center p-8 select-none pointer-events-none"
                  >
                    {/* Larger Focus corner brackets to frame the message */}
                    <div className="absolute w-[130px] h-[130px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] flex items-center justify-center">
                      <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-champagne/30 stroke-[0.75]">
                        <path d="M 15 25 L 15 15 L 25 15" />
                        <path d="M 85 25 L 85 15 L 75 15" />
                        <path d="M 15 75 L 15 85 L 25 85" />
                        <path d="M 85 75 L 85 85 L 75 85" />
                      </svg>
                    </div>

                    {/* Centered Golden Message (Elegant, Editorial Serif) */}
                    <div className="absolute flex flex-col items-center justify-center text-center z-30">
                      <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="font-serif text-lg sm:text-xl md:text-2xl tracking-[0.25em] text-champagne font-light uppercase"
                      >
                        SMILE PLEASE
                      </motion.h2>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.4 }}
                        transition={{ delay: 0.15 }}
                        className="font-sans text-[7px] tracking-[0.3em] text-white uppercase mt-2.5 block"
                      >
                        CHEESE! 📸
                      </motion.span>
                    </div>

                    {/* Viewfinder HUD Recording specs */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-between font-sans text-[7px] md:text-[8px] tracking-[0.2em] text-champagne/40 uppercase font-medium">
                      <div className="flex justify-between w-full px-4">
                        <span>RAW 10b</span>
                        <span>AF-C</span>
                      </div>
                      <div className="flex justify-between w-full px-4 mt-auto">
                        <span>4K 60fps</span>
                        <span>🔋 98%</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

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

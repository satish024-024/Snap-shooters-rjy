"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import { ImageTrail } from "@/components/ui/image-trail";

const IMAGES = [
  "/images/bride_red.png",
  "/images/couple_dance.png",
  "/images/couple_palace.png",
  "/images/sunset_couple.png",
  "/images/union_garlands.png",
  "/images/bride_prep.png",
  "/images/detail_rings.png",
  "/images/engagement_rings.png",
];

export default function PhotographyPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden flex flex-col font-sans selection:bg-champagne selection:text-black">
      <Navigation />

      {/* Main Trail Exhibition Area */}
      <main className="flex-grow flex flex-col items-center justify-center relative min-h-[90vh]" ref={containerRef}>
        
        {/* Interactive Mouse Image Trail */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <ImageTrail
            containerRef={containerRef}
            interval={150}
            rotationRange={12}
            animationSequence={[
              [{ scale: 1.0, opacity: 1 }, { duration: 0.3, ease: "circOut" }],
              [{ scale: 1.0, opacity: 1 }, { duration: 2.0 }],
              [{ scale: 0.3, opacity: 0 }, { duration: 0.5, ease: "circIn" }]
            ]}
          >
            {IMAGES.map((src, index) => (
              <div
                key={src + index}
                className="flex relative overflow-hidden w-28 h-28 sm:w-36 sm:h-36 rounded-lg border border-white/10 shadow-[0_12px_24px_rgba(0,0,0,0.5)]"
              >
                <Image
                  src={src}
                  alt={`Trail frame ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 150px, 200px"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </ImageTrail>
        </div>

        {/* Center Editorial Typography */}
        <div className="z-10 text-center select-none space-y-4 px-4 pointer-events-none">
          <span className="text-[10px] tracking-[0.3em] text-champagne uppercase block font-medium animate-pulse">
            Move Cursor to Reveal Portfolio
          </span>
          <h1 className="font-serif text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-light tracking-[0.1em] text-white uppercase drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] leading-none select-none">
            Albums
          </h1>
          <p className="font-sans text-[11px] tracking-widest text-white/40 uppercase max-w-sm mx-auto">
            A chronological trail of candid frames, bridal prep, and couples dance storyboards.
          </p>
        </div>

      </main>

      <Footer />
    </div>
  );
}

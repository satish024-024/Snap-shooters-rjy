"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CRAFTED_EXPERIENCES } from "@/constants/data";

// Custom grid placement definitions for asymmetric visual rhythm
const GRID_CLASSES = [
  "col-span-1 md:col-span-2 row-span-2 min-h-[500px]", // 1. Photography
  "col-span-1 md:col-span-1 row-span-1 min-h-[300px]", // 2. Films
  "col-span-1 md:col-span-1 row-span-1 min-h-[300px]", // 3. Stories
  "col-span-1 md:col-span-2 row-span-1 min-h-[300px]", // 4. Planning
  "col-span-1 md:col-span-1 row-span-2 min-h-[500px]", // 5. Decoration
  "col-span-1 md:col-span-1 row-span-1 min-h-[300px]", // 6. Drone
  "col-span-1 md:col-span-1 row-span-1 min-h-[300px]", // 7. Live Streaming
  "col-span-1 md:col-span-1 row-span-1 min-h-[300px]", // 8. Albums
];

export default function CraftedExperiences() {
  return (
    <section className="relative bg-[#0A0A0A] py-24 md:py-40 z-10 border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-28">
          <span className="font-sans text-[10px] md:text-xs tracking-[0.3em] text-champagne uppercase font-semibold">
            WHAT WE CREATE
          </span>
          <h2 className="font-serif text-3xl md:text-6xl text-white font-light tracking-wide uppercase mt-4">
            Signature Experiences
          </h2>
          <p className="font-sans text-xs md:text-sm text-text-muted mt-6 max-w-md leading-relaxed">
            Our artistry extends beyond photography. We deliver complete, bespoke wedding productions, planning coordination, and custom design layouts.
          </p>
        </div>

        {/* Asymmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 auto-rows-min">
          {CRAFTED_EXPERIENCES.map((exp, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              key={exp.id}
              className={`relative overflow-hidden border border-white/5 group flex flex-col justify-end p-8 ${GRID_CLASSES[idx]}`}
            >
              {/* Image backdrop */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  sizes="(max-w-7xl) 33vw, 100vw"
                  className="object-cover hover-zoom-img"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20 z-10" />
              </div>

              {/* Text detail contents */}
              <div className="relative z-20 flex flex-col justify-end h-full">
                <span className="font-mono text-champagne text-[10px] tracking-widest mb-4">
                  0{idx + 1}
                </span>
                
                <h3 className="font-serif text-xl md:text-2xl text-white uppercase font-light tracking-wide">
                  {exp.title}
                </h3>
                
                <p className="font-sans text-[11px] text-text-secondary mt-3 leading-relaxed max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {exp.description}
                </p>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <Link
                    href={exp.link}
                    className="inline-flex items-center gap-2 font-button text-[10px] tracking-editorial text-white/80 group-hover:text-champagne transition-colors uppercase font-semibold"
                  >
                    Explore Artistry
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

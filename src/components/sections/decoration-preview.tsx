"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const DECOR_GALLERY = [
  {
    title: "Royal Palace Stage",
    category: "Royal / Luxury",
    url: "/images/decor_palace.png",
    ratio: "aspect-[16/10] md:col-span-8",
  },
  {
    title: "Temple Marigold Chandelier",
    category: "Traditional / Temple",
    url: "/images/decor_temple.png",
    ratio: "aspect-[3/4] md:col-span-4",
  },
  {
    title: "Minimalist Beach Canopy",
    category: "Outdoor / Pastel",
    url: "/images/decor_beach.png",
    ratio: "aspect-[3/4] md:col-span-4 md:translate-y-12",
  },
  {
    title: "Vivid Night Reception Lights",
    category: "Contemporary / Night",
    url: "/images/decor_reception.png",
    ratio: "aspect-[16/10] md:col-span-8 md:translate-y-12",
  },
];

export default function DecorationPreview() {
  return (
    <section className="relative bg-[#0A0A0A] py-24 md:py-40 z-10 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Headings */}
        <div className="max-w-3xl mb-16 md:mb-28">
          <span className="font-sans text-[10px] md:text-xs tracking-[0.3em] text-champagne uppercase font-semibold">
            BESPOKE STYLING
          </span>
          <h2 className="font-serif text-3xl md:text-6xl text-white font-light tracking-wide uppercase mt-4">
            Bespoke Decoration
          </h2>
          <p className="font-sans text-xs md:text-sm text-text-muted mt-6 max-w-md leading-relaxed">
            Our styling department works on architectural templates, floral selections, and high-key color styling. We convert venues into visual canvases.
          </p>
        </div>

        {/* Asymmetric Decor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start pb-12">
          {DECOR_GALLERY.map((item, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              key={idx}
              className={`relative overflow-hidden border border-white/5 group ${item.ratio}`}
            >
              <Image
                src={item.url}
                alt={item.title}
                fill
                sizes="(max-w-7xl) 50vw, 100vw"
                className="object-cover hover-zoom-img"
              />
              {/* Overlay details */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex flex-col justify-end p-6">
                <span className="font-sans text-[9px] text-champagne uppercase tracking-widest">{item.category}</span>
                <h3 className="font-serif text-xl text-white mt-1 uppercase font-light tracking-wide">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="h-12 md:h-24" /> {/* Compensation for translation offset */}
      </div>
    </section>
  );
}

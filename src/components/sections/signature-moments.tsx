"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SIGNATURE_MOMENTS } from "@/constants/data";

export default function SignatureMoments() {
  return (
    <section className="relative bg-black py-24 md:py-40 z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 md:mb-28">
          <span className="font-sans text-[10px] md:text-xs tracking-[0.3em] text-champagne uppercase font-semibold">
            THE ART OF WEDDINGS
          </span>
          <h2 className="font-serif text-3xl md:text-6xl text-white font-light tracking-wide uppercase mt-4 leading-tight">
            Signature Moments
          </h2>
          <p className="font-sans text-xs md:text-sm text-text-muted mt-6 max-w-md leading-relaxed">
            A curated selection of our most iconic, raw, and emotionally resonant frames. No staging, no visual clutter—just pure light, texture, and genuine feeling.
          </p>
        </div>

        {/* Asymmetrical Editorial Composition Grid */}
        <div className="flex flex-col gap-24 md:gap-40">
          
          {/* Row 1: Large Left Portrait, Small Right Landscape + Text */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-center">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[4/5] w-full overflow-hidden border border-white/5 group"
              >
                <Image
                  src={SIGNATURE_MOMENTS[0].url}
                  alt={SIGNATURE_MOMENTS[0].title}
                  fill
                  sizes="(max-w-7xl) 50vw, 100vw"
                  className="object-cover hover-zoom-img"
                  priority
                />
                {/* Subtle dark overlay on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-8 z-10">
                  <span className="font-sans text-[10px] text-champagne uppercase tracking-widest">{SIGNATURE_MOMENTS[0].category}</span>
                  <h3 className="font-serif text-2xl text-white mt-2">{SIGNATURE_MOMENTS[0].title}</h3>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:col-span-5 flex flex-col gap-12">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[3/2] w-full overflow-hidden border border-white/5 group"
              >
                <Image
                  src={SIGNATURE_MOMENTS[1].url}
                  alt={SIGNATURE_MOMENTS[1].title}
                  fill
                  sizes="(max-w-7xl) 33vw, 100vw"
                  className="object-cover hover-zoom-img"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-6 z-10">
                  <span className="font-sans text-[10px] text-champagne uppercase tracking-widest">{SIGNATURE_MOMENTS[1].category}</span>
                  <h3 className="font-serif text-xl text-white mt-1">{SIGNATURE_MOMENTS[1].title}</h3>
                </div>
              </motion.div>
              
              <div className="border-l border-champagne/30 pl-6 py-2 max-w-sm">
                <span className="font-serif text-lg md:text-xl italic text-platinum leading-relaxed font-light">
                  “Every frame we capture is treated as a distinct work of art. We design around light, breathing room, and genuine human geometry.”
                </span>
                <p className="font-sans text-[10px] text-text-muted uppercase tracking-widest mt-4">
                  - Potnuri Kiran Kumar, founder
                </p>
              </div>
            </div>
          </div>

          {/* Row 2: Full Viewport Width Landscape Image (16:9) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full aspect-[21/9] overflow-hidden border border-white/5 group"
          >
            <Image
              src={SIGNATURE_MOMENTS[2].url}
              alt={SIGNATURE_MOMENTS[2].title}
              fill
              sizes="100vw"
              className="object-cover hover-zoom-img"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-8 md:p-12 z-10">
              <span className="font-sans text-[10px] text-champagne uppercase tracking-widest">{SIGNATURE_MOMENTS[2].category}</span>
              <h3 className="font-serif text-3xl text-white mt-2">{SIGNATURE_MOMENTS[2].title}</h3>
              <p className="font-sans text-xs text-text-secondary mt-1 max-w-md hidden md:block">{SIGNATURE_MOMENTS[2].description}</p>
            </div>
          </motion.div>

          {/* Row 3: Three Columns of Varying Widths */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Column 1: Vertical Portrait */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[3/4] w-full overflow-hidden border border-white/5 group"
            >
              <Image
                src={SIGNATURE_MOMENTS[3].url}
                alt={SIGNATURE_MOMENTS[3].title}
                fill
                sizes="(max-w-7xl) 33vw, 100vw"
                className="object-cover hover-zoom-img"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-6 z-10">
                <span className="font-sans text-[10px] text-champagne uppercase tracking-widest">{SIGNATURE_MOMENTS[3].category}</span>
                <h3 className="font-serif text-xl text-white mt-1">{SIGNATURE_MOMENTS[3].title}</h3>
              </div>
            </motion.div>

            {/* Column 2: Square Image, slightly offset down */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[1/1] w-full overflow-hidden border border-white/5 md:mt-12 group"
            >
              <Image
                src={SIGNATURE_MOMENTS[4].url}
                alt={SIGNATURE_MOMENTS[4].title}
                fill
                sizes="(max-w-7xl) 33vw, 100vw"
                className="object-cover hover-zoom-img"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-6 z-10">
                <span className="font-sans text-[10px] text-champagne uppercase tracking-widest">{SIGNATURE_MOMENTS[4].category}</span>
                <h3 className="font-serif text-xl text-white mt-1">{SIGNATURE_MOMENTS[4].title}</h3>
              </div>
            </motion.div>

            {/* Column 3: Landscape Image, offset down further */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[3/4] w-full overflow-hidden border border-white/5 md:mt-24 group"
            >
              <Image
                src={SIGNATURE_MOMENTS[5].url}
                alt={SIGNATURE_MOMENTS[5].title}
                fill
                sizes="(max-w-7xl) 33vw, 100vw"
                className="object-cover hover-zoom-img"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-6 z-10">
                <span className="font-sans text-[10px] text-champagne uppercase tracking-widest">{SIGNATURE_MOMENTS[5].category}</span>
                <h3 className="font-serif text-xl text-white mt-1">{SIGNATURE_MOMENTS[5].title}</h3>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

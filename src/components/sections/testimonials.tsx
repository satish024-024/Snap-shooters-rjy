"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Play, X, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/constants/data";

export default function Testimonials() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="relative bg-black py-24 md:py-40 z-10 overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Headings */}
        <div className="max-w-3xl mb-16 md:mb-28">
          <span className="font-sans text-[10px] md:text-xs tracking-[0.3em] text-champagne uppercase font-semibold">
            CLIENT TESTIMONIALS
          </span>
          <h2 className="font-serif text-3xl md:text-6xl text-white font-light tracking-wide uppercase mt-4">
            Cherished Reviews
          </h2>
        </div>

        {/* Testimonials Layout (Asymmetrical) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: 2 Staggered Text Reviews (Col span 7) */}
          <div className="lg:col-span-7 flex flex-col gap-12 justify-center">
            {TESTIMONIALS.map((test, idx) => {
              if (idx === 0) return null; // We display the first one with video on the right
              return (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  key={test.id}
                  className="relative p-8 bg-card border border-white/5 rounded-sm max-w-xl self-start"
                >
                  <Quote className="w-10 h-10 text-champagne/10 absolute top-4 left-4" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-champagne text-champagne" />
                    ))}
                  </div>
                  <p className="font-serif text-base md:text-lg italic text-platinum leading-relaxed font-light relative z-10">
                    “{test.text}”
                  </p>
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] tracking-widest uppercase text-text-muted">
                    <span className="font-serif text-sm text-white font-light">{test.couple}</span>
                    <span>{test.source}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Featured Video Review Card (Col span 5) */}
          <div className="lg:col-span-5 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex-grow min-h-[400px] bg-card border border-white/5 p-8 flex flex-col justify-between overflow-hidden group"
            >
              {/* Background Thumbnail Image */}
              {TESTIMONIALS[0].thumbnail && (
                <div className="absolute inset-0 z-0">
                  <Image
                    src={TESTIMONIALS[0].thumbnail}
                    alt={TESTIMONIALS[0].couple}
                    fill
                    className="object-cover opacity-30 group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                </div>
              )}

              {/* Top Row: Stars and Source */}
              <div className="relative z-10 flex justify-between items-center">
                <div className="flex gap-1">
                  {[...Array(TESTIMONIALS[0].rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-champagne text-champagne" />
                  ))}
                </div>
                <span className="font-sans text-[8px] border border-white/10 px-2 py-0.5 uppercase tracking-widest text-text-muted">
                  Video Review
                </span>
              </div>

              {/* Center Play trigger */}
              {TESTIMONIALS[0].videoUrl && (
                <div className="relative z-10 flex items-center justify-center py-12">
                  <button
                    onClick={() => setActiveVideo(TESTIMONIALS[0].videoUrl || null)}
                    className="w-16 h-16 rounded-full border border-champagne text-champagne flex items-center justify-center bg-black/60 hover:bg-champagne hover:text-black transition-luxury"
                    aria-label="Play video review"
                  >
                    <Play className="w-5 h-5 fill-current ml-1" />
                  </button>
                </div>
              )}

              {/* Bottom detail text */}
              <div className="relative z-10 text-left">
                <p className="font-serif text-lg italic text-platinum font-light leading-relaxed mb-4">
                  “{TESTIMONIALS[0].text}”
                </p>
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[10px] tracking-widest uppercase text-text-muted">
                  <span className="font-serif text-sm text-white font-light">{TESTIMONIALS[0].couple}</span>
                  <span>{TESTIMONIALS[0].source}</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Video Modal Player */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center p-6 md:p-12"
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-6 right-6 z-[110] w-12 h-12 flex items-center justify-center border border-white/10 rounded-full text-white hover:border-champagne hover:text-champagne transition-colors"
              aria-label="Close video"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative w-full max-w-4xl aspect-[16/9] border border-white/10 overflow-hidden bg-black">
              <video
                src={activeVideo}
                autoPlay
                controls
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

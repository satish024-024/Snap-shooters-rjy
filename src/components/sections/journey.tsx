"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { WEDDING_JOURNEY, BOOKING_TIMELINE } from "@/constants/data";

export default function Journey() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative bg-black py-24 md:py-40 z-10 overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* PART 1: THE WEDDING JOURNEY (Heading Moved to Full-Width Top Block) */}
        <div className="flex flex-col gap-4 pb-12 text-left">
          <span className="font-sans text-[10px] md:text-xs tracking-[0.3em] text-champagne uppercase font-semibold">
            CHRONOLOGICAL DOCUMENTARY
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-white font-light tracking-wide uppercase mt-2">
            The Wedding Journey
          </h2>
          <p className="font-sans text-xs md:text-sm text-text-muted mt-2 max-w-2xl leading-relaxed">
            From the quiet morning preparations to the physical album delivery, we map each ceremony with its distinct lighting requirements and visual geometry.
          </p>
        </div>

        {/* Dynamic Grid Layout where columns stretch to match button list height */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch pb-24 border-b border-white/5">
          {/* Left Column: Timeline Menu List (Col span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div className="flex flex-col gap-3 w-full">
              {/* Option 1 to 8 buttons */}
              {WEDDING_JOURNEY.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`flex items-center justify-between p-4 border transition-luxury text-left ${
                    activeStep === idx
                      ? "border-champagne bg-white/[0.01] text-white"
                      : "border-white/5 bg-transparent text-text-muted hover:border-white/20 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`font-mono text-xs ${activeStep === idx ? "text-champagne" : "text-text-muted"}`}>
                      {item.step}
                    </span>
                    <span className="font-serif text-sm tracking-wide uppercase font-light">
                      {item.title}
                    </span>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${
                    activeStep === idx ? "text-champagne rotate-90" : "text-text-muted"
                  }`} />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Step Visual & Detailed Text (Col span 7 - height matches Left Menu) */}
          <div className="lg:col-span-7 lg:pl-6 flex flex-col justify-center h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-stretch h-full w-full"
              >
                {/* Visual Image - Stretches from 1st button top to last button bottom */}
                <div className="md:col-span-6 relative w-full h-[400px] md:h-full min-h-[350px] md:min-h-0 overflow-hidden border border-white/5 bg-[#111111] group rounded-sm shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
                  <Image
                    src={WEDDING_JOURNEY[activeStep].image}
                    alt={WEDDING_JOURNEY[activeStep].title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Text Details - Vertically Centered */}
                <div className="md:col-span-6 flex flex-col justify-center gap-5 text-left py-4">
                  <span className="font-mono text-5xl md:text-6xl text-champagne/20 font-light leading-none">
                    {WEDDING_JOURNEY[activeStep].step}
                  </span>
                  
                  <h3 className="font-serif text-2xl md:text-3xl text-white uppercase font-light tracking-wide">
                    {WEDDING_JOURNEY[activeStep].title}
                  </h3>
                  
                  <p className="font-serif text-lg text-platinum leading-relaxed italic font-light">
                    “{WEDDING_JOURNEY[activeStep].description}”
                  </p>
                  
                  <div className="w-12 h-[1px] bg-champagne/40 my-1" />
                  
                  <p className="font-sans text-xs md:text-sm text-text-muted leading-relaxed">
                    {WEDDING_JOURNEY[activeStep].details}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* PART 2: THE BOOKING TIMELINE */}
        <div className="pt-24">
          <div className="max-w-3xl mb-16 text-left">
            <span className="font-sans text-[10px] md:text-xs tracking-[0.3em] text-champagne uppercase font-semibold">
              OUR SERVICE ENGAGEMENT
            </span>
            <h2 className="font-serif text-2xl md:text-4xl text-white font-light tracking-wide uppercase mt-4">
              Booking Timeline
            </h2>
          </div>

          {/* Horizontal Booking Step Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 items-stretch">
            {BOOKING_TIMELINE.map((phase) => (
              <div
                key={phase.phase}
                className="bg-card border border-white/5 p-6 flex flex-col gap-4 justify-between"
              >
                <div className="flex justify-between items-start">
                  <span className="font-mono text-xs text-champagne font-bold bg-white/[0.02] border border-white/5 px-2 py-0.5 rounded-sm">
                    {phase.phase}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-champagne/20 flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-champagne" />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-base text-white uppercase font-light tracking-wide">
                    {phase.title}
                  </h3>
                  <p className="font-sans text-[10px] text-text-muted mt-2 leading-relaxed">
                    {phase.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

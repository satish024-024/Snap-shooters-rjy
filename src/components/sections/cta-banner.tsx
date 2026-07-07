"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="relative bg-black py-28 md:py-48 z-10 overflow-hidden border-b border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,106,0.02)_0%,rgba(0,0,0,0)_80%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
        <span className="font-sans text-[10px] md:text-xs tracking-[0.3em] text-champagne uppercase font-semibold">
          PLAN YOUR CELEBRATION
        </span>
        
        <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl text-white font-light tracking-wide uppercase mt-6 mb-8 max-w-4xl mx-auto leading-tight">
          Create a story that <br className="hidden md:inline" />
          <span className="italic text-champagne">lives forever.</span>
        </h2>
        
        <p className="font-sans text-xs md:text-sm text-text-muted max-w-md mx-auto leading-relaxed mb-12">
          We accept a limited number of weddings each year to ensure uncompromising craftsmanship. Contact us today to secure your dates.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/dream-planner"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-champagne text-black font-button text-xs tracking-editorial uppercase hover:bg-white hover:text-black transition-luxury font-medium"
          >
            Plan Your Dream Wedding
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/contact?consultation=true"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/20 text-white font-button text-xs tracking-editorial uppercase hover:bg-white hover:text-black transition-luxury"
          >
            <Calendar className="w-3.5 h-3.5 text-champagne" />
            Book Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}

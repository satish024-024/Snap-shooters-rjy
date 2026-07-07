"use client";

import React from "react";
import Image from "next/image";
import { Camera } from "lucide-react";
import { IMG_FOUNDER_PORTRAIT } from "@/constants/data";

export default function NikonBadge() {
  return (
    <section className="relative bg-black py-24 md:py-40 z-10 overflow-hidden border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Nikon Badge & Credentials (Col span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Minimal Brand Credential Row */}
            <div className="inline-flex items-center gap-3">
              {/* Specialized Nikon Badge Visual */}
              <div className="w-12 h-12 flex items-center justify-center border border-champagne/40 bg-white/[0.01]">
                <Camera className="w-5 h-5 text-champagne" />
              </div>
              <div>
                <span className="font-sans text-[10px] tracking-[0.2em] text-champagne uppercase font-bold">Official Recognition</span>
                <h3 className="font-serif text-lg text-white uppercase font-light leading-none mt-1">Nikon Recommended</h3>
              </div>
            </div>

            <div className="max-w-md">
              <h2 className="font-serif text-3xl md:text-5xl text-white font-light tracking-wide uppercase leading-tight">
                Recommended <br />
                by Nikon India
              </h2>
              <p className="font-sans text-xs md:text-sm text-text-muted mt-6 leading-relaxed">
                A distinction awarded to selected visual artists across the sub-continent. This certification guarantees advanced camera optics direction, lighting calibrations, and archival-grade image deliverables.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/5">
              <div>
                <span className="font-mono text-xl text-white font-light">10+ Years</span>
                <p className="font-sans text-[9px] text-text-muted uppercase tracking-widest mt-1">Of Field Experience</p>
              </div>
              <div>
                <span className="font-mono text-xl text-white font-light">PAN India</span>
                <p className="font-sans text-[9px] text-text-muted uppercase tracking-widest mt-1">Coverage Scope</p>
              </div>
            </div>
          </div>

          {/* Right Column: Founder Profile & Quote (Col span 7) */}
          <div className="lg:col-span-7 flex flex-col md:flex-row gap-8 items-center md:items-stretch">
            
            {/* Founder portrait */}
            <div className="relative aspect-[3/4] w-full max-w-[280px] overflow-hidden border border-white/5 shrink-0 bg-card">
              <Image
                src={IMG_FOUNDER_PORTRAIT}
                alt="Potnuri Kiran Kumar"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-luxury"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Founder Quote Detail */}
            <div className="flex flex-col justify-between py-2 text-left">
              <div className="max-w-sm">
                <span className="font-serif text-xs text-champagne uppercase tracking-widest block mb-4">Meet the Founder</span>
                <h4 className="font-serif text-2xl md:text-3xl text-white font-light uppercase tracking-wide">
                  Potnuri Kiran Kumar
                </h4>
                <span className="font-sans text-[10px] text-text-muted uppercase tracking-widest mt-1 block">
                  Founder & Creative Director
                </span>

                <div className="mt-8 relative">
                  <span className="font-serif text-2xl text-champagne/40 absolute -top-4 -left-2 leading-none font-bold">“</span>
                  <p className="font-serif text-lg italic text-platinum leading-relaxed font-light pl-4">
                    Our philosophy is simple. Real emotions. Timeless memories.
                  </p>
                </div>
              </div>

              <div className="pt-8 border-t border-white/5 mt-8 md:mt-0 max-w-sm">
                <p className="font-sans text-[11px] text-text-muted leading-relaxed">
                  “We do not document details; we document the emotional weight that defines them. The photography must speak, long after the wedding is complete.”
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

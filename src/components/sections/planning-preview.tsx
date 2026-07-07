"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Clock, Sparkles, MapPin, Users } from "lucide-react";

const PLANNING_FEATURES = [
  {
    icon: MapPin,
    title: "Venue Selection & Curation",
    desc: "Finding the perfect backdrop, from royal palaces in Rajasthan to scenic beachfronts in Goa.",
  },
  {
    icon: Sparkles,
    title: "Decoration & Theme Design",
    desc: "Crafting custom visual guides matching your aesthetic, integrating local flowers and lights.",
  },
  {
    icon: Clock,
    title: "Timeline & Step Coordination",
    desc: "Minute-by-minute execution checklists keeping all ceremonies, music, and photographers aligned.",
  },
  {
    icon: Users,
    title: "Guest Scale Logistics",
    desc: "Managing transport routes, check-ins, VIP layouts, and personal concierge services.",
  },
];

export default function PlanningPreview() {
  const [activeImg, setActiveImg] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&q=80&w=1200",
  ];

  return (
    <section className="relative bg-black py-24 md:py-40 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Text & Features List (Col span 5) */}
          <div className="lg:col-span-6">
            <span className="font-sans text-[10px] md:text-xs tracking-[0.3em] text-champagne uppercase font-semibold">
              PREMIUM WEDDING PLANNING
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-white font-light tracking-wide uppercase mt-4 leading-tight">
              Bespoke Planning <br />
              Under One Roof
            </h2>
            <p className="font-sans text-xs md:text-sm text-text-muted mt-6 mb-12 max-w-lg leading-relaxed">
              We manage all logistical structures so you can remain present in the moment. From curated design mockups to coordination checklists, our planners orchestrate the perfect celebration.
            </p>

            <div className="flex flex-col gap-8">
              {PLANNING_FEATURES.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 items-start group cursor-pointer"
                  onMouseEnter={() => setActiveImg(idx)}
                >
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-champagne bg-white/[0.01] group-hover:border-champagne/60 group-hover:text-black group-hover:bg-champagne transition-luxury shrink-0">
                    <feature.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-white group-hover:text-champagne transition-colors">
                      {feature.title}
                    </h3>
                    <p className="font-sans text-[11px] text-text-muted mt-2 leading-relaxed max-w-sm">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Exhibition Showcase (Col span 7) */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] w-full max-w-[480px] mx-auto overflow-hidden border border-white/5 shadow-2xl">
              <Image
                src={images[activeImg]}
                alt="wedding planning details"
                fill
                sizes="(max-w-7xl) 50vw, 100vw"
                className="object-cover transition-all duration-1000 ease-[0.16, 1, 0.3, 1]"
              />
              {/* Image dark vignette overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />
            </div>

            {/* Float Stat box */}
            <div className="absolute bottom-6 -left-6 md:-left-12 p-6 bg-card border border-white/5 rounded-sm max-w-[200px] hidden md:block">
              <span className="font-mono text-3xl text-champagne tracking-normal font-light">100%</span>
              <p className="font-sans text-[9px] text-text-secondary uppercase tracking-widest mt-2">
                Stress-free coordination guaranteed.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

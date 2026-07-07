"use client";

import React from "react";
import Image from "next/image";
import { Instagram, ArrowRight } from "lucide-react";
import { INSTAGRAM_FEED } from "@/constants/data";

export default function InstagramReel() {
  // Duplicate feed to make the infinite scroll smooth
  const doubleFeed = [...INSTAGRAM_FEED, ...INSTAGRAM_FEED];

  return (
    <section className="relative bg-black py-24 md:py-32 z-10 overflow-hidden border-b border-white/5">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scrollReel {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scrollReel 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="font-sans text-[10px] md:text-xs tracking-[0.3em] text-champagne uppercase font-semibold">
            FOLLOW OUR JOURNEY
          </span>
          <h2 className="font-serif text-2xl md:text-4xl text-white font-light tracking-wide uppercase mt-3">
            @snap.shooter.studios
          </h2>
        </div>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 font-button text-xs tracking-editorial text-champagne uppercase hover:text-white transition-colors"
        >
          Explore Instagram
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative w-full flex overflow-hidden py-4 bg-white/[0.01] border-t border-b border-white/5">
        {/* Soft edge blur vignettes */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <div className="animate-scroll gap-6">
          {doubleFeed.map((post, idx) => (
            <a
              key={`${post.id}-${idx}`}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-48 md:w-64 aspect-square overflow-hidden border border-white/5 shrink-0 group block"
            >
              <Image
                src={post.url}
                alt="Instagram post"
                fill
                sizes="256px"
                className="object-cover hover-zoom-img"
              />
              {/* Instagram Hover Icon overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                <Instagram className="w-6 h-6 text-white group-hover:text-champagne transition-colors" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { MAP_HUBS, MapHub } from "@/constants/data";
import indiaMapData from "@svg-maps/india";

// Local interfaces for strict type safety
interface IndiaMapLocation {
  name: string;
  id: string;
  path: string;
}

interface IndiaMapData {
  label: string;
  viewBox: string;
  locations: IndiaMapLocation[];
}

const mapData = indiaMapData as unknown as IndiaMapData;

export default function IndiaMap() {
  const [activeHub, setActiveHub] = useState<MapHub>(MAP_HUBS[0]); // Default to Rajahmundry

  // Center coordinate calculations in the 612x696 SVG coordinate space
  // Rajahmundry (HQ) coordinates: lng = 49.0% (X), lat = 69.7% (Y)
  const hqX = 612 * (49.0 / 100);
  const hqY = 696 * (69.7 / 100);

  return (
    <section className="relative bg-black py-24 md:py-40 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Map Details Card (Col span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-8 order-2 lg:order-1">
            <div>
              <span className="font-sans text-[10px] md:text-xs tracking-[0.3em] text-champagne uppercase font-semibold">
                OUR PRESENCE ACROSS INDIA
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-white font-light tracking-wide uppercase mt-4 leading-tight">
                17 Years of Pan-India Artistry
              </h2>
              <p className="font-sans text-xs md:text-sm text-text-muted mt-6 leading-relaxed">
                With over 17 years of experience capturing luxury wedding stories, our lens has documented celebrations across the length and breadth of India. From the heritage palaces of Rajasthan to beachfront sanctuaries in Goa, we travel everywhere to craft your visual legacy. Headquartered in Rajahmundry, Andhra Pradesh, clicking any hub reveals our signature love story at that destination.
              </p>
            </div>

            {/* Selected Hub Details Card (Vogue-Style) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeHub.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="bg-card border border-white/5 p-6 flex flex-col gap-6 relative"
              >
                {/* Visual Thumbnail */}
                <div className="relative aspect-[16/9] w-full overflow-hidden border border-white/5 bg-[#111111]">
                  <Image
                    src={activeHub.imageUrl}
                    alt={activeHub.city}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-black/60 border border-white/10 px-2 py-0.5 text-[8px] tracking-widest text-champagne uppercase font-mono">
                    {activeHub.city}
                  </div>
                </div>

                {/* Info details */}
                <div className="text-left">
                  <span className="font-sans text-[8px] tracking-[0.2em] text-text-muted uppercase">
                    Featured Wedding Story
                  </span>
                  <h3 className="font-serif text-xl text-white uppercase font-light mt-1">
                    {activeHub.title}
                  </h3>
                  <p className="font-sans text-[10px] text-text-secondary uppercase tracking-widest mt-2 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-champagne" /> {activeHub.venue}
                  </p>
                </div>

                <Link
                  href={`/wedding-stories`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 border border-white/10 text-white font-button text-[10px] tracking-editorial uppercase hover:border-champagne hover:text-champagne transition-colors"
                >
                  Explore Story
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Dynamic SVG Map (Col span 7) */}
          <div className="lg:col-span-7 flex justify-center order-1 lg:order-2 w-full">
            <div className="relative w-full max-w-[550px] aspect-[612/696] bg-white/[0.01] border border-white/5 rounded-sm overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.8)]">
              
              {/* Decorative Compass / Grid lines */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.01)_0%,rgba(0,0,0,0)_70%)] pointer-events-none" />
              <div className="absolute bottom-6 right-6 font-mono text-[8px] tracking-widest text-white/20 uppercase flex flex-col items-end leading-relaxed">
                <span>Lat: 16.9891° N</span>
                <span>Lon: 81.7836° E</span>
              </div>

              {/* Real detailed geographic SVG path Map of India */}
              <svg
                viewBox={mapData.viewBox}
                className="w-full h-full stroke-[0.6] fill-none select-none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* 1. Render all geographic state boundaries */}
                <g className="transition-all duration-500">
                  {mapData.locations.map((loc) => {
                    // Highlight the state corresponding to the active hub
                    const isStateActive = activeHub.state === loc.name;
                    return (
                      <path
                        key={loc.id}
                        id={loc.id}
                        d={loc.path}
                        className={`transition-all duration-500 cursor-pointer ${
                          isStateActive
                            ? "fill-champagne/[0.07] stroke-champagne/40"
                            : "fill-white/[0.01] stroke-white/5 hover:fill-champagne/[0.03] hover:stroke-champagne/20"
                        }`}
                      />
                    );
                  })}
                </g>
                
                {/* 2. Animated connecting travel lines from Rajahmundry (HQ) */}
                {MAP_HUBS.map((hub) => {
                  if (hub.id === "hub-1") return null;

                  // Get destination coordinates in viewBox space
                  const hubX = 612 * (hub.lng / 100);
                  const hubY = 696 * (hub.lat / 100);

                  // Curve control points offsets to make paths look beautifully arched
                  const dx = hubX - hqX;
                  const dy = hubY - hqY;
                  const cx = (hqX + hubX) / 2 - dy * 0.15;
                  const cy = (hqY + hubY) / 2 + dx * 0.15;

                  return (
                    <motion.path
                      key={`line-${hub.id}`}
                      d={`M ${hqX} ${hqY} Q ${cx} ${cy} ${hubX} ${hubY}`}
                      fill="none"
                      stroke="#C9A86A"
                      strokeWidth="0.8"
                      strokeDasharray="4,6"
                      initial={{ strokeDashoffset: 120 }}
                      animate={{ strokeDashoffset: 0 }}
                      transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                      className="opacity-40"
                    />
                  );
                })}
              </svg>

              {/* Plotted Glowing Hub Nodes (Overlayed perfectly on SVG coordinates) */}
              {MAP_HUBS.map((hub) => {
                const isActive = activeHub.id === hub.id;
                return (
                  <button
                    key={hub.id}
                    onClick={() => setActiveHub(hub)}
                    className="absolute group z-20 focus:outline-none cursor-pointer"
                    style={{
                      top: `${hub.lat}%`,
                      left: `${hub.lng}%`,
                      transform: "translate(-50%, -50%)"
                    }}
                    aria-label={`Wedding Hub: ${hub.city}`}
                  >
                    {/* Glowing outer rings */}
                    <span className="absolute w-6 h-6 -top-3 -left-3 rounded-full bg-champagne/10 scale-0 group-hover:scale-100 transition-transform duration-500 pointer-events-none" />
                    
                    {isActive && (
                      <span className="absolute w-8 h-8 -top-4 -left-4 rounded-full border border-champagne/40 animate-ping pointer-events-none" />
                    )}

                    {/* Core node dot */}
                    <div
                      className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-luxury ${
                        isActive
                          ? "bg-champagne border-black scale-110"
                          : "bg-black border-champagne/60 group-hover:border-champagne group-hover:bg-champagne/20"
                      }`}
                    >
                      <div className={`w-1 h-1 rounded-full ${isActive ? "bg-black" : "bg-champagne"}`} />
                    </div>

                    {/* Tooltip Label */}
                    <div className="absolute top-5 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-black/90 border border-white/10 rounded-sm whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      <span className="font-serif text-[9px] tracking-editorial text-white uppercase">{hub.city}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

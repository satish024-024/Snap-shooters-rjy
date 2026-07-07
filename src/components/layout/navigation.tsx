"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar } from "lucide-react";
import Image from "next/image";
import {
  IMG_BRIDE_RED,
  IMG_COUPLE_PALACE,
  IMG_FLORAL_MANDAP,
  IMG_COUPLE_DANCE,
  IMG_SUNSET_COUPLE,
  IMG_ENGAGEMENT_RINGS,
  IMG_FOUNDER_PORTRAIT,
  IMG_DETAIL_RINGS,
} from "@/constants/data";

const NAV_LINKS = [
  { name: "Photography", href: "/photography", subtitle: "Editorial Frames" },
  { name: "Wedding Planning", href: "/wedding-planning", subtitle: "Bespoke Management" },
  { name: "Decoration", href: "/decoration", subtitle: "Floral & Canopy Styling" },
  { name: "Cinematic Films", href: "/films", subtitle: "Hollywood-grade Anamorphic" },
  { name: "Wedding Stories", href: "/wedding-stories", subtitle: "Curated Celebrations" },
  { name: "Dream Planner", href: "/dream-planner", subtitle: "Digital Stepper" },
  { name: "About Kiran", href: "/about", subtitle: "Founder's Philosophy" },
  { name: "Get in Touch", href: "/contact", subtitle: "Exhibition Booking" },
];

const PREVIEW_IMAGES: Record<string, string> = {
  "/photography": IMG_BRIDE_RED,
  "/wedding-planning": IMG_COUPLE_PALACE,
  "/decoration": IMG_FLORAL_MANDAP,
  "/films": IMG_COUPLE_DANCE,
  "/wedding-stories": IMG_SUNSET_COUPLE,
  "/dream-planner": IMG_ENGAGEMENT_RINGS,
  "/about": IMG_FOUNDER_PORTRAIT,
  "/contact": IMG_DETAIL_RINGS,
};

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string>("/photography");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on path change
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMenuOpen(false);
  }

  // Prevent body scroll when full screen menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* Floating Pill/Capsule Header */}
      <motion.nav
        initial={{ y: -60, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed left-1/2 w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] max-w-7xl z-50 transition-all duration-500 rounded-full border ${
          scrolled
            ? "bg-black/90 backdrop-blur-2xl border-champagne/20 shadow-[0_8px_32px_rgba(0,0,0,0.8)] py-3 px-6 top-4"
            : "bg-black/30 backdrop-blur-md border-white/5 py-4 px-6 md:px-8 top-6"
        }`}
      >
        <div className="flex items-center justify-between w-full">
          {/* Logo Brand */}
          <Link href="/" className="group flex items-center gap-3">
            {/* Rotating Mechanical golden interlocking S emblem */}
            <div className="relative w-8 h-8 flex items-center justify-center border border-champagne/30 rounded-full group-hover:border-champagne group-hover:rotate-180 transition-all duration-1000 ease-out">
              <span className="font-serif text-xs text-champagne font-bold tracking-widest mt-[1px]">S</span>
              <span className="absolute text-[8px] text-champagne/40 group-hover:text-champagne transition-luxury scale-x-[-1] mt-1 -mr-2">S</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-[11px] md:text-[13px] tracking-[0.25em] text-white font-medium uppercase leading-none group-hover:text-champagne transition-colors duration-500">
                SNAP SHOOTER
              </span>
              <span className="font-sans text-[8px] md:text-[9px] tracking-[0.4em] text-champagne uppercase mt-[3px] leading-none">
                STUDIOS
              </span>
            </div>
          </Link>

          {/* Core Curated Links in Center (Desktop Only to reduce clutter) */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link href="/photography" className="font-button text-[10px] tracking-[0.2em] text-white/50 hover:text-champagne transition-colors uppercase relative group py-1">
              Photography
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-champagne/60 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
            </Link>
            <span className="text-white/10 text-[8px] select-none">•</span>
            <Link href="/films" className="font-button text-[10px] tracking-[0.2em] text-white/50 hover:text-champagne transition-colors uppercase relative group py-1">
              Cinematic Films
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-champagne/60 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
            </Link>
            <span className="text-white/10 text-[8px] select-none">•</span>
            <Link href="/wedding-stories" className="font-button text-[10px] tracking-[0.2em] text-white/50 hover:text-champagne transition-colors uppercase relative group py-1">
              Real Stories
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-champagne/60 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
            </Link>
          </div>

          {/* Action Trigger Buttons */}
          <div className="flex items-center gap-3">
            {/* Consultation Booking button */}
            <Link
              href="/contact?consultation=true"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 border border-champagne/30 rounded-full font-button text-[9px] tracking-[0.2em] text-champagne uppercase hover:bg-champagne hover:text-black transition-luxury"
            >
              <Calendar className="w-3 h-3" />
              Book
            </Link>

            {/* Premium Creative Hamburger Menu Trigger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-2 group px-4 py-2 hover:bg-white/5 rounded-full transition-colors relative z-50 text-white"
              aria-label="Toggle navigation"
            >
              <span className="hidden md:inline font-button text-[9px] tracking-[0.25em] text-white/70 group-hover:text-champagne transition-colors uppercase mt-[1px]">
                {menuOpen ? "Close" : "Menu"}
              </span>
              <div className="w-5 h-4 flex flex-col justify-between items-end relative py-0.5">
                <span
                  className={`h-[1px] bg-champagne transition-all duration-300 ${
                    menuOpen ? "w-5 rotate-45 translate-y-[6px]" : "w-5 group-hover:w-3"
                  }`}
                />
                <span
                  className={`h-[1px] bg-champagne transition-all duration-300 ${
                    menuOpen ? "w-5 -rotate-45 -translate-y-[6px]" : "w-3 group-hover:w-5"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Immersive Full Screen split-screen Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-black flex overflow-hidden w-full h-[100dvh]"
          >
            {/* Left Column: Cross-fading 4K Image Previews (60% width on Desktop, hidden on Mobile) */}
            <div className="hidden lg:block lg:w-[55%] xl:w-[60%] relative h-full bg-[#030303] overflow-hidden border-r border-white/5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={hoveredPath}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 0.6, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image
                    src={PREVIEW_IMAGES[hoveredPath] || IMG_BRIDE_RED}
                    alt="Menu Preview Portfolio"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
              {/* Light leaks & vignette inside the menu overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black" />
              <div className="absolute inset-0 bg-black/35" />
            </div>

            {/* Right Column: Massive Serif Links (45% on Desktop, 100% on Mobile) */}
            <div className="w-full lg:w-[45%] xl:w-[40%] h-full bg-black flex flex-col justify-between p-8 md:p-16 lg:p-12 xl:p-16 relative z-10 pt-28 md:pt-36">
              
              {/* Menu Links */}
              <div className="flex flex-col gap-1 md:gap-2 justify-center flex-grow select-none">
                {NAV_LINKS.map((link, idx) => {
                  const isHovered = hoveredPath === link.href;
                  return (
                    <motion.div
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.04, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      key={link.name}
                      onMouseEnter={() => setHoveredPath(link.href)}
                      className="group/item relative py-2"
                    >
                      <Link
                        href={link.href}
                        className={`font-serif text-3xl md:text-4xl xl:text-5xl lowercase tracking-wide font-light block transition-all duration-300 ${
                          isHovered ? "text-champagne pl-4" : "text-white/40 hover:text-white"
                        }`}
                      >
                        {link.name}
                      </Link>
                      
                      {/* Delicate sliding gold indicator dots on desktop hover */}
                      {isHovered && (
                        <motion.span
                          layoutId="menuLinkIndicator"
                          className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-champagne rounded-full"
                          transition={{ type: "spring", stiffness: 350, damping: 28 }}
                        />
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* Coordinates & Contact Info Footer */}
              <div className="flex flex-col gap-6 pt-8 border-t border-white/5 mt-auto">
                <div>
                  <span className="font-sans text-[8px] tracking-[0.3em] text-champagne uppercase block mb-2">
                    Studio coordinates
                  </span>
                  <p className="font-sans text-[10px] md:text-[11px] text-text-muted leading-relaxed tracking-wider">
                    Rajahmundry • Hyderabad • Udaipur • Goa • Vizag • Jaipur
                  </p>
                </div>

                <div className="flex justify-between items-center text-[10px] tracking-widest text-text-muted uppercase font-button">
                  <a href="mailto:info@snapshooterstudios.com" className="hover:text-champagne transition-colors">
                    info@snapshooterstudios.com
                  </a>
                  <a href="https://wa.me/919963741742" target="_blank" rel="noopener noreferrer" className="hover:text-champagne transition-colors">
                    WhatsApp Us
                  </a>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

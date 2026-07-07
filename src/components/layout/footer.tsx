"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Instagram, 
  Facebook, 
  Youtube, 
  MessageSquare, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUp,
  Star,
  X
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [showCreditsModal, setShowCreditsModal] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-black border-t border-white/5 pt-20 md:pt-32 pb-12 z-10 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-champagne/2 radial-gradient pointer-events-none filter blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top Banner (CTA) */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-16 md:pb-24 border-b border-white/5">
          <div className="max-w-xl">
            <h2 className="font-serif text-3xl md:text-5xl text-white font-light tracking-wide uppercase leading-tight">
              Let’s write your <br />
              <span className="text-champagne italic">timeless story</span>
            </h2>
            <p className="font-sans text-xs md:text-sm text-text-secondary mt-4 max-w-sm tracking-wide">
              Book a consultation and let’s bring your dream celebration to life.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/contact?consultation=true"
              className="inline-flex items-center justify-center px-8 py-4 bg-champagne text-black font-button text-xs tracking-editorial uppercase hover:bg-white transition-luxury font-medium"
            >
              Book Consultation
            </Link>
            <a
              href="https://wa.me/919963741742"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center border border-champagne/40 rounded-full text-champagne hover:bg-champagne hover:text-black transition-luxury"
              aria-label="WhatsApp Us"
            >
              <MessageSquare className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 md:gap-8 py-16 md:py-24">
          
          {/* Logo & Description */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <Link href="/" className="group flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center border border-champagne/30 rounded-full">
                <span className="font-serif text-xs text-champagne font-bold mt-[1px]">S</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-sm tracking-[0.2em] text-white font-medium uppercase leading-none">
                  SNAP SHOOTER
                </span>
                <span className="font-sans text-[8px] tracking-[0.4em] text-champagne uppercase mt-[3px] leading-none">
                  STUDIOS
                </span>
              </div>
            </Link>
            
            <p className="font-sans text-xs text-text-muted leading-relaxed max-w-xs">
              Crafting timeless memories that last forever. Positioned as India’s premium photography-first wedding experience company.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center border border-white/5 rounded-full text-text-secondary hover:border-champagne hover:text-champagne transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center border border-white/5 rounded-full text-text-secondary hover:border-champagne hover:text-champagne transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center border border-white/5 rounded-full text-text-secondary hover:border-champagne hover:text-champagne transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919963741742"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center border border-white/5 rounded-full text-text-secondary hover:border-champagne hover:text-champagne transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>

            {/* Google Reviews Badge */}
            <div className="mt-2 flex items-center gap-3 p-3 bg-white/[0.02] border border-white/5 rounded-sm max-w-[200px]">
              <div className="flex flex-col">
                <span className="font-serif text-[10px] tracking-editorial text-platinum uppercase font-semibold">Google Reviews</span>
                <div className="flex items-center gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-champagne text-champagne" />
                  ))}
                  <span className="font-mono text-xs text-white font-medium ml-1">5.0</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="font-serif text-sm tracking-editorial text-champagne uppercase font-medium">Quick Links</h3>
            <ul className="flex flex-col gap-3 font-button text-xs text-text-secondary">
              <li><Link href="/photography" className="hover:text-white transition-colors">Photography</Link></li>
              <li><Link href="/wedding-planning" className="hover:text-white transition-colors">Wedding Planning</Link></li>
              <li><Link href="/decoration" className="hover:text-white transition-colors">Decoration</Link></li>
              <li><Link href="/films" className="hover:text-white transition-colors">Films</Link></li>
              <li><Link href="/wedding-stories" className="hover:text-white transition-colors">Wedding Stories</Link></li>
              <li><Link href="/dream-planner" className="hover:text-white transition-colors">Dream Planner</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-6">
            <h3 className="font-serif text-sm tracking-editorial text-champagne uppercase font-medium">Company</h3>
            <ul className="flex flex-col gap-3 font-button text-xs text-text-secondary">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/about#team" className="hover:text-white transition-colors">Our Team</Link></li>
              <li><Link href="/about#awards" className="hover:text-white transition-colors">Awards & Recognition</Link></li>
              <li><Link href="/about#blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/about#careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services (Experiences) */}
          <div className="flex flex-col gap-6">
            <h3 className="font-serif text-sm tracking-editorial text-champagne uppercase font-medium">Services</h3>
            <ul className="flex flex-col gap-3 font-button text-xs text-text-secondary">
              <li><Link href="/films" className="hover:text-white transition-colors">Cinematic Films</Link></li>
              <li><Link href="/photography" className="hover:text-white transition-colors">Drone Coverage</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Live Streaming</Link></li>
              <li><Link href="/photography" className="hover:text-white transition-colors">Premium Albums</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">LED Walls</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Corporate Events</Link></li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="flex flex-col gap-6">
            <h3 className="font-serif text-sm tracking-editorial text-champagne uppercase font-medium">Get In Touch</h3>
            <div className="flex flex-col gap-4 font-sans text-xs text-text-secondary">
              <div className="flex gap-3 items-start">
                <MapPin className="w-4 h-4 text-champagne shrink-0 mt-[2px]" />
                <span className="leading-relaxed">
                  Yalla Satyanarayana Street,<br />
                  Near Kambala Cheruvu,<br />
                  Rajahmundry, AP - 533105
                </span>
              </div>
              <div className="flex gap-3 items-center">
                <Phone className="w-4 h-4 text-champagne shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+919963741742" className="hover:text-white transition-colors">+91 99637 41742</a>
                  <a href="tel:+919121585222" className="hover:text-white transition-colors">+91 91215 85222</a>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <Mail className="w-4 h-4 text-champagne shrink-0" />
                <a href="mailto:snapshooterstudio@gmail.com" className="hover:text-white transition-colors">
                  snapshooterstudio@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <span className="font-sans text-[10px] tracking-widest text-text-muted uppercase">
              &copy; {new Date().getFullYear()} Snap Shooter Studios. All Rights Reserved.
            </span>
            <span className="font-sans text-[10px] tracking-widest text-text-muted uppercase">
              Designed & Developed by{" "}
              <button
                onClick={() => setShowCreditsModal(true)}
                className="text-champagne hover:underline uppercase tracking-widest cursor-pointer focus:outline-none"
              >
                GenZ Creations
              </button>
            </span>
          </div>
          
          {/* Founder Cursive Signature */}
          <div className="flex flex-col items-center md:items-end">
            <span className="font-serif text-sm italic tracking-widest text-champagne opacity-75">
              Potnuri Kiran Kumar
            </span>
            <span className="font-sans text-[8px] tracking-[0.2em] text-text-muted uppercase mt-1">
              Founder Signature
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 flex items-center justify-center border border-white/5 rounded-full text-text-secondary hover:border-champagne hover:text-champagne transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* GenZ Creations Credits Modal */}
      <AnimatePresence>
        {showCreditsModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCreditsModal(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            
            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-sm bg-[#0C0C0C] border border-champagne/20 p-8 rounded-sm shadow-2xl z-10 text-center"
            >
              <button
                onClick={() => setShowCreditsModal(false)}
                className="absolute top-4 right-4 text-text-muted hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
              
              <span className="font-sans text-[9px] tracking-[0.3em] text-champagne uppercase font-bold">
                CREATIVE STUDIO
              </span>
              
              <h3 className="font-serif text-2xl text-white tracking-widest uppercase mt-3">
                GenZ Creations
              </h3>
              
              <div className="w-12 h-[1px] bg-champagne/30 mx-auto my-6" />
              
              <div className="flex flex-col gap-4 text-left max-w-[240px] mx-auto">
                <div className="flex flex-col">
                  <span className="font-sans text-[8px] text-text-muted uppercase tracking-widest">
                    Lead Designer & Developer
                  </span>
                  <span className="font-serif text-base text-white font-light tracking-wide mt-1">
                    Satish Kumar Kadali
                  </span>
                </div>
                
                <div className="flex flex-col">
                  <span className="font-sans text-[8px] text-text-muted uppercase tracking-widest">
                    Direct Contact
                  </span>
                  <a
                    href="tel:+919505683584"
                    className="font-mono text-xs text-text-secondary hover:text-champagne transition-colors mt-1"
                  >
                    +91 95056 83584
                  </a>
                </div>
                
                <div className="flex flex-col">
                  <span className="font-sans text-[8px] text-text-muted uppercase tracking-widest">
                    Email Correspondence
                  </span>
                  <a
                    href="mailto:prakashkadali3723@gmail.com"
                    className="font-mono text-xs text-text-secondary hover:text-champagne transition-colors mt-1 break-all"
                  >
                    prakashkadali3723@gmail.com
                  </a>
                </div>
              </div>
              
              <button
                onClick={() => setShowCreditsModal(false)}
                className="w-full mt-8 py-3 border border-white/10 text-white font-button text-[10px] tracking-editorial uppercase hover:border-champagne hover:text-champagne transition-colors"
              >
                Back To Site
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}

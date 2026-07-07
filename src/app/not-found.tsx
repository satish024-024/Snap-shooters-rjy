"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Film } from "lucide-react";
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden flex flex-col justify-between">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center py-32 relative z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-champagne/2 pointer-events-none filter blur-[80px]" />

        <div className="max-w-xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-text-secondary bg-white/[0.01] mb-8">
              <Film className="w-4 h-4" />
            </div>

            <span className="font-mono text-xs tracking-[0.3em] text-champagne uppercase font-semibold mb-4">
              404 // Lost in Frame
            </span>

            <h1 className="font-serif text-3xl md:text-5xl text-white font-light tracking-wide uppercase mb-6 leading-tight">
              Page Not Found
            </h1>

            <p className="font-sans text-xs md:text-sm text-text-muted leading-relaxed max-w-sm mb-12">
              The page you are looking for has either been archived or does not exist in our visual collections.
            </p>

            <Link
              href="/"
              className="inline-flex items-center gap-3 px-6 py-3 border border-white/20 text-white font-button text-xs tracking-editorial uppercase hover:bg-white hover:text-black transition-luxury"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Return To Experience
            </Link>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

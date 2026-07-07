"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles } from "lucide-react";
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";

interface ComingSoonProps {
  title: string;
  subtitle: string;
  description: string;
}

export default function ComingSoon({ title, subtitle, description }: ComingSoonProps) {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden flex flex-col justify-between">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center py-32 relative z-10">
        {/* Ambient lighting blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-champagne/2 pointer-events-none filter blur-[80px]" />

        <div className="max-w-xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            <div className="w-10 h-10 rounded-full border border-champagne/20 flex items-center justify-center text-champagne bg-white/[0.01] mb-8">
              <Sparkles className="w-4 h-4" />
            </div>

            <span className="font-sans text-[10px] md:text-xs tracking-[0.3em] text-champagne uppercase font-semibold mb-4">
              {subtitle}
            </span>

            <h1 className="font-serif text-3xl md:text-5xl text-white font-light tracking-wide uppercase mb-6 leading-tight">
              {title}
            </h1>

            <p className="font-sans text-xs md:text-sm text-text-muted leading-relaxed max-w-sm mb-12">
              {description}
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

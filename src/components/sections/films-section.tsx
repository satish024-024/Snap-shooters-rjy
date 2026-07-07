"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Clock } from "lucide-react";

interface CinematicFilm {
  id: string;
  title: string;
  couple: string;
  location: string;
  duration: string;
  videoUrl: string;
  coverImage: string;
  description: string;
}

const FILMS_DATA: CinematicFilm[] = [
  {
    id: "film-1",
    title: "Vamsi & Haritha | Godavari Arches",
    couple: "Yantrapati Vamsi & Haritha",
    location: "Rajahmundry, AP",
    duration: "4:15",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-bride-and-groom-holding-hands-40131-large.mp4",
    coverImage: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1200",
    description: "An elegant, Slow-Motion epic documented across the heritage bridges of Rajahmundry, showcasing the rhythm of traditional customs and pure emotion.",
  },
  {
    id: "film-2",
    title: "Sai Kiran & Priya | Palace Golden Hour",
    couple: "Sai Kiran & Priya",
    location: "Udaipur, Rajasthan",
    duration: "3:40",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-wedding-couple-dancing-slowly-under-warm-lights-42226-large.mp4",
    coverImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600",
    description: "A royal documentary matching Udaipur's heritage architectural silhouettes with traditional sitar instrumentation.",
  },
  {
    id: "film-3",
    title: "Rohit & Anusha | The Modern Symphony",
    couple: "Rohit & Anusha",
    location: "Hyderabad, Telangana",
    duration: "5:10",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-young-wedding-couple-dancing-slowly-42215-large.mp4",
    coverImage: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=600",
    description: "Capturing a fast-paced Bollywood style evening reception filled with neon LED installations and raw musical energy.",
  }
];

export default function FilmsSection() {
  const [activeFilm, setActiveFilm] = useState<CinematicFilm | null>(null);

  return (
    <section className="relative bg-black py-24 md:py-40 z-10 overflow-hidden">
      {/* Subtle backdrop circle lights */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-champagne/1 pointer-events-none filter blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Headings */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <span className="font-sans text-[10px] md:text-xs tracking-[0.3em] text-champagne uppercase font-semibold">
            CINEMATIC WEDDING FILMS
          </span>
          <h2 className="font-serif text-3xl md:text-6xl text-white font-light tracking-wide uppercase mt-4">
            Relive the Magic
          </h2>
          <p className="font-sans text-xs md:text-sm text-text-muted mt-6 max-w-md leading-relaxed">
            Our wedding films are shot using high-end anamorphic gear and directed like feature cinema. We capture real voice transcripts, laughter, and musical layers.
          </p>
        </div>

        {/* Cinematic Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Featured Film (Movie Poster block) - Col Span 7 */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setActiveFilm(FILMS_DATA[0])}
              className="relative aspect-[16/9] w-full overflow-hidden border border-white/5 group cursor-pointer"
            >
              <Image
                src={FILMS_DATA[0].coverImage}
                alt={FILMS_DATA[0].title}
                fill
                sizes="(max-w-7xl) 60vw, 100vw"
                className="object-cover scale-[1.01] hover-zoom-img"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500 z-10" />

              {/* Play trigger overlay */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8 z-20">
                <div className="flex justify-between items-start">
                  <span className="font-sans text-[8px] text-white/50 border border-white/10 px-2 py-0.5 uppercase tracking-widest bg-black/40">
                    Featured Showreel
                  </span>
                  <span className="flex items-center gap-1 font-mono text-[10px] text-white/80">
                    <Clock className="w-3.5 h-3.5 text-champagne" /> {FILMS_DATA[0].duration} Min
                  </span>
                </div>

                <div className="flex items-center justify-center absolute inset-0">
                  <div className="w-16 h-16 rounded-full border border-champagne text-champagne flex items-center justify-center bg-black/60 group-hover:bg-champagne group-hover:text-black transition-luxury">
                    <Play className="w-5 h-5 fill-current ml-1" />
                  </div>
                </div>

                <div className="text-left">
                  <h3 className="font-serif text-2xl md:text-3xl text-white font-light uppercase tracking-wide">
                    {FILMS_DATA[0].couple}
                  </h3>
                  <p className="font-sans text-[10px] text-text-secondary uppercase tracking-widest mt-1">
                    {FILMS_DATA[0].location}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar Films List - Col Span 5 */}
          <div className="lg:col-span-5 flex flex-col gap-8 md:gap-12">
            {FILMS_DATA.slice(1).map((film, idx) => (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
                key={film.id}
                onClick={() => setActiveFilm(film)}
                className="group flex gap-4 md:gap-6 items-center border-b border-white/5 pb-8 cursor-pointer"
              >
                {/* Micro Thumbnail */}
                <div className="relative w-28 md:w-36 aspect-[16/10] overflow-hidden border border-white/5 shrink-0">
                  <Image
                    src={film.coverImage}
                    alt={film.title}
                    fill
                    className="object-cover hover-zoom-img"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                    <Play className="w-6 h-6 text-white group-hover:text-champagne transition-colors" />
                  </div>
                </div>

                {/* Details */}
                <div className="flex-grow">
                  <div className="flex justify-between items-center text-[9px] tracking-widest text-text-muted uppercase">
                    <span>{film.location}</span>
                    <span className="flex items-center gap-1 font-mono">{film.duration} Min</span>
                  </div>
                  <h3 className="font-serif text-lg text-white group-hover:text-champagne transition-colors mt-2 uppercase font-light">
                    {film.couple}
                  </h3>
                  <p className="font-sans text-[10px] text-text-muted mt-2 line-clamp-2 leading-relaxed">
                    {film.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* Fullscreen Video Lightbox Overlay */}
      <AnimatePresence>
        {activeFilm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center p-6 md:p-12"
          >
            {/* Close trigger */}
            <button
              onClick={() => setActiveFilm(null)}
              className="absolute top-6 right-6 z-[110] w-12 h-12 flex items-center justify-center border border-white/10 rounded-full text-white hover:border-champagne hover:text-champagne transition-colors"
              aria-label="Close video"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Video Box */}
            <div className="relative w-full max-w-5xl aspect-[16/9] border border-white/10 overflow-hidden bg-black">
              <video
                src={activeFilm.videoUrl}
                autoPlay
                controls
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

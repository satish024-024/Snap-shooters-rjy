"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ArrowUpRight, X, MapPin } from "lucide-react";
import { LOVE_STORIES, LoveStory } from "@/constants/data";

export default function LoveStories() {
  const [activeStory, setActiveStory] = useState<LoveStory | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const openStoryModal = (story: LoveStory) => {
    setActiveStory(story);
    setIsVideoPlaying(false);
  };

  const closeStoryModal = () => {
    setActiveStory(null);
    setIsVideoPlaying(false);
  };

  return (
    <section className="relative bg-[#0A0A0A] py-24 md:py-40 border-t border-b border-white/5 z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
          <div className="max-w-xl">
            <span className="font-sans text-[10px] md:text-xs tracking-[0.3em] text-champagne uppercase font-semibold">
              REAL CELEBRATIONS
            </span>
            <h2 className="font-serif text-3xl md:text-6xl text-white font-light tracking-wide uppercase mt-4">
              Love Stories
            </h2>
          </div>
          <Link
            href="/wedding-stories"
            className="group inline-flex items-center gap-2 font-button text-xs tracking-editorial text-champagne uppercase hover:text-white transition-colors mt-2"
          >
            View All Stories
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        {/* Asymmetrical Layout (Matching Reference Image) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Block: Massive Landscape Story Card (Col span 6) */}
          <div className="lg:col-span-6 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => openStoryModal(LOVE_STORIES[0])}
              className="relative flex-grow aspect-[4/3] lg:aspect-auto w-full overflow-hidden border border-white/5 group cursor-pointer"
            >
              <Image
                src={LOVE_STORIES[0].coverImage}
                alt={LOVE_STORIES[0].couple}
                fill
                sizes="(max-w-7xl) 50vw, 100vw"
                className="object-cover hover-zoom-img"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/10 z-10" />
              <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
                <div className="flex gap-2 mb-3">
                  {LOVE_STORIES[0].tags.map(t => (
                    <span key={t} className="font-sans text-[8px] text-white/50 border border-white/10 px-2 py-0.5 uppercase tracking-widest bg-black/20">{t}</span>
                  ))}
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-white font-light tracking-wide uppercase">
                  {LOVE_STORIES[0].couple}
                </h3>
                <div className="flex items-center gap-4 text-text-muted text-[10px] tracking-widest uppercase mt-2">
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-champagne" /> {LOVE_STORIES[0].city}</span>
                  <span>{LOVE_STORIES[0].venue}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Middle Block: Tall Story Card (Col span 3) */}
          <div className="lg:col-span-3 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => openStoryModal(LOVE_STORIES[1])}
              className="relative flex-grow aspect-[3/4] lg:aspect-auto w-full min-h-[450px] overflow-hidden border border-white/5 group cursor-pointer"
            >
              <Image
                src={LOVE_STORIES[1].coverImage}
                alt={LOVE_STORIES[1].couple}
                fill
                sizes="(max-w-7xl) 25vw, 100vw"
                className="object-cover hover-zoom-img"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/10 z-10" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                <div className="flex gap-2 mb-3">
                  {LOVE_STORIES[1].tags.map(t => (
                    <span key={t} className="font-sans text-[8px] text-white/50 border border-white/10 px-2 py-0.5 uppercase tracking-widest bg-black/20">{t}</span>
                  ))}
                </div>
                <h3 className="font-serif text-xl md:text-2xl text-white font-light tracking-wide uppercase">
                  {LOVE_STORIES[1].couple}
                </h3>
                <div className="flex items-center gap-2 text-text-muted text-[9px] tracking-widest uppercase mt-2">
                  <MapPin className="w-2.5 h-2.5 text-champagne" /> {LOVE_STORIES[1].city}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Block: 2 Stacked Horizontal Cards (Col span 3) */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            {LOVE_STORIES.slice(2, 4).map((story, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 + 0.3, ease: [0.16, 1, 0.3, 1] }}
                key={story.id}
                onClick={() => openStoryModal(story)}
                className="relative flex-1 min-h-[210px] overflow-hidden border border-white/5 group cursor-pointer flex flex-col justify-end p-6"
              >
                <Image
                  src={story.coverImage}
                  alt={story.couple}
                  fill
                  sizes="(max-w-7xl) 25vw, 100vw"
                  className="object-cover hover-zoom-img"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/10 z-10" />
                
                {/* Visual Play Icon for small hover feedback */}
                <div className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center bg-black/40 group-hover:border-champagne/60 group-hover:text-champagne transition-colors">
                  <Play className="w-3.5 h-3.5 fill-current text-white/80 group-hover:text-champagne border-none" />
                </div>

                <div className="relative z-20">
                  <span className="font-sans text-[8px] text-champagne uppercase tracking-widest block mb-2">{story.city}</span>
                  <h3 className="font-serif text-lg text-white uppercase font-light tracking-wide">{story.couple}</h3>
                  <span className="font-sans text-[8px] text-white/40 uppercase tracking-widest block mt-1">{story.venue}</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* Fullscreen Magazine Modal Drawer for Story Details */}
      <AnimatePresence>
        {activeStory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-black flex justify-center py-10 px-6 md:px-12"
          >
            <div className="max-w-4xl w-full flex flex-col gap-10">
              {/* Close Bar */}
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <span className="font-serif text-sm tracking-editorial text-champagne uppercase">Love Stories // Editorial View</span>
                <button
                  onClick={closeStoryModal}
                  className="w-10 h-10 flex items-center justify-center border border-white/5 rounded-full text-white hover:border-champagne hover:text-champagne transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Cover Image/Video Section */}
              <div className="relative w-full aspect-[16/9] overflow-hidden border border-white/5">
                {isVideoPlaying ? (
                  <video
                    src={activeStory.filmUrl}
                    autoPlay
                    controls
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <>
                    <Image
                      src={activeStory.coverImage}
                      alt={activeStory.couple}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center z-10">
                      <button
                        onClick={() => setIsVideoPlaying(true)}
                        className="w-16 h-16 rounded-full border border-champagne text-champagne flex items-center justify-center bg-black/60 hover:bg-champagne hover:text-black transition-luxury"
                      >
                        <Play className="w-6 h-6 fill-current text-champagne hover:text-black ml-1" />
                      </button>
                    </div>
                  </>
                )}
              </div>

              {/* Story Narrative Details */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                
                {/* Meta details */}
                <div className="md:col-span-4 flex flex-col gap-6 font-sans text-xs border-r border-white/5 pr-6">
                  <div>
                    <span className="text-text-muted uppercase tracking-widest">The Couple</span>
                    <h4 className="font-serif text-lg text-white font-light mt-1">{activeStory.couple}</h4>
                  </div>
                  <div>
                    <span className="text-text-muted uppercase tracking-widest">The Venue</span>
                    <p className="text-text-secondary mt-1">{activeStory.venue}, {activeStory.city}</p>
                  </div>
                  <div>
                    <span className="text-text-muted uppercase tracking-widest">The Celebration</span>
                    <p className="text-text-secondary mt-1">{activeStory.date}</p>
                  </div>
                </div>

                {/* Main text copy */}
                <div className="md:col-span-8 flex flex-col gap-6">
                  <h3 className="font-serif text-2xl text-champagne uppercase font-light">The Story</h3>
                  <p className="font-serif text-lg md:text-xl text-platinum leading-relaxed italic font-light">
                    “{activeStory.story}”
                  </p>
                  <p className="font-sans text-sm text-text-muted leading-relaxed">
                    {activeStory.celebration}
                  </p>
                </div>
              </div>

              {/* Mini Album Grid */}
              <div className="flex flex-col gap-4 mt-8">
                <span className="font-sans text-[10px] text-text-muted uppercase tracking-widest">The Album Selects</span>
                <div className="grid grid-cols-3 gap-4">
                  {activeStory.albumImages.map((img, i) => (
                    <div key={i} className="relative aspect-[3/2] w-full overflow-hidden border border-white/5">
                      <Image
                        src={img}
                        alt="album image"
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="h-10" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

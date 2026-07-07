import React from "react";
import Navigation from "@/components/layout/navigation";
import Hero from "@/components/sections/hero";
import SignatureMoments from "@/components/sections/signature-moments";
import LoveStories from "@/components/sections/love-stories";
import FilmsSection from "@/components/sections/films-section";
import CraftedExperiences from "@/components/sections/crafted-experiences";
import PlanningPreview from "@/components/sections/planning-preview";
import DecorationPreview from "@/components/sections/decoration-preview";
import IndiaMap from "@/components/sections/india-map";
import NikonBadge from "@/components/sections/nikon-badge";
import Testimonials from "@/components/sections/testimonials";
import InstagramReel from "@/components/sections/instagram-reel";
import Journey from "@/components/sections/journey";
import CtaBanner from "@/components/sections/cta-banner";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden flex flex-col">
      {/* Fixed top Header Navigation */}
      <Navigation />

      {/* Main Exhibition Layout */}
      <main className="flex-grow">
        {/* 1. Evolving full-screen media Hero with Scroll Expansion */}
        <Hero
          mediaType="video"
          mediaSrc="/hero_wedding.mp4"
          bgImageSrc="/indian_marriage_bg.png"
          scrollToExpand="SCROLL TO EXPLORE"
        >
          {/* 2. Signature Moments (asymmetrical curated 6-8 iconic photos) */}
          <SignatureMoments />
          <hr className="hairline-divider" />

          {/* 3. Love Stories (narrative cards: The Story, The Couple, The Venue...) */}
          <LoveStories />
          <hr className="hairline-divider" />

          {/* 4. Cinematic Films (movie-poster layout, fullscreen player) */}
          <FilmsSection />
          <hr className="hairline-divider" />

          {/* 5. Crafted Experiences (asymmetric services grid) */}
          <CraftedExperiences />
          <hr className="hairline-divider" />

          {/* 6. Planning Preview (bespoke wedding planning coordinates) */}
          <PlanningPreview />
          <hr className="hairline-divider" />

          {/* 7. Decoration Showcase (floral design & styling canopies) */}
          <DecorationPreview />
          <hr className="hairline-divider" />

          {/* 8. Interactive India Map (glowing coordinates & travel paths) */}
          <IndiaMap />
          <hr className="hairline-divider" />

          {/* 9. Nikon Recommended & Founder Story (Kiran Kumar profile & quotes) */}
          <NikonBadge />
          <hr className="hairline-divider" />

          {/* 10. Client Testimonials (video reviews & ratings) */}
          <Testimonials />
          <hr className="hairline-divider" />

          {/* 11. Instagram Feed (horizontal infinite scroll reel) */}
          <InstagramReel />
          <hr className="hairline-divider" />

          {/* 12. Wedding Journey & Booking Timeline (chronological steps & phase indicators) */}
          <Journey />
          <hr className="hairline-divider" />

          {/* 13. Call to Action banner */}
          <CtaBanner />
        </Hero>
      </main>

      {/* Luxury Footer */}
      <Footer />
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";

interface FormState {
  functions: string[];
  candidPhoto: boolean;
  cinematicFilm: boolean;
  traditionalCoverage: boolean;
  droneAereal: boolean;
  sameDayEdit: boolean;
  stylingPreference: string;
  guestCount: string;
  weddingDate: string;
  location: string;
  fullName: string;
  phone: string;
  email: string;
}

const INITIAL_STATE: FormState = {
  functions: [],
  candidPhoto: true,
  cinematicFilm: true,
  traditionalCoverage: false,
  droneAereal: false,
  sameDayEdit: false,
  stylingPreference: "",
  guestCount: "",
  weddingDate: "",
  location: "",
  fullName: "",
  phone: "",
  email: "",
};

const FUNCTION_OPTIONS = [
  { name: "Pre-Wedding Shoot", image: "/images/sunset_couple.png" },
  { name: "Engagement Ceremony", image: "/images/engagement_rings.png" },
  { name: "Sangeet & Cocktail Night", image: "/images/couple_dance.png" },
  { name: "Mehendi & Haldi Ceremony", image: "/images/bride_prep.png" },
  { name: "The Wedding (Muhurtham)", image: "/images/union_garlands.png" },
  { name: "Reception Party", image: "/images/decor_reception.png" },
];

const CREW_OPTIONS = [
  {
    id: "candidPhoto",
    name: "Candid Fine-Art Photography",
    desc: "Luxury portrait frames, bridal details, candid snapshots.",
    image: "/images/bride_red.png"
  },
  {
    id: "cinematicFilm",
    name: "Cinematic Wedding Films",
    desc: "Creative direction, cinema grade cameras, storybook editing.",
    image: "/images/couple_palace.png"
  },
  {
    id: "traditionalCoverage",
    name: "Traditional Photo & Video Log",
    desc: "Full stage coverage, archive documentation.",
    image: "/images/founder_portrait.png"
  },
  {
    id: "droneAereal",
    name: "Aerial 4K Drone Pilot",
    desc: "Bespoke aerial landscapes, grand venue fly-overs.",
    image: "/images/floral_mandap.png"
  },
  {
    id: "sameDayEdit",
    name: "Same-Day Edit Video Reel",
    desc: "Highlights trailer shown live at the reception night.",
    image: "/images/detail_rings.png"
  }
];

const STYLING_OPTIONS = [
  { id: "royal", name: "Royal Palace Stage", desc: "Regal templates, gold pillars, red & white roses", image: "/images/decor_palace.png" },
  { id: "temple", name: "Temple Marigold Chandelier", desc: "Traditional South Indian style, marigolds, brass fixtures", image: "/images/decor_temple.png" },
  { id: "beach", name: "Minimalist Beach Canopy", desc: "Pastel orchids, peach drapes, ocean breeze aesthetic", image: "/images/decor_beach.png" },
  { id: "night", name: "Vivid Night Lights", desc: "Contemporary starry fairy light drops & candlelight", image: "/images/decor_reception.png" },
  { id: "none", name: "None (Visual Coverage Only)", desc: "No decoration planning required from Snap Shooters", image: "/images/founder_portrait.png" },
];

export default function DreamPlannerPage() {
  const [formData, setFormData] = useState<FormState>(INITIAL_STATE);
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const totalSteps = 5;

  const handleCheckboxChange = (option: string) => {
    const isSelected = formData.functions.includes(option);
    const updated = isSelected
      ? formData.functions.filter((item) => item !== option)
      : [...formData.functions, option];
    setFormData({ ...formData, functions: updated });
    if (errors.functions) {
      setErrors({ ...errors, functions: "" });
    }
  };

  const handleFieldChange = <K extends keyof FormState>(field: K, value: FormState[K]) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: "" });
    }
  };

  const validateStep = (currentStep: number): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (currentStep === 1) {
      if (formData.functions.length === 0) {
        newErrors.functions = "Please select at least one ceremony function.";
      }
      if (!formData.weddingDate) {
        newErrors.weddingDate = "Wedding date is required.";
      }
      if (!formData.location.trim()) {
        newErrors.location = "Wedding location city is required.";
      }
    }

    if (currentStep === 3) {
      if (!formData.stylingPreference) {
        newErrors.stylingPreference = "Please select your styling or decoration preference.";
      }
      if (!formData.guestCount) {
        newErrors.guestCount = "Please estimate your expected guest count.";
      }
    }

    if (currentStep === 4) {
      if (!formData.fullName.trim()) {
        newErrors.fullName = "Your full name is required.";
      }
      if (!formData.phone.trim()) {
        newErrors.phone = "Your WhatsApp phone number is required.";
      }
      if (formData.email.trim() && formData.email.toLowerCase() !== "none") {
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = "Please enter a valid email address.";
        }
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => Math.min(prev + 1, totalSteps));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const generateWhatsAppLink = () => {
    if (!validateStep(4)) return;

    const crewList: string[] = [];
    if (formData.candidPhoto) crewList.push("Candid Photography");
    if (formData.cinematicFilm) crewList.push("Cinematic Films");
    if (formData.traditionalCoverage) crewList.push("Traditional Photo & Video");
    if (formData.droneAereal) crewList.push("Aerial Drone (4K)");
    if (formData.sameDayEdit) crewList.push("Same-Day Edit Video Reel");

    const selectedStyle = STYLING_OPTIONS.find((o) => o.id === formData.stylingPreference)?.name || formData.stylingPreference;

    const message = `Hello Snap Shooter Studios, I would like to request a bespoke quote using your Experience Builder.

*My Details:*
• Name: ${formData.fullName}
• Phone: ${formData.phone}
• Email: ${formData.email}

*Event Details:*
• Main Date: ${formData.weddingDate}
• Location: ${formData.location}
• Expected Guests: ${formData.guestCount}

• Selections:
• Functions: ${formData.functions.join(", ")}
• Crew Coverage: ${crewList.join(", ") || "None"}
• Styling Department: ${selectedStyle}

Looking forward to discussing our wedding storyboard!`;

    const encodedText = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=919505683584&text=${encodedText}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden flex flex-col font-sans selection:bg-champagne selection:text-black">
      <Navigation />

      {/* Main Container */}
      <main className="flex-grow pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        
        {/* Step Indicator Progress Bar */}
        <div className="w-full mb-12 animate-fade-in">
          <div className="flex justify-between items-center text-[10px] tracking-[0.25em] text-champagne uppercase font-medium mb-3">
            <span>Bespoke Experience Builder</span>
            <span>Step {step} of {totalSteps}</span>
          </div>
          <div className="w-full h-[1px] bg-white/10 relative">
            <motion.div
              className="absolute top-0 left-0 h-full bg-champagne"
              initial={{ width: "20%" }}
              animate={{ width: `${(step / totalSteps) * 100}%` }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          </div>
        </div>

        {/* Stepper Body */}
        <div className="min-h-[450px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            
            {/* STEP 1: Functions & Location Details */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <div className="space-y-2">
                  <h2 className="font-serif text-3xl md:text-4xl text-white font-light tracking-wide uppercase text-champagne">
                    Select Your Ceremonies
                  </h2>
                  <p className="text-sm text-white/50 tracking-wide">
                    Choose the wedding ceremonies and celebrations you want us to cover.
                  </p>
                </div>

                {/* 4K Image Selection Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                  {FUNCTION_OPTIONS.map((opt) => {
                    const isSelected = formData.functions.includes(opt.name);
                    return (
                      <button
                        key={opt.name}
                        type="button"
                        onClick={() => handleCheckboxChange(opt.name)}
                        className={`relative aspect-[4/3] rounded-lg overflow-hidden group border text-left transition-all duration-500 ${
                          isSelected
                            ? "border-champagne shadow-[0_0_20px_rgba(201,168,106,0.15)] scale-[1.02]"
                            : "border-white/10 hover:border-white/30"
                        }`}
                      >
                        {/* Image background */}
                        <div className="absolute inset-0 z-0">
                          <Image
                            src={opt.image}
                            alt={opt.name}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                        </div>

                        {/* Selection Checkbox Ring */}
                        <div className="absolute top-3 right-3 z-10">
                          <div
                            className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                              isSelected ? "border-champagne bg-champagne" : "border-white/40 bg-black/45 backdrop-blur-sm"
                            }`}
                          >
                            {isSelected && (
                              <svg viewBox="0 0 24 24" className="w-3 h-3 fill-none stroke-black stroke-[3.5]">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            )}
                          </div>
                        </div>

                        {/* Title details */}
                        <div className="absolute bottom-4 left-4 right-4 z-10">
                          <span className="font-serif text-sm tracking-wide uppercase font-light text-white block drop-shadow-md group-hover:text-champagne transition-colors duration-300">
                            {opt.name}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
                {errors.functions && (
                  <p className="text-red-400 text-xs tracking-wide">{errors.functions}</p>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-white/5">
                  <div className="space-y-2">
                    <label className="font-serif text-sm tracking-widest text-champagne uppercase font-medium block">
                      Main Wedding Date
                    </label>
                    <input
                      type="date"
                      value={formData.weddingDate}
                      onChange={(e) => handleFieldChange("weddingDate", e.target.value)}
                      onClick={(e) => {
                        try {
                          e.currentTarget.showPicker();
                        } catch {
                          // Browser fallback
                        }
                      }}
                      onFocus={(e) => {
                        try {
                          e.currentTarget.showPicker();
                        } catch {
                          // Browser fallback
                        }
                      }}
                      style={{ colorScheme: "dark" }}
                      className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-champagne transition-colors font-sans text-sm cursor-pointer"
                    />
                    {errors.weddingDate && (
                      <p className="text-red-400 text-xs tracking-wide">{errors.weddingDate}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="font-serif text-sm tracking-widest text-champagne uppercase font-medium block">
                      Wedding Location (City)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Rajahmundry, Goa, Udaipur"
                      value={formData.location}
                      onChange={(e) => handleFieldChange("location", e.target.value)}
                      className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-white/25 focus:outline-none focus:border-champagne transition-colors font-sans text-sm"
                    />
                    {errors.location && (
                      <p className="text-red-400 text-xs tracking-wide">{errors.location}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 2: Creative & Crew Settings */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <div className="space-y-2">
                  <h2 className="font-serif text-3xl md:text-4xl text-white font-light tracking-wide uppercase text-champagne">
                    Define Creative Crew
                  </h2>
                  <p className="text-sm text-white/50 tracking-wide">
                    Customize your photo and video team deliverables. Candid storytelling is the heart of our craft.
                  </p>
                </div>

                {/* 4K Image Selection Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                  {CREW_OPTIONS.map((opt) => {
                    const isSelected = formData[opt.id as keyof FormState] === true;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => handleFieldChange(opt.id as keyof FormState, !isSelected)}
                        className={`relative aspect-[4/3] rounded-lg overflow-hidden group border text-left transition-all duration-500 ${
                          isSelected
                            ? "border-champagne shadow-[0_0_20px_rgba(201,168,106,0.15)] scale-[1.02]"
                            : "border-white/10 hover:border-white/30"
                        }`}
                      >
                        {/* Image background */}
                        <div className="absolute inset-0 z-0">
                          <Image
                            src={opt.image}
                            alt={opt.name}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                        </div>

                        {/* Checkbox selector */}
                        <div className="absolute top-3 right-3 z-10">
                          <div
                            className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${
                              isSelected ? "border-champagne bg-champagne" : "border-white/40 bg-black/45 backdrop-blur-sm"
                            }`}
                          >
                            {isSelected && (
                              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-black stroke-[3.5]">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            )}
                          </div>
                        </div>

                        {/* Title & Desc */}
                        <div className="absolute bottom-4 left-4 right-4 z-10 space-y-1">
                          <span className="font-serif text-sm tracking-wide uppercase font-light text-white block drop-shadow-md group-hover:text-champagne transition-colors duration-300">
                            {opt.name}
                          </span>
                          <span className="text-[10px] text-white/60 font-sans block leading-normal line-clamp-2">
                            {opt.desc}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* STEP 3: Styling Preferences & Guests */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <div className="space-y-2">
                  <h2 className="font-serif text-3xl md:text-4xl text-white font-light tracking-wide uppercase text-champagne">
                    Bespoke Styling Department
                  </h2>
                  <p className="text-sm text-white/50 tracking-wide">
                    Coordinate decoration layouts. Our styling leads consult on set design templates, lighting vectors, and floral curation.
                  </p>
                </div>

                {/* 4K Image Selection Grid */}
                <div className="space-y-3">
                  <label className="font-serif text-sm tracking-widest text-champagne uppercase font-medium block mb-2">
                    Styling Coordinate Palette
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    {STYLING_OPTIONS.map((style) => {
                      const isSelected = formData.stylingPreference === style.id;
                      return (
                        <button
                          key={style.id}
                          type="button"
                          onClick={() => handleFieldChange("stylingPreference", style.id)}
                          className={`relative aspect-[4/3] rounded-lg overflow-hidden group border text-left transition-all duration-500 ${
                            isSelected
                              ? "border-champagne shadow-[0_0_20px_rgba(201,168,106,0.15)] scale-[1.02]"
                              : "border-white/10 hover:border-white/30"
                          }`}
                        >
                          {/* Image background */}
                          <div className="absolute inset-0 z-0">
                            <Image
                              src={style.image}
                              alt={style.name}
                              fill
                              sizes="(max-width: 768px) 100vw, 33vw"
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                          </div>

                          {/* Checkbox radio */}
                          <div className="absolute top-3 right-3 z-10">
                            <div
                              className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                                isSelected ? "border-champagne bg-champagne" : "border-white/40 bg-black/45 backdrop-blur-sm"
                              }`}
                            >
                              {isSelected && (
                                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-black stroke-[3.5]">
                                  <polyline points="20 6 9 17 4 12" />
                                </svg>
                              )}
                            </div>
                          </div>

                          {/* Title & Desc */}
                          <div className="absolute bottom-4 left-4 right-4 z-10 space-y-1">
                            <span className="font-serif text-sm tracking-wide uppercase font-light text-white block drop-shadow-md group-hover:text-champagne transition-colors duration-300">
                              {style.name}
                            </span>
                            <span className="text-[10px] text-white/60 font-sans block leading-normal line-clamp-2">
                              {style.desc}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                  {errors.stylingPreference && (
                    <p className="text-red-400 text-xs tracking-wide">{errors.stylingPreference}</p>
                  )}
                </div>

                <div className="space-y-3 pt-6 border-t border-white/5">
                  <label className="font-serif text-sm tracking-widest text-champagne uppercase font-medium block">
                    Expected Guest Count
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                    {["< 200 (Intimate)", "200 - 600 (Grand)", "600 - 1500 (Royal)", "1500+ (Mega)", "None / Not Decided"].map((opt) => {
                      const isSelected = formData.guestCount === opt;
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => handleFieldChange("guestCount", opt)}
                          className={`p-4 rounded-lg border font-sans text-xs tracking-wide transition-all duration-300 ${
                            isSelected
                              ? "border-champagne bg-champagne/[0.03] text-champagne"
                              : "border-white/10 bg-white/[0.01] hover:border-white/25 text-white/70"
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                  {errors.guestCount && (
                    <p className="text-red-400 text-xs tracking-wide">{errors.guestCount}</p>
                  )}
                </div>
              </motion.div>
            )}

            {/* STEP 4: Personal Details */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <div className="space-y-2">
                  <h2 className="font-serif text-3xl md:text-4xl text-white font-light tracking-wide uppercase text-champagne">
                    Contact Coordinates
                  </h2>
                  <p className="text-sm text-white/50 tracking-wide">
                    Provide your details. Planners consult on set setups and photographer crews bespoke.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="font-serif text-sm tracking-widest text-champagne uppercase font-medium block">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      value={formData.fullName}
                      onChange={(e) => handleFieldChange("fullName", e.target.value)}
                      className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-white/20 focus:outline-none focus:border-champagne transition-colors font-sans text-sm"
                    />
                    {errors.fullName && (
                      <p className="text-red-400 text-xs tracking-wide">{errors.fullName}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div className="space-y-2">
                      <label className="font-serif text-sm tracking-widest text-champagne uppercase font-medium block">
                        WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. +91 95056 83584"
                        value={formData.phone}
                        onChange={(e) => handleFieldChange("phone", e.target.value)}
                        className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-white/20 focus:outline-none focus:border-champagne transition-colors font-sans text-sm"
                      />
                      {errors.phone && (
                        <p className="text-red-400 text-xs tracking-wide">{errors.phone}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="font-serif text-sm tracking-widest text-champagne uppercase font-medium block">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. name@example.com"
                        value={formData.email}
                        onChange={(e) => handleFieldChange("email", e.target.value)}
                        className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-white/20 focus:outline-none focus:border-champagne transition-colors font-sans text-sm"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs tracking-wide">{errors.email}</p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 5: Summary & Submit */}
            {step === 5 && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <div className="space-y-2">
                  <h2 className="font-serif text-3xl md:text-4xl text-white font-light tracking-wide uppercase text-champagne">
                    Review Selections
                  </h2>
                  <p className="text-sm text-white/50 tracking-wide">
                    Confirm your configuration parameters. Submitting will launch WhatsApp with your pre-filled inquiry.
                  </p>
                </div>

                {/* Review Board */}
                <div className="border border-white/10 bg-white/[0.01] rounded-lg divide-y divide-white/5 font-sans text-sm">
                  {/* Basic */}
                  <div className="grid grid-cols-3 p-5">
                    <span className="font-serif text-xs tracking-wider uppercase text-champagne font-medium">Couple Coordinates</span>
                    <span className="col-span-2 text-white/90">
                      <strong>{formData.fullName}</strong> <br />
                      <span className="text-xs text-white/50">{formData.email} • {formData.phone}</span>
                    </span>
                  </div>

                  {/* Ceremonies */}
                  <div className="grid grid-cols-3 p-5">
                    <span className="font-serif text-xs tracking-wider uppercase text-champagne font-medium">Functions</span>
                    <span className="col-span-2 text-white/80">{formData.functions.join(", ")}</span>
                  </div>

                  {/* Dates & Location */}
                  <div className="grid grid-cols-3 p-5">
                    <span className="font-serif text-xs tracking-wider uppercase text-champagne font-medium">Dates & Venue</span>
                    <span className="col-span-2 text-white/80">
                      {formData.weddingDate} at <strong className="text-white">{formData.location}</strong>
                    </span>
                  </div>

                  {/* Crew Coverage */}
                  <div className="grid grid-cols-3 p-5">
                    <span className="font-serif text-xs tracking-wider uppercase text-champagne font-medium">Visual Deliverables</span>
                    <span className="col-span-2 text-white/80 space-y-1">
                      {formData.candidPhoto && <div className="text-xs">• Candid Fine-Art Photography</div>}
                      {formData.cinematicFilm && <div className="text-xs">• Cinematic Wedding Films</div>}
                      {formData.traditionalCoverage && <div className="text-xs">• Traditional Photo & Video Log</div>}
                      {formData.droneAereal && <div className="text-xs">• Aerial 4K Drone Coverage</div>}
                      {formData.sameDayEdit && <div className="text-xs">• Same-Day Edit Trailer Reel</div>}
                      {!formData.candidPhoto && !formData.cinematicFilm && !formData.traditionalCoverage && !formData.droneAereal && !formData.sameDayEdit && (
                        <span className="text-white/40">No creative crew selected</span>
                      )}
                    </span>
                  </div>

                  {/* Styling preference */}
                  <div className="grid grid-cols-3 p-5">
                    <span className="font-serif text-xs tracking-wider uppercase text-champagne font-medium">Styling Set Curation</span>
                    <span className="col-span-2 text-white/80">
                      {STYLING_OPTIONS.find((o) => o.id === formData.stylingPreference)?.name || "Visual Coverage Only"}
                    </span>
                  </div>

                  {/* Guest Count */}
                  <div className="grid grid-cols-3 p-5">
                    <span className="font-serif text-xs tracking-wider uppercase text-champagne font-medium">Logistics Details</span>
                    <span className="col-span-2 text-white/80">
                      Expected Guests: {formData.guestCount}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-center space-y-4 pt-4">
                  <button
                    type="button"
                    onClick={generateWhatsAppLink}
                    className="w-full py-4 bg-champagne text-black text-xs font-semibold tracking-[0.25em] uppercase hover:bg-white hover:text-black transition-colors duration-300 flex items-center justify-center gap-2 rounded"
                  >
                    <span>Confirm & Launch WhatsApp Inquiry</span>
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-[2]">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                  <p className="text-[10px] text-white/30 text-center tracking-wide leading-relaxed">
                    By submitting, your browser will open WhatsApp Web or the WhatsApp App pre-filled with this configuration. <br />
                    No form data is logged or stored on a database. It goes directly to our creative directors.
                  </p>
                </div>
              </motion.div>
            )}

          </AnimatePresence>

          {/* Stepper Navigation Buttons */}
          <div className="flex justify-between items-center pt-10 border-t border-white/5 mt-10">
            <button
              type="button"
              onClick={step > 1 ? handleBack : () => window.location.href = "/"}
              className="flex items-center gap-2 py-2.5 px-5 border border-white/10 hover:border-white/35 rounded text-xs tracking-widest text-white/70 hover:text-white uppercase transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current stroke-[2.5] transform rotate-180">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
              <span>Back</span>
            </button>

            {step < totalSteps ? (
              <button
                type="button"
                onClick={handleNext}
                className="flex items-center gap-2 py-2.5 px-6 bg-white hover:bg-champagne text-black font-semibold rounded text-xs tracking-widest uppercase transition-colors duration-300 ml-auto"
              >
                <span>Next Step</span>
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current stroke-[2.5]">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            ) : (
              <div />
            )}
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}

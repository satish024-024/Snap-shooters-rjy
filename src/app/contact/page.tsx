"use client";

import React, { useState } from "react";
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import { Mail, Phone, Clock, MapPin, Calendar, MessageSquare } from "lucide-react";

interface ContactFormState {
  fullName: string;
  phone: string;
  email: string;
  consultationDate: string;
  timeSlot: string;
  inquiryType: string;
  message: string;
}

const INITIAL_FORM: ContactFormState = {
  fullName: "",
  phone: "",
  email: "",
  consultationDate: "",
  timeSlot: "",
  inquiryType: "",
  message: "",
};

const INQUIRY_TYPES = [
  "Wedding Photography",
  "Cinematic Wedding Film",
  "Decoration Set Curation",
  "Full Experience Package (Photo + Video + Decor)",
];

const TIME_SLOTS = [
  "10:00 AM - 12:00 PM",
  "12:00 PM - 02:00 PM",
  "03:00 PM - 05:00 PM",
  "05:00 PM - 08:00 PM",
];

const LOCATIONS = [
  { city: "Rajahmundry HQ", address: "Danavaipeta, Rajahmundry, Andhra Pradesh 533103" },
  { city: "Hyderabad Studio", address: "Jubilee Hills, Road No. 36, Hyderabad 500033" },
  { city: "Udaipur Office", address: "Fateh Sagar Lake Road, Udaipur, Rajasthan 313001" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleFieldChange = <K extends keyof ContactFormState>(field: K, value: ContactFormState[K]) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: "" });
    }
  };

  const validate = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    }
    if (!formData.consultationDate) {
      newErrors.consultationDate = "Desired date is required.";
    }
    if (!formData.timeSlot) {
      newErrors.timeSlot = "Please select a time slot.";
    }
    if (!formData.inquiryType) {
      newErrors.inquiryType = "Please select your inquiry type.";
    }

    if (formData.email.trim()) {
      if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Please enter a valid email address.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleWhatsAppInquiry = () => {
    if (!validate()) return;

    const message = `Hello Snap Shooter Studios, I would like to request an Exhibition Consultation to secure our dates.

*Contact Details:*
• Name: ${formData.fullName}
• Phone: ${formData.phone}
• Email: ${formData.email || "None"}

*Preferred Appointment:*
• Date: ${formData.consultationDate}
• Time Slot: ${formData.timeSlot}

*Services of Interest:*
• Inquiry Type: ${formData.inquiryType}
• Message: ${formData.message || "None"}

Looking forward to connecting!`;

    const encodedText = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=919963741742&text=${encodedText}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleDirectChat = () => {
    const directUrl = `https://api.whatsapp.com/send?phone=919963741742&text=Hello%20Snap%20Shooter%20Studios%2C%20I'd%20like%20to%20inquire%20about%20booking%20a%20consultation.`;
    window.open(directUrl, "_blank");
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden flex flex-col font-sans selection:bg-champagne selection:text-black">
      <Navigation />

      {/* Main Layout */}
      <main className="flex-grow pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-[10px] tracking-[0.3em] text-champagne uppercase block font-medium">
            Exhibition Consultation
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-light tracking-wide uppercase">
            Secure Your Dates
          </h1>
          <p className="text-sm md:text-base text-white/50 tracking-wide max-w-2xl mx-auto">
            We document luxury weddings across India. Book a private consultation with our creative directors to discuss your custom wedding coordinates.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Column 1: Info panel (5 cols) */}
          <div className="lg:col-span-5 space-y-10">
            
            {/* Contact cards */}
            <div className="border border-white/10 bg-white/[0.01] rounded-lg p-8 space-y-8 divide-y divide-white/5">
              
              {/* Phone & Chat */}
              <div className="space-y-4 pt-0">
                <div className="flex items-center gap-3 text-champagne">
                  <Phone className="w-5 h-5" />
                  <span className="font-serif text-sm tracking-widest uppercase font-semibold">Immediate Booking</span>
                </div>
                <div className="space-y-2">
                  <p className="text-2xl font-light font-serif tracking-wide text-white">
                    +91 99637 41742
                  </p>
                  <p className="text-xs text-white/40 leading-relaxed font-sans">
                    Call or text us directly. Our direct WhatsApp line is open 24/7 for booking coordinates.
                  </p>
                  <button
                    onClick={handleDirectChat}
                    className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-semibold text-champagne hover:text-white transition-colors pt-2"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Chat Instantly on WhatsApp</span>
                  </button>
                </div>
              </div>

              {/* Email */}
              <div className="space-y-4 pt-6">
                <div className="flex items-center gap-3 text-champagne">
                  <Mail className="w-5 h-5" />
                  <span className="font-serif text-sm tracking-widest uppercase font-semibold">Email Correspondence</span>
                </div>
                <div className="space-y-1">
                  <a
                    href="mailto:snapshooterstudio@gmail.com"
                    className="text-lg font-light font-serif tracking-wide text-white hover:text-champagne transition-colors"
                  >
                    snapshooterstudio@gmail.com
                  </a>
                  <p className="text-xs text-white/40 leading-relaxed font-sans pt-1">
                    Send us your itinerary details. Our planners respond with initial proposals within 12 hours.
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="space-y-4 pt-6">
                <div className="flex items-center gap-3 text-champagne">
                  <Clock className="w-5 h-5" />
                  <span className="font-serif text-sm tracking-widest uppercase font-semibold">Business Hours</span>
                </div>
                <div className="space-y-1 text-sm text-white/80 space-y-1 font-sans">
                  <div className="flex justify-between">
                    <span>Monday - Saturday</span>
                    <span className="text-white">10:00 AM – 08:00 PM</span>
                  </div>
                  <div className="flex justify-between text-white/50">
                    <span>Sunday</span>
                    <span>By Prior Appointment Only</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Studio Locations */}
            <div className="space-y-4">
              <h3 className="font-serif text-lg tracking-widest text-champagne uppercase font-medium">
                Studio Hub Locations
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {LOCATIONS.map((loc) => (
                  <div key={loc.city} className="border border-white/5 bg-white/[0.01] rounded-lg p-5 flex gap-4">
                    <MapPin className="w-5 h-5 text-champagne shrink-0 mt-0.5" />
                    <div className="space-y-1 text-xs">
                      <strong className="text-white tracking-wider uppercase font-serif block">{loc.city}</strong>
                      <span className="text-white/50 leading-relaxed block font-sans">{loc.address}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Column 2: Booking Form (7 cols) */}
          <div className="lg:col-span-7 border border-white/10 bg-white/[0.01] rounded-lg p-8 sm:p-10 space-y-8">
            <div className="space-y-2">
              <h2 className="font-serif text-2xl tracking-widest uppercase text-champagne font-medium">
                Request Private Consultation
              </h2>
              <p className="text-xs text-white/40 leading-relaxed font-sans">
                Schedule a virtual video call or in-studio session. Please complete the details to generate your WhatsApp confirmation.
              </p>
            </div>

            <div className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <label className="font-serif text-xs tracking-widest text-white/70 uppercase block">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.fullName}
                  onChange={(e) => handleFieldChange("fullName", e.target.value)}
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-white/20 focus:outline-none focus:border-champagne transition-colors font-sans text-sm"
                />
                {errors.fullName && <p className="text-red-400 text-xs tracking-wide">{errors.fullName}</p>}
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-serif text-xs tracking-widest text-white/70 uppercase block">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. +91 99637 41742"
                    value={formData.phone}
                    onChange={(e) => handleFieldChange("phone", e.target.value)}
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-white/20 focus:outline-none focus:border-champagne transition-colors font-sans text-sm"
                  />
                  {errors.phone && <p className="text-red-400 text-xs tracking-wide">{errors.phone}</p>}
                </div>

                <div className="space-y-2">
                  <label className="font-serif text-xs tracking-widest text-white/70 uppercase block">
                    Email (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. name@example.com"
                    value={formData.email}
                    onChange={(e) => handleFieldChange("email", e.target.value)}
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-white/20 focus:outline-none focus:border-champagne transition-colors font-sans text-sm"
                  />
                  {errors.email && <p className="text-red-400 text-xs tracking-wide">{errors.email}</p>}
                </div>
              </div>

              {/* Consultation Date */}
              <div className="space-y-2">
                <label className="font-serif text-xs tracking-widest text-white/70 uppercase block">
                  Desired Consultation Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={formData.consultationDate}
                    onChange={(e) => handleFieldChange("consultationDate", e.target.value)}
                    onClick={(e) => {
                      try {
                        e.currentTarget.showPicker();
                      } catch {
                        // Fallback
                      }
                    }}
                    onFocus={(e) => {
                      try {
                        e.currentTarget.showPicker();
                      } catch {
                        // Fallback
                      }
                    }}
                    style={{ colorScheme: "dark" }}
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-champagne transition-colors font-sans text-sm cursor-pointer"
                  />
                  <Calendar className="absolute right-2 top-3 w-4 h-4 text-white/40 pointer-events-none" />
                </div>
                {errors.consultationDate && (
                  <p className="text-red-400 text-xs tracking-wide">{errors.consultationDate}</p>
                )}
              </div>

              {/* Preferred Time Slot */}
              <div className="space-y-3">
                <label className="font-serif text-xs tracking-widest text-white/70 uppercase block">
                  Preferred Time Slot
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {TIME_SLOTS.map((slot) => {
                    const isSelected = formData.timeSlot === slot;
                    return (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => handleFieldChange("timeSlot", slot)}
                        className={`p-3.5 rounded-lg border font-sans text-xs tracking-wider transition-all duration-300 text-left ${
                          isSelected
                            ? "border-champagne bg-champagne/[0.03] text-champagne"
                            : "border-white/10 bg-white/[0.01] hover:border-white/20 text-white/70 hover:text-white"
                        }`}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
                {errors.timeSlot && <p className="text-red-400 text-xs tracking-wide">{errors.timeSlot}</p>}
              </div>

              {/* Inquiry Type */}
              <div className="space-y-3">
                <label className="font-serif text-xs tracking-widest text-white/70 uppercase block">
                  Services of Interest
                </label>
                <div className="grid grid-cols-1 gap-2.5">
                  {INQUIRY_TYPES.map((type) => {
                    const isSelected = formData.inquiryType === type;
                    return (
                      <button
                        key={type}
                        type="button"
                        onClick={() => handleFieldChange("inquiryType", type)}
                        className={`p-3.5 rounded-lg border font-serif text-xs tracking-wider uppercase transition-all duration-300 text-left ${
                          isSelected
                            ? "border-champagne bg-champagne/[0.03] text-champagne"
                            : "border-white/10 bg-white/[0.01] hover:border-white/20 text-white/70 hover:text-white"
                        }`}
                      >
                        {type}
                      </button>
                    );
                  })}
                </div>
                {errors.inquiryType && <p className="text-red-400 text-xs tracking-wide">{errors.inquiryType}</p>}
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="font-serif text-xs tracking-widest text-white/70 uppercase block">
                  Add custom itinerary notes (Optional)
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your celebration storyboard..."
                  value={formData.message}
                  onChange={(e) => handleFieldChange("message", e.target.value)}
                  className="w-full bg-transparent border border-white/10 rounded-lg p-4 text-white placeholder-white/20 focus:outline-none focus:border-champagne transition-colors font-sans text-sm resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="button"
                onClick={handleWhatsAppInquiry}
                className="w-full py-4 bg-champagne text-black text-xs font-semibold tracking-[0.25em] uppercase hover:bg-white hover:text-black transition-colors duration-300 flex items-center justify-center gap-2 rounded mt-4"
              >
                <span>Request Exhibition Consultation</span>
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-[2]">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>

            </div>
          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}

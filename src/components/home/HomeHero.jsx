import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Shield,
  Activity,
  HeartPulse,
  Sparkles,
  MapPin,
  Clock,
  UserCheck,
  Pill,
  Stethoscope,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function HomeHero() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const trustHighlights = [
    {
      label: "24/7",
      sub: "Emergency Care",
      iconSvg: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#FF8A3D] drop-shadow-[0_2px_8px_rgba(233,75,28,0.35)] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L4 6.5v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12v-6L12 2z" stroke="#FF8A3D" />
          <path d="M12 7v10" stroke="#E94B1C" />
          <path d="M7 12h10" stroke="#E94B1C" />
        </svg>
      ),
    },
    {
      label: "12",
      sub: "Medical Services",
      iconSvg: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#FF8A3D] drop-shadow-[0_2px_8px_rgba(233,75,28,0.35)] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="5" stroke="#FF8A3D" />
          <circle cx="12" cy="12" r="3.5" stroke="#E94B1C" />
          <path d="M12 5v2m0 10v2m-7-7h2m10 0h2" stroke="#FF8A3D" />
        </svg>
      ),
    },
    {
      label: "20",
      sub: "Expert Doctors",
      iconSvg: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#FF8A3D] drop-shadow-[0_2px_8px_rgba(233,75,28,0.35)] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="7" r="4" stroke="#FF8A3D" />
          <path d="M5.5 21a6.5 6.5 0 0 1 13 0" stroke="#E94B1C" />
          <path d="M12 11v3m-1.5-1.5h3" stroke="#FF8A3D" />
        </svg>
      ),
    },
    {
      label: "1000+",
      sub: "Happy Patients",
      iconSvg: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#FF8A3D] drop-shadow-[0_2px_8px_rgba(233,75,28,0.35)] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#E94B1C" />
          <circle cx="9" cy="7" r="4" stroke="#FF8A3D" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="#FF8A3D" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="#E94B1C" />
        </svg>
      ),
    },
  ];

  return (
    <section id="home-hero" className="relative w-full overflow-hidden bg-[#1A1D20] text-white">
      {/* 1. Full-Bleed Hospital Exterior with Cinematic Scrim — Strict Single Viewport Fit */}
      <div className="relative w-full h-screen min-h-[580px] max-h-[100vh] flex flex-col justify-between pt-24 sm:pt-26 lg:pt-28 pb-4 sm:pb-6 lg:pb-6">
        {/* Background Media - High-Resolution Hospital Building Exterior with Subtle Cinematic Zoom */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.img
            src="/images/modern-surya-hospital-facade.png"
            alt="Surya Hospital Modern Facade"
            initial={{ scale: 1 }}
            animate={{ scale: 1.02 }}
            transition={{ duration: 18, ease: "easeOut", repeat: Infinity, repeatType: "reverse" }}
            className="w-full h-full object-cover object-[52%_40%] filter brightness-[0.98] contrast-[1.03]"
            loading="eager"
          />
          {/* Natural Soft Warm Ivory Scrim */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, rgba(255, 249, 243, 0.94) 0%, rgba(255, 249, 243, 0.88) 28%, rgba(255, 249, 243, 0.58) 48%, rgba(255, 249, 243, 0.18) 68%, rgba(255, 249, 243, 0.0) 88%)",
            }}
          />
          {/* Subtle bottom shadow vignette to ground the stats bar cleanly */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none" />
        </div>

        {/* 2. Overlaid Hero Content Container - Exact clearance below floating navbar */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Left Column: Headline & Actions */}
            <div className="lg:col-span-8 xl:col-span-7 text-left space-y-2.5 sm:space-y-3 max-w-2xl">
              
              {/* Step 2: Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#E94B1C]"
              >
                <span className="w-2 h-2 rounded-full bg-[#E94B1C]" />
                <span>SURYA HOSPITAL • ANANTAPUR</span>
              </motion.div>

              {/* Step 3: Main headline and second headline */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.08 }}
                className="space-y-0.5"
              >
                <h1
                  className="font-serif-heading font-bold text-[#262626] tracking-tight leading-[1.1]"
                  style={{ fontSize: "clamp(1.85rem, 3.2vw, 3rem)" }}
                >
                  Comprehensive Medical Care.
                </h1>
                <p
                  className="font-editorial-italic text-[#E94B1C] tracking-tight leading-[1.1]"
                  style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.65rem)" }}
                >
                  Committed to Your Well-being.
                </p>
              </motion.div>

              {/* Step 4: Supporting description */}
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.16 }}
                className="text-xs sm:text-sm lg:text-[15px] text-[#4A403B] max-w-xl font-normal leading-relaxed drop-shadow-xs"
              >
                Quality healthcare from experienced doctors, modern medical facilities, and round-the-clock emergency services for you and your family.
              </motion.p>

              {/* Step 5: Primary CTA & Secondary CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.24 }}
                className="pt-1 flex flex-wrap items-center gap-3 sm:gap-3.5"
              >
                <Link
                  to="/appointment"
                  className="group inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-[#E94B1C] hover:bg-[#A83218] shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#E94B1C] focus:ring-offset-2"
                >
                  <span>Book an Appointment</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/specialities"
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold text-[#C63D1B] bg-white hover:bg-[#FFF0E6] border border-[#E9D8CE] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#E94B1C]/40"
                >
                  <span>Explore Our Services</span>
                </Link>
              </motion.div>
            </div>

          </div>
        </div>

        {/* 3. Bottom Translucent Stats Bar — Step 6 Animation & Warm Charcoal System */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.32 }}
          className="relative z-20 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-auto mb-1 sm:mb-2"
        >
          <div className="w-full rounded-2xl bg-[#1C1613]/85 backdrop-blur-md border border-[#E9D8CE]/20 shadow-[0_10px_28px_-6px_rgba(0,0,0,0.55),0_0_20px_0_rgba(233,75,28,0.06)_inset] px-3.5 sm:px-5 lg:px-6 py-2.5 sm:py-3 flex flex-col lg:flex-row items-center justify-between gap-3 sm:gap-4">
            
            {/* Left 4 Information Items with Subtle Warm Separators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-2 flex-1 w-full items-center">
              {trustHighlights.map((stat, i) => (
                <div key={i} className="flex items-center gap-2.5 px-1 sm:px-2 border-r-0 sm:border-r border-white/10 last:border-r-0">
                  {stat.iconSvg}
                  <div className="text-left select-none">
                    <div className="text-sm sm:text-base font-bold text-white tracking-tight leading-tight">
                      {stat.label}
                    </div>
                    <div className="text-[10px] sm:text-[11px] text-[#FFF0E6]/80 font-medium leading-tight whitespace-nowrap mt-0.5">
                      {stat.sub}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Location Panel Integrated into the Same Visual System */}
            <div className="w-full lg:w-auto shrink-0 flex items-center justify-start lg:justify-end border-t lg:border-t-0 border-white/10 pt-2 lg:pt-0 lg:pl-3">
              <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 px-3 py-1.5 backdrop-blur-sm">
                <div className="w-7 h-7 rounded-full bg-[#E94B1C]/20 text-[#FF8A3D] flex items-center justify-center shrink-0 border border-[#E94B1C]/30 shadow-xs">
                  <MapPin className="w-3.5 h-3.5 text-[#FF8A3D]" />
                </div>
                <div className="text-left select-none">
                  <div className="text-xs font-bold text-white leading-tight">
                    Sai Nagar, Anantapur
                  </div>
                  <div className="text-[10px] text-[#FFF0E6]/75 leading-tight mt-0.5 whitespace-nowrap">
                    Behind Ambedkar Bhavan 9th Cross Road
                  </div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* 4. Organic Flowing Bottom Wave Divider sweeping into About Section */}
        <div className="curve-hero-bottom">
          <svg viewBox="0 0 1440 180" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
            <defs>
              <linearGradient id="heroRibbon1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFF9F3" stopOpacity="0.25" />
                <stop offset="30%" stopColor="#FFF0E6" stopOpacity="0.45" />
                <stop offset="70%" stopColor="#FFF9F3" stopOpacity="0.30" />
                <stop offset="100%" stopColor="#E9D8CE" stopOpacity="0.50" />
              </linearGradient>
              <linearGradient id="heroRibbon2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFF9F3" stopOpacity="0.65" />
                <stop offset="45%" stopColor="#FFF0E6" stopOpacity="0.80" />
                <stop offset="100%" stopColor="#FFF9F3" stopOpacity="0.90" />
              </linearGradient>
            </defs>

            {/* Background Faded Ribbon Wave */}
            <path
              d="M0,100 C340,150 680,80 1020,110 C1220,128 1360,75 1440,55 L1440,180 L0,180 Z"
              fill="url(#heroRibbon1)"
            />

            {/* Mid Faded Translucent Ambient Wave */}
            <path
              d="M0,125 C300,85 620,150 960,115 C1180,92 1340,135 1440,105 L1440,180 L0,180 Z"
              fill="url(#heroRibbon2)"
            />

            {/* Foreground Solid Warm Canvas Wave */}
            <path
              d="M0,140 C320,165 620,125 940,145 C1160,158 1320,120 1440,110 L1440,180 L0,180 Z"
              fill="#FFF9F3"
            />
          </svg>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {videoModalOpen && (
          <div className="fixed inset-0 z-[100000] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/20"
            >
              <div className="p-4 bg-[#1A1D20] flex items-center justify-between text-white border-b border-white/10">
                <span className="font-bold text-sm">Surya Hospital Building & Campus Tour</span>
                <button
                  type="button"
                  onClick={() => setVideoModalOpen(false)}
                  className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold"
                >
                  Close
                </button>
              </div>
              <div className="aspect-video w-full bg-black">
                <video
                  src="/images/surya-hospital-building.mp4"
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default HomeHero;

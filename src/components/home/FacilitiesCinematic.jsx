import React, { useState } from "react";
import { Play, ArrowRight, CheckCircle2 } from "lucide-react";
import { AnimateIn } from "../ui/AnimateIn";
import { motion, AnimatePresence } from "framer-motion";

export function FacilitiesCinematic() {
  const [activeFacility, setActiveFacility] = useState(0);
  const [tourModalOpen, setTourModalOpen] = useState(false);

  const facilities = [
    {
      id: "ot",
      title: "Operation Theatre",
      desc: "Sterile surgical suite with modern laparoscopic and monitoring systems.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1600&q=85",
      thumb: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: "lab",
      title: "Diagnostic Lab",
      desc: "Pathology, ultrasound sonography, digital X-Ray and computerized ECG.",
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1600&q=85",
      thumb: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: "rooms",
      title: "Patient Rooms",
      desc: "Clean inpatient observation beds, private rooms and monitored nursing care.",
      image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&w=1600&q=85",
      thumb: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: "pharmacy",
      title: "Pharmacy",
      desc: "24/7 on-site pharmacy dispensing authentic medications and surgical consumables.",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1600&q=85",
      thumb: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=300&q=80",
    },
  ];

  const highlights = [
    "Modular Operation Theatres",
    "Advanced Diagnostics",
    "In-house Pharmacy (24/7)",
    "Clean & Safe Environment",
  ];

  return (
    <section className="relative w-full py-28 sm:py-36 bg-[#082E37] text-white overflow-hidden">
      {/* Background Large Cinematic Media with deep teal lighting matching Mockup */}
      <div className="absolute inset-0 z-0">
        <img
          src={facilities[activeFacility].image}
          alt={facilities[activeFacility].title}
          className="w-full h-full object-cover object-center filter brightness-[0.62] contrast-[1.12] transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#082E37] via-[#082E37]/75 to-[#082E37]/45" />
      </div>

      {/* Top Organic Wave Transition from Specialties */}
      <div className="organic-divider-top">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path
            d="M0,0 L1440,0 L1440,32 C1280,24 1060,52 820,78 C580,105 320,100 0,70 Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>

      {/* Bottom Organic Wave Transition into Doctors */}
      <div className="organic-divider-bottom">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path
            d="M0,70 C320,100 580,105 820,78 C1060,52 1280,24 1440,32 L1440,120 L0,120 Z"
            fill="#FFF9F3"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading, description, checklist & Tour Action */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <AnimateIn animation="slide-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E8F4F1]">
                <span className="w-2 h-2 rounded-full bg-[#E8F4F1]" />
                <span>ADVANCED TECHNOLOGY</span>
              </div>
            </AnimateIn>

            <AnimateIn animation="slide-left" delay={100}>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif-heading font-bold text-white tracking-tight leading-[1.1]">
                Modern
                <br />
                Facilities for
                <br />
                Better Outcomes <span className="inline-block w-8 h-1 bg-[#E8F4F1] align-middle ml-1 rounded-full" />
              </h2>
            </AnimateIn>

            <AnimateIn animation="slide-left" delay={200}>
              <p className="text-base sm:text-lg text-[#E8F4F1]/90 max-w-xl leading-relaxed font-normal">
                We are equipped with modern operation theatres, diagnostics facilities, in-house pharmacy and patient-centric rooms to ensure accurate diagnosis and effective treatment.
              </p>
            </AnimateIn>

            {/* Checklist */}
            <AnimateIn animation="fade-up" delay={300}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {highlights.map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-white/95 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#A84328] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </AnimateIn>

            {/* Virtual Tour Action Button (Matching Reference) */}
            <AnimateIn animation="pop" delay={400} className="pt-4">
              <button
                type="button"
                onClick={() => setTourModalOpen(true)}
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold text-xs sm:text-sm transition-all active:scale-95 group"
              >
                <div className="w-7 h-7 rounded-full bg-white text-[#082E37] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>Take a Virtual Tour</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </AnimateIn>
          </div>

          {/* Right Column: Stacked Facility Selector Cards (Exact Reference Mockup) */}
          <div className="lg:col-span-5 space-y-3.5">
            {facilities.map((fac, idx) => {
              const isSelected = activeFacility === idx;
              return (
                <div
                  key={fac.id}
                  onClick={() => setActiveFacility(idx)}
                  className={`flex items-center justify-between p-3.5 sm:p-4 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    isSelected
                      ? "bg-white text-[#1A1D20] border-white shadow-xl scale-[1.02]"
                      : "bg-white/15 backdrop-blur-md text-white border-white/20 hover:bg-white/25"
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <img
                      src={fac.thumb}
                      alt={fac.title}
                      className="w-14 h-12 rounded-xl object-cover shrink-0"
                    />
                    <div className="text-left min-w-0">
                      <h3
                        className={`text-sm sm:text-base font-bold truncate ${
                          isSelected ? "text-[#1A1D20]" : "text-white"
                        }`}
                      >
                        {fac.title}
                      </h3>
                      <p
                        className={`text-xs truncate ${
                          isSelected ? "text-[#62666D]" : "text-[#E8F4F1]/80"
                        }`}
                      >
                        {fac.desc}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ml-3 transition-colors ${
                      isSelected
                        ? "bg-[#082E37] text-white"
                        : "bg-white/20 text-white"
                    }`}
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Tour Modal */}
      <AnimatePresence>
        {tourModalOpen && (
          <div className="fixed inset-0 z-[100000] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/20"
            >
              <div className="p-4 bg-[#082E37] flex items-center justify-between text-white border-b border-white/10">
                <span className="font-bold text-sm">Surya Hospital Operating Suites & Infrastructure</span>
                <button
                  type="button"
                  onClick={() => setTourModalOpen(false)}
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

export default FacilitiesCinematic;

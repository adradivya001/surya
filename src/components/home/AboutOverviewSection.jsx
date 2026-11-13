import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, HeartHandshake, Eye, Target, Sparkles, Building2 } from "lucide-react";
import { HOSPITAL_INFO } from "../../constants/hospitalData";

export function AboutOverviewSection() {
  const highlights = [
    {
      title: "Our Mission",
      desc: HOSPITAL_INFO.about?.missionDraft || "To give every family in Anantapur clear medical advice, safe treatments, and caring personal attention whenever they need health support.",
      icon: Target,
    },
    {
      title: "Our Vision",
      desc: HOSPITAL_INFO.about?.visionDraft || "To be the most trusted and helpful hospital in our community, known for honest doctor guidance, modern equipment, and dependable patient care.",
      icon: Eye,
    },
    {
      title: "Patient-First Approach",
      desc: HOSPITAL_INFO.about?.philosophy || "We treat every patient like family. We listen carefully, explain conditions in simple terms, and recommend only the care you genuinely need.",
      icon: HeartHandshake,
    },
  ];

  return (
    <section id="about" className="relative py-14 sm:py-18 bg-[#FFFDF9] text-[#14233C] overflow-hidden border-t border-[#F0E4D8]/80 scroll-mt-20">
      {/* Ambient background glows */}
      <div className="absolute top-10 left-10 w-[420px] h-[420px] rounded-full bg-[#E94B1C]/[0.03] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[380px] h-[380px] rounded-full bg-[#FF8A3D]/[0.035] blur-[100px] pointer-events-none" />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid: Campus Showcase Visual (Left) + Hospital Story & Purpose (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Visual Campus Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#EADBCE] bg-white p-3 shadow-[0_12px_40px_rgba(20,35,60,0.06)] group">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#FFF0E6]">
                <img
                  src="/images/surya-reception.jpg"
                  alt="Surya Hospital Lobby and Campus at Sai Nagar, Anantapur"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Floating badge inside image */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-200 block">
                      CAMPUS &amp; CARE CENTER
                    </span>
                    <span className="text-sm font-bold block">
                      Sai Nagar 9th Cross, Anantapur
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-bold border border-white/30 shrink-0">
                    Est. 2024
                  </span>
                </div>
              </div>

              {/* Verified Trust Strip under photo */}
              <div className="mt-3.5 px-2 py-1.5 flex items-center justify-between text-xs text-[#555C66]">
                <span className="inline-flex items-center gap-1.5 font-semibold text-[#14233C]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Licensed Multispeciality Center</span>
                </span>
                <span className="text-[11px] text-[#A84328] font-bold">
                  24/7 Casualty &amp; ICU
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Hospital Story, Vision & Philosophy */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#FFF0E6] to-[#FFE8D6] border border-[#FADCCB] text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#E94B1C] shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>OUR HOSPITAL STORY</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#14233C] tracking-tight leading-tight">
              Comprehensive Medical Excellence,{" "}
              <span className="bg-gradient-to-r from-[#E94B1C] via-[#FF6B35] to-[#C93B10] bg-clip-text text-transparent">
                Rooted in Compassion.
              </span>
            </h2>

            <p className="text-sm sm:text-[15px] text-[#4A5568] leading-relaxed font-normal">
              Surya Hospital was built to serve the families of Sai Nagar, Anantapur, and surrounding communities with dependable clinical expertise. Designed as a unified healthcare destination, we integrate specialized outpatient clinics, sterile surgical suites, high-dependency intensive care, and 24/7 diagnostic support under one roof.
            </p>

            {/* 3 Pillars: Mission, Vision & Patient-First Philosophy */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
              {highlights.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-3.5 sm:p-4 rounded-2xl bg-[#FFF9F3] border border-[#EADBCE]/80 hover:border-[#E94B1C]/40 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-8 h-8 rounded-xl bg-[#FFF0E6] text-[#E94B1C] flex items-center justify-center shrink-0 mb-2.5 border border-[#FADCCB]/70 shadow-2xs">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h3 className="text-xs sm:text-[13px] font-bold text-[#14233C] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-[11px] text-[#555C66] leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Link to Dedicated About Page */}
            <div className="pt-2">
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#E94B1C] to-[#C63D1B] hover:from-[#C63D1B] hover:to-[#A83218] transition-all shadow-[0_4px_16px_rgba(233,75,28,0.25)] hover:shadow-[0_6px_22px_rgba(233,75,28,0.35)] hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Read Our Full Story &amp; Values</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutOverviewSection;


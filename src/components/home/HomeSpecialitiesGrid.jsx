import React from "react";
import { Link } from "react-router-dom";
import { AnimateIn } from "../ui/AnimateIn";
import { ArrowRight } from "lucide-react";

export function HomeSpecialitiesGrid() {
  // Exact 15 services in specified order
  const specialties = [
    "24 Hour Care",
    "Health Care Service",
    "Diagnosis Service",
    "Specialist Doctors",
    "Blood Test",
    "Physicals",
    "General Medicine",
    "General Surgery",
    "Gastroenterology",
    "Dermatology",
    "Nephrology",
    "Neurology",
    "Orthopedic",
    "Pulmonology",
    "Urology",
  ];

  return (
    <section id="specialties" className="relative py-20 sm:py-28 bg-[#DDFBFF]/45 text-[#1A1D20] overflow-hidden">
      {/* Decorative Subtle Medical Plus & Dot accents */}
      <div className="absolute top-12 left-6 sm:left-12 opacity-35 pointer-events-none select-none text-[#319BFF]">
        <div className="grid grid-cols-2 gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#319BFF]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#319BFF]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#319BFF]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#319BFF]" />
        </div>
      </div>
      <div className="absolute bottom-12 right-6 sm:right-12 opacity-35 pointer-events-none select-none text-[#319BFF]">
        <div className="grid grid-cols-2 gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#319BFF]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#319BFF]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#319BFF]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#319BFF]" />
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Thin Divider */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <AnimateIn animation="fade-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#1428B5] leading-tight">
              OUR EXPERT SPECIALTIES
            </h2>
          </AnimateIn>

          {/* Thin horizontal divider underneath heading */}
          <AnimateIn animation="fade-up" delay={100}>
            <div className="w-24 sm:w-32 h-[3px] bg-[#1428B5] mx-auto mt-4 mb-5 rounded-full" />
          </AnimateIn>

          <AnimateIn animation="fade-up" delay={150}>
            <p className="text-sm sm:text-base md:text-lg text-[#2A2E34] font-medium leading-relaxed max-w-2xl mx-auto">
              Our hospital provides complete multi-speciality consultations, diagnostic services, and advanced surgical care under one roof.
            </p>
          </AnimateIn>
        </div>

        {/* 2-Column Responsive Grid on Desktop / Tablet (Urology centered in the last row) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 max-w-4xl mx-auto">
          {specialties.map((item, idx) => {
            const isLast = idx === specialties.length - 1; // 15th item: Urology

            return (
              <AnimateIn
                key={item}
                animation="fade-up"
                delay={Math.min(idx * 30, 350)}
                className={`w-full ${isLast ? "md:col-span-2 md:w-1/2 md:mx-auto" : ""}`}
              >
                <Link
                  to="/specialities"
                  className="group relative flex items-center justify-center text-center px-6 py-4 sm:py-5 min-h-[64px] sm:min-h-[72px] rounded-[18px] sm:rounded-[22px] bg-[#1428B5] text-white border-[1.8px] border-[#319BFF] shadow-sm hover:shadow-xl hover:bg-[#0E1F96] hover:scale-[1.015] active:scale-[0.98] transition-all duration-200"
                >
                  <span className="text-sm sm:text-base md:text-lg font-bold tracking-wide text-white group-hover:text-[#DDFBFF] transition-colors leading-snug">
                    {item}
                  </span>
                </Link>
              </AnimateIn>
            );
          })}
        </div>

        {/* Optional Explore All Services Link */}
        <AnimateIn animation="fade-up" delay={300}>
          <div className="mt-12 text-center">
            <Link
              to="/specialities"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-[#1428B5] bg-white border border-[#319BFF] hover:bg-[#1428B5] hover:text-white transition-all shadow-xs"
            >
              <span>Explore Department Details</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimateIn>

      </div>
    </section>
  );
}

export default HomeSpecialitiesGrid;

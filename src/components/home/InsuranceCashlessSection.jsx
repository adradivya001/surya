import React from "react";
import { HOSPITAL_INFO } from "../../constants/hospitalData";
import { AnimateIn } from "../ui/AnimateIn";
import { ShieldCheck } from "lucide-react";

export function InsuranceCashlessSection() {
  const partners = HOSPITAL_INFO.insurancePartners;

  return (
    <section id="insurance" className="py-20 sm:py-28 bg-[#DDFBFF]/60 text-[#1A1D20] relative overflow-hidden">
      {/* Decorative Medical Dots & Plus Icons (Matching Reference Slide) */}
      <div className="absolute top-12 left-6 sm:left-12 opacity-40 pointer-events-none select-none text-[#319BFF]">
        <div className="grid grid-cols-2 gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#319BFF]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#319BFF]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#319BFF]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#319BFF]" />
        </div>
      </div>
      <div className="absolute bottom-16 right-6 sm:right-12 opacity-40 pointer-events-none select-none text-[#319BFF]">
        <div className="grid grid-cols-2 gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#319BFF]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#319BFF]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#319BFF]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#319BFF]" />
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Description matching Slide 5 Reference */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <AnimateIn animation="fade-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#1428B5] leading-tight">
              INSURANCE &amp; CASHLESS FACILITY
            </h2>
          </AnimateIn>

          {/* Thin horizontal divider underneath heading */}
          <AnimateIn animation="fade-up" delay={100}>
            <div className="w-24 sm:w-32 h-[3px] bg-[#1428B5] mx-auto mt-4 mb-5 rounded-full" />
          </AnimateIn>

          <AnimateIn animation="fade-up" delay={150}>
            <p className="text-sm sm:text-base md:text-lg text-[#2A2E34] font-medium leading-relaxed max-w-2xl mx-auto">
              We are empaneled with major insurance companies to provide cashless medical services for your convenience.
            </p>
          </AnimateIn>
        </div>

        {/* 3-Column Responsive Grid on Desktop matching Reference Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {partners.map((partner, idx) => (
            <AnimateIn
              key={partner.id}
              animation="fade-up"
              delay={Math.min(idx * 30, 400)}
            >
              <div
                className="group relative bg-white rounded-[20px] border-[1.8px] border-[#319BFF] overflow-hidden shadow-xs hover:shadow-lg hover:border-[#1428B5] transition-all duration-300 p-2.5 sm:p-3 flex items-center justify-center min-h-[90px] sm:min-h-[110px] md:min-h-[120px]"
                title={partner.name}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-auto max-h-[75px] sm:max-h-[90px] md:max-h-[100px] object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Informational Help Note */}
        <AnimateIn animation="fade-up" delay={300}>
          <div className="mt-12 sm:mt-14 max-w-2xl mx-auto p-4 sm:p-5 rounded-2xl bg-white/85 border border-[#319BFF]/40 backdrop-blur-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#DDFBFF] text-[#1428B5] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-xs sm:text-sm">
                <span className="font-bold text-[#1428B5] block">Need assistance with Cashless Pre-Authorization?</span>
                <span className="text-[#62666D]">Contact our Hospital Insurance Desk directly at 8500904999</span>
              </div>
            </div>
            <a
              href="mailto:insurancedesksuryahospital@gmail.com"
              className="shrink-0 px-4 py-2 rounded-full text-xs font-bold text-white bg-[#1428B5] hover:bg-[#0D1C8C] transition-colors shadow-xs"
            >
              Email Insurance Desk
            </a>
          </div>
        </AnimateIn>

      </div>
    </section>
  );
}

export default InsuranceCashlessSection;

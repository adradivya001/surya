import React from "react";
import { Link } from "react-router-dom";
import { HOSPITAL_INFO } from "../../constants/hospitalData";
import { AnimateIn } from "../ui/AnimateIn";
import { ShieldCheck } from "lucide-react";

export function InsuranceCashlessSection() {
  const partners = HOSPITAL_INFO.insurancePartners;

  return (
    <section id="insurance" className="py-20 sm:py-28 bg-[#FFF0E6]/50 text-[#262626] relative overflow-hidden">
      {/* Decorative Warm Dots */}
      <div className="absolute top-12 left-6 sm:left-12 opacity-40 pointer-events-none select-none text-[#FF8A3D]">
        <div className="grid grid-cols-2 gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF8A3D]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF8A3D]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF8A3D]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF8A3D]" />
        </div>
      </div>
      <div className="absolute bottom-16 right-6 sm:right-12 opacity-40 pointer-events-none select-none text-[#FF8A3D]">
        <div className="grid grid-cols-2 gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF8A3D]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF8A3D]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF8A3D]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF8A3D]" />
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Description */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <AnimateIn animation="fade-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#C63D1B] leading-tight">
              INSURANCE &amp; CASHLESS FACILITY
            </h2>
          </AnimateIn>

          {/* Thin horizontal divider underneath heading */}
          <AnimateIn animation="fade-up" delay={100}>
            <div className="w-24 sm:w-32 h-[3px] bg-[#E94B1C] mx-auto mt-4 mb-5 rounded-full" />
          </AnimateIn>

          <AnimateIn animation="fade-up" delay={150}>
            <p className="text-sm sm:text-base md:text-lg text-[#4A403B] font-medium leading-relaxed max-w-2xl mx-auto">
              We are empaneled with major insurance companies to provide cashless medical services for your convenience.
            </p>
          </AnimateIn>
        </div>

        {/* Clean Logo Grid without borders or boxes matching reference */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 sm:gap-8 lg:gap-10 items-center justify-items-center max-w-5xl mx-auto py-4">
          {partners.slice(0, 12).map((partner, idx) => (
            <AnimateIn
              key={partner.id}
              animation="fade-up"
              delay={Math.min(idx * 30, 250)}
              className="w-full flex items-center justify-center"
            >
              <div
                className="group w-full flex items-center justify-center p-2 transition-all duration-300"
                title={partner.name}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-12 sm:max-h-14 w-auto max-w-[140px] sm:max-w-[160px] object-contain transition-transform duration-300 group-hover:scale-108"
                  loading="lazy"
                />
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Explore All Services Tab Button */}
        <AnimateIn animation="fade-up" delay={250}>
          <div className="mt-10 sm:mt-12 text-center">
            <Link
              to="/insurance-partners"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#E94B1C] hover:bg-[#A83218] transition-all shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Explore All Services</span>
              <span className="text-[#FFF0E6]">→</span>
            </Link>
          </div>
        </AnimateIn>

        {/* Informational Help Note */}
        <AnimateIn animation="fade-up" delay={300}>
          <div className="mt-10 sm:mt-12 max-w-2xl mx-auto p-4 sm:p-5 rounded-2xl bg-white/95 border border-[#E9D8CE] backdrop-blur-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FFF0E6] text-[#E94B1C] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-xs sm:text-sm">
                <span className="font-bold text-[#C63D1B] block">Need assistance with Cashless Pre-Authorization?</span>
                <span className="text-[#756860]">Contact our Hospital Insurance Desk directly at 8500904999</span>
              </div>
            </div>
            <a
              href="mailto:insurancedesksuryahospital@gmail.com"
              className="shrink-0 px-4 py-2 rounded-full text-xs font-bold text-white bg-[#E94B1C] hover:bg-[#A83218] transition-colors shadow-xs"
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

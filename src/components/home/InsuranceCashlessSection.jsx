import React from "react";
import { Link } from "react-router-dom";
import { HOSPITAL_INFO } from "../../constants/hospitalData";
import { AnimateIn } from "../ui/AnimateIn";
import { ShieldCheck, Sparkles, ArrowRight } from "lucide-react";

export function InsuranceCashlessSection() {
  const partners = HOSPITAL_INFO.insurancePartners;
  const displayPartners = partners.slice(0, 12);

  return (
    <section id="insurance" className="py-16 sm:py-22 bg-gradient-to-b from-[#FFF5EC] to-[#FFF0E6] text-[#262626] relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-10 right-20 w-[400px] h-[400px] rounded-full bg-[#E94B1C]/[0.03] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] rounded-full bg-[#FF8A3D]/[0.03] blur-[80px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <AnimateIn animation="fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#FFF0E6] to-[#FFE8D6] text-[#E94B1C] text-[11px] font-extrabold uppercase tracking-[0.14em] mb-4 border border-[#FADCCB]/80 shadow-[0_2px_8px_rgba(233,75,28,0.06)]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>TRUSTED PARTNERSHIPS</span>
            </div>
          </AnimateIn>

          <AnimateIn animation="fade-up" delay={80}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif-heading font-bold text-[#14233C] tracking-tight leading-tight">
              Insurance &{" "}
              <span className="bg-gradient-to-r from-[#E94B1C] to-[#F26A21] bg-clip-text text-transparent">
                Cashless Facility
              </span>
            </h2>
          </AnimateIn>

          <AnimateIn animation="fade-up" delay={150}>
            <p className="mt-3 text-sm sm:text-base md:text-lg text-[#4A5568] font-medium leading-relaxed max-w-2xl mx-auto">
              We are empaneled with major insurance companies to provide cashless medical services for your convenience.
            </p>
          </AnimateIn>
        </div>

        {/* Infinite Scrolling Logo Marquee */}
        <AnimateIn animation="fade-up" delay={200}>
          <div className="relative py-8 overflow-hidden">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-[#FFF5EC] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-[#FFF5EC] to-transparent z-10 pointer-events-none" />

            <div className="flex animate-insurance-scroll">
              {/* Render partners twice for seamless loop */}
              {[...displayPartners, ...displayPartners].map((partner, idx) => (
                <div
                  key={`${partner.id}-${idx}`}
                  className="shrink-0 px-6 sm:px-10 flex items-center justify-center"
                  title={partner.name}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-10 sm:max-h-14 w-auto max-w-[120px] sm:max-w-[160px] object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-400"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>

        {/* View All Button */}
        <AnimateIn animation="fade-up" delay={250}>
          <div className="mt-8 sm:mt-10 text-center">
            <Link
              to="/insurance-partners"
              className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#E94B1C] to-[#C63D1B] hover:from-[#C63D1B] hover:to-[#A83218] transition-all shadow-[0_6px_20px_rgba(233,75,28,0.3)] hover:shadow-[0_8px_28px_rgba(233,75,28,0.4)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>View All 24+ Insurance Partners</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </AnimateIn>

        {/* Help Note */}
        <AnimateIn animation="fade-up" delay={300}>
          <div className="mt-10 sm:mt-12 max-w-2xl mx-auto p-5 sm:p-6 rounded-2xl bg-white/90 backdrop-blur-sm border border-[#EFE5DC] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#FFF0E6] to-[#FFE3D0] text-[#E94B1C] flex items-center justify-center shrink-0 border border-[#FADCCB]/60 shadow-xs">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-xs sm:text-sm">
                <span className="font-bold text-[#14233C] block">Need assistance with Cashless Pre-Authorization?</span>
                <span className="text-[#756860]">Contact our Hospital Insurance Desk directly at 8500904999</span>
              </div>
            </div>
            <a
              href="mailto:insurancedesksuryahospital@gmail.com"
              className="shrink-0 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#E94B1C] to-[#C63D1B] hover:from-[#C63D1B] hover:to-[#A83218] transition-all shadow-xs"
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

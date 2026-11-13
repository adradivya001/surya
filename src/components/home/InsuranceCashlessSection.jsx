import React from "react";
import { Link } from "react-router-dom";
import { HOSPITAL_INFO } from "../../constants/hospitalData";
import { AnimateIn } from "../ui/AnimateIn";
import { ShieldCheck, ArrowRight } from "lucide-react";

export function InsuranceCashlessSection() {
  // Show a curated, compact selection of 8 prominent insurance partners
  const featuredPartners = HOSPITAL_INFO.insurancePartners.slice(0, 8);

  return (
    <section id="insurance" className="py-12 sm:py-16 bg-gradient-to-b from-[#FFF5EC] to-[#FFF0E6] text-[#262626] relative overflow-hidden border-t border-[#F2E4D6]/70">
      {/* Ambient glows */}
      <div className="absolute top-10 right-20 w-[350px] h-[350px] rounded-full bg-[#E94B1C]/[0.03] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[250px] h-[250px] rounded-full bg-[#FF8A3D]/[0.03] blur-[80px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <AnimateIn animation="fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#FFF0E6] to-[#FFE8D6] text-[#E94B1C] text-[11px] font-extrabold uppercase tracking-[0.14em] mb-4 border border-[#FADCCB]/80 shadow-[0_2px_8px_rgba(233,75,28,0.06)]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>CASHLESS HEALTHCARE</span>
            </div>
          </AnimateIn>

          <AnimateIn animation="fade-up" delay={80}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif-heading font-bold text-[#14233C] tracking-tight leading-tight">
              Insurance &{" "}
              <span className="bg-gradient-to-r from-[#E94B1C] to-[#F26A21] bg-clip-text text-transparent">
                Cashless Support
              </span>
            </h2>
          </AnimateIn>

          <AnimateIn animation="fade-up" delay={150}>
            <p className="mt-3 text-sm sm:text-base text-[#4A5568] font-medium leading-relaxed max-w-2xl mx-auto">
              Empaneled with major public and private insurance companies and TPAs to provide hassle-free cashless hospitalization.
            </p>
          </AnimateIn>
        </div>

        {/* ── Compact Curated Partner Grid (8 Prominent Partners) ── */}
        <AnimateIn animation="fade-up" delay={200}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4 max-w-4xl mx-auto">
            {featuredPartners.map((partner) => (
              <div
                key={partner.id}
                className="h-[78px] sm:h-[86px] flex items-center justify-center px-4 py-3 rounded-2xl bg-white/95 border border-[#EFE5DC] hover:border-[#E94B1C]/35 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group"
                title={partner.name}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-8 sm:max-h-10 w-auto max-w-[110px] sm:max-w-[130px] object-contain grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-300"
                  loading="lazy"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </AnimateIn>

        {/* View All Insurance Partners Button */}
        <AnimateIn animation="fade-up" delay={260}>
          <div className="mt-8 text-center">
            <Link
              to="/insurance-partners"
              className="group inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#E94B1C] to-[#C63D1B] hover:from-[#C63D1B] hover:to-[#A83218] transition-all shadow-[0_4px_16px_rgba(233,75,28,0.25)] hover:shadow-[0_6px_22px_rgba(233,75,28,0.35)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>View All 24+ Insurance Partners</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </AnimateIn>

        {/* Compact Help Note */}
        <AnimateIn animation="fade-up" delay={320}>
          <div className="mt-8 sm:mt-10 max-w-2xl mx-auto p-4 sm:p-5 rounded-2xl bg-white/90 backdrop-blur-sm border border-[#EFE5DC] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left shadow-2xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FFF0E6] to-[#FFE3D0] text-[#E94B1C] flex items-center justify-center shrink-0 border border-[#FADCCB]/60 shadow-xs">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-xs sm:text-sm">
                <span className="font-bold text-[#14233C] block">Need assistance with Cashless Pre-Authorization?</span>
                <span className="text-[#756860]">Our Hospital Helpdesk assists you with desk queries: 8500904999</span>
              </div>
            </div>
            <a
              href="mailto:suryahospitalatp@gmail.com"
              className="shrink-0 px-4 py-2 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#E94B1C] to-[#C63D1B] hover:from-[#C63D1B] hover:to-[#A83218] transition-all shadow-xs"
            >
              Email Helpdesk
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

export default InsuranceCashlessSection;

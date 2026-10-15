import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { ArrowRight, CheckCircle2, HeartPulse } from "lucide-react";
import { AnimateIn } from "../ui/AnimateIn";

export function HomeAboutPreview() {
  return (
    <section className="py-18 md:py-28 bg-[#FCFAF7] border-b border-[#DED7D7] overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Relevant hospital photograph with dark architectural backing */}
          <AnimateIn animation="slide-left" duration={800} className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#DED7D7] shadow-lg bg-white p-3 transition-transform hover:scale-[1.01] duration-300">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#28171D]">
                <img
                  src="/images/surya-reception.jpg"
                  alt="Surya Hospital reception lobby in Sai Nagar, Anantapur"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#28171D]/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 text-white text-xs font-bold tracking-wide">
                  Surya Hospital • Sai Nagar Campus
                </div>
              </div>
            </div>

            {/* Accent badge - Pops up */}
            <div className="hidden sm:flex absolute -bottom-5 -right-5 bg-[#28171D] text-white p-4 rounded-xl shadow-xl items-center gap-3 text-xs font-bold border border-[#3A222A]">
              <HeartPulse className="w-5 h-5 text-[#B69A65] animate-pulse" />
              <span className="tracking-wide">Ethical Patient-First Care</span>
            </div>
          </AnimateIn>

          {/* Right Column: Heading & content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <AnimateIn animation="slide-right" delay={100}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-widest bg-[#E8D8D9] text-[#641D2D] border border-[#DED7D7]">
                <span>ABOUT SURYA HOSPITAL</span>
              </div>
            </AnimateIn>

            <AnimateIn animation="slide-right" delay={200}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#29252A] tracking-tight leading-tight">
                Kind Healthcare for Your Entire Family
              </h2>
            </AnimateIn>

            <AnimateIn animation="slide-right" delay={300}>
              <p className="text-base sm:text-lg text-[#6F686B] leading-relaxed font-normal">
                Surya Hospital is a patient-trusted multi-speciality hospital in Sai Nagar, Anantapur. We bring together experienced physicians, sterile surgical suites, 24/7 casualty care, and an in-house medical pharmacy so your family receives dependable care under one roof.
              </p>
            </AnimateIn>

            <AnimateIn animation="fade-up" delay={400}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="flex items-start gap-3 text-xs sm:text-sm text-[#29252A] font-semibold bg-white p-4 rounded-xl border border-[#DED7D7] shadow-2xs hover:border-[#641D2D] transition">
                  <CheckCircle2 className="w-4 h-4 text-[#641D2D] shrink-0 mt-0.5" />
                  <span>Kind doctors who listen carefully to your health needs</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-[#29252A] font-semibold bg-white p-4 rounded-xl border border-[#DED7D7] shadow-2xs hover:border-[#641D2D] transition">
                  <CheckCircle2 className="w-4 h-4 text-[#641D2D] shrink-0 mt-0.5" />
                  <span>Clean operating rooms for safe, gentle surgeries</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-[#29252A] font-semibold bg-white p-4 rounded-xl border border-[#DED7D7] shadow-2xs hover:border-[#641D2D] transition">
                  <CheckCircle2 className="w-4 h-4 text-[#641D2D] shrink-0 mt-0.5" />
                  <span>24/7 emergency doctor & round-the-clock casualty desk</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-[#29252A] font-semibold bg-white p-4 rounded-xl border border-[#DED7D7] shadow-2xs hover:border-[#641D2D] transition">
                  <CheckCircle2 className="w-4 h-4 text-[#641D2D] shrink-0 mt-0.5" />
                  <span>Comfortable hospital rooms & round-the-clock nursing care</span>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn animation="pop" delay={500} className="pt-2">
              <Link to="/about" className="inline-block w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="md"
                  icon={ArrowRight}
                  iconPosition="right"
                  className="bg-[#E56A2E] hover:bg-[#C8541D] text-white font-bold w-full sm:w-auto shadow-sm"
                >
                  Learn More About Our Hospital
                </Button>
              </Link>
            </AnimateIn>
          </div>
        </div>
      </Container>
    </section>
  );
}

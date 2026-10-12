import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../ui/Container";
import {
  Calendar,
  ArrowRight,
  ShieldCheck,
  Ambulance,
  Stethoscope,
  Building2,
  HeartHandshake,
} from "lucide-react";
import "./Hero.css";

export function HomeHero() {
  const trustItems = [
    {
      title: "24/7 Emergency Care",
      desc: "Immediate assistance when you need it.",
      icon: Ambulance,
    },
    {
      title: "Experienced Doctors",
      desc: "Skilled and trusted medical professionals.",
      icon: Stethoscope,
    },
    {
      title: "Modern Facilities",
      desc: "Advanced equipment and comfortable care.",
      icon: Building2,
    },
    {
      title: "Patient-First Approach",
      desc: "Compassionate care for every patient.",
      icon: HeartHandshake,
    },
  ];

  return (
    <section className="hero-section">
      {/* Hero Banner Visual Layer */}
      <div className="hero-background-wrapper">
        <img
          src="/Surya Hospital Hero Banner.png"
          alt="Surya Hospital Building Campus"
          className="hero-background-visual"
          loading="eager"
        />
      </div>

      {/* Hero Text Content (Editorial Left with Frosted Glass Card Shift on Mobile) */}
      <Container size="wide" className="relative z-10 flex-1 flex flex-col justify-center py-4 sm:py-6 lg:py-8">
        <div className="hero-editorial-left space-y-3.5 sm:space-y-4">
          {/* Main Heading: Fluid Typography */}
          <h1 className="hero-headline font-serif font-bold text-[#1B2533] tracking-tight">
            Better Care.
            <span className="block font-serif italic text-[#C65332] font-semibold mt-0.5 sm:mt-1">
              Healthier Lives.
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-xs sm:text-[15px] lg:text-[16px] text-[#3A434E] leading-relaxed max-w-[460px] font-normal">
            Your family deserves quality healthcare and personal attention. We are here to help you find the right care and feel confident at every step of your health journey.
          </p>

          {/* Dual CTAs */}
          <div className="hero-cta-group pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
            <Link to="/appointment" className="w-full sm:w-auto">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3 rounded-full font-bold text-xs sm:text-[15px] bg-[#0B1320] hover:bg-[#1C2636] text-white shadow-md hover:scale-[1.01] active:scale-[0.99] transition cursor-pointer min-h-[44px] w-full sm:w-auto"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </Link>

            <Link to="/specialities" className="w-full sm:w-auto">
              <button
                type="button"
                className="inline-flex items-center justify-center px-5 sm:px-7 py-3 rounded-full font-bold text-xs sm:text-[15px] bg-white hover:bg-[#FFF8F2] text-[#252B33] border border-[#F0D9CB] hover:border-[#D98A62] shadow-2xs hover:scale-[1.01] active:scale-[0.99] transition cursor-pointer min-h-[44px] w-full sm:w-auto"
              >
                Explore Our Services
              </button>
            </Link>
          </div>

          {/* Leadership Trust Pill Badge */}
          <div className="pt-0.5 w-full flex hero-trust-badge">
            <div className="inline-flex items-start sm:items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-xl sm:rounded-full bg-[#FCECE2] border border-[#F0D9CB] text-[11px] sm:text-xs font-semibold text-[#252B33] shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C65332] shrink-0 mt-0.5 sm:mt-0" />
              <span>
                Led by <strong className="text-[#C65332]">Dr. D. Surya Prakash</strong> (M.D. Internal Medicine, Managing Director)
              </span>
            </div>
          </div>
        </div>
      </Container>

      {/* Trust Strip: Adaptive Columns (4 col desktop, 2 col tablet/mobile, 1 col phone) */}
      <Container size="wide" className="hero-trust-container relative z-10 shrink-0 pb-6 lg:pb-5 pt-2 sm:pt-3">
        <div className="w-full bg-white/95 backdrop-blur-xs rounded-2xl border border-[#F0D9CB] shadow-sm px-3.5 py-3 sm:px-5 sm:py-3.5 lg:py-3.5 lg:px-4">
          <div className="hero-trust-grid">
            {trustItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="hero-trust-item flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 px-2 lg:px-4"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#FCECE2] border border-[#F0D9CB] flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#C65332]" strokeWidth={2} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[13px] sm:text-[14.5px] lg:text-[15px] font-semibold text-[#252B33] tracking-tight leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[11px] sm:text-[11.5px] lg:text-[12px] text-[#59616B] leading-tight sm:leading-relaxed mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HomeHero;

import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "../ui/Container";
import {
  Calendar,
  Ambulance,
  Stethoscope,
  Building2,
  HeartHandshake,
} from "lucide-react";
import { HOSPITAL_INFO } from "../../constants/hospitalData";
import "./Hero.css";

export function HomeHero() {
  const [zoomFactor, setZoomFactor] = useState(0); // 0 at top, 1 at fully zoomed
  const heroRef = useRef(null);

  // Respect reduced motion preference for the scroll zoom
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (prefersReducedMotion) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          // Calculate zoom progression over first 450px of scrolling
          const maxScroll = 450;
          const progress = Math.min(Math.max(scrollY / maxScroll, 0), 1);
          // Smooth easeOutCubic curve for a natural, grounded motion
          const eased = 1 - Math.pow(1 - progress, 3);

          setZoomFactor(Number(eased.toFixed(4)));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prefersReducedMotion]);
  const trustItems = [
    {
      title: "24/7 Emergency Care",
      desc: "Immediate doctor checkup and casualty care in Sai Nagar.",
      icon: Ambulance,
    },
    {
      title: "Experienced Doctors",
      desc: "General medicine, surgery, and bone care specialists.",
      icon: Stethoscope,
    },
    {
      title: "Clean Operating Rooms",
      desc: "Safe planned and keyhole surgeries.",
      icon: Building2,
    },
    {
      title: "24/7 On-Site Pharmacy",
      desc: "Medicines and surgical supplies available round the clock.",
      icon: HeartHandshake,
    },
  ];

  return (
    <section className="stanford-hero-section pt-0">
      {/* 1. Full-Width Horizontal Building Video with Cinematic Overlay */}
      <div className="stanford-hero-image-stage w-full p-0 m-0" ref={heroRef}>
        <div className="stanford-building-fullbleed w-full max-w-none rounded-none border-none shadow-none">
          <video
            src="/images/surya-hospital-building.mp4"
            poster="/images/surya-hospital-building-hero.jpg"
            preload="metadata"
            className="stanford-building-img w-full h-[70vh] sm:h-[78vh] lg:h-[84vh] object-cover transition-transform ease-out"
            style={{
              transform: prefersReducedMotion
                ? "none"
                : `scale(${1 + zoomFactor * 0.05}) translate3d(0, 0, 0)`,
              transformOrigin: "center 38%",
              willChange: prefersReducedMotion ? "auto" : "transform",
            }}
            autoPlay
            loop
            muted
            playsInline
          />
          {/* Gentle cinematic scrim that keeps the video vibrant while text remains crystal clear */}
          <div className="hero-cinematic-scrim" />

          {/* Overlaid Headline & Verified Action Strip */}
          <div className="hero-overlay-content">
            <Container size="default">
              <div className="max-w-3xl text-left space-y-4 sm:space-y-5">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-bold uppercase tracking-widest text-[#E8D8D9] shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-[#B69A65]" />
                    <span>Surya Hospital • Sai Nagar, Anantapur</span>
                  </div>

                  <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4rem] font-black text-white tracking-tight leading-[1.1] drop-shadow-lg">
                    Comprehensive Healthcare.<br />
                    <span className="text-[#E8D8D9]">Compassionate Care.</span>
                  </h1>

                  <p className="text-base sm:text-lg md:text-xl text-white/95 max-w-2xl leading-relaxed drop-shadow-md font-normal">
                    Physician consultations, sterile operating theatres, fracture recovery, and 24/7 casualty response in Sai Nagar, Anantapur.
                  </p>
                </div>

                <div className="pt-3 sm:pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    to="/appointment"
                    className="inline-flex items-center gap-2 px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl text-xs sm:text-sm font-bold bg-[#E56A2E] hover:bg-[#C8541D] text-white shadow-xl hover:shadow-2xl transition-all active:scale-95"
                  >
                    <Calendar className="w-4 h-4 text-white" />
                    <span>Book an Appointment</span>
                  </Link>

                  <Link
                    to="/specialities"
                    className="inline-flex items-center gap-2 px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl text-xs sm:text-sm font-bold bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/30 transition-all active:scale-95"
                  >
                    <span>Explore Our Specialities</span>
                  </Link>

                  <a
                    href={`tel:${HOSPITAL_INFO.phoneRaw}`}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white/90 hover:text-white underline underline-offset-4 decoration-[#B69A65] transition-colors ml-1"
                    title="Call 24/7 Casualty Desk"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#B69A65] animate-ping" />
                    <span>Casualty: {HOSPITAL_INFO.phone}</span>
                  </a>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </div>

      {/* 3. Sleek Integrated Trust Strip */}
      <div className="stanford-trust-bar-wrapper">
        <Container size="wide">
          <div className="stanford-trust-box">
            <div className="stanford-trust-grid">
              {trustItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="stanford-trust-item">
                    <div className="stanford-trust-icon-box">
                      <Icon className="w-4 h-4 text-[#641D2D]" strokeWidth={2.2} />
                    </div>
                    <div className="min-w-0 text-left">
                      <h3 className="text-sm font-bold text-[#29252A] leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#6F686B] leading-normal mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default HomeHero;

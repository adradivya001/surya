import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, HeartPulse } from "lucide-react";
import { ScrollReveal, HeadingReveal } from "../motion/MotionReveal";

export function PageHero({
  eyebrow = "SURYA HOSPITAL • ANANTAPUR",
  title,
  description,
  breadcrumbs = [],
  children,
  badge,
  centered = true,
}) {
  return (
    <section className="relative bg-gradient-to-b from-[#FFFDFB] via-[#FFF9F3] to-[#FFF0E6]/50 border-b border-[#E9D8CE]/80 pt-32 sm:pt-36 md:pt-40 pb-12 sm:pb-16 md:pb-20 overflow-hidden text-center">
      {/* Brand warm peach & amber background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FFF0E6]/70 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-72 h-72 bg-[#FF8A3D]/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb Navigation - Centered */}
        {breadcrumbs.length > 0 && (
          <ScrollReveal direction="down" delay={0.02}>
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#756860] mb-4"
            >
              <Link to="/" className="hover:text-[#E94B1C] transition font-bold">
                Home
              </Link>
              {breadcrumbs.map((crumb, idx) => (
                <React.Fragment key={crumb.label || idx}>
                  <ChevronRight className="w-3.5 h-3.5 text-[#E94B1C]" />
                  {crumb.path ? (
                    <Link to={crumb.path} className="hover:text-[#E94B1C] transition">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-[#E94B1C] font-bold">{crumb.label}</span>
                  )}
                </React.Fragment>
              ))}
            </nav>
          </ScrollReveal>
        )}

        {/* 1. Centered Eyebrow Pill Badge (Slides Down) */}
        <ScrollReveal direction="down" delay={0.05}>
          <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#FFF0E6] text-[#E94B1C] border border-[#FADCCB] shadow-2xs mb-4">
            <HeartPulse className="w-3.5 h-3.5 text-[#E94B1C]" />
            <span>{eyebrow}</span>
            {badge && <span className="opacity-60">• {badge}</span>}
          </div>
        </ScrollReveal>

        {/* 2. Main Title in the Middle (HeadingReveal) */}
        <HeadingReveal delay={0.1}>
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#14233C] tracking-tight leading-[1.2] mb-3">
            {title}
          </h1>
        </HeadingReveal>

        {/* 3. Subtitle / Description in the Middle */}
        {description && (
          <ScrollReveal direction="up" delay={0.15}>
            <p className="text-sm sm:text-base text-[#5A687A] leading-relaxed max-w-[700px] mx-auto font-normal">
              {description}
            </p>
          </ScrollReveal>
        )}

        {/* Action CTAs in the Middle */}
        {children && (
          <ScrollReveal direction="up" delay={0.2}>
            <div className="pt-6 flex flex-wrap items-center justify-center gap-3">
              {children}
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}

export default PageHero;

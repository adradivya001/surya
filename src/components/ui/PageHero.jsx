import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./Container";
import { ChevronRight, HeartPulse } from "lucide-react";

export function PageHero({
  eyebrow = "SURYA HOSPITAL • ANANTAPUR",
  title,
  description,
  breadcrumbs = [],
  children,
  badge,
}) {
  return (
    <div className="relative bg-gradient-to-b from-[#FCECE2] via-[#FFF8F2] to-[#FFF8F2] border-b border-[#F0D9CB] py-8 sm:py-12 md:py-16 overflow-hidden">
      {/* Subtle decorative background elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-[#F6D8C5]/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-60 h-60 rounded-full bg-[#FCECE2] blur-2xl pointer-events-none" />

      <Container className="relative z-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs text-[#59616B] mb-3 sm:mb-4">
          <Link to="/" className="hover:text-[#C65332] transition flex items-center gap-1 font-medium">
            <span>Home</span>
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={crumb.label || idx}>
              <ChevronRight className="w-3.5 h-3.5 text-[#B96645]/60" />
              {crumb.path ? (
                <Link to={crumb.path} className="hover:text-[#C65332] transition font-medium">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-[#252B33] font-bold">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Content */}
        <div className="max-w-3xl space-y-3 text-left">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white text-[#B96645] border border-[#F0D9CB] shadow-2xs">
              <HeartPulse className="w-3.5 h-3.5 text-[#C65332]" />
              <span>{eyebrow}</span>
            </span>

            {badge && (
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wide bg-[#FCECE2] text-[#A84328] border border-[#F0D9CB]">
                {badge}
              </span>
            )}
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#252B33] tracking-tight leading-tight">
            {title}
          </h1>

          {description && (
            <p className="text-sm sm:text-base md:text-lg text-[#59616B] leading-relaxed max-w-2xl pt-1">
              {description}
            </p>
          )}

          {children && <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3">{children}</div>}
        </div>
      </Container>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./Container";
import { ChevronRight, HeartPulse } from "lucide-react";
import { AnimateIn } from "./AnimateIn";

export function PageHero({
  eyebrow = "SURYA HOSPITAL • ANANTAPUR",
  title,
  description,
  breadcrumbs = [],
  children,
  badge,
}) {
  return (
    <div className="relative bg-[#FCFAF7] border-b border-[#DED7D7] py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Editorial geometric background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8D8D9]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-72 h-72 bg-[#B69A65]/10 rounded-full blur-2xl pointer-events-none" />

      <Container className="relative z-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#6F686B] mb-5">
          <Link to="/" className="hover:text-[#641D2D] transition flex items-center gap-1 font-bold">
            <span>Home</span>
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={crumb.label || idx}>
              <ChevronRight className="w-3.5 h-3.5 text-[#B69A65]" />
              {crumb.path ? (
                <Link to={crumb.path} className="hover:text-[#641D2D] transition">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-[#29252A] font-bold">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Content */}
        <AnimateIn animation="slide-left" className="max-w-4xl space-y-4 text-left">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-widest bg-[#641D2D] text-white shadow-2xs">
              <HeartPulse className="w-3.5 h-3.5 text-[#B69A65]" />
              <span>{eyebrow}</span>
            </span>

            {badge && (
              <span className="px-3 py-1 rounded-md text-[11px] font-bold tracking-wider uppercase bg-[#E8D8D9] text-[#28171D] border border-[#DED7D7]">
                {badge}
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#29252A] tracking-tight leading-[1.12]">
            {title}
          </h1>

          {description && (
            <p className="text-base sm:text-lg md:text-xl text-[#6F686B] leading-relaxed max-w-3xl pt-1 font-normal">
              {description}
            </p>
          )}

          {children && <div className="pt-6 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3.5">{children}</div>}
        </AnimateIn>
      </Container>
    </div>
  );
}

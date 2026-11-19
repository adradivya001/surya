import React from "react";
import { Phone, MapPin } from "lucide-react";
import { HOSPITAL_INFO } from "../../constants/hospitalData";

/**
 * FloatingActionButtons Component
 * Clean, transparent floating action stack with synchronized shaking & lighting effect.
 * Appears across all pages.
 * Contains:
 * 1. 📞 Call Hospital / 24/7 Emergency (tel:)
 * 2. 📍 Google Maps Location / Directions (MapPin)
 */
export function FloatingActionButtons() {
  const mapsUrl = HOSPITAL_INFO.directionsUrl || HOSPITAL_INFO.mapsUrl;

  return (
    <aside
      aria-label="Quick Hospital Contact & Location Actions"
      className="fixed right-2 sm:right-3.5 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-2.5 select-none bg-transparent p-0 border-0 shadow-none pointer-events-auto"
    >
      {/* 1. 24/7 Emergency Call */}
      <a
        href={`tel:${HOSPITAL_INFO.phoneRaw}`}
        aria-label="Call Hospital 24/7 Helpline"
        title={`Call 24/7 Helpline: ${HOSPITAL_INFO.phone}`}
        className="group relative flex flex-col items-center gap-0.5 active:scale-95 transition-transform"
      >
        <div className="floating-light-call relative overflow-hidden w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-[#FADCCB] flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-[#E94B1C]">
          <span className="floating-light-beam" />
          <Phone className="relative z-10 w-5 h-5 text-[#E94B1C] group-hover:text-white transition-colors" />
        </div>
        <span className="text-[10px] font-bold text-[#14233C] tracking-tight bg-white/95 backdrop-blur-xs px-2 py-0.5 rounded-full shadow-2xs border border-[#F0E4DA] group-hover:text-[#E94B1C] transition-colors leading-none text-center">
          Call
        </span>

        {/* Hover Tooltip (Desktop) */}
        <span className="pointer-events-none absolute right-full mr-2.5 top-1/2 -translate-y-1/2 hidden lg:group-hover:inline-flex items-center px-2.5 py-1 rounded-md bg-[#14233C] text-white text-xs font-semibold whitespace-nowrap shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          Call 24/7 Helpline
        </span>
      </a>

      {/* 2. Google Maps Navigation */}
      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open Hospital Location in Google Maps"
        title="Get Directions on Google Maps"
        className="group relative flex flex-col items-center gap-0.5 active:scale-95 transition-transform"
      >
        <div className="floating-light-maps relative overflow-hidden w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-[#CFE4FD] flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-[#1A73E8]">
          <span className="floating-light-beam" />
          <MapPin className="relative z-10 w-5 h-5 text-[#EA4335] group-hover:text-white transition-colors" />
        </div>
        <span className="text-[10px] font-bold text-[#14233C] tracking-tight bg-white/95 backdrop-blur-xs px-2 py-0.5 rounded-full shadow-2xs border border-[#CFE4FD] group-hover:text-[#1A73E8] transition-colors leading-none text-center">
          Maps
        </span>

        {/* Hover Tooltip (Desktop) */}
        <span className="pointer-events-none absolute right-full mr-2.5 top-1/2 -translate-y-1/2 hidden lg:group-hover:inline-flex items-center px-2.5 py-1 rounded-md bg-[#14233C] text-white text-xs font-semibold whitespace-nowrap shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          Get Google Maps Directions
        </span>
      </a>
    </aside>
  );
}

export default FloatingActionButtons;

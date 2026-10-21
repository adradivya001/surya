import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Calendar } from "lucide-react";
import { HOSPITAL_INFO } from "../../constants/hospitalData";

export function FloatingActionButtons() {
  const [inHero, setInHero] = useState(false);
  const location = useLocation();

  // On home page ("/"), the reference UI already has its own integrated action buttons or hero docking
  if (location.pathname === "/") {
    return null;
  }

  useEffect(() => {
    // Only detect hero on the homepage ("/")
    if (location.pathname !== "/") {
      setInHero(false);
      return;
    }

    const heroEl = document.getElementById("home-hero");
    if (!heroEl) {
      setInHero(false);
      return;
    }

    // 1. Mouse move tracking: check if cursor coordinates fall inside hero bounding rect
    const handleMouseMove = (e) => {
      const rect = heroEl.getBoundingClientRect();
      const isCursorInside =
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom &&
        e.clientX >= rect.left &&
        e.clientX <= rect.right;

      setInHero(isCursorInside);
    };

    // 2. Mouse leave window: reset
    const handleMouseLeave = () => {
      setInHero(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [location.pathname]);

  return (
    <aside
      aria-label="Quick Action Buttons"
      className={`fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-3 pointer-events-none select-none transition-all duration-300 ease-out ${inHero
          ? "opacity-0 translate-x-12 pointer-events-none"
          : "opacity-100 translate-x-0"
        }`}
    >
      {/* 1. WhatsApp Tab (Emerald Teal with frosted inner icon circle) */}
      <a
        href="https://wa.me/918500904999?text=Hello%20Surya%20Hospital,%20I%20would%20like%20to%20inquire%20about%20medical%20services."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp: 8500904999"
        className="pointer-events-auto group relative flex items-center pl-3.5 pr-2 py-2.5 rounded-l-full bg-[#00A884] text-white shadow-[0_8px_20px_rgba(0,168,132,0.35)] hover:shadow-[0_10px_25px_rgba(0,168,132,0.5)] hover:-translate-x-1 transition-all duration-200"
      >
        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center border border-white/30 group-hover:scale-105 transition-transform">
          {/* Custom crisp WhatsApp SVG matching image */}
          <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        </div>
        <span className="hidden sm:block absolute right-full mr-2.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-[#00A884] whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 shadow-md">
          WhatsApp Assistance
        </span>
      </a>

      {/* 2. Book Appointment Tab (Primary Orange with frosted inner circle) */}
      <Link
        to="/appointment"
        aria-label="Book Doctor Appointment"
        title="Book Doctor Appointment"
        className="pointer-events-auto group relative flex items-center pl-3.5 pr-2 py-2.5 rounded-l-full bg-[#E94B1C] text-white shadow-[0_8px_20px_rgba(233,75,28,0.35)] hover:shadow-[0_10px_25px_rgba(233,75,28,0.5)] hover:-translate-x-1 transition-all duration-200"
      >
        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/15 backdrop-blur-xs flex items-center justify-center border border-white/25 group-hover:scale-105 transition-transform">
          <Calendar className="w-5 h-5 text-white" strokeWidth={2.2} />
        </div>
        <span className="hidden sm:block absolute right-full mr-2.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-[#E94B1C] whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 shadow-md">
          Book Appointment
        </span>
      </Link>

      {/* 3. Call 24/7 Tab (Deep Orange with frosted inner circle) */}
      <a
        href={`tel:${HOSPITAL_INFO.phoneRaw}`}
        aria-label="Call Hospital 24/7"
        title="Call Hospital Desk: 8500904999"
        className="pointer-events-auto group relative flex items-center pl-3.5 pr-2 py-2.5 rounded-l-full bg-[#C63D1B] text-white shadow-[0_8px_20px_rgba(198,61,27,0.35)] hover:shadow-[0_10px_25px_rgba(198,61,27,0.5)] hover:-translate-x-1 transition-all duration-200"
      >
        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center border border-white/30 group-hover:scale-105 transition-transform">
          <Phone className="w-5 h-5 text-white" strokeWidth={2.2} />
        </div>
        <span className="hidden sm:block absolute right-full mr-2.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-[#C63D1B] whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 shadow-md">
          Call 24/7: 8500904999
        </span>
      </a>
    </aside>
  );
}

export default FloatingActionButtons;

import React from "react";
import { Link } from "react-router-dom";
import { Calendar, Phone } from "lucide-react";
import { HOSPITAL_INFO } from "../../constants/hospitalData";

export function FloatingActionButtons() {
  return (
    <aside
      aria-label="Quick Action Buttons"
      className="fixed right-3 sm:right-5 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-2.5 py-4 px-3 rounded-full select-none transition-transform duration-300 hover:scale-105"
      style={{
        background:
          "linear-gradient(180deg, rgba(58, 38, 22, 0.72) 0%, rgba(38, 24, 14, 0.78) 50%, rgba(48, 32, 20, 0.82) 100%)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255, 255, 255, 0.45)",
        boxShadow:
          "0 18px 45px rgba(0, 0, 0, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.2)",
      }}
    >
      {/* 1. WhatsApp */}
      <a
        href="https://wa.me/918500904999?text=Hello%20Surya%20Hospital,%20I%20would%20like%20to%20inquire%20about%20medical%20services."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="WhatsApp: 8500904999"
        className="group flex flex-col items-center gap-1.5 p-1 rounded-full transition-transform active:scale-95"
      >
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
          style={{
            background: "rgba(35, 48, 30, 0.65)",
          }}
        >
          <div className="w-7 h-7 rounded-full bg-[#00A884] flex items-center justify-center shadow-[0_2px_8px_rgba(0,168,132,0.4)]">
            <svg
              className="w-4 h-4 text-white fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
          </div>
        </div>
        <span className="text-[11px] font-medium tracking-tight text-[#8FA9C4] group-hover:text-white transition-colors">
          WhatsApp
        </span>
      </a>

      {/* Divider */}
      <div
        className="w-7 h-[1.5px] rounded-full"
        style={{ background: "rgba(255, 255, 255, 0.45)" }}
      />

      {/* 2. Book Appointment */}
      <Link
        to="/appointment"
        aria-label="Book Doctor Appointment"
        title="Book Appointment"
        className="group flex flex-col items-center gap-1.5 p-1 rounded-full transition-transform active:scale-95"
      >
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
          style={{
            background: "rgba(65, 38, 16, 0.7)",
          }}
        >
          <Calendar className="w-5 h-5 text-[#F28B24] stroke-[2.2]" />
        </div>
        <span className="text-[11px] font-medium tracking-tight text-[#8FA9C4] group-hover:text-white text-center leading-[1.2] max-w-[68px] transition-colors">
          Book<br />Appointment
        </span>
      </Link>

      {/* Divider */}
      <div
        className="w-7 h-[1.5px] rounded-full"
        style={{ background: "rgba(255, 255, 255, 0.45)" }}
      />

      {/* 3. 24/7 Call */}
      <a
        href={`tel:${HOSPITAL_INFO.phoneRaw}`}
        aria-label="Call Hospital 24/7"
        title="Call 24/7 Casualty Desk: 8500904999"
        className="group flex flex-col items-center gap-1.5 p-1 rounded-full transition-transform active:scale-95"
      >
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
          style={{
            background: "rgba(75, 42, 28, 0.7)",
          }}
        >
          <Phone className="w-4 h-4 text-[#F05A28] fill-current" />
        </div>
        <span className="text-[11px] font-medium tracking-tight text-[#8FA9C4] group-hover:text-white text-center leading-[1.2] transition-colors">
          24/7<br />Call
        </span>
      </a>
    </aside>
  );
}

export default FloatingActionButtons;

import { Phone } from "lucide-react";
import { HOSPITAL_INFO } from "../../constants/hospitalData";

/**
 * FloatingEmergency247 Component
 * Persistent circular blinking red badge anchored to the right side of every page.
 * Highly eye-catching to immediately grasp user attention for 24/7 care & emergency helpline.
 */
export function FloatingEmergency247() {
  return (
    <aside
      aria-label="24/7 Emergency Care Helpline"
      className="fixed right-4 sm:right-6 md:right-8 bottom-20 lg:bottom-7 z-50 pointer-events-auto select-none"
    >
      <a
        href={`tel:${HOSPITAL_INFO?.phoneRaw || "+918500904999"}`}
        title="24/7 Emergency Care - Call +91 85009 04999"
        className="group relative flex flex-col items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-red-600 via-red-600 to-rose-700 text-white shadow-xl hover:scale-110 active:scale-95 transition-transform duration-200 cursor-pointer animate-emergency-red-blink border-2 border-white/90"
      >
        {/* Pulsing Outer Aura Halo */}
        <span
          className="absolute inset-0 rounded-full bg-red-500 opacity-75 animate-ping pointer-events-none"
          aria-hidden="true"
        />

        {/* Inner Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center leading-none">
          <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current mb-0.5 animate-bounce" />
          <span className="text-[12px] sm:text-[13px] font-black tracking-tight font-sans drop-shadow-sm">
            24/7
          </span>
          <span className="text-[8px] sm:text-[9px] font-extrabold uppercase tracking-widest text-red-100 opacity-95">
            CARE
          </span>
        </div>

        {/* Hover Tooltip tooltip on desktop */}
        <div className="hidden sm:group-hover:flex absolute right-full mr-3 top-1/2 -translate-y-1/2 items-center bg-gray-950/95 text-white px-3 py-1.5 rounded-xl shadow-2xl text-xs font-semibold whitespace-nowrap pointer-events-none border border-red-500/30">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse mr-2" />
          <span>Emergency: +91 85009 04999 (24/7)</span>
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-950/95" />
        </div>
      </a>
    </aside>
  );
}

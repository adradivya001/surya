import React from "react";
import { PhoneCall, MapPin, Clock } from "lucide-react";
import { Container } from "../ui/Container";
import { HOSPITAL_INFO } from "../../constants/hospitalData";

export function TopEmergencyBar() {
  return (
    <aside aria-label="Emergency Care Bar" className="bg-[#FFF0E6]/60 text-[#262626] text-xs border-b border-[#E9D8CE] select-none">
      <Container>
        <div className="flex items-center justify-between py-1.5 sm:py-2 gap-2 text-[11px] sm:text-xs">
          {/* Left: 24/7 Emergency indicator & Location */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E94B1C] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E94B1C]"></span>
            </span>
            <span className="font-bold text-[#C63D1B] text-[11px] sm:text-xs tracking-tight">
              24/7 Emergency
            </span>
            <span className="text-[#FF8A3D] hidden sm:inline">•</span>
            <span className="text-[#756860] hidden sm:inline-flex items-center gap-1 font-medium">
              <MapPin className="w-3 h-3 text-[#E94B1C] inline" />
              <span>{HOSPITAL_INFO.locationShort}</span>
            </span>
          </div>

          {/* Right: Phone Call Action & OPD */}
          <div className="flex items-center gap-3 sm:gap-4 text-[#756860] shrink-0">
            <div className="hidden lg:flex items-center gap-1.5 text-[#756860]">
              <Clock className="w-3 h-3 text-[#E94B1C]" />
              <span>OPD: 9:00 AM – 2:00 PM & 5:00 PM – 9:00 PM</span>
            </div>
            <a
              href={`tel:${HOSPITAL_INFO.phoneRaw}`}
              className="flex items-center gap-1 sm:gap-1.5 text-[#262626] hover:text-[#E94B1C] font-semibold transition text-[11px] sm:text-xs"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#E94B1C]" />
              <span className="hidden xs:inline sm:inline">Reception:</span>
              <span className="tracking-wide text-[#C63D1B] font-bold underline underline-offset-2 decoration-[#F0E2D9]">
                {HOSPITAL_INFO.phone}
              </span>
            </a>
          </div>
        </div>
      </Container>
    </aside>
  );
}
export default TopEmergencyBar;

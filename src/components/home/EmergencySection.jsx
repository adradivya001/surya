import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  PhoneCall,
  MapPin,
  AlertTriangle,
  CheckCircle2,
  Clock,
  ArrowRight,
  ShieldAlert,
  HeartPulse,
  Navigation,
} from "lucide-react";
import { HOSPITAL_INFO } from "../../constants/hospitalData";

export function EmergencySection() {
  const [liveTime, setLiveTime] = useState(() => {
    return new Date().toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setLiveTime(
        new Date().toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const emergencyServices = [
    {
      title: "24/7 Trauma & Casualty",
      desc: "Immediate stabilization for severe accidents, sudden physical trauma, and acute acute injuries.",
      icon: ShieldAlert,
    },
    {
      title: "Cardiac Emergency Bay",
      desc: "Rapid ECG, troponin testing, and continuous cardiac monitoring for sudden chest pain or suspected heart attacks.",
      icon: HeartPulse,
    },
    {
      title: "Critical Resuscitation & ICU",
      desc: "Multi-bed intensive care unit equipped with modern ventilators and on-duty specialists ready around the clock.",
      icon: AlertTriangle,
    },
  ];

  return (
    <section
      id="emergency"
      className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#FFF5ED] via-[#FFF9F3] to-[#FFF0E6] text-[#14233C] overflow-hidden border-t border-[#F0E2D9] scroll-mt-20"
    >
      {/* Background concentric pulse rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none opacity-20">
        <motion.div
          animate={{ scale: [1, 1.7], opacity: [0.5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
          className="absolute inset-0 rounded-full border-2 border-[#E94B1C]"
        />
        <motion.div
          animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 1 }}
          className="absolute inset-20 rounded-full border border-[#FF6B35]"
        />
      </div>

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Badges & Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-[#E94B1C] text-white shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              <span>24/7 CASUALTY &amp; TRAUMA ACTIVE</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200/80 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>On-Duty Triage Team Ready • {liveTime}</span>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#14233C] tracking-tight leading-tight">
            Immediate Response.{" "}
            <span className="bg-gradient-to-r from-[#E94B1C] to-[#C63D1B] bg-clip-text text-transparent">
              24/7 Emergency Care.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#5A687A] leading-relaxed max-w-2xl mx-auto font-medium">
            Our casualty department in Sai Nagar, Anantapur is fully equipped day and night with medical specialists, emergency oxygen, ICU life-support, and rapid diagnostics.
          </p>

          {/* Direct Emergency Call Button */}
          <div className="pt-2 relative inline-block">
            <motion.div
              animate={{ scale: [1, 1.06, 1], opacity: [0.6, 0.2, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-2 rounded-full bg-[#E94B1C]/25 blur-xs"
            />
            <a
              href={`tel:${HOSPITAL_INFO.phoneRaw}`}
              className="relative inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-base sm:text-lg font-extrabold bg-gradient-to-r from-[#E94B1C] to-[#C63D1B] hover:from-[#C63D1B] hover:to-[#A83218] text-white shadow-[0_6px_25px_rgba(233,75,28,0.35)] hover:shadow-[0_8px_32px_rgba(233,75,28,0.45)] transition transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce text-white" />
              </div>
              <span>Call Emergency Helpline: {HOSPITAL_INFO.phone}</span>
            </a>
          </div>
        </div>

        {/* 3 Quick Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto text-left mb-8">
          {emergencyServices.map((service) => {
            const IconComp = service.icon;
            return (
              <div
                key={service.title}
                className="p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#EADBCE] shadow-xs hover:border-[#E94B1C]/40 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FFF0E6] to-[#FFE3D0] text-[#E94B1C] flex items-center justify-center mb-3 border border-[#FADCCB]/70 shadow-2xs">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-[#14233C] mb-1.5">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#5A687A] leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Location & Navigation Guidance Strip */}
        <div className="max-w-3xl mx-auto p-4 sm:p-5 rounded-2xl bg-white/90 border border-[#EADBCE] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-[#5A687A] shadow-2xs">
          <div className="flex items-center gap-2.5 text-center sm:text-left">
            <MapPin className="w-4 h-4 text-[#E94B1C] shrink-0" />
            <span className="font-medium text-[#14233C]">
              <strong>Casualty Location:</strong> {HOSPITAL_INFO.fullAddress}
            </span>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href={HOSPITAL_INFO.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-[#14233C] hover:text-[#E94B1C] bg-[#FFF9F3] hover:bg-[#FFF0E6] border border-[#E9D8CE] transition"
            >
              <Navigation className="w-3.5 h-3.5 text-[#E94B1C]" />
              <span>Get Directions</span>
            </a>

            <Link
              to="/emergency"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-white bg-[#E94B1C] hover:bg-[#C63D1B] transition shadow-2xs"
            >
              <span>Full Emergency Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

export default EmergencySection;


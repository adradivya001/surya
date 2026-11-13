import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Clock, Send, Calendar, ExternalLink, ArrowUp } from "lucide-react";
import { HOSPITAL_INFO } from "../../constants/hospitalData";
import { HalftoneWordmarkFooter } from "../ui/halftone-wordmark-footer";
import suryaLogo from "../../assets/surya-hospital-logo.png";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Doctors", path: "/doctors" },
    { name: "Departments", path: "/specialities" },
    { name: "Facilities", path: "/facilities" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    { name: "General Medicine & Diabetology", path: "/specialities/general-medicine" },
    { name: "Nephrology & Dialysis", path: "/specialities/nephrology" },
    { name: "Critical Care & ICU", path: "/specialities/critical-care" },
    { name: "Pulmonology & Chest Medicine", path: "/specialities/pulmonology" },
    { name: "General & Laparoscopic Surgery", path: "/specialities/general-surgery" },
  ];

  return (
    <>
      {/* ── 1. Main Footer Directory Section (Light Ivory Theme) ── */}
      <footer id="contact" className="relative bg-[#FFF9F3] text-[#1A1D20] pt-14 sm:pt-16 pb-12 sm:pb-14 border-t border-[#F2E5D8]/80 scroll-mt-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 items-start">
            
            {/* Column 1: Hospital Brand & Mission (Col span 3) */}
            <div className="lg:col-span-3 space-y-4 text-left">
              <Link to="/" className="inline-block focus:outline-none">
                <img
                  src={suryaLogo}
                  alt="Surya Hospital Logo"
                  className="h-16 sm:h-20 md:h-24 w-auto object-contain"
                />
              </Link>

              <p className="text-xs sm:text-[13px] text-[#555C66] font-normal leading-relaxed max-w-sm">
                Dedicated healthcare services and personalized clinical care to support patients and families throughout their healing journey.
              </p>
            </div>

            {/* Column 2: Quick Links (Col span 2) */}
            <div className="lg:col-span-2 space-y-3.5 text-left">
              <h3 className="text-sm font-serif font-bold text-[#14233C] relative inline-block">
                Quick Links
                <span className="block w-6 h-[2px] bg-[#E94B1C] mt-1 rounded-full" />
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-[13px] text-[#555C66]">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="group inline-flex items-center gap-1.5 hover:text-[#E94B1C] transition-colors"
                    >
                      <span className="text-[#C8B8AB] group-hover:text-[#E94B1C] transition-colors text-[10px]">›</span>
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Our Services / Key Departments (Col span 2) */}
            <div className="lg:col-span-2 space-y-3.5 text-left">
              <h3 className="text-sm font-serif font-bold text-[#14233C] relative inline-block">
                Our Services
                <span className="block w-6 h-[2px] bg-[#E94B1C] mt-1 rounded-full" />
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-[13px] text-[#555C66]">
                {services.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="group inline-flex items-center gap-1.5 hover:text-[#E94B1C] transition-colors"
                    >
                      <span className="text-[#C8B8AB] group-hover:text-[#E94B1C] transition-colors text-[10px]">›</span>
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Us (Col span 3) */}
            <div className="lg:col-span-3 space-y-3.5 text-left">
              <h3 className="text-sm font-serif font-bold text-[#14233C] relative inline-block">
                Contact Us
                <span className="block w-6 h-[2px] bg-[#E94B1C] mt-1 rounded-full" />
              </h3>

              <div className="space-y-3 text-xs sm:text-[13px] text-[#555C66]">
                {/* Address */}
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#E94B1C] shrink-0 mt-0.5" />
                  <div>
                    <p className="leading-snug text-[#343D48]">
                      9th Cross Road, Sai Nagar,
                      <br />
                      Anantapur, Andhra Pradesh 515001.
                    </p>
                    <a
                      href={HOSPITAL_INFO.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#E94B1C] hover:underline mt-1.5"
                    >
                      <Send className="w-3 h-3 rotate-45" />
                      <span>Get Directions →</span>
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-2.5 pt-1">
                  <Phone className="w-4 h-4 text-[#E94B1C] shrink-0" />
                  <a
                    href={`tel:${HOSPITAL_INFO.phoneRaw}`}
                    className="font-bold text-[#14233C] hover:text-[#E94B1C] transition-colors"
                  >
                    +91 85009 04999
                  </a>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-2.5 pt-1">
                  <Clock className="w-4 h-4 text-[#E94B1C] shrink-0 mt-0.5" />
                  <div className="leading-snug">
                    <p className="font-semibold text-[#14233C]">
                      Open 24 Hours / 7 Days
                    </p>
                    <p className="text-[11px] text-[#717984] mt-0.5">
                      OPD: 9:00 AM – 2:00 PM & 5:00 PM – 9:00 PM
                    </p>
                  </div>
                </div>

                {/* Book an Appointment Button */}
                <div className="pt-2">
                  <Link
                    to="/appointment"
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#E94B1C] to-[#C63D1B] hover:from-[#C63D1B] hover:to-[#A83218] transition-all shadow-[0_4px_14px_rgba(233,75,28,0.25)] hover:shadow-[0_6px_20px_rgba(233,75,28,0.35)] hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book an Appointment</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Column 5: Google Map Embed Preview Card (Col span 2) */}
            <div className="lg:col-span-2 text-left">
              <div className="relative rounded-2xl overflow-hidden border border-[#E8DCD1] bg-white shadow-xs group h-[210px] w-full">
                {/* Top Open in Maps Pill */}
                <a
                  href={HOSPITAL_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-2.5 left-2.5 z-10 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-xs text-[11px] font-semibold text-[#14233C] shadow-sm hover:text-[#E94B1C] transition-colors border border-slate-200"
                >
                  <span>Open in Maps</span>
                  <ExternalLink className="w-3 h-3 text-[#717984]" />
                </a>

                {/* Interactive iframe map focused on Surya Hospital, 9th Cross Sainagar */}
                <iframe
                  title="Surya Hospital Location Map"
                  src={HOSPITAL_INFO.googleMapsEmbed}
                  className="w-full h-full border-0 pointer-events-auto"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Location pin hover banner at bottom */}
                <a
                  href={HOSPITAL_INFO.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-0 inset-x-0 bg-white/95 backdrop-blur-xs px-2.5 py-1.5 text-[10px] font-semibold text-[#14233C] border-t border-slate-200/80 flex items-center justify-between group-hover:bg-[#FFF5EC] transition-colors"
                >
                  <span className="truncate">Surya Hospital, 9th Cross</span>
                  <span className="text-[#E94B1C] shrink-0 font-bold">Directions →</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </footer>

      {/* ── 2. Full-Bleed Halftone Wordmark Banner ("surya hospital") ── */}
      <div className="w-full relative border-t border-[#1C3256]/40 overflow-hidden bg-[#0D1728] block leading-none">
        <HalftoneWordmarkFooter
          wordmark="surya hospital"
          height="clamp(90px, 10.5vw, 150px)"
          dotGap={6}
          radius={85}
          crop={0.2}
          grain={0.4}
          interactive={true}
          palette={{
            background: "#0D1728",
            ink: "#B2CEE2",
            warm: "#E94B1C",
          }}
          showTopColumns={false}
        />
      </div>

      {/* ── 3. Bottom Copyright & Legal Strip (Dark Navy Background) ── */}
      <div className="w-full bg-[#090F1B] text-slate-400 border-t border-[#1C3256]/40 py-4 font-sans text-xs">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-center sm:text-left text-slate-400 text-[11px] sm:text-xs">
            © {new Date().getFullYear()} Surya Hospital. All rights reserved.
          </p>

          <div className="flex items-center gap-5 sm:gap-6 text-[11px] sm:text-xs text-slate-400">
            <Link to="/about" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-600">•</span>
            <Link to="/about" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-slate-600">•</span>
            <Link to="/contact" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full bg-[#13233B] text-slate-200 hover:bg-[#E94B1C] hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm cursor-pointer group"
            aria-label="Scroll to top"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Footer;

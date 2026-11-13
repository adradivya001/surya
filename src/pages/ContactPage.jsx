import React, { useEffect } from "react";
import { Container } from "../components/ui/Container";
import { PageHero } from "../components/ui/PageHero";
import { Button } from "../components/ui/Button";
import { ScrollReveal, HeadingReveal } from "../components/motion/MotionReveal";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  PhoneCall,
  ExternalLink,
  Navigation,
} from "lucide-react";
import { HOSPITAL_INFO } from "../constants/hospitalData";

export function ContactPage() {
  useEffect(() => {
    document.title = "Contact Us | Surya Hospital, Sai Nagar, Anantapur";
  }, []);

  return (
    <div className="w-full bg-[#FFFDF9]">
      {/* ── 1. CENTERED HERO BANNER ── */}
      <PageHero
        eyebrow="LOCATION & CONTACT"
        title="Contact Surya Hospital"
        description="We are here to help you. Call our friendly front desk, enquire about doctor visiting hours, or visit our hospital at Sainagar, 9th Cross, Anantapur - 515001."
        breadcrumbs={[{ label: "Contact" }]}
        badge="Sai Nagar, Anantapur"
      >
        <a href={`tel:${HOSPITAL_INFO.phoneRaw}`}>
          <Button
            variant="primary"
            size="sm"
            icon={PhoneCall}
            className="bg-[#E94B1C] hover:bg-[#A83218] text-white rounded-full px-6 shadow-xs"
          >
            Call Front Desk: {HOSPITAL_INFO.phone}
          </Button>
        </a>
        <a href={HOSPITAL_INFO.mapsUrl} target="_blank" rel="noopener noreferrer">
          <Button
            variant="secondary"
            size="sm"
            icon={ExternalLink}
            className="bg-white border-[#E9D8CE] text-[#C63D1B] hover:bg-[#FFF0E6] rounded-full px-6"
          >
            Directions on Google Maps
          </Button>
        </a>
      </PageHero>

      {/* ── 2. TWO-COLUMN LAYOUT (LEFT CARDS SLIDE LEFT, RIGHT MAP SLIDES RIGHT) ── */}
      <section className="py-14 md:py-20 bg-white border-b border-[#F0E2D9]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left Column: Contact Cards (5 cols) - Slides from Left */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <ScrollReveal direction="left" delay={0.1} amount={0.25}>
                <div className="space-y-2">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#FFF0E6] text-[#E94B1C] border border-[#FADCCB]">
                    HOW TO REACH US
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#14233C] tracking-tight">
                    We Are Always Here For You
                  </h2>
                  <p className="text-xs sm:text-sm text-[#5A687A] leading-relaxed font-normal">
                    For quick doctor bookings, room enquiries, or emergency advice, calling our front desk is always the fastest way to get help.
                  </p>
                </div>

                {/* 2x2 Grid of Verified Contact Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  {/* Address */}
                  <div className="p-4 rounded-2xl border border-[#E9D8CE] bg-[#FFF9F3] hover:bg-white flex flex-col justify-between shadow-2xs hover:border-[#E94B1C]/50 transition-all">
                    <div>
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-8 h-8 rounded-xl bg-[#FFF0E6] text-[#E94B1C] flex items-center justify-center shrink-0 border border-[#FADCCB]">
                          <MapPin className="w-4 h-4" />
                        </div>
                        <span className="font-bold text-[#14233C] text-sm">Address</span>
                      </div>
                      <p className="text-xs text-[#5A687A] leading-relaxed">
                        {HOSPITAL_INFO.fullAddress}
                      </p>
                    </div>
                    <div className="pt-3">
                      <a
                        href={HOSPITAL_INFO.directionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-[#E94B1C] hover:underline"
                      >
                        <Navigation className="w-3 h-3" />
                        <span>Directions</span>
                      </a>
                    </div>
                  </div>

                  {/* Helpline */}
                  <div className="p-4 rounded-2xl border border-[#E9D8CE] bg-[#FFF9F3] hover:bg-white flex flex-col justify-between shadow-2xs hover:border-[#E94B1C]/50 transition-all">
                    <div>
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-8 h-8 rounded-xl bg-[#FFF0E6] text-[#E94B1C] flex items-center justify-center shrink-0 border border-[#FADCCB]">
                          <Phone className="w-4 h-4" />
                        </div>
                        <span className="font-bold text-[#14233C] text-sm">Helpline</span>
                      </div>
                      <a
                        href={`tel:${HOSPITAL_INFO.phoneRaw}`}
                        className="font-bold text-[#14233C] text-sm hover:text-[#E94B1C] transition-colors"
                      >
                        {HOSPITAL_INFO.phone}
                      </a>
                    </div>
                    <p className="text-[11px] text-emerald-700 font-semibold pt-2">
                      24/7 Casualty &amp; Reception
                    </p>
                  </div>

                  {/* Email */}
                  <div className="p-4 rounded-2xl border border-[#E9D8CE] bg-[#FFF9F3] hover:bg-white flex flex-col justify-between shadow-2xs hover:border-[#E94B1C]/50 transition-all">
                    <div>
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-8 h-8 rounded-xl bg-[#FFF0E6] text-[#E94B1C] flex items-center justify-center shrink-0 border border-[#FADCCB]">
                          <Mail className="w-4 h-4" />
                        </div>
                        <span className="font-bold text-[#14233C] text-sm">Email</span>
                      </div>
                      <a
                        href={`mailto:${HOSPITAL_INFO.email}`}
                        className="text-xs font-semibold text-[#14233C] hover:text-[#E94B1C] break-all"
                      >
                        {HOSPITAL_INFO.email}
                      </a>
                    </div>
                    <p className="text-[11px] text-[#5A687A] pt-2">General &amp; Desk Queries</p>
                  </div>

                  {/* Timings */}
                  <div className="p-4 rounded-2xl border border-[#E9D8CE] bg-[#FFF9F3] hover:bg-white flex flex-col justify-between shadow-2xs hover:border-[#E94B1C]/50 transition-all">
                    <div>
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-8 h-8 rounded-xl bg-[#FFF0E6] text-[#E94B1C] flex items-center justify-center shrink-0 border border-[#FADCCB]">
                          <Clock className="w-4 h-4" />
                        </div>
                        <span className="font-bold text-[#14233C] text-sm">Timings</span>
                      </div>
                      <p className="text-xs text-[#5A687A]">
                        OPD: 9:00 AM – 2:00 PM &amp; 5:00 PM – 9:00 PM
                      </p>
                    </div>
                    <p className="text-[11px] font-bold text-[#E94B1C] pt-2">
                      Emergency: Open 24/7
                    </p>
                  </div>
                </div>

                {/* Direct Call Button */}
                <div className="pt-3">
                  <a
                    href={`tel:${HOSPITAL_INFO.phoneRaw}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full text-xs font-bold bg-gradient-to-r from-[#E94B1C] to-[#C63D1B] hover:from-[#C63D1B] hover:to-[#A83218] text-white shadow-xs transition"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-white" />
                    <span>Call Hospital Directly: {HOSPITAL_INFO.phone}</span>
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Interactive Hospital Map (7 cols) - Slides from Right */}
            <div className="lg:col-span-7 bg-[#FFF9F3] p-4 sm:p-6 rounded-3xl border border-[#E9D8CE] shadow-xs text-left flex flex-col justify-between space-y-4">
              <ScrollReveal direction="right" delay={0.15} amount={0.25}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#FFF0E6] text-[#E94B1C] border border-[#FADCCB]">
                      HOSPITAL LOCATION &amp; MAP
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#14233C]">
                      Find Surya Hospital on Google Maps
                    </h3>
                    <p className="text-xs text-[#5A687A]">
                      Sainagar, 9th Cross, Anantapur - 515001
                    </p>
                  </div>

                  <a
                    href={HOSPITAL_INFO.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold bg-[#E94B1C] hover:bg-[#A83218] text-white shadow-xs transition shrink-0"
                  >
                    <Navigation className="w-3.5 h-3.5 text-white" />
                    <span>Get Directions</span>
                  </a>
                </div>

                {/* Map Embed Frame */}
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-[#E9D8CE] bg-white shadow-xs mt-3">
                  <iframe
                    title="Surya Hospital Map Location"
                    src={HOSPITAL_INFO.googleMapsEmbed}
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </ScrollReveal>
            </div>

          </div>
        </Container>
      </section>
    </div>
  );
}

export default ContactPage;

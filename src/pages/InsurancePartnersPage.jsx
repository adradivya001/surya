import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { HOSPITAL_INFO } from "../constants/hospitalData";
import { AnimateIn } from "../components/ui/AnimateIn";
import {
  ShieldCheck,
  FileText,
  CreditCard,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Clock,
  HelpCircle,
  AlertCircle,
  FileCheck2,
  PhoneCall,
  Search,
  ExternalLink,
} from "lucide-react";

export function InsurancePartnersPage() {
  useEffect(() => {
    document.title = "Our Insurance Partners & Cashless Facility | Surya Hospital, Anantapur";
  }, []);

  const partners = HOSPITAL_INFO.insurancePartners;

  const scrollToGrid = (e) => {
    e.preventDefault();
    const el = document.getElementById("insurance-partners-grid");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const cashlessSteps = [
    {
      step: "01",
      title: "Check Your Coverage",
      desc: "Contact our team to confirm whether your insurer or TPA is currently associated with the hospital and whether your policy may be eligible.",
      icon: Search,
    },
    {
      step: "02",
      title: "Share Your Insurance Details",
      desc: "Keep your insurance card, policy details, identification, and other requested documents ready for our verification desk.",
      icon: FileText,
    },
    {
      step: "03",
      title: "Verification and Authorization",
      desc: "The hospital team and insurer or TPA can guide you through the applicable verification and pre-authorization requirements.",
      icon: FileCheck2,
    },
    {
      step: "04",
      title: "Confirm Your Treatment Arrangements",
      desc: "Proceed according to the hospital's guidance and the insurer's authorization. Coverage, exclusions, co-payments, and final approval depend on the applicable policy and insurer decision.",
      icon: ShieldCheck,
    },
  ];

  const checklistItems = [
    "Confirm current insurer and TPA empanelment before your visit.",
    "Carry your insurance card, valid identification, and relevant policy details.",
    "Bring medical records, prescriptions, and other documents requested for verification.",
    "Ask about policy exclusions, co-payments, deductibles, room eligibility, and non-covered expenses.",
    "Remember that cashless treatment is subject to insurer or TPA verification, policy terms, and authorization.",
  ];

  return (
    <div className="w-full bg-[#FFF9F3] text-[#262626]">
      
      {/* ======================================================== */}
      {/* SECTION 1: HERO SECTION (Compact & Professional)          */}
      {/* ======================================================== */}
      <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 bg-gradient-to-b from-[#FFF0E6]/70 via-[#FFF9F3] to-transparent border-b border-[#F0E2D9] overflow-hidden">
        {/* Subtle Decorative Dots */}
        <div className="absolute top-20 left-8 opacity-30 pointer-events-none select-none text-[#FF8A3D]">
          <div className="grid grid-cols-2 gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF8A3D]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF8A3D]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF8A3D]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF8A3D]" />
          </div>
        </div>
        <div className="absolute bottom-8 right-8 opacity-30 pointer-events-none select-none text-[#FF8A3D]">
          <div className="grid grid-cols-2 gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF8A3D]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF8A3D]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF8A3D]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF8A3D]" />
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimateIn animation="fade-up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#E9D8CE] text-[#C63D1B] text-xs font-bold uppercase tracking-widest mb-4 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#E94B1C]" />
              <span>PATIENT SUPPORT</span>
            </div>
          </AnimateIn>

          <AnimateIn animation="fade-up" delay={100}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#C63D1B] tracking-tight leading-tight uppercase">
              Our Insurance Partners
            </h1>
          </AnimateIn>

          <AnimateIn animation="fade-up" delay={150}>
            <div className="w-24 sm:w-32 h-[3px] bg-[#E94B1C] mx-auto mt-4 mb-6 rounded-full" />
          </AnimateIn>

          <AnimateIn animation="fade-up" delay={200}>
            <p className="text-sm sm:text-base md:text-lg text-[#4A403B] max-w-2xl mx-auto leading-relaxed font-normal">
              Explore the insurance providers and TPAs associated with Surya Hospital. Our team can help you understand the available cashless treatment process and the documentation required for your visit.
            </p>
          </AnimateIn>

          {/* Action Buttons */}
          <AnimateIn animation="fade-up" delay={250}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <a
                href="#contact-insurance"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-[#E94B1C] hover:bg-[#A83218] shadow-md transition-all active:scale-95"
              >
                <span>Contact Our Team</span>
                <PhoneCall className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={scrollToGrid}
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-bold text-[#C63D1B] bg-white border border-[#E9D8CE] hover:bg-[#FFF0E6] transition-all shadow-xs active:scale-95 cursor-pointer"
              >
                <span>View Insurance Partners</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 2: INSURANCE PARTNER INTRODUCTION                 */}
      {/* ======================================================== */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#F0E2D9]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <AnimateIn animation="fade-up">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#C63D1B] tracking-tight">
                Insurance &amp; Cashless Healthcare Support
              </h2>
            </AnimateIn>
            <AnimateIn animation="fade-up" delay={100}>
              <p className="text-sm sm:text-base text-[#756860] mt-3 leading-relaxed">
                At Surya Hospital, we understand that navigating insurance can be challenging. Our team can assist patients with insurance-related enquiries, explain the cashless treatment process, and help identify the documentation required for eligible claims.
              </p>
            </AnimateIn>
          </div>

          {/* 3 Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <AnimateIn animation="fade-up" delay={150}>
              <div className="h-full bg-[#FFF0E6]/50 border border-[#E9D8CE] rounded-2xl p-6 sm:p-7 text-left space-y-3.5 shadow-2xs hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-white text-[#E94B1C] border border-[#E9D8CE] flex items-center justify-center shrink-0 shadow-2xs">
                  <ShieldCheck className="w-6 h-6 stroke-[2.2]" />
                </div>
                <h3 className="text-lg font-bold text-[#C63D1B] leading-snug">
                  Insurance Assistance
                </h3>
                <p className="text-xs sm:text-sm text-[#756860] leading-relaxed">
                  Our team can guide patients through insurance-related enquiries and available documentation.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn animation="fade-up" delay={200}>
              <div className="h-full bg-[#FFF0E6]/50 border border-[#E9D8CE] rounded-2xl p-6 sm:p-7 text-left space-y-3.5 shadow-2xs hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-white text-[#E94B1C] border border-[#E9D8CE] flex items-center justify-center shrink-0 shadow-2xs">
                  <CreditCard className="w-6 h-6 stroke-[2.2]" />
                </div>
                <h3 className="text-lg font-bold text-[#C63D1B] leading-snug">
                  Cashless Treatment Guidance
                </h3>
                <p className="text-xs sm:text-sm text-[#756860] leading-relaxed">
                  Patients can contact our team to understand the cashless treatment process and confirm the applicable requirements.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn animation="fade-up" delay={250}>
              <div className="h-full bg-[#FFF0E6]/50 border border-[#E9D8CE] rounded-2xl p-6 sm:p-7 text-left space-y-3.5 shadow-2xs hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-white text-[#E94B1C] border border-[#E9D8CE] flex items-center justify-center shrink-0 shadow-2xs">
                  <FileText className="w-6 h-6 stroke-[2.2]" />
                </div>
                <h3 className="text-lg font-bold text-[#C63D1B] leading-snug">
                  Claim Documentation
                </h3>
                <p className="text-xs sm:text-sm text-[#756860] leading-relaxed">
                  Get guidance on the documents and information that may be required by your insurer or TPA.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 3: INSURANCE PARTNERS LOGO GRID (24 Companies)   */}
      {/* ======================================================== */}
      <section id="insurance-partners-grid" className="py-20 sm:py-28 bg-[#FFF0E6]/50 relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <AnimateIn animation="fade-up">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#C63D1B] leading-tight">
                Our Insurance Partners
              </h2>
            </AnimateIn>

            <AnimateIn animation="fade-up" delay={100}>
              <div className="w-24 sm:w-32 h-[3px] bg-[#E94B1C] mx-auto mt-4 mb-5 rounded-full" />
            </AnimateIn>

            <AnimateIn animation="fade-up" delay={150}>
              <p className="text-sm sm:text-base md:text-lg text-[#4A403B] font-medium leading-relaxed max-w-2xl mx-auto">
                We work with insurance providers and TPAs to help eligible patients navigate their healthcare coverage. Contact our team to confirm current empanelment, policy eligibility, and cashless treatment availability.
              </p>
            </AnimateIn>
          </div>

          {/* 3 Columns Desktop, 2 Columns Tablet, 1-2 Columns Mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {partners.map((partner, idx) => (
              <AnimateIn
                key={partner.id}
                animation="fade-up"
                delay={Math.min(idx * 25, 350)}
              >
                <div
                  className="group relative bg-white rounded-[18px] sm:rounded-[20px] border-[1.8px] border-[#E9D8CE] overflow-hidden shadow-xs hover:shadow-xl hover:border-[#E94B1C] transition-all duration-300 p-3 sm:p-3.5 flex items-center justify-center min-h-[92px] sm:min-h-[110px] md:min-h-[120px]"
                  title={partner.name}
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="w-full h-auto max-h-[75px] sm:max-h-[90px] md:max-h-[100px] object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
              </AnimateIn>
            ))}
          </div>

          {/* Notice pill below grid */}
          <AnimateIn animation="fade-up" delay={300}>
            <div className="mt-10 text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-[#E9D8CE] text-xs text-[#756860] shadow-2xs">
                <AlertCircle className="w-3.5 h-3.5 text-[#E94B1C] shrink-0" />
                <span>Empanelment and cashless availability are subject to periodic TPA updates and policy terms.</span>
              </span>
            </div>
          </AnimateIn>

        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 4: HOW CASHLESS TREATMENT WORKS (4 Steps)        */}
      {/* ======================================================== */}
      <section className="py-16 sm:py-24 bg-white border-y border-[#F0E2D9]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <AnimateIn animation="fade-up">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#C63D1B] uppercase tracking-tight">
                How Cashless Treatment Works
              </h2>
            </AnimateIn>
            <AnimateIn animation="fade-up" delay={100}>
              <div className="w-20 sm:w-28 h-[3px] bg-[#E94B1C] mx-auto mt-4 mb-4 rounded-full" />
            </AnimateIn>
            <AnimateIn animation="fade-up" delay={150}>
              <p className="text-sm sm:text-base text-[#756860]">
                Follow these general steps to understand how cashless treatment may be arranged at Surya Hospital.
              </p>
            </AnimateIn>
          </div>

          {/* 4-Step Process: 4 cols on desktop, responsive stack on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 relative">
            {cashlessSteps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <AnimateIn
                  key={item.step}
                  animation="fade-up"
                  delay={idx * 100}
                >
                  <div className="relative bg-[#FFF0E6]/40 border border-[#E9D8CE] rounded-2xl p-6 sm:p-7 flex flex-col justify-between h-full shadow-2xs hover:shadow-md hover:border-[#E94B1C] transition-all duration-300 group">
                    <div>
                      {/* Step Number Badge & Icon */}
                      <div className="flex items-center justify-between mb-5">
                        <span className="w-10 h-10 rounded-xl bg-[#E94B1C] text-white font-black text-sm flex items-center justify-center shadow-xs">
                          {item.step}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-white border border-[#E9D8CE] text-[#C63D1B] flex items-center justify-center group-hover:scale-105 transition-transform">
                          <Icon className="w-5 h-5 stroke-[2]" />
                        </div>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-[#C63D1B] leading-snug mb-2.5">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#756860] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-[#F0E2D9] flex items-center gap-1.5 text-[11px] font-bold text-[#C63D1B]">
                      <span>Step {item.step} of 04</span>
                    </div>
                  </div>
                </AnimateIn>
              );
            })}
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 5: IMPORTANT INFORMATION FOR PATIENTS            */}
      {/* ======================================================== */}
      <section className="py-16 sm:py-20 bg-[#FFF9F3]">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-3xl border border-[#E9D8CE] shadow-sm overflow-hidden p-6 sm:p-10 text-left">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#FFF0E6] text-[#E94B1C] flex items-center justify-center shrink-0 border border-[#E9D8CE]">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF8A3D] block">
                  ADVISORY FOR PATIENTS
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#C63D1B]">
                  Before Your Hospital Visit
                </h3>
              </div>
            </div>

            <ul className="space-y-3.5 mb-8">
              {checklistItems.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#262626] leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-[#E94B1C] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Note banner */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#FFF0E6]/70 border border-[#E9D8CE] text-xs sm:text-sm text-[#262626] leading-relaxed">
              <strong className="text-[#C63D1B]">Important Note:</strong> Displaying an insurance company's logo does not guarantee cashless approval for every policy, procedure, or patient. Please contact Surya Hospital to confirm the latest arrangements.
            </div>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 6: CONTACT AND ENQUIRY SECTION                    */}
      {/* ======================================================== */}
      <section id="contact-insurance" className="py-16 sm:py-24 bg-white border-t border-[#F0E2D9]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <AnimateIn animation="fade-up">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#C63D1B] uppercase tracking-tight">
                Need Help With Insurance?
              </h2>
            </AnimateIn>
            <AnimateIn animation="fade-up" delay={100}>
              <div className="w-20 sm:w-28 h-[3px] bg-[#E94B1C] mx-auto mt-4 mb-4 rounded-full" />
            </AnimateIn>
            <AnimateIn animation="fade-up" delay={150}>
              <p className="text-sm sm:text-base text-[#756860]">
                Our team is available to help you with insurance-related enquiries and explain the next steps for your hospital visit.
              </p>
            </AnimateIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            
            {/* Phone Card */}
            <div className="bg-[#FFF0E6]/50 border border-[#E9D8CE] rounded-2xl p-6 sm:p-7 text-center space-y-3.5 shadow-2xs flex flex-col justify-between">
              <div className="w-12 h-12 rounded-xl bg-white text-[#E94B1C] border border-[#E9D8CE] flex items-center justify-center mx-auto shadow-2xs">
                <Phone className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#C63D1B]">Telephone Helpline</h4>
                <p className="text-xs text-[#756860] mt-1">24 Hours / 7 Days Available</p>
                <div className="text-lg font-black text-[#262626] mt-2">
                  8500904999
                </div>
              </div>
              <a
                href="tel:8500904999"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full text-xs font-bold text-white bg-[#E94B1C] hover:bg-[#A83218] shadow-xs transition-all active:scale-95"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Email Card */}
            <div className="bg-[#FFF0E6]/50 border border-[#E9D8CE] rounded-2xl p-6 sm:p-7 text-center space-y-3.5 shadow-2xs flex flex-col justify-between">
              <div className="w-12 h-12 rounded-xl bg-white text-[#E94B1C] border border-[#E9D8CE] flex items-center justify-center mx-auto shadow-2xs">
                <Mail className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#C63D1B]">Email Insurance Desk</h4>
                <p className="text-xs text-[#756860] mt-1">Pre-Auth &amp; Queries</p>
                <div className="text-xs sm:text-[13px] font-bold text-[#262626] mt-2 break-all">
                  insurancedesksuryahospital@gmail.com
                </div>
              </div>
              <a
                href="mailto:insurancedesksuryahospital@gmail.com"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full text-xs font-bold text-white bg-[#E94B1C] hover:bg-[#A83218] shadow-xs transition-all active:scale-95"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email Us</span>
              </a>
            </div>

            {/* Address Card */}
            <div className="bg-[#FFF0E6]/50 border border-[#E9D8CE] rounded-2xl p-6 sm:p-7 text-center space-y-3.5 shadow-2xs flex flex-col justify-between">
              <div className="w-12 h-12 rounded-xl bg-white text-[#E94B1C] border border-[#E9D8CE] flex items-center justify-center mx-auto shadow-2xs">
                <MapPin className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#C63D1B]">Hospital Location</h4>
                <p className="text-xs text-[#756860] mt-1">Sai Nagar Campus</p>
                <div className="text-xs font-semibold text-[#262626] mt-2 leading-relaxed">
                  #12-3-367, 9th Cross, Sai Nagar, Ananthapuramu - 515004
                </div>
              </div>
              <a
                href={HOSPITAL_INFO.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full text-xs font-bold text-[#C63D1B] bg-white border border-[#E9D8CE] hover:bg-[#FFF0E6] shadow-xs transition-all active:scale-95"
              >
                <span>Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

export default InsurancePartnersPage;

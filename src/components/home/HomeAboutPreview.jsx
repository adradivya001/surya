import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { ArrowRight, CheckCircle2, HeartPulse } from "lucide-react";

export function HomeAboutPreview() {
  return (
    <section className="py-16 md:py-20 bg-[#FFF8F2] border-b border-[#F0D9CB]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Relevant hospital photograph (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#F0D9CB] shadow-sm bg-white p-2">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#FCECE2]">
                <img
                  src="/images/surya-reception.jpg"
                  alt="Surya Hospital reception lobby in Sai Nagar, Anantapur"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#252B33]/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 text-white text-xs font-semibold">
                  Surya Hospital • Sai Nagar Campus
                </div>
              </div>
            </div>

            {/* Accent badge */}
            <div className="hidden sm:flex absolute -bottom-4 -right-4 bg-[#252B33] text-white p-3 rounded-xl shadow-md items-center gap-2.5 text-xs font-bold border border-[#373F4A]">
              <HeartPulse className="w-4 h-4 text-[#D98A62]" />
              <span>Dedicated Patient Care</span>
            </div>
          </div>

          {/* Right Column: Heading, descriptive copy, pillars, Read More (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white text-[#B96645] border border-[#F0D9CB]">
              <span>ABOUT SURYA HOSPITAL</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#252B33] tracking-tight leading-tight">
              A Trusted Center for Healing, Health, and Family Wellness.
            </h2>

            <p className="text-sm sm:text-base text-[#59616B] leading-relaxed">
              Surya Hospital is a modern multi-speciality medical facility situated at Sai Nagar, Anantapur. We bring together outpatient consultations, surgical care, diagnostic pathology, digital imaging, and round-the-clock emergency support to serve patients across the district with genuine care and medical integrity.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 text-xs text-[#252B33] font-medium bg-white p-3 rounded-lg border border-[#F0D9CB]">
                <CheckCircle2 className="w-4 h-4 text-[#C65332] shrink-0 mt-0.5" />
                <span>Patient-focused bedside attention & dignity</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-[#252B33] font-medium bg-white p-3 rounded-lg border border-[#F0D9CB]">
                <CheckCircle2 className="w-4 h-4 text-[#C65332] shrink-0 mt-0.5" />
                <span>Sterile operation theatres & day-care surgery</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-[#252B33] font-medium bg-white p-3 rounded-lg border border-[#F0D9CB]">
                <CheckCircle2 className="w-4 h-4 text-[#C65332] shrink-0 mt-0.5" />
                <span>24/7 Casualty, trauma care & in-house pharmacy</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-[#252B33] font-medium bg-white p-3 rounded-lg border border-[#F0D9CB]">
                <CheckCircle2 className="w-4 h-4 text-[#C65332] shrink-0 mt-0.5" />
                <span>Accurate laboratory diagnostics & ultrasound</span>
              </div>
            </div>

            <div className="pt-3">
              <Link to="/about" className="inline-block w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="md"
                  icon={ArrowRight}
                  iconPosition="right"
                  className="bg-[#C65332] hover:bg-[#A84328] text-white font-bold w-full sm:w-auto"
                >
                  Read More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

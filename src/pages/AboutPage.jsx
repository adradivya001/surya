import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "../components/ui/Container";
import { PageHero } from "../components/ui/PageHero";
import { Button } from "../components/ui/Button";
import { ScrollReveal, HeadingReveal } from "../components/motion/MotionReveal";
import {
  CheckCircle2,
  Stethoscope,
  Building2,
  Heart,
  Target,
  Eye,
  HeartHandshake,
} from "lucide-react";
import { HOSPITAL_INFO } from "../constants/hospitalData";

export function AboutPage() {
  useEffect(() => {
    document.title = "About Us | Surya Hospital, Sai Nagar, Anantapur";
  }, []);

  return (
    <div className="w-full bg-[#FFFDF9]">
      {/* ── 1. CENTERED HERO BANNER WITH BI-DIRECTIONAL SCROLL REVEALS ── */}
      <PageHero
        eyebrow="ABOUT SURYA HOSPITAL"
        title="Compassionate Care for Every Stage of Life"
        description="Surya Hospital is committed to providing quality healthcare through dedicated medical professionals and patient-focused services in Anantapur."
        breadcrumbs={[{ label: "About Us" }]}
        badge="Sai Nagar, Anantapur"
      >
        <Link to="/doctors">
          <Button
            variant="primary"
            size="sm"
            icon={Stethoscope}
            className="bg-[#E94B1C] hover:bg-[#A83218] text-white rounded-full px-6 shadow-xs"
          >
            Meet Our Doctors
          </Button>
        </Link>
        <Link to="/specialities">
          <Button
            variant="secondary"
            size="sm"
            className="bg-white border-[#E9D8CE] text-[#C63D1B] hover:bg-[#FFF0E6] rounded-full px-6"
          >
            Explore Departments
          </Button>
        </Link>
      </PageHero>

      {/* ── 2. TWO-COLUMN HOSPITAL OVERVIEW (LEFT SLIDES LEFT, RIGHT SLIDES RIGHT) ── */}
      <section className="py-14 md:py-20 bg-[#FFF9F3] border-b border-[#F0E2D9]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Visual Column: Slides from Left */}
            <div className="lg:col-span-5 relative">
              <ScrollReveal direction="left" delay={0.1} amount={0.25}>
                <div className="rounded-3xl overflow-hidden border border-[#E9D8CE] shadow-[0_12px_40px_rgba(20,35,60,0.06)] bg-white p-3 group">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#FFF0E6]">
                    <img
                      src="/images/surya-reception.jpg"
                      alt="Surya Hospital Lobby and Reception in Sai Nagar Anantapur"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
                    <div className="absolute bottom-3.5 left-4 text-white text-xs font-bold tracking-wide">
                      Surya Hospital Campus • Sai Nagar, Anantapur
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Content Column: Slides from Right */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <ScrollReveal direction="right" delay={0.15} amount={0.25}>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#FFF0E6] text-[#E94B1C] border border-[#FADCCB]">
                  ABOUT SURYA HOSPITAL
                </span>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#14233C] tracking-tight leading-tight mt-2.5">
                  Your Trusted Healthcare Partner
                </h2>

                <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed font-normal">
                  Discover our hospital, medical team and patient care facilities.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 text-xs sm:text-[13px] text-[#14233C] font-semibold">
                  <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-[#EADBCE] shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-[#E94B1C] shrink-0" />
                    <span>Emergency Care</span>
                  </div>
                  <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-[#EADBCE] shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-[#E94B1C] shrink-0" />
                    <span>Operation Theatres</span>
                  </div>
                  <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-[#EADBCE] shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-[#E94B1C] shrink-0" />
                    <span>Inpatient Care</span>
                  </div>
                  <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-[#EADBCE] shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-[#E94B1C] shrink-0" />
                    <span>Pharmacy</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </Container>
      </section>

      {/* ── 3. CORE VALUES - 5 CARDS WITH STAGGERED BI-DIRECTIONAL REVEALS ── */}
      <section className="py-14 sm:py-20 bg-[#FFFDF9] border-b border-[#F0E2D9]">
        <Container>
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center space-y-2.5 max-w-xl mx-auto">
              <ScrollReveal direction="down" delay={0.05} amount={0.2}>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#FFF0E6] text-[#E94B1C] border border-[#FADCCB]">
                  OUR VALUES
                </span>
              </ScrollReveal>

              <HeadingReveal delay={0.1}>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#14233C] tracking-tight">
                  Our Commitment to Patients
                </h2>
              </HeadingReveal>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {HOSPITAL_INFO.values.map((val, idx) => (
                <ScrollReveal
                  key={val.title}
                  direction="up"
                  delay={0.05 + idx * 0.08}
                  amount={0.2}
                >
                  <div className="h-full bg-white p-6 rounded-2xl border border-[#EADBCE] shadow-xs hover:border-[#E94B1C]/50 hover:shadow-md transition-all text-left flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-[#FFF0E6] text-[#E94B1C] flex items-center justify-center border border-[#FADCCB] mb-3.5 shadow-2xs">
                        <CheckCircle2 className="w-5 h-5 stroke-[2.2]" />
                      </div>
                      <h3 className="text-base font-bold text-[#14233C] mb-1.5">{val.title}</h3>
                      <p className="text-xs sm:text-[13px] text-[#5A687A] leading-relaxed">{val.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── 4. CROSS-PAGE NAVIGATION CTA (SCALE POP ENTRANCE) ── */}
      <section className="py-14 sm:py-18 bg-white border-b border-[#F0E2D9]">
        <Container>
          <ScrollReveal direction="scale" delay={0.1} amount={0.2}>
            <div className="p-8 sm:p-12 rounded-3xl bg-[#FFF0E6] border border-[#E9D8CE] text-[#14233C] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-xs">
              <div className="space-y-1.5">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#14233C]">
                  Looking for the Right Doctor?
                </h3>
                <p className="text-xs sm:text-sm text-[#5A687A] font-normal">
                  Explore our medical team or contact our hospital for assistance.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full md:w-auto shrink-0">
                <Link to="/doctors" className="w-full sm:w-auto">
                  <Button
                    variant="primary"
                    size="md"
                    className="w-full sm:w-auto font-bold text-xs bg-[#E94B1C] hover:bg-[#A83218] text-white rounded-full px-6 shadow-xs"
                  >
                    Meet Our Doctors
                  </Button>
                </Link>
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="md"
                    className="w-full sm:w-auto font-bold text-xs text-[#C63D1B] border-[#E9D8CE] hover:bg-[#FFF0E6] rounded-full px-6"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </div>
  );
}

export default AboutPage;

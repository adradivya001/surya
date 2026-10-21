import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Container } from "../components/ui/Container";
import { PageHero } from "../components/ui/PageHero";
import { Button } from "../components/ui/Button";
import {
  ShieldCheck,
  CheckCircle2,
  Stethoscope,
  Award,
  Building2,
  Activity,
  Heart,
  Clock,
  Sparkles,
} from "lucide-react";
import { HOSPITAL_INFO } from "../constants/hospitalData";
import { AnimateIn } from "../components/ui/AnimateIn";

export function AboutPage() {
  useEffect(() => {
    document.title = "About Us | Surya Hospital, Sai Nagar, Anantapur";
  }, []);

  return (
    <div className="w-full">
      {/* Page Hero */}
      <PageHero
        eyebrow="ABOUT SURYA HOSPITAL"
        title="Comprehensive Healthcare with Compassionate Care"
        description="Serving the families of Sai Nagar, Anantapur, and neighboring regions with dedicated outpatient consultations, sterile surgical procedures, and 24/7 emergency response."
        breadcrumbs={[{ label: "About Us" }]}
        badge="Sai Nagar, Anantapur"
      >
        <Link to="/doctors">
          <Button variant="primary" size="sm" icon={Stethoscope} className="bg-[#E94B1C] hover:bg-[#A83218] text-white">
            Meet Doctors
          </Button>
        </Link>
        <Link to="/specialities">
          <Button variant="secondary" size="sm" className="bg-white border-[#E9D8CE] text-[#C63D1B] hover:bg-[#FFF0E6]">
            Clinical Specialities
          </Button>
        </Link>
      </PageHero>

      {/* Hospital Overview */}
      <section className="py-18 md:py-24 bg-[#FFF9F3] border-b border-[#F0E2D9]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border border-[#E9D8CE] shadow-xl bg-white p-3">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#FFF0E6]">
                  <img
                    src="/images/surya-reception.jpg"
                    alt="Surya Hospital Lobby and Reception in Sai Nagar Anantapur"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white text-xs font-bold tracking-wide">
                    Surya Hospital Campus • Sai Nagar, Anantapur
                  </div>
                </div>
              </div>

              {/* Floating verified badge */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-white text-[#C63D1B] p-4 rounded-xl shadow-xl items-center gap-3 text-xs font-bold border border-[#E9D8CE]">
                <ShieldCheck className="w-5 h-5 text-[#E94B1C]" />
                <span className="tracking-wide">Ethical Medical Practice</span>
              </div>
            </div>

            {/* Content (7 cols) */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-widest bg-[#FFF0E6] text-[#C63D1B] border border-[#E9D8CE]">
                ABOUT SURYA HOSPITAL
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-[#C63D1B] tracking-tight leading-tight">
                YOUR HEALTH, OUR COMMITMENT
              </h2>
              <p className="text-base sm:text-lg text-[#262626] leading-relaxed font-medium">
                At <strong className="font-bold text-[#E94B1C]">Surya Hospital</strong>, we deliver compassionate expert medical care across all major specialties. Our facility is equipped with <strong className="font-bold text-[#E94B1C]">modern infrastructure</strong> and a <strong className="font-bold text-[#E94B1C]">dedicated team</strong> to provide <strong className="font-bold text-[#E94B1C]">world-class treatment 24/7</strong>.
              </p>
              <p className="text-sm sm:text-base text-[#756860] leading-relaxed">
                Located behind Ambedkar Bhavan on 9th Cross Road in Sai Nagar, our hospital is easy to reach. We provide comfortable inpatient rooms, fully equipped operating suites, and 24/7 emergency care so you receive complete care in one visit.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-3 text-xs sm:text-sm text-[#262626] font-semibold">
                <div className="flex items-center gap-2.5 bg-white p-3.5 rounded-xl border border-[#E9D8CE] shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-[#E94B1C] shrink-0" />
                  <span>24/7 Emergency & Casualty</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white p-3.5 rounded-xl border border-[#E9D8CE] shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-[#E94B1C] shrink-0" />
                  <span>Clean Operating Rooms for Safe Surgeries</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white p-3.5 rounded-xl border border-[#E9D8CE] shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-[#E94B1C] shrink-0" />
                  <span>Monitored Inpatient & Recovery Rooms</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white p-3.5 rounded-xl border border-[#E9D8CE] shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-[#E94B1C] shrink-0" />
                  <span>24/7 Open Medical Pharmacy</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Medical Leadership & Founder Section - White Card with Warm Neutral Border */}
      <section className="py-18 sm:py-24 bg-white border-b border-[#F0E2D9]">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="bg-[#FFF9F3] rounded-3xl border border-[#E9D8CE] p-7 sm:p-12 shadow-sm text-[#262626]">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 sm:gap-10">
                {/* Doctor Portrait */}
                <div className="relative w-44 h-56 sm:w-56 sm:h-72 rounded-2xl overflow-hidden bg-[#FFF0E6] shrink-0 border-2 border-[#E9D8CE] shadow-md">
                  <img
                    src="/images/dr-d-surya-prakash.png"
                    alt="Dr. D. Surya Prakash, M.D. Internal Medicine - Managing Director & Consultant Physician"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                  <span className="absolute bottom-2 left-2 right-2 text-center text-[10px] font-bold text-white bg-[#E94B1C] py-1 rounded md:hidden">
                    Managing Director
                  </span>
                </div>

                {/* Leadership Bio & Clinical Responsibilities */}
                <div className="space-y-4 text-left flex-1">
                  <div className="space-y-1.5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-widest bg-[#FFF0E6] text-[#C63D1B] border border-[#E9D8CE]">
                      <span>Founder & Managing Director</span>
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-black text-[#C63D1B] tracking-tight">
                      Dr. D. Surya Prakash
                    </h3>
                    <p className="text-sm sm:text-base font-bold text-[#E94B1C]">
                      M.D. Internal Medicine • Consultant Physician
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-[#4A403B] leading-relaxed font-normal">
                    As the founder and Managing Director of Surya Hospital, Dr. D. Surya Prakash oversees clinical standards, patient safety, and inpatient medical care. With deep experience in internal medicine, he guides patients through adult illness diagnosis, diabetes and blood pressure management, and post-surgical recovery.
                  </p>

                  {/* Verified Clinical Focus Pills */}
                  <div className="space-y-2 pt-1">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#756860] block">
                      Clinical Focus:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 rounded-lg bg-white border border-[#E9D8CE] text-xs text-[#262626] font-medium shadow-2xs">
                        Diabetes, BP & Cholesterol
                      </span>
                      <span className="px-3 py-1.5 rounded-lg bg-white border border-[#E9D8CE] text-xs text-[#262626] font-medium shadow-2xs">
                        Fever & Seasonal Illnesses
                      </span>
                      <span className="px-3 py-1.5 rounded-lg bg-white border border-[#E9D8CE] text-xs text-[#262626] font-medium shadow-2xs">
                        Heart & Breathing Health Checks
                      </span>
                      <span className="px-3 py-1.5 rounded-lg bg-white border border-[#E9D8CE] text-xs text-[#262626] font-medium shadow-2xs">
                        Inpatient Medical Care
                      </span>
                    </div>
                  </div>

                  {/* OPD Schedule & Navigation Actions */}
                  <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t border-[#F0E2D9]">
                    <div className="text-xs text-[#756860]">
                      <strong className="text-[#262626]">Consultation Timings:</strong> Mon – Sat: 09:30 AM – 01:30 PM & 05:00 PM – 08:30 PM
                    </div>
                    <Link to="/doctors" className="shrink-0">
                      <Button
                        variant="secondary"
                        size="sm"
                        className="text-xs font-bold border-[#E9D8CE] bg-white text-[#C63D1B] hover:bg-[#FFF0E6] w-full sm:w-auto rounded-full"
                      >
                        All Doctors & OPD Hours
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Values & Commitments with Interactive Spring Lift */}
      <section className="py-18 sm:py-24 bg-[#FFF9F3] border-b border-[#F0E2D9]">
        <Container>
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-widest bg-[#FFF0E6] text-[#C63D1B] border border-[#E9D8CE]">
                OUR CORE VALUES
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#C63D1B] tracking-tight">
                Clear Words, Kind Attention & Honest Advice
              </h2>
              <p className="text-base text-[#756860] leading-relaxed font-normal">
                {HOSPITAL_INFO.about.philosophy}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {HOSPITAL_INFO.values.map((val, idx) => (
                <motion.div
                  key={val.title}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 350, damping: 20 }}
                  className="bg-white p-7 rounded-2xl border border-[#E9D8CE] shadow-xs text-left space-y-3 flex flex-col justify-between hover:border-[#E94B1C] hover:shadow-lg transition-colors cursor-pointer group"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-[#FFF0E6] text-[#E94B1C] flex items-center justify-center border border-[#E9D8CE] group-hover:bg-[#E94B1C] group-hover:text-white transition-colors duration-300 shadow-2xs">
                      <CheckCircle2 className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#C63D1B] group-hover:text-[#E94B1C] transition-colors">{val.title}</h3>
                    <p className="text-xs sm:text-sm text-[#756860] leading-relaxed font-normal">{val.desc}</p>
                  </div>
                  <div className="pt-3 border-t border-[#F0E2D9] text-[11px] font-bold text-[#FF8A3D] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Pillar 0{idx + 1} of Excellence</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Interactive Milestone Timeline ── */}
      <section className="py-18 sm:py-24 bg-white border-b border-[#F0E2D9]">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-widest bg-[#FFF0E6] text-[#C63D1B] border border-[#E9D8CE]">
                JOURNEY OF SERVICE
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#C63D1B] tracking-tight">
                Our Milestones & Growth in Sai Nagar
              </h2>
              <p className="text-base text-[#756860] leading-relaxed">
                From a dedicated physician clinic to an integrated multi-speciality hospital with round-the-clock emergency care.
              </p>
            </div>

            <div className="relative border-l-2 border-[#E9D8CE] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
              {/* Milestone 1 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative group text-left"
              >
                <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 rounded-full bg-white border-4 border-[#E94B1C] group-hover:scale-125 transition-transform" />
                <div className="bg-[#FFF9F3] border border-[#E9D8CE] rounded-2xl p-5 sm:p-6 shadow-xs hover:border-[#E94B1C] transition">
                  <div className="flex items-center justify-between gap-4 flex-wrap mb-2">
                    <span className="text-xs font-black uppercase tracking-wider text-[#C63D1B] bg-[#FFF0E6] px-3 py-1 rounded-md border border-[#E9D8CE]">
                      Founding Chapter
                    </span>
                    <span className="text-xs font-bold text-[#756860]">Sai Nagar, Anantapur</span>
                  </div>
                  <h4 className="text-lg font-bold text-[#1A1D20]">
                    Surya Hospital Established by Dr. D. Surya Prakash
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4A403B] mt-1.5 leading-relaxed">
                    Started with outpatient consultations in Internal Medicine, fever care, and chronic illness monitoring to deliver transparent clinical attention.
                  </p>
                </div>
              </motion.div>

              {/* Milestone 2 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="relative group text-left"
              >
                <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 rounded-full bg-white border-4 border-[#FF8A3D] group-hover:scale-125 transition-transform" />
                <div className="bg-[#FFF9F3] border border-[#E9D8CE] rounded-2xl p-5 sm:p-6 shadow-xs hover:border-[#E94B1C] transition">
                  <div className="flex items-center justify-between gap-4 flex-wrap mb-2">
                    <span className="text-xs font-black uppercase tracking-wider text-[#FF8A3D] bg-[#FFF0E6] px-3 py-1 rounded-md border border-[#E9D8CE]">
                      Inpatient & Surgical Wing
                    </span>
                    <span className="text-xs font-bold text-[#756860]">Infrastructure Expansion</span>
                  </div>
                  <h4 className="text-lg font-bold text-[#1A1D20]">
                    Sterile Operation Theatres & Monitored Recovery Beds
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4A403B] mt-1.5 leading-relaxed">
                    Expanded with fully equipped operating suites for General, Laparoscopic, Orthopedic, and ENT surgeries, ensuring patient safety.
                  </p>
                </div>
              </motion.div>

              {/* Milestone 3 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative group text-left"
              >
                <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 rounded-full bg-white border-4 border-[#006677] group-hover:scale-125 transition-transform" />
                <div className="bg-[#FFF9F3] border border-[#E9D8CE] rounded-2xl p-5 sm:p-6 shadow-xs hover:border-[#E94B1C] transition">
                  <div className="flex items-center justify-between gap-4 flex-wrap mb-2">
                    <span className="text-xs font-black uppercase tracking-wider text-[#006677] bg-[#E6F4F7] px-3 py-1 rounded-md border border-[#BDE0E8]">
                      24/7 Critical Services
                    </span>
                    <span className="text-xs font-bold text-[#756860]">Continuous Care</span>
                  </div>
                  <h4 className="text-lg font-bold text-[#1A1D20]">
                    24/7 Casualty Desk, Pharmacy & Dialysis Unit
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4A403B] mt-1.5 leading-relaxed">
                    Commissioned emergency casualty support, round-the-clock on-premise pharmacy, and dedicated dialysis units for patients across Anantapur district.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* Cross-page Navigation CTA */}
      <section className="py-14 bg-white border-b border-[#F0E2D9]">
        <Container>
          <AnimateIn animation="pop" delay={100} className="p-8 sm:p-12 rounded-3xl bg-[#FFF0E6] border border-[#E9D8CE] text-[#262626] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-sm">
            <div className="space-y-1.5">
              <h3 className="text-xl sm:text-2xl font-black text-[#C63D1B]">
                Have questions about our doctors or departments?
              </h3>
              <p className="text-xs sm:text-sm text-[#756860] font-normal">
                Explore our full specialist roster or contact our reception desk directly.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full md:w-auto">
              <Link to="/doctors" className="w-full sm:w-auto">
                <Button variant="primary" size="md" className="w-full sm:w-auto font-bold text-xs bg-[#E94B1C] hover:bg-[#A83218] text-white rounded-full">
                  View Doctor Directory
                </Button>
              </Link>
              <Link to="/contact" className="w-full sm:w-auto">
                <Button variant="outline" size="md" className="w-full sm:w-auto font-bold text-xs text-[#C63D1B] border-[#E9D8CE] hover:bg-[#FFF0E6] rounded-full">
                  Contact Us
                </Button>
              </Link>
            </div>
          </AnimateIn>
        </Container>
      </section>
    </div>
  );
}
export default AboutPage;

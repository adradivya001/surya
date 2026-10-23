import React from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  Phone,
  HeartPulse,
  Activity,
  Droplets,
  Ear,
  Bone,
  Wind,
  Stethoscope,
  Ribbon,
  Brain,
  Scan,
  Scissors,
  BrainCircuit,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { HOSPITAL_INFO } from "../../constants/hospitalData";
import { AnimateIn } from "../ui/AnimateIn";

const SLUG_MAP = {
  "CARDIOLOGY": "/specialities/cardiology",
  "GASTROENTEROLOGY": "/specialities/gastroenterology",
  "NEPHROLOGY": "/specialities/nephrology",
  "E.N.T.": "/specialities/ent",
  "ORTHOPEDIC": "/specialities/orthopedics-spine",
  "PULMONOLOGY": "/specialities/pulmonology",
  "ANESTHESIA & INTENSIVIST": "/specialities/anesthesia-critical-care",
  "ONCOLOGY": "/specialities/medical-oncology",
  "NEUROLOGY": "/specialities/neurology",
  "UROLOGY": "/specialities/urology",
  "GENERAL SURGERY": "/specialities/general-laparoscopic-surgery",
  "PSYCHIATRY": "/specialities/psychiatry",
};

export function SpecialtiesDoctorsPoster() {
  const departmentsData = [
    { specialty: "CARDIOLOGY", icon: HeartPulse, doctors: [
      { name: "Dr. K. Vamsi Krishna", qualifications: "MD, DM (OSM)" },
      { name: "Dr. K. Spandana", qualifications: "MD, DM" },
    ]},
    { specialty: "GASTROENTEROLOGY", icon: Activity, doctors: [
      { name: "Dr. S.T. Rajaneesh Reddy", qualifications: "DM Gastro" },
    ]},
    { specialty: "NEPHROLOGY", icon: Droplets, doctors: [
      { name: "Dr. M.V.K. Hareesh", qualifications: "DM Nephro" },
      { name: "Dr. V. Badarinath Reddy", qualifications: "MD, DNB" },
    ]},
    { specialty: "E.N.T.", icon: Ear, doctors: [
      { name: "Dr. P. Lakshmi Narasimha Rao", qualifications: "MS (E.N.T)" },
      { name: "Dr. Krishna Sai", qualifications: "DNB (E.N.T)" },
    ]},
    { specialty: "ORTHOPEDIC", icon: Bone, doctors: [
      { name: "Dr. M. Diwakar", qualifications: "MS Ortho & Spine" },
      { name: "Dr. Shanthi Swaroop", qualifications: "MS Ortho" },
      { name: "Dr. Raghavendra Raju", qualifications: "MS Ortho" },
    ]},
    { specialty: "PULMONOLOGY", icon: Wind, doctors: [
      { name: "Dr. Sudhindra", qualifications: "MD TB & RD" },
      { name: "Dr. K. Muralidhar Reddy", qualifications: "DNB" },
    ]},
    { specialty: "ANESTHESIA & INTENSIVIST", icon: Stethoscope, doctors: [
      { name: "Dr. V. Gowtham", qualifications: "MD" },
    ]},
    { specialty: "ONCOLOGY", icon: Ribbon, doctors: [
      { name: "Dr. Vishnupriya", qualifications: "DM Oncology" },
    ]},
    { specialty: "NEUROLOGY", icon: Brain, doctors: [
      { name: "Dr. Thirupati Kedar", qualifications: "DM Neuro" },
    ]},
    { specialty: "UROLOGY", icon: Scan, doctors: [
      { name: "Dr. Y. Harinath Reddy", qualifications: "MS, MCH (Urology)" },
      { name: "Dr. B. Rajashekar", qualifications: "MS, MCH (Urology)" },
    ]},
    { specialty: "GENERAL SURGERY", icon: Scissors, doctors: [
      { name: "Dr. Sai Swaroop", qualifications: "MS General Surgery" },
      { name: "Dr. Sushanth", qualifications: "MS General Surgery" },
    ]},
    { specialty: "PSYCHIATRY", icon: BrainCircuit, doctors: [
      { name: "Dr. V. Sashanka", qualifications: "MD Psychiatry" },
    ]},
  ];

  return (
    <section
      id="doctors-specialists"
      className="relative py-16 sm:py-24 bg-gradient-to-b from-[#FFF9F3] to-[#FFF5EC] text-[#262626] overflow-hidden"
    >
      {/* Decorative ambient */}
      <div className="absolute top-20 -right-20 w-[400px] h-[400px] rounded-full bg-[#E94B1C]/[0.03] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 -left-20 w-[350px] h-[350px] rounded-full bg-[#FF8A3D]/[0.03] blur-[80px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <AnimateIn animation="fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#FFF0E6] to-[#FFE8D6] text-[#E94B1C] text-[11px] font-extrabold uppercase tracking-[0.14em] mb-4 border border-[#FADCCB]/80 shadow-[0_2px_8px_rgba(233,75,28,0.06)]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>OUR EXPERTISE</span>
            </div>
          </AnimateIn>

          <AnimateIn animation="fade-up" delay={80}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif-heading font-bold text-[#14233C] tracking-tight leading-tight">
              Meet Our Doctors &{" "}
              <span className="bg-gradient-to-r from-[#E94B1C] to-[#F26A21] bg-clip-text text-transparent">
                Specialists
              </span>
            </h2>
          </AnimateIn>

          <AnimateIn animation="fade-up" delay={150}>
            <p className="mt-3 text-sm sm:text-base text-[#4A5568] font-medium leading-relaxed max-w-xl mx-auto">
              Our experienced medical team provides expert care across key specialities.
            </p>
          </AnimateIn>
        </div>

        {/* 4 Featured Specialty Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 max-w-6xl mx-auto">
          {departmentsData.slice(0, 4).map((dept, idx) => (
            <AnimateIn
              key={dept.specialty}
              animation="fade-up"
              delay={Math.min(idx * 60, 200)}
              className="w-full flex"
            >
              <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#EFE5DC] shadow-sm hover:shadow-xl hover:border-[#E94B1C]/40 transition-all duration-400 flex flex-col justify-between h-full w-full group magnetic-card card-shine-effect">

                {/* Specialty Header */}
                <div className="mb-4">
                  <div className="flex items-center justify-center gap-2">
                    <span className="h-[2px] min-w-[8px] flex-1 bg-gradient-to-r from-transparent to-[#E94B1C]/30 group-hover:to-[#E94B1C] transition-colors rounded-full" />
                    <div className="flex items-center gap-1.5 shrink-0 px-1">
                      {dept.icon && (
                        <dept.icon
                          className="w-4 h-4 text-[#E94B1C] shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                          strokeWidth={2.2}
                          aria-hidden="true"
                        />
                      )}
                      <h3 className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-[#C63D1B] text-center leading-none">
                        {dept.specialty}
                      </h3>
                    </div>
                    <span className="h-[2px] min-w-[8px] flex-1 bg-gradient-to-l from-transparent to-[#E94B1C]/30 group-hover:to-[#E94B1C] transition-colors rounded-full" />
                  </div>
                </div>

                {/* Doctor Listings */}
                <div className="space-y-3 text-center flex-1 flex flex-col justify-center py-2">
                  {dept.doctors.map((doctor, dIdx) => {
                    const initials = doctor.name
                      .replace(/^Dr\.\s*/i, "")
                      .split(" ")
                      .map((n) => n[0])
                      .filter(Boolean)
                      .slice(0, 2)
                      .join("");

                    return (
                      <div
                        key={doctor.name}
                        className={`flex items-center gap-3 text-left ${
                          dIdx > 0 ? "pt-2.5 border-t border-[#F0E2D9]" : ""
                        }`}
                      >
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#FFF0E6] to-[#FFE3D0] text-[#E94B1C] font-bold text-xs flex items-center justify-center shrink-0 border border-[#FADCCB] group-hover:scale-105 transition-transform shadow-xs">
                          {initials || "MD"}
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="text-[13.5px] sm:text-[14.5px] font-bold text-[#262626] leading-snug truncate">
                            {doctor.name}
                          </h4>
                          <p className="text-[10px] sm:text-[11px] text-[#756860] font-semibold tracking-wide truncate">
                            {doctor.qualifications}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Actions */}
                <div className="mt-4 pt-3 border-t border-[#F0E2D9] flex items-center justify-between text-xs">
                  <Link
                    to={`/appointment?dept=${encodeURIComponent(dept.specialty)}`}
                    className="group/link font-bold text-[#C63D1B] hover:text-[#A83218] inline-flex items-center gap-1.5 transition-colors text-[11px] sm:text-xs"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#E94B1C]" />
                    <span>Book OPD</span>
                  </Link>
                  <Link
                    to={SLUG_MAP[dept.specialty] || "/doctors"}
                    className="font-semibold text-[#756860] hover:text-[#E94B1C] transition-colors text-[11px] sm:text-xs inline-flex items-center gap-1"
                  >
                    <span>View Page</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Explore CTA */}
        <AnimateIn animation="fade-up" delay={250}>
          <div className="mt-12 sm:mt-14 text-center">
            <Link
              to="/doctors"
              className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#E94B1C] to-[#C63D1B] hover:from-[#C63D1B] hover:to-[#A83218] transition-all shadow-[0_6px_20px_rgba(233,75,28,0.3)] hover:shadow-[0_8px_28px_rgba(233,75,28,0.4)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Explore All 12 Specialities</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </AnimateIn>

        {/* Help Banner */}
        <AnimateIn animation="fade-up" delay={200}>
          <div className="mt-12 sm:mt-14 text-center max-w-2xl mx-auto p-5 sm:p-6 rounded-2xl bg-white/90 backdrop-blur-sm border border-[#EFE5DC] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left space-y-0.5">
              <p className="text-sm font-bold text-[#14233C]">
                Need assistance selecting the right specialist?
              </p>
              <p className="text-xs text-[#756860]">
                Our hospital front desk coordinators are available 24/7.
              </p>
            </div>
            <div className="flex items-center gap-2.5 shrink-0">
              <a
                href={`tel:${HOSPITAL_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#E94B1C] to-[#C63D1B] hover:from-[#C63D1B] hover:to-[#A83218] transition-all shadow-sm"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {HOSPITAL_INFO.phone}</span>
              </a>
              <Link
                to="/appointment"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-[#C63D1B] bg-[#FFF0E6] hover:bg-[#FFE4D3] border border-[#E9D8CE] transition-colors"
              >
                <span>Book Visit</span>
              </Link>
            </div>
          </div>
        </AnimateIn>

      </div>
    </section>
  );
}

export default SpecialtiesDoctorsPoster;

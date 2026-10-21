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
} from "lucide-react";
import { HOSPITAL_INFO } from "../../constants/hospitalData";
import { AnimateIn } from "../ui/AnimateIn";

export function SpecialtiesDoctorsPoster() {
  // Exact 12 departments and doctors specified in prompt with line icons
  const departmentsData = [
    {
      specialty: "CARDIOLOGY",
      icon: HeartPulse,
      doctors: [
        { name: "Dr. K. Vamsi Krishna", qualifications: "MD, DM (OSM)" },
        { name: "Dr. K. Spandana", qualifications: "MD, DM" },
      ],
    },
    {
      specialty: "GASTROENTEROLOGY",
      icon: Activity,
      doctors: [
        { name: "Dr. S.T. Rajaneesh Reddy", qualifications: "DM Gastro" },
      ],
    },
    {
      specialty: "NEPHROLOGY",
      icon: Droplets,
      doctors: [
        { name: "Dr. M.V.K. Hareesh", qualifications: "DM Nephro" },
        { name: "Dr. V. Badarinath Reddy", qualifications: "MD, DNB" },
      ],
    },
    {
      specialty: "E.N.T.",
      icon: Ear,
      doctors: [
        { name: "Dr. P. Lakshmi Narasimha Rao", qualifications: "MS (E.N.T)" },
        { name: "Dr. Krishna Sai", qualifications: "DNB (E.N.T)" },
      ],
    },
    {
      specialty: "ORTHOPEDIC",
      icon: Bone,
      doctors: [
        { name: "Dr. M. Diwakar", qualifications: "MS Ortho & Spine" },
        { name: "Dr. Shanthi Swaroop", qualifications: "MS Ortho" },
        { name: "Dr. Raghavendra Raju", qualifications: "MS Ortho" },
      ],
    },
    {
      specialty: "PULMONOLOGY",
      icon: Wind,
      doctors: [
        { name: "Dr. Sudhindra", qualifications: "MD TB & RD" },
        { name: "Dr. K. Muralidhar Reddy", qualifications: "DNB" },
      ],
    },
    {
      specialty: "ANESTHESIA & INTENSIVIST",
      icon: Stethoscope,
      doctors: [
        { name: "Dr. V. Gowtham", qualifications: "MD" },
      ],
    },
    {
      specialty: "ONCOLOGY",
      icon: Ribbon,
      doctors: [
        { name: "Dr. Vishnupriya", qualifications: "DM Oncology" },
      ],
    },
    {
      specialty: "NEUROLOGY",
      icon: Brain,
      doctors: [
        { name: "Dr. Thirupati Kedar", qualifications: "DM Neuro" },
      ],
    },
    {
      specialty: "UROLOGY",
      icon: Scan,
      doctors: [
        { name: "Dr. Y. Harinath Reddy", qualifications: "MS, MCH (Urology)" },
        { name: "Dr. B. Rajashekar", qualifications: "MS, MCH (Urology)" },
      ],
    },
    {
      specialty: "GENERAL SURGERY",
      icon: Scissors,
      doctors: [
        { name: "Dr. Sai Swaroop", qualifications: "MS General Surgery" },
        { name: "Dr. Sushanth", qualifications: "MS General Surgery" },
      ],
    },
    {
      specialty: "PSYCHIATRY",
      icon: BrainCircuit,
      doctors: [
        { name: "Dr. V. Sashanka", qualifications: "MD Psychiatry" },
      ],
    },
  ];

  return (
    <section
      id="doctors-specialists"
      className="relative py-20 sm:py-28 bg-[#FFF9F3] text-[#262626] overflow-hidden"
    >
      {/* Decorative Subtle Dot accents matching orange theme */}
      <div className="absolute top-10 left-6 sm:left-12 opacity-35 pointer-events-none select-none text-[#FF8A3D]">
        <div className="grid grid-cols-2 gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF8A3D]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF8A3D]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF8A3D]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF8A3D]" />
        </div>
      </div>
      <div className="absolute bottom-12 right-6 sm:right-12 opacity-35 pointer-events-none select-none text-[#FF8A3D]">
        <div className="grid grid-cols-2 gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF8A3D]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF8A3D]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF8A3D]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF8A3D]" />
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading & Introduction */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <AnimateIn animation="fade-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#C63D1B] leading-tight">
              MEET OUR DOCTORS &amp; SPECIALISTS
            </h2>
          </AnimateIn>

          {/* Thin horizontal orange divider beneath heading */}
          <AnimateIn animation="fade-up" delay={100}>
            <div className="w-28 sm:w-36 h-[3px] bg-[#E94B1C] mx-auto mt-4 mb-5 rounded-full" />
          </AnimateIn>

          {/* Centered Introduction Paragraph */}
          <AnimateIn animation="fade-up" delay={150}>
            <p className="text-sm sm:text-base md:text-lg text-[#4A403B] font-medium leading-relaxed max-w-2xl mx-auto">
              Our highly experienced medical team is here to provide expert care across a wide range of specialties.
            </p>
          </AnimateIn>
        </div>

        {/* 4 Doctor Specialty Profiles Grid on Desktop with Explore Our Specialists tab */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 max-w-6xl mx-auto">
          {departmentsData.slice(0, 4).map((dept, idx) => (
            <AnimateIn
              key={dept.specialty}
              animation="fade-up"
              delay={Math.min(idx * 40, 200)}
              className="w-full flex"
            >
              <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#E9D8CE] shadow-xs hover:shadow-lg hover:border-[#E94B1C] transition-all duration-300 flex flex-col justify-between h-full w-full group">
                
                {/* Specialty Header: [Left line] [Small specialty icon] [Specialty name] [Right line] */}
                <div className="mb-4">
                  <div className="flex items-center justify-center gap-1.5 sm:gap-2">
                    <span className="h-[1.5px] min-w-[8px] flex-1 bg-[#E94B1C]/30 group-hover:bg-[#E94B1C] transition-colors rounded-full" />
                    
                    <div className="flex items-center gap-1.5 shrink-0 px-1">
                      {dept.icon && (
                        <dept.icon
                          className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E94B1C] shrink-0 transition-transform duration-300 group-hover:scale-110"
                          strokeWidth={2.2}
                          aria-hidden="true"
                        />
                      )}
                      <h3 className="text-xs sm:text-[13px] font-black uppercase tracking-wider text-[#C63D1B] text-center leading-none">
                        {dept.specialty}
                      </h3>
                    </div>

                    <span className="h-[1.5px] min-w-[8px] flex-1 bg-[#E94B1C]/30 group-hover:bg-[#E94B1C] transition-colors rounded-full" />
                  </div>
                </div>

                {/* Doctor Listings under this specialty */}
                <div className="space-y-3.5 text-center flex-1 flex flex-col justify-center py-2">
                  {dept.doctors.map((doctor, dIdx) => (
                    <div key={doctor.name} className={`${dIdx > 0 ? "pt-2.5 border-t border-[#F0E2D9]" : ""}`}>
                      <h4 className="text-[15px] sm:text-base font-bold text-[#262626] leading-snug">
                        {doctor.name}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-[#756860] font-semibold mt-0.5 tracking-wide">
                        {doctor.qualifications}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Subtle Action / Direct Appointment Link */}
                <div className="mt-4 pt-3 border-t border-[#F0E2D9] flex items-center justify-between text-xs">
                  <Link
                    to={`/appointment?dept=${encodeURIComponent(dept.specialty)}`}
                    className="font-bold text-[#C63D1B] hover:text-[#A83218] inline-flex items-center gap-1 transition-colors text-[11px] sm:text-xs"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#E94B1C]" />
                    <span>Book OPD</span>
                  </Link>

                  <Link
                    to={
                      dept.specialty === "CARDIOLOGY" ? "/specialities/cardiology" :
                      dept.specialty === "GASTROENTEROLOGY" ? "/specialities/gastroenterology" :
                      dept.specialty === "NEPHROLOGY" ? "/specialities/nephrology" :
                      dept.specialty === "E.N.T." ? "/specialities/ent" :
                      dept.specialty === "ORTHOPEDIC" ? "/specialities/orthopedics-spine" :
                      dept.specialty === "PULMONOLOGY" ? "/specialities/pulmonology" :
                      dept.specialty === "ANESTHESIA & INTENSIVIST" ? "/specialities/anesthesia-critical-care" :
                      dept.specialty === "ONCOLOGY" ? "/specialities/medical-oncology" :
                      dept.specialty === "NEUROLOGY" ? "/specialities/neurology" :
                      dept.specialty === "UROLOGY" ? "/specialities/urology" :
                      dept.specialty === "GENERAL SURGERY" ? "/specialities/general-laparoscopic-surgery" :
                      dept.specialty === "PSYCHIATRY" ? "/specialities/psychiatry" :
                      "/doctors"
                    }
                    className="font-semibold text-[#756860] hover:text-[#E94B1C] transition-colors text-[11px] sm:text-xs"
                  >
                    View Page →
                  </Link>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Explore Our Specialists Tab Button */}
        <AnimateIn animation="fade-up" delay={250}>
          <div className="mt-10 sm:mt-12 text-center">
            <Link
              to="/doctors"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#E94B1C] hover:bg-[#A83218] transition-all shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Explore Our Specialists</span>
              <span className="text-[#FFF0E6]">→</span>
            </Link>
          </div>
        </AnimateIn>

        {/* Bottom CTA / Reception Helpline Banner */}
        <AnimateIn animation="fade-up" delay={200}>
          <div className="mt-14 sm:mt-16 text-center max-w-2xl mx-auto p-5 sm:p-6 rounded-2xl bg-white border border-[#E9D8CE] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left space-y-0.5">
              <p className="text-sm font-bold text-[#C63D1B]">
                Need assistance selecting the right specialist?
              </p>
              <p className="text-xs text-[#756860]">
                Our hospital front desk coordinators are available 24/7.
              </p>
            </div>

            <div className="flex items-center gap-2.5 shrink-0">
              <a
                href={`tel:${HOSPITAL_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#C63D1B] hover:bg-[#A83218] transition-colors shadow-sm"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {HOSPITAL_INFO.phone}</span>
              </a>
              <Link
                to="/appointment"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-[#C63D1B] bg-[#FFF0E6] hover:bg-[#FFE5D4] border border-[#E9D8CE] transition-colors"
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

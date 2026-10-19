import React from "react";
import { Link } from "react-router-dom";
import { Calendar, Phone } from "lucide-react";
import { HOSPITAL_INFO } from "../../constants/hospitalData";
import { AnimateIn } from "../ui/AnimateIn";

export function SpecialtiesDoctorsPoster() {
  // Exact 12 departments and doctors specified in prompt
  const departmentsData = [
    {
      specialty: "CARDIOLOGY",
      doctors: [
        { name: "Dr. K. Vamsi Krishna", qualifications: "MD, DM (OSM)" },
        { name: "Dr. K. Spandana", qualifications: "MD, DM" },
      ],
    },
    {
      specialty: "GASTROENTEROLOGY",
      doctors: [
        { name: "Dr. S.T. Rajaneesh Reddy", qualifications: "DM Gastro" },
      ],
    },
    {
      specialty: "NEPHROLOGY",
      doctors: [
        { name: "Dr. M.V.K. Hareesh", qualifications: "DM Nephro" },
        { name: "Dr. V. Badarinath Reddy", qualifications: "MD, DNB" },
      ],
    },
    {
      specialty: "E.N.T.",
      doctors: [
        { name: "Dr. P. Lakshmi Narasimha Rao", qualifications: "MS (E.N.T)" },
        { name: "Dr. Krishna Sai", qualifications: "DNB (E.N.T)" },
      ],
    },
    {
      specialty: "ORTHOPEDIC",
      doctors: [
        { name: "Dr. M. Diwakar", qualifications: "MS Ortho & Spine" },
        { name: "Dr. Shanthi Swaroop", qualifications: "MS Ortho" },
        { name: "Dr. Raghavendra Raju", qualifications: "MS Ortho" },
      ],
    },
    {
      specialty: "PULMONOLOGY",
      doctors: [
        { name: "Dr. Sudhindra", qualifications: "MD TB & RD" },
        { name: "Dr. K. Muralidhar Reddy", qualifications: "DNB" },
      ],
    },
    {
      specialty: "ANESTHESIA & INTENSIVIST",
      doctors: [
        { name: "Dr. V. Gowtham", qualifications: "MD" },
      ],
    },
    {
      specialty: "ONCOLOGY",
      doctors: [
        { name: "Dr. Vishnupriya", qualifications: "DM Oncology" },
      ],
    },
    {
      specialty: "NEUROLOGY",
      doctors: [
        { name: "Dr. Thirupati Kedar", qualifications: "DM Neuro" },
      ],
    },
    {
      specialty: "UROLOGY",
      doctors: [
        { name: "Dr. Y. Harinath Reddy", qualifications: "MS, MCH (Urology)" },
        { name: "Dr. B. Rajashekar", qualifications: "MS, MCH (Urology)" },
      ],
    },
    {
      specialty: "GENERAL SURGERY",
      doctors: [
        { name: "Dr. Sai Swaroop", qualifications: "MS General Surgery" },
        { name: "Dr. Sushanth", qualifications: "MS General Surgery" },
      ],
    },
    {
      specialty: "PSYCHIATRY",
      doctors: [
        { name: "Dr. V. Sashanka", qualifications: "MD Psychiatry" },
      ],
    },
  ];

  return (
    <section
      id="doctors-specialists"
      className="relative py-20 sm:py-28 bg-[#DDFBFF] text-[#1A1D20] overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(circle at 10% 15%, rgba(49, 155, 255, 0.12) 0%, transparent 45%), radial-gradient(circle at 90% 85%, rgba(49, 155, 255, 0.14) 0%, transparent 45%)",
      }}
    >
      {/* Decorative Subtle Medical Plus & Dot accents matching reference */}
      <div className="absolute top-10 left-6 sm:left-12 opacity-40 pointer-events-none select-none text-[#319BFF]">
        <div className="grid grid-cols-2 gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#319BFF]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#319BFF]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#319BFF]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#319BFF]" />
        </div>
      </div>
      <div className="absolute top-24 right-8 sm:right-16 opacity-30 pointer-events-none select-none text-[#319BFF]">
        <svg className="w-8 h-8 text-[#319BFF]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 10.5h-5.5V5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v5.5H5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h5.5V19c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-5.5H19c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z" />
        </svg>
      </div>
      <div className="absolute bottom-12 right-6 sm:right-12 opacity-40 pointer-events-none select-none text-[#319BFF]">
        <div className="grid grid-cols-2 gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#319BFF]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#319BFF]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#319BFF]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#319BFF]" />
        </div>
      </div>
      <div className="absolute bottom-20 left-8 sm:left-16 opacity-30 pointer-events-none select-none text-[#319BFF]">
        <svg className="w-8 h-8 text-[#319BFF]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 10.5h-5.5V5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v5.5H5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h5.5V19c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-5.5H19c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z" />
        </svg>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Hospital Logo Header */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <Link to="/" className="inline-block transition-transform hover:scale-105">
            <img
              src="/images/surya-hospital-orange-emblem-logo.png"
              alt="Surya Hospital Logo"
              className="h-16 sm:h-20 md:h-24 w-auto object-contain drop-shadow-sm"
            />
          </Link>
        </div>

        {/* Section Heading & Introduction */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <AnimateIn animation="fade-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#1428B5] leading-tight">
              MEET OUR DOCTORS & SPECIALISTS
            </h2>
          </AnimateIn>

          {/* Thin horizontal blue divider beneath heading */}
          <AnimateIn animation="fade-up" delay={100}>
            <div className="w-28 sm:w-36 h-[3px] bg-[#1428B5] mx-auto mt-4 mb-5 rounded-full" />
          </AnimateIn>

          {/* Centered Introduction Paragraph */}
          <AnimateIn animation="fade-up" delay={150}>
            <p className="text-sm sm:text-base md:text-lg text-[#2A2E34] font-medium leading-relaxed max-w-2xl mx-auto">
              Our highly experienced medical team is here to provide expert care across a wide range of specialties.
            </p>
          </AnimateIn>
        </div>

        {/* 12 Specialties & 19 Doctors Grid matching reference poster aesthetic */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 max-w-6xl mx-auto">
          {departmentsData.map((dept, idx) => (
            <AnimateIn
              key={dept.specialty}
              animation="fade-up"
              delay={Math.min(idx * 40, 360)}
              className="w-full"
            >
              <div className="bg-white/90 backdrop-blur-xs rounded-2xl p-6 sm:p-7 border border-[#BCEBF5] shadow-[0_4px_20px_rgba(20,40,181,0.06)] hover:shadow-[0_8px_30px_rgba(20,40,181,0.12)] hover:border-[#319BFF] transition-all duration-300 flex flex-col justify-between h-full group">
                
                {/* Specialty Header with decorative horizontal blue lines on either side */}
                <div className="mb-5">
                  <div className="flex items-center justify-center gap-3">
                    <span className="h-[2px] flex-1 bg-[#1428B5]/30 group-hover:bg-[#1428B5] transition-colors rounded-full" />
                    <h3 className="text-sm sm:text-base font-black uppercase tracking-wider text-[#1428B5] text-center px-1">
                      {dept.specialty}
                    </h3>
                    <span className="h-[2px] flex-1 bg-[#1428B5]/30 group-hover:bg-[#1428B5] transition-colors rounded-full" />
                  </div>
                </div>

                {/* Doctor Listings under this specialty */}
                <div className="space-y-4 text-center flex-1 flex flex-col justify-center py-1">
                  {dept.doctors.map((doctor, dIdx) => (
                    <div key={doctor.name} className={`${dIdx > 0 ? "pt-3 border-t border-[#DDFBFF]" : ""}`}>
                      <h4 className="text-base sm:text-[17px] font-bold text-[#1A1D20] leading-snug">
                        {doctor.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#3A4048] font-semibold mt-1 tracking-wide">
                        {doctor.qualifications}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Subtle Action / Direct Appointment Link */}
                <div className="mt-5 pt-3.5 border-t border-[#DDFBFF] flex items-center justify-between text-xs">
                  <Link
                    to={`/appointment?dept=${encodeURIComponent(dept.specialty)}`}
                    className="font-bold text-[#1428B5] hover:text-[#0E1F96] inline-flex items-center gap-1.5 transition-colors"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#319BFF]" />
                    <span>Book OPD Slot</span>
                  </Link>

                  <Link
                    to="/doctors"
                    className="font-semibold text-[#5A626E] hover:text-[#1428B5] transition-colors"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Bottom CTA / Reception Helpline Banner */}
        <AnimateIn animation="fade-up" delay={200}>
          <div className="mt-14 sm:mt-16 text-center max-w-2xl mx-auto p-5 sm:p-6 rounded-2xl bg-white/95 border border-[#BCEBF5] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left space-y-0.5">
              <p className="text-sm font-bold text-[#1428B5]">
                Need assistance selecting the right specialist?
              </p>
              <p className="text-xs text-[#5A626E]">
                Our hospital front desk coordinators are available 24/7.
              </p>
            </div>

            <div className="flex items-center gap-2.5 shrink-0">
              <a
                href={`tel:${HOSPITAL_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#1428B5] hover:bg-[#0E1F96] transition-colors shadow-sm"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {HOSPITAL_INFO.phone}</span>
              </a>
              <Link
                to="/appointment"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-[#1428B5] bg-[#DDFBFF] hover:bg-[#C9F7FC] border border-[#319BFF] transition-colors"
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

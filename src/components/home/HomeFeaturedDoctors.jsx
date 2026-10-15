import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import {
  Calendar,
  ArrowRight,
  Clock,
  X,
  AlertCircle,
} from "lucide-react";
import { HOSPITAL_INFO } from "../../constants/hospitalData";
import { AnimateIn } from "../ui/AnimateIn";

export function HomeFeaturedDoctors() {
  const [activeDoctorModal, setActiveDoctorModal] = useState(null);

  return (
    <section className="py-18 md:py-28 bg-[#FCFAF7] border-b border-[#DED7D7] overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <AnimateIn animation="slide-left" className="space-y-3 max-w-2xl text-left">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-widest bg-[#E8D8D9] text-[#641D2D] border border-[#DED7D7]">
              EXPERIENCED DOCTORS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#29252A] tracking-tight">
              Clinical Leadership & Specialists
            </h2>
            <p className="text-base text-[#6F686B] leading-relaxed font-normal">
              Our qualified doctors take the time to understand your symptoms, explain your diagnosis clearly, and guide you through each step of your recovery.
            </p>
          </AnimateIn>

          <AnimateIn animation="slide-right" delay={150}>
            <Link to="/doctors" className="w-full sm:w-auto shrink-0">
              <Button
                variant="outline"
                size="md"
                icon={ArrowRight}
                iconPosition="right"
                className="text-xs font-bold border-[#DED7D7] bg-white hover:bg-[#FCFAF7] text-[#29252A] w-full sm:w-auto"
              >
                View Full Doctor List
              </Button>
            </Link>
          </AnimateIn>
        </div>

        {/* Doctor Verification Notice Banner */}
        <AnimateIn animation="fade-up" delay={200}>
          <div className="mb-8 p-4 rounded-xl bg-white border border-[#DED7D7] flex items-start gap-3 text-xs sm:text-sm text-[#29252A] shadow-2xs">
            <AlertCircle className="w-5 h-5 text-[#641D2D] shrink-0 mt-0.5" />
            <span className="text-[#6F686B]">
              <strong className="text-[#29252A]">Visiting Hours Notice:</strong> Led by Managing Director Dr. D. Surya Prakash (M.D. Internal Medicine), our doctors are available for morning and evening consultations. Book online or call our reception desk to check today's consultation hours.
            </span>
          </div>
        </AnimateIn>

        {/* Doctors Grid - 4 columns on large screens, comfortable cards on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOSPITAL_INFO.doctors.map((doc, idx) => (
            <AnimateIn
              key={doc.id}
              animation="fade-up"
              delay={idx * 130}
              className={`bg-white rounded-2xl border shadow-2xs hover:shadow-card hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between group ${
                doc.isManagingDirector
                  ? "border-[#641D2D]/60 ring-1 ring-[#641D2D]/20"
                  : "border-[#DED7D7] hover:border-[#641D2D]"
              }`}
            >
              {/* Doctor Photo */}
              <div className="relative aspect-[4/5] bg-[#28171D] overflow-hidden">
                <img
                  src={doc.image}
                  alt={doc.name}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = doc.fallbackImage || "/images/dr-d-surya-prakash.png";
                  }}
                  className="w-full h-full object-cover object-top group-hover:scale-104 transition duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#28171D]/90 via-[#28171D]/20 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-2xs ${
                      doc.isManagingDirector
                        ? "bg-[#641D2D] text-white"
                        : "bg-white/95 text-[#29252A]"
                    }`}
                  >
                    {doc.status}
                  </span>
                </div>

                {/* Bottom Overlay Name */}
                <div className="absolute bottom-3 left-3 right-3 text-white text-left">
                  <span className="text-[11px] font-bold text-[#E8D8D9] block uppercase tracking-wider">
                    {doc.department}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-0.5 leading-snug">
                    {doc.name}
                  </h3>
                </div>
              </div>

              {/* Doctor Details */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1 text-left">
                  <div className="text-xs font-bold text-[#641D2D]">
                    {doc.qualifications}
                  </div>
                  <div className="text-xs font-semibold text-[#29252A]">
                    {doc.designation}
                  </div>
                  <p className="text-xs text-[#6F686B] leading-relaxed pt-0.5 line-clamp-2">
                    {doc.experience}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#DED7D7] space-y-3">
                  <div className="flex items-start gap-1.5 text-xs text-[#6F686B] leading-snug text-left">
                    <Clock className="w-3.5 h-3.5 text-[#641D2D] shrink-0 mt-0.5" />
                    <span>{doc.opdTimings}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-0.5">
                    <button
                      type="button"
                      onClick={() => setActiveDoctorModal(doc)}
                      className="w-full py-2.5 px-2.5 rounded-xl text-xs font-bold border border-[#DED7D7] bg-white hover:bg-[#FCFAF7] text-[#29252A] transition cursor-pointer active:scale-95"
                    >
                      View Profile
                    </button>

                    <Link
                      to={`/appointment?doctor=${encodeURIComponent(doc.name)}&dept=${encodeURIComponent(doc.department)}`}
                      className="w-full"
                    >
                      <Button
                        variant="primary"
                        size="sm"
                        fullWidth
                        className="bg-[#E56A2E] hover:bg-[#C8541D] text-white text-xs font-bold py-2.5 active:scale-95"
                      >
                        Book OPD
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </Container>

      {/* Doctor Profile Modal */}
      {activeDoctorModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs transition-opacity duration-200">
          <div className="bg-white rounded-2xl max-w-lg w-full p-4 sm:p-6 shadow-2xl border border-[#E9D7C7] space-y-5 max-h-[88vh] overflow-y-auto transform transition-all duration-300 ease-out animate-in fade-in zoom-in-95">
            <div className="flex items-start justify-between pb-3 border-b border-[#E9D7C7]">
              <div className="doctor-header-bio">
                <img
                  src={activeDoctorModal.image}
                  alt={activeDoctorModal.name}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/images/surya-doctor-portrait.png";
                  }}
                  className="doctor-avatar w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-[#C65332]"
                />
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#292D32]">
                    {activeDoctorModal.name}
                  </h3>
                  <p className="text-xs text-[#C65332] font-semibold">
                    {activeDoctorModal.qualifications}
                  </p>
                  <p className="text-[11px] text-[#62666D]">
                    {activeDoctorModal.designation}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setActiveDoctorModal(null)}
                className="p-1 rounded-lg text-[#62666D] hover:bg-[#F8E6DC] cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-left">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#292D32] mb-1">
                  About Consultant
                </h4>
                <p className="text-xs text-[#62666D] leading-relaxed">
                  {activeDoctorModal.bio}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#292D32] mb-1.5">
                  Clinical Focus & Specialties
                </h4>
                <ul className="space-y-1 text-xs text-[#62666D]">
                  {activeDoctorModal.specialties.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C65332]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3 rounded-lg bg-[#FFF9F3] border border-[#E9D7C7] text-xs">
                <span className="font-bold text-[#292D32] block mb-0.5">
                  OPD Consultation Schedule:
                </span>
                <span className="text-[#62666D]">{activeDoctorModal.opdTimings}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                to={`/appointment?doctor=${encodeURIComponent(activeDoctorModal.name)}&dept=${encodeURIComponent(activeDoctorModal.department)}`}
                onClick={() => setActiveDoctorModal(null)}
                className="w-full sm:flex-1"
              >
                <Button
                  variant="primary"
                  size="md"
                  icon={Calendar}
                  fullWidth
                  className="bg-[#C65332] hover:bg-[#A84328] text-white"
                >
                  Book with {activeDoctorModal.name}
                </Button>
              </Link>
              <Button
                variant="secondary"
                size="md"
                onClick={() => setActiveDoctorModal(null)}
                className="w-full sm:w-auto"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import {
  Calendar,
  ArrowRight,
  ShieldCheck,
  Clock,
  User,
  X,
  Phone,
  AlertCircle,
} from "lucide-react";
import { HOSPITAL_INFO } from "../../constants/hospitalData";

export function HomeFeaturedDoctors() {
  const [activeDoctorModal, setActiveDoctorModal] = useState(null);

  return (
    <section className="py-16 md:py-20 bg-[#FFF8F2] border-b border-[#F0D9CB]">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="space-y-2 max-w-2xl text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white text-[#B96645] border border-[#F0D9CB]">
              VERIFIED MEDICAL TEAM
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#252B33] tracking-tight">
              Meet Our Specialist Doctors
            </h2>
            <p className="text-sm sm:text-base text-[#59616B] leading-relaxed">
              Consult with experienced medical and surgical consultants committed to evidence-based healthcare in Sai Nagar, Anantapur.
            </p>
          </div>

          <Link to="/doctors" className="shrink-0">
            <Button
              variant="outline"
              size="md"
              icon={ArrowRight}
              iconPosition="right"
              className="text-xs font-bold border-[#D98A62] bg-white hover:bg-[#FCECE2] text-[#252B33]"
            >
              View All Doctors
            </Button>
          </Link>
        </div>

        {/* Doctor Verification Notice Banner */}
        <div className="mb-8 p-3.5 rounded-xl bg-[#FCECE2] border border-[#F0D9CB] flex items-start gap-2.5 text-xs text-[#252B33]">
          <AlertCircle className="w-4 h-4 text-[#C65332] shrink-0 mt-0.5" />
          <span>
            <strong>Medical Leadership & Specialist Roster:</strong> Led by Managing Director & Consultant Physician Dr. D. Surya Prakash (M.D. Internal Medicine), our verified medical team provides comprehensive clinical consultations.
          </span>
        </div>

        {/* Doctors Grid - 4 columns on large screens, comfortable cards on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {HOSPITAL_INFO.doctors.map((doc) => (
            <div
              key={doc.id}
              className={`bg-white rounded-xl sm:rounded-2xl border shadow-2xs hover:shadow-card transition-all duration-200 overflow-hidden flex flex-col justify-between group ${
                doc.isManagingDirector
                  ? "border-[#C65332]/60 ring-1 ring-[#C65332]/20"
                  : "border-[#F0D9CB] hover:border-[#C65332]"
              }`}
            >
              {/* Doctor Photo - Responsive aspect ratio so cards don't dominate entire mobile screens */}
              <div className="relative aspect-[16/11] sm:aspect-[4/5] bg-[#FCECE2] overflow-hidden">
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#252B33]/90 via-[#252B33]/20 to-transparent" />

                {/* Top Badge */}
                <span
                  className={`absolute top-2.5 left-2.5 sm:top-3 sm:left-3 text-[9.5px] sm:text-[10px] font-bold uppercase tracking-wider px-2 sm:px-2.5 py-0.5 sm:py-1 rounded shadow-2xs ${
                    doc.isManagingDirector
                      ? "bg-[#C65332] text-white"
                      : "bg-white/95 text-[#252B33]"
                  }`}
                >
                  {doc.status}
                </span>

                {/* Bottom Overlay Name */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 text-white text-left">
                  <span className="text-[10px] sm:text-[11px] font-bold text-[#F6D8C5] block uppercase tracking-wider">
                    {doc.department}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white mt-0.5 leading-snug">
                    {doc.name}
                  </h3>
                </div>
              </div>

              {/* Doctor Details */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3 sm:space-y-4">
                <div className="space-y-1 text-left">
                  <div className="text-xs font-bold text-[#C65332]">
                    {doc.qualifications}
                  </div>
                  <div className="text-xs font-semibold text-[#252B33]">
                    {doc.designation}
                  </div>
                  <p className="text-xs text-[#59616B] leading-relaxed pt-0.5 line-clamp-2 sm:line-clamp-none">
                    {doc.experience}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#F0D9CB] space-y-2.5">
                  {/* Clean un-truncated schedule */}
                  <div className="flex items-start gap-1.5 text-[11px] text-[#59616B] leading-snug text-left">
                    <Clock className="w-3.5 h-3.5 text-[#B96645] shrink-0 mt-0.5" />
                    <span>{doc.opdTimings}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-0.5">
                    <button
                      type="button"
                      onClick={() => setActiveDoctorModal(doc)}
                      className="w-full py-2 px-2.5 rounded-lg text-xs font-bold border border-[#F0D9CB] bg-white hover:bg-[#FCECE2] text-[#252B33] transition cursor-pointer active:scale-95"
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
                        className="bg-[#C65332] hover:bg-[#A84328] text-white text-xs font-bold py-2 active:scale-95"
                      >
                        Book OPD
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Doctor Profile Modal */}
      {activeDoctorModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-[#F0D9CB] space-y-5 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between pb-3 border-b border-[#F0D9CB]">
              <div className="flex items-center gap-3">
                <img
                  src={activeDoctorModal.image}
                  alt={activeDoctorModal.name}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/images/surya-doctor-portrait.png";
                  }}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#C65332]"
                />
                <div>
                  <h3 className="text-lg font-bold text-[#252B33]">
                    {activeDoctorModal.name}
                  </h3>
                  <p className="text-xs text-[#C65332] font-semibold">
                    {activeDoctorModal.qualifications}
                  </p>
                  <p className="text-[11px] text-[#59616B]">
                    {activeDoctorModal.designation}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setActiveDoctorModal(null)}
                className="p-1 rounded-lg text-[#59616B] hover:bg-[#FCECE2] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-left">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#252B33] mb-1">
                  About Consultant
                </h4>
                <p className="text-xs text-[#59616B] leading-relaxed">
                  {activeDoctorModal.bio}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#252B33] mb-1.5">
                  Clinical Focus & Specialties
                </h4>
                <ul className="space-y-1 text-xs text-[#59616B]">
                  {activeDoctorModal.specialties.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C65332]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3 rounded-lg bg-[#FFF8F2] border border-[#F0D9CB] text-xs">
                <span className="font-bold text-[#252B33] block mb-0.5">
                  OPD Consultation Schedule:
                </span>
                <span className="text-[#59616B]">{activeDoctorModal.opdTimings}</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <Link
                to={`/appointment?doctor=${encodeURIComponent(activeDoctorModal.name)}&dept=${encodeURIComponent(activeDoctorModal.department)}`}
                onClick={() => setActiveDoctorModal(null)}
                className="flex-1"
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

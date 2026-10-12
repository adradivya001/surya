import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import {
  Stethoscope,
  Scissors,
  Eye,
  Activity,
  AlertTriangle,
  Shield,
  Clock,
  HeartPulse,
  ArrowRight,
  ChevronRight,
  X,
  Calendar,
} from "lucide-react";
import { HOSPITAL_INFO } from "../../constants/hospitalData";

const iconMap = {
  Stethoscope,
  Scissors,
  Eye,
  Activity,
  AlertTriangle,
  Shield,
  Clock,
  HeartPulse,
};

export function HomeSpecialitiesGrid() {
  const [selectedSpecialty, setSelectedSpecialty] = useState(null);

  return (
    <section className="py-16 md:py-20 bg-white border-b border-[#F0D9CB]">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="space-y-2 max-w-2xl text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#FCECE2] text-[#B96645] border border-[#F0D9CB]">
              CLINICAL SPECIALITIES
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#252B33] tracking-tight">
              Verified Medical & Surgical Departments
            </h2>
            <p className="text-sm sm:text-base text-[#59616B] leading-relaxed">
              Explore our core clinical capabilities in Sai Nagar, Anantapur, supported by specialist consultants and modern clinical equipment.
            </p>
          </div>

          <Link to="/specialities" className="w-full sm:w-auto shrink-0">
            <Button
              variant="outline"
              size="md"
              icon={ArrowRight}
              iconPosition="right"
              className="text-xs font-bold border-[#D98A62] hover:bg-[#FCECE2] text-[#252B33] w-full sm:w-auto"
            >
              Explore Specialities
            </Button>
          </Link>
        </div>

        {/* Specialities Grid - Exactly 4 cards on home page */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOSPITAL_INFO.specialities.slice(0, 4).map((spec) => {
            const Icon = iconMap[spec.iconName] || Stethoscope;
            return (
              <div
                key={spec.id}
                className="group rounded-xl border border-[#F0D9CB] bg-white overflow-hidden shadow-2xs hover:shadow-card hover:border-[#C65332] transition-all duration-200 flex flex-col justify-between"
              >
                {/* Image & Category Tag */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#FCECE2]">
                  <img
                    src={spec.image}
                    alt={spec.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#252B33]/70 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white/95 text-[#252B33] shadow-2xs">
                    {spec.category}
                  </span>
                </div>

                {/* Body Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-[#F6D8C5] text-[#C65332] flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-bold text-[#252B33] group-hover:text-[#C65332] transition">
                        {spec.name}
                      </h3>
                    </div>

                    <p className="text-xs text-[#59616B] leading-relaxed line-clamp-3">
                      {spec.shortDesc}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 mt-4 border-t border-[#F0D9CB] flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setSelectedSpecialty(spec)}
                      className="text-xs font-bold text-[#C65332] hover:text-[#A84328] transition flex items-center gap-1 cursor-pointer"
                    >
                      <span>View Details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <Link
                      to={`/appointment?dept=${encodeURIComponent(spec.name)}`}
                      className="text-[11px] font-semibold text-[#59616B] hover:text-[#C65332] transition"
                    >
                      Book OPD
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>

      {/* Speciality Quick Details Modal */}
      {selectedSpecialty && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-4 sm:p-6 shadow-2xl border border-[#F0D9CB] space-y-4 max-h-[88vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-[#F0D9CB]">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-[#F6D8C5] text-[#C65332] flex items-center justify-center shrink-0">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#252B33]">
                    {selectedSpecialty.name}
                  </h3>
                  <span className="text-xs text-[#B96645] font-semibold">
                    {selectedSpecialty.category}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedSpecialty(null)}
                className="p-1 rounded-lg text-[#59616B] hover:bg-[#FCECE2] cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs sm:text-sm text-[#59616B] leading-relaxed">
              {selectedSpecialty.overview}
            </p>

            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#252B33]">
                Key Care Offerings
              </h4>
              <ul className="space-y-1.5 text-xs text-[#59616B]">
                {selectedSpecialty.keyTreatments.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C65332] mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {selectedSpecialty.relatedDoctor && (
              <div className="p-3 rounded-lg bg-[#FFF8F2] border border-[#F0D9CB] text-xs flex items-center justify-between">
                <div>
                  <span className="text-[#59616B] block text-[10px] uppercase font-bold">
                    Associated Specialist
                  </span>
                  <span className="font-bold text-[#252B33]">
                    {selectedSpecialty.relatedDoctor}
                  </span>
                </div>
                <Link
                  to="/doctors"
                  onClick={() => setSelectedSpecialty(null)}
                  className="text-xs text-[#C65332] font-bold hover:underline"
                >
                  Doctor Profile →
                </Link>
              </div>
            )}

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                to={`/appointment?dept=${encodeURIComponent(selectedSpecialty.name)}`}
                onClick={() => setSelectedSpecialty(null)}
                className="w-full sm:flex-1"
              >
                <Button
                  variant="primary"
                  size="md"
                  icon={Calendar}
                  fullWidth
                  className="bg-[#C65332] hover:bg-[#A84328] text-white"
                >
                  Book Consultation
                </Button>
              </Link>
              <Button
                variant="secondary"
                size="md"
                onClick={() => setSelectedSpecialty(null)}
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

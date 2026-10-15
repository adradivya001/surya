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
import { AnimateIn } from "../ui/AnimateIn";

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
    <section className="py-18 md:py-24 bg-white border-b border-[#DED7D7]">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <AnimateIn animation="slide-left" className="space-y-3 max-w-2xl text-left">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-widest bg-[#E8D8D9] text-[#641D2D] border border-[#DED7D7]">
              OUR MEDICAL SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#29252A] tracking-tight">
              Medical & Surgical Care
            </h2>
            <p className="text-base text-[#6F686B] leading-relaxed font-normal">
              From everyday doctor visits and fever treatments to bone fracture recovery and gentle keyhole surgeries, here is how our specialists help you heal.
            </p>
          </AnimateIn>

          <AnimateIn animation="slide-right" delay={150}>
            <Link to="/specialities" className="w-full sm:w-auto shrink-0">
              <Button
                variant="outline"
                size="md"
                icon={ArrowRight}
                iconPosition="right"
                className="text-xs font-bold border-[#DED7D7] hover:bg-[#FCFAF7] text-[#29252A] w-full sm:w-auto"
              >
                View All Medical Services
              </Button>
            </Link>
          </AnimateIn>
        </div>

        {/* Specialities Grid - Exactly 4 cards on home page with staggered pop-up animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOSPITAL_INFO.specialities.slice(0, 4).map((spec, idx) => {
            const Icon = iconMap[spec.iconName] || Stethoscope;
            return (
              <AnimateIn
                key={spec.id}
                animation="fade-up"
                delay={idx * 120}
                className="group rounded-2xl border border-[#DED7D7] bg-[#FCFAF7] overflow-hidden shadow-2xs hover:shadow-card hover:border-[#641D2D] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image & Category Tag */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#28171D]">
                  <img
                    src={spec.image}
                    alt={spec.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#28171D]/80 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/95 text-[#29252A] shadow-2xs">
                    {spec.category}
                  </span>
                </div>

                {/* Body Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2 text-left">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#E8D8D9] text-[#641D2D] flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-bold text-[#29252A] group-hover:text-[#641D2D] transition">
                        {spec.name}
                      </h3>
                    </div>

                    <p className="text-xs text-[#6F686B] leading-relaxed line-clamp-3 font-normal">
                      {spec.shortDesc}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="pt-3 border-t border-[#DED7D7] flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setSelectedSpecialty(spec)}
                      className="text-xs font-bold text-[#641D2D] hover:text-[#4E1421] transition flex items-center gap-1 cursor-pointer"
                    >
                      <span>View Details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <Link
                      to={`/appointment?dept=${encodeURIComponent(spec.name)}`}
                      className="text-xs font-bold text-[#6F686B] hover:text-[#641D2D] transition"
                    >
                      Book OPD
                    </Link>
                  </div>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </Container>

      {/* Speciality Quick Details Modal */}
      {selectedSpecialty && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs transition-opacity duration-200">
          <div className="bg-white rounded-2xl max-w-lg w-full p-4 sm:p-6 shadow-2xl border border-[#E9D7C7] space-y-4 max-h-[88vh] overflow-y-auto transform transition-all duration-300 ease-out animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between pb-3 border-b border-[#E9D7C7]">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-[#F8E6DC] text-[#C65332] flex items-center justify-center shrink-0">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#292D32]">
                    {selectedSpecialty.name}
                  </h3>
                  <span className="text-xs text-[#C65332] font-semibold">
                    {selectedSpecialty.category}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedSpecialty(null)}
                className="p-1 rounded-lg text-[#62666D] hover:bg-[#F8E6DC] cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs sm:text-sm text-[#62666D] leading-relaxed">
              {selectedSpecialty.overview}
            </p>

            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#292D32]">
                Key Care Offerings
              </h4>
              <ul className="space-y-1.5 text-xs text-[#62666D]">
                {selectedSpecialty.keyTreatments.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C65332] mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {selectedSpecialty.relatedDoctor && (
              <div className="p-3 rounded-lg bg-[#FFF9F3] border border-[#E9D7C7] text-xs flex items-center justify-between">
                <div>
                  <span className="text-[#62666D] block text-[10px] uppercase font-bold">
                    Associated Specialist
                  </span>
                  <span className="font-bold text-[#292D32]">
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

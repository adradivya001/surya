import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "../components/ui/Container";
import { PageHero } from "../components/ui/PageHero";
import { Button } from "../components/ui/Button";
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
  Phone,
  CheckCircle2,
  Filter,
} from "lucide-react";
import { HOSPITAL_INFO } from "../constants/hospitalData";

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

export function SpecialitiesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeSpecialty, setActiveSpecialty] = useState(null);

  useEffect(() => {
    document.title = "Clinical Specialities | Surya Hospital, Sai Nagar, Anantapur";
  }, []);

  const categories = [
    "All",
    "Inpatient & Outpatient",
    "Surgical Suites",
    "Minimally Invasive",
    "Musculoskeletal",
    "24/7 Casualty",
    "Specialized Clinic",
    "Planned Procedures",
    "Wellness & Recovery",
  ];

  const filteredSpecialities = HOSPITAL_INFO.specialities.filter((spec) => {
    if (selectedCategory === "All") return true;
    return spec.category === selectedCategory;
  });

  return (
    <div className="w-full">
      {/* Page Hero */}
      <PageHero
        eyebrow="CLINICAL DEPARTMENTS"
        title="Medical & Surgical Specialities"
        description="Comprehensive healthcare disciplines addressing acute conditions, elective and emergency surgeries, diagnostic imaging, and post-operative recovery in Anantapur."
        breadcrumbs={[{ label: "Specialities" }]}
        badge="Verified Hospital Departments"
      >
        <Link to="/appointment">
          <Button variant="primary" size="sm" icon={Calendar} className="bg-[#C65332] hover:bg-[#A84328] text-white">
            Schedule a Consultation
          </Button>
        </Link>
        <Link to="/doctors">
          <Button variant="secondary" size="sm" className="bg-white border-[#F0D9CB] text-[#252B33] hover:bg-[#FCECE2]">
            View Specialist Doctors
          </Button>
        </Link>
      </PageHero>

      <section className="py-12 md:py-16 bg-white border-b border-[#F0D9CB]">
        <Container>
          {/* Category Filter Pills */}
          <div className="mb-10 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs">
            <span className="text-[11px] font-bold uppercase text-[#808A96] shrink-0 mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Department:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg font-semibold transition whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#C65332] text-white shadow-2xs"
                    : "bg-[#FFF8F2] text-[#59616B] border border-[#F0D9CB] hover:bg-[#FCECE2]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Specialities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSpecialities.map((spec) => {
              const Icon = iconMap[spec.iconName] || Stethoscope;
              return (
                <div
                  key={spec.id}
                  className="rounded-2xl border border-[#F0D9CB] bg-white shadow-2xs hover:shadow-card hover:border-[#C65332] transition flex flex-col justify-between overflow-hidden group"
                >
                  {/* Image banner */}
                  <div className="relative aspect-[16/10] bg-[#FCECE2] overflow-hidden">
                    <img
                      src={spec.image}
                      alt={spec.name}
                      className="w-full h-full object-cover group-hover:scale-103 transition duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#252B33]/75 via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-white/95 text-[#252B33] shadow-2xs">
                      {spec.category}
                    </span>
                    <div className="absolute bottom-3 left-3 right-3 text-white flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-[#C65332] text-white flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-lg font-bold text-white leading-snug">
                        {spec.name}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4 text-left">
                    <p className="text-xs sm:text-sm text-[#59616B] leading-relaxed">
                      {spec.shortDesc}
                    </p>

                    {/* Associated Doctor */}
                    {spec.relatedDoctor && (
                      <div className="p-2.5 rounded-lg bg-[#FFF8F2] border border-[#F0D9CB] text-xs flex items-center justify-between">
                        <span className="text-[11px] text-[#808A96] font-medium">
                          Consultant:
                        </span>
                        <span className="font-bold text-[#252B33]">
                          {spec.relatedDoctor}
                        </span>
                      </div>
                    )}

                    {/* Offerings sample */}
                    <div className="space-y-1.5 pt-1">
                      <span className="text-[10px] uppercase font-bold text-[#808A96] block">
                        Care Offerings:
                      </span>
                      <ul className="space-y-1 text-xs text-[#59616B]">
                        {spec.keyTreatments.slice(0, 3).map((item, idx) => (
                          <li key={idx} className="flex items-center gap-1.5 truncate">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#C65332] shrink-0" />
                            <span className="truncate">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Actions */}
                    <div className="pt-3 border-t border-[#F0D9CB] flex items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => setActiveSpecialty(spec)}
                        className="text-xs font-bold text-[#C65332] hover:text-[#A84328] transition flex items-center gap-1 cursor-pointer py-1.5"
                      >
                        <span>View Details</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>

                      <Link
                        to={`/appointment?dept=${encodeURIComponent(spec.name)}`}
                      >
                        <Button
                          variant="primary"
                          size="sm"
                          className="bg-[#C65332] hover:bg-[#A84328] text-white text-xs font-bold px-3 py-1.5"
                        >
                          Book OPD
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Speciality Deep-Dive Detail Modal */}
      {activeSpecialty && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-xl w-full p-4 sm:p-8 shadow-2xl border border-[#F0D9CB] space-y-5 max-h-[88vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b border-[#F0D9CB]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#F6D8C5] text-[#C65332] flex items-center justify-center shrink-0">
                  <Stethoscope className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg sm:text-xl font-bold text-[#252B33]">
                    {activeSpecialty.name}
                  </h3>
                  <span className="text-xs text-[#B96645] font-bold uppercase tracking-wider">
                    {activeSpecialty.category}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setActiveSpecialty(null)}
                className="p-1 rounded-lg text-[#59616B] hover:bg-[#FCECE2] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="space-y-4 text-left">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#252B33] mb-1">
                  Department Overview
                </h4>
                <p className="text-xs sm:text-sm text-[#59616B] leading-relaxed">
                  {activeSpecialty.overview}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#252B33] mb-2">
                  Clinical Care Scope & Procedures
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {activeSpecialty.keyTreatments.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-lg bg-[#FFF8F2] border border-[#F0D9CB] flex items-start gap-2 text-[#252B33] font-medium"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C65332] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {activeSpecialty.relatedDoctor && (
                <div className="p-3.5 rounded-xl bg-[#FFF8F2] border border-[#F0D9CB] flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#808A96] block">
                      Associated Specialist Consultant
                    </span>
                    <span className="font-bold text-[#252B33] text-sm">
                      {activeSpecialty.relatedDoctor}
                    </span>
                  </div>
                  <Link
                    to="/doctors"
                    onClick={() => setActiveSpecialty(null)}
                    className="text-xs font-bold text-[#C65332] hover:underline"
                  >
                    View Roster →
                  </Link>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <Link
                to={`/appointment?dept=${encodeURIComponent(activeSpecialty.name)}`}
                onClick={() => setActiveSpecialty(null)}
                className="w-full sm:flex-1"
              >
                <Button
                  variant="primary"
                  size="md"
                  icon={Calendar}
                  fullWidth
                  className="bg-[#C65332] hover:bg-[#A84328] text-white font-bold"
                >
                  Book OPD Appointment
                </Button>
              </Link>
              <a
                href={`tel:${HOSPITAL_INFO.phoneRaw}`}
                className="w-full sm:w-auto"
              >
                <Button variant="secondary" size="md" icon={Phone} className="w-full text-xs bg-white border-[#F0D9CB] text-[#252B33] hover:bg-[#FCECE2]">
                  Call Hospital
                </Button>
              </a>
              <Button
                variant="outline"
                size="md"
                onClick={() => setActiveSpecialty(null)}
                className="w-full sm:w-auto text-xs border-[#F0D9CB]"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default SpecialitiesPage;

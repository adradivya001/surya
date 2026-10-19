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
  HeartPulse,
  ChevronRight,
  X,
  Calendar,
  Phone,
  CheckCircle2,
  Filter,
  UserCheck,
  HelpCircle,
  Stethoscope as StethoscopeIcon,
} from "lucide-react";
import { HOSPITAL_INFO } from "../constants/hospitalData";

const iconMap = {
  HeartPulse,
  Activity,
  Shield,
  Stethoscope,
  AlertTriangle,
  Eye,
  Scissors,
};

export function SpecialitiesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeSpecialty, setActiveSpecialty] = useState(null);

  useEffect(() => {
    document.title = "Our Expert Specialties | Surya Hospital, Sai Nagar, Anantapur";
  }, []);

  // Categories derived directly from HOSPITAL_INFO.specialities
  const categories = [
    { id: "All", label: "All Specialities" },
    ...Array.from(new Set(HOSPITAL_INFO.specialities.map((s) => s.category))).map(
      (cat) => ({ id: cat, label: cat })
    ),
  ];

  const filteredSpecialities = HOSPITAL_INFO.specialities.filter((spec) => {
    if (selectedCategory === "All") return true;
    return spec.category === selectedCategory;
  });

  return (
    <div className="w-full bg-[#FAFCFE]">
      {/* Page Hero matching requested heading and description */}
      <PageHero
        eyebrow="MEDICAL & SURGICAL EXCELLENCE"
        title="OUR EXPERT SPECIALTIES"
        description="Explore our medical specialties and discover the care available to help you understand your health concerns and next steps."
        breadcrumbs={[{ label: "Specialties" }]}
        badge="Hospital Specialties"
      >
        <Link to="/appointment">
          <Button
            variant="primary"
            size="sm"
            icon={Calendar}
            className="bg-[#E94B1C] hover:bg-[#A83218] text-white font-bold shadow-sm"
          >
            Book an Appointment
          </Button>
        </Link>
        <Link to="/doctors">
          <Button
            variant="secondary"
            size="sm"
            className="bg-white border-[#E9D8CE] text-[#C63D1B] hover:bg-[#FFF0E6] font-semibold"
          >
            Meet Our Doctors
          </Button>
        </Link>
      </PageHero>

      <section className="py-14 sm:py-20 bg-white border-b border-[#F0E2D9]">
        <Container>
          {/* Category Filter Pills */}
          <div className="mb-10 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs">
            <span className="text-[11px] font-bold uppercase text-[#756860] shrink-0 mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-[#E94B1C]" /> Department:
            </span>
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full font-bold transition whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-[#E94B1C] text-white shadow-xs"
                    : "bg-[#FFF0E6]/60 text-[#262626] border border-[#E9D8CE] hover:bg-[#FFF0E6]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Empty state fallback if ever empty */}
          {filteredSpecialities.length === 0 && (
            <div className="p-8 text-center bg-[#FFF0E6]/50 border border-[#E9D8CE] rounded-2xl max-w-md mx-auto my-6 space-y-3">
              <p className="text-sm text-[#262626] font-semibold">No services found in this department.</p>
              <button
                type="button"
                onClick={() => setSelectedCategory("All")}
                className="text-xs font-bold text-[#C63D1B] hover:underline cursor-pointer"
              >
                View All Specialities
              </button>
            </div>
          )}

          {/* 12 Image-Free Specialty Cards Grid: 3 cols Desktop, 2 cols Tablet, 1 col Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
            {filteredSpecialities.map((spec) => {
              const Icon = iconMap[spec.iconName] || Stethoscope;
              return (
                <div
                  key={spec.id}
                  className="rounded-[18px] border border-[#E9D8CE] bg-white shadow-xs hover:shadow-lg hover:border-[#E94B1C] transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  {/* Clean Text-Focused Header */}
                  <div className="p-6 pb-4 bg-gradient-to-br from-white via-[#FFF0E6]/30 to-[#FFF0E6]/60 border-b border-[#F0E2D9]">
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <div className="w-11 h-11 rounded-xl bg-[#E94B1C] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white text-[#C63D1B] border border-[#E9D8CE] shadow-2xs">
                        {spec.category}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#C63D1B] leading-snug group-hover:text-[#A83218] transition-colors">
                      {spec.name}
                    </h3>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4 text-left">
                    <p className="text-xs sm:text-sm text-[#4A403B] leading-relaxed font-normal min-h-[56px]">
                      {spec.shortDescription}
                    </p>

                    {/* Compact Consultant / Specialist List */}
                    {spec.consultants && spec.consultants.length > 0 && (
                      <div className="py-2.5 px-3.5 rounded-xl bg-[#FFF0E6]/40 border border-[#E9D8CE] text-xs">
                        <span className="text-[10px] uppercase font-bold tracking-wider text-[#C63D1B] block mb-1">
                          Consultant{spec.consultants.length > 1 ? "s" : ""}:
                        </span>
                        <div className="space-y-0.5">
                          {spec.consultants.map((c, i) => (
                            <p key={i} className="font-bold text-[#262626] text-xs leading-tight">
                              {c.name}
                              {c.qualifications && (
                                <span className="font-normal text-[#756860] text-[11px] ml-1.5">
                                  ({c.qualifications})
                                </span>
                              )}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Actions: View Details + Book Visit */}
                    <div className="pt-4 border-t border-[#F0E2D9] flex items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => setActiveSpecialty(spec)}
                        className="text-xs font-bold text-[#C63D1B] hover:text-[#A83218] transition inline-flex items-center gap-1 cursor-pointer py-1.5 group-hover:translate-x-0.5"
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
                          className="bg-[#E94B1C] hover:bg-[#A83218] text-white text-xs font-bold px-4 py-2 rounded-full shadow-xs"
                        >
                          Book Visit
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

      {/* Speciality Deep-Dive Detail View Modal */}
      {activeSpecialty && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs transition-opacity duration-200"
          onClick={() => setActiveSpecialty(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full p-5 sm:p-8 shadow-2xl border border-[#E9D8CE] space-y-6 max-h-[90vh] overflow-y-auto transform transition-all duration-300 ease-out animate-in fade-in zoom-in-95 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-[#F0E2D9]">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-[#E94B1C] text-white flex items-center justify-center shrink-0 shadow-sm">
                  {(() => {
                    const ModalIcon = iconMap[activeSpecialty.iconName] || Stethoscope;
                    return <ModalIcon className="w-6 h-6 text-white" />;
                  })()}
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#C63D1B] tracking-tight">
                    {activeSpecialty.name}
                  </h3>
                  <span className="text-[11px] text-[#FF8A3D] font-bold uppercase tracking-wider">
                    {activeSpecialty.category}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setActiveSpecialty(null)}
                className="p-1.5 rounded-lg text-[#756860] hover:text-[#C63D1B] hover:bg-[#FFF0E6] cursor-pointer transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Detailed Overview */}
            <div className="space-y-5 text-left">
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#C63D1B] mb-2 flex items-center gap-1.5">
                  <StethoscopeIcon className="w-4 h-4 text-[#FF8A3D]" />
                  <span>Overview</span>
                </h4>
                <p className="text-xs sm:text-sm text-[#4A403B] leading-relaxed bg-[#FFF9F3] p-4 rounded-xl border border-[#E9D8CE]">
                  {activeSpecialty.overview}
                </p>
              </div>

              {/* Conditions Evaluated */}
              {activeSpecialty.conditions && activeSpecialty.conditions.length > 0 && (
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#C63D1B] mb-2.5 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FF8A3D]" />
                    <span>Conditions Evaluated</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {activeSpecialty.conditions.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-lg bg-[#FFF0E6]/50 border border-[#E9D8CE] flex items-start gap-2 text-[#262626] font-medium"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E94B1C] shrink-0 mt-1.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Services and Care */}
              {activeSpecialty.services && activeSpecialty.services.length > 0 && (
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#C63D1B] mb-2.5 flex items-center gap-1.5">
                    <Activity className="w-4 h-4 text-[#FF8A3D]" />
                    <span>Services and Care</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-[#4A403B]">
                    {activeSpecialty.services.map((svc, sIdx) => (
                      <li
                        key={sIdx}
                        className="p-2.5 rounded-lg bg-white border border-[#E9D8CE] flex items-start gap-2 shadow-2xs"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#E94B1C] shrink-0 mt-0.5" />
                        <span className="leading-snug font-medium">{svc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* When to Consult */}
              {activeSpecialty.whenToConsult && (
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#C63D1B] mb-2 flex items-center gap-1.5">
                    <HelpCircle className="w-4 h-4 text-[#FF8A3D]" />
                    <span>When to Consult</span>
                  </h4>
                  <div className="p-3.5 rounded-xl bg-[#FFF8EE] border border-[#FAD7A0] text-xs text-[#7A4B00] leading-relaxed font-medium">
                    {activeSpecialty.whenToConsult}
                  </div>
                </div>
              )}

              {/* Consultants & Qualifications */}
              {activeSpecialty.consultants && activeSpecialty.consultants.length > 0 && (
                <div className="p-4 rounded-xl bg-[#FFF0E6]/60 border border-[#E9D8CE] text-xs">
                  <div className="flex items-center gap-2 mb-2">
                    <UserCheck className="w-4 h-4 text-[#E94B1C]" />
                    <span className="text-[11px] uppercase font-bold tracking-wider text-[#C63D1B]">
                      Consultant Specialist{activeSpecialty.consultants.length > 1 ? "s" : ""}
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    {activeSpecialty.consultants.map((c, idx) => (
                      <div key={idx} className="flex flex-wrap items-baseline gap-1.5">
                        <span className="font-bold text-[#C63D1B] text-sm">{c.name}</span>
                        {c.qualifications && (
                          <span className="text-[#756860] font-medium text-xs">
                            — {c.qualifications}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Actions: Book Visit + Call + Close */}
            <div className="pt-3 border-t border-[#F0E2D9] flex flex-col sm:flex-row items-center gap-3">
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
                  className="bg-[#E94B1C] hover:bg-[#A83218] text-white font-bold rounded-full shadow-sm py-2.5"
                >
                  Book an Appointment
                </Button>
              </Link>
              <a
                href={`tel:${HOSPITAL_INFO.phoneRaw}`}
                className="w-full sm:w-auto"
              >
                <Button
                  variant="secondary"
                  size="md"
                  icon={Phone}
                  className="w-full text-xs font-bold bg-[#FFF0E6] border border-[#E9D8CE] text-[#C63D1B] hover:bg-[#FFE4D3] rounded-full py-2.5"
                >
                  Call Reception
                </Button>
              </a>
              <Button
                variant="outline"
                size="md"
                onClick={() => setActiveSpecialty(null)}
                className="w-full sm:w-auto text-xs border-[#E9D8CE] text-[#756860] rounded-full py-2.5 cursor-pointer"
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

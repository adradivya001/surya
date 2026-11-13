import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "../components/ui/Container";
import { PageHero } from "../components/ui/PageHero";
import { Button } from "../components/ui/Button";
import {
  ArrowRight,
  Calendar,
  Phone,
  Stethoscope,
  Scissors,
  CheckCircle2,
  Filter,
} from "lucide-react";
import {
  APPROVED_SPECIALITIES,
  MEDICAL_SPECIALITIES,
  SURGICAL_SPECIALITIES,
} from "../constants/specialitiesData";
import { HOSPITAL_INFO } from "../constants/hospitalData";
import { useAppointmentModal } from "../context/AppointmentModalContext";

export function SpecialitiesPage() {
  const { openModal } = useAppointmentModal();
  const [selectedGroup, setSelectedGroup] = useState("All");

  useEffect(() => {
    document.title = "Our Clinical Departments | Surya Hospital, Sai Nagar, Anantapur";
  }, []);

  const displayedList =
    selectedGroup === "Medical"
      ? MEDICAL_SPECIALITIES
      : selectedGroup === "Surgical"
      ? SURGICAL_SPECIALITIES
      : APPROVED_SPECIALITIES;

  return (
    <div className="w-full bg-[#FAFCFE]">
      {/* Page Hero */}
      <PageHero
        eyebrow="MEDICAL & SURGICAL EXCELLENCE"
        title="Our Clinical Departments"
        description="Explore all 12 verified medical and surgical specialties at Surya Hospital. Comprehensive inpatient and outpatient healthcare delivered with compassion in Sai Nagar, Anantapur."
        breadcrumbs={[{ label: "Departments" }]}
        badge="12 Verified Specialities"
      >
        <Button
          variant="primary"
          size="sm"
          icon={Calendar}
          onClick={() => openModal()}
          className="bg-[#E94B1C] hover:bg-[#A83218] text-white font-bold shadow-sm"
        >
          Book an Appointment
        </Button>
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

      <section className="py-12 sm:py-16 bg-[#FFF9F3] border-b border-[#F0E2D9]">
        <Container>
          {/* Department Filter Tabs */}
          <div className="mb-8 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase text-[#756860] flex items-center gap-1 mr-1">
                <Filter className="w-3.5 h-3.5 text-[#E94B1C]" /> Filter:
              </span>
              {[
                { id: "All", label: "All Specialities (12)" },
                { id: "Medical", label: "Medical Department (8)" },
                { id: "Surgical", label: "Surgical Department (4)" },
              ].map((group) => (
                <button
                  key={group.id}
                  type="button"
                  onClick={() => setSelectedGroup(group.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    selectedGroup === group.id
                      ? "bg-[#E94B1C] text-white shadow-xs"
                      : "bg-white text-[#4A5568] border border-[#E9D8CE] hover:bg-[#FFF0E6] hover:text-[#E94B1C]"
                  }`}
                >
                  {group.label}
                </button>
              ))}
            </div>

            <div className="text-xs text-[#756860] font-medium">
              Showing <strong>{displayedList.length}</strong> verified departments
            </div>
          </div>

          {/* Specialities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {displayedList.map((spec) => {
              const topConditions = (spec.conditions || [])
                .slice(0, 3)
                .map((item) => item.split(" and ")[0].split(",")[0].split("(")[0].trim());

              return (
                <div
                  key={spec.slug}
                  className="bg-white rounded-3xl border border-[#EFE5DC] overflow-hidden shadow-[0_4px_16px_rgba(40,20,10,0.04)] hover:shadow-[0_12px_32px_rgba(233,75,28,0.15)] hover:border-[#E94B1C]/50 transition-all duration-300 flex flex-col group"
                >
                  {/* Top Image */}
                  <div className="relative h-44 sm:h-48 w-full bg-[#FFF5ED] overflow-hidden">
                    <img
                      src={spec.heroImage}
                      alt={spec.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-xs text-[#C63D1B] border border-[#E9D8CE]">
                        {spec.departmentType}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-4 right-4">
                      <h3 className="font-serif text-xl font-bold text-white drop-shadow-sm">
                        {spec.name}
                      </h3>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-[13px] text-[#5A687A] leading-relaxed line-clamp-2 mb-3.5">
                        {spec.shortDescription}
                      </p>

                      <div className="mb-4">
                        <span className="text-[10px] uppercase font-bold tracking-wider text-[#998A82] block mb-1.5">
                          Key Care Areas:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {topConditions.map((cond, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-0.5 rounded-md bg-[#FFF5EE] border border-[#F6DFD2] text-[#8C3A20] text-[11px] font-medium"
                            >
                              {cond}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Actions */}
                    <div className="pt-3 border-t border-[#F5EDE6] flex items-center justify-between gap-2">
                      <Link
                        to={`/specialities/${spec.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#14233C] group-hover:text-[#E94B1C] transition-colors"
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>

                      <button
                        type="button"
                        onClick={() => openModal(spec.name)}
                        className="px-3.5 py-1.5 rounded-full text-xs font-bold text-[#E94B1C] bg-[#FFF0E6] hover:bg-[#E94B1C] hover:text-white transition-all cursor-pointer border border-[#FADCCB]"
                      >
                        Book OPD
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Helpline Banner */}
          <div className="mt-12 p-6 rounded-2xl bg-[#FFF0E6] border border-[#FADCCB] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-serif text-lg font-bold text-[#14233C]">
                Need assistance with appointment booking or department guidance?
              </h4>
              <p className="text-xs sm:text-sm text-[#756860]">
                Our hospital front desk coordinators are available 24/7 in Sai Nagar, Anantapur.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href={`tel:${HOSPITAL_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#E94B1C] hover:bg-[#A83218] transition-all shadow-xs"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {HOSPITAL_INFO.phone}</span>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default SpecialitiesPage;

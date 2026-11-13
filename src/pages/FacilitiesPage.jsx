import React, { useEffect, useState } from "react";
import { Container } from "../components/ui/Container";
import { PageHero } from "../components/ui/PageHero";
import { Button } from "../components/ui/Button";
import {
  ShieldCheck,
  Video,
  Sparkles,
  BedDouble,
  Scissors,
  FlaskConical,
  Phone,
  Calendar,
  ArrowRight,
  CheckCircle2,
  Activity,
  HeartPulse,
} from "lucide-react";
import { HOSPITAL_INFO } from "../constants/hospitalData";
import { useAppointmentModal } from "../context/AppointmentModalContext";

export function FacilitiesPage() {
  const { openModal } = useAppointmentModal();

  useEffect(() => {
    document.title = "Advanced Care & Facilities | Surya Hospital, Sai Nagar, Anantapur";
    window.scrollTo(0, 0);
  }, []);

  const facilityPillars = [
    {
      id: "ot",
      title: "Modular Operation Theatre Complex",
      category: "Surgical Infrastructure",
      badge: "Sterile Airflow & Laminar Flow",
      image: "/facilities/20261104_124719.jpg",
      description:
        "State-of-the-art modular surgical operating suites engineered with HEPA filtration, laminar airflow, and automated temperature controls for zero-infection surgical safety.",
      features: [
        "Advanced surgical anesthesia workstations",
        "High-definition laparoscopic imaging towers",
        "Multi-parameter vital signs telemetry",
        "Dedicated post-operative recovery bays",
      ],
    },
    {
      id: "icu",
      title: "Critical Care & Resuscitation Unit (ICU)",
      category: "24/7 Intensive Care",
      badge: "24/7 Doctor & Telemetry Monitoring",
      image: "/facilities/20261104_125515.jpg",
      description:
        "Round-the-clock intensive medical observation staffed with certified intensivists, multipara telemetry, arterial blood gas analyzers, and immediate emergency response.",
      features: [
        "Advanced ventilators & continuous O₂ lines",
        "Central telemetry station with real-time vitals",
        "Immediate cardiac defibrillator standby",
        "Dedicated critical care nursing at 1:1 ratio",
      ],
    },
    {
      id: "inpatient",
      title: "Inpatient Recovery & Deluxe Patient Suites",
      category: "Patient Comfort",
      badge: "Private AC Suites & General Wards",
      image: "/facilities/20261104_123927.jpg",
      description:
        "Comfortable private recovery rooms with split air-conditioning, motorized hospital beds, attendant companion couches, and quiet surroundings for peaceful recovery.",
      features: [
        "Motorized multi-position hospital beds",
        "Spacious companion seating for family attendants",
        "Nurse call communication system at each bed",
        "Clean, hygienic attached sanitised bathrooms",
      ],
    },
    {
      id: "diagnostics",
      title: "Advanced Diagnostic Lab & Clinical Imaging",
      category: "Diagnostics & Screening",
      badge: "Accurate & Rapid Reports",
      image: "/facilities/20261104_130828.jpg",
      description:
        "Full-spectrum in-house diagnostic pathology, biochemistry testing, resting ECG, 2D Echocardiography, and ultrasound imaging for fast, accurate treatment planning.",
      features: [
        "Fully automated biochemistry & hematology analyzers",
        "2D Echocardiography & resting ECG diagnostics",
        "Rapid sample turnaround for OPD & emergency",
        "Computerized diagnostic reports",
      ],
    },
    {
      id: "pharmacy",
      title: "24/7 In-House Pharmacy & Emergency Casualty",
      category: "24/7 Services",
      badge: "Round-the-Clock Support",
      image: "/facilities/reception-desk.jpg",
      description:
        "Direct round-the-clock availability of critical surgical medicines, cardiac drugs, routine prescriptions, and instant casualty stabilization in Sai Nagar, Anantapur.",
      features: [
        "Genuine medications stored under strict climate control",
        "Immediate trauma & fracture triage desk",
        "Continuous supply of essential IV fluids & antibiotics",
        "Hospital front desk token & admission assistance",
      ],
    },
  ];

  return (
    <div className="w-full bg-[#FAFCFE]">
      {/* Page Hero */}
      <PageHero
        eyebrow="HOSPITAL INFRASTRUCTURE"
        title="Advanced Care & Facilities"
        description="Surya Hospital is equipped with modern modular operating theaters, 24/7 intensive care, private inpatient suites, and advanced diagnostics to ensure patient safety and clinical excellence."
        breadcrumbs={[{ label: "Facilities" }]}
        badge="Modern Clinical Infrastructure"
      >
        <Button
          variant="primary"
          size="sm"
          icon={Calendar}
          onClick={() => openModal()}
          className="bg-[#E94B1C] hover:bg-[#A83218] text-white font-bold shadow-sm"
        >
          Book Consultation
        </Button>
        <a href={`tel:${HOSPITAL_INFO.phoneRaw}`}>
          <Button
            variant="secondary"
            size="sm"
            icon={Phone}
            className="bg-white border-[#E9D8CE] text-[#C63D1B] hover:bg-[#FFF0E6] font-semibold"
          >
            Emergency: {HOSPITAL_INFO.phone}
          </Button>
        </a>
      </PageHero>

      {/* Facilities Showcase */}
      <section className="py-12 sm:py-16 bg-[#FFF9F3] border-b border-[#F0E2D9]">
        <Container>
          <div className="space-y-12">
            {facilityPillars.map((fac, idx) => (
              <div
                key={fac.id}
                className="bg-white rounded-3xl border border-[#E9D8CE] shadow-sm overflow-hidden p-6 sm:p-8 lg:p-10"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                    idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Visual */}
                  <div className={`lg:col-span-6 ${idx % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-[#FFF0E6] border border-[#E9D8CE] shadow-xs">
                      <img
                        src={fac.image}
                        alt={fac.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/95 text-[#C63D1B] border border-[#E9D8CE] shadow-2xs">
                          {fac.badge}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`lg:col-span-6 text-left space-y-4 ${idx % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#E94B1C]">
                      {fac.category}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#14233C]">
                      {fac.title}
                    </h3>
                    <p className="text-sm sm:text-[15px] text-[#4A5568] leading-relaxed">
                      {fac.description}
                    </p>

                    <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {fac.features.map((feat, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-start gap-2 text-xs font-semibold text-[#14233C]"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#E94B1C] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Action Footer Strip */}
          <div className="mt-12 p-8 rounded-3xl bg-[#FFF0E6] border border-[#FADCCB] text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <h4 className="font-serif text-xl font-bold text-[#14233C]">
                Explore Our Specialist Roster & Clinical Departments
              </h4>
              <p className="text-xs sm:text-sm text-[#756860]">
                Every hospital facility is backed by verified clinical leadership in Sai Nagar, Anantapur.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Button
                variant="primary"
                size="md"
                onClick={() => openModal()}
                className="bg-[#E94B1C] hover:bg-[#A83218] text-white font-bold rounded-full px-6"
              >
                Book OPD Visit
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default FacilitiesPage;


import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Container } from "../ui/Container";
import {
  Calendar,
  Phone,
  Clock,
  ShieldCheck,
  ChevronRight,
  Stethoscope,
  Scissors,
  Activity,
  Heart,
  Sparkles,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { HOSPITAL_INFO } from "../../constants/hospitalData";
import "./PinterestPinboard.css";

export function PinterestPinboard() {
  const [activeCategory, setActiveCategory] = useState("all");

  const chips = [
    { id: "all", label: "✨ All Care Highlights" },
    { id: "doctors", label: "👨‍⚕️ Specialist Doctors" },
    { id: "services", label: "🏥 Surgical & Clinical Care" },
    { id: "emergency", label: "⚡ 24/7 Casualty & Triage" },
    { id: "facilities", label: "🔬 Diagnostics & Pharmacy" },
  ];

  // Verified pin items derived from hospital manifest
  const pinData = [
    {
      id: "dr-surya",
      category: "doctors",
      badge: "Managing Director",
      badgeDot: "green",
      title: "Dr. D. Surya Prakash",
      subtitle: "M.D. Internal Medicine",
      desc: "Senior Consultant Physician managing diabetes, hypertension, seasonal fevers, and chronic adult illnesses with calm, patient-first care.",
      meta: "OPD: 9:30 AM – 1:30 PM & 5:00 PM – 8:30 PM",
      image: "/images/dr-d-surya-prakash.png",
      aspect: "aspect-[4/5]",
      link: "/doctors",
      actionText: "Book Visit",
      actionLink: "/appointment?dept=General%20Medicine&doctor=Dr.%20D.%20Surya%20Prakash",
      features: [
        "Diabetes & Blood Pressure Management",
        "Seasonal Fevers & Viral Infections",
        "Cardiopulmonary & Stomach Health Checks",
      ],
    },
    {
      id: "service-laparoscopy",
      category: "services",
      badge: "Minimally Invasive",
      badgeDot: "green",
      title: "Keyhole (Laparoscopic) Surgery",
      subtitle: "Dr. Anwar Ramadan, MS, FMAS",
      desc: "Advanced surgeries performed through tiny keyhole cuts for appendix, hernia, and gallbladder stones. Faster recovery with minimal pain and smaller scars.",
      meta: "Sterile OT Suite",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80",
      aspect: "aspect-[16/11]",
      link: "/specialities",
      actionText: "Surgical Info",
      actionLink: "/specialities",
      features: [
        "Keyhole Gallbladder Stone Removal",
        "Keyhole Appendix Surgery",
        "Modern Mesh Hernia Repair",
      ],
    },
    {
      id: "emergency-casualty",
      category: "emergency",
      badge: "Open 24 Hours / 7 Days",
      badgeDot: "red",
      title: "24/7 Emergency & Casualty Wing",
      subtitle: "Immediate Physician Triage",
      desc: "Instant stabilization for chest pain, sudden breathlessness, road accidental trauma, deep cuts, and high fevers in Sai Nagar, Anantapur.",
      meta: "Helpline: +91 85009 04999",
      image: "https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&w=1000&q=80",
      aspect: "aspect-[16/10]",
      link: "/emergency",
      actionText: "Call ER",
      actionLink: `tel:${HOSPITAL_INFO.phoneRaw}`,
      features: [
        "Cardiac & Breathing Stabilization",
        "Accidental Bone Fracture First-Aid",
        "Direct Oxygen & Critical Observation",
      ],
    },
    {
      id: "dr-anwar",
      category: "doctors",
      badge: "Surgical Specialist",
      badgeDot: "green",
      title: "Dr. Anwar Ramadan",
      subtitle: "MS (General Surgery), FMAS",
      desc: "Consultant General Surgeon specializing in painless proctology laser treatments (piles, fissures, fistulas) and planned daycare surgeries.",
      meta: "OPD: 10:00 AM – 1:30 PM & 5:30 PM – 8:30 PM",
      image: "/images/dr-anwar-ramadan.jpg",
      aspect: "aspect-[4/5]",
      link: "/doctors",
      actionText: "Book Visit",
      actionLink: "/appointment?dept=General%20Surgery%20%26%20Proctology&doctor=Dr.%20Anwar%20Ramadan",
      features: [
        "Piles, Fissure & Fistula Laser Care",
        "Hernia Repairs & Lipoma Excision",
        "Day-Care Same-Day Discharges",
      ],
    },
    {
      id: "dr-mohamed",
      category: "doctors",
      badge: "Bone & Joint Care",
      badgeDot: "green",
      title: "Dr. Mohamed Ramadan",
      subtitle: "MD (Medicine), MS (Orthopedics)",
      desc: "Specialist in bone fracture setting, joint pain relief, back pain, and trauma stabilization to help patients walk and move comfortably again.",
      meta: "OPD: 9:30 AM – 1:00 PM & 5:00 PM – 8:00 PM",
      image: "/images/dr-mohamed-ramadan.jpg",
      aspect: "aspect-[4/5]",
      link: "/doctors",
      actionText: "Book Visit",
      actionLink: "/appointment?dept=Orthopedic%20Surgery%20%26%20Internal%20Medicine&doctor=Dr.%20Mohamed%20Ramadan",
      features: [
        "Fracture Casting & Cracks Care",
        "Knee, Hip & Shoulder Joint Therapy",
        "Lower Back Stiffness & Neck Comfort",
      ],
    },
    {
      id: "facility-pharmacy",
      category: "facilities",
      badge: "Campus Support",
      badgeDot: "green",
      title: "24/7 In-House Medical Pharmacy",
      subtitle: "Genuine Medicines & Surgical Supplies",
      desc: "Located directly inside the hospital campus so patients and relatives can collect prescribed medications round the clock without leaving.",
      meta: "Open 24/7 All 365 Days",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1000&q=80",
      aspect: "aspect-[16/10]",
      link: "/contact",
      actionText: "View Desk",
      actionLink: "/contact",
      features: [
        "100% Genuine Prescription Drugs",
        "Surgical Dressing & Ortho Support",
        "Emergency Injections Available",
      ],
    },
    {
      id: "facility-diagnostics",
      category: "facilities",
      badge: "Diagnostic Wing",
      badgeDot: "green",
      title: "Digital X-Ray & Ultrasound Diagnostics",
      subtitle: "Pathology, ECG & Sonography",
      desc: "Rapid blood testing, 12-lead cardiac ECG, digital radiographs, and abdominal ultrasound scans providing accurate clinical answers.",
      meta: "Reporting: 8:00 AM – 9:00 PM",
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1000&q=80",
      aspect: "aspect-[16/11]",
      link: "/specialities",
      actionText: "Explore Tests",
      actionLink: "/specialities",
      features: [
        "Complete Blood & Urine Pathology",
        "Low-Radiation Bone Fracture X-Rays",
        "Pelvic & Abdominal Sonography (USG)",
      ],
    },
    {
      id: "dr-omnia",
      category: "doctors",
      badge: "Casualty Lead",
      badgeDot: "red",
      title: "Dr. Omnia Ramadan",
      subtitle: "MEM / DNB (Emergency Medicine)",
      desc: "Leads the 24/7 emergency casualty desk with swift triage, cardiac life support, and resuscitation protocols for accident victims.",
      meta: "Available 24/7 in Emergency Wing",
      image: "/images/dr-omnia-ramadan.jpg",
      aspect: "aspect-[4/5]",
      link: "/doctors",
      actionText: "Emergency Desk",
      actionLink: "/emergency",
      features: [
        "Rapid Resuscitation Protocols",
        "Acute Chest Symptoms Triage",
        "Dehydration & Severe Fever Checks",
      ],
    },
  ];

  const filteredPins = useMemo(() => {
    if (activeCategory === "all") return pinData;
    return pinData.filter((pin) => pin.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="pinterest-board-section">
      <Container size="wide">
        
        {/* Section Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 text-left">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-widest bg-[#E8D8D9] text-[#641D2D] border border-[#DED7D7]">
              <Sparkles className="w-3.5 h-3.5 text-[#B69A65]" />
              HEALTHCARE DISCOVERY PINBOARD
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#29252A] tracking-tight">
              Explore Surya Hospital at a Glance
            </h2>
            <p className="text-base text-[#6F686B] leading-relaxed font-normal">
              Browse our verified medical specialists, advanced operating suites, diagnostic facilities, and 24/7 casualty desk in Sai Nagar, Anantapur.
            </p>
          </div>

          <Link
            to="/appointment"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold bg-[#E56A2E] hover:bg-[#C8541D] text-white shadow-md transition shrink-0"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Doctor Consultation</span>
          </Link>
        </div>

        {/* Pinterest Style Filter Chips Bar */}
        <div className="pinterest-chips-scroll mb-8">
          {chips.map((chip) => (
            <button
              key={chip.id}
              type="button"
              onClick={() => setActiveCategory(chip.id)}
              className={`pinterest-chip ${activeCategory === chip.id ? "active" : ""}`}
            >
              <span>{chip.label}</span>
            </button>
          ))}
        </div>

        {/* Masonry Pinboard Grid */}
        <div className="pinterest-masonry-grid">
          {filteredPins.map((pin) => (
            <div key={pin.id} className="pinterest-pin group">
              
              {/* Media Card with Floating Status Pill & Pinterest Hover Save Button */}
              <div className={`pin-media-box ${pin.aspect}`}>
                <img
                  src={pin.image}
                  alt={pin.title}
                  loading="lazy"
                />

                {/* Floating Status Pill */}
                <div className="pin-status-badge">
                  <span className={`pin-status-dot ${pin.badgeDot === "red" ? "red" : ""}`} />
                  <span>{pin.badge}</span>
                </div>

                {/* Hover Save / Fast Action Overlay (Pinterest Signature Pattern) */}
                <div className="pin-hover-action-bar">
                  <Link
                    to={pin.actionLink}
                    className="pin-save-btn"
                    title={pin.actionText}
                  >
                    <span>{pin.actionText}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Pin Body Content */}
              <div className="pin-body">
                <span className="pin-type-tag">{pin.subtitle}</span>
                <h3 className="pin-title">{pin.title}</h3>
                <p className="pin-description">{pin.desc}</p>

                {/* Bulleted Highlights */}
                {pin.features && pin.features.length > 0 && (
                  <ul className="pin-feature-list pt-1">
                    {pin.features.map((feat, idx) => (
                      <li key={idx} className="pin-feature-item">
                        <span className="pin-bullet-dot" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Footer Note and Link */}
                <div className="pin-footer">
                  <div className="pin-meta-note">
                    <Clock className="w-3.5 h-3.5 text-[#B69A65]" />
                    <span>{pin.meta}</span>
                  </div>

                  <Link to={pin.link} className="pin-btn-text">
                    <span>View</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}

export default PinterestPinboard;

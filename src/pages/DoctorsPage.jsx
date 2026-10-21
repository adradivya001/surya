import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "../components/ui/Container";
import { PageHero } from "../components/ui/PageHero";
import { Button } from "../components/ui/Button";
import {
  Search,
  Filter,
  Calendar,
  Clock,
  AlertCircle,
  AlertTriangle,
  X,
  Stethoscope,
  Phone,
  PhoneCall,
  CheckCircle2,
  User,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { HOSPITAL_INFO } from "../constants/hospitalData";

export function DoctorsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [activeDoctorModal, setActiveDoctorModal] = useState(null);

  useEffect(() => {
    document.title = "Specialist Doctors | Surya Hospital, Sai Nagar, Anantapur";
  }, []);

  const departments = [
    "All",
    "Internal Medicine",
    "Cardiology",
    "Gastroenterology",
    "Nephrology",
    "E.N.T.",
    "Orthopedic",
    "Pulmonology",
    "Anesthesia & Intensivist",
    "Oncology",
    "Neurology",
    "Urology",
    "General Surgery",
    "Psychiatry",
  ];

  const quickSymptoms = [
    { label: "Chest Pain / Heart", query: "heart" },
    { label: "Joint / Spine Pain", query: "spine" },
    { label: "Acidity / Digestion", query: "gastro" },
    { label: "Kidney / Dialysis", query: "kidney" },
    { label: "Ear / Sinus / Throat", query: "ent" },
    { label: "Diabetes / BP", query: "diabetes" },
    { label: "Asthma / Breathing", query: "breathing" },
    { label: "Headache / Nerve", query: "neuro" },
  ];

  // Approved, verified clinical keywords mapped strictly to verified doctors and hospital data
  const CLINICAL_FOCUS_KEYWORDS = {
    "dr-d-surya-prakash": [
      "surya",
      "surya prakash",
      "managing director",
      "internal medicine",
      "physician",
      "general physician",
      "diabetes",
      "sugar",
      "blood pressure",
      "bp",
      "cholesterol",
      "fever",
      "infection",
      "inpatient",
      "health check",
    ],
    "dr-k-vamsi-krishna": [
      "heart",
      "cardiology",
      "angiography",
      "angioplasty",
      "heart attack",
      "hypertension",
      "heart failure",
      "echo",
      "ecg",
      "chest pain",
    ],
    "dr-k-spandana": [
      "heart",
      "cardiology",
      "echo",
      "2d echo",
      "arrhythmia",
      "palpitations",
      "preventive heart",
      "cardiovascular",
    ],
    "dr-s-t-rajaneesh-reddy": [
      "gastro",
      "gastroenterology",
      "endoscopy",
      "colonoscopy",
      "liver",
      "jaundice",
      "cirrhosis",
      "gerd",
      "acid reflux",
      "acidity",
      "gastritis",
      "ulcer",
      "stomach pain",
      "digestion",
    ],
    "dr-m-v-k-hareesh": [
      "nephro",
      "nephrology",
      "kidney",
      "renal",
      "dialysis",
      "hemodialysis",
      "ckd",
      "diabetic nephropathy",
      "creatinine",
    ],
    "dr-v-badarinath-reddy": [
      "nephro",
      "nephrology",
      "kidney",
      "renal",
      "kidney stones",
      "proteinuria",
      "dialysis",
      "blood in urine",
    ],
    "dr-p-lakshmi-narasimha-rao": [
      "ent",
      "ear",
      "nose",
      "throat",
      "hearing loss",
      "sinus",
      "fess",
      "tonsils",
      "tonsillectomy",
      "adenoids",
      "snoring",
    ],
    "dr-krishna-sai": [
      "ent",
      "ear",
      "nose",
      "throat",
      "sinusitis",
      "allergic rhinitis",
      "vertigo",
      "balance",
      "ear infection",
      "tinnitus",
    ],
    "dr-m-diwakar": [
      "ortho",
      "orthopedic",
      "spine",
      "back pain",
      "sciatica",
      "disc",
      "neck pain",
      "lumbar",
      "fracture",
      "trauma",
    ],
    "dr-shanthi-swaroop": [
      "ortho",
      "orthopedic",
      "joint replacement",
      "knee replacement",
      "hip replacement",
      "arthritis",
      "knee pain",
      "sports injury",
      "acl",
      "ligament",
      "fracture",
    ],
    "dr-raghavendra-raju": [
      "ortho",
      "orthopedic",
      "fracture",
      "broken bone",
      "trauma",
      "shoulder pain",
      "elbow pain",
      "osteoporosis",
      "joint pain",
    ],
    "dr-sudhindra": [
      "pulmonology",
      "chest",
      "lungs",
      "asthma",
      "allergy",
      "copd",
      "tuberculosis",
      "tb",
      "cough",
      "breathing difficulty",
      "pneumonia",
    ],
    "dr-k-muralidhar-reddy": [
      "pulmonology",
      "lungs",
      "chest",
      "ild",
      "fibrosis",
      "bronchoscopy",
      "breathlessness",
      "chronic cough",
      "respiratory",
      "icu",
    ],
    "dr-v-gowtham": [
      "anesthesia",
      "intensivist",
      "icu",
      "critical care",
      "pain management",
      "sedation",
      "emergency resuscitation",
      "perioperative",
    ],
    "dr-vishnupriya": [
      "oncology",
      "cancer",
      "chemotherapy",
      "tumor",
      "malignancy",
      "immunotherapy",
      "palliative care",
      "biopsy",
    ],
    "dr-thirupati-kedar": [
      "neurology",
      "neuro",
      "brain",
      "stroke",
      "paralysis",
      "seizure",
      "epilepsy",
      "headache",
      "migraine",
      "parkinsons",
      "nerve",
    ],
    "dr-y-harinath-reddy": [
      "urology",
      "kidney stones",
      "bladder",
      "prostate",
      "bph",
      "turp",
      "urine infection",
      "urinary",
      "andrology",
    ],
    "dr-b-rajashekar": [
      "urology",
      "kidney stones",
      "laser surgery",
      "rirs",
      "pcnl",
      "bladder",
      "prostate",
      "urinary tract",
    ],
    "dr-sai-swaroop": [
      "general surgery",
      "laparoscopic",
      "keyhole",
      "appendix",
      "gallbladder",
      "hernia",
      "piles",
      "fissure",
      "fistula",
    ],
    "dr-sushanth": [
      "general surgery",
      "trauma surgery",
      "diabetic foot",
      "wound care",
      "thyroid",
      "lump",
      "abscess",
      "emergency surgery",
    ],
    "dr-v-sashanka": [
      "psychiatry",
      "mental health",
      "depression",
      "anxiety",
      "panic",
      "stress",
      "sleep",
      "insomnia",
      "ocd",
      "counseling",
    ],
  };

  const EMERGENCY_SEARCH_KEYWORDS = [
    "chest pain",
    "breathing difficulty",
    "breathing",
    "seizure",
    "accident",
    "trauma",
    "fainting",
    "collapse",
    "choking",
    "heart attack",
    "heavy bleeding",
  ];

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const isEmergencyQuery =
    Boolean(normalizedQuery) &&
    EMERGENCY_SEARCH_KEYWORDS.some(
      (term) => normalizedQuery.includes(term) || term.includes(normalizedQuery)
    );

  const filteredDoctors = HOSPITAL_INFO.doctors.filter((doc) => {
    // 1. Check department filter
    const matchesDept =
      selectedDepartment === "All" ||
      doc.department.toLowerCase() === selectedDepartment.toLowerCase();

    if (!matchesDept) return false;

    // 2. If no search query, return all matching the department
    if (!normalizedQuery) return true;

    // 3. Match against name, department, qualifications, and specialties
    const matchesName = doc.name.toLowerCase().includes(normalizedQuery);
    const matchesDepartment = doc.department.toLowerCase().includes(normalizedQuery);
    const matchesQualifications = doc.qualifications.toLowerCase().includes(normalizedQuery);
    const matchesSpecialties = doc.specialties.some((s) =>
      s.toLowerCase().includes(normalizedQuery)
    );

    // 4. Match against verified clinical focus keywords
    const doctorKeywords = CLINICAL_FOCUS_KEYWORDS[doc.id] || [];
    const matchesKeywords = doctorKeywords.some(
      (kw) => kw.includes(normalizedQuery) || normalizedQuery.includes(kw)
    );

    return (
      matchesName ||
      matchesDepartment ||
      matchesQualifications ||
      matchesSpecialties ||
      matchesKeywords
    );
  });

  const handleResetSearch = () => {
    setSearchQuery("");
    setSelectedDepartment("All");
  };

  return (
    <div className="w-full bg-[#FAFCFE]">
      {/* Page Hero */}
      <PageHero
        eyebrow="DOCTORS & SPECIALISTS"
        title="Meet Our Doctors & Specialists"
        description="Our highly experienced medical team is here to provide expert care across a wide range of specialties including Cardiology, Gastroenterology, Nephrology, E.N.T., Orthopedic, Pulmonology, Neurology, Oncology, Urology, General Surgery, and Psychiatry."
        breadcrumbs={[{ label: "Doctors" }]}
        badge="Experienced Medical Team"
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
        <a href={`tel:${HOSPITAL_INFO.phoneRaw}`}>
          <Button
            variant="secondary"
            size="sm"
            icon={Phone}
            className="bg-white border-[#E9D8CE] text-[#C63D1B] hover:bg-[#FFF0E6] font-semibold"
          >
            Call Reception: {HOSPITAL_INFO.phone}
          </Button>
        </a>
      </PageHero>

      <section className="py-14 md:py-20 bg-[#FFF9F3] border-b border-[#F0E2D9]">
        <Container>
          {/* Hospital Leadership & Help Box */}
          <div className="mb-8 p-4 rounded-xl bg-white border border-[#E9D8CE] shadow-xs flex items-start gap-3 text-xs sm:text-sm text-[#262626]">
            <AlertCircle className="w-5 h-5 text-[#E94B1C] shrink-0 mt-0.5" />
            <div className="space-y-1 text-left">
              <p className="font-bold text-[#C63D1B]">Doctor Availability & Booking Help:</p>
              <p className="text-[#756860] leading-relaxed">
                Surya Hospital's team of super-specialists across <strong>Cardiology, Gastroenterology, Nephrology, E.N.T., Orthopedics, Pulmonology, Neurology, Oncology, Urology, General Surgery, and Psychiatry</strong> are available for regular outpatient consultations and inpatient treatment. Need help choosing the right specialist or checking today's visiting hours? Call our front desk at {HOSPITAL_INFO.phone}.
              </p>
            </div>
          </div>

          {/* Search & Filter Toolbar */}
          <div className="bg-white p-5 sm:p-7 rounded-2xl border border-[#E9D8CE] mb-10 space-y-4 shadow-xs">
            <div className="flex flex-col md:flex-row gap-3.5 items-stretch md:items-center justify-between">
              {/* Search input with label & clear button */}
              <div className="relative flex-1">
                <label htmlFor="doctor-search" className="sr-only">
                  Search doctors by name, medical specialty, or clinical health problem
                </label>
                <Search className="w-4 h-4 text-[#756860] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id="doctor-search"
                  type="text"
                  placeholder="Search by doctor name, health problem (e.g. heart, kidney, spine, fracture)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-9 py-3 text-xs sm:text-sm rounded-xl border border-[#E9D8CE] bg-white text-[#262626] placeholder-[#756860] focus:outline-none focus:ring-2 focus:ring-[#E94B1C]/20 focus:border-[#E94B1C] transition"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#756860] hover:text-[#C63D1B] rounded-full focus:outline-none focus:ring-2 focus:ring-[#E94B1C]"
                    aria-label="Clear search input"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Status and Reset Toolbar Actions */}
              <div className="flex items-center justify-between md:justify-end gap-3 shrink-0">
                <div className="text-xs text-[#756860] font-medium">
                  Showing <strong className="text-[#C63D1B]">{filteredDoctors.length}</strong> {filteredDoctors.length === 1 ? "doctor" : "doctors"}
                </div>
                {(searchQuery || selectedDepartment !== "All") && (
                  <button
                    type="button"
                    onClick={handleResetSearch}
                    className="text-xs font-bold text-[#C63D1B] hover:underline cursor-pointer"
                  >
                    Reset all filters
                  </button>
                )}
              </div>
            </div>

            {/* Quick Symptom Suggestion Tags */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs pt-1">
              <span className="text-[11px] font-bold text-[#756860] shrink-0 mr-1 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-[#E94B1C]" /> Common Concerns:
              </span>
              {quickSymptoms.map((sym) => (
                <button
                  key={sym.query}
                  type="button"
                  onClick={() => {
                    setSearchQuery(sym.query);
                    setSelectedDepartment("All");
                  }}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold whitespace-nowrap transition cursor-pointer ${
                    searchQuery.toLowerCase() === sym.query.toLowerCase()
                      ? "bg-[#E94B1C] text-white shadow-2xs"
                      : "bg-[#FFF9F3] text-[#4A403B] hover:bg-[#FFF0E6] border border-[#E9D8CE]"
                  }`}
                >
                  {sym.label}
                </button>
              ))}
            </div>

            {/* Department Filter Chips with Animated Highlight */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs" role="region" aria-label="Department filters">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#756860] shrink-0 mr-1 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5 text-[#E94B1C]" /> Department:
              </span>
              {departments.map((dept) => {
                const isSelected = selectedDepartment === dept;
                const count = dept === "All"
                  ? HOSPITAL_INFO.doctors.length
                  : HOSPITAL_INFO.doctors.filter(d => d.department.toLowerCase().includes(dept.toLowerCase())).length;

                return (
                  <button
                    key={dept}
                    type="button"
                    onClick={() => setSelectedDepartment(dept)}
                    className={`relative px-3.5 py-1.5 rounded-full font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                      isSelected
                        ? "text-white bg-[#E94B1C] shadow-xs"
                        : "bg-[#FFF0E6]/60 text-[#262626] border border-[#E9D8CE] hover:bg-[#FFF0E6]"
                    }`}
                  >
                    <span>{dept}</span>
                    {count > 0 && (
                      <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${
                        isSelected ? "bg-white/25 text-white" : "bg-white text-[#C63D1B] border border-[#E9D8CE]"
                      }`}>
                        {count}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Priority Emergency Guidance Callout (Only appears for acute emergency search queries) */}
            {isEmergencyQuery && (
              <div className="p-3.5 sm:p-4 rounded-xl bg-red-50 border-2 border-red-200 text-left space-y-2 animate-fadeIn">
                <div className="flex items-start gap-2.5">
                  <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div className="space-y-1 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-xs sm:text-sm font-bold text-red-950">
                        Urgent Medical Emergency Notice: Immediate Care Available 24/7
                      </h4>
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-red-100 text-red-700 px-2 py-0.5 rounded">
                        24/7 Casualty Desk
                      </span>
                    </div>
                    <p className="text-xs text-red-900 leading-relaxed">
                      For sudden, severe conditions such as chest pain, breathing difficulties, fainting, seizures, or serious trauma, <strong>do not wait for an OPD consultation or appointment</strong>. Surya Hospital provides continuous 24/7 emergency casualty care.
                    </p>
                    <div className="flex flex-wrap items-center gap-2 pt-1.5">
                      <a
                        href={`tel:${HOSPITAL_INFO.phoneRaw}`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition shadow-xs"
                      >
                        <PhoneCall className="w-3.5 h-3.5 animate-pulse" />
                        <span>Call 24/7 Casualty: {HOSPITAL_INFO.phone}</span>
                      </a>
                      <Link
                        to="/emergency"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-red-300 text-red-800 hover:bg-red-50 text-xs font-bold transition"
                      >
                        <span>View Emergency Guidance</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Non-Diagnostic Directory Note */}
            <div className="pt-2 border-t border-[#F0E2D9] text-[11px] text-[#756860] flex items-start gap-1.5 leading-relaxed">
              <span className="font-semibold text-[#C63D1B] shrink-0">Directory Notice:</span>
              <span>
                Search matches doctors by verified department, qualifications, and known clinical areas of care. This directory is provided for informational convenience and is not a medical diagnostic or triage tool. If you are unsure which specialist to consult, please call our reception desk at {HOSPITAL_INFO.phone} for guidance.
              </span>
            </div>
          </div>

          {/* Doctors Grid with Framer-Motion AnimatePresence */}
          {filteredDoctors.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredDoctors.map((doc, idx) => (
                  <motion.div
                    key={doc.id}
                    layout
                    initial={{ opacity: 0, scale: 0.94, y: 12 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.92, y: 8 }}
                    transition={{
                      duration: 0.25,
                      delay: Math.min(idx * 0.02, 0.2),
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className={`bg-white rounded-2xl border border-[#E9D8CE] shadow-xs hover:border-[#E94B1C] hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between group ${
                      doc.isManagingDirector
                        ? "ring-1 ring-[#E94B1C]/30"
                        : ""
                    }`}
                  >
                    {/* Clean Text-Focused Header without photo */}
                    <div className="p-5 pb-3.5 bg-gradient-to-br from-white via-[#FFF0E6]/20 to-[#FFF0E6]/50 border-b border-[#F0E2D9]">
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <span className="text-[10px] sm:text-[11px] font-bold text-[#C63D1B] uppercase tracking-wider bg-[#FFF0E6] px-2.5 py-1 rounded-md border border-[#E9D8CE]">
                          {doc.department}
                        </span>
                        <span
                          className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                            doc.isManagingDirector
                              ? "bg-[#E94B1C] text-white"
                              : "bg-white text-[#756860] border border-[#E9D8CE]"
                          }`}
                        >
                          {doc.status}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-black text-[#C63D1B] leading-snug group-hover:text-[#A83218] transition-colors">
                        {doc.name}
                      </h3>
                    </div>

                    {/* Body Content */}
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-4 text-left">
                      <div className="space-y-1">
                        <div className="text-xs sm:text-sm font-bold text-[#C63D1B]">
                          {doc.qualifications}
                        </div>
                        <div className="text-xs font-semibold text-[#262626]">
                          {doc.designation}
                        </div>
                        <p className="text-xs text-[#756860] leading-relaxed pt-0.5 line-clamp-2">
                          {doc.experience}
                        </p>
                      </div>

                      {/* Key Areas of Care - clean and concise */}
                      <div className="pt-2.5 border-t border-[#F0E2D9] space-y-1.5">
                        <ul className="space-y-1.5 text-xs text-[#756860]">
                          {doc.specialties.slice(0, 3).map((spec, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#E94B1C] shrink-0 mt-1.5" />
                              <span className="leading-snug">{spec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Consultation Schedule & Dual Actions */}
                      <div className="pt-2.5 border-t border-[#F0E2D9] space-y-3">
                        <div className="flex items-start gap-2 text-xs text-[#756860]">
                          <Clock className="w-3.5 h-3.5 text-[#FF8A3D] shrink-0 mt-0.5" />
                          <span className="text-[11px] leading-snug">{doc.opdTimings}</span>
                        </div>

                        <div className="grid grid-cols-2 gap-2 pt-0.5">
                          <button
                            type="button"
                            onClick={() => setActiveDoctorModal(doc)}
                            className="w-full py-2 px-2.5 rounded-full text-xs font-bold border border-[#E9D8CE] bg-white hover:bg-[#FFF0E6] text-[#C63D1B] transition cursor-pointer active:scale-95 shadow-2xs"
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
                              className="bg-[#E94B1C] hover:bg-[#A83218] text-white text-xs font-bold py-2 rounded-full active:scale-95 shadow-xs"
                            >
                              Book Visit
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="text-center py-12 sm:py-16 px-4 bg-white rounded-2xl border border-[#E9D8CE] space-y-4 max-w-2xl mx-auto shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-[#FFF0E6] text-[#E94B1C] flex items-center justify-center mx-auto border border-[#E9D8CE]">
                <Stethoscope className="w-6 h-6" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-[#C63D1B]">
                  {searchQuery ? (
                    <>No doctors found matching &ldquo;<span className="text-[#FF8A3D]">{searchQuery}</span>&rdquo;</>
                  ) : (
                    "No doctors found for this department."
                  )}
                </h3>
                <p className="text-xs sm:text-sm text-[#756860] max-w-md mx-auto leading-relaxed">
                  Try searching by doctor name (e.g. <em>Dr. Vamsi Krishna</em>), department, or verified health concerns like <em>heart</em>, <em>kidney</em>, <em>spine</em>, or <em>fracture</em>.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                <Button
                  variant="primary"
                  size="sm"
                  className="bg-[#E94B1C] hover:bg-[#A83218] text-white text-xs font-bold rounded-full"
                  onClick={handleResetSearch}
                >
                  Show All Doctors
                </Button>
                <a href={`tel:${HOSPITAL_INFO.phoneRaw}`}>
                  <Button
                    variant="secondary"
                    size="sm"
                    icon={Phone}
                    className="bg-white border-[#E9D8CE] text-[#C63D1B] hover:bg-[#FFF0E6] text-xs font-bold rounded-full"
                  >
                    Help Me Choose: {HOSPITAL_INFO.phone}
                  </Button>
                </a>
              </div>
            </div>
          )}
        </Container>
      </section>

      {/* Individual Doctor Profile Modal with White Glassmorphism Backdrop */}
      {activeDoctorModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-white/70 backdrop-blur-md transition-opacity duration-200" onClick={() => setActiveDoctorModal(null)}>
          <div className="bg-white rounded-2xl max-w-xl w-full p-5 sm:p-8 shadow-2xl border border-[#E9D8CE] space-y-5 max-h-[88vh] overflow-y-auto transform transition-all duration-300 ease-out animate-in fade-in zoom-in-95 text-left" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b border-[#F0E2D9]">
              <div className="flex items-center gap-3.5">
                {activeDoctorModal.image && activeDoctorModal.image.startsWith("/") ? (
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden bg-[#FFF0E6] shrink-0 border border-[#E9D8CE] shadow-xs">
                    <img
                      src={activeDoctorModal.image}
                      alt={activeDoctorModal.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                ) : (
                  <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-xl bg-[#FFF0E6] text-[#E94B1C] flex items-center justify-center shrink-0 border border-[#E9D8CE]">
                    <User className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-black text-[#C63D1B]">
                    {activeDoctorModal.name}
                  </h3>
                  <p className="text-xs text-[#FF8A3D] font-bold">
                    {activeDoctorModal.qualifications}
                  </p>
                  <p className="text-xs text-[#756860]">
                    {activeDoctorModal.designation}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setActiveDoctorModal(null)}
                className="p-1 rounded-lg text-[#756860] hover:text-[#C63D1B] hover:bg-[#FFF0E6] cursor-pointer transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Profile Content */}
            <div className="space-y-4 text-left">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#C63D1B] mb-1">
                  Department & Role
                </h4>
                <p className="text-xs sm:text-sm text-[#756860] leading-relaxed">
                  {activeDoctorModal.department} • {activeDoctorModal.experience}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#C63D1B] mb-1">
                  About the Doctor & Patient Approach
                </h4>
                <p className="text-xs sm:text-sm text-[#756860] leading-relaxed">
                  {activeDoctorModal.bio}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#C63D1B] mb-2">
                  Conditions Treated & Treatments Offered
                </h4>
                <ul className="space-y-1.5 text-xs text-[#756860]">
                  {activeDoctorModal.specialties.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E94B1C] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FFF0E6]/50 border border-[#E9D8CE] text-xs space-y-1">
                <span className="font-bold text-[#C63D1B] block">
                  Visiting Hours & Location:
                </span>
                <p className="text-[#756860]">
                  {activeDoctorModal.opdTimings}
                </p>
                <p className="text-[11px] text-[#756860] pt-1">
                  Consultation Rooms, Surya Hospital, Sai Nagar, Anantapur.
                </p>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
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
                  className="bg-[#E94B1C] hover:bg-[#A83218] text-white font-bold rounded-full py-2.5 shadow-sm"
                >
                  Book with {activeDoctorModal.name}
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
                  className="w-full text-xs bg-white border-[#E9D8CE] text-[#C63D1B] hover:bg-[#FFF0E6] rounded-full py-2.5"
                >
                  Call Front Desk
                </Button>
              </a>

              <Button
                variant="outline"
                size="md"
                onClick={() => setActiveDoctorModal(null)}
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
export default DoctorsPage;

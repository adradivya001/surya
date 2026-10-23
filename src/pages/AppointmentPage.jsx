import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "../components/ui/Container";
import { PageHero } from "../components/ui/PageHero";
import { Button } from "../components/ui/Button";
import {
  Calendar,
  CheckCircle2,
  AlertCircle,
  PhoneCall,
  Loader2,
  Clock,
  User,
  Stethoscope,
  ChevronRight,
  Sun,
  Moon,
  Zap,
} from "lucide-react";
import { HOSPITAL_INFO } from "../constants/hospitalData";

export function AppointmentPage() {
  const [searchParams] = useSearchParams();
  const initialDoctor = searchParams.get("doctor") || "";
  const paramDept = (searchParams.get("dept") || "").toLowerCase().trim();

  const departmentOptions = [
    "General Medicine (Physician)",
    "General & Laparoscopic Surgery",
    "Cardiology",
    "Orthopedics & Joint Replacement",
    "Gastroenterology",
    "Nephrology",
    "E.N.T.",
    "Pulmonology & Chest Medicine",
    "Neurology",
    "Medical & Surgical Oncology",
    "Urology",
    "Psychiatry",
    "24/7 Casualty & Emergency",
  ];

  // Match URL department intelligently (case-insensitive substring match)
  const matchedDept = departmentOptions.find((opt) =>
    paramDept && (opt.toLowerCase().includes(paramDept) || paramDept.includes(opt.toLowerCase()))
  ) || "General Medicine (Physician)";

  const [currentStep, setCurrentStep] = useState(1); // 1: Department & Doctor, 2: Date & Slot, 3: Patient Info
  const [formData, setFormData] = useState({
    patientName: "",
    phone: "",
    email: "",
    department: matchedDept,
    preferredDoctor: initialDoctor,
    preferredDate: "",
    preferredTime: "Morning (09:30 AM – 01:30 PM)",
    reason: "",
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  useEffect(() => {
    document.title = "Book an Appointment | Surya Hospital, Sai Nagar, Anantapur";
  }, []);



  const timeSlots = [
    "Morning (09:30 AM – 01:30 PM)",
    "Evening (05:00 PM – 08:30 PM)",
    "Casualty / Emergency (Immediate)",
  ];

  // Prevent selecting past dates
  const todayStr = new Date().toISOString().split("T")[0];

  const validate = () => {
    const errs = {};
    if (!formData.patientName.trim()) {
      errs.patientName = "Please enter patient full name";
    }

    const cleanPhone = formData.phone.replace(/[^0-9]/g, "");
    if (!formData.phone.trim()) {
      errs.phone = "Please enter your mobile phone number";
    } else if (cleanPhone.length !== 10) {
      errs.phone = "Please enter a valid 10-digit mobile number";
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        errs.email = "Please enter a valid email address";
      }
    }

    if (!formData.preferredDate) {
      errs.preferredDate = "Please choose your preferred visit date";
    } else if (formData.preferredDate < todayStr) {
      errs.preferredDate = "Please choose today or a future date";
    }

    if (!formData.consent) {
      errs.consent = "Please check the box to confirm booking enquiry";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate instant local resolution without external failure
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedToken = `SURYA-${Math.floor(100000 + Math.random() * 900000)}`;
      setConfirmedBooking({
        refNumber: generatedToken,
        patientName: formData.patientName,
        phone: formData.phone,
        department: formData.department,
        doctor: formData.preferredDoctor || "Consultant on Duty",
        date: formData.preferredDate,
        timeSlot: formData.preferredTime,
      });

      // Reset form fields
      setFormData({
        patientName: "",
        phone: "",
        email: "",
        department: "General Medicine (Physician)",
        preferredDoctor: "",
        preferredDate: "",
        preferredTime: "Morning (09:30 AM – 01:30 PM)",
        reason: "",
        consent: false,
      });
      setErrors({});
    }, 600);
  };

  return (
    <div className="w-full">
      {/* Page Hero */}
      <PageHero
        eyebrow="APPOINTMENTS & VISITING TOKENS"
        title="Book Doctor Consultation"
        description="Schedule a visit with our experienced doctors in internal medicine, general surgery, or joint and bone care. We will confirm your visiting slot promptly."
        breadcrumbs={[{ label: "Appointment" }]}
        badge="Sai Nagar Campus"
      >
        <a href={`tel:${HOSPITAL_INFO.phoneRaw}`}>
          <Button variant="primary" size="sm" icon={PhoneCall} className="bg-[#E94B1C] hover:bg-[#A83218] text-white">
            Call for Immediate Token: {HOSPITAL_INFO.phone}
          </Button>
        </a>
      </PageHero>

      <section className="py-14 md:py-20 bg-[#FFF9F3] border-b border-[#F0E2D9]">
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* Helpful Notice Banner */}
            <div className="mb-8 p-4 rounded-xl bg-white border border-[#E9D8CE] text-xs sm:text-sm text-[#262626] flex items-start gap-3 shadow-xs">
              <AlertCircle className="w-5 h-5 text-[#E94B1C] shrink-0 mt-0.5" />
              <div className="space-y-1 text-left">
                <p className="font-bold text-[#C63D1B]">Need Same-Day or Emergency Care?</p>
                <p className="text-[#756860]">
                  For urgent health issues, severe pain, accidents, or same-day doctor visits, please call our 24/7 reception desk at <strong>{HOSPITAL_INFO.phone}</strong> or visit our hospital directly in Sai Nagar, Anantapur.
                </p>
              </div>
            </div>

            {/* Success Receipt State */}
            {confirmedBooking ? (
              <div className="bg-white rounded-2xl border border-[#E9D8CE] p-6 sm:p-10 shadow-sm text-left space-y-6 animate-fadeIn">
                <div className="flex items-center gap-3 pb-4 border-b border-[#F0E2D9]">
                  <div className="w-12 h-12 rounded-xl bg-[#FFF0E6] text-[#E94B1C] flex items-center justify-center shrink-0 border border-[#E9D8CE]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#C63D1B]">
                      APPOINTMENT REQUEST RECEIVED
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-[#C63D1B]">
                      We Have Received Your Booking Request
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm bg-[#FFF9F3] p-5 rounded-xl border border-[#E9D8CE]">
                  <div>
                    <span className="text-[#756860] block text-[11px] uppercase font-bold">
                      Booking Reference:
                    </span>
                    <span className="font-mono font-bold text-[#C63D1B] text-sm sm:text-base">
                      {confirmedBooking.refNumber}
                    </span>
                  </div>

                  <div>
                    <span className="text-[#756860] block text-[11px] uppercase font-bold">
                      Patient Name:
                    </span>
                    <span className="font-bold text-[#262626] text-sm sm:text-base">
                      {confirmedBooking.patientName}
                    </span>
                  </div>

                  <div>
                    <span className="text-[#756860] block text-[11px] uppercase font-bold">
                      Department:
                    </span>
                    <span className="font-bold text-[#C63D1B]">
                      {confirmedBooking.department}
                    </span>
                  </div>

                  <div>
                    <span className="text-[#756860] block text-[11px] uppercase font-bold">
                      Doctor:
                    </span>
                    <span className="font-bold text-[#262626]">
                      {confirmedBooking.doctor}
                    </span>
                  </div>

                  <div>
                    <span className="text-[#756860] block text-[11px] uppercase font-bold">
                      Requested Date:
                    </span>
                    <span className="font-bold text-[#262626]">
                      {confirmedBooking.date}
                    </span>
                  </div>

                  <div>
                    <span className="text-[#756860] block text-[11px] uppercase font-bold">
                      Preferred Time:
                    </span>
                    <span className="font-bold text-[#262626]">
                      {confirmedBooking.timeSlot}
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#FFF0E6]/50 border border-[#E9D8CE] text-xs sm:text-sm text-[#262626] space-y-1">
                  <span className="font-bold block text-[#C63D1B]">Next Steps & What to Expect:</span>
                  <p className="text-[#756860]">
                    Our reception desk will call you shortly on your mobile number to confirm your exact token time. Please arrive 15 minutes before your time at Surya Hospital, Sai Nagar, Anantapur, and bring any past doctor prescriptions or medical reports with you.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                  <a href={`tel:${HOSPITAL_INFO.phoneRaw}`} className="w-full sm:w-auto">
                    <Button variant="primary" size="md" icon={PhoneCall} className="w-full sm:w-auto bg-[#E94B1C] hover:bg-[#A83218] text-white rounded-full">
                      Call Reception: {HOSPITAL_INFO.phone}
                    </Button>
                  </a>
                  <Button
                    variant="outline"
                    size="md"
                    className="w-full sm:w-auto border-[#E9D8CE] text-[#C63D1B] hover:bg-[#FFF0E6] rounded-full"
                    onClick={() => setConfirmedBooking(null)}
                  >
                    Book Another Visit
                  </Button>
                  <Link to="/" className="w-full sm:w-auto">
                    <Button variant="ghost" size="md" className="w-full sm:w-auto rounded-full">
                      Back to Home
                    </Button>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-3xl border border-[#E9D8CE] p-5 sm:p-8 md:p-10 shadow-sm text-left">
                {/* 3-Step Progress Indicator */}
                <div className="mb-8 pb-6 border-b border-[#F0E2D9]">
                  <div className="grid grid-cols-3 gap-2 sm:gap-4">
                    {[
                      { step: 1, title: "Department & Doctor", icon: Stethoscope },
                      { step: 2, title: "Date & Visiting Slot", icon: Clock },
                      { step: 3, title: "Patient Details", icon: User },
                    ].map((s) => {
                      const IconComp = s.icon;
                      const isActive = currentStep === s.step;
                      const isCompleted = currentStep > s.step;

                      return (
                        <button
                          key={s.step}
                          type="button"
                          onClick={() => {
                            if (isCompleted || s.step < currentStep) setCurrentStep(s.step);
                          }}
                          className={`flex flex-col sm:flex-row items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-2xl transition-all text-left ${
                            isActive
                              ? "bg-[#FFF0E6] border-2 border-[#E94B1C]"
                              : isCompleted
                              ? "bg-[#FFF9F3] border border-[#E9D8CE] cursor-pointer hover:bg-[#FFF0E6]/50"
                              : "bg-slate-50 border border-slate-200 opacity-60 cursor-not-allowed"
                          }`}
                        >
                          <div
                            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${
                              isCompleted
                                ? "bg-[#006677] text-white"
                                : isActive
                                ? "bg-[#E94B1C] text-white shadow-xs"
                                : "bg-slate-200 text-slate-600"
                            }`}
                          >
                            {isCompleted ? <CheckCircle2 className="w-4 h-4" /> : s.step}
                          </div>
                          <div className="overflow-hidden">
                            <span className="block text-[10px] uppercase font-bold text-[#756860]">
                              Step {s.step}
                            </span>
                            <span className="text-xs sm:text-[13px] font-bold text-[#1A1D20] truncate block">
                              {s.title}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* STEP 1: Department & Doctor Selection */}
                  {currentStep === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-6"
                    >
                      <div className="space-y-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#C63D1B]">
                          Step 1 of 3
                        </span>
                        <h3 className="text-lg sm:text-xl font-black text-[#1A1D20]">
                          Select Clinical Department & Specialist Doctor
                        </h3>
                        <p className="text-xs text-[#756860]">
                          Choose the medical or surgical department you wish to consult.
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-[#262626]">
                            Choose Department <span className="text-[#E94B1C]">*</span>
                          </label>
                          <select
                            value={formData.department}
                            onChange={(e) => {
                              setFormData({
                                ...formData,
                                department: e.target.value,
                                preferredDoctor: "",
                              });
                            }}
                            className="w-full px-4 py-3 text-sm rounded-xl border border-[#E9D8CE] bg-white text-[#262626] font-semibold focus:outline-none focus:border-[#E94B1C] focus:ring-1 focus:ring-[#E94B1C]"
                          >
                            {departmentOptions.map((dept) => (
                              <option key={dept} value={dept}>
                                {dept}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Filtered Doctor Cards or Any Doctor option */}
                        <div className="space-y-2 pt-2">
                          <label className="text-xs font-bold text-[#262626]">
                            Choose Doctor (Optional)
                          </label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <button
                              type="button"
                              onClick={() => setFormData({ ...formData, preferredDoctor: "" })}
                              className={`p-3.5 rounded-2xl border text-left transition cursor-pointer flex items-center justify-between ${
                                formData.preferredDoctor === ""
                                  ? "border-[#E94B1C] bg-[#FFF0E6]/70 shadow-xs"
                                  : "border-[#E9D8CE] bg-white hover:bg-[#FFF9F3]"
                              }`}
                            >
                              <div>
                                <span className="text-xs font-bold text-[#1A1D20] block">
                                  Any Available Doctor
                                </span>
                                <span className="text-[11px] text-[#756860]">
                                  Consult the duty specialist for faster booking
                                </span>
                              </div>
                              {formData.preferredDoctor === "" && (
                                <CheckCircle2 className="w-4 h-4 text-[#E94B1C] shrink-0" />
                              )}
                            </button>

                            {HOSPITAL_INFO.doctors
                              .filter((doc) => {
                                const deptLower = formData.department.toLowerCase();
                                const docDept = doc.department.toLowerCase();
                                return (
                                  docDept.includes(deptLower) ||
                                  deptLower.includes(docDept) ||
                                  (deptLower.includes("general medicine") && docDept.includes("internal medicine")) ||
                                  (deptLower.includes("surgery") && docDept.includes("surgery"))
                                );
                              })
                              .map((doc) => {
                                const isSelected = formData.preferredDoctor === doc.name;
                                return (
                                  <button
                                    key={doc.id}
                                    type="button"
                                    onClick={() =>
                                      setFormData({ ...formData, preferredDoctor: doc.name })
                                    }
                                    className={`p-3.5 rounded-2xl border text-left transition cursor-pointer flex items-center justify-between ${
                                      isSelected
                                        ? "border-[#E94B1C] bg-[#FFF0E6]/70 shadow-xs"
                                        : "border-[#E9D8CE] bg-white hover:bg-[#FFF9F3]"
                                    }`}
                                  >
                                    <div className="overflow-hidden pr-2">
                                      <span className="text-xs font-bold text-[#1A1D20] block truncate">
                                        {doc.name}
                                      </span>
                                      <span className="text-[11px] text-[#C63D1B] font-semibold block">
                                        {doc.qualifications}
                                      </span>
                                      <span className="text-[10px] text-[#756860] block truncate mt-0.5">
                                        {doc.opdTimings}
                                      </span>
                                    </div>
                                    {isSelected && (
                                      <CheckCircle2 className="w-4 h-4 text-[#E94B1C] shrink-0" />
                                    )}
                                  </button>
                                );
                              })}
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 flex justify-end">
                        <Button
                          type="button"
                          variant="primary"
                          size="md"
                          onClick={() => setCurrentStep(2)}
                          className="bg-[#E94B1C] hover:bg-[#A83218] text-white font-bold px-7 py-3 rounded-full flex items-center gap-2 cursor-pointer"
                        >
                          <span>Next: Choose Date &amp; Time</span>
                          <ChevronRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 2: Date & Interactive Time Slot Chips */}
                  {currentStep === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-6"
                    >
                      <div className="space-y-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#C63D1B]">
                          Step 2 of 3
                        </span>
                        <h3 className="text-lg sm:text-xl font-black text-[#1A1D20]">
                          Choose Preferred Date &amp; Time Slot
                        </h3>
                        <p className="text-xs text-[#756860]">
                          Select your consultation date and morning or evening shift.
                        </p>
                      </div>

                      <div className="space-y-5">
                        {/* Preferred Date */}
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-[#262626]">
                            Preferred Date <span className="text-[#E94B1C]">*</span>
                          </label>
                          <input
                            type="date"
                            min={todayStr}
                            value={formData.preferredDate}
                            onChange={(e) =>
                              setFormData({ ...formData, preferredDate: e.target.value })
                            }
                            className={`w-full px-4 py-3 text-sm rounded-xl border bg-white text-[#262626] font-semibold focus:outline-none transition ${
                              errors.preferredDate
                                ? "border-red-400 ring-1 ring-red-300"
                                : "border-[#E9D8CE] focus:border-[#E94B1C] focus:ring-1 focus:ring-[#E94B1C]"
                            }`}
                          />
                          {errors.preferredDate && (
                            <p className="text-[11px] text-red-500">{errors.preferredDate}</p>
                          )}
                        </div>

                        {/* Interactive Slot Chips */}
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-[#262626]">
                            Preferred Time Shift <span className="text-[#E94B1C]">*</span>
                          </label>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            {[
                              {
                                id: "Morning (09:30 AM – 01:30 PM)",
                                label: "Morning OPD",
                                time: "09:30 AM – 01:30 PM",
                                icon: Sun,
                                color: "text-amber-600",
                              },
                              {
                                id: "Evening (05:00 PM – 08:30 PM)",
                                label: "Evening OPD",
                                time: "05:00 PM – 08:30 PM",
                                icon: Moon,
                                color: "text-indigo-600",
                              },
                              {
                                id: "Casualty / Emergency (Immediate)",
                                label: "Casualty / 24x7",
                                time: "Open 24 Hours",
                                icon: Zap,
                                color: "text-[#E94B1C]",
                              },
                            ].map((slot) => {
                              const SlotIcon = slot.icon;
                              const isSelected = formData.preferredTime === slot.id;
                              return (
                                <button
                                  key={slot.id}
                                  type="button"
                                  onClick={() =>
                                    setFormData({ ...formData, preferredTime: slot.id })
                                  }
                                  className={`p-4 rounded-2xl border text-left transition cursor-pointer flex flex-col justify-between ${
                                    isSelected
                                      ? "border-[#E94B1C] bg-[#FFF0E6] shadow-sm ring-1 ring-[#E94B1C]"
                                      : "border-[#E9D8CE] bg-white hover:bg-[#FFF9F3]"
                                  }`}
                                >
                                  <div className="flex items-center justify-between">
                                    <SlotIcon className={`w-4 h-4 ${slot.color}`} />
                                    {isSelected && (
                                      <CheckCircle2 className="w-4 h-4 text-[#E94B1C]" />
                                    )}
                                  </div>
                                  <div className="mt-3">
                                    <span className="text-xs font-bold text-[#1A1D20] block">
                                      {slot.label}
                                    </span>
                                    <span className="text-[11px] text-[#756860] font-semibold block mt-0.5">
                                      {slot.time}
                                    </span>
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        {/* Health Concern Reason */}
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-[#262626]">
                            Main Health Concern or Symptoms{" "}
                            <span className="text-[#756860] font-normal">(Optional)</span>
                          </label>
                          <textarea
                            rows={3}
                            placeholder="e.g. Fever checkup, diabetes review, knee pain, stomach ache, piles consultation..."
                            value={formData.reason}
                            onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                            className="w-full px-4 py-3 text-sm rounded-xl border border-[#E9D8CE] bg-white text-[#262626] focus:outline-none focus:border-[#E94B1C] focus:ring-1 focus:ring-[#E94B1C] placeholder-[#756860]"
                          />
                        </div>
                      </div>

                      <div className="pt-4 flex items-center justify-between">
                        <button
                          type="button"
                          onClick={() => setCurrentStep(1)}
                          className="px-5 py-2.5 rounded-full text-xs font-bold text-[#756860] hover:text-[#262626] cursor-pointer"
                        >
                          ← Back
                        </button>
                        <Button
                          type="button"
                          variant="primary"
                          size="md"
                          onClick={() => {
                            if (!formData.preferredDate) {
                              setErrors({ preferredDate: "Please choose your preferred visit date" });
                              return;
                            }
                            setErrors({});
                            setCurrentStep(3);
                          }}
                          className="bg-[#E94B1C] hover:bg-[#A83218] text-white font-bold px-7 py-3 rounded-full flex items-center gap-2 cursor-pointer"
                        >
                          <span>Next: Patient Info</span>
                          <ChevronRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 3: Patient Information & Final Confirmation */}
                  {currentStep === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-6"
                    >
                      <div className="space-y-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#C63D1B]">
                          Step 3 of 3
                        </span>
                        <h3 className="text-lg sm:text-xl font-black text-[#1A1D20]">
                          Enter Patient Details &amp; Confirm
                        </h3>
                        <p className="text-xs text-[#756860]">
                          Our reception desk will call this number to confirm your exact token slot.
                        </p>
                      </div>

                      {/* Booking Summary Box */}
                      <div className="p-4 rounded-2xl bg-[#FFF9F3] border border-[#E9D8CE] text-xs flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <span className="text-[10px] uppercase font-bold text-[#756860] block">
                            Department &amp; Doctor
                          </span>
                          <span className="font-bold text-[#1A1D20]">
                            {formData.department}{" "}
                            {formData.preferredDoctor ? `• Dr. ${formData.preferredDoctor}` : ""}
                          </span>
                        </div>
                        <div>
                          <span className="text-[10px] uppercase font-bold text-[#756860] block">
                            Schedule
                          </span>
                          <span className="font-bold text-[#C63D1B]">
                            {formData.preferredDate} ({formData.preferredTime.split(" ")[0]})
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => setCurrentStep(1)}
                          className="text-[11px] font-bold text-[#E94B1C] hover:underline"
                        >
                          Change
                        </button>
                      </div>

                      <div className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label className="text-xs font-bold text-[#262626]">
                              Patient Full Name <span className="text-[#E94B1C]">*</span>
                            </label>
                            <input
                              type="text"
                              placeholder="e.g. Ramesh Kumar"
                              value={formData.patientName}
                              onChange={(e) =>
                                setFormData({ ...formData, patientName: e.target.value })
                              }
                              className={`w-full px-4 py-3 text-sm rounded-xl border bg-white text-[#262626] font-semibold focus:outline-none transition ${
                                errors.patientName
                                  ? "border-red-400 ring-1 ring-red-300"
                                  : "border-[#E9D8CE] focus:border-[#E94B1C] focus:ring-1 focus:ring-[#E94B1C]"
                              }`}
                            />
                            {errors.patientName && (
                              <p className="text-[11px] text-red-500">{errors.patientName}</p>
                            )}
                          </div>

                          <div className="space-y-1.5">
                            <label className="text-xs font-bold text-[#262626]">
                              Mobile Phone Number <span className="text-[#E94B1C]">*</span>
                            </label>
                            <input
                              type="tel"
                              placeholder="e.g. 9876543210"
                              value={formData.phone}
                              onChange={(e) =>
                                setFormData({ ...formData, phone: e.target.value })
                              }
                              className={`w-full px-4 py-3 text-sm rounded-xl border bg-white text-[#262626] font-semibold focus:outline-none transition ${
                                errors.phone
                                  ? "border-red-400 ring-1 ring-red-300"
                                  : "border-[#E9D8CE] focus:border-[#E94B1C] focus:ring-1 focus:ring-[#E94B1C]"
                              }`}
                            />
                            {errors.phone && (
                              <p className="text-[11px] text-red-500">{errors.phone}</p>
                            )}
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-[#262626]">
                            Email Address{" "}
                            <span className="text-[#756860] font-normal">(Optional)</span>
                          </label>
                          <input
                            type="email"
                            placeholder="e.g. patient@example.com"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                            className="w-full px-4 py-3 text-sm rounded-xl border border-[#E9D8CE] bg-white text-[#262626] focus:outline-none focus:border-[#E94B1C] focus:ring-1 focus:ring-[#E94B1C]"
                          />
                        </div>

                        <div className="space-y-1 pt-2">
                          <label className="flex items-start gap-2.5 text-xs text-[#756860] cursor-pointer">
                            <input
                              type="checkbox"
                              checked={formData.consent}
                              onChange={(e) =>
                                setFormData({ ...formData, consent: e.target.checked })
                              }
                              className="mt-0.5 rounded text-[#E94B1C] focus:ring-[#E94B1C]"
                            />
                            <span>
                              I agree to let Surya Hospital front desk call or message me at this phone number to confirm this doctor visit.
                            </span>
                          </label>
                          {errors.consent && (
                            <p className="text-[11px] text-red-500">{errors.consent}</p>
                          )}
                        </div>
                      </div>

                      <div className="pt-4 flex items-center justify-between border-t border-[#F0E2D9]">
                        <button
                          type="button"
                          onClick={() => setCurrentStep(2)}
                          className="px-5 py-2.5 rounded-full text-xs font-bold text-[#756860] hover:text-[#262626] cursor-pointer"
                        >
                          ← Back
                        </button>
                        <Button
                          type="submit"
                          variant="primary"
                          size="lg"
                          disabled={isSubmitting}
                          icon={isSubmitting ? Loader2 : Calendar}
                          className="bg-[#E94B1C] hover:bg-[#A83218] text-white font-bold py-3.5 px-8 text-sm shadow-md rounded-full cursor-pointer active:scale-95"
                        >
                          {isSubmitting ? "Confirming Slot..." : "Confirm & Request Token"}
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </form>
              </div>
            )}
          </div>
        </Container>
      </section>
    </div>
  );
}

export default AppointmentPage;

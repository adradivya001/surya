import React, { useState, useEffect, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Container } from "../components/ui/Container";
import { PageHero } from "../components/ui/PageHero";
import { Button } from "../components/ui/Button";
import {
  Calendar,
  CheckCircle2,
  AlertCircle,
  PhoneCall,
  Loader2,
} from "lucide-react";
import { HOSPITAL_INFO } from "../constants/hospitalData";

export function AppointmentPage() {
  const [searchParams] = useSearchParams();
  const preselectedDept = searchParams.get("dept") || "General Medicine";
  const preselectedDoc = searchParams.get("doctor") || "";

  const todayStr = useMemo(() => new Date().toISOString().split("T")[0], []);

  const [formData, setFormData] = useState(() => ({
    patientName: "",
    phone: "",
    email: "",
    department: preselectedDept,
    preferredDoctor: preselectedDoc,
    preferredDate: "",
    preferredTime: "Morning (09:30 AM – 01:00 PM)",
    reason: "",
    consent: false,
  }));

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  useEffect(() => {
    document.title = "Book Appointment | Surya Hospital, Sai Nagar, Anantapur";
  }, []);

  // List of departments
  const departmentOptions = [
    "General Medicine",
    "General Surgery & Proctology",
    "Laparoscopic Surgery",
    "Orthopedic Surgery & Internal Medicine",
    "Emergency & Critical Care",
    "Diagnostic Laboratory & Imaging",
    "Physiotherapy & Rehabilitation",
    "Day-Care Surgeries",
  ];

  const timeSlots = [
    "Morning (09:30 AM – 01:00 PM)",
    "Evening (05:00 PM – 08:30 PM)",
  ];

  const validate = () => {
    const errs = {};
    if (!formData.patientName.trim() || formData.patientName.trim().length < 2) {
      errs.patientName = "Patient name is required (at least 2 characters).";
    }

    const phoneClean = formData.phone.replace(/[\s-]/g, "");
    if (!phoneClean) {
      errs.phone = "Phone number is required.";
    } else if (!/^[6-9]\d{9}$/.test(phoneClean) && !/^\+91[6-9]\d{9}$/.test(phoneClean)) {
      errs.phone = "Please enter a valid 10-digit Indian mobile number.";
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }

    if (!formData.department) {
      errs.department = "Please select a clinical department.";
    }

    if (!formData.preferredDate) {
      errs.preferredDate = "Please choose a consultation date.";
    } else if (formData.preferredDate < todayStr) {
      errs.preferredDate = "Consultation date cannot be in the past.";
    }

    if (!formData.consent) {
      errs.consent = "You must consent to Surya Hospital staff contacting you to confirm this consultation.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setConfirmedBooking({
        refNumber: `SH-APPT-${Math.floor(100000 + Math.random() * 900000)}`,
        patientName: formData.patientName,
        phone: formData.phone,
        department: formData.department,
        doctor: formData.preferredDoctor || "Next Available Specialist",
        date: formData.preferredDate,
        timeSlot: formData.preferredTime,
      });
      setFormData({
        patientName: "",
        phone: "",
        email: "",
        department: "General Medicine",
        preferredDoctor: "",
        preferredDate: "",
        preferredTime: "Morning (09:30 AM – 01:00 PM)",
        reason: "",
        consent: false,
      });
      setErrors({});
    }, 800);
  };

  return (
    <div className="w-full">
      {/* Page Hero */}
      <PageHero
        eyebrow="OUTPATIENT CONSULTATION"
        title="Request a Doctor Appointment"
        description="Schedule a specialist doctor consultation at Surya Hospital, Sai Nagar, Anantapur. Our desk will verify doctor schedules and reach out to confirm your visit."
        breadcrumbs={[{ label: "Appointment" }]}
        badge="Sai Nagar Campus"
      >
        <a href={`tel:${HOSPITAL_INFO.phoneRaw}`}>
          <Button variant="primary" size="sm" icon={PhoneCall} className="bg-[#C65332] hover:bg-[#A84328] text-white">
            Urgent Booking Helpline: {HOSPITAL_INFO.phone}
          </Button>
        </a>
      </PageHero>

      <section className="py-12 md:py-16 bg-[#FFF8F2] border-b border-[#F0D9CB]">
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* Demo Notice Banner */}
            <div className="mb-8 p-4 rounded-xl bg-[#FCECE2] border border-[#F0D9CB] text-xs text-[#252B33] flex items-start gap-3">
              <AlertCircle className="w-4 h-4 text-[#C65332] shrink-0 mt-0.5" />
              <div className="space-y-1 text-left">
                <p className="font-bold text-[#252B33]">Demonstration Flow Notice:</p>
                <p className="text-[#59616B]">
                  This web form demonstrates validated appointment booking. Because live EHR integration is hospital-managed, submitted requests generate a demonstration confirmation receipt. For same-day emergency or immediate confirmed OPD tokens, call <strong>{HOSPITAL_INFO.phone}</strong>.
                </p>
              </div>
            </div>

            {/* Success Receipt State */}
            {confirmedBooking ? (
              <div className="bg-white rounded-2xl border border-[#F0D9CB] p-6 sm:p-10 shadow-sm text-left space-y-6 animate-fadeIn">
                <div className="flex items-center gap-3 pb-4 border-b border-[#F0D9CB]">
                  <div className="w-12 h-12 rounded-xl bg-[#F6D8C5] text-[#C65332] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#B96645]">
                      REQUEST RECORDED (DEMO FLOW)
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-[#252B33]">
                      Appointment Request Summary
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs bg-[#FFF8F2] p-5 rounded-xl border border-[#F0D9CB]">
                  <div>
                    <span className="text-[#808A96] block text-[11px] uppercase font-bold">
                      Reference Number:
                    </span>
                    <span className="font-mono font-bold text-[#252B33] text-sm">
                      {confirmedBooking.refNumber}
                    </span>
                  </div>

                  <div>
                    <span className="text-[#808A96] block text-[11px] uppercase font-bold">
                      Patient Name:
                    </span>
                    <span className="font-bold text-[#252B33] text-sm">
                      {confirmedBooking.patientName}
                    </span>
                  </div>

                  <div>
                    <span className="text-[#808A96] block text-[11px] uppercase font-bold">
                      Department:
                    </span>
                    <span className="font-bold text-[#C65332]">
                      {confirmedBooking.department}
                    </span>
                  </div>

                  <div>
                    <span className="text-[#808A96] block text-[11px] uppercase font-bold">
                      Consultant Specialist:
                    </span>
                    <span className="font-bold text-[#252B33]">
                      {confirmedBooking.doctor}
                    </span>
                  </div>

                  <div>
                    <span className="text-[#808A96] block text-[11px] uppercase font-bold">
                      Preferred Date:
                    </span>
                    <span className="font-bold text-[#252B33]">
                      {confirmedBooking.date}
                    </span>
                  </div>

                  <div>
                    <span className="text-[#808A96] block text-[11px] uppercase font-bold">
                      Time Slot:
                    </span>
                    <span className="font-bold text-[#252B33]">
                      {confirmedBooking.timeSlot}
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#FCECE2] border border-[#F0D9CB] text-xs text-[#252B33] space-y-1">
                  <span className="font-bold block">Next Steps for Consultation:</span>
                  <p className="text-[#59616B]">
                    Please arrive 15 minutes before your slot at Surya Hospital, Sai Nagar, Anantapur. Carry previous prescriptions or diagnostic reports if available.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a href={`tel:${HOSPITAL_INFO.phoneRaw}`}>
                    <Button variant="primary" size="md" icon={PhoneCall} className="bg-[#C65332] hover:bg-[#A84328] text-white">
                      Confirm by Phone: {HOSPITAL_INFO.phone}
                    </Button>
                  </a>
                  <Button
                    variant="outline"
                    size="md"
                    className="border-[#F0D9CB] text-[#252B33] hover:bg-[#FCECE2]"
                    onClick={() => setConfirmedBooking(null)}
                  >
                    Submit Another Request
                  </Button>
                  <Link to="/">
                    <Button variant="ghost" size="md">
                      Back to Home
                    </Button>
                  </Link>
                </div>
              </div>
            ) : (
              /* Appointment Form */
              <div className="bg-white rounded-2xl border border-[#F0D9CB] p-6 sm:p-10 shadow-sm text-left">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Section 1: Patient Information */}
                  <div className="space-y-4">
                    <h3 className="text-base font-bold text-[#252B33] border-b border-[#F0D9CB] pb-2">
                      1. Patient Contact Information
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Patient Name */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-[#252B33]">
                          Patient Full Name <span className="text-[#C65332]">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Ananya Rao"
                          value={formData.patientName}
                          onChange={(e) =>
                            setFormData({ ...formData, patientName: e.target.value })
                          }
                          className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border bg-white text-[#252B33] placeholder-[#808A96] focus:outline-none transition ${
                            errors.patientName
                              ? "border-red-400 ring-1 ring-red-300"
                              : "border-[#F0D9CB] focus:border-[#C65332]"
                          }`}
                        />
                        {errors.patientName && (
                          <p className="text-[11px] text-red-500">{errors.patientName}</p>
                        )}
                      </div>

                      {/* Phone */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-[#252B33]">
                          Mobile Phone Number <span className="text-[#C65332]">*</span>
                        </label>
                        <input
                          type="tel"
                          placeholder="e.g. 9876543210"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border bg-white text-[#252B33] placeholder-[#808A96] focus:outline-none transition ${
                            errors.phone
                              ? "border-red-400 ring-1 ring-red-300"
                              : "border-[#F0D9CB] focus:border-[#C65332]"
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-[11px] text-red-500">{errors.phone}</p>
                        )}
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#252B33]">
                        Email Address <span className="text-[#808A96] font-normal">(Optional for confirmation receipt)</span>
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. patient@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border bg-white text-[#252B33] placeholder-[#808A96] focus:outline-none transition ${
                          errors.email
                            ? "border-red-400 ring-1 ring-red-300"
                            : "border-[#F0D9CB] focus:border-[#C65332]"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-500">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Section 2: Clinical Department & Doctor */}
                  <div className="space-y-4 pt-2">
                    <h3 className="text-base font-bold text-[#252B33] border-b border-[#F0D9CB] pb-2">
                      2. Department & Doctor Preference
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Department */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-[#252B33]">
                          Clinical Department <span className="text-[#C65332]">*</span>
                        </label>
                        <select
                          value={formData.department}
                          onChange={(e) =>
                            setFormData({ ...formData, department: e.target.value })
                          }
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-[#F0D9CB] bg-white text-[#252B33] focus:outline-none focus:border-[#C65332]"
                        >
                          {departmentOptions.map((dept) => (
                            <option key={dept} value={dept}>
                              {dept}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Doctor */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-[#252B33]">
                          Preferred Doctor <span className="text-[#808A96] font-normal">(Optional)</span>
                        </label>
                        <select
                          value={formData.preferredDoctor}
                          onChange={(e) =>
                            setFormData({ ...formData, preferredDoctor: e.target.value })
                          }
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-[#F0D9CB] bg-white text-[#252B33] focus:outline-none focus:border-[#C65332]"
                        >
                          <option value="">Any Available Specialist</option>
                          {HOSPITAL_INFO.doctors.map((doc) => (
                            <option key={doc.id} value={doc.name}>
                              {doc.name} — {doc.department}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Section 3: Date & Slot */}
                  <div className="space-y-4 pt-2">
                    <h3 className="text-base font-bold text-[#252B33] border-b border-[#F0D9CB] pb-2">
                      3. Date & Time Selection
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Preferred Date (Min = today) */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-[#252B33]">
                          Preferred Date <span className="text-[#C65332]">*</span>
                        </label>
                        <input
                          type="date"
                          min={todayStr}
                          value={formData.preferredDate}
                          onChange={(e) =>
                            setFormData({ ...formData, preferredDate: e.target.value })
                          }
                          className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border bg-white text-[#252B33] focus:outline-none transition ${
                            errors.preferredDate
                              ? "border-red-400 ring-1 ring-red-300"
                              : "border-[#F0D9CB] focus:border-[#C65332]"
                          }`}
                        />
                        {errors.preferredDate && (
                          <p className="text-[11px] text-red-500">{errors.preferredDate}</p>
                        )}
                        <span className="text-[10px] text-[#808A96] block">
                          Past dates are disabled.
                        </span>
                      </div>

                      {/* Preferred Time Slot */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-[#252B33]">
                          Preferred Time Slot <span className="text-[#C65332]">*</span>
                        </label>
                        <select
                          value={formData.preferredTime}
                          onChange={(e) =>
                            setFormData({ ...formData, preferredTime: e.target.value })
                          }
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-[#F0D9CB] bg-white text-[#252B33] focus:outline-none focus:border-[#C65332]"
                        >
                          {timeSlots.map((slot) => (
                            <option key={slot} value={slot}>
                              {slot}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Reason */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#252B33]">
                        Reason for Visit / Symptoms <span className="text-[#808A96] font-normal">(Optional)</span>
                      </label>
                      <textarea
                        rows={3}
                        placeholder="e.g. Routine consultation, post-surgical follow-up, abdominal checkup..."
                        value={formData.reason}
                        onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-[#F0D9CB] bg-white text-[#252B33] focus:outline-none focus:border-[#C65332] placeholder-[#808A96]"
                      />
                    </div>

                    {/* Consent */}
                    <div className="space-y-1 pt-1">
                      <label className="flex items-start gap-2 text-xs text-[#59616B] cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.consent}
                          onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                          className="mt-0.5 rounded text-[#C65332] focus:ring-[#C65332]"
                        />
                        <span>
                          I acknowledge this is an appointment request subject to verification by Surya Hospital reception staff, and consent to receiving call/SMS confirmation.
                        </span>
                      </label>
                      {errors.consent && (
                        <p className="text-[11px] text-red-500">{errors.consent}</p>
                      )}
                    </div>
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-4 border-t border-[#F0D9CB]">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={isSubmitting}
                      icon={isSubmitting ? Loader2 : Calendar}
                      fullWidth
                      className="bg-[#C65332] hover:bg-[#A84328] text-white font-bold py-3.5 text-base shadow-sm"
                    >
                      {isSubmitting ? "Processing Request..." : "Submit Appointment Request"}
                    </Button>
                  </div>
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

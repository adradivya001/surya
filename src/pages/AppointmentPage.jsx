import React, { useState, useEffect } from "react";
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
  const initialDoctor = searchParams.get("doctor") || "";
  const initialDept = searchParams.get("dept") || "General Medicine (Physician)";

  const [formData, setFormData] = useState({
    patientName: "",
    phone: "",
    email: "",
    department: initialDept,
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
              /* Appointment Form */
              <div className="bg-white rounded-2xl border border-[#E9D8CE] p-5 sm:p-8 md:p-10 shadow-sm text-left">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Section 1: Patient Information */}
                  <div className="space-y-4">
                    <h3 className="text-base font-bold text-[#C63D1B] border-b border-[#F0E2D9] pb-2">
                      1. Patient Details
                    </h3>

                    <div className="input-row-half">
                      {/* Patient Name */}
                      <div className="space-y-1">
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
                          className={`w-full px-3.5 py-3 text-base sm:text-sm rounded-lg border bg-white text-[#262626] placeholder-[#756860] focus:outline-none transition ${
                            errors.patientName
                              ? "border-red-400 ring-1 ring-red-300"
                              : "border-[#E9D8CE] focus:border-[#E94B1C] focus:ring-1 focus:ring-[#E94B1C]"
                          }`}
                        />
                        {errors.patientName && (
                          <p className="text-[11px] text-red-500">{errors.patientName}</p>
                        )}
                      </div>

                      {/* Phone */}
                      <div className="space-y-1">
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
                          className={`w-full px-3.5 py-3 text-base sm:text-sm rounded-lg border bg-white text-[#262626] placeholder-[#756860] focus:outline-none transition ${
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

                    {/* Email */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#262626]">
                        Email Address <span className="text-[#756860] font-normal">(Optional)</span>
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. patient@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className={`w-full px-3.5 py-3 text-base sm:text-sm rounded-lg border bg-white text-[#262626] placeholder-[#756860] focus:outline-none transition ${
                          errors.email
                            ? "border-red-400 ring-1 ring-red-300"
                            : "border-[#E9D8CE] focus:border-[#E94B1C] focus:ring-1 focus:ring-[#E94B1C]"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-500">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Section 2: Clinical Department & Doctor */}
                  <div className="space-y-4 pt-2">
                    <h3 className="text-base font-bold text-[#C63D1B] border-b border-[#F0E2D9] pb-2">
                      2. Care Department & Doctor
                    </h3>

                    <div className="input-row-half">
                      {/* Department */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-[#262626]">
                          Choose Department <span className="text-[#E94B1C]">*</span>
                        </label>
                        <select
                          value={formData.department}
                          onChange={(e) =>
                            setFormData({ ...formData, department: e.target.value })
                          }
                          className="w-full px-3.5 py-3 text-base sm:text-sm rounded-lg border border-[#E9D8CE] bg-white text-[#262626] focus:outline-none focus:border-[#E94B1C] focus:ring-1 focus:ring-[#E94B1C]"
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
                        <label className="text-xs font-bold text-[#262626]">
                          Choose Doctor <span className="text-[#756860] font-normal">(Optional)</span>
                        </label>
                        <select
                          value={formData.preferredDoctor}
                          onChange={(e) =>
                            setFormData({ ...formData, preferredDoctor: e.target.value })
                          }
                          className="w-full px-3.5 py-3 text-base sm:text-sm rounded-lg border border-[#E9D8CE] bg-white text-[#262626] focus:outline-none focus:border-[#E94B1C] focus:ring-1 focus:ring-[#E94B1C]"
                        >
                          <option value="">Any Available Doctor</option>
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
                    <h3 className="text-base font-bold text-[#C63D1B] border-b border-[#F0E2D9] pb-2">
                      3. Date & Visiting Time
                    </h3>

                    <div className="datetime-selection-grid">
                      {/* Preferred Date (Min = today) */}
                      <div className="space-y-1">
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
                          className={`w-full px-3.5 py-3 text-base sm:text-sm rounded-lg border bg-white text-[#262626] focus:outline-none transition ${
                            errors.preferredDate
                              ? "border-red-400 ring-1 ring-red-300"
                              : "border-[#E9D8CE] focus:border-[#E94B1C] focus:ring-1 focus:ring-[#E94B1C]"
                          }`}
                        />
                        {errors.preferredDate && (
                          <p className="text-[11px] text-red-500">{errors.preferredDate}</p>
                        )}
                        <span className="text-[10px] text-[#756860] block">
                          Please select today or an upcoming date.
                        </span>
                      </div>

                      {/* Preferred Time Slot */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-[#262626]">
                          Preferred Time of Day <span className="text-[#E94B1C]">*</span>
                        </label>
                        <select
                          value={formData.preferredTime}
                          onChange={(e) =>
                            setFormData({ ...formData, preferredTime: e.target.value })
                          }
                          className="w-full px-3.5 py-3 text-base sm:text-sm rounded-lg border border-[#E9D8CE] bg-white text-[#262626] focus:outline-none focus:border-[#E94B1C] focus:ring-1 focus:ring-[#E94B1C]"
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
                      <label className="text-xs font-bold text-[#262626]">
                        Main Health Concern or Symptoms <span className="text-[#756860] font-normal">(Optional)</span>
                      </label>
                      <textarea
                        rows={3}
                        placeholder="e.g. Fever checkup, diabetes review, knee pain, stomach ache, piles consultation..."
                        value={formData.reason}
                        onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                        className="w-full px-3.5 py-3 text-base sm:text-sm rounded-lg border border-[#E9D8CE] bg-white text-[#262626] focus:outline-none focus:border-[#E94B1C] focus:ring-1 focus:ring-[#E94B1C] placeholder-[#756860]"
                      />
                    </div>

                    {/* Consent */}
                    <div className="space-y-1 pt-1">
                      <label className="flex items-start gap-2 text-xs text-[#756860] cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.consent}
                          onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
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

                  {/* Submit CTA */}
                  <div className="pt-4 border-t border-[#F0E2D9]">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={isSubmitting}
                      icon={isSubmitting ? Loader2 : Calendar}
                      fullWidth
                      className="bg-[#E94B1C] hover:bg-[#A83218] text-white font-bold py-4 text-base shadow-sm rounded-full"
                    >
                      {isSubmitting ? "Sending Your Request..." : "Request Appointment Time"}
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

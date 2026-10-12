import React, { useState, useEffect } from "react";
import { Container } from "../components/ui/Container";
import { PageHero } from "../components/ui/PageHero";
import { Button } from "../components/ui/Button";
import {
  MapPin,
  Phone,
  Clock,
  ExternalLink,
  Send,
  CheckCircle2,
  PhoneCall,
  Loader2,
} from "lucide-react";
import { HOSPITAL_INFO } from "../constants/hospitalData";

export function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    category: "General Enquiry",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(null);

  useEffect(() => {
    document.title = "Contact & Directions | Surya Hospital, Sai Nagar, Anantapur";
  }, []);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errs.fullName = "Please enter your full name (at least 2 characters).";
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

    if (!formData.message.trim() || formData.message.trim().length < 6) {
      errs.message = "Please enter your query or message (at least 6 characters).";
    }

    if (!formData.consent) {
      errs.consent = "You must agree to allow Surya Hospital staff to contact you regarding this enquiry.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionSuccess({
        id: `ENQ-${Math.floor(100000 + Math.random() * 900000)}`,
        name: formData.fullName,
        phone: formData.phone,
        category: formData.category,
      });
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        category: "General Enquiry",
        message: "",
        consent: false,
      });
      setErrors({});
    }, 800);
  };

  return (
    <div className="w-full">
      {/* Page Hero */}
      <PageHero
        eyebrow="HOSPITAL DESK & DIRECTIONS"
        title="Contact Surya Hospital"
        description="Reach out to our administrative desk, enquire about outpatient doctor schedules, or visit our hospital located in Sai Nagar, Anantapur."
        breadcrumbs={[{ label: "Contact" }]}
        badge="Sai Nagar, Anantapur"
      >
        <a href={`tel:${HOSPITAL_INFO.phoneRaw}`}>
          <Button variant="primary" size="sm" icon={PhoneCall} className="bg-[#C65332] hover:bg-[#A84328] text-white">
            Call Reception: {HOSPITAL_INFO.phone}
          </Button>
        </a>
        <a href={HOSPITAL_INFO.mapsUrl} target="_blank" rel="noopener noreferrer">
          <Button variant="secondary" size="sm" icon={ExternalLink} className="bg-white border-[#F0D9CB] text-[#252B33] hover:bg-[#FCECE2]">
            Get Google Maps Directions
          </Button>
        </a>
      </PageHero>

      <section className="py-12 md:py-16 bg-white border-b border-[#F0D9CB]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Contact Cards & Info (5 cols) */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#B96645]">
                  HOSPITAL DETAILS
                </span>
                <h2 className="text-2xl font-extrabold text-[#252B33] tracking-tight">
                  Reach Us Directly
                </h2>
                <p className="text-xs sm:text-sm text-[#59616B] leading-relaxed">
                  For immediate appointments, acute admissions, or urgent medical queries, direct telephone calls are prioritized by our front desk.
                </p>
              </div>

              {/* Verified Contact Cards */}
              <div className="space-y-3.5">
                <div className="p-4 rounded-xl border border-[#F0D9CB] bg-white flex items-start gap-3.5 shadow-2xs">
                  <div className="w-10 h-10 rounded-lg bg-[#F6D8C5] text-[#C65332] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="text-xs space-y-0.5">
                    <span className="font-bold text-[#252B33] block text-sm">
                      Hospital Address
                    </span>
                    <p className="text-[#59616B] leading-relaxed">
                      {HOSPITAL_INFO.fullAddress}
                    </p>
                    <span className="text-[11px] text-[#808A96] block pt-1">
                      Landmark: {HOSPITAL_INFO.landmark}
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-[#F0D9CB] bg-white flex items-start gap-3.5 shadow-2xs">
                  <div className="w-10 h-10 rounded-lg bg-[#F6D8C5] text-[#C65332] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="text-xs space-y-1">
                    <span className="font-bold text-[#252B33] block text-sm">
                      Telephone Helpline
                    </span>
                    <div>
                      Emergency & Reception:{" "}
                      <a
                        href={`tel:${HOSPITAL_INFO.phoneRaw}`}
                        className="font-bold text-[#252B33] hover:text-[#C65332] underline"
                      >
                        {HOSPITAL_INFO.phone}
                      </a>
                    </div>
                    <span className="text-[11px] text-[#808A96] block">
                      Operational 24 Hours / 7 Days a Week
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-[#F0D9CB] bg-white flex items-start gap-3.5 shadow-2xs">
                  <div className="w-10 h-10 rounded-lg bg-[#F6D8C5] text-[#C65332] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="text-xs space-y-1">
                    <span className="font-bold text-[#252B33] block text-sm">
                      Consultation & OPD Timings
                    </span>
                    <p className="text-[#59616B]">
                      Morning: 09:00 AM – 02:00 PM
                      <br />
                      Evening: 05:00 PM – 09:00 PM
                    </p>
                    <span className="text-[11px] text-[#C65332] font-semibold block">
                      Emergency & Trauma Care: Always Open (24/7)
                    </span>
                  </div>
                </div>
              </div>

              {/* Call-out Button */}
              <a
                href={`tel:${HOSPITAL_INFO.phoneRaw}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold bg-[#C65332] hover:bg-[#A84328] text-white shadow-sm transition"
              >
                <PhoneCall className="w-4 h-4 animate-pulse" />
                <span>Call Hospital Directly: {HOSPITAL_INFO.phone}</span>
              </a>
            </div>

            {/* Right Column: Enquiry Form (7 cols) */}
            <div className="lg:col-span-7 bg-[#FFF8F2] p-4 sm:p-6 md:p-8 rounded-2xl border border-[#F0D9CB] shadow-2xs text-left">
              <div className="space-y-1 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#B96645]">
                  GENERAL INQUIRY DESK
                </span>
                <h3 className="text-xl font-bold text-[#252B33]">
                  Send a Message to Our Reception Team
                </h3>
                <p className="text-xs text-[#59616B]">
                  Please do not use this form for acute emergencies. In an emergency, call {HOSPITAL_INFO.phone} immediately.
                </p>
              </div>

              {/* Success Notification */}
              {submissionSuccess && (
                <div className="mb-6 p-4 rounded-xl bg-green-50 border border-green-200 text-xs text-green-900 space-y-1.5 animate-fadeIn">
                  <div className="flex items-center gap-2 font-bold text-green-950 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                    <span>Enquiry Received (Demonstration Flow)</span>
                  </div>
                  <p>
                    Thank you, <strong>{submissionSuccess.name}</strong>. Reference ID: <strong>{submissionSuccess.id}</strong>.
                  </p>
                  <p className="text-green-800 text-[11px]">
                    This form demonstrates verified input handling. For actual immediate hospital coordination, please call reception at <strong>{HOSPITAL_INFO.phone}</strong>.
                  </p>
                  <button
                    onClick={() => setSubmissionSuccess(null)}
                    className="text-xs font-bold text-green-700 underline mt-1 cursor-pointer"
                  >
                    Send another query
                  </button>
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#252B33]">
                      Full Name <span className="text-[#C65332]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border bg-white text-[#252B33] placeholder-[#808A96] focus:outline-none transition ${
                        errors.fullName
                          ? "border-red-400 ring-1 ring-red-300"
                          : "border-[#F0D9CB] focus:border-[#C65332]"
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-red-500">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#252B33]">
                      Phone Number <span className="text-[#C65332]">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#252B33]">
                      Email Address <span className="text-[#808A96] font-normal">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. patient@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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

                  {/* Category */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#252B33]">
                      Enquiry Category <span className="text-[#C65332]">*</span>
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-[#F0D9CB] bg-white text-[#252B33] focus:outline-none focus:border-[#C65332]"
                    >
                      <option value="General Enquiry">General Enquiry</option>
                      <option value="Doctor Availability & OPD">Doctor Availability & OPD</option>
                      <option value="Surgical / Treatment Info">Surgical / Treatment Info</option>
                      <option value="Diagnostic Laboratory & Imaging">Diagnostic Laboratory & Imaging</option>
                      <option value="Inpatient Admission / Room Query">Inpatient Admission / Room Query</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#252B33]">
                    Message / Question <span className="text-[#C65332]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Briefly describe your enquiry or requirement..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border bg-white text-[#252B33] placeholder-[#808A96] focus:outline-none transition ${
                      errors.message
                        ? "border-red-400 ring-1 ring-red-300"
                        : "border-[#F0D9CB] focus:border-[#C65332]"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-red-500">{errors.message}</p>
                  )}
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
                      I consent to Surya Hospital contacting me at the phone number provided regarding this enquiry.
                    </span>
                  </label>
                  {errors.consent && (
                    <p className="text-[11px] text-red-500">{errors.consent}</p>
                  )}
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    disabled={isSubmitting}
                    icon={isSubmitting ? Loader2 : Send}
                    className="w-full bg-[#C65332] hover:bg-[#A84328] text-white font-bold py-2.5"
                  >
                    {isSubmitting ? "Submitting Enquiry..." : "Submit Enquiry"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </section>

      {/* Google Maps Embed Section */}
      <section className="py-12 bg-[#FFF8F2] border-b border-[#F0D9CB]">
        <Container>
          <div className="space-y-4 text-left">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#B96645]">
                  CAMPUS MAP
                </span>
                <h3 className="text-xl font-bold text-[#252B33]">
                  Interactive Google Map
                </h3>
              </div>
              <a
                href={HOSPITAL_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C65332] hover:underline"
              >
                <span>Open in Full Screen Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="h-80 sm:h-96 rounded-2xl overflow-hidden border border-[#F0D9CB] shadow-sm bg-white">
              <iframe
                title="Surya Hospital Sai Nagar Anantapur Location Map"
                src={HOSPITAL_INFO.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
export default ContactPage;

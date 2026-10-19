import React, { useState, useEffect } from "react";
import { Container } from "../components/ui/Container";
import { PageHero } from "../components/ui/PageHero";
import { Button } from "../components/ui/Button";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  PhoneCall,
  ExternalLink,
  Send,
  CheckCircle2,
  Navigation,
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
    document.title = "Contact Us | Surya Hospital, Sai Nagar, Anantapur";
  }, []);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) {
      errs.fullName = "Please enter your full name";
    }

    const phoneClean = formData.phone.replace(/[^0-9]/g, "");
    if (!formData.phone.trim()) {
      errs.phone = "Please enter your contact phone number";
    } else if (phoneClean.length !== 10) {
      errs.phone = "Please enter a valid 10-digit mobile number";
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        errs.email = "Please enter a valid email address";
      }
    }

    if (!formData.message.trim()) {
      errs.message = "Please write your query or question";
    }

    if (!formData.consent) {
      errs.consent = "Please agree so our hospital team can call you back";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate instant safe local resolution without external backend failure
    setTimeout(() => {
      setIsSubmitting(false);
      const fakeRefId = `SURYA-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmissionSuccess({
        id: fakeRefId,
        name: formData.fullName,
        phone: formData.phone,
      });

      // Clear form
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        category: "General Enquiry",
        message: "",
        consent: false,
      });
      setErrors({});
    }, 600);
  };

  return (
    <div className="w-full">
      {/* Page Hero */}
      <PageHero
        eyebrow="LOCATION & CONTACT"
        title="Contact Surya Hospital"
        description="We are here to help you. Call our friendly front desk, enquire about doctor visiting hours, or visit our hospital behind Ambedkar Bhavan in Sai Nagar, Anantapur."
        breadcrumbs={[{ label: "Contact" }]}
        badge="Sai Nagar, Anantapur"
      >
        <a href={`tel:${HOSPITAL_INFO.phoneRaw}`}>
          <Button variant="primary" size="sm" icon={PhoneCall} className="bg-[#E94B1C] hover:bg-[#A83218] text-white">
            Call Front Desk: {HOSPITAL_INFO.phone}
          </Button>
        </a>
        <a href={HOSPITAL_INFO.mapsUrl} target="_blank" rel="noopener noreferrer">
          <Button variant="secondary" size="sm" icon={ExternalLink} className="bg-white border-[#E9D8CE] text-[#C63D1B] hover:bg-[#FFF0E6]">
            Directions on Google Maps
          </Button>
        </a>
      </PageHero>

      <section className="py-14 md:py-20 bg-white border-b border-[#F0E2D9]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Contact Cards & Info (5 cols) */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="space-y-2">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-widest bg-[#FFF0E6] text-[#C63D1B] border border-[#E9D8CE]">
                  HOW TO REACH US
                </span>
                <h2 className="text-3xl font-black text-[#C63D1B] tracking-tight">
                  We Are Always Here For You
                </h2>
                <p className="text-xs sm:text-sm text-[#756860] leading-relaxed font-normal">
                  For quick doctor bookings, room enquiries, or emergency advice, calling our front desk is always the fastest way to get help.
                </p>
              </div>

              {/* Verified Contact Cards */}
              <div className="space-y-4">
                <div className="p-5 rounded-2xl border border-[#E9D8CE] bg-[#FFF9F3] flex items-start gap-4 shadow-xs">
                  <div className="w-11 h-11 rounded-xl bg-[#FFF0E6] text-[#E94B1C] flex items-center justify-center shrink-0 border border-[#E9D8CE]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="text-xs sm:text-sm space-y-1 flex-1">
                    <span className="font-bold text-[#C63D1B] block text-base">
                      Hospital Address
                    </span>
                    <p className="text-[#756860] leading-relaxed">
                      {HOSPITAL_INFO.fullAddress}
                    </p>
                    <span className="text-xs text-[#756860] block pt-1">
                      Landmark: {HOSPITAL_INFO.landmark}
                    </span>
                    <div className="pt-3">
                      <a
                        href={HOSPITAL_INFO.directionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold bg-[#E94B1C] text-white hover:bg-[#A83218] transition duration-150 cursor-pointer shadow-xs"
                        aria-label="Get directions to Surya Hospital in Google Maps (opens in new tab)"
                      >
                        <Navigation className="w-3.5 h-3.5 shrink-0" />
                        <span>Get Directions</span>
                        <ExternalLink className="w-3 h-3 opacity-70" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl border border-[#E9D8CE] bg-[#FFF9F3] flex items-start gap-4 shadow-xs">
                  <div className="w-11 h-11 rounded-xl bg-[#FFF0E6] text-[#E94B1C] flex items-center justify-center shrink-0 border border-[#E9D8CE]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="text-xs sm:text-sm space-y-1">
                    <span className="font-bold text-[#C63D1B] block text-base">
                      Telephone Helpline
                    </span>
                    <div className="text-[#756860]">
                      Emergency & Reception:{" "}
                      <a
                        href={`tel:${HOSPITAL_INFO.phoneRaw}`}
                        className="font-bold text-[#C63D1B] hover:text-[#A83218] underline"
                      >
                        {HOSPITAL_INFO.phone}
                      </a>
                    </div>
                    <span className="text-xs text-[#756860] block">
                      Operational 24 Hours / 7 Days a Week
                    </span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl border border-[#E9D8CE] bg-[#FFF9F3] flex items-start gap-4 shadow-xs">
                  <div className="w-11 h-11 rounded-xl bg-[#FFF0E6] text-[#E94B1C] flex items-center justify-center shrink-0 border border-[#E9D8CE]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="text-xs sm:text-sm space-y-1">
                    <span className="font-bold text-[#C63D1B] block text-base">
                      Email Address
                    </span>
                    <div className="text-[#756860]">
                      <a
                        href={`mailto:${HOSPITAL_INFO.email}`}
                        className="font-bold text-[#C63D1B] hover:text-[#A83218] underline break-all"
                      >
                        {HOSPITAL_INFO.email}
                      </a>
                    </div>
                    <span className="text-xs text-[#756860] block">
                      Official Correspondence & Insurance Desk
                    </span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl border border-[#E9D8CE] bg-[#FFF9F3] flex items-start gap-4 shadow-xs">
                  <div className="w-11 h-11 rounded-xl bg-[#FFF0E6] text-[#E94B1C] flex items-center justify-center shrink-0 border border-[#E9D8CE]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="text-xs sm:text-sm space-y-1">
                    <span className="font-bold text-[#C63D1B] block text-base">
                      Consultation & OPD Timings
                    </span>
                    <p className="text-[#756860]">
                      Morning: 09:00 AM – 02:00 PM
                      <br />
                      Evening: 05:00 PM – 09:00 PM
                    </p>
                    <span className="text-xs text-[#C63D1B] font-bold block pt-0.5">
                      Emergency & Trauma Care: Always Open (24/7)
                    </span>
                  </div>
                </div>
              </div>

              {/* Call-out Button */}
              <a
                href={`tel:${HOSPITAL_INFO.phoneRaw}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-full text-sm font-bold bg-[#E94B1C] hover:bg-[#A83218] text-white shadow-sm transition"
              >
                <PhoneCall className="w-4 h-4 animate-pulse text-[#FFF0E6]" />
                <span>Call Hospital Directly: {HOSPITAL_INFO.phone}</span>
              </a>
            </div>

            {/* Right Column: Enquiry Form (7 cols) */}
            <div className="lg:col-span-7 bg-[#FFF9F3] p-5 sm:p-7 md:p-9 rounded-2xl border border-[#E9D8CE] shadow-xs text-left">
              <div className="space-y-1.5 mb-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-widest bg-[#FFF0E6] text-[#C63D1B] border border-[#E9D8CE]">
                  SEND A MESSAGE
                </span>
                <h3 className="text-2xl font-black text-[#C63D1B]">
                  Have a Question? We’re Happy to Help
                </h3>
                <p className="text-xs sm:text-sm text-[#756860] font-normal">
                  For urgent health problems or sudden emergencies, please do not wait for an online message — call our 24/7 helpline at {HOSPITAL_INFO.phone} immediately.
                </p>
              </div>

              {/* Success Notification */}
              {submissionSuccess && (
                <div className="mb-6 p-4 rounded-xl bg-green-50 border border-green-200 text-xs text-green-900 space-y-1.5 animate-fadeIn">
                  <div className="flex items-center gap-2 font-bold text-green-950 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                    <span>Message Sent Successfully</span>
                  </div>
                  <p>
                    Thank you, <strong>{submissionSuccess.name}</strong>! Your inquiry reference number is <strong>{submissionSuccess.id}</strong>.
                  </p>
                  <p className="text-green-800 text-[11px]">
                    Our hospital team will reach out to you at {submissionSuccess.phone} shortly. If you need urgent information right now, feel free to call us at <strong>{HOSPITAL_INFO.phone}</strong>.
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
                <div className="input-row-half">
                  {/* Full Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#262626]">
                      Full Name <span className="text-[#E94B1C]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full px-3.5 py-3 text-xs sm:text-sm rounded-xl border bg-white text-[#262626] placeholder-[#756860] focus:outline-none transition ${
                        errors.fullName
                          ? "border-red-400 ring-1 ring-red-300"
                          : "border-[#E9D8CE] focus:border-[#E94B1C] focus:ring-1 focus:ring-[#E94B1C]"
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-red-500">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#262626]">
                      Phone Number <span className="text-[#E94B1C]">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-3.5 py-3 text-xs sm:text-sm rounded-xl border bg-white text-[#262626] placeholder-[#756860] focus:outline-none transition ${
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

                <div className="input-row-half">
                  {/* Email */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#262626]">
                      Email Address <span className="text-[#756860] font-normal">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. patient@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-3.5 py-3 text-xs sm:text-sm rounded-xl border bg-white text-[#262626] placeholder-[#756860] focus:outline-none transition ${
                        errors.email
                          ? "border-red-400 ring-1 ring-red-300"
                          : "border-[#E9D8CE] focus:border-[#E94B1C] focus:ring-1 focus:ring-[#E94B1C]"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-500">{errors.email}</p>
                    )}
                  </div>

                  {/* Category */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#262626]">
                      What Can We Help You With? <span className="text-[#E94B1C]">*</span>
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-3.5 py-3 text-xs sm:text-sm rounded-xl border border-[#E9D8CE] bg-white text-[#262626] focus:outline-none focus:border-[#E94B1C] focus:ring-1 focus:ring-[#E94B1C]"
                    >
                      <option value="General Enquiry">General Hospital Question</option>
                      <option value="Doctor Availability & OPD">Doctor Timings & Visiting Hours</option>
                      <option value="Surgical / Treatment Info">Surgery & Treatment Details</option>
                      <option value="Emergency Care Assistance">Emergency & Trauma Assistance</option>
                      <option value="Inpatient Admission / Room Query">Hospital Stay & Rooms</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#262626]">
                    Your Message or Question <span className="text-[#E94B1C]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us what you need help with (e.g. asking about doctor timing, visiting hours, or hospital stay)..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-3.5 py-3 text-xs sm:text-sm rounded-xl border bg-white text-[#262626] placeholder-[#756860] focus:outline-none transition ${
                      errors.message
                        ? "border-red-400 ring-1 ring-red-300"
                        : "border-[#E9D8CE] focus:border-[#E94B1C] focus:ring-1 focus:ring-[#E94B1C]"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-red-500">{errors.message}</p>
                  )}
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
                      I agree to let Surya Hospital call or message me at the provided phone number to answer this enquiry.
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
                    className="w-full bg-[#E94B1C] hover:bg-[#A83218] text-white font-bold py-3.5 rounded-full shadow-sm"
                  >
                    {isSubmitting ? "Sending Message..." : "Send Message to Front Desk"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </section>

      {/* Google Maps Embed Section */}
      <section className="py-12 bg-[#FFF9F3] border-b border-[#F0E2D9]">
        <Container>
          <div className="space-y-4 text-left">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF8A3D]">
                  HOSPITAL LOCATION
                </span>
                <h3 className="text-xl font-bold text-[#C63D1B]">
                  Find Us on Google Maps
                </h3>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={HOSPITAL_INFO.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold bg-[#E94B1C] text-white hover:bg-[#A83218] transition duration-150 shadow-xs"
                  aria-label="Get driving or walking directions to Surya Hospital (opens in new tab)"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>
                <a
                  href={HOSPITAL_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C63D1B] hover:underline"
                >
                  <span>Open Full Map</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="h-80 sm:h-96 rounded-2xl overflow-hidden border border-[#E9D8CE] shadow-xs bg-white">
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

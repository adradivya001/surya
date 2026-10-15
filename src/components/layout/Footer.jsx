import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../ui/Container";
import { Phone, MapPin, Clock, Calendar } from "lucide-react";
import { HOSPITAL_INFO } from "../../constants/hospitalData";
import "./Footer.css";

export function Footer() {
  const departmentsCol1 = [
    { name: "General Medicine", path: "/specialities" },
    { name: "Pediatrics & Child Care", path: "/specialities" },
    { name: "Laparoscopic Care", path: "/specialities" },
    { name: "Cardiology Consults", path: "/specialities" },
    { name: "Diabetology", path: "/specialities" },
  ];

  const departmentsCol2 = [
    { name: "OBG & Maternity", path: "/specialities" },
    { name: "General Surgery", path: "/specialities" },
    { name: "Ortho & Joints", path: "/specialities" },
    { name: "ENT Clinic", path: "/specialities" },
    { name: "Trauma & Casualty", path: "/emergency" },
  ];

  const facilities = [
    { name: "24/7 Casualty & Emergency", path: "/emergency" },
    { name: "Sterile Operation Theatres", path: "/specialities" },
    { name: "Laparoscopic Surgical Unit", path: "/specialities" },
    { name: "Inpatient Patient Rooms", path: "/about" },
    { name: "24/7 On-Site Pharmacy", path: "/contact" },
  ];

  return (
    <>
      <footer className="ref-footer">
        {/* Main Footer Directory */}
        <Container className="pt-14 pb-10">
          <div className="footer-directory-grid">
            {/* Column 1: Brand & Contact Info */}
            <div className="footer-col space-y-4">
              <Link to="/" className="inline-flex items-center gap-2 group">
                <img
                  src="/images/surya-hospital-orange-emblem-logo.png"
                  alt="Surya Hospital Logo"
                  className="h-14 sm:h-16 w-auto object-contain brightness-105"
                  onError={(e) => {
                    e.currentTarget.src = "/images/surya-hospital-logo.png";
                  }}
                />
              </Link>

              <p className="text-[13px] text-[#8E9CAE] leading-relaxed pr-2">
                Trusted multi-speciality hospital in Sai Nagar, Anantapur providing expert doctor consultations, surgeries, and 24/7 care.
              </p>

              <div className="space-y-2 pt-2 text-[13px] text-[#8E9CAE] w-full">
                <div className="footer-contact-row flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#B69A65] shrink-0" />
                  <span>
                    Helpline:{" "}
                    <a
                      href={`tel:${HOSPITAL_INFO.phoneRaw}`}
                      className="text-white font-semibold hover:text-[#B69A65] transition"
                    >
                      {HOSPITAL_INFO.phone}
                    </a>
                  </span>
                </div>

                <div className="footer-contact-row flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#B69A65] shrink-0" />
                  <span>
                    Emergency:{" "}
                    <a
                      href={`tel:${HOSPITAL_INFO.phoneRaw}`}
                      className="text-white font-semibold hover:text-[#B69A65] transition"
                    >
                      {HOSPITAL_INFO.phone}
                    </a>
                  </span>
                </div>
              </div>
            </div>

            {/* Column 2: Doctor Departments */}
            <div className="footer-col space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                DOCTOR DEPARTMENTS
              </h4>

              <div className="footer-items-grid grid grid-cols-2 gap-x-4 gap-y-2.5 text-[13px] text-[#8E9CAE]">
                <div className="space-y-2.5">
                  {departmentsCol1.map((item) => (
                    <div key={item.name}>
                      <Link
                        to={item.path}
                        className="hover:text-white transition block leading-snug"
                      >
                        {item.name}
                      </Link>
                    </div>
                  ))}
                </div>

                <div className="space-y-2.5">
                  {departmentsCol2.map((item) => (
                    <div key={item.name}>
                      <Link
                        to={item.path}
                        className="hover:text-white transition block leading-snug"
                      >
                        {item.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 3: Hospital Facilities */}
            <div className="footer-col space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                HOSPITAL FACILITIES
              </h4>

              <div className="space-y-2.5 text-[13px] text-[#8E9CAE] w-full">
                {facilities.map((fac) => (
                  <div key={fac.name}>
                    <Link
                      to={fac.path}
                      className="hover:text-white transition block leading-snug"
                    >
                      {fac.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 4: Hospital Location */}
            <div className="footer-col space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                HOSPITAL LOCATION
              </h4>

              <div className="space-y-3 text-[13px] w-full">
                <div className="footer-contact-row flex items-start gap-2 text-[#8E9CAE]">
                  <MapPin className="w-4 h-4 text-[#B69A65] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium leading-snug">
                      9th Cross Road, Sai Nagar
                    </strong>
                    <span className="text-[#8E9CAE] block text-xs mt-0.5 leading-relaxed">
                      Behind Ambedkar Bhavan,
                      <br />
                      Anantapur, AP – 515001
                    </span>
                  </div>
                </div>

                <div className="footer-contact-row flex items-center gap-2 pt-1 text-[#E8D8D9] font-bold text-xs">
                  <Clock className="w-3.5 h-3.5 shrink-0 text-[#B69A65]" />
                  <span>OPD: 9:00 AM - 9:00 PM | 24/7 Emergency</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sub-footer Bar */}
          <div className="mt-12 pt-6 border-t border-[#3A222A] flex flex-col md:flex-row items-center justify-between text-xs text-[#8E9CAE] gap-4">
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              <Link to="/" className="hover:text-white transition">Home</Link>
              <Link to="/about" className="hover:text-white transition">About Us</Link>
              <Link to="/doctors" className="hover:text-white transition">Doctors</Link>
              <Link to="/specialities" className="hover:text-white transition">Services</Link>
              <Link to="/emergency" className="hover:text-white transition">Emergency</Link>
              <Link to="/contact" className="hover:text-white transition">Contact Us</Link>
            </div>
            <p>© 2026 Surya Hospital. All Rights Reserved.</p>
          </div>
        </Container>
      </footer>

      {/* Floating Action Buttons with Safe Viewport Offset */}
      <div className="floating-side-actions" role="complementary" aria-label="Emergency and Booking Actions">
        <Link
          to="/appointment"
          title="Book an Appointment"
          aria-label="Book an Appointment"
          className="floating-action-btn bg-[#28171D] hover:bg-[#1E0F14] border border-[#3A222A] text-white"
        >
          <Calendar className="w-4.5 h-4.5 text-white" />
        </Link>

        <a
          href={`tel:${HOSPITAL_INFO.phoneRaw}`}
          title="Call Emergency / Helpline"
          aria-label="Call Emergency / Helpline"
          className="floating-action-btn bg-[#E56A2E] hover:bg-[#C8541D] text-white shadow-lg"
        >
          <Phone className="w-4.5 h-4.5 text-white" />
        </a>
      </div>
    </>
  );
}

export default Footer;

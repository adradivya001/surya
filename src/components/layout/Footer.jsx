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
    { name: "Pathology Blood Test Lab", path: "/diagnostics" },
    { name: "12-Lead ECG Testing", path: "/diagnostics" },
    { name: "Digital X-Ray on-site", path: "/diagnostics" },
    { name: "24/7 Casualty & Emergency", path: "/emergency" },
    { name: "Sterile Operation Theatres", path: "/specialities" },
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
                  src="/images/surya-hospital-logo.png"
                  alt="Surya Hospital Logo"
                  className="h-12 sm:h-14 w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </Link>

              <p className="text-[13px] text-[#8E9CAE] leading-relaxed pr-2">
                Trusted multi-speciality hospital in Sai Nagar, Anantapur providing expert doctor consultations, surgeries, and 24/7 care.
              </p>

              <div className="space-y-2 pt-2 text-[13px] text-[#8E9CAE] w-full">
                <div className="footer-contact-row flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                  <span>
                    Helpline:{" "}
                    <a
                      href={`tel:${HOSPITAL_INFO.phoneRaw}`}
                      className="text-white font-semibold hover:text-[#38BDF8] transition"
                    >
                      {HOSPITAL_INFO.phone}
                    </a>
                  </span>
                </div>

                <div className="footer-contact-row flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                  <span>
                    Emergency:{" "}
                    <a
                      href={`tel:${HOSPITAL_INFO.phoneRaw}`}
                      className="text-white font-semibold hover:text-[#38BDF8] transition"
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

            {/* Column 3: Lab & Facilities */}
            <div className="footer-col space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                LAB & FACILITIES
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
                  <MapPin className="w-4 h-4 text-[#F43F5E] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium leading-snug">
                      9th Cross Road, Sai Nagar
                    </strong>
                    <span className="text-[#8E9CAE] block text-xs mt-0.5 leading-relaxed">
                      Near Sai Baba Temple Road,
                      <br />
                      Anantapur, AP – 515001
                    </span>
                  </div>
                </div>

                <div className="footer-contact-row flex items-center gap-2 pt-1 text-[#38BDF8] font-bold text-xs">
                  <Clock className="w-3.5 h-3.5 shrink-0 text-[#38BDF8]" />
                  <span>OPD: 9:00 AM - 9:00 PM | 24/7 Emergency</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sub-footer Bar */}
          <div className="mt-12 pt-6 border-t border-[#152236] flex flex-col sm:flex-row items-center justify-between text-xs text-[#64748B] gap-4">
            <p>© 2026 Surya Hospital. All Rights Reserved.</p>
            <div className="flex items-center gap-6">
              <Link to="/contact" className="hover:text-[#94A3B8] transition">
                Privacy Policy
              </Link>
              <Link to="/contact" className="hover:text-[#94A3B8] transition">
                Terms of Service
              </Link>
            </div>
          </div>
        </Container>
      </footer>

      {/* Floating Action Buttons with Safe Viewport Offset */}
      <div className="floating-side-actions" role="complementary" aria-label="Emergency and Booking Actions">
        <Link
          to="/appointment"
          title="Book an Appointment"
          aria-label="Book an Appointment"
          className="floating-action-btn bg-[#1E293B] hover:bg-[#334155] border border-[#334155] text-white"
        >
          <Calendar className="w-4.5 h-4.5 text-white" />
        </Link>

        <a
          href={`tel:${HOSPITAL_INFO.phoneRaw}`}
          title="Call Emergency / Helpline"
          aria-label="Call Emergency / Helpline"
          className="floating-action-btn bg-[#E11D48] hover:bg-[#BE123C] text-white shadow-rose-500/40"
        >
          <Phone className="w-4.5 h-4.5 text-white" />
        </a>
      </div>
    </>
  );
}

export default Footer;

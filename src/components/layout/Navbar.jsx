import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Phone, Calendar, Menu, X, HeartPulse } from "lucide-react";
import { HOSPITAL_INFO } from "../../constants/hospitalData";
import "./Navbar.css";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer whenever location.pathname changes
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Doctors", path: "/doctors" },
    { label: "Specialities", path: "/specialities" },
    { label: "Diagnostics", path: "/diagnostics" },
    { label: "Emergency", path: "/emergency" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className={`ref-header-fixed ${isScrolled ? "scrolled" : ""}`}>
      {/* Main Navbar */}
      <div
        className={`ref-navbar-main ${
          isScrolled ? "py-2 shadow-xs" : "py-2.5 sm:py-3.5"
        }`}
      >
        <Container>
          <div className="flex items-center justify-between gap-3">
            {/* Logo / Brand Anchor */}
            <Link
              to="/"
              className="flex items-center gap-2 sm:gap-3 shrink-0 group focus:outline-none"
              aria-label="Surya Hospital Home"
            >
              <img
                src="/images/surya-hospital-logo.png"
                alt="Surya Hospital Logo"
                className="h-10 sm:h-12 md:h-14 w-auto max-h-[50px] sm:max-h-[58px] object-contain transition-transform duration-200 group-hover:scale-[1.02]"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  if (e.currentTarget.nextSibling) {
                    e.currentTarget.nextSibling.style.display = "flex";
                  }
                }}
              />
              {/* Fallback Icon Badge in case image fails */}
              <div
                style={{ display: "none" }}
                className="items-center gap-2"
              >
                <div className="w-9 h-9 rounded-xl bg-[#C65332] text-white flex items-center justify-center shadow-sm">
                  <HeartPulse className="w-5 h-5 text-white" />
                </div>
                <span className="text-base sm:text-lg font-black text-[#252B33]">SURYA HOSPITAL</span>
              </div>
            </Link>

            {/* Desktop Navigation Links (Visible > 1080px) */}
            <nav className="ref-desktop-menu items-center gap-1" aria-label="Desktop Navigation">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3 py-2 text-[13px] font-semibold rounded-lg transition-colors whitespace-nowrap ${
                      isActive
                        ? "text-[#C65332] bg-[#FCECE2] font-bold"
                        : "text-[#252B33] hover:text-[#C65332] hover:bg-[#FFF8F2]"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Right Desktop Actions (Visible > 1080px) */}
            <div className="ref-desktop-actions items-center gap-3 shrink-0">
              <a
                href={`tel:${HOSPITAL_INFO.phoneRaw}`}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold text-[#C65332] bg-[#FCECE2] border border-[#F0D9CB] hover:bg-[#F6D8C5] transition min-h-[44px]"
                title="Call 24/7 Emergency Line"
              >
                <Phone className="w-3.5 h-3.5 text-[#C65332]" />
                <span>Call Desk: {HOSPITAL_INFO.phone}</span>
              </a>

              <Link to="/appointment">
                <Button
                  variant="primary"
                  size="sm"
                  icon={Calendar}
                  className="bg-[#C65332] hover:bg-[#A84328] text-white shadow-sm font-semibold px-4 min-h-[44px]"
                >
                  Book Appointment
                </Button>
              </Link>
            </div>

            {/* Mobile Toggle & Quick Action (Visible <= 1080px) */}
            <div className="flex items-center gap-2 shrink-0 md:gap-3">
              <Link to="/appointment" className="ref-mobile-toggle">
                <span className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md text-xs font-bold bg-[#C65332] text-white">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book</span>
                </span>
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="ref-mobile-toggle"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* Slide-Down Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="ref-mobile-drawer">
          <Container className="py-4">
            <div className="mobile-drawer-inner">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `ref-mob-link ${isActive ? "active" : ""}`
                  }
                >
                  <span>{link.label}</span>
                </NavLink>
              ))}

              <div className="mob-cta-box">
                <Link
                  to="/appointment"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mob-cta-btn-primary"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment</span>
                </Link>

                <a
                  href={`tel:${HOSPITAL_INFO.phoneRaw}`}
                  className="mob-cta-btn-outline"
                >
                  <Phone className="w-4 h-4 text-[#C65332]" />
                  <span>Call Desk: {HOSPITAL_INFO.phone}</span>
                </a>
              </div>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}

export default Navbar;

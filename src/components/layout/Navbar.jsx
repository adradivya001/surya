import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Container } from "../ui/Container";
import { Phone, Calendar, Menu, X, ChevronRight } from "lucide-react";
import { HOSPITAL_INFO } from "../../constants/hospitalData";
import "./Navbar.css";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Smoothly detect scroll after user leaves the top 20px
      const scrolled = window.scrollY > 20;
      setIsScrolled(scrolled);
    };
    
    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close drawer whenever location changes if it is open
  useEffect(() => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  }, [location.pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  const navLinks = [
    { label: "Home", path: "/", description: "Surya Hospital, Sai Nagar, Anantapur" },
    { label: "About Us", path: "/about", description: "Our hospital, medical team, and patient care" },
    { label: "Doctors", path: "/doctors", description: "Meet our physicians, surgeons, and specialists" },
    { label: "Services", path: "/specialities", description: "General medicine, surgeries, bone care & healthcare" },
    { label: "Emergency", path: "/emergency", description: "24/7 immediate doctor checkup and casualty care" },
    { label: "Contact Us", path: "/contact", description: "Location behind Ambedkar Bhavan, 9th Cross Road" },
  ];

  const quickNavItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Doctors", path: "/doctors" },
    { label: "Services", path: "/specialities" },
    { label: "Emergency", path: "/emergency" },
    { label: "Contact Us", path: "/contact" },
  ];

  return (
    <>
      <header className={`stanford-header ${isScrolled ? "scrolled shadow-xs" : ""}`}>
        {/* Top Institutional Bar: Menu (Left), Center Logo, Search & Book (Right) */}
        <div className={`stanford-navbar-main transition-all duration-350 ease-in-out ${
          !isScrolled ? "py-2 sm:py-3.5" : "py-1 sm:py-1.5"
        }`}>
          <div className="w-full px-4 sm:px-6 lg:px-8 relative flex items-center justify-between min-h-[58px] sm:min-h-[68px]">
            
            {/* Left Side: MENU Button with hamburger icon (Visible on Mobile & Tablet, hidden on Desktop where sub-nav strip exists) */}
            <div className="flex items-center gap-3 z-30 shrink-0 lg:hidden">
              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                className="stanford-menu-trigger group"
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
              >
                <Menu className="w-5 h-5 text-[#29252A] group-hover:text-[#641D2D] transition-colors" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#29252A] group-hover:text-[#641D2D] transition-colors">
                  Menu
                </span>
              </button>
            </div>

            {/* Exact Middle: Hospital Logo Anchor centered across entire viewport */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-30">
              <Link
                to="/"
                className="stanford-logo-anchor group focus:outline-none cursor-pointer"
                aria-label="Surya Hospital Home"
              >
                <img
                  src="/images/surya-hospital-orange-emblem-logo.png"
                  alt="Surya Hospital Logo"
                  className={`stanford-navbar-logo-img ${
                    !isScrolled ? "prominent group-hover:scale-102" : "compact group-hover:scale-102"
                  }`}
                  onError={(e) => {
                    e.currentTarget.src = "/images/surya-hospital-horizontal-logo.png";
                  }}
                />
              </Link>
            </div>

            {/* Right Side: Quick Action Desk & Book Appointment */}
            <div className="flex items-center gap-2 sm:gap-3 z-30 shrink-0">
                <Link
                  to="/appointment"
                  className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-[#E56A2E] hover:bg-[#C8541D] text-white shadow-2xs transition cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-white" />
                  <span>Book Appointment</span>
                </Link>

                <a
                  href={`tel:${HOSPITAL_INFO.phoneRaw}`}
                  className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-semibold text-[#29252A] bg-[#FCFAF7] hover:bg-[#E8D8D9] border border-[#DED7D7] transition"
                  title="Call 24/7 Hospital Desk"
                >
                  <Phone className="w-3.5 h-3.5 text-[#641D2D]" />
                  <span className="hidden sm:inline">Reception: {HOSPITAL_INFO.phone}</span>
                  <span className="sm:hidden font-bold">Call</span>
                </a>
              </div>

            </div>
          </div>

        {/* Secondary Sub-Navigation Strip (Direct Reference: Stanford style horizontal quick links) */}
        <div className="hidden lg:block border-t border-[#DED7D7] bg-[#FCFAF7]">
          <Container size="default">
            <nav className="flex items-center justify-center gap-10 py-2.5 text-xs sm:text-[13px] font-bold text-[#6F686B]">
              {quickNavItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.path}
                  className={({ isActive }) =>
                    `hover:text-[#641D2D] transition-colors py-1 ${
                      isActive ? "text-[#641D2D] font-black border-b-2 border-[#641D2D]" : ""
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </Container>
        </div>
      </header>

      {/* Stanford Medicine Style Slide-Over Drawer Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#292D32]/50 backdrop-blur-xs transition-opacity"
            onClick={() => setMenuOpen(false)}
          />

          <div className="fixed inset-y-0 left-0 max-w-full flex">
            <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between overflow-y-auto">
              
              {/* Drawer Header */}
              <div className="px-6 py-5 border-b border-[#DED7D7] flex items-center justify-between bg-[#FCFAF7]">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#641D2D]">
                    Explore Surya Hospital
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-[#E8D8D9] text-[#29252A] transition"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Section Links */}
              <div className="px-6 py-4 flex-1 divide-y divide-[#DED7D7]">
                {navLinks.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `group py-3.5 flex items-start justify-between text-left transition ${
                        isActive ? "text-[#641D2D]" : "text-[#29252A] hover:text-[#641D2D]"
                      }`
                    }
                  >
                    <div>
                      <span className="text-base font-bold block group-hover:translate-x-1 transition-transform">
                        {item.label}
                      </span>
                      <span className="text-xs text-[#6F686B] block mt-0.5 font-normal">
                        {item.description}
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#641D2D] opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition shrink-0 mt-1" />
                  </NavLink>
                ))}
              </div>

              {/* Drawer Bottom Action Block */}
              <div className="p-6 bg-[#FCFAF7] border-t border-[#DED7D7] space-y-3">
                <Link
                  to="/appointment"
                  onClick={() => setMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#E56A2E] hover:bg-[#C8541D] text-white text-sm font-bold shadow-sm transition"
                >
                  <Calendar className="w-4 h-4 text-white" />
                  <span>Book an Appointment</span>
                </Link>

                <a
                  href={`tel:${HOSPITAL_INFO.phoneRaw}`}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-white border border-[#DED7D7] hover:bg-[#E8D8D9] text-[#29252A] text-sm font-bold transition"
                >
                  <Phone className="w-4 h-4 text-[#641D2D]" />
                  <span>Helpline: {HOSPITAL_INFO.phone}</span>
                </a>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;

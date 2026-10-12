import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Phone, Calendar, Menu, X, HeartPulse } from "lucide-react";
import { HOSPITAL_INFO } from "../../constants/hospitalData";

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

  // Close mobile drawer on route change
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
    <header className="sticky top-0 z-50 w-full bg-white shadow-subtle border-b border-[#F0D9CB]">
      {/* Main Navbar */}
      <div
        className={`transition-all duration-200 bg-white ${
          isScrolled ? "py-2.5 shadow-xs" : "py-3.5"
        }`}
      >
        <Container>
          <div className="flex items-center justify-between gap-4">
            {/* Logo / Brand Anchor */}
            <Link
              to="/"
              className="flex items-center gap-3 shrink-0 group focus:outline-none"
              aria-label="Surya Hospital Home"
            >
              <img
                src="/images/surya-hospital-logo.png"
                alt="Surya Hospital Logo"
                className="h-14 sm:h-16 md:h-18 lg:h-20 w-auto max-h-[76px] object-contain transition-transform duration-200 group-hover:scale-[1.02]"
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
                <div className="w-10 h-10 rounded-xl bg-[#C65332] text-white flex items-center justify-center shadow-sm">
                  <HeartPulse className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-black text-[#252B33]">SURYA HOSPITAL</span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1">
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

            {/* Right Desktop Actions */}
            <div className="hidden md:flex items-center gap-3 shrink-0">
              <a
                href={`tel:${HOSPITAL_INFO.phoneRaw}`}
                className="hidden lg:flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold text-[#C65332] bg-[#FCECE2] border border-[#F0D9CB] hover:bg-[#F6D8C5] transition"
                title="Call 24/7 Emergency Line"
              >
                <Phone className="w-3.5 h-3.5 text-[#C65332]" />
                <span>24/7 Helpline</span>
              </a>

              <Link to="/appointment">
                <Button
                  variant="primary"
                  size="sm"
                  icon={Calendar}
                  className="bg-[#C65332] hover:bg-[#A84328] text-white shadow-sm font-semibold px-4"
                >
                  Book Appointment
                </Button>
              </Link>
            </div>

            {/* Mobile Actions & Hamburger */}
            <div className="flex items-center gap-2 xl:hidden">
              <Link to="/appointment" className="sm:hidden">
                <Button
                  variant="primary"
                  size="sm"
                  className="text-xs px-2.5 py-1.5 bg-[#C65332] text-white"
                >
                  Book
                </Button>
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-[#252B33] hover:bg-[#FCECE2] transition border border-[#F0D9CB]"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-[#F0D9CB] shadow-xl animate-fadeIn">
          <Container className="py-4 space-y-1">
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-2.5 text-sm font-medium rounded-lg transition-colors flex items-center justify-between ${
                      isActive
                        ? "bg-[#FCECE2] text-[#C65332] font-bold border-l-4 border-[#C65332]"
                        : "text-[#252B33] hover:bg-[#FFF8F2]"
                    }`
                  }
                >
                  <span>{link.label}</span>
                </NavLink>
              ))}
            </div>

            <div className="pt-4 mt-2 border-t border-[#F0D9CB] grid grid-cols-1 sm:grid-cols-2 gap-2">
              <a
                href={`tel:${HOSPITAL_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-xs font-bold text-[#C65332] bg-[#FCECE2] border border-[#F0D9CB] hover:bg-[#F6D8C5] transition"
              >
                <Phone className="w-4 h-4 text-[#C65332]" />
                <span>Call Emergency: {HOSPITAL_INFO.phone}</span>
              </a>

              <Link
                to="/appointment"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-xs font-bold text-white bg-[#C65332] hover:bg-[#A84328] transition shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Book an Appointment</span>
              </Link>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
export default Navbar;

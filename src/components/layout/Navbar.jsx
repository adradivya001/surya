import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Phone, ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { HOSPITAL_INFO } from "../../constants/hospitalData";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up"); // "up" | "down"
  const [isHovered, setIsHovered] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  
  const location = useLocation();

  useEffect(() => {
    let lastScrollY = typeof window !== "undefined" ? window.scrollY : 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 30);

      // Require meaningful scroll delta to avoid micro jitter
      if (Math.abs(currentScrollY - lastScrollY) > 8) {
        if (currentScrollY > lastScrollY && currentScrollY > 120) {
          // Scrolling down
          setScrollDirection("down");
        } else {
          // Scrolling up
          setScrollDirection("up");
        }
        lastScrollY = currentScrollY;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
    setResourcesOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Services", path: "/specialities" },
    { label: "Our Doctors", path: "/doctors" },
    { label: "Insurance", path: "/insurance-partners" },
    { label: "Emergency", path: "/emergency" },
    { label: "Contact", path: "/contact" },
  ];

  // Navbar stays normal at top, or when hovered, or when scrolling upwards.
  // It only minimizes into compact mode when actively scrolled downwards past the threshold.
  const isCollapsed = isScrolled && scrollDirection === "down" && !isHovered;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full pt-3 sm:pt-4 pb-2 px-3 sm:px-5 lg:px-6 transition-all duration-300 pointer-events-none ${
          isScrolled ? "bg-gradient-to-b from-white/90 via-white/50 to-transparent backdrop-blur-[6px]" : ""
        }`}
      >
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`max-w-[1440px] mx-auto pointer-events-auto flex items-center gap-3 lg:gap-4 transition-all duration-300 ${
            isCollapsed ? "justify-center" : "justify-between"
          }`}
        >
          {/* Main Left/Center Navigation Pill - Collapses into centered Logo Pill only on downward scroll, expands on hover / scroll up */}
          <motion.div
            layout
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`flex items-center gap-3 lg:gap-4 bg-white/98 backdrop-blur-xl rounded-full border border-[#E9D8CE] shadow-[0_8px_30px_rgba(233,75,28,0.06)] px-4 sm:px-6 py-2 sm:py-2.5 transition-all duration-300 ${
              isCollapsed ? "shadow-2xl border-[#E94B1C]/30 shrink-0" : "flex-1 justify-between"
            }`}
          >
            {/* 1. Left: Surya Hospital Official Brand Logo */}
            <div className="shrink-0 flex items-center py-0.5">
              <Link to="/" className="inline-flex items-center group focus:outline-none" aria-label="Surya Hospital">
                <img
                  src="/images/surya-hospital-orange-emblem-logo.png"
                  alt="Surya Hospital Logo"
                  className="h-12 sm:h-14 md:h-16 lg:h-16 w-auto object-contain group-hover:scale-[1.03] transition-transform duration-200"
                />
              </Link>
            </div>

            {/* 2. Middle: Desktop Navigation Links - Clean Direct Links */}
            <AnimatePresence>
              {!isCollapsed && (
                <motion.nav
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="hidden lg:flex items-center gap-1.5 xl:gap-2.5 whitespace-nowrap"
                >
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.label}
                      to={link.path}
                      className={({ isActive }) =>
                        `px-3.5 py-1.5 rounded-full text-[13px] 2xl:text-sm font-semibold transition-colors duration-150 ${
                          isActive
                            ? "text-[#C63D1B] font-bold bg-[#FFF0E6]"
                            : "text-[#262626]/90 hover:text-[#E94B1C] hover:bg-[#FFF0E6]/50"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </motion.nav>
              )}
            </AnimatePresence>

            {/* Mobile Hamburger Trigger inside the main pill (< lg) */}
            <div className="lg:hidden flex items-center">
              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-1.5 rounded-xl text-[#262626] hover:bg-[#FFF0E6] transition focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </motion.div>

          {/* Right Separate Action Pill */}
          <AnimatePresence>
            {!isCollapsed && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2 sm:gap-3 bg-white/98 backdrop-blur-xl rounded-full border border-[#E9D8CE] shadow-[0_8px_30px_rgba(233,75,28,0.06)] px-3 sm:px-4 py-1.5 sm:py-2 shrink-0"
              >
                {/* Phone Call Info */}
                <a
                  href={`tel:${HOSPITAL_INFO.phoneRaw}`}
                  className="hidden sm:inline-flex items-center gap-2 py-1 px-1 text-left group transition-all"
                  title="24/7 Emergency Helpline"
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FFF0E6] text-[#E94B1C] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <div className="pr-1">
                    <span className="block text-xs font-bold text-[#262626] tracking-tight leading-none">
                      +91 85009 04999
                    </span>
                    <span className="block text-[10px] text-[#756860] font-medium leading-tight mt-0.5">
                      24/7 Emergency
                    </span>
                  </div>
                </a>

                {/* Book Appointment Button */}
                <Link
                  to="/appointment"
                  className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-[13px] font-bold text-white bg-[#E94B1C] hover:bg-[#A83218] shadow-sm hover:shadow-md transition-all active:scale-[0.98] cursor-pointer"
                >
                  <span>Book Appointment</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <div className="fixed inset-0 z-[99999] xl:hidden overflow-hidden" role="dialog" aria-modal="true">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-xs"
              onClick={() => setMenuOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 240 }}
              className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl flex flex-col justify-between overflow-y-auto"
            >
              <div>
                <div className="px-6 py-5 border-b border-[#E9D8CE] flex items-center justify-between bg-[#FFF0E6]/50">
                  <img
                    src="/images/surya-hospital-horizontal-logo.png"
                    alt="Surya Hospital"
                    className="h-9 w-auto object-contain"
                  />
                  <button
                    type="button"
                    onClick={() => setMenuOpen(false)}
                    className="p-2 rounded-full hover:bg-[#FFF0E6] text-[#262626] transition"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-6 space-y-4">
                  <div className="space-y-1">
                    {navLinks.map((item) => (
                      <NavLink
                        key={item.label}
                        to={item.path}
                        onClick={() => setMenuOpen(false)}
                        className={({ isActive }) =>
                          `block px-3.5 py-2.5 rounded-xl text-sm font-bold transition ${
                            isActive
                              ? "bg-[#FFF0E6] text-[#E94B1C]"
                              : "text-[#262626] hover:bg-[#FFF0E6]/50"
                          }`
                        }
                      >
                        {item.label}
                      </NavLink>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-[#E9D8CE] space-y-3">
                    <a
                      href={`tel:${HOSPITAL_INFO.phoneRaw}`}
                      className="flex items-center gap-3 p-3 rounded-xl bg-[#FFF9F3] border border-[#E9D8CE] text-[#262626]"
                    >
                      <div className="w-9 h-9 rounded-full bg-[#FFF0E6] text-[#E94B1C] flex items-center justify-center">
                        <Phone className="w-4 h-4 fill-current" />
                      </div>
                      <div>
                        <div className="text-xs font-bold">+91 85009 04999</div>
                        <div className="text-[11px] text-[#756860]">24/7 Emergency Casualty</div>
                      </div>
                    </a>

                    <Link
                      to="/appointment"
                      onClick={() => setMenuOpen(false)}
                      className="w-full py-3 rounded-xl text-center text-xs font-bold text-white bg-[#E94B1C] hover:bg-[#A83218] block shadow-md"
                    >
                      Book Appointment Online
                    </Link>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-[#E9D8CE] bg-[#FFF9F3] text-xs text-[#756860]">
                Behind Ambedkar Bhavan, 9th Cross Road, Sai Nagar, Anantapur
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;

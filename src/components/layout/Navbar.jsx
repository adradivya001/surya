import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import {
  Phone,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Stethoscope,
  Scissors,
  CheckCircle2,
  ShieldCheck,
  AlertTriangle,
  Building2,
  PhoneCall,
  Clock,
} from "lucide-react";
import { HOSPITAL_INFO } from "../../constants/hospitalData";
import {
  MEDICAL_SPECIALITIES,
  SURGICAL_SPECIALITIES,
} from "../../constants/specialitiesData";
import { motion, AnimatePresence } from "framer-motion";
import suryaLogo from "../../assets/surya-hospital-logo.png";
import { useAppointmentModal } from "../../context/AppointmentModalContext";

export function Navbar() {
  const { openModal } = useAppointmentModal();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up"); // "up" | "down"
  const [isHovered, setIsHovered] = useState(false);
  const [departmentsDropdownOpen, setDepartmentsDropdownOpen] = useState(false);
  const [facilitiesDropdownOpen, setFacilitiesDropdownOpen] = useState(false);
  const [mobileMedicalOpen, setMobileMedicalOpen] = useState(true);
  const [mobileSurgicalOpen, setMobileSurgicalOpen] = useState(true);
  const [mobileFacilitiesOpen, setMobileFacilitiesOpen] = useState(true);
  const [activeSection, setActiveSection] = useState("home"); // For homepage scroll spy

  const departmentsDropdownRef = useRef(null);
  const facilitiesDropdownRef = useRef(null);
  const departmentsTimeoutRef = useRef(null);
  const facilitiesTimeoutRef = useRef(null);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Scroll Spy for Homepage
  useEffect(() => {
    if (!isHomePage) {
      setActiveSection("");
      return;
    }

    const sectionIds = [
      "hero",
      "about-hero",
      "specialities",
      "doctors",
      "patient-journey",
      "facilities",
      "insurance",
      "emergency",
      "contact",
    ];

    const calculateActiveSection = () => {
      // 1. Top of page
      if (window.scrollY < 80) {
        setActiveSection("home");
        return;
      }

      // 2. Bottom of page reached
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 120
      ) {
        setActiveSection("contact");
        return;
      }

      // 3. Find which section's viewport footprint or top edge is in the upper viewing window
      const navOffset = 130;
      let matchedSection = "home";

      // Check about region inside hero first or specialities
      for (let i = 0; i < sectionIds.length; i++) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the top of the element has scrolled near or above the navbar,
          // and the bottom is still in view
          if (rect.top <= navOffset && rect.bottom > navOffset) {
            matchedSection = id === "hero" ? "home" : id === "about-hero" ? "about" : id;
            break;
          }
        }
      }

      // If no exact match (e.g. between transitions), fallback to checking element positions from top
      if (matchedSection === "home" && window.scrollY >= 80) {
        const scrollMid = window.scrollY + window.innerHeight * 0.35;
        for (const id of sectionIds) {
          const el = document.getElementById(id);
          if (el && el.offsetTop <= scrollMid) {
            matchedSection = id === "hero" ? "home" : id === "about-hero" ? "about" : id;
          }
        }
      }

      setActiveSection(matchedSection);
    };

    window.addEventListener("scroll", calculateActiveSection, { passive: true });
    window.addEventListener("resize", calculateActiveSection, { passive: true });
    calculateActiveSection();

    return () => {
      window.removeEventListener("scroll", calculateActiveSection);
      window.removeEventListener("resize", calculateActiveSection);
    };
  }, [isHomePage]);

  useEffect(() => {
    let lastScrollY = typeof window !== "undefined" ? window.scrollY : 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 30);

      if (Math.abs(currentScrollY - lastScrollY) > 8) {
        if (currentScrollY > lastScrollY && currentScrollY > 120) {
          setScrollDirection("down");
        } else {
          setScrollDirection("up");
        }
        lastScrollY = currentScrollY;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns on route change
  useEffect(() => {
    setMenuOpen(false);
    setDepartmentsDropdownOpen(false);
    setFacilitiesDropdownOpen(false);
  }, [location.pathname]);

  // Click outside listener for both dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        departmentsDropdownRef.current &&
        !departmentsDropdownRef.current.contains(event.target)
      ) {
        setDepartmentsDropdownOpen(false);
      }
      if (
        facilitiesDropdownRef.current &&
        !facilitiesDropdownRef.current.contains(event.target)
      ) {
        setFacilitiesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Departments Hover Handlers
  const handleDeptMouseEnter = () => {
    if (departmentsTimeoutRef.current) clearTimeout(departmentsTimeoutRef.current);
    setFacilitiesDropdownOpen(false);
    setDepartmentsDropdownOpen(true);
  };

  const handleDeptMouseLeave = () => {
    departmentsTimeoutRef.current = setTimeout(() => {
      setDepartmentsDropdownOpen(false);
    }, 200);
  };

  // Facilities Hover Handlers
  const handleFacMouseEnter = () => {
    if (facilitiesTimeoutRef.current) clearTimeout(facilitiesTimeoutRef.current);
    setDepartmentsDropdownOpen(false);
    setFacilitiesDropdownOpen(true);
  };

  const handleFacMouseLeave = () => {
    facilitiesTimeoutRef.current = setTimeout(() => {
      setFacilitiesDropdownOpen(false);
    }, 200);
  };

  const isDepartmentsActive =
    location.pathname.startsWith("/specialities") ||
    location.pathname.startsWith("/departments");

  const isFacilitiesActive =
    location.pathname.startsWith("/facilities") ||
    location.pathname.startsWith("/insurance") ||
    location.pathname.startsWith("/emergency");

  // Determine active highlight for each nav link, respecting homepage scroll spy vs dedicated route
  const getNavClass = (targetRoute, sectionName) => {
    let isActive = false;
    if (isHomePage) {
      if (sectionName === "home") {
        isActive = activeSection === "home";
      } else if (sectionName === "about") {
        isActive = activeSection === "about";
      } else if (sectionName === "specialities") {
        isActive = activeSection === "specialities";
      } else if (sectionName === "doctors") {
        isActive = activeSection === "doctors" || activeSection === "patient-journey";
      } else if (sectionName === "facilities") {
        isActive = activeSection === "facilities" || activeSection === "insurance" || activeSection === "emergency";
      } else if (sectionName === "contact") {
        isActive = activeSection === "contact";
      }
    } else {
      if (targetRoute === "/") {
        isActive = location.pathname === "/";
      } else if (targetRoute === "/specialities") {
        isActive = isDepartmentsActive;
      } else if (targetRoute === "/facilities") {
        isActive = isFacilitiesActive;
      } else {
        isActive = location.pathname.startsWith(targetRoute);
      }
    }

    return `inline-flex items-center justify-center px-4 py-2 rounded-full text-[13px] 2xl:text-sm font-semibold transition-colors duration-150 whitespace-nowrap ${
      isActive
        ? "text-[#C63D1B] font-bold bg-[#FFF0E6]"
        : "text-[#262626]/90 hover:text-[#E94B1C] hover:bg-[#FFF0E6]/50"
    }`;
  };

  const getMobileNavClass = (targetRoute, sectionName) => {
    let isActive = false;
    if (isHomePage) {
      if (sectionName === "home") {
        isActive = activeSection === "home";
      } else if (sectionName === "about") {
        isActive = activeSection === "about";
      } else if (sectionName === "specialities") {
        isActive = activeSection === "specialities";
      } else if (sectionName === "doctors") {
        isActive = activeSection === "doctors" || activeSection === "patient-journey";
      } else if (sectionName === "facilities") {
        isActive = activeSection === "facilities" || activeSection === "insurance" || activeSection === "emergency";
      } else if (sectionName === "contact") {
        isActive = activeSection === "contact";
      }
    } else {
      if (targetRoute === "/") {
        isActive = location.pathname === "/";
      } else if (targetRoute === "/specialities") {
        isActive = isDepartmentsActive;
      } else if (targetRoute === "/facilities") {
        isActive = isFacilitiesActive;
      } else {
        isActive = location.pathname.startsWith(targetRoute);
      }
    }

    return `block px-3.5 py-2.5 rounded-xl text-sm font-bold transition ${
      isActive
        ? "bg-[#FFF0E6] text-[#E94B1C]"
        : "text-[#262626] hover:bg-[#FFF0E6]/50"
    }`;
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#FFF9F3]/95 backdrop-blur-md border-b border-[#E9D8CE] shadow-[0_2px_12px_rgba(40,20,10,0.05)]"
            : "bg-transparent border-b border-[#E9D8CE]/40"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-3 flex items-center justify-between">
          {/* 1. Left: Surya Hospital Official Brand Logo */}
          <div className="shrink-0 flex items-center py-0.5">
            <Link
              to="/"
              className="inline-flex items-center group focus:outline-none"
              aria-label="Surya Hospital"
            >
              <motion.img
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                src={suryaLogo}
                alt="Surya Hospital Logo"
                className="h-16 sm:h-20 md:h-22 lg:h-24 xl:h-26 w-auto object-contain group-hover:scale-[1.03] transition-transform duration-200 drop-shadow-2xs"
              />
            </Link>
          </div>

          {/* 2. Middle: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2 2xl:gap-3 whitespace-nowrap">
            <NavLink
              to="/"
              className={() => getNavClass("/", "home")}
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={() => getNavClass("/about", "about")}
            >
              About
            </NavLink>

            {/* ── DEPARTMENTS DROPDOWN TRIGGER ── */}
            <div
              ref={departmentsDropdownRef}
              onMouseEnter={handleDeptMouseEnter}
              onMouseLeave={handleDeptMouseLeave}
              className="relative"
            >
              <NavLink
                to="/specialities"
                onClick={() => setDepartmentsDropdownOpen(false)}
                className={() =>
                  `inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full text-[13px] 2xl:text-sm font-semibold transition-colors duration-150 cursor-pointer whitespace-nowrap ${
                    (isHomePage && activeSection === "specialities") ||
                    isDepartmentsActive ||
                    departmentsDropdownOpen
                      ? "text-[#C63D1B] font-bold bg-[#FFF0E6]"
                      : "text-[#262626]/90 hover:text-[#E94B1C] hover:bg-[#FFF0E6]/50"
                  }`
                }
              >
                <span>Departments</span>
                <ChevronDown
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setFacilitiesDropdownOpen(false);
                    setDepartmentsDropdownOpen(!departmentsDropdownOpen);
                  }}
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    departmentsDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </NavLink>

              {/* ── DEPARTMENTS DROPDOWN PANEL ── */}
              <AnimatePresence>
                {departmentsDropdownOpen && (
                  <div
                    onMouseEnter={handleDeptMouseEnter}
                    onMouseLeave={handleDeptMouseLeave}
                    className="absolute left-1/2 -translate-x-1/2 top-full pt-2 z-[100] pointer-events-auto"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="w-[760px] max-w-[94vw] bg-white rounded-3xl border border-[#E9D8CE] shadow-[0_20px_50px_rgba(0,0,0,0.12),0_4px_12px_rgba(233,75,28,0.06)] p-6 sm:p-7 text-left"
                    >
                      <div className="grid grid-cols-2 gap-6 divide-x divide-slate-100">
                        {/* Medical Department Column */}
                        <div className="pr-4 space-y-4 min-w-0">
                          <div className="flex items-center gap-2 pb-2 border-b border-[#F0E2D9]">
                            <div className="w-7 h-7 rounded-lg bg-[#E6F4F7] text-[#006677] flex items-center justify-center shrink-0">
                              <Stethoscope className="w-4 h-4" />
                            </div>
                            <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#006677]">
                              Medical Department
                            </h3>
                          </div>

                          <ul className="space-y-1">
                            {MEDICAL_SPECIALITIES.map((spec) => (
                              <li key={spec.slug}>
                                <Link
                                  to={`/specialities/${spec.slug}`}
                                  onClick={() => setDepartmentsDropdownOpen(false)}
                                  className="group flex items-center justify-between py-1.5 px-2 rounded-xl hover:bg-[#E6F4F7]/60 transition-all duration-150"
                                >
                                  <div className="flex items-center gap-2.5 min-w-0">
                                    <img
                                      src={spec.heroImage}
                                      alt={spec.name}
                                      className="w-7 h-7 rounded-lg object-cover border border-[#BDE0E8]/70 shrink-0 group-hover:scale-105 transition-transform"
                                    />
                                    <span className="text-[13px] font-semibold text-[#006677] group-hover:text-[#0D4855] group-hover:translate-x-0.5 transition-transform truncate">
                                      {spec.name}
                                    </span>
                                  </div>
                                  <ArrowRight className="w-3.5 h-3.5 text-[#006677] opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-1" />
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Surgical Department Column */}
                        <div className="pl-6 space-y-4 flex flex-col justify-between min-w-0">
                          <div className="space-y-4">
                            <div className="flex items-center gap-2 pb-2 border-b border-[#F0E2D9]">
                              <div className="w-7 h-7 rounded-lg bg-[#FFF0E6] text-[#E94B1C] flex items-center justify-center shrink-0">
                                <Scissors className="w-4 h-4" />
                              </div>
                              <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#C63D1B]">
                                Surgical Department
                              </h3>
                            </div>

                            <ul className="space-y-1">
                              {SURGICAL_SPECIALITIES.map((spec) => (
                                <li key={spec.slug}>
                                  <Link
                                    to={`/specialities/${spec.slug}`}
                                    onClick={() => setDepartmentsDropdownOpen(false)}
                                    className="group flex items-center justify-between py-1.5 px-2 rounded-xl hover:bg-[#FFF0E6]/60 transition-all duration-150"
                                  >
                                    <div className="flex items-center gap-2.5 min-w-0">
                                      <img
                                        src={spec.heroImage}
                                        alt={spec.name}
                                        className="w-7 h-7 rounded-lg object-cover border border-[#E9D8CE] shrink-0 group-hover:scale-105 transition-transform"
                                      />
                                      <span className="text-[13px] font-semibold text-[#006677] group-hover:text-[#C63D1B] group-hover:translate-x-0.5 transition-transform truncate">
                                        {spec.name}
                                      </span>
                                    </div>
                                    <ArrowRight className="w-3.5 h-3.5 text-[#E94B1C] opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-1" />
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Bottom Callout Banner */}
                          <div className="mt-4 p-3 sm:p-3.5 rounded-2xl bg-[#FFF9F3] border border-[#E9D8CE] flex items-center justify-between gap-2.5 min-w-0">
                            <div className="min-w-0 flex-1 pr-1">
                              <div className="text-[11px] font-bold text-[#1A1D20] leading-tight">
                                Need Doctor Guidance?
                              </div>
                              <div className="text-[10px] text-[#756860] leading-tight mt-0.5 line-clamp-1">
                                Select any department to view full details
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={() => {
                                setDepartmentsDropdownOpen(false);
                                openModal();
                              }}
                              className="shrink-0 text-[11px] font-bold text-white bg-[#E94B1C] hover:bg-[#A83218] px-3.5 py-1.5 rounded-full transition-all duration-150 cursor-pointer whitespace-nowrap shadow-xs active:scale-95"
                            >
                              Book OPD
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
            </div>

            <NavLink
              to="/doctors"
              className={() => getNavClass("/doctors", "doctors")}
            >
              Doctors
            </NavLink>

            {/* ── FACILITIES DROPDOWN TRIGGER ── */}
            <div
              ref={facilitiesDropdownRef}
              onMouseEnter={handleFacMouseEnter}
              onMouseLeave={handleFacMouseLeave}
              className="relative"
            >
              <NavLink
                to="/facilities"
                onClick={() => setFacilitiesDropdownOpen(false)}
                className={() =>
                  `inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full text-[13px] 2xl:text-sm font-semibold transition-colors duration-150 cursor-pointer whitespace-nowrap ${
                    (isHomePage && (activeSection === "facilities" || activeSection === "insurance" || activeSection === "emergency")) ||
                    isFacilitiesActive ||
                    facilitiesDropdownOpen
                      ? "text-[#C63D1B] font-bold bg-[#FFF0E6]"
                      : "text-[#262626]/90 hover:text-[#E94B1C] hover:bg-[#FFF0E6]/50"
                  }`
                }
              >
                <span>Facilities</span>
                <ChevronDown
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setDepartmentsDropdownOpen(false);
                    setFacilitiesDropdownOpen(!facilitiesDropdownOpen);
                  }}
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    facilitiesDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </NavLink>

              {/* ── FACILITIES DROPDOWN PANEL (CLEAN, WARM IVORY/WHITE PREMIUM POPOVER) ── */}
              <AnimatePresence>
                {facilitiesDropdownOpen && (
                  <div
                    onMouseEnter={handleFacMouseEnter}
                    onMouseLeave={handleFacMouseLeave}
                    className="absolute left-1/2 -translate-x-1/2 top-full pt-2 z-[100] pointer-events-auto"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="w-[380px] max-w-[94vw] bg-white rounded-3xl border border-[#E9D8CE] shadow-[0_20px_50px_rgba(0,0,0,0.12),0_4px_12px_rgba(233,75,28,0.06)] p-3.5 text-left"
                    >
                      <div className="space-y-1.5">
                        {/* Option 1: Insurance & Cashless Facility */}
                        <Link
                          to="/insurance"
                          onClick={() => setFacilitiesDropdownOpen(false)}
                          className="group flex items-start gap-3.5 p-3 rounded-2xl hover:bg-[#FFF5EC] border border-transparent hover:border-[#FADCCB] transition-all duration-150"
                        >
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FFF0E6] to-[#FFE3D0] text-[#E94B1C] flex items-center justify-center shrink-0 border border-[#FADCCB]/70 shadow-xs group-hover:scale-105 transition-transform">
                            <ShieldCheck className="w-5 h-5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <span className="text-[13px] font-bold text-[#14233C] group-hover:text-[#E94B1C] transition-colors">
                                Insurance & Cashless Facility
                              </span>
                              <ArrowRight className="w-3.5 h-3.5 text-[#E94B1C] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-[11px] text-[#6B7280] leading-snug mt-0.5">
                              Empaneled with 24+ insurers & TPAs for cashless hospitalization.
                            </p>
                          </div>
                        </Link>

                        {/* Option 2: Emergency Services */}
                        <Link
                          to="/emergency"
                          onClick={() => setFacilitiesDropdownOpen(false)}
                          className="group flex items-start gap-3.5 p-3 rounded-2xl hover:bg-[#FFF5EC] border border-transparent hover:border-[#FADCCB] transition-all duration-150"
                        >
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FFF0E6] to-[#FFE3D0] text-[#E94B1C] flex items-center justify-center shrink-0 border border-[#FADCCB]/70 shadow-xs group-hover:scale-105 transition-transform">
                            <AlertTriangle className="w-5 h-5 text-[#E94B1C]" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <span className="text-[13px] font-bold text-[#14233C] group-hover:text-[#E94B1C] transition-colors">
                                Emergency Services
                              </span>
                              <ArrowRight className="w-3.5 h-3.5 text-[#E94B1C] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-[11px] text-[#6B7280] leading-snug mt-0.5">
                              24/7 Casualty, critical trauma care, ICU & emergency response.
                            </p>
                          </div>
                        </Link>
                      </div>

                      {/* Bottom Footer: Link to all general facilities */}
                      <div className="mt-2 pt-2.5 border-t border-[#F2E5D8] px-2 flex items-center justify-between">
                        <span className="text-[11px] text-[#756860] font-medium">
                          Modular OT, ICU, Suites & Lab
                        </span>
                        <Link
                          to="/facilities"
                          onClick={() => setFacilitiesDropdownOpen(false)}
                          className="text-[11px] font-bold text-[#E94B1C] hover:text-[#C63D1B] inline-flex items-center gap-1 group/fac"
                        >
                          <span>Explore All Facilities</span>
                          <ArrowRight className="w-3 h-3 group-hover/fac:translate-x-0.5 transition-transform" />
                        </Link>
                      </div>
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
            </div>

            <NavLink
              to="/contact"
              className={() => getNavClass("/contact", "contact")}
            >
              Contact
            </NavLink>
          </nav>

          {/* 3. Right: Emergency Quick Option + CTA Button inside the navbar */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Prominent Emergency 24/7 Call Pill */}
            <a
              href={`tel:${HOSPITAL_INFO.phoneRaw}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold text-[#E94B1C] bg-[#FFF0E6] hover:bg-[#FFE4D3] border border-[#FADCCB] transition-all shrink-0 group"
              title="24/7 Emergency Casualty Helpline"
            >
              <span className="w-2 h-2 rounded-full bg-[#E94B1C] animate-pulse" />
              <span className="hidden sm:inline">Emergency 24/7:</span>
              <span className="font-extrabold">{HOSPITAL_INFO.phone}</span>
            </a>

            {/* Mobile Hamburger Trigger inside navbar (< lg) */}
            <div className="lg:hidden flex items-center">
              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-1.5 rounded-xl text-[#262626] hover:bg-[#FFF0E6] transition focus:outline-none cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* ── RESPONSIVE MOBILE DRAWER (< lg) ── */}
      <AnimatePresence>
        {menuOpen && (
          <div
            className="fixed inset-0 z-[99999] lg:hidden overflow-hidden"
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-white/70 backdrop-blur-md"
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
                    src={suryaLogo}
                    alt="Surya Hospital"
                    className="h-14 sm:h-16 w-auto object-contain"
                  />
                  <button
                    type="button"
                    onClick={() => setMenuOpen(false)}
                    className="p-2 rounded-full hover:bg-[#FFF0E6] text-[#262626] transition"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-5 space-y-4">
                  <div className="space-y-1">
                    <NavLink
                      to="/"
                      onClick={() => setMenuOpen(false)}
                      className={() => getMobileNavClass("/", "home")}
                    >
                      Home
                    </NavLink>

                    <NavLink
                      to="/about"
                      onClick={() => setMenuOpen(false)}
                      className={() => getMobileNavClass("/about", "about")}
                    >
                      About
                    </NavLink>

                    {/* Mobile Expandable Departments */}
                    <div className="rounded-2xl border border-[#E9D8CE] bg-[#FFF9F3] overflow-hidden my-2">
                      <div className="p-3 bg-[#FFF0E6]/80 flex items-center justify-between">
                        <Link
                          to="/specialities"
                          onClick={() => setMenuOpen(false)}
                          className={`text-xs font-bold uppercase tracking-wider ${
                            (isHomePage && activeSection === "specialities") || isDepartmentsActive
                              ? "text-[#E94B1C]"
                              : "text-[#C63D1B]"
                          }`}
                        >
                          Departments (12 Specialities)
                        </Link>
                      </div>

                      {/* Medical Group */}
                      <div className="p-3 border-b border-[#E9D8CE]">
                        <button
                          type="button"
                          onClick={() => setMobileMedicalOpen(!mobileMedicalOpen)}
                          className="w-full flex items-center justify-between text-xs font-bold text-[#006677] py-1"
                        >
                          <span>Medical Department (8)</span>
                          <ChevronDown
                            className={`w-3.5 h-3.5 transition-transform ${
                              mobileMedicalOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {mobileMedicalOpen && (
                          <div className="mt-2 space-y-1 pl-1">
                            {MEDICAL_SPECIALITIES.map((spec) => (
                              <Link
                                key={spec.slug}
                                to={`/specialities/${spec.slug}`}
                                onClick={() => setMenuOpen(false)}
                                className="flex items-center gap-2.5 py-1.5 px-2 rounded-lg text-xs font-medium text-[#006677] hover:bg-white"
                              >
                                <img
                                  src={spec.heroImage}
                                  alt={spec.name}
                                  className="w-6 h-6 rounded-md object-cover border border-[#BDE0E8]/70 shrink-0"
                                />
                                <span className="truncate">{spec.name}</span>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Surgical Group */}
                      <div className="p-3">
                        <button
                          type="button"
                          onClick={() => setMobileSurgicalOpen(!mobileSurgicalOpen)}
                          className="w-full flex items-center justify-between text-xs font-bold text-[#C63D1B] py-1"
                        >
                          <span>Surgical Department (4)</span>
                          <ChevronDown
                            className={`w-3.5 h-3.5 transition-transform ${
                              mobileSurgicalOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {mobileSurgicalOpen && (
                          <div className="mt-2 space-y-1 pl-1">
                            {SURGICAL_SPECIALITIES.map((spec) => (
                              <Link
                                key={spec.slug}
                                to={`/specialities/${spec.slug}`}
                                onClick={() => setMenuOpen(false)}
                                className="flex items-center gap-2.5 py-1.5 px-2 rounded-lg text-xs font-medium text-[#006677] hover:bg-white"
                              >
                                <img
                                  src={spec.heroImage}
                                  alt={spec.name}
                                  className="w-6 h-6 rounded-md object-cover border border-[#E9D8CE] shrink-0"
                                />
                                <span className="truncate">{spec.name}</span>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <NavLink
                      to="/doctors"
                      onClick={() => setMenuOpen(false)}
                      className={() => getMobileNavClass("/doctors", "doctors")}
                    >
                      Doctors
                    </NavLink>

                    {/* Mobile Expandable Facilities */}
                    <div className="rounded-2xl border border-[#E9D8CE] bg-[#FFF9F3] overflow-hidden my-2">
                      <div className="p-3 bg-[#FFF0E6]/80 flex items-center justify-between">
                        <Link
                          to="/facilities"
                          onClick={() => setMenuOpen(false)}
                          className={`text-xs font-bold uppercase tracking-wider ${
                            (isHomePage && (activeSection === "facilities" || activeSection === "insurance")) || isFacilitiesActive
                              ? "text-[#E94B1C]"
                              : "text-[#C63D1B]"
                          }`}
                        >
                          Facilities
                        </Link>
                        <button
                          type="button"
                          onClick={() => setMobileFacilitiesOpen(!mobileFacilitiesOpen)}
                          className="p-1 text-[#C63D1B]"
                        >
                          <ChevronDown
                            className={`w-3.5 h-3.5 transition-transform ${
                              mobileFacilitiesOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>

                      {mobileFacilitiesOpen && (
                        <div className="p-3 space-y-2">
                          <Link
                            to="/insurance"
                            onClick={() => setMenuOpen(false)}
                            className="flex items-center gap-2.5 py-1.5 px-2 rounded-lg text-xs font-medium text-[#14233C] hover:bg-white"
                          >
                            <div className="w-6 h-6 rounded-md bg-[#FFF0E6] text-[#E94B1C] flex items-center justify-center shrink-0">
                              <ShieldCheck className="w-3.5 h-3.5" />
                            </div>
                            <span>Insurance & Cashless Facility</span>
                          </Link>

                          <Link
                            to="/emergency"
                            onClick={() => setMenuOpen(false)}
                            className="flex items-center gap-2.5 py-1.5 px-2 rounded-lg text-xs font-medium text-[#14233C] hover:bg-white"
                          >
                            <div className="w-6 h-6 rounded-md bg-[#FFF0E6] text-[#E94B1C] flex items-center justify-center shrink-0">
                              <AlertTriangle className="w-3.5 h-3.5" />
                            </div>
                            <span>Emergency Services</span>
                          </Link>

                          <Link
                            to="/facilities"
                            onClick={() => setMenuOpen(false)}
                            className="flex items-center gap-2.5 py-1.5 px-2 rounded-lg text-xs font-medium text-[#E94B1C] hover:bg-white border-t border-[#F2E5D8] pt-2"
                          >
                            <div className="w-6 h-6 rounded-md bg-[#FFF0E6] text-[#E94B1C] flex items-center justify-center shrink-0">
                              <Building2 className="w-3.5 h-3.5" />
                            </div>
                            <span className="font-semibold">Explore All Facilities →</span>
                          </Link>
                        </div>
                      )}
                    </div>

                    <NavLink
                      to="/contact"
                      onClick={() => setMenuOpen(false)}
                      className={() => getMobileNavClass("/contact", "contact")}
                    >
                      Contact
                    </NavLink>
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
                        <div className="text-[11px] text-[#756860]">
                          24/7 Emergency Casualty
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-5 border-t border-[#E9D8CE] bg-[#FFF9F3] text-xs text-[#756860]">
                Sainagar, 9th Cross, Anantapur - 515001
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;

import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useSpring,
  useTransform,
  useInView,
} from "framer-motion";
import {
  ArrowRight,
  Calendar,
  LayoutGrid,
  ShieldCheck,
  Ambulance,
  Sparkles,
  Phone,
  MessageCircle,
  Globe,
  Users,
} from "lucide-react";

function StatCounter({ value, suffix = "", inView }) {
  const springValue = useSpring(0, { stiffness: 70, damping: 20 });
  const displayValue = useTransform(springValue, (v) =>
    Math.round(v).toLocaleString()
  );
  useEffect(() => {
    if (inView) springValue.set(value);
  }, [inView, springValue, value]);
  return (
    <span className="inline-flex items-center">
      <motion.span>{displayValue}</motion.span>
      {suffix && <span>{suffix}</span>}
    </span>
  );
}

export function HomeHero() {
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.3 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    setMousePos({
      x: (clientX / innerWidth - 0.5) * 2,
      y: (clientY / innerHeight - 0.5) * 2,
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section
      id="home-hero"
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-[940px] lg:h-screen lg:max-h-[1020px] flex flex-col justify-between overflow-hidden text-slate-800"
      style={{ background: "linear-gradient(135deg, #FFF9F3 0%, #FFF5EC 40%, #FFF3E8 70%, #FFFAF6 100%)" }}
    >
      {/* ── 1. CLEAN PREMIUM BACKGROUND — Soft warm cream with subtle ambient lighting ── */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        {/* Top-left warm golden ambient bloom */}
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-amber-300/15 blur-[100px]" />
        {/* Right-side soft orange ambient bloom behind the video */}
        <div className="absolute top-0 right-0 w-[700px] h-[800px] rounded-full bg-orange-300/10 blur-[120px]" />
        {/* Bottom center soft glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-gradient-to-t from-amber-100/40 to-transparent blur-[60px]" />
        {/* Very subtle dot-grid texture */}
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(circle, #D9771E 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      </div>

      {/* ── 2. MAIN TWO-COLUMN CONTENT ── */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 pt-32 sm:pt-36 lg:pt-32 pb-24 flex-1 flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-2 items-center">

          {/* ── LEFT COLUMN: EDITORIAL CONTENT & ACTION CTAs ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 xl:col-span-5 flex flex-col items-start text-left space-y-5 lg:pr-4 z-10"
          >
            {/* Eyebrow badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#A86B3D]"
            >
              <span className="w-4 h-[2px] bg-[#E58A3C]" />
              <span>SURYA MULTI-SPECIALITY HOSPITAL • ANANTAPUR</span>
            </motion.div>

            {/* Main Editorial Serif Heading: "Comprehensive Medical Care." */}
            <motion.div variants={itemVariants}>
              <h1 className="font-serif-heading text-[2.8rem] sm:text-[3.6rem] md:text-[4.2rem] lg:text-[4.4rem] font-bold text-[#14233C] tracking-tight leading-[1.04]">
                Comprehensive<br />
                <span className="text-[#D9771E]">Medical Care.</span>
              </h1>
            </motion.div>

            {/* Cursive Calligraphic Sub-heading */}
            <motion.div variants={itemVariants} className="w-full overflow-visible -mt-1">
              <p className="font-script text-[2.1rem] sm:text-[2.6rem] md:text-[3.1rem] lg:text-[3.3rem] text-[#C97B38] whitespace-nowrap leading-[1.15] select-none">
                Committed to Your Well-being.
              </p>
            </motion.div>

            {/* Description Body */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-[15px] lg:text-base text-[#4A5568] font-medium leading-relaxed max-w-lg"
            >
              Advanced medical treatment, experienced doctors, modern
              facilities and 24/7 emergency services — all under one roof
              at Surya Hospital.
            </motion.p>

            {/* Action Buttons Row */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 sm:gap-5 pt-2">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-full shadow-[0_8px_24px_rgba(217,119,30,0.38)]"
              >
                <Link
                  to="/appointment"
                  id="hero-primary-cta"
                  className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm sm:text-base font-bold text-white bg-gradient-to-r from-[#D9771E] via-[#E68A2E] to-[#D9771E] hover:brightness-105 transition-all"
                >
                  <Calendar className="w-4 h-4 text-white" />
                  <span>Book an Appointment</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform ml-0.5" />
                </Link>
              </motion.div>

              <Link
                to="/specialities"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full text-sm sm:text-base font-bold text-[#14233C] bg-white/85 hover:bg-white border border-slate-200/80 shadow-xs transition-all hover:text-[#D9771E]"
              >
                <LayoutGrid className="w-4 h-4 text-[#D9771E]" />
                <span>Explore Our Specialities</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </Link>
            </motion.div>

            {/* Trust Badges matching reference 3-column pill markers */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 w-full max-w-xl"
            >
              {/* Badge 1 */}
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/75 backdrop-blur-xs border border-white/80 shadow-xs">
                <div className="w-7 h-7 rounded-full bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-bold text-slate-800 leading-tight">
                  NABH Standard Infrastructure
                </span>
              </div>

              {/* Badge 2 */}
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/75 backdrop-blur-xs border border-white/80 shadow-xs">
                <div className="w-7 h-7 rounded-full bg-orange-500/10 text-orange-600 flex items-center justify-center shrink-0">
                  <Ambulance className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-bold text-slate-800 leading-tight">
                  24/7 Emergency Care
                </span>
              </div>

              {/* Badge 3 */}
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/75 backdrop-blur-xs border border-white/80 shadow-xs">
                <div className="w-7 h-7 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-bold text-slate-800 leading-tight">
                  Safe &amp; Hygienic Environment
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* ── RIGHT COLUMN: SEAMLESSLY MERGED ARCHITECTURAL VIDEO (ENLARGED + SHARPENED) ── */}
          <div className="lg:col-span-7 xl:col-span-7 relative flex items-center justify-center lg:justify-end">
            {/* SVG convolution sharpening filter definition */}
            <svg className="sr-only" aria-hidden="true">
              <defs>
                <filter id="hero-video-sharpen">
                  {/* Subtle 3x3 unsharp convolution kernel: boosts high-frequency edge details */}
                  <feConvolveMatrix
                    order="3"
                    preserveAlpha="true"
                    kernelMatrix="
                      0 -0.4  0
                     -0.4 2.6 -0.4
                      0 -0.4  0"
                  />
                </filter>
              </defs>
            </svg>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[1450px] xl:max-w-[1580px] flex items-center justify-center lg:scale-[1.65] xl:scale-[1.72] origin-center lg:origin-right lg:-mr-16 xl:-mr-28"
            >
              {/* Seamless container:
                  1. Matching #FFF5EC backdrop
                  2. Broadened radial mask preserving building 100% while dissolving outer canvas edges
                  3. Hardware-accelerated sharpening filter + calibrated contrast/saturation */}
              <div
                className="relative w-full overflow-hidden rounded-3xl"
                style={{
                  backgroundColor: "#FFF5EC",
                  WebkitMaskImage:
                    "radial-gradient(50% 50% at 50% 50%, black 72%, rgba(0,0,0,0.92) 85%, rgba(0,0,0,0.3) 95%, transparent 100%)",
                  maskImage:
                    "radial-gradient(50% 50% at 50% 50%, black 72%, rgba(0,0,0,0.92) 85%, rgba(0,0,0,0.3) 95%, transparent 100%)",
                }}
              >
                <video
                  src="/hero-video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-auto block select-none pointer-events-none"
                  style={{
                    mixBlendMode: "multiply",
                    filter: "url(#hero-video-sharpen) contrast(1.22) brightness(1.04) saturate(1.3)",
                    transform: `translate3d(${mousePos.x * 5}px, ${mousePos.y * 3}px, 0)`,
                    transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* ── 3. FLOATING ACTION WIDGET PILL (RIGHT EDGE) ── */}
      <div className="fixed right-3 sm:right-5 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-2 bg-white/92 backdrop-blur-xl border border-white/80 shadow-[0_12px_36px_rgba(0,0,0,0.12)] rounded-full py-4 px-2.5">
        {/* WhatsApp */}
        <a
          href="https://wa.me/918500904999?text=Hello%20Surya%20Hospital"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center gap-1 p-1 rounded-full hover:bg-emerald-50 text-slate-700 transition-colors"
          title="Chat on WhatsApp"
        >
          <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all">
            <MessageCircle className="w-5 h-5 fill-current" />
          </div>
          <span className="text-[9px] font-bold text-slate-600 group-hover:text-emerald-700">WhatsApp</span>
        </a>

        <div className="w-6 h-[1px] bg-slate-200/80" />

        {/* Online Portal */}
        <Link
          to="/appointment"
          className="group flex flex-col items-center gap-1 p-1 rounded-full hover:bg-amber-50 text-slate-700 transition-colors"
          title="Online Patient Portal"
        >
          <div className="w-10 h-10 rounded-full bg-amber-500/10 text-amber-600 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-all">
            <Globe className="w-5 h-5" />
          </div>
          <span className="text-[9px] font-bold text-slate-600 group-hover:text-amber-700 text-center leading-tight">Online<br />Portal</span>
        </Link>

        <div className="w-6 h-[1px] bg-slate-200/80" />

        {/* 24/7 Call */}
        <a
          href="tel:+918500904999"
          className="group flex flex-col items-center gap-1 p-1 rounded-full hover:bg-orange-50 text-slate-700 transition-colors"
          title="Call 24/7 Casualty Desk"
        >
          <div className="w-10 h-10 rounded-full bg-orange-500/10 text-orange-600 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-all">
            <Phone className="w-4 h-4 fill-current" />
          </div>
          <span className="text-[9px] font-bold text-slate-600 group-hover:text-orange-700 text-center leading-tight">24/7<br />Call</span>
        </a>
      </div>

      {/* ── 4. REFERENCE GLASS STATS BAR (DOCK AT BOTTOM) ── */}
      <motion.div
        ref={statsRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative z-20 w-full max-w-[1360px] mx-auto px-4 sm:px-6 pb-6 pointer-events-auto"
      >
        <div className="bg-white/90 backdrop-blur-xl border border-white/95 shadow-[0_16px_40px_rgba(0,0,0,0.08)] rounded-3xl px-6 sm:px-10 py-5 sm:py-6 flex flex-col lg:flex-row items-center justify-between gap-6">

          {/* Stats Group matching reference layout with orange icons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 sm:gap-14 divide-x divide-slate-200/80">
            {/* Stat 1: Open 24 Hours Hospital */}
            <div className="flex items-center gap-3.5 text-left">
              <div className="w-11 h-11 rounded-2xl bg-[#E88C38]/15 text-[#D9771E] flex items-center justify-center shrink-0">
                <Ambulance className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#14233C] tracking-tight leading-none flex items-center gap-1.5">
                  <span>24 Hours</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#758295] mt-1">
                  OPEN 24/7 ALL 365 DAYS
                </div>
              </div>
            </div>

            {/* Stat 2: 12+ Specialties */}
            <div className="pl-8 sm:pl-14 flex items-center gap-3.5 text-left">
              <div className="w-11 h-11 rounded-2xl bg-[#E88C38]/15 text-[#D9771E] flex items-center justify-center shrink-0">
                <Users className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#14233C] tracking-tight leading-none">
                  <StatCounter value={12} suffix="+" inView={isStatsInView} />
                </div>
                <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#758295] mt-1">
                  SPECIALTIES
                </div>
              </div>
            </div>

            {/* Stat 3: 20+ Doctors & Staff */}
            <div className="pl-8 sm:pl-14 flex items-center gap-3.5 text-left">
              <div className="w-11 h-11 rounded-2xl bg-[#E88C38]/15 text-[#D9771E] flex items-center justify-center shrink-0">
                <Users className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#14233C] tracking-tight leading-none">
                  <StatCounter value={20} suffix="+" inView={isStatsInView} />
                </div>
                <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#758295] mt-1">
                  DOCTORS &amp; STAFF
                </div>
              </div>
            </div>
          </div>


          {/* Right: Hospital Location Pin */}
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-full bg-[#E88C38]/15 text-[#D9771E] flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-[#14233C] leading-snug">
                Sai Nagar, Anantapur,
              </div>
              <div className="text-[11px] sm:text-xs text-[#6A7686] leading-snug">
                Behind Ambedkar Bhavan, 9th Cross Road
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}

export default HomeHero;

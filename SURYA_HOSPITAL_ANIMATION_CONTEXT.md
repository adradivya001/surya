# Surya Hospital UI — Complete Animation Architecture & Context Guide

This document catalogs every animation engine, technique, component, and page-level animation pattern used across the Surya Hospital codebase. You can share this document directly with any AI agent or developer to recreate or extend the design system.

---

## 1. Core Animation Libraries & Engines

1. **GSAP (GreenSock)**:
   - Powers canvas render loops (`gsap.ticker.add(render)`).
   - Handles sprite coordinate movement, bounce oscillation (`yoyo: true`), and timeline sequencing.
2. **Framer Motion (`framer-motion`)**:
   - Component spring hovers (`stiffness: 400`, `damping: 25`).
   - Modal entrances/exits (`initial={{ opacity: 0, scale: 0.95 }}` -> `animate={{ opacity: 1, scale: 1 }}`).
   - Layout transitions across tabs and filter pills.
3. **HTML5 2D Canvas & Pixel Shaders**:
   - Real-time video chroma/luma transparency extraction via `getImageData`.
   - Halftone dot matrix rasterization and spring physics repulsion.
4. **Pure CSS3 Transitions & Keyframes**:
   - Continuous 60fps infinite marquees (`translateY: 0% to -50%` and `translateX: 0% to -50%`).
   - Radar pulse waves and glowing gradient borders.

---

## 2. Layout & Global Animations (Every Page)

### A. Navigation Bar (`src/components/layout/Navbar.jsx`)
- **Scroll Glassmorphism**: Dynamically toggles backdrop blur and borders when scrolling past `20px`.
- **Active Navigation Pill**: Smooth underline/highlight shift on route change.
- **Top Emergency Bar (`TopEmergencyBar.jsx`)**: Flashing alert ping animation (`animate-ping`) next to emergency contact numbers.

### B. Floating 24/7 Casualty Button (`src/components/layout/FloatingEmergency247.jsx`)
- **Radar Pulse Wave**: Multi-ring ripple effect expanding outward (`scale(1.8)`, `opacity: 0`) to draw immediate eye attention.
- **Spring Floating Effect**: Gentle resting levitation with spring hover scale.

### C. Halftone Wordmark Footer (`src/components/ui/halftone-wordmark-footer.jsx`)
- **Text Rasterization**: Hidden canvas samples text `"surya hospital"` into an alpha coverage grid.
- **Mouse Repulsion Physics**: Cursor pushes dots away (`hwfStep`) within a `90px` radius; dots damp back to home coordinates smoothly.
- **Kinetic Color Warmth**: Mouse velocity temporarily transitions dots from cool ice blue to hospital orange (`hwfWarmth`).

### D. Scroll In-View Wrapper (`src/components/ui/AnimateIn.jsx`)
- Viewport intersection observer adding `fade-up`, `fade-left`, or `scale-up` once 15% of a section becomes visible.

---

## 3. Home Page Animations Breakdown

### 1. Hero Section (`HomeHero.jsx` & `HeroBuildingVideo.jsx`)
- **Real-Time Video Transparency Keying**:
  - Plays `/videos/surya_building_sketch_3d.mp4` silently in a hidden video tag.
  - Draws frames onto an HTML5 canvas.
  - Dynamically strips out background white pixels (`min(r, g, b) > 235`) to render the 3D rotating building transparently over the page's ambient gradient.
- **Ambient Lighting Glow**: Large blurred radial gradients pulsing behind the building model.
- **Hero Trust Strip Marquee (`HeroTrustStrip.css`)**: Continuous horizontal marquee for hospital accreditations (NABH, 24/7 ICU, Doctors).

### 2. Google Reviews & Testimonials (`TestimonialCarousel.jsx`)
- **Animated Walking Crowd Background (`CrowdCanvas` in `skiper39.jsx`)**:
  - Uses an Open Peeps sprite sheet (`15 cols x 7 rows`).
  - GSAP timelines walk sprites horizontally while oscillating a subtle vertical walking bob.
  - When a character walks off-screen, it resets to a random vertical depth (`anchorY`) and reverses direction.
  - Blended into background with `opacity-30 mix-blend-multiply pointer-events-none`.
- **Infinite 3-Column Vertical Marquee**:
  - CSS keyframe `testimonialVerticalLoop` moving items `translateY(0)` to `translateY(-50%)`.
  - Content mapped twice (`[...new Array(2)]`) for an uninterrupted loop.
  - Staggered column speeds (34s, 28s, 38s) with instant pause on hover.
  - Top & bottom gradient masks (`from-[#ECECE5] to-transparent`) for seamless edge fade.

### 3. Facilities Cinematic Showcase (`FacilitiesCinematic.jsx`)
- Slow camera push/pan (Ken Burns effect) over high-res facility photos with dynamic tab-switching indicators.

### 4. Specialties & Doctors Posters (`SpecialtiesDoctorsPoster.jsx`)
- Framer Motion category filtering with layout animations and smooth card elevation on hover (`y: -6px`).

---

## 4. Inner Pages Animation Matrix

| Page | Key Components | Animation Style |
| :--- | :--- | :--- |
| **All Inner Pages** | `PageHero.jsx` | Deep blue mesh gradient with subtle floating badge and staggered text reveal. |
| **Doctors** (`DoctorsPage.jsx`) | Department Filters & Doctor Cards | Staggered grid entrance, instant category filtering, hover card bloom, schedule expand. |
| **Specialities** (`SpecialitiesPage.jsx`) | Accordion & Service Grids | Icon rotation, expanding accordion details, slide-in treatment tags. |
| **Emergency 24/7** (`EmergencyPage.jsx`) | Live Triage & Ambulance CTA | Pulsing emergency beacons, fast click-to-call actions, high-contrast attention alerts. |
| **About Us** (`AboutPage.jsx`) | Milestone Timeline & Founder Story | Animated vertical path/timeline milestones unfolding as you scroll down. |
| **Insurance** (`InsurancePartnersPage.jsx`) | TPA / Cashless Providers | Responsive logo grid with gentle lift on hover and claim-process breadcrumb tabs. |
| **Contact** (`ContactPage.jsx`) | Form & Location Map | Input border glow on focus, map container entrance fade, animated submission checkmark. |
| **Appointment Modal** (`AppointmentModal.jsx`) | Global Booking Dialog | Backdrop blur fade, spring-loaded modal popup (`scale: 0.95 -> 1`), step slider transitions. |

---

## 5. Ready-to-Use Prompt for Another Agent

```markdown
You are building pages/components for the Surya Hospital design system.
Follow these established animation patterns:

1. Color Palette:
   - Primary Deep Navy: #13233D
   - Soft Ice Blue: #B2CEE2
   - Brand Orange: #E9762B / #E94B1C
   - Warm Neutral BG: #ECECE5 or #F0F4F8

2. Animation Guidelines:
   - Micro-interactions & Modals: Use Framer Motion (spring transition: stiffness 400, damping 25).
   - Marquees / Endless Tickers: Use dual-array maps with pure CSS linear keyframes (`translateY: 0% to -50%` or `translateX: 0% to -50%`) with pause-on-hover.
   - Background FX: Canvas 2D or GSAP ticker loops, layered behind content with `opacity-30 mix-blend-multiply pointer-events-none`.
   - Scroll reveals: IntersectionObserver with `fade-up` (opacity 0 -> 1, translate-y 20px -> 0px).
```


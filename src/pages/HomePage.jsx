import React, { useEffect } from "react";
import { FounderStorySection } from "../components/home/FounderStorySection";
import { SpecialtiesScrollSection } from "../components/home/SpecialtiesScrollSection";
import { SpecialtiesDoctorsPoster } from "../components/home/SpecialtiesDoctorsPoster";
import { TestimonialCarousel } from "../components/home/TestimonialCarousel";
import { FacilitiesServicesSection } from "../components/home/FacilitiesServicesSection";
import { InsuranceCashlessSection } from "../components/home/InsuranceCashlessSection";
import { EmergencySection } from "../components/home/EmergencySection";

/**
 * HomePage Component
 * Sequence:
 * 1. Home / Hero (FounderStorySection - #hero)
 * 2. Departments (SpecialtiesScrollSection - #specialities)
 * 3. Doctors (SpecialtiesDoctorsPoster - #doctors)
 * 4. Patient Experiences (TestimonialCarousel - #patient-journey)
 * 5. Facilities & Infrastructure (FacilitiesServicesSection - #facilities)
 * 6. Insurance & Cashless Support (InsuranceCashlessSection - #insurance)
 * 7. Emergency Services & Casualty (EmergencySection - #emergency)
 * 8. Contact / Footer (Institutional Footer - #contact)
 */
export function HomePage() {
  useEffect(() => {
    document.title = "Surya Hospital | Sai Nagar, Anantapur | Comprehensive Healthcare";
  }, []);

  return (
    <div className="w-full bg-[#FFF9F3]">
      {/* SECTION 1: HOME – HERO SECTION */}
      <FounderStorySection />

      {/* SECTION 2: DEPARTMENTS – HOSPITAL SPECIALITIES */}
      <SpecialtiesScrollSection />

      {/* SECTION 3: DOCTORS – MEET OUR SPECIALISTS */}
      <SpecialtiesDoctorsPoster />

      {/* SECTION 4: PATIENT EXPERIENCES – GOOGLE REVIEWS */}
      <TestimonialCarousel />

      {/* SECTION 5: FACILITIES – ADVANCED CARE & INFRASTRUCTURE */}
      <FacilitiesServicesSection />

      {/* SECTION 6: INSURANCE & CASHLESS SUPPORT */}
      <InsuranceCashlessSection />

      {/* SECTION 7: EMERGENCY SERVICES & 24/7 CASUALTY */}
      <EmergencySection />
    </div>
  );
}

export default HomePage;

import React, { useEffect } from "react";
import { HomeHero } from "../components/home/HomeHero";
import { HomeSpecialitiesGrid } from "../components/home/HomeSpecialitiesGrid";
import { FacilitiesCinematic } from "../components/home/FacilitiesCinematic";
import { SpecialtiesDoctorsPoster } from "../components/home/SpecialtiesDoctorsPoster";
import { TestimonialCarousel } from "../components/home/TestimonialCarousel";
import { InsuranceCashlessSection } from "../components/home/InsuranceCashlessSection";
import { HomeAppointmentCta } from "../components/home/HomeAppointmentCta";

export function HomePage() {
  useEffect(() => {
    document.title = "Surya Hospital | Sai Nagar, Anantapur | Comprehensive Healthcare";
  }, []);

  return (
    <div className="w-full bg-[#FFF9F3]">
      {/* 1. Hero Section with Integrated Stats & Organic Flowing Bottom Wave */}
      <HomeHero />

      {/* 2. Services Section with 15 Expert Specialties Grid */}
      <HomeSpecialitiesGrid />

      {/* 4. Advanced Technology & Facilities Section in Deep Clinical Teal */}
      <FacilitiesCinematic />

      {/* 5. Complete 12 Specialties & 19 Doctors Section matching reference poster */}
      <SpecialtiesDoctorsPoster />

      {/* 6. Patient Stories & Testimonials 3-Card Carousel */}
      <TestimonialCarousel />

      {/* 7. Insurance & Cashless Facility Section (24 Partners Grid) */}
      <InsuranceCashlessSection />

      {/* 8. Take the First Step Appointment Booking CTA Section */}
      <HomeAppointmentCta />
    </div>
  );
}

export default HomePage;

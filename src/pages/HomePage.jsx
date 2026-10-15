import React, { useEffect } from "react";
import { HomeHero } from "../components/home/HomeHero";
import { HomeAboutPreview } from "../components/home/HomeAboutPreview";
import { HomeSpecialitiesGrid } from "../components/home/HomeSpecialitiesGrid";
import { HomeFeaturedDoctors } from "../components/home/HomeFeaturedDoctors";
import { HomePatientJourney } from "../components/home/HomePatientJourney";
import { HomeWhyChooseUs } from "../components/home/HomeWhyChooseUs";
import { HomeAppointmentCta } from "../components/home/HomeAppointmentCta";
import { HomeContactPreview } from "../components/home/HomeContactPreview";

export function HomePage() {
  useEffect(() => {
    document.title = "Surya Hospital | Sai Nagar, Anantapur | Comprehensive Healthcare";
  }, []);

  return (
    <div className="w-full">
      {/* 1. Hero Section with Integrated Trust Strip */}
      <HomeHero />

      {/* 2. About Surya Hospital */}
      <HomeAboutPreview />

      {/* 3. Specialities Section */}
      <HomeSpecialitiesGrid />

      {/* 4. Featured Doctors */}
      <HomeFeaturedDoctors />

      {/* 5. Patient Journey */}
      <HomePatientJourney />

      {/* 6. Why Choose Us */}
      <HomeWhyChooseUs />

      {/* 7. Appointment CTA */}
      <HomeAppointmentCta />

      {/* 8. Contact Preview */}
      <HomeContactPreview />
    </div>
  );
}
export default HomePage;

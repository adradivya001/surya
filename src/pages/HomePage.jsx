import React, { useEffect } from "react";
import { HomeHero } from "../components/home/HomeHero";
import { HomeAboutPreview } from "../components/home/HomeAboutPreview";
import { HomeSpecialitiesGrid } from "../components/home/HomeSpecialitiesGrid";
import { HomeFeaturedDoctors } from "../components/home/HomeFeaturedDoctors";
import { HomeDiagnosticsPreview } from "../components/home/HomeDiagnosticsPreview";
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
      {/* 5.A. Hero Section with Integrated Trust Strip */}
      <HomeHero />

      {/* 5.C. About Surya Hospital */}
      <HomeAboutPreview />

      {/* 5.D. Specialities Section */}
      <HomeSpecialitiesGrid />

      {/* 5.E. Featured Doctors */}
      <HomeFeaturedDoctors />

      {/* 5.F. Diagnostic Services */}
      <HomeDiagnosticsPreview />

      {/* 5.H. Patient Journey */}
      <HomePatientJourney />

      {/* 5.I. Why Choose Us */}
      <HomeWhyChooseUs />

      {/* 5.J. Appointment CTA */}
      <HomeAppointmentCta />

      {/* 5.K. Contact Preview */}
      <HomeContactPreview />
    </div>
  );
}
export default HomePage;

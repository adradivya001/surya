import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { MobileBottomBar } from "./components/layout/MobileBottomBar";
import { ScrollToTop } from "./components/layout/ScrollToTop";

// Multi-page route components
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { DoctorsPage } from "./pages/DoctorsPage";
import { SpecialitiesPage } from "./pages/SpecialitiesPage";
import { DiagnosticsPage } from "./pages/DiagnosticsPage";
import { EmergencyPage } from "./pages/EmergencyPage";
import { ContactPage } from "./pages/ContactPage";
import { AppointmentPage } from "./pages/AppointmentPage";

export function App() {
  return (
    <BrowserRouter>
      <div className="w-full min-h-screen flex flex-col bg-[#FFF8F2] text-[#59616B] antialiased font-sans overflow-x-hidden selection:bg-[#F6D8C5] selection:text-[#A84328]">
        <ScrollToTop />

        {/* 4. Reusable Navbar that appears consistently on every page */}
        <Navbar />

        {/* Route Pages Container */}
        <main className="w-full flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/doctors" element={<DoctorsPage />} />
            <Route path="/specialities" element={<SpecialitiesPage />} />
            <Route path="/services" element={<Navigate to="/specialities" replace />} />
            <Route path="/diagnostics" element={<DiagnosticsPage />} />
            <Route path="/emergency" element={<EmergencyPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/appointment" element={<AppointmentPage />} />
            {/* Fallback to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Reusable Institutional Footer on every page */}
        <Footer />

        {/* Dedicated Sticky Mobile Bottom Bar (< 992px) */}
        <MobileBottomBar />
      </div>
    </BrowserRouter>
  );
}

export default App;

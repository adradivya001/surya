import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "../components/ui/Container";
import { PageHero } from "../components/ui/PageHero";
import { Button } from "../components/ui/Button";
import {
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Stethoscope,
} from "lucide-react";
import { HOSPITAL_INFO } from "../constants/hospitalData";

export function AboutPage() {
  useEffect(() => {
    document.title = "About Us | Surya Hospital, Sai Nagar, Anantapur";
  }, []);

  return (
    <div className="w-full">
      {/* Page Hero */}
      <PageHero
        eyebrow="ABOUT SURYA HOSPITAL"
        title="Comprehensive Healthcare with Compassionate Care"
        description="Serving the families of Sai Nagar, Anantapur, and neighboring regions with dedicated outpatient consultations, sterile surgical procedures, and 24/7 emergency response."
        breadcrumbs={[{ label: "About Us" }]}
        badge="Sai Nagar, Anantapur"
      >
        <Link to="/doctors">
          <Button variant="primary" size="sm" icon={Stethoscope} className="bg-[#C65332] hover:bg-[#A84328] text-white">
            Meet Doctors
          </Button>
        </Link>
        <Link to="/specialities">
          <Button variant="secondary" size="sm" className="bg-white border-[#F0D9CB] text-[#252B33] hover:bg-[#FCECE2]">
            Clinical Specialities
          </Button>
        </Link>
      </PageHero>

      {/* Hospital Overview */}
      <section className="py-16 bg-[#FFF8F2] border-b border-[#F0D9CB]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Visual (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border border-[#F0D9CB] shadow-sm bg-white p-2">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#FCECE2]">
                  <img
                    src="/images/surya-reception.jpg"
                    alt="Surya Hospital Lobby and Reception in Sai Nagar Anantapur"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#252B33]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white text-xs font-semibold">
                    Surya Hospital Campus • Sai Nagar, Anantapur
                  </div>
                </div>
              </div>

              {/* Floating verified badge */}
              <div className="hidden sm:flex absolute -bottom-4 -left-4 bg-[#252B33] text-white p-3 rounded-xl shadow-md items-center gap-2.5 text-xs font-bold border border-[#373F4A]">
                <ShieldCheck className="w-4 h-4 text-[#D98A62]" />
                <span>Ethical Medical Practice</span>
              </div>
            </div>

            {/* Content (7 cols) */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#B96645]">
                HOSPITAL OVERVIEW
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#252B33] tracking-tight">
                Dedicated to Clinical Excellence in Anantapur
              </h2>
              <p className="text-sm sm:text-base text-[#59616B] leading-relaxed">
                {HOSPITAL_INFO.about.overview}
              </p>
              <p className="text-sm text-[#59616B] leading-relaxed">
                Centrally located behind Ambedkar Bhavan on 9th Cross Road, Sai Nagar, the facility is designed for easy accessibility, rapid patient triage, hygienic inpatient wards, and prompt surgical management.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-[#252B33] font-medium">
                <div className="flex items-center gap-2 bg-white p-3 rounded-lg border border-[#F0D9CB]">
                  <CheckCircle2 className="w-4 h-4 text-[#C65332] shrink-0" />
                  <span>24/7 Emergency & Casualty Wing</span>
                </div>
                <div className="flex items-center gap-2 bg-white p-3 rounded-lg border border-[#F0D9CB]">
                  <CheckCircle2 className="w-4 h-4 text-[#C65332] shrink-0" />
                  <span>Equipped Operation Suites</span>
                </div>
                <div className="flex items-center gap-2 bg-white p-3 rounded-lg border border-[#F0D9CB]">
                  <CheckCircle2 className="w-4 h-4 text-[#C65332] shrink-0" />
                  <span>In-House Pathology & Ultrasound</span>
                </div>
                <div className="flex items-center gap-2 bg-white p-3 rounded-lg border border-[#F0D9CB]">
                  <CheckCircle2 className="w-4 h-4 text-[#C65332] shrink-0" />
                  <span>24/7 In-House Pharmacy</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Medical Leadership & Founder Section */}
      <section className="py-14 bg-white border-b border-[#F0D9CB]">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#FFF8F2] rounded-2xl border border-[#F0D9CB] p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 sm:gap-8 shadow-xs">
              <div className="relative w-36 h-44 sm:w-44 sm:h-52 rounded-xl overflow-hidden bg-[#FCECE2] shrink-0 border border-[#F0D9CB] shadow-sm">
                <img
                  src="/images/dr-d-surya-prakash.png"
                  alt="Dr. D. Surya Prakash - Managing Director & Consultant Physician"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="space-y-3 text-left">
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#C65332] text-white inline-block">
                  Managing Director & Founder
                </span>
                <h3 className="text-2xl font-bold text-[#252B33]">
                  Dr. D. Surya Prakash
                </h3>
                <p className="text-sm font-semibold text-[#C65332]">
                  M.D. Internal Medicine • Consultant Physician
                </p>
                <p className="text-xs sm:text-sm text-[#59616B] leading-relaxed">
                  Under the clinical guidance and leadership of Dr. D. Surya Prakash, Surya Hospital is committed to compassionate patient care, ethical medical practices, and comprehensive outpatient and inpatient clinical excellence in Sai Nagar, Anantapur.
                </p>
                <div className="pt-1">
                  <Link to="/doctors">
                    <Button variant="outline" size="sm" className="text-xs font-bold border-[#D98A62] bg-white text-[#252B33] hover:bg-[#FCECE2]">
                      View Full Clinical Profile & OPD Timings
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & Vision (Draft Copy Notice as Required) */}
      <section className="py-16 bg-white border-b border-[#F0D9CB]">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="p-3.5 rounded-xl bg-[#FCECE2] border border-[#F0D9CB] flex items-start gap-2.5 text-xs text-[#252B33]">
              <AlertCircle className="w-4 h-4 text-[#C65332] shrink-0 mt-0.5" />
              <span>
                <strong>Institutional Draft Note:</strong> The mission and vision statements below are proposed draft copy under review by hospital administration to accurately reflect our institutional standards.
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Mission Card */}
              <div className="p-6 rounded-xl bg-[#FFF8F2] border border-[#F0D9CB] shadow-2xs space-y-3 text-left">
                <div className="w-10 h-10 rounded-lg bg-[#F6D8C5] text-[#C65332] flex items-center justify-center font-bold">
                  M
                </div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-[#B96645] block">
                  Our Mission (Draft Proposal)
                </span>
                <h3 className="text-lg font-bold text-[#252B33]">
                  Accessible, Compassionate Patient Care
                </h3>
                <p className="text-xs sm:text-sm text-[#59616B] leading-relaxed">
                  {HOSPITAL_INFO.about.missionDraft}
                </p>
              </div>

              {/* Vision Card */}
              <div className="p-6 rounded-xl bg-[#FFF8F2] border border-[#F0D9CB] shadow-2xs space-y-3 text-left">
                <div className="w-10 h-10 rounded-lg bg-[#F6D8C5] text-[#A84328] flex items-center justify-center font-bold">
                  V
                </div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-[#A84328] block">
                  Our Vision (Draft Proposal)
                </span>
                <h3 className="text-lg font-bold text-[#252B33]">
                  Regional Center of Medical Excellence
                </h3>
                <p className="text-xs sm:text-sm text-[#59616B] leading-relaxed">
                  {HOSPITAL_INFO.about.visionDraft}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Patient Care Philosophy */}
      <section className="py-16 bg-[#FFF8F2] border-b border-[#F0D9CB]">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B96645]">
              CARE PHILOSOPHY
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#252B33] tracking-tight">
              Dignified Bedside Care and Transparent Medical Advice
            </h2>
            <p className="text-sm sm:text-base text-[#59616B] leading-relaxed">
              {HOSPITAL_INFO.about.philosophy}
            </p>
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white border-b border-[#F0D9CB]">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B96645]">
              GUIDING PRINCIPLES
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#252B33] tracking-tight">
              Core Hospital Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {HOSPITAL_INFO.values.map((val) => (
              <div
                key={val.title}
                className="bg-[#FFF8F2] p-5 rounded-xl border border-[#F0D9CB] shadow-2xs text-left space-y-2"
              >
                <div className="w-9 h-9 rounded-lg bg-[#F6D8C5] text-[#C65332] flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#252B33]">{val.title}</h3>
                <p className="text-xs text-[#59616B] leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Verified Facilities & Services */}
      <section className="py-16 bg-[#FFF8F2] border-b border-[#F0D9CB]">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B96645]">
              INFRASTRUCTURE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#252B33] tracking-tight">
              Verified Facilities & Clinical Infrastructure
            </h2>
            <p className="text-xs sm:text-sm text-[#59616B]">
              Equipped with necessary clinical technology to support accurate treatment and swift emergency response.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {HOSPITAL_INFO.services.map((svc) => (
              <div
                key={svc.id}
                className="p-5 rounded-xl border border-[#F0D9CB] bg-white text-left space-y-2 shadow-2xs"
              >
                <div className="text-xs font-bold text-[#C65332] uppercase tracking-wider">
                  Verified Service
                </div>
                <h3 className="text-base font-bold text-[#252B33]">{svc.name}</h3>
                <p className="text-xs text-[#59616B] leading-relaxed">{svc.details}</p>
              </div>
            ))}
          </div>

          {/* Cross-page Navigation CTA */}
          <div className="mt-12 p-8 rounded-2xl bg-[#252B33] border border-[#373F4A] text-white flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-white">
                Have questions about our doctors or departments?
              </h3>
              <p className="text-xs text-[#A0A8B4]">
                Explore our full specialist roster or contact our reception desk directly.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link to="/doctors">
                <Button variant="secondary" size="md" className="font-bold text-xs bg-white text-[#252B33] hover:bg-[#FCECE2]">
                  View Doctor Directory
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="md" className="font-bold text-xs text-white border-[#D98A62] hover:bg-white/10">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
export default AboutPage;

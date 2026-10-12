import React, { useEffect } from "react";
import { Container } from "../components/ui/Container";
import { PageHero } from "../components/ui/PageHero";
import { Button } from "../components/ui/Button";
import {
  PhoneCall,
  MapPin,
  Clock,
  AlertTriangle,
  ExternalLink,
  ShieldAlert,
  CheckCircle2,
  AlertCircle,
  FileText,
  Navigation,
} from "lucide-react";
import { HOSPITAL_INFO } from "../constants/hospitalData";

export function EmergencyPage() {
  useEffect(() => {
    document.title = "24/7 Emergency Care | Surya Hospital, Sai Nagar, Anantapur";
  }, []);

  return (
    <div className="w-full bg-[#FFF8F2]">
      {/* High-priority Emergency Hero Banner */}
      <section className="bg-[#252B33] text-white py-12 md:py-16 border-b border-[#373F4A]">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C65332] text-white shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
              <span>24/7 EMERGENCY & CASUALTY OPEN NOW</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Emergency & Trauma Care Services
            </h1>

            <p className="text-sm sm:text-base text-[#D0D6DE] leading-relaxed max-w-2xl mx-auto">
              Surya Hospital provides immediate emergency medical stabilization, trauma management, and acute physician triage in Sai Nagar, Anantapur.
            </p>

            {/* Large Call Hospital Button */}
            <div className="pt-2">
              <a
                href={`tel:${HOSPITAL_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base sm:text-lg font-black bg-[#C65332] hover:bg-[#A84328] text-white shadow-md transition transform hover:scale-102 active:scale-98"
              >
                <PhoneCall className="w-6 h-6 animate-pulse" />
                <span>Call Emergency Helpline: {HOSPITAL_INFO.phone}</span>
              </a>
            </div>

            {/* Address & Direct Navigation */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-[#D0D6DE]">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#D98A62] shrink-0" />
                <span>{HOSPITAL_INFO.fullAddress}</span>
              </div>
              <a
                href={HOSPITAL_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F6D8C5] hover:underline font-bold flex items-center gap-1"
              >
                <span>Navigate to Hospital on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* National Emergency 112 Notice as Required */}
      <section className="py-8 bg-[#FCECE2] border-b border-[#F0D9CB]">
        <Container>
          <div className="max-w-3xl mx-auto flex items-start gap-3.5 text-xs text-[#252B33]">
            <AlertCircle className="w-5 h-5 text-[#C65332] shrink-0 mt-0.5" />
            <div className="space-y-1 text-left">
              <h4 className="font-bold text-[#252B33] text-sm">
                National Emergency Services Guidance (India):
              </h4>
              <p className="leading-relaxed text-[#59616B]">
                For life-threatening emergencies requiring national police, fire, or government disaster dispatch across India, dial <strong>112</strong> immediately.
              </p>
              <p className="text-[11px] text-[#808A96]">
                Please note: National 112 services are operated by Government of India authorities and are not operated by Surya Hospital.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Emergency Guidance: Symptoms & What to Bring */}
      <section className="py-16 bg-white border-b border-[#F0D9CB]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-5xl mx-auto">
            {/* When to visit casualty */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#FFF8F2] border border-[#F0D9CB] shadow-2xs space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-[#F6D8C5] text-[#C65332] flex items-center justify-center font-bold">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#252B33]">
                    When to Seek Immediate Casualty Care
                  </h3>
                  <span className="text-xs text-[#C65332] font-semibold">
                    Acute & Trauma Symptoms
                  </span>
                </div>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-[#59616B]">
                {HOSPITAL_INFO.emergencyGuidance.whenToVisit.map((symptom, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#C65332] mt-2 shrink-0" />
                    <span>{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What to bring to casualty */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#FFF8F2] border border-[#F0D9CB] shadow-2xs space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-[#F6D8C5] text-[#C65332] flex items-center justify-center font-bold">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#252B33]">
                    What to Bring if Time Permits
                  </h3>
                  <span className="text-xs text-[#B96645] font-semibold">
                    Essential Patient Documentation
                  </span>
                </div>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-[#59616B]">
                {HOSPITAL_INFO.emergencyGuidance.whatToBring.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C65332] mt-0.5 shrink-0" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 p-3 rounded-xl bg-white border border-[#F0D9CB] text-xs text-[#59616B]">
                <strong className="text-[#252B33]">Emergency Priority Notice:</strong> If documents are unavailable during acute trauma or distress, proceed to casualty immediately without delay. Medical care always comes first.
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Casualty Process Flow */}
      <section className="py-16 bg-[#FFF8F2] border-b border-[#F0D9CB]">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8 text-left">
            <div className="text-center space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#B96645]">
                TRIAGE PROTOCOL
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#252B33] tracking-tight">
                What Happens When You Arrive at Casualty
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-white border border-[#F0D9CB] space-y-2 shadow-2xs">
                <span className="text-xl font-black text-[#C65332]">01</span>
                <h4 className="font-bold text-[#252B33] text-sm">Immediate Triage</h4>
                <p className="text-[#59616B] leading-relaxed">
                  Duty nurse checks vitals (blood pressure, pulse, oxygen) and assesses acuity.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#F0D9CB] space-y-2 shadow-2xs">
                <span className="text-xl font-black text-[#C65332]">02</span>
                <h4 className="font-bold text-[#252B33] text-sm">Physician Assessment</h4>
                <p className="text-[#59616B] leading-relaxed">
                  Emergency medical officer or on-call specialist performs clinical examination.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#F0D9CB] space-y-2 shadow-2xs">
                <span className="text-xl font-black text-[#C65332]">03</span>
                <h4 className="font-bold text-[#252B33] text-sm">Acute Stabilization</h4>
                <p className="text-[#59616B] leading-relaxed">
                  IV access, pain management, oxygen, ECG, or wound care administered rapidly.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#F0D9CB] space-y-2 shadow-2xs">
                <span className="text-xl font-black text-[#C65332]">04</span>
                <h4 className="font-bold text-[#252B33] text-sm">Admission or Discharge</h4>
                <p className="text-[#59616B] leading-relaxed">
                  Patient transitioned to inpatient care, surgical suite, or prescribed home care.
                </p>
              </div>
            </div>

            {/* Direct Location Card */}
            <div className="p-6 rounded-2xl bg-white border border-[#F0D9CB] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1">
                <h4 className="text-base font-bold text-[#252B33]">
                  Surya Hospital Emergency Entrance
                </h4>
                <p className="text-xs text-[#59616B]">
                  12-3-367, 9th Cross Road, behind Ambedkar Bhavan, Sai Nagar, Anantapur.
                </p>
              </div>
              <a
                href={HOSPITAL_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#252B33] hover:bg-[#1D2229] transition"
              >
                <Navigation className="w-4 h-4 text-[#D98A62]" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
export default EmergencyPage;

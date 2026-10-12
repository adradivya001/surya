import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Calendar, Search, UserCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { HOSPITAL_INFO } from "../../constants/hospitalData";

const iconMap = [Search, UserCheck, Calendar, CheckCircle2];

export function HomePatientJourney() {
  return (
    <section className="py-16 md:py-20 bg-white border-b border-[#F0D9CB]">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#FCECE2] text-[#B96645] border border-[#F0D9CB]">
            CARE PROCESS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#252B33] tracking-tight">
            Your Patient Care Journey
          </h2>
          <p className="text-sm sm:text-base text-[#59616B] leading-relaxed">
            From initial enquiry to consultation and recovery, our clinical desk guides you with clarity at every step.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {HOSPITAL_INFO.patientJourney.map((step, idx) => {
            const Icon = iconMap[idx] || CheckCircle2;
            return (
              <div
                key={step.step}
                className="relative p-6 rounded-xl border border-[#F0D9CB] bg-white shadow-2xs hover:shadow-card hover:border-[#C65332] transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-[#B96645]/40 tracking-tight">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-[#F6D8C5] text-[#C65332] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-[#252B33] mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-[#59616B] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#F0D9CB] text-[11px] font-semibold text-[#C65332]">
                  Step {idx + 1} of 4
                </div>
              </div>
            );
          })}
        </div>

        {/* Backend transparency disclaimer */}
        <div className="mt-10 p-4 rounded-xl bg-[#FFF8F2] border border-[#F0D9CB] text-center max-w-2xl mx-auto">
          <p className="text-xs text-[#59616B]">
            <strong className="text-[#252B33]">Appointment Process Notice:</strong> Online requests are received by our reception team who verify doctor roster availability and contact you via phone to confirm your consultation schedule.
          </p>
        </div>
      </Container>
    </section>
  );
}

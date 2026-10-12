import React from "react";
import { Container } from "../ui/Container";
import { ShieldCheck, HeartHandshake, UserCheck, Clock, MapPin, CheckCircle } from "lucide-react";
import { HOSPITAL_INFO } from "../../constants/hospitalData";

const iconList = [HeartHandshake, MapPin, UserCheck, Clock, ShieldCheck];

export function HomeWhyChooseUs() {
  return (
    <section className="py-16 md:py-20 bg-[#FFF8F2] border-b border-[#F0D9CB]">
      <Container>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white text-[#B96645] border border-[#F0D9CB]">
            HOSPITAL COMMITMENT
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#252B33] tracking-tight">
            Why Choose Surya Hospital
          </h2>
          <p className="text-sm sm:text-base text-[#59616B] leading-relaxed">
            Our medical practice is built upon clear patient communication, clinical rigor, sterile surgical standards, and accessible local care.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HOSPITAL_INFO.values.map((val, idx) => {
            const Icon = iconList[idx % iconList.length];
            return (
              <div
                key={val.title}
                className="bg-white p-6 rounded-xl border border-[#F0D9CB] shadow-2xs hover:shadow-card hover:border-[#C65332] transition flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-lg bg-[#F6D8C5] text-[#C65332] flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-1 text-left">
                  <h3 className="text-base font-bold text-[#252B33]">
                    {val.title}
                  </h3>
                  <p className="text-xs text-[#59616B] leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Additional verified value card */}
          <div className="bg-white p-6 rounded-xl border border-[#F0D9CB] shadow-2xs hover:shadow-card hover:border-[#C65332] transition flex items-start gap-4">
            <div className="w-11 h-11 rounded-lg bg-[#F6D8C5] text-[#C65332] flex items-center justify-center shrink-0">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div className="space-y-1 text-left">
              <h3 className="text-base font-bold text-[#252B33]">
                In-House Pharmacy & Diagnostics
              </h3>
              <p className="text-xs text-[#59616B] leading-relaxed">
                Seamless patient experience with round-the-clock on-site medicine dispensary and rapid laboratory testing.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

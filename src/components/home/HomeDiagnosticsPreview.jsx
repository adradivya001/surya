import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { ArrowRight, CheckCircle2, FlaskConical, Scan, Layers, Activity } from "lucide-react";
import { HOSPITAL_INFO } from "../../constants/hospitalData";

const iconMap = {
  FlaskConical,
  Scan,
  Layers,
  Activity,
};

export function HomeDiagnosticsPreview() {
  return (
    <section className="py-16 md:py-20 bg-white border-b border-[#F0D9CB]">
      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="space-y-2 max-w-2xl text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#FCECE2] text-[#B96645] border border-[#F0D9CB]">
              LABORATORY & IMAGING
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#252B33] tracking-tight">
              Diagnostic Services for Clinical Clarity
            </h2>
            <p className="text-sm sm:text-base text-[#59616B] leading-relaxed">
              Timely, accurate pathology testing, high-resolution ultrasound sonography, digital X-Rays, and ECG on premise in Sai Nagar, Anantapur.
            </p>
          </div>

          <Link to="/diagnostics" className="w-full sm:w-auto shrink-0">
            <Button
              variant="outline"
              size="md"
              icon={ArrowRight}
              iconPosition="right"
              className="text-xs font-bold border-[#D98A62] hover:bg-[#FCECE2] text-[#252B33] w-full sm:w-auto"
            >
              All Diagnostic Tests & Prep
            </Button>
          </Link>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOSPITAL_INFO.diagnostics.slice(0, 4).map((item) => {
            const Icon = iconMap[item.iconName] || FlaskConical;
            return (
              <div
                key={item.id}
                className="group rounded-xl border border-[#F0D9CB] bg-white overflow-hidden shadow-2xs hover:shadow-card hover:border-[#C65332] transition flex flex-col justify-between"
              >
                {/* Visual */}
                <div className="relative aspect-[16/10] bg-[#FCECE2] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#252B33]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-2.5 left-3 text-white flex items-center gap-1.5">
                    <Icon className="w-4 h-4 text-[#F6D8C5]" />
                    <span className="text-xs font-bold">{item.name}</span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <p className="text-xs text-[#59616B] leading-relaxed">
                    {item.shortDesc}
                  </p>

                  <div className="space-y-1 pt-2 border-t border-[#F0D9CB]">
                    <span className="text-[10px] uppercase font-bold text-[#252B33] block">
                      Common Tests:
                    </span>
                    <ul className="text-[11px] text-[#59616B] space-y-0.5">
                      {item.testsIncluded.slice(0, 2).map((test, idx) => (
                        <li key={idx} className="flex items-center gap-1.5 truncate">
                          <CheckCircle2 className="w-3 h-3 text-[#C65332] shrink-0" />
                          <span className="truncate">{test}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <Link
                      to="/diagnostics"
                      className="text-xs font-bold text-[#C65332] hover:text-[#A84328] transition inline-flex items-center gap-1"
                    >
                      <span>Test Details & Preparation</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Calendar, PhoneCall } from "lucide-react";
import { HOSPITAL_INFO } from "../../constants/hospitalData";
import { AnimateIn } from "../ui/AnimateIn";

export function HomeAppointmentCta() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-[#292D32] via-[#33383F] to-[#292D32] text-white relative overflow-hidden border-b border-[#3E434B]">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C65332]/15 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#C65332]/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10 text-center max-w-3xl space-y-6">
        <AnimateIn animation="fade-down">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-[#F8E6DC] border border-white/20">
            HEALTHCARE CONSULTATIONS
          </span>
        </AnimateIn>

        <AnimateIn animation="pop" delay={100}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Need to Consult a Doctor?
          </h2>
        </AnimateIn>

        <AnimateIn animation="fade-up" delay={200}>
          <p className="text-sm sm:text-base text-[#D0D6DE] max-w-xl mx-auto leading-relaxed">
            Request an appointment online with our physicians and surgeons, or call our hospital reception directly in Sai Nagar, Anantapur.
          </p>
        </AnimateIn>

        <AnimateIn animation="pop" delay={300}>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-2">
            <Link to="/appointment" className="w-full sm:w-auto">
              <Button
                variant="accent"
                size="lg"
                icon={Calendar}
                className="bg-[#C65332] hover:bg-[#A84328] text-white font-bold shadow-md px-6 sm:px-7 w-full sm:w-auto"
              >
                Book Doctor Visit
              </Button>
            </Link>

            <a href={`tel:${HOSPITAL_INFO.phoneRaw}`} className="w-full sm:w-auto">
              <Button
                variant="secondary"
                size="lg"
                icon={PhoneCall}
                className="bg-white hover:bg-[#F8E6DC] text-[#292D32] hover:text-[#C65332] border-2 border-[#E9D7C7] px-6 sm:px-7 font-bold shadow-sm w-full sm:w-auto"
              >
                Call Reception: {HOSPITAL_INFO.phone}
              </Button>
            </a>
          </div>
        </AnimateIn>
      </Container>
    </section>
  );
}

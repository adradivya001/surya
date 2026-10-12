import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Calendar, PhoneCall, ArrowRight } from "lucide-react";
import { HOSPITAL_INFO } from "../../constants/hospitalData";

export function HomeAppointmentCta() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#252B33] via-[#2D343E] to-[#252B33] text-white relative overflow-hidden border-b border-[#373F4A]">
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#C65332]/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10 text-center max-w-3xl space-y-6">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-[#F6D8C5] border border-white/20">
          HEALTHCARE CONSULTATIONS
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
          Your Health Deserves Personal Attention
        </h2>

        <p className="text-sm sm:text-base text-[#D0D6DE] max-w-xl mx-auto leading-relaxed">
          Book an appointment with our specialist physicians or consult our 24/7 emergency casualty desk in Sai Nagar, Anantapur.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-2">
          <Link to="/appointment" className="w-full sm:w-auto">
            <Button
              variant="accent"
              size="lg"
              icon={Calendar}
              className="bg-[#C65332] hover:bg-[#A84328] text-white font-bold shadow-md px-6 sm:px-7 w-full sm:w-auto"
            >
              Book an Appointment
            </Button>
          </Link>

          <a href={`tel:${HOSPITAL_INFO.phoneRaw}`} className="w-full sm:w-auto">
            <Button
              variant="secondary"
              size="lg"
              icon={PhoneCall}
              className="bg-white hover:bg-[#FCECE2] text-[#252B33] hover:text-[#C65332] border-2 border-[#D98A62] px-6 sm:px-7 font-bold shadow-sm w-full sm:w-auto"
            >
              Call Hospital: {HOSPITAL_INFO.phone}
            </Button>
          </a>
        </div>
      </Container>
    </section>
  );
}

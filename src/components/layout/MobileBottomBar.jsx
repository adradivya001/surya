import React from "react";
import { Phone, Calendar } from "lucide-react";
import { HOSPITAL_INFO } from "../../constants/hospitalData";
import { useAppointmentModal } from "../../context/AppointmentModalContext";
import "./MobileBottomBar.css";

export function MobileBottomBar() {
  const { openModal } = useAppointmentModal();

  return (
    <div className="mobile-bottom-bar" role="navigation" aria-label="Mobile Bottom Actions">
      <a
        href={`tel:${HOSPITAL_INFO.phoneRaw}`}
        className="mobile-bar-btn call-btn"
        aria-label="Call Hospital Desk"
      >
        <Phone className="w-4 h-4 text-[#C63D1B]" />
        <span>Call Desk</span>
      </a>

      <button
        type="button"
        onClick={() => openModal()}
        className="mobile-bar-btn book-btn cursor-pointer"
        aria-label="Book Appointment"
      >
        <Calendar className="w-4 h-4 text-white" />
        <span>Book OPD</span>
      </button>
    </div>
  );
}

export default MobileBottomBar;

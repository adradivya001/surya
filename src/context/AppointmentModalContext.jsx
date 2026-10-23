import React, { createContext, useContext, useState, useCallback } from "react";
import { AppointmentModal } from "../components/home/AppointmentModal";

const AppointmentModalContext = createContext({
  isOpen: false,
  openModal: (dept = "") => {},
  closeModal: () => {},
});

export function AppointmentModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [defaultDept, setDefaultDept] = useState("");

  const openModal = useCallback((dept = "") => {
    setDefaultDept(dept);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <AppointmentModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      <AppointmentModal
        isOpen={isOpen}
        onClose={closeModal}
        defaultDepartment={defaultDept}
      />
    </AppointmentModalContext.Provider>
  );
}

export function useAppointmentModal() {
  const context = useContext(AppointmentModalContext);
  if (!context) {
    throw new Error("useAppointmentModal must be used within an AppointmentModalProvider");
  }
  return context;
}

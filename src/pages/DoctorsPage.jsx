import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "../components/ui/Container";
import { PageHero } from "../components/ui/PageHero";
import { Button } from "../components/ui/Button";
import {
  Search,
  Filter,
  Calendar,
  Clock,
  AlertCircle,
  X,
  Stethoscope,
  Phone,
  CheckCircle2,
} from "lucide-react";
import { HOSPITAL_INFO } from "../constants/hospitalData";

export function DoctorsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [activeDoctorModal, setActiveDoctorModal] = useState(null);

  useEffect(() => {
    document.title = "Specialist Doctors | Surya Hospital, Sai Nagar, Anantapur";
  }, []);

  const departments = [
    "All",
    "General Surgery & Proctology",
    "Orthopedic Surgery & Internal Medicine",
    "Emergency Medicine & Critical Care",
  ];

  const filteredDoctors = HOSPITAL_INFO.doctors.filter((doc) => {
    const matchesSearch =
      doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.qualifications.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.specialties.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesDept =
      selectedDepartment === "All" || doc.department.includes(selectedDepartment);

    return matchesSearch && matchesDept;
  });

  return (
    <div className="w-full">
      {/* Page Hero */}
      <PageHero
        eyebrow="MEDICAL SPECIALISTS DIRECTORY"
        title="Our Consultant Doctors"
        description="Consult with qualified specialists in general surgery, internal medicine, orthopedics, and emergency trauma care at Surya Hospital, Anantapur."
        breadcrumbs={[{ label: "Doctors" }]}
        badge="Verified Staff Directory"
      >
        <Link to="/appointment">
          <Button variant="primary" size="sm" icon={Calendar} className="bg-[#C65332] hover:bg-[#A84328] text-white">
            Book an OPD Consultation
          </Button>
        </Link>
        <a href={`tel:${HOSPITAL_INFO.phoneRaw}`}>
          <Button variant="secondary" size="sm" icon={Phone} className="bg-white border-[#F0D9CB] text-[#252B33] hover:bg-[#FCECE2]">
            Direct Reception: {HOSPITAL_INFO.phone}
          </Button>
        </a>
      </PageHero>

      <section className="py-12 md:py-16 bg-white border-b border-[#F0D9CB]">
        <Container>
          {/* Institutional Transparency Box */}
          <div className="mb-8 p-4 rounded-xl bg-[#FCECE2] border border-[#F0D9CB] flex items-start gap-3 text-xs text-[#252B33]">
            <AlertCircle className="w-4 h-4 text-[#C65332] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="font-bold">Hospital Medical Leadership & Specialist Notice:</p>
              <p className="text-[#59616B]">
                Surya Hospital is founded and led by Managing Director & Consultant Physician <strong>Dr. D. Surya Prakash (M.D. Internal Medicine)</strong>, supported by experienced medical and surgical consultants. To confirm OPD token availability or schedule a consultation, please call our desk at {HOSPITAL_INFO.phone}.
              </p>
            </div>
          </div>

          {/* Search & Filter Toolbar */}
          <div className="bg-[#FFF8F2] p-4 sm:p-6 rounded-2xl border border-[#F0D9CB] mb-10 space-y-4">
            <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
              {/* Search input */}
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-[#808A96] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search doctor name, specialty, or qualification..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border border-[#F0D9CB] bg-white text-[#252B33] placeholder-[#808A96] focus:outline-none focus:ring-2 focus:ring-[#C65332]/20 focus:border-[#C65332] transition"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#808A96] hover:text-[#252B33]"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Counter */}
              <div className="text-xs text-[#59616B] font-medium shrink-0">
                Showing <strong className="text-[#252B33]">{filteredDoctors.length}</strong> verified specialists
              </div>
            </div>

            {/* Department Filter Chips */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs">
              <span className="text-[11px] font-bold uppercase text-[#808A96] shrink-0 mr-1 flex items-center gap-1">
                <Filter className="w-3 h-3" /> Filter:
              </span>
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDepartment(dept)}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition whitespace-nowrap cursor-pointer ${
                    selectedDepartment === dept
                      ? "bg-[#C65332] text-white shadow-2xs"
                      : "bg-white text-[#59616B] border border-[#F0D9CB] hover:bg-[#FCECE2]"
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Doctors Grid */}
          {filteredDoctors.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredDoctors.map((doc) => (
                <div
                  key={doc.id}
                  className={`bg-white rounded-xl sm:rounded-2xl border shadow-2xs hover:shadow-card transition overflow-hidden flex flex-col justify-between group ${
                    doc.isManagingDirector
                      ? "border-[#C65332]/60 ring-1 ring-[#C65332]/20"
                      : "border-[#F0D9CB] hover:border-[#C65332]"
                  }`}
                >
                  {/* Photo Header */}
                  <div className="relative aspect-[16/11] sm:aspect-[4/5] bg-[#FCECE2] overflow-hidden">
                    <img
                      src={doc.image}
                      alt={doc.name}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = doc.fallbackImage || "/images/dr-d-surya-prakash.png";
                      }}
                      className="w-full h-full object-cover object-top group-hover:scale-103 transition duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#252B33]/90 via-[#252B33]/20 to-transparent" />

                    <span
                      className={`absolute top-2.5 left-2.5 sm:top-3 sm:left-3 text-[9.5px] sm:text-[10px] font-bold uppercase tracking-wider px-2 sm:px-2.5 py-0.5 sm:py-1 rounded shadow-2xs ${
                        doc.isManagingDirector
                          ? "bg-[#C65332] text-white"
                          : "bg-white/95 text-[#252B33]"
                      }`}
                    >
                      {doc.status}
                    </span>

                    <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 text-white text-left">
                      <span className="text-[10px] sm:text-[11px] font-bold text-[#F6D8C5] block uppercase tracking-wider">
                        {doc.department}
                      </span>
                      <h3 className="text-lg sm:text-xl font-black text-white mt-0.5 leading-snug">
                        {doc.name}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between space-y-3 sm:space-y-4 text-left">
                    <div className="space-y-1">
                      <div className="text-xs font-bold text-[#C65332]">
                        {doc.qualifications}
                      </div>
                      <div className="text-xs font-semibold text-[#252B33]">
                        {doc.designation}
                      </div>
                      <p className="text-xs text-[#59616B] leading-relaxed pt-0.5 line-clamp-2 sm:line-clamp-none">
                        {doc.experience}
                      </p>
                    </div>

                    {/* Specialties Pill Badges */}
                    <div className="pt-2 border-t border-[#F0D9CB]">
                      <span className="text-[10px] uppercase font-bold text-[#808A96] block mb-1.5">
                        Clinical Focus:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {doc.specialties.slice(0, 3).map((spec, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-medium bg-[#FFF8F2] px-2 py-0.5 rounded text-[#59616B] border border-[#F0D9CB]"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Schedule & Buttons */}
                    <div className="pt-2.5 border-t border-[#F0D9CB] space-y-2.5">
                      <div className="flex items-start gap-1.5 text-xs text-[#59616B] leading-snug">
                        <Clock className="w-3.5 h-3.5 text-[#B96645] shrink-0 mt-0.5" />
                        <span className="text-[11px] leading-snug">{doc.opdTimings}</span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 pt-0.5">
                        <button
                          type="button"
                          onClick={() => setActiveDoctorModal(doc)}
                          className="w-full py-2 px-2.5 sm:py-2.5 sm:px-3 rounded-lg text-xs font-bold border border-[#F0D9CB] bg-white hover:bg-[#FCECE2] text-[#252B33] transition cursor-pointer active:scale-95"
                        >
                          View Profile
                        </button>

                        <Link
                          to={`/appointment?doctor=${encodeURIComponent(doc.name)}&dept=${encodeURIComponent(doc.department)}`}
                          className="w-full"
                        >
                          <Button
                            variant="primary"
                            size="sm"
                            fullWidth
                            className="bg-[#C65332] hover:bg-[#A84328] text-white text-xs font-bold py-2 sm:py-2.5 active:scale-95"
                          >
                            Book OPD
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-[#FFF8F2] rounded-2xl border border-[#F0D9CB] space-y-3">
              <Stethoscope className="w-10 h-10 text-[#808A96] mx-auto" />
              <h3 className="text-lg font-bold text-[#252B33]">
                No specialists found matching your search.
              </h3>
              <p className="text-xs text-[#59616B]">
                Try searching for another specialty or clear filters.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="border-[#D98A62] text-[#252B33] hover:bg-[#FCECE2]"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedDepartment("All");
                }}
              >
                Reset Search Filters
              </Button>
            </div>
          )}
        </Container>
      </section>

      {/* Individual Doctor Profile Modal */}
      {activeDoctorModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#F0D9CB] space-y-5 max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b border-[#F0D9CB]">
              <div className="flex items-center gap-4">
                <img
                  src={activeDoctorModal.image}
                  alt={activeDoctorModal.name}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/images/surya-doctor-portrait.png";
                  }}
                  className="w-16 h-16 rounded-xl object-cover border-2 border-[#C65332]"
                />
                <div className="text-left">
                  <h3 className="text-xl font-black text-[#252B33]">
                    {activeDoctorModal.name}
                  </h3>
                  <p className="text-xs text-[#C65332] font-bold">
                    {activeDoctorModal.qualifications}
                  </p>
                  <p className="text-xs text-[#59616B]">
                    {activeDoctorModal.designation}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setActiveDoctorModal(null)}
                className="p-1 rounded-lg text-[#59616B] hover:bg-[#FCECE2] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Profile Content */}
            <div className="space-y-4 text-left">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#252B33] mb-1">
                  Department & Role
                </h4>
                <p className="text-xs sm:text-sm text-[#59616B] leading-relaxed">
                  {activeDoctorModal.department} • {activeDoctorModal.experience}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#252B33] mb-1">
                  Professional Profile & Clinical Approach
                </h4>
                <p className="text-xs sm:text-sm text-[#59616B] leading-relaxed">
                  {activeDoctorModal.bio}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#252B33] mb-2">
                  Specialized Procedures & Clinical Scope
                </h4>
                <ul className="space-y-1.5 text-xs text-[#59616B]">
                  {activeDoctorModal.specialties.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C65332] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FFF8F2] border border-[#F0D9CB] text-xs space-y-1">
                <span className="font-bold text-[#252B33] block">
                  OPD Timings & Hospital Availability:
                </span>
                <p className="text-[#59616B]">
                  {activeDoctorModal.opdTimings}
                </p>
                <p className="text-[11px] text-[#808A96] pt-1">
                  Location: OPD Consultation Rooms, Surya Hospital, Sai Nagar, Anantapur.
                </p>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <Link
                to={`/appointment?doctor=${encodeURIComponent(activeDoctorModal.name)}&dept=${encodeURIComponent(activeDoctorModal.department)}`}
                onClick={() => setActiveDoctorModal(null)}
                className="w-full sm:flex-1"
              >
                <Button
                  variant="primary"
                  size="md"
                  icon={Calendar}
                  fullWidth
                  className="bg-[#C65332] hover:bg-[#A84328] text-white font-bold"
                >
                  Book with {activeDoctorModal.name}
                </Button>
              </Link>

              <a
                href={`tel:${HOSPITAL_INFO.phoneRaw}`}
                className="w-full sm:w-auto"
              >
                <Button
                  variant="secondary"
                  size="md"
                  icon={Phone}
                  className="w-full text-xs bg-white border-[#F0D9CB] text-[#252B33] hover:bg-[#FCECE2]"
                >
                  Call OPD Desk
                </Button>
              </a>

              <Button
                variant="outline"
                size="md"
                onClick={() => setActiveDoctorModal(null)}
                className="w-full sm:w-auto text-xs border-[#F0D9CB]"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default DoctorsPage;

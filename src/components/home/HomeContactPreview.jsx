import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { MapPin, Phone, Clock, ExternalLink, Mail, ArrowRight } from "lucide-react";
import { HOSPITAL_INFO } from "../../constants/hospitalData";

export function HomeContactPreview() {
  return (
    <section className="py-16 bg-white border-b border-[#F0D9CB]">
      <Container>
        <div className="bg-[#FFF8F2] rounded-2xl border border-[#F0D9CB] p-6 sm:p-10 shadow-2xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Contact Details (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="space-y-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white text-[#B96645] border border-[#F0D9CB]">
                  CONTACT & LOCATION
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#252B33] tracking-tight">
                  Visit Surya Hospital in Sai Nagar, Anantapur
                </h2>
                <p className="text-xs sm:text-sm text-[#59616B] leading-relaxed">
                  Easily accessible location behind Ambedkar Bhavan, 9th Cross Road. On-duty clinical coordinators are ready to assist with consultations and urgent admissions.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-white border border-[#F0D9CB] space-y-1">
                  <div className="flex items-center gap-2 text-[#252B33] font-bold">
                    <MapPin className="w-4 h-4 text-[#C65332] shrink-0" />
                    <span>Hospital Address</span>
                  </div>
                  <p className="text-[#59616B] leading-relaxed pt-1">
                    {HOSPITAL_INFO.fullAddress}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#F0D9CB] space-y-1">
                  <div className="flex items-center gap-2 text-[#252B33] font-bold">
                    <Phone className="w-4 h-4 text-[#C65332] shrink-0" />
                    <span>Telephone Contacts</span>
                  </div>
                  <div className="pt-1 space-y-1 text-[#59616B]">
                    <div>
                      Emergency / Reception:{" "}
                      <a href={`tel:${HOSPITAL_INFO.phoneRaw}`} className="font-bold text-[#252B33] hover:text-[#C65332]">
                        {HOSPITAL_INFO.phone}
                      </a>
                    </div>
                    <div className="text-[11px] text-[#808A96]">
                      General OPD & Casualty
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#F0D9CB] space-y-1">
                  <div className="flex items-center gap-2 text-[#252B33] font-bold">
                    <Clock className="w-4 h-4 text-[#B96645] shrink-0" />
                    <span>Operating Hours</span>
                  </div>
                  <p className="text-[#59616B] leading-relaxed pt-1">
                    Emergency: <strong>24/7 Available</strong>
                    <br />
                    OPD: 9:00 AM – 2:00 PM & 5:00 PM – 9:00 PM
                  </p>
                </div>

                <Link
                  to="/contact"
                  className="p-4 rounded-xl bg-white border border-[#F0D9CB] space-y-1 block hover:border-[#C65332] hover:shadow-xs transition group cursor-pointer"
                >
                  <div className="flex items-center justify-between text-[#252B33] font-bold">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#D98A62] shrink-0" />
                      <span>Online Enquiry</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C65332] group-hover:translate-x-1 transition" />
                  </div>
                  <p className="text-[#59616B] leading-relaxed pt-1">
                    Have a non-urgent query? Send us a message via our contact form.
                  </p>
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link to="/contact">
                  <Button
                    variant="primary"
                    size="md"
                    icon={ArrowRight}
                    iconPosition="right"
                    className="text-xs font-bold bg-[#C65332] hover:bg-[#A84328] text-white shadow-sm"
                  >
                    Contact Us
                  </Button>
                </Link>

                <a
                  href={HOSPITAL_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold text-white bg-[#252B33] hover:bg-[#1D2229] transition shadow-sm"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#D98A62]" />
                  <span>Get Directions on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
              </div>
            </div>

            {/* Right Map Embed Preview (5 cols) */}
            <div className="lg:col-span-5 h-72 sm:h-80 rounded-xl overflow-hidden border border-surya-border relative bg-surya-slate-100 shadow-2xs">
              <iframe
                title="Surya Hospital Sai Nagar Anantapur Location Map"
                src={HOSPITAL_INFO.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

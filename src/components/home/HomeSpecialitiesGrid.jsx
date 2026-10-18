import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { AnimateIn } from "../ui/AnimateIn";

export function HomeSpecialitiesGrid() {
  const scrollContainerRef = useRef(null);

  const services = [
    {
      id: "general-medicine",
      title: "General Medicine",
      desc: "Comprehensive adult care",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
      tag: "Everyday Health",
    },
    {
      id: "general-surgery",
      title: "General Surgery",
      desc: "Advanced surgical solutions",
      image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=600&q=80",
      tag: "Surgical Suite",
    },
    {
      id: "orthopedics",
      title: "Orthopedics",
      desc: "Bone & joint care",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80",
      tag: "Bones & Joints",
    },
    {
      id: "emergency-care",
      title: "Emergency Care",
      desc: "24/7 trauma & critical care",
      image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=600&q=80",
      tag: "24/7 Critical",
    },
    {
      id: "diagnostics",
      title: "Diagnostics",
      desc: "Accurate & fast results",
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=600&q=80",
      tag: "Lab & Imaging",
    },
    {
      id: "pharmacy",
      title: "Pharmacy",
      desc: "24/7 In-house pharmacy",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
      tag: "On-Site Support",
    },
  ];

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const offset = direction === "left" ? -320 : 320;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-white border-t border-[#E2D9D0]/60 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Left/Right Editorial Splitting */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="space-y-3 text-left max-w-2xl">
            <AnimateIn animation="slide-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#A84328]">
                <span className="w-2 h-2 rounded-full bg-[#A84328]" />
                <span>OUR SERVICES</span>
              </div>
            </AnimateIn>

            <AnimateIn animation="slide-left" delay={100}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-heading font-bold text-[#1A1D20] tracking-tight leading-tight">
                Comprehensive Care
                <br />
                for Every Stage of Life
              </h2>
            </AnimateIn>

            {/* Slider Navigation Arrows */}
            <div className="flex items-center gap-2 pt-2">
              <button
                type="button"
                onClick={() => scroll("left")}
                className="w-10 h-10 rounded-full border border-[#E2D9D0] bg-white hover:bg-[#F8E6DC] text-[#1A1D20] flex items-center justify-center transition active:scale-95 shadow-xs"
                aria-label="Previous specialties"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                className="w-10 h-10 rounded-full border border-[#E2D9D0] bg-white hover:bg-[#F8E6DC] text-[#1A1D20] flex items-center justify-center transition active:scale-95 shadow-xs"
                aria-label="Next specialties"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 lg:text-right">
            <p className="text-sm sm:text-base text-[#62666D] max-w-md leading-relaxed">
              From routine consultations to advanced surgical care, we provide complete healthcare services with compassion and expertise.
            </p>
            <Link
              to="/specialities"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-[#A84328] bg-[#F8E6DC]/60 hover:bg-[#F8E6DC] border border-[#A84328]/20 transition-all shrink-0"
            >
              <span>View All Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 6 Image-Led Tiles in One Desktop Row matching Mockup */}
        <div
          ref={scrollContainerRef}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4"
        >
          {services.map((service, idx) => (
            <AnimateIn
              key={service.id}
              animation="fade-up"
              delay={idx * 60}
              className="flex-1"
            >
              <Link
                to="/specialities"
                className="group flex flex-col justify-between h-full bg-white rounded-2xl border border-[#E2D9D0] overflow-hidden shadow-xs hover:shadow-xl hover:border-[#A84328] transition-all duration-300"
              >
                {/* Image Top */}
                <div className="relative aspect-[16/11] overflow-hidden bg-[#1A1D20]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Content Details */}
                <div className="p-4 sm:p-5 text-left space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-[#1A1D20] group-hover:text-[#A84328] transition-colors">
                      {service.title}
                    </h3>
                    <span className="w-3.5 h-0.5 bg-[#A84328] group-hover:w-5 transition-all rounded-full" />
                  </div>
                  <p className="text-xs text-[#62666D] leading-snug">
                    {service.desc}
                  </p>
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>

      </div>
    </section>
  );
}

export default HomeSpecialitiesGrid;

import React, { useRef } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from "lucide-react";
import { AnimateIn } from "../ui/AnimateIn";

export function TestimonialCarousel() {
  const scrollRef = useRef(null);

  const testimonials = [
    {
      id: "t1",
      name: "Srinivas R.",
      dept: "General Medicine",
      quote: "Excellent care and very supportive doctors. The staff is kind and the facilities are modern. Highly recommended.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: "t2",
      name: "Lakshmi P.",
      dept: "General Surgery",
      quote: "I had a smooth surgical experience here. The doctors and nursing staff took great care of me.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: "t3",
      name: "Ramesh K.",
      dept: "Emergency Care",
      quote: "24/7 emergency service is a big relief for our family. Thank you Surya Hospital for your quick response and care.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const offset = direction === "left" ? -340 : 340;
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-b from-[#FFF9F3] to-[#FFF5EC] text-[#1A1D20] overflow-hidden border-t border-[#F0E4D8]/60">
      {/* Background ambient */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-3/5 z-0 pointer-events-none opacity-20 lg:opacity-25">
        <img
          src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80"
          alt="Happy family outdoors at sunset"
          className="w-full h-full object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFF9F3] via-[#FFF9F3]/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="space-y-3 text-left max-w-xl">
            <AnimateIn animation="slide-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#FFF0E6] to-[#FFE8D6] border border-[#FADCCB]/80 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#E94B1C] shadow-[0_2px_8px_rgba(233,75,28,0.06)]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>PATIENT STORIES</span>
              </div>
            </AnimateIn>

            <AnimateIn animation="slide-left" delay={100}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-heading font-bold text-[#14233C] tracking-tight leading-tight">
                Real People.
                <br />
                Real{" "}
                <span className="bg-gradient-to-r from-[#E94B1C] to-[#F26A21] bg-clip-text text-transparent">
                  Experiences.
                </span>
                <span className="inline-block w-8 h-1 bg-[#E94B1C] align-middle ml-2 rounded-full" />
              </h2>
            </AnimateIn>

            {/* Slider Controls */}
            <div className="flex items-center gap-2 pt-2">
              <button
                type="button"
                onClick={() => scroll("left")}
                className="w-10 h-10 rounded-full border border-[#E9D8CE] bg-white hover:bg-[#FFF0E6] hover:border-[#E94B1C]/30 text-[#C63D1B] flex items-center justify-center transition-all active:scale-95 shadow-xs cursor-pointer hover:shadow-md"
                aria-label="Previous stories"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                className="w-10 h-10 rounded-full border border-[#E9D8CE] bg-white hover:bg-[#FFF0E6] hover:border-[#E94B1C]/30 text-[#C63D1B] flex items-center justify-center transition-all active:scale-95 shadow-xs cursor-pointer hover:shadow-md"
                aria-label="Next stories"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Editorial Callout */}
          <div className="lg:text-right max-w-sm">
            <div className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#14233C] leading-tight">
              Your Health.
              <br />
              <span className="font-editorial-italic bg-gradient-to-r from-[#E94B1C] to-[#C63D1B] bg-clip-text text-transparent">
                Our Priority.
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#756860] mt-2 leading-relaxed">
              Compassionate care for today, a healthier tomorrow.
            </p>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div
          ref={scrollRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((item, idx) => (
            <AnimateIn
              key={item.id}
              animation="fade-up"
              delay={idx * 120}
              className="bg-white rounded-2xl border border-[#EFE5DC] p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-[#E94B1C]/30 transition-all duration-400 flex flex-col justify-between text-left relative group magnetic-card card-shine-effect"
            >
              <div className="space-y-4">
                {/* Quote Icon */}
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FFF0E6] to-[#FFE8D6] border border-[#FADCCB]/60 flex items-center justify-center shadow-xs">
                  <Quote className="w-5 h-5 text-[#E94B1C]/60" />
                </div>

                <p className="text-sm sm:text-[15px] text-[#3A4556] leading-relaxed font-medium">
                  "{item.quote}"
                </p>

                {/* Star Rating */}
                <div className="flex items-center gap-1 text-[#F26A21]">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>

              {/* Patient Info */}
              <div className="pt-5 border-t border-[#F0E2D9] flex items-center gap-3 mt-5">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-[#EFE5DC] group-hover:border-[#E94B1C]/30 transition-colors shadow-xs"
                />
                <div>
                  <h4 className="text-sm font-bold text-[#14233C] leading-tight">
                    {item.name}
                  </h4>
                  <span className="text-xs text-[#756860] font-medium">
                    {item.dept}
                  </span>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialCarousel;

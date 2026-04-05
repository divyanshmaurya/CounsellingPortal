"use client";

import { universities } from "@/lib/data";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";

export default function UniversityMarquee() {
  const doubled = [...universities, ...universities];

  return (
    <section className="py-20 bg-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading text-dark mb-4">
            Our Mentors Come From
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            World-class institutions and companies, ready to share their
            experience with you.
          </p>
        </AnimateOnScroll>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-light to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-light to-transparent z-10" />

        <div className="animate-marquee flex gap-4 w-max">
          {doubled.map((name, i) => (
            <span
              key={i}
              className="px-5 py-2.5 bg-white rounded-full text-sm font-medium text-dark border border-gray-200 shadow-sm whitespace-nowrap"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

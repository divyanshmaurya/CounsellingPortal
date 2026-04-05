"use client";

import { mentors } from "@/lib/data";
import MentorCard from "@/components/ui/MentorCard";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";

export default function FeaturedMentors() {
  const featured = mentors.slice(0, 8);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading text-dark mb-4">
            Learn from the Best
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Our mentors come from the world&apos;s top universities and
            companies — and they&apos;re ready to guide you.
          </p>
        </AnimateOnScroll>

        <div className="overflow-x-auto pb-4 -mx-4 px-4">
          <div className="flex gap-5 w-max">
            {featured.map((mentor) => (
              <MentorCard
                key={mentor.id}
                name={mentor.name}
                role={mentor.role}
                company={mentor.company}
                flag={mentor.flag}
                rating={mentor.rating}
                price={mentor.price}
                image={mentor.image}
                sessions={mentor.sessions}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

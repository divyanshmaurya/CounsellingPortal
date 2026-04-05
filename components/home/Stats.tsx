"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { testimonials } from "@/lib/data";
import TestimonialCard from "@/components/ui/TestimonialCard";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";

const stats = [
  { label: "Mentors", value: 500, suffix: "+" },
  { label: "Sessions Completed", value: 3000, suffix: "+" },
  { label: "Universities Represented", value: 50, suffix: "+" },
  { label: "Satisfaction Rate", value: 98, suffix: "%" },
];

function Counter({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2 font-body">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <AnimateOnScroll className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading text-dark mb-4">
            What Our Students Say
          </h2>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimateOnScroll key={t.id} delay={i * 0.1}>
              <TestimonialCard
                name={t.name}
                image={t.image}
                quote={t.quote}
                achievement={t.achievement}
              />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

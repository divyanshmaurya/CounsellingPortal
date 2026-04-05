"use client";

import {
  Video,
  FileText,
  MessageSquare,
  School,
  Award,
  Compass,
} from "lucide-react";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";
import { motion } from "framer-motion";

const services = [
  {
    icon: Video,
    title: "1-on-1 Mentorship Sessions",
    description:
      "Book 30/60 min video calls with verified mentors who share your background.",
    size: "col-span-1 sm:col-span-2 lg:col-span-1",
  },
  {
    icon: FileText,
    title: "SOP & Essay Review",
    description:
      "Get your application documents reviewed by someone who got into the same program.",
    size: "col-span-1",
  },
  {
    icon: MessageSquare,
    title: "Mock Interviews",
    description:
      "Practice with professionals from your target company. Real questions, real feedback.",
    size: "col-span-1",
  },
  {
    icon: School,
    title: "University Reviews",
    description:
      "Read honest reviews from real students, not rankings websites. Know before you go.",
    size: "col-span-1 sm:col-span-2 lg:col-span-1",
  },
  {
    icon: Award,
    title: "Scholarship Finder",
    description:
      "Browse scholarships available for Uzbek students with mentor guidance.",
    size: "col-span-1",
  },
  {
    icon: Compass,
    title: "Career Path Explorer",
    description:
      "AI-powered tool that maps your interests to career paths and connects you with relevant mentors.",
    size: "col-span-1",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading text-dark mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            From application prep to career growth, we&apos;ve got the tools
            and mentors to support your journey.
          </p>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <AnimateOnScroll key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{
                  y: -4,
                  boxShadow: "0 16px 32px rgba(0,0,0,0.06)",
                }}
                className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full ${service.size}`}
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-dark mb-2 font-body">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

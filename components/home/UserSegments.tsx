"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Briefcase, RefreshCw } from "lucide-react";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";

const segments = [
  {
    icon: GraduationCap,
    emoji: "\ud83c\udf93",
    title: "High School Students",
    description:
      "Choosing a university? Talk to someone already studying there.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: BookOpen,
    emoji: "\ud83d\udcda",
    title: "College Students",
    description:
      "Get semester-long mentorship from seniors and young professionals.",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Briefcase,
    emoji: "\ud83d\udcbc",
    title: "Job Seekers",
    description:
      "Prepare for interviews and get referred by insiders at your dream company.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: RefreshCw,
    emoji: "\ud83d\udd04",
    title: "Career Switchers",
    description:
      "Thinking of a new path? Learn from someone who made the same switch.",
    color: "bg-purple-100 text-purple-600",
  },
];

export default function UserSegments() {
  return (
    <section className="py-24 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading text-dark mb-4">
            Who Is Futurly For?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Whether you&apos;re just starting out or pivoting your career,
            there&apos;s a mentor for you.
          </p>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {segments.map((segment, i) => (
            <AnimateOnScroll key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{
                  y: -6,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full cursor-pointer"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${segment.color} flex items-center justify-center mb-4`}
                >
                  <segment.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-dark mb-2 font-body">
                  {segment.emoji} {segment.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {segment.description}
                </p>
                <span className="text-primary text-sm font-semibold hover:underline">
                  Learn More &rarr;
                </span>
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

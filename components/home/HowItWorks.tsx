"use client";

import { Target, Users, TrendingUp } from "lucide-react";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";

const steps = [
  {
    icon: Target,
    title: "Tell us your goals",
    description:
      "Describe your dream career, target university, or skill gap. We'll understand exactly what you need.",
    step: "01",
  },
  {
    icon: Users,
    title: "Get matched with mentors",
    description:
      "AI pairs you with someone who's walked your exact path — from the same university, company, or career switch.",
    step: "02",
  },
  {
    icon: TrendingUp,
    title: "Grow with guidance",
    description:
      "Book sessions, get feedback, track your progress. Your mentor is with you every step of the way.",
    step: "03",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading text-dark mb-4">
            How It Works
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Three simple steps to connect with the right mentor and start your
            journey.
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />

          {steps.map((step, i) => (
            <AnimateOnScroll key={i} delay={i * 0.15}>
              <div className="relative text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center relative z-10">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="text-xs font-bold text-primary/40 tracking-widest uppercase mb-2 block">
                  Step {step.step}
                </span>
                <h3 className="text-xl font-bold text-dark mb-3 font-body">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-sm mx-auto">
                  {step.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

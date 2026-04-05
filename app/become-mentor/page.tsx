"use client";

import { useState } from "react";
import {
  DollarSign,
  Clock,
  Award,
  Heart,
  CheckCircle,
  Shield,
  Rocket,
} from "lucide-react";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Image from "next/image";

const benefits = [
  {
    icon: DollarSign,
    title: "Set your own rates",
    description: "You decide how much to charge per session. Earn $100–$500+/month mentoring part-time.",
  },
  {
    icon: Clock,
    title: "Flexible schedule",
    description: "Mentor whenever it works for you. Mornings, evenings, weekends — it's your call.",
  },
  {
    icon: Award,
    title: "Build your brand",
    description: "Grow your personal brand as a recognized mentor. Get reviews, ratings, and visibility.",
  },
  {
    icon: Heart,
    title: "Give back",
    description: "Help the next generation of Uzbek students and professionals achieve their dreams.",
  },
];

const steps = [
  {
    icon: CheckCircle,
    title: "Apply",
    description: "Fill out a short application with your background and expertise.",
  },
  {
    icon: Shield,
    title: "Get Verified",
    description: "We verify your credentials and onboard you to the platform.",
  },
  {
    icon: Rocket,
    title: "Start Mentoring",
    description: "Set your availability, price, and start accepting sessions.",
  },
];

const expertiseOptions = [
  "University Admissions",
  "Career Guidance",
  "Interview Prep",
  "Essay/SOP Review",
  "Scholarship Applications",
  "Skill Development",
  "Entrepreneurship",
  "Research & Academia",
];

export default function BecomeMentorPage() {
  const [sessions, setSessions] = useState(5);
  const [rate, setRate] = useState(10);

  return (
    <div className="pt-24 pb-16 min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-light to-secondary/5 py-20 grain-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll>
              <h1 className="text-4xl sm:text-5xl font-heading text-dark mb-6">
                Share Your Journey.{" "}
                <span className="text-primary">Earn</span> While You Guide.
              </h1>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                Join hundreds of mentors from top universities and companies who
                are earning extra income while making a real impact on students&apos;
                lives.
              </p>
              <Button variant="primary" size="lg" href="#apply">
                Apply Now
              </Button>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2}>
              {/* Mentor testimonial */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden">
                    <Image
                      src="https://i.pravatar.cc/300?img=12"
                      alt="Mentor"
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-dark font-body">Rustam T.</p>
                    <p className="text-sm text-gray-500">
                      Software Engineer, Google
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 italic leading-relaxed">
                  &ldquo;Being a mentor on Futurly has been incredibly rewarding. I
                  earn about $400/month from just a few hours a week, and I get
                  to help students from Uzbekistan break into tech. Win-win.&rdquo;
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading text-dark mb-4">
              Why Become a Mentor?
            </h2>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <AnimateOnScroll key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-light rounded-2xl p-6 text-center h-full"
                >
                  <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <b.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-dark mb-2 font-body">
                    {b.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {b.description}
                  </p>
                </motion.div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading text-dark mb-4">
              How It Works
            </h2>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((step, i) => (
              <AnimateOnScroll key={i} delay={i * 0.15}>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-dark mb-2 font-body">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Earnings calculator */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading text-dark mb-4">
              Earnings Calculator
            </h2>
            <p className="text-gray-500">
              See how much you could earn as a Futurly mentor.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="bg-light rounded-2xl p-8 border border-gray-100">
              <div className="space-y-6">
                <div>
                  <label className="flex justify-between text-sm font-medium text-dark mb-2">
                    <span>Sessions per week</span>
                    <span className="text-primary font-bold">{sessions}</span>
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    value={sessions}
                    onChange={(e) => setSessions(Number(e.target.value))}
                    className="w-full accent-primary cursor-pointer"
                  />
                </div>
                <div>
                  <label className="flex justify-between text-sm font-medium text-dark mb-2">
                    <span>Rate per session</span>
                    <span className="text-primary font-bold">${rate}</span>
                  </label>
                  <input
                    type="range"
                    min="3"
                    max="30"
                    value={rate}
                    onChange={(e) => setRate(Number(e.target.value))}
                    className="w-full accent-primary cursor-pointer"
                  />
                </div>
                <div className="text-center pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500 mb-2">
                    Estimated monthly earnings
                  </p>
                  <p className="text-5xl font-bold text-primary font-body">
                    ${(sessions * rate * 4).toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-400 mt-2">
                    Based on {sessions} sessions/week &times; ${rate}/session
                    &times; 4 weeks
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Application form */}
      <section id="apply" className="py-24 bg-light">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading text-dark mb-4">
              Apply to Become a Mentor
            </h2>
            <p className="text-gray-500">
              Currently enrolled at or graduated from a recognized university, or
              a working professional with 1+ years of experience.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-dark mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-dark mb-1">
                    University / Company
                  </label>
                  <input
                    type="text"
                    placeholder="Where you study/work"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark mb-1">
                    LinkedIn Profile
                  </label>
                  <input
                    type="text"
                    placeholder="linkedin.com/in/..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-dark mb-2">
                  Areas of Expertise
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {expertiseOptions.map((opt) => (
                    <label
                      key={opt}
                      className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        className="rounded accent-primary cursor-pointer"
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-dark mb-1">
                  Brief Bio
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about yourself and why you want to be a mentor..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm resize-none"
                />
              </div>
              <Button variant="primary" size="lg" className="w-full" type="submit">
                Apply Now
              </Button>
            </form>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}

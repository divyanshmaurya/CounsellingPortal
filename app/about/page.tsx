"use client";

import Image from "next/image";
import { teamMembers } from "@/lib/data";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";
import { motion } from "framer-motion";
import { Heart, Eye, Users, Zap } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Accessibility",
    description:
      "Every student deserves access to world-class guidance, regardless of their location or background.",
  },
  {
    icon: Eye,
    title: "Honesty",
    description:
      "Real advice from real people. No sugar-coating, no rankings manipulation — just genuine guidance.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "We're building a community of mentors and mentees who lift each other up and pay it forward.",
  },
  {
    icon: Zap,
    title: "Impact",
    description:
      "Every session, every review, every conversation has the power to change someone's life trajectory.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-light to-secondary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-heading text-dark mb-6">
              We believe every student in Uzbekistan deserves access to
              world-class guidance
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed">
              Futurly was born from a simple idea: the advice you get shouldn&apos;t
              depend on where you were born. It should depend on where you want
              to go.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <AnimateOnScroll>
              <div className="bg-red-50 rounded-2xl p-8 h-full">
                <h2 className="text-2xl font-heading text-dark mb-4">
                  The Problem
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Students in remote areas of Uzbekistan have no access to
                  reliable information about admissions, careers, and life after
                  university. Decisions worth millions of soum are made based on
                  rumors and outdated advice. A student in Nukus shouldn&apos;t have
                  fewer opportunities than one in Tashkent.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.15}>
              <div className="bg-primary/5 rounded-2xl p-8 h-full">
                <h2 className="text-2xl font-heading text-dark mb-4">
                  The Solution
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Futurly connects you with real people who&apos;ve walked the path
                  you want to take — from top university students to senior
                  professionals at global companies. No matter where you are in
                  Uzbekistan, you can get guidance from someone who truly
                  understands your journey.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading text-dark mb-4">
              Our Values
            </h2>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <AnimateOnScroll key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center h-full"
                >
                  <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-dark mb-2 font-body">
                    {value.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading text-dark mb-4">
              Meet the Team
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              A small but passionate team dedicated to transforming access to
              mentorship in Uzbekistan.
            </p>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <AnimateOnScroll key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="text-center"
                >
                  <div className="relative w-32 h-32 mx-auto rounded-2xl overflow-hidden mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="128px"
                    />
                  </div>
                  <h3 className="font-bold text-dark font-body">
                    {member.name}
                  </h3>
                  <p className="text-primary text-sm font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </motion.div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Backed by */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="text-center">
            <p className="text-sm text-gray-400 uppercase tracking-widest mb-3">
              Supported by
            </p>
            <p className="text-lg text-gray-600 font-medium">
              Youth Affairs Agency of the Republic of Uzbekistan
            </p>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden grain-overlay">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-light to-secondary/5" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-heading text-dark leading-tight mb-6"
            >
              Your Future,{" "}
              <span className="text-primary">Guided</span> by Those
              Who&apos;ve Been There
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed"
            >
              Connect with mentors at top universities and companies worldwide.
              Get personalized guidance for admissions, career growth, and life
              decisions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="primary" size="lg" href="/mentors">
                Find a Mentor
              </Button>
              <Button variant="outline" size="lg" href="/become-mentor">
                Become a Mentor
              </Button>
            </motion.div>
          </div>

          {/* Floating mentor card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 max-w-sm ml-auto"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src="https://i.pravatar.cc/300?img=5"
                      alt="Mentor"
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark font-body">Aziza K.</h3>
                    <p className="text-sm text-gray-500">
                      CS Student, MIT {"\uD83C\uDDFA\uD83C\uDDF8"}
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="w-3.5 h-3.5 fill-secondary text-secondary" />
                      <span className="text-sm font-medium">4.9</span>
                      <span className="text-xs text-gray-400">
                        (127 sessions)
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 mb-4">
                  <span className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    Admissions
                  </span>
                  <span className="px-2.5 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-full">
                    Scholarships
                  </span>
                </div>
                <button className="w-full bg-primary text-white py-2.5 rounded-xl font-semibold text-sm hover:bg-primary-dark transition-colors cursor-pointer">
                  Book Session — $8
                </button>
              </motion.div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute -left-8 top-8 bg-white rounded-xl px-4 py-3 shadow-lg border border-gray-100"
              >
                <p className="text-sm font-bold text-dark">500+</p>
                <p className="text-xs text-gray-500">Active Mentors</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3.5,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -right-4 bottom-4 bg-white rounded-xl px-4 py-3 shadow-lg border border-gray-100"
              >
                <p className="text-sm font-bold text-primary">98%</p>
                <p className="text-xs text-gray-500">Satisfaction</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

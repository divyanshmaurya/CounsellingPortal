"use client";

import { useState } from "react";
import { pricingPlans, faqItems } from "@/lib/data";
import PricingCard from "@/components/ui/PricingCard";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="pt-24 pb-16 min-h-screen bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-heading text-dark mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Choose the plan that fits your journey. Upgrade or downgrade
            anytime.
          </p>
        </AnimateOnScroll>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-8">
          {pricingPlans.map((plan, i) => (
            <AnimateOnScroll key={plan.name} delay={i * 0.1}>
              <PricingCard {...plan} />
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll className="text-center mb-20">
          <p className="text-sm text-gray-400">
            All session fees are separate and set by individual mentors (avg.
            $3&ndash;$15 per session)
          </p>
        </AnimateOnScroll>

        {/* FAQ */}
        <AnimateOnScroll className="max-w-3xl mx-auto" id="faq">
          <h2 className="text-3xl font-heading text-dark mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-3">
            {faqItems.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer"
                >
                  <span className="font-semibold text-dark font-body">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="px-6 pb-5 text-gray-500 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary to-dark relative overflow-hidden grain-overlay">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.05),transparent)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-heading text-white mb-4">
              Ready to shape your future?
            </h2>
            <p className="text-teal-100 mb-6 max-w-md">
              Browse our verified mentors and book your first session today.
              Your journey starts with a single conversation.
            </p>
            <Button variant="secondary" size="lg" href="/mentors">
              Find a Mentor
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:text-right"
          >
            <h2 className="text-3xl sm:text-4xl font-heading text-white mb-4">
              Have experience to share?
            </h2>
            <p className="text-teal-100 mb-6 max-w-md md:ml-auto">
              Join our community of mentors. Set your own schedule, earn extra
              income, and make a real difference.
            </p>
            <Button variant="outline" size="lg" href="/become-mentor" className="border-white text-white hover:bg-white hover:text-dark">
              Become a Mentor
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

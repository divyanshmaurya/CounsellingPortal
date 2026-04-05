"use client";

import { MapPin, Mail, Send, Camera } from "lucide-react";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";
import Button from "@/components/ui/Button";

const contactInfo = [
  {
    icon: MapPin,
    label: "Office",
    value: "Futurly HQ, 15 Amir Temur Avenue, Tashkent, Uzbekistan 100000",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@futurly.uz",
  },
  {
    icon: Send,
    label: "Telegram",
    value: "@futurly_uz",
  },
  {
    icon: Camera,
    label: "Instagram",
    value: "@futurly.uz",
  },
];

const subjects = ["General", "Partnership", "Support", "Press"];

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-heading text-dark mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Have a question, partnership idea, or just want to say hello?
            We&apos;d love to hear from you.
          </p>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <AnimateOnScroll>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-5"
            >
              <div>
                <label className="block text-sm font-medium text-dark mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
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
              <div>
                <label className="block text-sm font-medium text-dark mb-1">
                  Subject
                </label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm cursor-pointer">
                  {subjects.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-dark mb-1">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm resize-none"
                />
              </div>
              <Button variant="primary" size="lg" className="w-full" type="submit">
                Send Message
              </Button>
            </form>
          </AnimateOnScroll>

          {/* Contact info + Map */}
          <AnimateOnScroll delay={0.15}>
            <div className="space-y-6">
              {contactInfo.map((info, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm border border-gray-100"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                      {info.label}
                    </p>
                    <p className="text-sm text-dark font-medium">
                      {info.value}
                    </p>
                  </div>
                </div>
              ))}

              {/* Map placeholder */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 h-56 flex items-center justify-center relative">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="font-bold text-dark font-body">Tashkent, Uzbekistan</p>
                    <p className="text-sm text-gray-500">15 Amir Temur Avenue</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  );
}

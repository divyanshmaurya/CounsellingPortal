"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Button from "./Button";

interface PricingCardProps {
  name: string;
  price: string;
  currency: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
  usdEquiv?: string;
}

export default function PricingCard({
  name,
  price,
  currency,
  period,
  description,
  features,
  cta,
  popular,
  usdEquiv,
}: PricingCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={`relative rounded-2xl p-8 flex flex-col ${
        popular
          ? "bg-primary text-white shadow-xl scale-105 border-2 border-primary"
          : "bg-white text-dark shadow-sm border border-gray-200"
      }`}
    >
      {popular && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-dark text-sm font-bold px-4 py-1 rounded-full">
          Most Popular
        </span>
      )}
      <h3 className="text-xl font-bold font-body mb-1">{name}</h3>
      <p
        className={`text-sm mb-4 ${popular ? "text-teal-100" : "text-gray-500"}`}
      >
        {description}
      </p>
      <div className="mb-6">
        <span className="text-4xl font-bold font-body">{price}</span>
        <span
          className={`text-sm ml-1 ${popular ? "text-teal-100" : "text-gray-500"}`}
        >
          {currency}/{period}
        </span>
        {usdEquiv && (
          <span
            className={`block text-xs mt-1 ${popular ? "text-teal-200" : "text-gray-400"}`}
          >
            {usdEquiv}
          </span>
        )}
      </div>
      <ul className="space-y-3 mb-8 flex-1">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-sm">
            <Check
              className={`w-5 h-5 flex-shrink-0 mt-0.5 ${popular ? "text-secondary" : "text-primary"}`}
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        variant={popular ? "secondary" : "outline"}
        size="lg"
        className="w-full"
      >
        {cta}
      </Button>
    </motion.div>
  );
}

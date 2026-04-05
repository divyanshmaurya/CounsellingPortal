"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  image: string;
  quote: string;
  achievement: string;
}

export default function TestimonialCard({
  name,
  image,
  quote,
  achievement,
}: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
    >
      <Quote className="w-8 h-8 text-primary/20 mb-3" />
      <p className="text-gray-600 mb-4 text-sm leading-relaxed italic">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="40px"
          />
        </div>
        <div>
          <p className="font-semibold text-sm">{name}</p>
          <p className="text-xs text-primary font-medium">{achievement}</p>
        </div>
      </div>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import Button from "./Button";

interface MentorCardProps {
  name: string;
  role: string;
  company: string;
  flag: string;
  rating: number;
  price: number;
  image: string;
  sessions?: number;
}

export default function MentorCard({
  name,
  role,
  company,
  flag,
  rating,
  price,
  image,
  sessions,
}: MentorCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
      className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col min-w-[260px] max-w-[300px]"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="56px"
          />
        </div>
        <div className="min-w-0">
          <h3 className="font-semibold text-dark truncate font-body">{name}</h3>
          <p className="text-sm text-gray-500 truncate">
            {role}, {company} {flag}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 mb-3">
        <Star className="w-4 h-4 fill-secondary text-secondary" />
        <span className="text-sm font-medium">{rating}</span>
        {sessions && (
          <span className="text-xs text-gray-400">
            \u00b7 {sessions} sessions
          </span>
        )}
      </div>
      <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-50">
        <span className="text-lg font-bold text-primary">${price}/session</span>
        <Button variant="primary" size="sm" href="/mentors">
          View Profile
        </Button>
      </div>
    </motion.div>
  );
}

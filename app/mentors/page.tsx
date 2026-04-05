"use client";

import { useState, useMemo } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { mentors } from "@/lib/data";
import MentorCard from "@/components/ui/MentorCard";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  "All",
  "University Admissions",
  "Career Guidance",
  "Skill Development",
  "Interview Prep",
];

const languages = ["All", "English", "Uzbek", "Russian"];

export default function MentorsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [language, setLanguage] = useState("All");
  const [maxPrice, setMaxPrice] = useState(25);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    return mentors.filter((m) => {
      const matchesSearch =
        search === "" ||
        m.name.toLowerCase().includes(search.toLowerCase()) ||
        m.company.toLowerCase().includes(search.toLowerCase()) ||
        m.role.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        category === "All" || m.category === category;
      const matchesLanguage =
        language === "All" || m.languages.includes(language);
      const matchesPrice = m.price <= maxPrice;
      return matchesSearch && matchesCategory && matchesLanguage && matchesPrice;
    });
  }, [search, category, language, maxPrice]);

  return (
    <div className="pt-24 pb-16 min-h-screen bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-heading text-dark mb-4">
            Find Your Mentor
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Browse our community of verified mentors from top universities and
            companies worldwide.
          </p>
        </AnimateOnScroll>

        {/* Search & filter bar */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-8">
          <div className="flex gap-3 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, university, or company..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 text-sm font-medium cursor-pointer lg:hidden"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
          </div>

          {/* Desktop filters */}
          <div className="hidden lg:flex gap-4 mt-4 items-center">
            <div>
              <label className="text-xs text-gray-500 block mb-1">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-primary cursor-pointer"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs text-gray-500 block mb-1">Language</label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-primary cursor-pointer"
              >
                {languages.map((l) => (
                  <option key={l} value={l}>
                    {l}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs text-gray-500 block mb-1">
                Max price: ${maxPrice}/session
              </label>
              <input
                type="range"
                min="1"
                max="25"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-40 accent-primary cursor-pointer"
              />
            </div>
            <div className="ml-auto text-sm text-gray-500">
              {filtered.length} mentor{filtered.length !== 1 ? "s" : ""} found
            </div>
          </div>
        </div>

        {/* Mobile filter sheet */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="lg:hidden bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-6"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-dark font-body">Filters</h3>
                <button onClick={() => setShowFilters(false)} className="cursor-pointer">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-500 block mb-1">Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm cursor-pointer"
                  >
                    {categories.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm text-gray-500 block mb-1">Language</label>
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm cursor-pointer"
                  >
                    {languages.map((l) => (
                      <option key={l} value={l}>
                        {l}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm text-gray-500 block mb-1">
                    Max price: ${maxPrice}/session
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="25"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-full accent-primary cursor-pointer"
                  />
                </div>
                <p className="text-sm text-gray-500">
                  {filtered.length} mentor{filtered.length !== 1 ? "s" : ""} found
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mentor grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((mentor) => (
            <div key={mentor.id} className="flex justify-center">
              <MentorCard
                name={mentor.name}
                role={mentor.role}
                company={mentor.company}
                flag={mentor.flag}
                rating={mentor.rating}
                price={mentor.price}
                image={mentor.image}
                sessions={mentor.sessions}
              />
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">
              No mentors match your filters. Try adjusting your search.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

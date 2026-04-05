import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import UserSegments from "@/components/home/UserSegments";
import FeaturedMentors from "@/components/home/FeaturedMentors";
import Services from "@/components/home/Services";
import Stats from "@/components/home/Stats";
import UniversityMarquee from "@/components/home/UniversityMarquee";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <UserSegments />
      <FeaturedMentors />
      <Services />
      <Stats />
      <UniversityMarquee />
      <CTASection />
    </>
  );
}

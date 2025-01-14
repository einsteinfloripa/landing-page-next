"use client";

import { Header } from "@/components/molecules/header";
import { SomosEinsteinStripe } from "@/components/molecules/somos-einstein-stripe";
import { AboutSection } from "@/components/organisms/about-section";
import AchievementsSection from "@/components/organisms/achievements-section";
import { DonationSection } from "@/components/organisms/donation-section";
import { Hero } from "@/components/organisms/hero-section";
import { ImageSection } from "@/components/organisms/image-section";
import { SignupsSection } from "@/components/organisms/signups-section";
import { TestimonialSection } from "@/components/organisms/testimonial-section";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      className="bg-app-neutral-10"
    >
      <Header />
      <Hero />
      <ImageSection />
      <AboutSection />
      <AchievementsSection />
      <SomosEinsteinStripe />
      <DonationSection />
      <TestimonialSection />
      <SignupsSection />
    </motion.div>
  );
};

export default Home;

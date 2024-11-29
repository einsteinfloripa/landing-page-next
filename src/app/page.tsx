'use client'

import { Header } from "@/components/molecules/header";
import { AboutSection } from "@/components/organisms/about-section";
import AchievementsSection from "@/components/organisms/achievements-section";
import { DonationSection } from "@/components/organisms/donation-section";
import { Hero } from "@/components/organisms/hero-section";
import { ImageSection } from "@/components/organisms/image-section";
import { motion } from "framer-motion";


const Home = () => {

  return (
    <motion.div
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      className="bg-[#F5F5F5] dark:bg-neutral-800"
    >
      <Header  />
      <Hero />
      <ImageSection />
      <AboutSection/>
      <AchievementsSection/>
      <DonationSection/>
    </motion.div>
  );
};


export default Home;
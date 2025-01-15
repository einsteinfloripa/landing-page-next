"use client";

import { Header } from "@/components/molecules/header";
import { AboutHeroSection } from "@/components/organisms/about-hero-section";
import { Hero } from "@/components/organisms/hero-section";
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
      <AboutHeroSection />
    </motion.div>
  );
};

export default Home;

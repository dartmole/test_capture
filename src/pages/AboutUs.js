import React from "react";
//Import sections
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";
//Animation
import { motion } from "framer-motion";
import { PageAnimation } from "../animation";

const AboutUs = () => {
  return (
    <motion.div variants={PageAnimation} initial="hidden" animate="show" exit="exit">
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </motion.div>
  );
};

export default AboutUs;

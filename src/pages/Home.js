import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/sections/extended-section-2/HeroSection";
import QuienesSomosSection from "../components/sections/QuienesSomosSection";
import SectionDivider from "../components/HeroSectionDivider";
import ComisionDirectiva from "../components/sections/extended-section-2/ComisionDirectiva";
import FestivalesSection from "../components/sections/FestivalesSection";
import ContactoSectionDivider from "../components/ContactoSectionDivider";
import ContactoSection from "../components/sections/ContactoSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SectionDivider />
      <QuienesSomosSection />
      <ComisionDirectiva />
      <FestivalesSection />
      <ContactoSectionDivider />
      <ContactoSection />
      <Footer />
    </>
  );
};

export default Home;

import React from "react";
import Browser from "../Components/Browser";
import Content from "../Components/Content";
import Cta from "../Components/Cta";
import FeatureSection from "../Components/FeatureSection";
import HeroSection from "../Components/HeroSection";
import Navbar from "../Components/Navbar";
import Testimonials from "../Components/Testimonials";
import Footer from "../Components/Footer";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <Content />
      <Browser />
      <Testimonials />
      <Cta />
      <Footer/>
    </>
  );
}

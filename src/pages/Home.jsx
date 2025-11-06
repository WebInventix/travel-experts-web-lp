import React from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhyUse from "../components/WhyUse";
import ExperienceSection from "../components/ExperienceSection";
import HeroSection from "../components/hero/HeroSection";
import Destinations from "../components/Destinations";
import AdventureSection from "../components/AdventureSection";
import DiscoverSection from "../components/DiscoverSection";
import DiscoverDesignation from "../components/DiscoverDesignation";
import DiscoverDesignation1 from "../components/DiscoverDesignation1";
import DealsSlider from "../components/DealsSlider";
import FamousPlaces from "../components/FamousPlaces";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <DealsSlider />
      <Destinations />
      <DiscoverDesignation />
      <FamousPlaces />
      <DiscoverDesignation1 />
      <AdventureSection />
      <DiscoverSection />
      <HeroSection />
      {/* <WhyUse /> */}
      <ExperienceSection />
      <Footer />
    </div>
  );
};

export default Home;

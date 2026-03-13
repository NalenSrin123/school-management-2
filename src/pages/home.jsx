import React from "react";
import HeroSection from "../public-site/components/HeroSection";
import Popular_Courses from "../public-site/pages/Popular_Courses";
import Instructor from "../public-site/pages/Instructor";

const home = () => {
  return (
    <>
      <HeroSection />
      <Popular_Courses />
      <Instructor />
    </>
  );
};

export default home;

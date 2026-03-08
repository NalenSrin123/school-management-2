import React from "react";
import aboutBanner from "../../assets/images/about_banner.png";
import { FiTarget } from "react-icons/fi";
import { IoEyeSharp } from "react-icons/io5";

const Hero = () => {
  return (
    <div className="w-full">
      {/* Hero Section with Image */}
      <div className="relative h-80 md:h-150 w-full overflow-hidden">
        {/* Background Image */}
        <img
          src={aboutBanner}
          alt="About Banner"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

        {/* Text Content */}
        <div className="relative z-10 h-full flex flex-col items-start justify-center text-white px-4 md:px-8 w-full md:w-190">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-2 pt-10 md:mb-4 text-left w-full wrap-break-word">
            Empowering Education for
            <span className="text-blue-500"> Generations</span>
          </h1>
          <p className="text-2sm md:text-xl text-left max-w-full md:max-w-190">
            Since our inception, we have been committed to providing a
            transformative learning experience that prepares students for the
            challenges of a rapidly evolving world.
          </p>
        </div>
      </div>

      {/* Boxes Section - Below the Image */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-evenly py-12 bg-gray-50 px-4 md:px-0">
        <div className="bg-gray-100 shadow-lg rounded-3xl p-4 md:p-8 w-11/12 md:w-150 text-left h-auto md:h-75 flex flex-col items-start justify-center self-center">
          <div className="bg-gray-200 p-4 rounded-2xl mb-4">
            <FiTarget className="text-blue-500 text-2xl" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-2 text-black">
            Our Mission
          </h3>
          <p className="text-base md:text-lg text-gray-700">
            To democratize world-class education through innovative technology
            and pedagogy ensuring every student has the tools and support to
            achieve their full potential and contribute meaningfully to society.
          </p>
        </div>
        {/* Box2 */}
        <div className="bg-gray-100 shadow-lg rounded-3xl p-4 md:p-8 w-11/12 md:w-150 text-left h-auto md:h-75 flex flex-col items-start justify-center self-center">
          <div className="bg-gray-200 p-4 rounded-2xl mb-4">
            <IoEyeSharp className="text-blue-500 text-2xl" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-2 text-black">
            Our Vision
          </h3>
          <p className="text-base md:text-lg text-gray-700">
            To be the global leader in integrated school management systems,
            fostering an ecosystem where educators, students, and parents
            collabrate seamlessly for lifelong academic execellence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

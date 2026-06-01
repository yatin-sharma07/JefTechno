"use client";

import React, { useState, useEffect, useContext } from "react";
import { usePathname } from "next/navigation";
import { TranslationContext } from "../context/TranslationContext";
import { motion, AnimatePresence } from "framer-motion";

// Modular Sections
import NavHeader from "./navbar/NavHeader";
import AboutSection from "./navbar/AboutSection";
import ServicesComponent from "./navbar/ServicesComponent";
import IndustriesComponent from "./navbar/IndustriesComponent";
import MobileMenu from "./navbar/MobileMenu";

const Navbar = () => {
  const { isArabic, toggleTranslation } = useContext(TranslationContext);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("");
  const [isSlideOpen, setIsSlideOpen] = useState(false);
  const [resetTimeout, setResetTimeout] = useState(null);
  const [scrollNav, setScrollNav] = useState(false);

  const toggleDropdown = () => setIsDropdownVisible((prev) => !prev);
  const toggleSlideMenu = () => setIsSlideOpen(!isSlideOpen);

  const handleMenuHover = (label) => {
    if (resetTimeout) {
      clearTimeout(resetTimeout);
      setResetTimeout(null);
    }
    if (label === "Home" || label === "Careers") {
      setActiveSection("");
    } else {
      setActiveSection(label);
    }
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveSection("");
    }, 200);
    setResetTimeout(timeout);
  };

  useEffect(() => {
    if (activeSection || isSlideOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      if (resetTimeout) clearTimeout(resetTimeout);
    };
  }, [activeSection, isSlideOpen, resetTimeout]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollNav(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSlideOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setActiveSection("");
    setIsSlideOpen(false);
    setIsDropdownVisible(false);
    document.body.style.overflow = "";
  }, [pathname]);

  const dropdownVariants = {
    hidden: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeOut" } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } },
  };

  return (
    <div
      className={`flex fixed w-full z-[60] overflow-hidden flex-col transition-colors duration-900 ${
        scrollNav || activeSection
          ? "bg-[#2D2E30]"
          : pathname === "/" || pathname === "/about-us" || pathname === "/leadership-team"
            ? "lg:bg-transparent"
            : "bg-[#2D2E30]"
      }`}
    >
      <NavHeader
        handleMenuHover={handleMenuHover}
        handleMouseLeave={handleMouseLeave}
        toggleDropdown={toggleDropdown}
        isDropdownVisible={isDropdownVisible}
        setIsDropdownVisible={setIsDropdownVisible}
        toggleSlideMenu={toggleSlideMenu}
        isArabic={isArabic}
        toggleTranslation={toggleTranslation}
      />

      {/* Dropdown Sections */}
      <AnimatePresence>
        {activeSection === "About" && (
          <motion.div
            key="about"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={dropdownVariants}
            onMouseEnter={() => handleMenuHover("About")}
            onMouseLeave={handleMouseLeave}
          >
            <AboutSection />
          </motion.div>
        )}
        {activeSection === "Our Business" && (
          <motion.div
            key="business"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={dropdownVariants}
            onMouseEnter={() => handleMenuHover("Our Business")}
            onMouseLeave={handleMouseLeave}
          >
            <ServicesComponent />
          </motion.div>
        )}
        {activeSection === "Our Industries" && (
          <motion.div
            key="industries"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={dropdownVariants}
            onMouseEnter={() => handleMenuHover("Our Industries")}
            onMouseLeave={handleMouseLeave}
          >
            <IndustriesComponent />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Slide-out Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full min-[475px]:w-[420px] md:w-[500px] bg-[#2D2E30] z-50 transform lg:hidden transition-transform duration-500 ease-in-out
                    ${isSlideOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          className="absolute top-5 right-5 p-2 text-white hover:text-red-500 transition-colors duration-200 z-10"
          onClick={toggleSlideMenu}
          aria-label="Close menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <div className="h-full">
          <MobileMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

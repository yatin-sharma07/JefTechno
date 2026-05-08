"use client";

import React, { useState, useEffect, useRef, useContext } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TranslationContext } from "../context/TranslationContext";
import { motion, AnimatePresence } from "framer-motion";




const menuItems = [
 
  { label: "About", hasDropdown: true },
  { label: "Our Business", hasDropdown: true },
  { label: "Our Industries", hasDropdown: true },
  { label: "Our Blogs", hasDropdown: false, path: "/blog" },
];

const Navbar = () => {
  const { isArabic, toggleTranslation } = useContext(TranslationContext);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const toggleDropdown = () => setIsDropdownVisible((prev) => !prev);

  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState(""); // State to track active section
  const [isSlideOpen, setIsSlideOpen] = useState(false); // State to handle slide-out menu
  const [resetTimeout, setResetTimeout] = useState(null); // Timeout for reset

  const handleMenuHover = (label) => {
    // Clear any existing timeout to prevent premature reset
    if (resetTimeout) {
      clearTimeout(resetTimeout);
      setResetTimeout(null);
    }

    // Set active section based on hovered item
    if (label === "Home" || label === "Careers") {
      setActiveSection(""); // Reset activeSection for these labels
    } else {
      setActiveSection(label); // Set active section on hover
    }
  };

  const handleMouseLeave = () => {
    // Set a timeout to reset activeSection after leaving the button and section
    const timeout = setTimeout(() => {
      setActiveSection("");
    }, 200); // 200ms delay

    setResetTimeout(timeout);
  };

  useEffect(() => {
    if (activeSection || isSlideOpen) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = ""; // Enable scroll
    }

    return () => {
      document.body.style.overflow = ""; // Reset scroll when component unmounts
      if (resetTimeout) clearTimeout(resetTimeout); // Cleanup timeout
    };
  }, [activeSection, isSlideOpen, resetTimeout]);

  const toggleSlideMenu = () => {
    setIsSlideOpen(!isSlideOpen);
  };

  const [scrollNav, setScrollNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrollNav(true);
      } else {
        setScrollNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [hoverLine, setHoverLine] = useState(""); // State for hover line

  const handleMouseLineEnter = (label) => {
    setHoverLine(label); // Set line based on hovered menu item
  };

  const handleMouseLineLeave = () => {
    setHoverLine(""); // Remove line when hover ends
  };

  //Resizing for mobile , tablet and desktop

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSlideOpen(false);
        setActiveMenu("main");
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -50, transition: { duration: 0.6, ease: "easeIn" } },
  };

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  useEffect(() => {
    setActiveSection("");
    setIsSlideOpen(false);
    setIsDropdownVisible(false);
    document.body.style.overflow = "";
  }, [pathname]);

  return (
    <div
      className={`flex fixed w-full z-[60] overflow-hidden flex-col transition-colors duration-900 ${
        scrollNav || activeSection
          ? "bg-[#312D2D]"
          : pathname === "/" ||
              pathname === "/about-us" ||
              pathname === "/leadership-team"
            ? "lg:bg-transparent"
            : "bg-[#312D2D]"
      }`}
    >
      <div className="flex flex-col pt-6 w-full h-full max-md:max-w-full">
        <header className="flex relative lg:gap-20 justify-between items-center self-center w-[95%] 2xl:max-w-[92%] max-md:max-w-full">
          <Link href={"/"} className="z-20">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f72711985a65d5e9cccf583145ef02cf25367e53a9dbd9152d31ad79b46cc8c?placeholderIfAbsent=true&apiKey=60c6eb6ce37644fdb727618799199006"
              alt="JEF Company logo"
              className="object-contain w-[7rem] lg:w-[7rem] 2xl:w-[8rem]"
            />
          </Link>

          <div className="flex justify-between w-screen">
            <nav className="flex gap-5 xl:gap-10 items-center my-auto max-md:max-w-full">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className="lg:flex cursor-pointer hidden gap-2 justify-center items-center self-stretch my-auto group" // Added 'group' here
                >
                  {item.path ? (
                    <Link
                      href={item.path}
                      className={`nav-item cursor-pointer uppercase md:text-xs xl:text-sm font-medium tracking-[2px] text-white ${
                        pathname === item.path ? "active" : ""
                      }`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      onMouseEnter={() => handleMenuHover(item.label)}
                      onMouseLeave={handleMouseLeave}
                      className="nav-item cursor-pointer uppercase md:text-xs xl:text-sm font-medium text-white tracking-[2px]"
                    >
                      {item.label}
                    </button>
                  )}
                  {item.hasDropdown && (
                    <div
                      className="flex cursor-pointer flex-col justify-center items-center self-stretch px-2.5 py-3.5 my-auto w-8 min-h-[20px]"
                      onMouseEnter={() => handleMenuHover(item.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <img
                        onMouseEnter={() => handleMenuHover(item.label)}
                        onMouseLeave={handleMouseLeave}
                        loading="lazy"
                        src="/HomePageImg/NavbarImg/Dropdown.png"
                        alt="Dropdown"
                        className="object-contain w-5 hidden lg:block transition-transform duration-300 transform group-hover:rotate-180"
                      />
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="flex gap-8 items-center self-stretch my-auto max-md:max-w-full">
              <button
                onClick={toggleDropdown}
                className="lg:flex z-20 hidden group gap-2.5 items-center self-stretch my-auto translation"
              >
                <div
                  translate="no"
                  className="self-stretch uppercase my-auto text-xs xl:text-sm font-light tracking-[2px] text-white"
                >
                  {isArabic ? "Arabic (عربي)" : "English"}
                </div>
                <div className="flex flex-col justify-center items-center self-stretch px-2.5 py-3.5 my-auto w-8 min-h-[20px]">
                  <img
                    loading="lazy"
                    src="../HomePageImg/NavbarImg/Dropdown.png"
                    alt="Dropdown"
                    className={`object-contain w-5 hidden lg:block ${
                      isDropdownVisible
                        ? "transition-transform duration-300 transform rotate-180 group-hover:rotate-180"
                        : "transition-transform duration-300 transform rotate-360"
                    }`}
                  />
                </div>
              </button>
              <AnimatePresence>
                {isDropdownVisible && (
                  <motion.div
                    animate="visible"
                    id="navigation-menu"
                    initial="hidden"
                    exit="exit"
                    variants={menuVariants}
                    className="fixed inset-0 bg-black bg-opacity-55 flex z-10 justify-center items-start"
                  >
                    <div className=" text-white shadow-md mt-40 flex flex-col items-end text-right w-[90%] 2xl:max-w-[92%]">
                      <motion.div
                        variants={buttonVariants}
                        translate="no"
                        className="cursor-pointer flex items-center gap-2 mb-8 w-fit"
                        onClick={() => {
                          toggleTranslation("en");
                          setIsDropdownVisible(false);
                        }}
                      >
                        <div>English</div>{" "}
                        <img
                          className={`w-4 h-4 ${isArabic ? "hidden" : "block"}`}
                          src="/red-check-mark-icon.png"
                        />
                      </motion.div>
                      <motion.div
                        variants={buttonVariants}
                        translate="no"
                        className="cursor-pointer w-fit flex items-center gap-2"
                        onClick={() => {
                          toggleTranslation("ar");
                          setIsDropdownVisible(false);
                        }}
                      >
                        <div>Arabic (عربي)</div>{" "}
                        <img
                          className={`w-4 h-4 ${isArabic ? "block" : "hidden"}`}
                          src="/red-check-mark-icon.png"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <Link href="/get-in-touch" className="z-20">
                <button className="gap-3 uppercase self-stretch py-3 px-4 md:py-2 lg:py-3 md:px-4 lg:px-7 my-auto text-xs md:text-sm text-red-700 bg-white hover:text-white hover:bg-red-700 rounded-[30px] tracking-[2px] whitespace-nowrap">
                  Contact Us
                </button>
              </Link>
              <button
                className="lg:hidden mr-2 justify-items-center w-[2.3rem]"
                onClick={toggleSlideMenu}
              >
                <img
                  src="/HomePageImg/NavbarImg/MenuLogo.png"
                  alt="Mobile View Menu Button"
                />
              </button>
            </div>
          </div>
        </header>

        <div className="relative shrink-0 mt-7 h-0 border-b border-solid border-neutral-600 max-md:max-w-full" />
      </div>

      {/* Conditionally Render Sections */}
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

      {/* Mobile Navbar Content */}
      <div
        className={`fixed top-0 right-0 h-full w-full min-[475px]:w-[420px] md:w-[500px] bg-stone-900 z-50 transform lg:hidden transition-transform duration-500 ease-in-out
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
          <FAQComponent />
        </div>
      </div>
    </div>
  );
};

const navigationItems = [
  { number: "01", title: "About JEF", path: "/about-us" },
  { number: "02", title: "jef leadership Team ", path: "/leadership-team" }, // Add a path for the leadership team
  { number: "03", title: "Our Clients", path: "/coming-soon" },
  { number: "04", title: "employee login", path: "/" },
];

const contentMap = {
  // "01": "About",
  "02": "",
  "03": "Deliver Value added, technically superior and cost-optimum solutions to enhance the safety & reliability of Electrical systems by combining knowledge, experience and technology.",
  "04": "Make more customers across the world benefit from our expertise and achieve 40% annual growth rate.",
};

function AboutSection() {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <section className="flex overflow-hidden flex-col h-[80vh] pl-[11%] items-start px-16 pt-5 pb-96 bg-[#312D2D] max-md:px-5 max-md:pb-24">
      <div className="ml-10 max-w-full w-[994px]">
        <div className="flex gap-5 max-md:flex-col">
          <nav className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-wrap grow gap-6 max-md:mt-10 max-md:max-w-full h-full">
              <div className="flex flex-col grow shrink-0 items-start my-auto basis-0 w-fit max-md:max-w-full">
                {navigationItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-7 items-center mt-11 uppercase tracking-[3.36px] max-md:mt-10"
                  >
                    <div className="self-stretch my-auto text-base text-red-700">
                      {item.number}
                    </div>
                    <Link
                      href={item.path || "#"} // Use the path for clickable items, otherwise keep "#" for others
                      onMouseEnter={() => setHoveredItem(item.number)}
                      className="self-stretch my-auto text-lg hover:text-gray-400 font-medium text-white"
                    >
                      {item.title}
                    </Link>
                    <div className="flex items-center">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2bb3117bb1e657fdbc997cd15e47263db3ce1251843c4a3543e9042a61e0fd2a"
                    alt=""
                    className="w-2"
                  />
                </div>
                    {item.number === "01" && (
                      <div className="flex flex-col justify-center items-center py-1.5 pr-2.5 pl-2.5 min-h-[29px]"></div>
                    )}
                  </div>
                ))}
              </div>
              <div
                className="shrink-0 w-0 border-l border-solid border-neutral-700 mt-[9%] min-h-full"
                role="separator"
                aria-orientation="vertical"
              ></div>
            </div>
          </nav>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div
              className={`transition-all duration-500 ease-in-out flex gap-10 mt-[10%] text-xl font-medium text-white uppercase tracking-[3.36px] max-md:mt-10 ${
                hoveredItem
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-5"
              }`}
            >
              <Link href="/about-us">
                <h2 className="text-xs leading-5 hover:text-gray-400">
                  {hoveredItem ? contentMap[hoveredItem] : "About"}
                </h2>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const ServiceItem = ({ icon, text, path, isVisible }) => (
  <div
    className={`flex gap-5 items-center mt-8 first:mt-10 min-h-[50px] transition-all duration-500 ease-in-out ${
      isVisible
        ? "opacity-100 translate-y-0 visible"
        : "opacity-0 translate-y-4 invisible"
    }`}
  >
    <div className="w-20 h-20 flex items-center justify-center shrink-0">
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="w-full h-full object-contain"
      />
    </div>

    <Link href={path}>
      <div className="text-xs uppercase tracking-[3.36px] font-medium hover:text-gray-400">
        {text}
      </div>
    </Link>
  </div>
);
const ServiceItem2 = ({ icon, text, path, isVisible }) => (
  <div
    className={`flex gap-5 items-center mt-8 first:mt-10 min-h-[50px] transition-all duration-500 ease-in-out ${
      isVisible
        ? "opacity-100 translate-y-0 visible"
        : "opacity-0 translate-y-4 invisible"
    }`}
  >
    <div className="w-20 h-20 flex items-center justify-center shrink-0">
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="w-full h-full object-contain"
      />
    </div>

    <Link href={path}>
      <div className="text-xs uppercase tracking-[3.36px] font-medium hover:text-gray-400">
        {text}
      </div>
    </Link>
  </div>
);
function ServicesComponent() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

const services = [
   {
    icon: "/nav-clps-icon.png",
    text: "CLPS",
    path: "/coming-soon",
  },
  {
    icon: "/nav-earthing-icon3.png",
    text: "EARTHING GROUNDING",
    path: "/earthing-studies",
  },
   {
    icon: "/nav-ese-icon2.png",
    text: "ESE",
    path: "/ese-lightning-protection",
  },
  {
    icon: "/nav-esa-icon3.png",
    text: "ESA LIGHTNING PROTECTION",
    path: "/lightning-protection-studies",
  },
 

  // New items from image
 
  {
    icon: "/nav-jefshield-icon.png",
    text: "JEF-SHIELD & E-BUILD",
    path: "/coming-soon",
  },
  

  {
    icon: "/nav-spd-icon.png",
    text: "SPD",
    path: "/coming-soon",
  },
];

const services2 = [
  {
    icon: "/nav-esa-icon3.png",
    text: "EARTHING HEALTH ASSESSMENT",
    path: "/earthing-studies",
  },
  {
    icon: "/nav-audit-icon2.png",
    text: "ELECTRICAL & FIRE SAFETY",
    path: "/earthing-studies",
  },
  {
    icon: "/nav-istrumentation-icon2.png",
    text: "INSTRUMENTATION SYSTEM",
    path: "/instrumentation-earthing-studies",
  },
  {
    icon: "/nav-power-studies-icon2.png",
    text: "POWER QUALITY SYSTEM",
    path: "/power-system-studies",
  },
  {
    icon: "/nav-lps-icon2.png",
    text: "LPS ADEQUACY",
    path: "/lightning-protection-studies",
  },
];
  const services3 = [
    {
      icon: "/nav-industrial-icon2.png", // industrial type icon
      text: "INDUSTRIAL",
      path: "/industrial",
    },
    {
      icon: "/nav-renewable-icon2.png",
      text: "RENEWABLE",
      path: "/renewable",
      subItems: [
        { text: "1. PSS", path: "/pss" },
        { text: "2. RSA", path: "/rsa" },
      ],
    },
  ];
  return (
    <section className="flex flex-col h-[82vh] pl-[11%] px-16 pt-5 bg-[#312D2D] max-md:px-5">
      <div className="ml-10 w-full max-w-[1016px] h-full">
        <div className="flex gap-5 h-full max-md:flex-col">
          {/* ================= LEFT MENU ================= */}
          <div className="flex flex-col justify-start w-2/5 max-md:w-full">
            {/* PRODUCTS */}
            <header className="flex gap-7 items-center mt-14">
              <div className="text-base font-medium text-red-700 tracking-[3.36px]">
                01
              </div>
              <div
                onMouseEnter={() => {
                  setIsHovered(true);
                  setIsHovered2(false);
                  setIsHovered3(false);
                }}
                className="flex gap-5 cursor-pointer"
              >
                <h2 className="text-lg text-white hover:text-gray-400 tracking-[3.36px]">
                  OUR PRODUCTS
                </h2>
                <div className="flex items-center">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2bb3117bb1e657fdbc997cd15e47263db3ce1251843c4a3543e9042a61e0fd2a"
                    alt=""
                    className="w-2"
                  />
                </div>
              </div>
            </header>

            {/* SOLUTION */}
            <header className="flex gap-7 items-center mt-14">
              <div className="text-base font-medium text-red-700 tracking-[3.36px]">
                02
              </div>
              <div
                onMouseEnter={() => {
                  setIsHovered2(true);
                  setIsHovered(false);
                  setIsHovered3(false);
                }}
                className="flex gap-5 cursor-pointer"
              >
                <h2 className="text-lg text-white hover:text-gray-400 tracking-[3.36px]">
                  AUDIT SERVICES
                </h2>
                <div className="flex items-center">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2bb3117bb1e657fdbc997cd15e47263db3ce1251843c4a3543e9042a61e0fd2a"
                    alt=""
                    className="w-2"
                  />
                </div>
               
              </div>
            </header>

            {/* CONSULTANCY */}
            <header className="flex gap-7 items-center mt-14">
              <div className="text-base font-medium text-red-700 tracking-[3.36px]">
                03
              </div>
              <div
                onMouseEnter={() => {
                  setIsHovered3(true);
                  setIsHovered(false);
                  setIsHovered2(false);
                }}
                className="flex gap-5 cursor-pointer"
              >
                <h2 className="text-lg text-white hover:text-gray-400 tracking-[3.36px]">
                  CONSULTING SERVICES
                </h2>
                <div className="flex items-center">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2bb3117bb1e657fdbc997cd15e47263db3ce1251843c4a3543e9042a61e0fd2a"
                    alt=""
                    className="w-2"
                  />
                </div>
              </div>
            </header>
          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div className="flex flex-col w-3/5 h-full text-white">
            <div className="flex h-full items-start gap-10">
              {/* Divider */}
              <div className="w-[1px] bg-neutral-700 h-[70%] mt-10" />

              {/* STACKED CONTENT */}
              <div className="relative flex-1 h-full flex items-start">
                {/* ===== SERVICES 1 ===== */}
                <div
                  className={`absolute inset-0 grid grid-cols-2 gap-x-20 gap-y-10 content-start
              transition-all duration-300
              ${isHovered ? "opacity-100 z-10" : "opacity-0 pointer-events-none z-0"}`}
                >
                  {services.map((service, index) => (
                    <ServiceItem
                      key={index}
                      {...service}
                      isVisible={isHovered}
                    />
                  ))}
                </div>

                {/* ===== SERVICES 2 ===== */}
                <div
                  className={`absolute inset-0 grid grid-cols-2 gap-x-20 gap-y-10 content-start
              transition-all duration-300
              ${isHovered2 ? "opacity-100 z-10" : "opacity-0 pointer-events-none z-0"}`}
                >
                  {services2.map((service2, index) => (
                    <ServiceItem2
                      key={index}
                      {...service2}
                      isVisible={isHovered2}
                    />
                  ))}
                </div>

                {/* ===== SERVICES 3 ===== */}
                <div
                  className={`absolute inset-0 grid grid-cols-2 gap-x-20 gap-y-10 content-start
              transition-all duration-300
              ${isHovered3 ? "opacity-100 z-10" : "opacity-0 pointer-events-none z-0"}`}
                >
                  {services3.map((service, index) => (
                    <div key={index} className="group">
                      <ServiceItem {...service} isVisible={isHovered3} />

                      {service.subItems && (
                        <div
                          className="ml-10 mt-3 text-sm text-gray-300 
                      opacity-0 translate-y-2 
                      group-hover:opacity-100 group-hover:translate-y-0 
                      transition-all duration-300"
                        >
                          {service.subItems.map((sub, i) => (
                            <div key={i}>{sub.text}</div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const IndustriesItem = ({ path, icon, text, isVisible }) => (
  <div className="flex gap-4 items-center mt-8 first:mt-10 transition-all duration-500 ease-in-out">
    <img
      loading="lazy"
      src={icon}
      alt=""
      className="object-contain shrink-0 self-stretch my-auto w-9 aspect-square"
    />
    <Link href={path}>
      <div className="text-xs self-stretch hover:text-gray-400 my-auto">
        {text}
      </div>
    </Link>
  </div>
);
function IndustriesComponent() {
  const Industries = [
    {
      icon: "../AboutUs/OilandGas.png",
      text: "Oil and Gas",
      path: "/industries/oilandgas",
    },
    {
      icon: "../AboutUs/PoweUtilities.png",
      text: "Power Utilities",
      path: "/industries/powerutilities",
    },
    {
      icon: "../AboutUs/MFplant.png",
      text: "Manufacturing Plant",
      path: "/industries/manufacturingplant",
    },
    {
      icon: "../AboutUs/ProcessPlant.png",
      text: "Process Plant",
      path: "/industries/processplant",
    },
    {
      icon: "../AboutUs/CBimg.png",
      text: "Data Centers",
      path: "/industries/commercialbuilding",
    },
    {
      icon: "../AboutUs/RenewableEnergy.png",
      text: "Renewable Energy",
      path: "/industries/renewableenergy",
    },
  ];

  return (
    <section className="flex overflow-hidden flex-col h-[80vh] pl-[11%] items-start px-16 pt-5 pb-96 bg-[#312D2D] max-md:px-5 max-md:pb-24">
      <div className="ml-10 w-full">
        <div className="flex gap-5 max-md:flex-col">
          {/* LEFT SIDE HEADER */}
          <div className="flex flex-col w-2/5 max-md:w-full">
            <div className="flex gap-7 items-center mt-14 max-md:mt-10">
              <div className="text-base font-medium text-red-700 uppercase tracking-[3.36px]">
                01
              </div>

              <div className="flex gap-10 items-center">
                <h2 className="text-lg font-medium text-white uppercase tracking-[3.36px]">
                  OUR INDUSTRIES
                </h2>

                <div className="flex items-center">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2bb3117bb1e657fdbc997cd15e47263db3ce1251843c4a3543e9042a61e0fd2a"
                    alt=""
                    className="w-2"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="flex flex-col w-3/5 max-md:w-full">
            <div className="flex flex-wrap gap-10 text-base font-medium text-white uppercase tracking-[3.36px] max-md:mt-10">
              {/* Divider line */}
              <div className="shrink-0 w-0 border-l border-solid border-neutral-700 mt-[9%] min-h-full" />

              {/* Grid */}
              <div className="grid grid-cols-2 gap-x-20 gap-y-10 grow items-start my-auto">
                {Industries.map((industry, index) => (
                  <IndustriesItem
                    key={index}
                    icon={industry.icon}
                    text={industry.text}
                    path={industry.path}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const FAQComponent = () => {
  const { isArabic, toggleTranslation } = useContext(TranslationContext);

  const [activeMenu, setActiveMenu] = useState("main");

  const faqData = {
    main: [
      { label: "Home", path: "/" },
      { label: "About", key: "about" },
      { label: "Our Business", key: "business" },
      { label: "Industries", key: "industries" },
      { label: "Blogs", path: "/blog" },
    ],

    about: [
      { label: "About Us", path: "/about-us" },
      { label: "JEF Leadership Team", path: "/leadership-team" },
      { label: "Our Clients", path: "/coming-soon" },
      { label: "Employee Login", path: "/coming-soon" },
    ],

    business: [
      { label: "Earthing Studies", path: "/earthing-studies" },
      { label: "Lightning Protection", path: "/lightning-protection-studies" },
      { label: "Power System Studies", path: "/power-system-studies" },
    ],

    industries: [
      { label: "Oil and Gas", path: "/industries/oilandgas" },
      { label: "Power Utilities", path: "/industries/powerutilities" },
      { label: "Manufacturing Plant", path: "/industries/manufacturingplant" },
    ],
  };

  return (
    <div className="h-full w-full bg-[#1a1a1a] text-white relative overflow-hidden">
      {/* MAIN MENU */}
      <div
        className={`absolute w-full h-full transition-transform duration-300  ${
          activeMenu === "main" ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {faqData.main.map((item, index) =>
          item.path ? (
            <Link key={index} href={item.path}>
              <div className="flex justify-between items-center px-6 py-5 border-b border-gray-700 cursor-pointer">
                <span className="uppercase text-white-500 text-lg">
                  {item.label}
                </span>
              </div>
            </Link>
          ) : (
            <div
              key={index}
              onClick={() => setActiveMenu(item.key)}
              className="flex justify-between items-center px-6 py-5 border-b border-gray-700 cursor-pointer "
            >
              <span className="uppercase text-white-500 text-lg">
                {item.label}
              </span>
              <img
                src="/AboutUs/DropDownArr.png"
                alt="→"
                className="w-3 h-3 object-contain -rotate-90"
              />
            </div>
          ),
        )}
      </div>

      {/* ABOUT MENU */}
      <div
        className={`absolute w-full h-full transition-transform duration-300 ${
          activeMenu === "about" ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          onClick={() => setActiveMenu("main")}
          className="flex items-center gap-3 px-6 py-5 border-b border-gray-700 cursor-pointer"
        >
          <img
            src="/AboutUs/DropDownArr.png"
            alt="back"
            className="w-3 h-3 object-contain rotate-90"
          />
          <span>ABOUT</span>
        </div>

        {faqData.about.map((item, index) => (
          <Link key={index} href={item.path}>
            <div className="flex justify-between items-center px-6 py-5 border-b border-gray-700 cursor-pointer">
              {" "}
              {item.label}
            </div>
          </Link>
        ))}
      </div>

      {/* BUSINESS MENU */}
      <div
        className={`absolute w-full h-full transition-transform duration-300 ${
          activeMenu === "business" ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          onClick={() => setActiveMenu("main")}
          className="flex items-center gap-3 px-6 py-5 border-b border-gray-700 cursor-pointer"
        >
          <img
            src="/AboutUs/DropDownArr.png"
            alt="back"
            className="w-3 h-3 object-contain rotate-90"
          />
          <span>OUR BUSINESS</span>
        </div>

        {faqData.business.map((item, index) => (
          <Link key={index} href={item.path}>
            <div className="flex justify-between items-center px-6 py-5 border-b border-gray-700 cursor-pointer">
              <span>{item.label}</span>
            </div>
          </Link>
        ))}
      </div>

      {/* INDUSTRIES MENU */}
      <div
        className={`absolute w-full h-full transition-transform duration-300 ${
          activeMenu === "industries" ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          onClick={() => setActiveMenu("main")}
          className="flex items-center gap-3 px-6 py-5 border-b border-gray-700 cursor-pointer"
        >
          <img
            src="/AboutUs/DropDownArr.png"
            alt="back"
            className="w-3 h-3 object-contain rotate-90"
          />
          <span>INDUSTRIES</span>
        </div>

        {faqData.industries.map((item, index) => (
          <Link key={index} href={item.path}>
            <div className="flex justify-between items-center px-6 py-5 border-b border-gray-700 cursor-pointer">
              <span>{item.label}</span>
            </div>
          </Link>
        ))}
      </div>

      {/* LANGUAGE MENU */}
      <div
        className={`absolute w-full h-full transition-transform duration-300 ${
          activeMenu === "language" ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          onClick={() => {
            toggleTranslation("en");
            setActiveMenu("main");
          }}
          className="flex justify-between items-center px-6 py-5 border-b border-gray-700 cursor-pointer"
        >
          <span className="uppercase text-white text-sm tracking-widest">
            English
          </span>
          {!isArabic && <span className="text-yellow-400">✓</span>}
        </div>
        <div
          onClick={() => {
            toggleTranslation("ar");
            setActiveMenu("main");
          }}
          className="flex justify-between items-center px-6 py-5 border-b border-gray-700 cursor-pointer"
        >
          <span className="text-white text-sm">العربية</span>
          {isArabic && <span className="text-yellow-400">✓</span>}
        </div>
      </div>

      {/* LANGUAGE BUTTON */}
      <div className="absolute bottom-0 w-full border-t border-gray-700">
        <div
          onClick={() =>
            setActiveMenu(activeMenu === "language" ? "main" : "language")
          }
          className="flex justify-between items-center px-6 py-5 cursor-pointer"
        >
          <span
            translate="no"
            className="text-white text-sm tracking-widest uppercase"
          >
            {isArabic ? "English" : "العربية"}
          </span>
          <img
            src="/AboutUs/DropDownArr.png"
            alt="toggle"
            className={`w-3 h-3 object-contain transition-transform duration-200 ${
              activeMenu === "language" ? "rotate-0" : "rotate-180"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);

const lpsaa = () => {
  const [showLightningPanel, setShowLightningPanel] = useState(false);

  useEffect(() => {
    if (showLightningPanel) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showLightningPanel]);

  useEffect(() => {
    gsap.utils.toArray(".Y-axis-text-Title-Service1").forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: element,
            stagger: 0.6,
            start: "top 100%",
            toggleActions: "play none none none",
          },
        },
      );
    });
  }, []);

  useEffect(() => {
    gsap.fromTo(
      gsap.utils.toArray(".Y-axis-Testimonials"),
      { opacity: 0, y: 100 },
      {
        y: 0,
        opacity: 1,
        duration: 1.1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".Testimonials",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      },
    );
  }, []);

  // For Key Components

  useEffect(() => {
    gsap.fromTo(
      gsap.utils.toArray(".Y-axis-card-anm"),
      { opacity: 0, y: 100 },
      {
        y: 0,
        opacity: 1,
        duration: 1.1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".card-slider",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      },
    );
  }, []);

  // Key Check Points

  useEffect(() => {
    gsap.fromTo(
      gsap.utils.toArray(".Y-axis-Slider-anm"),
      { opacity: 0, y: 100 },
      {
        y: 0,
        opacity: 1,
        duration: 1.1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".slider-anm",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      },
    );
  }, []);

  // Our Services Animation

  useEffect(() => {
    gsap.fromTo(
      gsap.utils.toArray(".Y-axis-Service-anm"),
      { opacity: 0, y: 100 },
      {
        y: 0,
        opacity: 1,
        duration: 1.1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".circle-slider",
          start: "top 60%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      },
    );
  }, []);

  useEffect(() => {
    gsap.utils.toArray(".ContactUsAnimation").forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: element,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        },
      );
    });
  }, []);
  const services = useMemo(
    () => [
      {
        image: "./HomePageImg/WhatWeDoSection/Earthing Studies 2.png",
        text: "Earthing studies",
        path: "/earthing-studies",
      },
      {
        image: "./HomePageImg/WhatWeDoSection/Lightning Protection 2.png",
        text: "Lightning protection system studies",
        path: "/lightning-protection-studies",
      },
      {
        image: "./HomePageImg/WhatWeDoSection/Power System Studies 2.png",
        text: "Power system studies",
        path: "/power-system-studies",
      },
      {
        image:
          "./HomePageImg/WhatWeDoSection/Power Quality and Root cause Analysis 2.png",
        text: "Power quality & root cause analysis",
        path: "/power-quality-studies",
      },
      {
        image: "./HomePageImg/WhatWeDoSection/Instrumentation Earthing 2.png",
        text: "Instrumentation earthing",
        path: "/instrumentation-earthing-studies",
      },
    ],
    [],
  );
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState("");
  const serviceRefs = useRef([]);
  const service2Refs = useRef([]);
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    if (img) {
      gsap.fromTo(
        img,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 2.5,
          ease: "power2.inOut",
        },
      );
    }
  }, [imgRef]);

  const handleMouseEnter = (index, image) => {
    setHoveredIndex(index);
    setBackgroundImage(image);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setBackgroundImage("");
  };

  useEffect(() => {
    serviceRefs.current = serviceRefs.current.slice(0, services.length);
  }, [services]);

  useEffect(() => {
    serviceRefs.current.forEach((ref, index) => {
      if (ref) {
        if (index === hoveredIndex && services[index]?.text !== "") {
          gsap.to(ref, {
            scale: 1.3,
            opacity: 1,
            duration: 0.2,
            ease: "power2.inOut",
          });
        } else {
          gsap.to(ref, {
            scale: hoveredIndex !== null ? 0.9 : 1,
            opacity: hoveredIndex !== null ? 0.5 : 1,
            // border: hoveredIndex !== null && services[index]?.text === '' ? '1px solid white' : '',
            backgroundColor:
              hoveredIndex !== null && services[index]?.text === ""
                ? "transparent"
                : "",
            duration: 0.2,
            ease: "power2.inOut",
          });
        }
      }
    });
  }, [hoveredIndex, services]);

  const navItems = [
    { label: "HOME", isActive: true },
    { label: "OUR BUSINESS", isActive: true },
    { label: "AUDIT SERVICES", isActive: true },
    { label: "LIGHTNING PROTECTION SYSTEM ADEQUACY AUDIT", isActive: false },
  ];

  return (
    <>
      {/* Landing Img Section */}

      <section className="flex overflow-hidden h-screen flex-col bg-white">
        <div className="flex relative flex-col w-full h-screen max-md:pb-24 max-md:max-w-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute size-full object-cover"
          >
            <source
              src="/Audit Services/Lightning Protection Audit - Audit Services.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="flex Y-axis-text-Title-Service1 inset-y-3/4 lg:-mt-[2%] 2xl:mt-0 lg:inset-x-20 p-4 relative flex-col self-center w-full max-md:mt-10 max-md:max-w-full mb-0 mx-40 max-w-full max-md:mb-2.5">
            <h1 className="font-montserrat lg:text-5xl md:text-4xl text-3xl font-bold my-auto tracking-wider text-white max-md:max-w-full max-md:text-4xl">
              LIGHTNING PROTECTION SYSTEM ADEQUACY AUDIT
            </h1>
          </div>
        </div>
      </section>

      {/* Contact Us section */}

      <section className="flex h-auto -mb-11 md:mb-0 overflow-hidden flex-col bg-[#F9F7F2]">
        <div className="flex overflow-hidden flex-col w-full bg-white max-md:max-w-full" />
        <nav className="flex flex-col justify-center py-6 px-24 w-full bg-[#F9F7F2] min-h-[64px] max-md:px-5 max-md:max-w-full">
          <div className="flex w-full max-md:max-w-full">
            <div className="flex items-center h-full min-w-[240px]">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center self-stretch my-auto"
                >
                  <div
                    className={`self-stretch my-auto text-xs tracking-wide leading-none uppercase whitespace-nowrap ${item.isActive ? "text-red-700" : "text-neutral-300"}`}
                  >
                    {item.label}
                  </div>
                  {item.isActive && (
                    <div className="flex flex-col self-stretch px-2.5 my-auto w-[27px]">
                      <div className="flex items-center justify-center w-[7px] h-[7px]">
                        <div className="flex flex-col justify-center self-stretch my-auto min-h-[7px] w-[7px]">
                          <Image
                            loading="lazy"
                            src="/HomePageImg/NavbarImg/Dropdown.png"
                            width={7}
                            height={7}
                            className="object-contain rotate-270 invert"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </nav>

        <header className="flex flex-col items-center justify-center text-center w-full px-5 mx-auto mt-[80px]">
          {/* HEADER CONTENT */}
          <div
            className="flex flex-col items-center justify-center text-center"
            style={{
              width: "1071px",
              gap: "32px",
            }}
          >
            {/* Logo */}

            <Image
              src="/Audit Services/lpsaa.png"
              alt="Earthing Health Assessment Logo"
              width={80}
              height={80}
              className="w-[80px] h-[80px]"
            />

            {/* Heading */}
            <h1 className="text-[#C02429] font-bold text-[36px] tracking-[2px] uppercase font-montserrat">
              LIGHTNING PROTECTION SYSTEM ADEQUACY AUDIT
            </h1>

            {/* Paragraph 1 */}
            <p className="text-[20px] font-normal leading-[150%] text-[#4B4B4B] font-montserrat max-w-[1200px]">
              Lightning is an act of God which risks life and assets. One cannot
              avoid it. There is no known method of preventing the occurrence of
              natural phenomena such as a Lightning Strike / Flash/Discharge. A
              prudent approach will be to measure and manage the lightning risk
              for adequate protection.
            </p>

            {/* Paragraph 2 */}
            <p className="text-[20px] font-normal leading-[150%] text-[#4B4B4B] font-montserrat max-w-[1200px]">
              The purpose of Lightning Protection System audit is to conduct
              lightning risk assessment and determine the level of protection
              required to the structure/facility as per the latest relevant
              standards. LPS Adequacy audit helps to manage and mitigate the
              risk due to lightning and protect the life and assets.
            </p>

            {/* Read More Button */}
            <div className="flex justify-center items-center mb-4">
              <img
                src="/AboutUs/read more button.png"
                alt="Read More"
                onClick={() => setShowLightningPanel(true)}
                className="cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-200"
                style={{ width: "260px", height: "61px" }}
              />
            </div>
          </div>

          {/* Overlay */}
          {showLightningPanel && (
            <div
              className="fixed inset-0 bg-black/50 z-[9998]"
              onClick={() => setShowLightningPanel(false)}
            />
          )}

          {/* Slide In Panel */}
          <div
            className={`fixed top-0 right-0 h-screen bg-[#F9F7F2] z-[9999] transform transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
    ${showLightningPanel ? "translate-x-0" : "translate-x-full"}`}
            style={{
              width: "557px",
            }}
          >
            {/* HEADER */}
            <div className="flex items-start justify-between pt-[64px] px-[42px]">
              <h2
                className="
        uppercase
        text-[#C02429]
        font-bold
        font-montserrat
        text-[24px]
        leading-[38px]
        tracking-[1.2px]
        max-w-[360px]
      "
              >
                LIGHTNING PROTECTION SYSTEM ADEQUACY AUDIT
              </h2>

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setShowLightningPanel(false)}
                className="
        bg-[#C02429]
        text-white
        flex
        items-center
        justify-center
        hover:bg-red-700
        hover:scale-110
        transition
        rounded-full
        w-[46px]
        h-[46px]
        shrink-0
      "
              >
                ✕
              </button>
            </div>

            {/* PANEL CONTENT */}
            <div
              className="
      flex
      flex-col
      ml-[42px]
      mt-[60px]
      w-[470px]
      gap-[32px]
    "
            >
              <p
                className="
        text-[#1B1818]
        font-normal
        font-montserrat
        text-[22px]
        leading-[160%]
        tracking-[0px]
        text-left
      "
              >
                Lightning Protection Adequacy Audit is needed to check the
                adequacy and healthiness of the existing LPS and its conformity
                to the latest standards in such a manner that prevents injury to
                personnel and property damage.
              </p>
            </div>
          </div>
        </header>
      </section>

      <section>
        <WhatGoesWrong />
      </section>

      <section>
        <Deliverables />
      </section>

      <section>
        <ReferenceStandards />
      </section>

      <section>
        <FAQSection />
      </section>

      <section>
        <DownloadSection />
      </section>
    </>
  );
};

//-------------------------WHAT ACTUALLY GOES WRONG--------------------------------------------------------------------------
const whatWeDoData = [
  {
    label: "WHY DO YOU NEED LPS ADEQUACY AUDIT?",
    title: "WHY DO YOU NEED LPS ADEQUACY AUDIT?",
    content: `1. To measure lightning risk to the structure and its contents.

2. Identify structures which require protection and determine the level of protection required as per latest standards.

3. To check the healthiness of the existing LPS system.

4. To know whether lightning protection system is provided in the facility to mitigate the risk from Radiated and Conducted Surges.

5. Identify gaps in the present System with respect to latest and relevant standards.

6. Compliance to latest and relevant standards.

7. Recommendations for Corrective Action with BOQ & Drawings to ensure adequate protection.

8. Design risk mitigation/ management measures to enhance safety.`,
  },

  {
    label: "APPLICATION AREA",
    title: "APPLICATION AREA",
    content: `Commercial & Cultural Heritage Buildings, Public Service Structures & Utilities, IT/ITES Facilities, Hospitals, Hotels, Retails outlets & shopping malls, Factories, Industries, Manufacturing plants, Oil & Gas, Metro rail, Process plants, Wind & Solar Plants, Tank farms, Critical structures like communication towers, power plants, substations and more

Get your risk assessment report, concept design drawings & bill of materials.`,
    button: true,
  },
];
function WhatGoesWrong() {
  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(0);

  const activeTabRef = useRef(0);
  const progressRef = useRef(0);

  const handleTabClick = (index) => {
    activeTabRef.current = index;
    progressRef.current = 0;
    setActiveTab(index);
    setProgress(0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      progressRef.current += 1;

      if (progressRef.current >= 100) {
        progressRef.current = 0;
        const nextTab =
          activeTabRef.current === whatWeDoData.length - 1
            ? 0
            : activeTabRef.current + 1;
        activeTabRef.current = nextTab;
        setActiveTab(nextTab);
        setProgress(0);
      } else {
        setProgress(progressRef.current);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="flex flex-col justify-between mx-auto overflow-hidden"
      style={{
        width: "100%",
        maxWidth: "1729px",
        minHeight: "980px",
        paddingTop: "80px",
        paddingBottom: "60px",
        background: "#F9F7F2",
      }}
    >
      {/* TOP CONTENT */}
      <div
        className="flex flex-col"
        style={{
          marginLeft: "94px",
          gap: "24px",
          width: "100%",
          maxWidth: "1385px",
        }}
      >
        {/* TITLE */}
        <h2
          key={activeTab}
          className="uppercase font-montserrat animate-fadeSlide"
          style={{
            color: "#C02429",
            fontWeight: 700,
            fontSize: "26px",
            lineHeight: "60px",
            letterSpacing: "4.53px",
          }}
        >
          {whatWeDoData[activeTab].title}
        </h2>

        {/* CONTENT */}
        <div
          key={`content-${activeTab}`}
          className="font-montserrat whitespace-pre-line animate-fadeSlide flex flex-col"
          style={{
            width: "100%",
            maxWidth: "1385px",
            minHeight: "594px",
            color: "#1B1818",
            fontWeight: 400,
            fontSize: "20px",
            lineHeight: "150%",
            gap: "32px",
          }}
        >
          <div>{whatWeDoData[activeTab].content}</div>

          {/* BUTTON ONLY FOR APPLICATION AREA */}
          {whatWeDoData[activeTab].button && (
            <button
              className="
        w-[183px]
        h-[50px]
        rounded-full
        border
        border-[#C02429]
        text-[#C02429]
        bg-transparent
        font-montserrat
        text-[16px]
        font-medium
        transition-all
        duration-300
        hover:bg-[#C02429]
        hover:text-white
      "
            >
              JEF Shield
            </button>
          )}
        </div>
      </div>

      {/* BOTTOM TABS */}
      <div className="w-full mt-[60px] px-[94px] overflow-hidden">
        <div
          className="flex items-start gap-[60px] overflow-x-auto scrollbar-hide"
          style={{
            width: "fit-content",
          }}
        >
          {whatWeDoData.map((tab, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(index)}
              className="flex flex-col items-start cursor-pointer flex-shrink-0"
              style={{
                width: "247px",
              }}
            >
              {/* PROGRESS LINE */}
              <div
                className="relative overflow-hidden mb-4"
                style={{
                  width: "247px",
                  height: "2px",
                  background: "#B8BDC7",
                }}
              >
                <div
                  className="absolute top-0 left-0 h-full bg-[#C02429]"
                  style={{
                    width: activeTab === index ? `${progress}%` : "0%",
                    transition:
                      activeTab === index ? "none" : "width 0.3s ease-out",
                  }}
                />
              </div>

              {/* LABEL */}
              <span
                className="uppercase text-left font-montserrat transition-all duration-300"
                style={{
                  fontWeight: activeTab === index ? 600 : 500,
                  fontSize: "12px",
                  lineHeight: "150%",
                  letterSpacing: "1.5px",
                  color: activeTab === index ? "#2E2E2E" : "#4B4B4B",
                }}
              >
                {tab.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
//----------------------------------DELIVERABLES----------------------------------------------------------------------------------
const deliverables = [
  {
    id: 1,
    description:
      "Site Survey, data collection and measurements from qualified and experienced Engineers.",
  },
  {
    id: 2,
    description:
      "Lightning Risk Assessment, study of existing LPS & Earthing system, inspection of air terminations & down conductors and checking the internal LPS.",
  },
  {
    id: 3,
    description: "Providing cost optimal solution.",
  },
  {
    id: 4,
    description: "Minimize lightning risk to your assets and personnel.",
  },
  {
    id: 5,
    description:
      "Recommendations by experts based on detailed site survey and in compliance with latest Indian and International Standards.",
  },
];

function Deliverables() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;

    const scrollLeft = scrollRef.current.scrollLeft;
    const cardWidth = 346 + 24;

    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(index);
  };

  return (
    <section
      className="relative w-full overflow-hidden text-white pt-[120px] pb-[120px] px-[94px] py-20 max-md:px-5"
      style={{
        background: "#161414",
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      <div className="relative z-10 w-full max-w-[1540px] mx-auto">
        {/* HEADING */}
        <h1
          className="text-[#C02429] uppercase mb-14"
          style={{
            fontWeight: 700,
            fontSize: "32px",
            lineHeight: "71.5px",
            letterSpacing: "4.53px",
          }}
        >
          JEF VALUE ADDS
        </h1>

        {/* TOP LINE */}
        <div className="relative w-full mb-[40px]">
          <div className="absolute top-1/2 left-[-50vw] right-[-50vw] h-[1px] bg-white/30" />

          <div className="relative flex gap-[370px]">
            {deliverables.map((_, index) => (
              <div key={index} className="relative shrink-0 w-[14px] h-[14px]">
                <div
                  className={`rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "bg-[#C02429] w-[14px] h-[14px]"
                      : "bg-white w-[10px] h-[10px] mt-[2px] ml-[2px]"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* SCROLLABLE CARDS */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="
            flex
            gap-[24px]
            overflow-x-auto
            scroll-smooth
            scrollbar-hide
            pb-4
          "
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {deliverables.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={item.id}
                className="shrink-0"
                style={{
                  width: "346px",
                  height: "208px",
                }}
              >
                {/* CARD */}
                <div
                  className="
                    relative
                    w-full
                    h-full
                    overflow-hidden
                    transition-all
                    duration-500
                    border
                  "
                  style={{
                    background: isActive ? "#F9F7F2" : "rgba(27, 24, 24, 0.85)",
                    borderColor: isActive
                      ? "#F9F7F2"
                      : "rgba(255,255,255,0.12)",
                    backdropFilter: "blur(6px)",
                    padding: "28px",
                  }}
                >
                  {/* GLOW */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      background:
                        "radial-gradient(circle at top left, rgba(192,36,41,0.22), transparent 55%)",
                    }}
                  />

                  {/* CONTENT */}
                  <div className="relative z-10 h-full flex items-center justify-center text-center">
                    <p
                      style={{
                        fontWeight: 300,
                        fontSize: "18px",
                        lineHeight: "153%",
                        color: isActive ? "#2B2B2B" : "#FFFFFF",
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
//--------------------------------------------------REFERENCE STANDARD----------------------------------------------------
const referenceStandards = [
  {
    id: 1,
    title: "IEC 62305-1:2024",
    description:
      "IEC 62305-1:2024 provides the general principles related to protection against lightning including risk to life, physical damage, and service continuity. This standard forms the foundation for lightning protection system design and implementation.",
  },
  {
    id: 2,
    title: "IEC 62305-2:2024",
    description:
      "This standard covers lightning risk management and assessment methodologies for structures and facilities exposed to lightning strikes and surge effects.",
  },
  {
    id: 3,
    title: "IEC 62305-3:2024",
    description:
      "IEC 62305-3 focuses on physical damage to structures and life hazard protection through external lightning protection systems.",
  },
  {
    id: 4,
    title: "IEC 62305-4:2024",
    description:
      "This section addresses protection of electrical and electronic systems within structures against lightning electromagnetic impulse.",
  },
  {
    id: 5,
    title: "IEC 62561 series",
    description:
      "IEC 62561 specifies the requirements and testing procedures for lightning protection system components.",
  },
  {
    id: 6,
    title: "IEC 61643-11",
    description:
      "IEC 61643-11 defines requirements and test methods for surge protective devices connected to low-voltage power systems.",
  },
  {
    id: 7,
    title: "IS/IEC 62305",
    description:
      "Indian adaptation of IEC 62305 standards governing lightning protection system design and safety practices.",
  },
  {
    id: 8,
    title: "NBC 2016",
    description:
      "National Building Code 2016 provides guidelines for lightning protection and electrical safety in buildings and infrastructure.",
  },
  {
    id: 9,
    title: "IS 3043",
    description:
      "IS 3043 is the Indian Standard Code of Practice for Earthing which defines requirements for grounding systems and electrical safety.",
  },
];

function ReferenceStandards() {
  const [activeStandard, setActiveStandard] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const currentStandard = referenceStandards[activeStandard];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <section className="relative w-full min-h-[500px] bg-[#F9F7F2] overflow-hidden py-[80px]">
      {/* OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[9998]"
          onClick={() => setIsOpen(false)}
        />
      )}
      {/* MAIN CONTENT */}
      <div className="pl-[100px] relative z-10">
        {/* HEADING */}
        <h2
          className="
            text-[#C02429]
            uppercase
            font-montserrat
            font-bold
            text-[32px]
            tracking-[2px]
            leading-[150%]
          "
        >
          REFERENCE STANDARDS
        </h2>

        {/* BUTTON GRID */}
        <div className="mt-[72px] flex flex-wrap gap-[24px] max-w-[980px]">
          {referenceStandards.map((item, index) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveStandard(index);
                setIsOpen(true);
              }}
              className="
                px-[28px]
                h-[48px]
                rounded-full
                border
                border-[#D9D9D9]
                bg-white
                text-[#3E3E3E]
                text-[16px]
                font-montserrat
                transition-all
                duration-300
                hover:bg-[#C02429]
                hover:text-white
              "
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>
      {/* SLIDE PANEL */}
      <div
        className={`
    fixed
    top-0
    right-0
    h-screen
    w-[620px]
    bg-white
    z-[9999]
    shadow-[-20px_0px_60px_rgba(0,0,0,0.08)]
    transform
    transition-all
    duration-1000
    ease-[cubic-bezier(0.22,1,0.36,1)]
    flex
    flex-col
    ${isOpen ? "translate-x-0" : "translate-x-full"}
  `}
      >
        {/* PANEL HEADER */}
        <div className="flex items-start justify-between pt-[56px] px-[48px]">
          <h2
            className="
        uppercase
        text-[#1B1818]
        font-bold
        font-montserrat
        text-[24px]
        leading-[40px]
        tracking-[1.4px]
        max-w-[420px]
      "
          >
            {currentStandard.title}
          </h2>

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setIsOpen(false)}
            className="
        bg-[#C02429]
        text-white
        flex
        items-center
        justify-center
        hover:bg-red-700
        hover:scale-110
        transition-all
        duration-300
        rounded-full
        w-[46px]
        h-[46px]
        shrink-0
      "
          >
            ✕
          </button>
        </div>

        {/* PANEL CONTENT */}
        <div
          className="
      flex-1
      flex
      flex-col
      justify-center
      px-[48px]
      pb-[40px]
    "
        >
          <p
            className="
        text-[#1B1818]
        font-light
        font-montserrat
        text-[22px]
        leading-[160%]
        text-left
      "
          >
            {currentStandard.description}
          </p>
        </div>

        {/* NAVIGATION BUTTONS */}
        <div className="absolute bottom-[48px] right-[48px] flex gap-[16px]">
          {/* PREV */}
          <button
            onClick={() =>
              setActiveStandard((prev) =>
                prev === 0 ? referenceStandards.length - 1 : prev - 1,
              )
            }
            className="
        w-[56px]
        h-[56px]
        rounded-full
        border
        border-[#C02429]
        flex
        items-center
        justify-center
        transition-all
        duration-300
        hover:bg-[#C02429]
        group
      "
          >
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
              <path
                d="M17 7H1M1 7L7 1M1 7L7 13"
                stroke="#C02429"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:stroke-white transition-all duration-300"
              />
            </svg>
          </button>

          {/* NEXT */}
          <button
            onClick={() =>
              setActiveStandard((prev) =>
                prev === referenceStandards.length - 1 ? 0 : prev + 1,
              )
            }
            className="
        w-[56px]
        h-[56px]
        rounded-full
        bg-[#C02429]
        border
        border-[#C02429]
        flex
        items-center
        justify-center
        transition-all
        duration-300
        hover:bg-white
        group
      "
          >
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
              <path
                d="M1 7H17M17 7L11 1M17 7L11 13"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:stroke-[#C02429] transition-all duration-300"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

//-----------------------------------------FAQ-------------------------------------------------------------------------------------

// FAQ CONTENT
const faqData = [
  {
    id: 1,
    question:
      "Our earth electrode resistance measurement shows a satisfactory value. Why do we need a Comprehensive Earthing Health Assessment?",
    answer:
      "A satisfactory earth resistance value alone does not confirm the overall health or effectiveness of the earthing system. A Comprehensive Earthing Health Assessment evaluates bonding integrity, continuity, equipotential performance, corrosion, fault current paths, and compliance with standards to identify hidden risks that basic resistance testing cannot detect.",
  },

  {
    id: 2,
    question:
      "Can the assessment be carried out without requiring power shutdown?",
    answer:
      "Yes. Most assessments can be performed while the facility remains operational. JEF uses specialized live-system testing methodologies and non-intrusive inspection techniques to minimize disruption while ensuring safety and accurate diagnostics.",
  },

  {
    id: 3,
    question:
      "What is the difference between an earth grid resistance test and a riser integrity test?",
    answer:
      "An earth grid resistance test measures the overall resistance of the grounding system to earth, whereas a riser integrity test checks the physical and electrical continuity of grounding risers and interconnections within the system.",
  },

  {
    id: 4,
    question:
      "What happens if the assessment identifies defective connections?",
    answer:
      "Any defective or high-resistance connections identified during the assessment are documented in detail. JEF can also recommend or execute rectification measures followed by verification testing to ensure compliance and reliability.",
  },

  {
    id: 5,
    question:
      "How often should a Comprehensive Earthing Health Assessment be carried out?",
    answer:
      "The assessment frequency depends on the facility type, environmental conditions, and criticality of operations. For most industrial facilities, periodic assessments are recommended every 1–3 years or after major electrical modifications.",
  },

  {
    id: 6,
    question:
      "What is an acceptable earth resistance value, and how is low earth resistance achieved?",
    answer:
      "Acceptable earth resistance values depend on the application and applicable standards. Low earth resistance is achieved through proper earthing design, adequate conductor sizing, soil treatment techniques, optimized electrode configurations, and maintaining strong interconnections throughout the system.",
  },
];

//FAQ FUNCTION
function FAQSection() {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full bg-[#F9F7F2] pt-[86px] pb-[120px] overflow-hidden">
      {/* Internal FAQ Layout */}
      <div className="max-w-[1508px] mx-auto flex flex-col gap-[48px] px-[100px]">
        {/* FAQ Heading */}
        <h2 className="font-montserrat font-bold text-[40px] leading-[55px] uppercase text-[#C02429]">
          FAQ
        </h2>

        {/* FAQ Panels */}
        <div className="w-full flex flex-col gap-[32px]">
          {/* FAQ Grid */}
          <div className="grid grid-cols-2 gap-x-[48px] gap-y-[32px] w-full">
            {faqData.map((item) => {
              const isOpen = openId === item.id;

              return (
                <div
                  key={item.id}
                  className={`
                    w-full
                    bg-white
                    border-[0.5px]
                    border-[#C02429]
                    overflow-hidden
                    transition-all
                    duration-500
                  `}
                >
                  {/* Question */}
                  <button
                    onClick={() => toggleFAQ(item.id)}
                    className="
                      w-full
                      min-h-[80px]
                      px-[24px]
                      py-[15px]
                      flex
                      items-center
                      justify-between
                    "
                  >
                    {/* Panel Content */}
                    <div className="w-full flex items-center justify-between gap-[64px]">
                      {/* Question Text */}
                      <span
                        className={`
                          font-montserrat
                          text-[16px]
                          leading-[150%]
                          text-left
                          transition-all
                          duration-300
                          ${
                            isOpen
                              ? "font-bold text-[#C02429]"
                              : "font-normal text-[#4A4A4A]"
                          }
                        `}
                      >
                        {item.question}
                      </span>

                      {/* Arrow */}
                      <div
                        className={`
                          w-[49px]
                          h-[49px]
                          p-[10px]
                          flex
                          items-center
                          justify-center
                          transition-transform
                          duration-300
                          shrink-0
                          ${isOpen ? "rotate-180" : ""}
                        `}
                      >
                        <img
                          src="/clps/Vector.png"
                          alt="Arrow"
                          width={29}
                          height={17}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </button>

                  {/* Answer */}
                  <div
                    className={`
                      grid
                      transition-all
                      duration-500
                      ease-in-out
                      ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }
                    `}
                  >
                    <div className="overflow-hidden">
                      <div className="px-[24px] pb-[28px]">
                        <p className="font-montserrat font-normal text-[16px] leading-[150%] text-[#4A4A4A]">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

//---------------------------------------DOWNLOAD SECTION----------------------------------------------------------------------------
//DOWNLOAD
function DownloadSection() {
  return (
    <section className="w-full bg-[#F9F7F2] pt-[50px] pb-[120px] overflow-hidden">
      <div className="w-[1508px] ml-[100px] flex flex-col gap-[61px]">
        <h2 className="font-montserrat font-bold text-[32px] leading-[55px] uppercase text-[#C02429]">
          Download
        </h2>

        <div className="w-[554px] flex flex-col gap-[24px]">
          {/* Image Container */}
          <div className="w-[554px] h-[369px] overflow-hidden group/image cursor-pointer">
            <img
              src="/clps/Lighting Protection Guide.png"
              alt="Lightning Protection Solution Guide"
              className="
                w-full
                h-full
                object-cover
                transition-transform
                duration-500
                ease-in-out
                group-hover/image:scale-110
              "
            />
          </div>

          {/* Content */}
          <div className="w-[540px] flex flex-col gap-[17px]">
            <h3 className="font-montserrat font-normal text-[24px] leading-[100%] uppercase text-[#1E1E1E]">
              LPS ADEQUACY AUDIT GUIDE
            </h3>

            <p className="font-montserrat font-light text-[16px] leading-[150%] text-[#6B6B6B]">
              December 11, 2025
            </p>

            <a
              href="/pdfs/lightning-protection-guide.pdf"
              download
              className="w-[260px] h-[24px] flex items-center gap-[32px] group/download"
            >
              <span className="font-montserrat font-medium text-[14px] uppercase text-[#1E1E1E] transition-colors duration-300 group-hover/download:text-[#C02429]">
                Select To Download
              </span>

              <img
                src="/clps/download-icon.png"
                alt="Download"
                className="
                  w-[16px]
                  h-[16px]
                "
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default lpsaa;

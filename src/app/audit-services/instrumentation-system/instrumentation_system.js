"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);

const instrumentation_system = () => {
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
    { label: "INSTRUMENTATION STUDIES", isActive: false },
  ];



  //WHY US SECTION

const cards = [
  {
    id: 1,
    title: "REDUCES ELECTRICAL NOISE AND SIGNAL DISTURBANCE",
    description:
      "By identifying and eliminating ground loops, circulating currents, and shield termination errors that corrupt 4–20 mA and digital signals.",
  },
  {
    id: 2,
    title: "PREVENTS MALFUNCTIONS, FALSE ALARMS, AND NUISANCE TRIPS",
    description:
      "By addressing the root causes that standard electrical testing does not detect.",
  },
  {
    id: 3,
    title: "IMPROVES SYSTEM RELIABILITY AND REDUCES DOWNTIME",
    description:
      "By eliminating the intermittent, hard-to-diagnose failure modes that recur when earthing problems are left uncorrected.",
  },
  {
    id: 4,
    title: "ENHANCES PERSONNEL AND EQUIPMENT SAFETY",
    description:
      "By identifying isolated grounding elements and earth bar mix-ups that represent genuine safety hazards under fault conditions.",
  },
  {
    id: 5,
    title: "IMPROVES PROCESS STABILITY AND PRODUCTION EFFICIENCY",
    description:
      "By restoring signal integrity and eliminating the operational disruptions caused by instrumentation system noise.",
  },
  {
    id: 6,
    title: "DOCUMENTED COMPLIANCE WITH INTERNATIONAL STANDARDS",
    description:
      "Audit reports referenced to IEEE 1050-2004, IEEE 1100-2005, IEC 61000-5-2, and related standards, supporting regulatory, insurance, and operator requirements.",
  },
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
              src="/Audit Services/Instrumentation Earthing - Audit Services.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="flex Y-axis-text-Title-Service1 inset-y-3/4 lg:-mt-[2%] 2xl:mt-0 lg:inset-x-20 p-4 relative flex-col self-center w-full max-md:mt-10 max-md:max-w-full mb-0 mx-40 max-w-full max-md:mb-2.5">
            <h1 className="font-montserrat lg:text-5xl md:text-4xl text-3xl font-bold my-auto tracking-wider text-white max-md:max-w-full max-md:text-4xl">
              INSTRUMENTATION SYSTEMS
            </h1>
          </div>
        </div>
      </section>

      {/* Contact Us section */}

      <section className="flex h-auto -mb-11 md:mb-0 overflow-hidden flex-col bg-[#1B1818]">
        <div className="flex overflow-hidden flex-col w-full bg-white max-md:max-w-full" />
        <nav className="flex flex-col justify-center py-6 px-24 w-full bg-[#1B1818] min-h-[64px] max-md:px-5 max-md:max-w-full">
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
              src="/Instrumentation Study.png"
              alt="Earthing Health Assessment Logo"
              width={80}
              height={80}
              className="w-[80px] h-[80px]"
            />

            {/* Heading */}
            <h1 className="text-[#C02429] font-bold text-[36px] tracking-[2px] uppercase font-montserrat">
              WHY INSTRUMENTATION SYSTEMS FAIL IN WELL-MAINTAINED PLANTS
            </h1>

            {/* Paragraph 1 */}
            <p className="text-[20px] font-normal leading-[150%] text-[#FFFFFF] font-montserrat max-w-[1200px]">
              Process plants and industrial facilities invest significantly in
              their instrumentation and control infrastructure — DCS systems,
              PLCs, 4–20 mA signal loops, Foundation Field Bus, HART protocols,
              transmitters, junction boxes, and field instruments. These systems
              are carefully designed, commissioned, and regularly maintained.
            </p>

            {/* Paragraph 2 */}
            <p className="text-[20px] font-normal leading-[150%] text-[#FFFFFF] font-montserrat max-w-[1200px]">
              Yet across industries and geographies, the familiar pattern of
              problems recurs unexplained trips, nuisance alarms, signal drifts,
              communication failures, and intermittent malfunctions that are not
              only difficult to diagnose but more challenging to eliminate.
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
            className={`fixed top-0 right-0 h-screen bg-[#1B1818] z-[9999]
    transform transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
    ${showLightningPanel ? "translate-x-0" : "translate-x-full"}`}
            style={{
              width: "700px",
            }}
          >
            {/* PANEL HEADER */}
            <div className="flex items-center justify-between px-[54px] pt-[48px]">
              <h2 className="text-[#C02429] font-bold text-[26px] leading-[43.4px] tracking-[1.49px] uppercase font-montserrat">
                INSTRUMENTATION SYSTEMS
              </h2>

              <button
                onClick={() => setShowLightningPanel(false)}
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "30px",
                }}
                className="bg-[#C02429] text-white flex items-center justify-center hover:bg-red-700 hover:scale-110 transition"
              >
                ✕
              </button>
            </div>

            {/* PANEL BODY */}
            <div
              className="flex flex-col"
              style={{
                width: "560px",
                gap: "24px",
                marginTop: "167px",
                marginLeft: "54px",
              }}
            >
              <p className="text-[24px] font-light leading-[150%] text-400 font-montserrat text-[#FFFFFF]">
                JEF has conducted Instrumentation Earthing Audits across more
                than 120 control rooms and instrumentation panel rooms, auditing
                over 9,500 panels, 32,053 junction boxes, and 2,04,963 field
                instruments and field assets.
              </p>
            </div>
          </div>
        </header>
      </section>

      <section>
        <WhatGoesWrong />
      </section>

      {/*----------------------------------------------WHY US SECTION------------------------------------------------------------------- */}
      <section className="w-full bg-[#161414] py-[72px] overflow-hidden">
        <div className="pl-[100px]">
          {/* Heading Section */}
          <div className="max-w-[1385px] flex flex-col gap-[27px]">
            <h2 className="font-montserrat text-[32px] leading-[60px] tracking-[4.53px] uppercase font-bold text-[#C02429]">
              WHY US FOR INSTRUMENTATION EARTHING AUDIT
            </h2>
          </div>

          {/* Horizontal Scroll Cards */}
          <div
            className="
            mt-[82px]
            flex
            gap-[48px]
            overflow-x-auto
            overflow-y-visible
            scrollbar-hide
            pr-[120px]
            pt-[8px]
            pb-[20px]
          "
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {cards.map((card) => (
              <div
                key={card.id}
                className="flex-shrink-0"
                style={{
                  width: "463px",
                }}
              >
                <div
                  key={card.id}
                  className="flex-shrink-0 flex flex-col"
                  style={{
                    width: "463px",
                  }}
                >
                  {/* Card */}
                  <div
                    className="
    w-[463px]
    h-[239px]
    rounded-[20px]
    bg-[#4A4545]
    px-[48px]
    py-[40px]
    flex
    items-center
    justify-center
    text-center
    transition-all
    duration-500
    border
    border-transparent
    hover:border-[#C02429]
    hover:-translate-y-1
  "
                  >
                    {/* Content */}
                    <p
                      className="
      font-montserrat
      text-white
    "
                      style={{
                        fontWeight: 300,
                        fontSize: "16px",
                        lineHeight: "150%",
                      }}
                    >
                      {card.description}
                    </p>
                  </div>

                  <h3
                    className="
      font-montserrat
      uppercase
      text-white
      mt-[20px]
    "
                    style={{
                      fontWeight: 500,
                      fontSize: "16px",
                      lineHeight: "31px",
                    }}
                  >
                    {card.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <Deliverables />
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
    label: "WHAT ACTUALLY GOES WRONG",
    title: "WHAT ACTUALLY GOES WRONG",
    content: `The following 12 factors are identified as capable of interrupting the operation of instrumentation systems

1. Surges, Spikes, and Glitches
2. Leakage Current
3. Circulating Current
4. Differential Grid / Earth Potential
5. Incorrect Earthing Philosophy
6. Incorrect Cabling Philosophy
7. Compromised Common Earthing Point (CEP)
8. High Shield Current
9. EMI and EMF
10. Looping of Excess Power Cables Inside Panels
11. Unused and Unterminated Cables
12. Power Quality Disturbances`,
  },

  {
    label: "SCALE OF THE PROBLEM IN OPERATING PLANTS",
    title: "THE SCALE OF THE PROBLEM IN OPERATING PLANTS",
    content: `The challenge is compounded by the sheer scale of instrumentation infrastructure in a typical process plant or generating station. A medium-sized plant may have hundreds of panels, thousands of junction boxes, and tens of thousands of individual field instruments — each with its own earthing connections, cable shields, and bonding points. The grounding system is physically extensive, installed over years by multiple contractors, and subject to ongoing modifications and additions that incrementally degrade the original design intent.

Errors accumulate silently.

• A shield grounded at both ends in one junction box.

• A signal ground bar inadvertently connected to a PE bar during a panel modification.

• An instrument earth pit left isolated from the plant grid.

None of these individually cause an immediate, visible failure. Together, they create the conditions for the intermittent, hard-to-diagnose problems that operations teams experience as unexplained trips and nuisance alarms — and which plant engineering teams are unable to resolve through standard troubleshooting.

IEC 61000-5-2 (Clause 5.3) clearly identifies the practice of maintaining a separate, isolated earth electrode for instrumentation as a misconception—one that not only fails to improve EMC performance but can also introduce serious safety hazards. Similarly, IEEE 1050-2004 (Clause 5.1) cautions that isolated grounding elements pose both safety and operational risks. Despite these explicit warnings in internationally recognized standards, the practice of isolated earthing continues to be widely observed in operating plants.`,
  },

  {
    label: "WHY STANDARD ELECTRICAL TESTING",
    title: "WHY STANDARD ELECTRICAL TESTING DOES NOT SOLVE THIS",
    content: `Routine electrical testing — insulation resistance, continuity, earth pit resistance — is designed for the protective earthing system. It does not examine the signal reference ground, shield termination practices, shield loop current, earth bar segregation, or the global earthing architecture. An installation that passes all routine electrical tests can still have an instrumentation earthing system that is comprehensively non-compliant with IEEE 1050-2004, IEC 61000-5-2, and IEEE 1100-2005 — and that is actively causing operational problems.

This is the gap that a specialist Instrumentation Earthing Audit addresses.`,
  },

  {
    label: "INSTRUMENTATION EARTHING AUDIT?",
    title: "WHAT IS AN INSTRUMENTATION EARTHING AUDIT?",
    content: `An Instrumentation Earthing Audit is a detailed, structured and end-to-end technical evaluation of the grounding architecture that supports instrumentation and control systems in industrial facilities. It traces the entire earthing path—from field instruments and cable shields, through junction boxes, marshalling cabinets, and DCS panels, up to system cabinets, control room earth buses, and finally the below ground instrumentation and protective earthing systems which are interconnected to the plant earth grid—verifying equipotential bonding, noise control, and safety compliance at every node against globally accepted standards.

Aligned with IEEE 1050-2004, IEEE 1100-2005, and IEC 61000-5-2, the audit combines precision measurements—such as shield loop current, millivolt drop, continuity, EM field intensity, and power quality—with structured visual inspection. The outcome is not just compliance verification, but a diagnostic insight into hidden risks like circulating currents, EMI susceptibility, and unsafe grounding practices—translated into actionable findings directly referenced to international standards.`,
  },

  {
    label: "JEF APPROACH",
    title: "JEF APPROACH",
    content: `JEF's Instrumentation Earthing Audit covers 15 structured tests and inspections applied across panels, junction boxes, field instruments. The scope escalates logically: where shield loop current measurements at the panel level indicate a ground loop condition, the audit is extended to junction boxes and field assets to locate the source. It doesn’t end with measurements alone, we rectify the anomalies identified and also perform measurements to cross verify the quality of rectification not just by visual inspection but also check whether the measured values after post rectification are within the acceptable limits prescribed in standards there by ensuring a fool proof system.

The approach involves 3 phases

1. Phase -1 – Audit and Identification of gaps / anomalies

2. Phase-2 – Rectification of anomalies

3. Phase -3 – Retesting after rectification.`,
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
        background: "#1B1818",
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
          className="font-montserrat whitespace-pre-line animate-fadeSlide"
          style={{
            width: "100%",
            maxWidth: "1385px",
            minHeight: "594px",
            color: "#FFFFFF",
            fontWeight: 400,
            fontSize: "20px",
            lineHeight: "150%",
          }}
        >
          {whatWeDoData[activeTab].content}
        </div>
      </div>

      {/* BOTTOM TABS */}
      <div className="w-full mt-[60px] px-[94px] overflow-hidden">
        <div className="flex items-start justify-between w-full max-w-[1540px]">
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
      "Detailed engineering report with all measurement results, test locations, and test conditions",
  },
  {
    id: 2,
    description:
      "Site photographs documenting the installation condition and all visible deficiencies identified",
  },
  {
    id: 3,
    description:
      "List of all identified anomalies and defects, with specific locations and BOM required for correction",
  },
  {
    id: 4,
    description:
      "Detailed report and site photographs post re-audit.",
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
      className="relative w-full overflow-hidden text-white px-[94px] py-20 max-md:px-5"
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
          INSTRUMENTATION SYSTEM DELIVERABLES
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
    <section className="w-full bg-[#1B1818] pt-[86px] pb-[120px] overflow-hidden">
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
                    bg-[#1B1818]
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
                              : "font-normal text-[#FFFFFF]"
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
                        <p className="font-montserrat font-normal text-[16px] leading-[150%] text-[#FFFFFF]">
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
    <section className="w-full bg-[#1B1818] pt-[80px] pb-[120px] overflow-hidden">
      <div className="w-[1508px] ml-[100px] flex flex-col gap-[61px]">
        {" "}
        <h2 className="font-montserrat font-bold text-[32px] leading-[55px] uppercase text-[#C02429]">
          Download
        </h2>
        <div className="w-[554px] flex flex-col gap-[24px]">
          <div className="w-[554px] h-[369px] overflow-hidden">
            <img
              src="/clps/Lighting Protection Guide.png"
              alt="Lightning Protection Solution Guide"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-[540px] flex flex-col gap-[17px]">
            <h3 className="font-montserrat font-normal text-[24px] leading-[100%] uppercase text-[#FFFFFF]">
              INSTRUMENTATION SYSTEM GUIDE
            </h3>

            <p className="font-montserrat font-light text-[16px] leading-[150%] text-[#FFFFFF]">
              December 14, 2025
            </p>

            <a
              href="/pdfs/lightning-protection-guide.pdf"
              download
              className="w-[260px] h-[24px] flex items-center gap-[32px] group"
            >
              <span className="font-montserrat font-medium text-[14px] uppercase text-[#FFFFFF] group-hover:text-[#C02429] transition-colors duration-300">
                Select To Download
              </span>

              <img
                src="/clps/download-icon.png"
                alt="Download"
                className="w-[16px] h-[16px]"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default instrumentation_system;

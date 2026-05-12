"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const efsa = () => {
  //For Read More Slide In Panel
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
    { label: "ELECTRICAL & FIRE SAFETY AUDIT", isActive: false },
  ];

  //Why Us Section Data

  const cards = [
    {
      id: 1,
      title: "CEA 2023 COMPLIANCE",
      description: "FORM I / II / III reports satisfying Regulation 32",
    },
    {
      id: 2,
      title: "REDUCED FIRE RISK",
      description:
        "Identification and remediation of electrical root causes behind 60% of India's fire incidents",
    },
    {
      id: 3,
      title: "PERSONNEL SAFETY",
      description:
        "Verified earthing, contact protection, and confirmed protective device operation",
    },
    {
      id: 4,
      title: "ASSET PROTECTION",
      description:
        "Early detection of insulation degradation, overheating, harmonics, and power quality issues",
    },
    {
      id: 5,
      title: "INSURANCE READINESS",
      description: "Documented evidence of periodic inspection for insurers",
    },
    {
      id: 6,
      title: "PREVENTIVE MAINTENANCE PROGRAMME",
      description: "Asset-level PM schedule to extend asset life",
    },
    {
      id: 7,
      title: "CERTIFIED STAFF",
      description: "Assessed, competent, documented",
    },
    {
      id: 8,
      title: "JEF SAFETY CERTIFICATION",
      description: "Displayed where the people it protects can see it",
    },
  ];

  return (
    <section>
      {/* Landing Img Section */}

      <section className="flex overflow-hidden h-screen flex-col bg-white">
        <div className="flex relative flex-col w-full min-h-screen">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src="/Audit Services/Electrical & Fire Safety - Audit Services.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* Optional dark overlay for readability */}
          <div className="absolute inset-0 bg-black/40 z-0"></div>

          {/* Hero Content */}
          <div className="relative z-10 flex flex-col justify-end h-screen px-6 md:px-16 lg:px-24 pb-15 md:pb-15 lg:pb-20 pt-[90px]">
            <div className="max-w-[1330px]">
              <h1
                className="
          text-white
          font-bold
          text-3xl
          md:text-4xl
          lg:text-[36px]
          tracking-[0.5px]
          leading-[100%]
          uppercase
          font-montserrat
        "
              >
                ELECTRICAL & FIRE SAFETY AUDIT
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Home > OUR BUSINESS > AUDIT SERVICES > ELECTRICAL & FIRE SAFETY AUDIT  */}

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

        <header className="flex flex-col items-center justify-center text-center w-full px-5 mx-auto mt-[30px] pb-[10px]">
          <header className="flex flex-col items-center justify-center w-full px-5 mt-[80px]">
            {/* MAIN LAYOUT */}
            <div className="flex flex-col items-center w-full max-w-[1391px] gap-[48px]">
              {/* CONTENT BLOCK */}
              <div className="flex flex-col items-center text-center w-full max-w-[1359px] h-[365px] gap-[48px]">
                <Image
                  src="/efsa.png"
                  alt="Electrical & Fire Safety Audit Logo"
                  width={80}
                  height={80}
                  className="w-[80px] h-[80px]"
                />

                {/* TEXT CONTENT */}
                <div className="flex flex-col items-center w-full max-w-[1359px] h-[168px] gap-[16px]">
                  <h1
                    className="
              uppercase
              text-[#C02429]
              font-bold
              font-montserrat
              tracking-[1px]
              leading-[100%]
              text-[36px]
              max-w-[1071px]
              pb-[40px]
            "
                  >
                    ELECTRICAL & FIRE SAFETY AUDIT
                  </h1>

                  <div className="w-full max-w-[1359px] flex flex-col gap-[16px]">
                    <p className="text-center text-[#4B4B4B] font-normal font-montserrat text-[20px] leading-[150%]">
                      Building a Safer India — One Facility At A Time
                    </p>

                    <p className="text-center text-[#4B4B4B] font-normal font-montserrat text-[20px] leading-[150%]">
                      Most safety audits produce reports. JEF produces outcomes.
                    </p>

                    <p className="text-center text-[#4B4B4B] font-normal font-montserrat text-[20px] leading-[150%]">
                      A comprehensive, multi-discipline inspection of your
                      facility's complete electrical installation and fire
                      safety systems — conducted by qualified engineers,
                      structured in alignment with CEA Regulations 2023 (FORM I,
                      II & III)
                    </p>
                  </div>
                </div>
              </div>

              {/* READ MORE BUTTON */}
              <div className="flex justify-center items-center">
                <img
                  src="/AboutUs/read more button.png"
                  alt="Read More"
                  onClick={() => setShowLightningPanel(true)}
                  className="cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-200 w-[260px] h-[61px]"
                />
              </div>
            </div>

            {/* OVERLAY */}
            {showLightningPanel && (
              <div
                className="fixed inset-0 bg-black/50 z-[9998]"
                onClick={() => setShowLightningPanel(false)}
              />
            )}

            {/* SLIDE PANEL */}
            <div
              className={`
    fixed top-0 right-0 h-screen bg-[#F9F7F2] z-[9999]
    transform transition-transform duration-700
    ease-[cubic-bezier(0.22,1,0.36,1)] overflow-hidden
    ${showLightningPanel ? "translate-x-0" : "translate-x-full"}
  `}
              style={{ width: "557px" }}
            >
              {/* HEADER */}
              <div className="flex items-start justify-between pt-[64px] px-[56px]">
                <h2
                  className="
        uppercase text-[#C02429] font-montserrat
        font-semibold text-[22px] leading-[150%]
        tracking-[0px] max-w-[360px]
      "
                >
                  Our Four Audit Domains:
                </h2>

                {/* CLOSE BUTTON */}
                <button
                  onClick={() => setShowLightningPanel(false)}
                  className="
        bg-[#C02429] text-white flex items-center justify-center
        hover:bg-red-700 hover:scale-110 transition-all duration-300
        rounded-full w-[42px] h-[42px] shrink-0
      "
                >
                  ✕
                </button>
              </div>

              {/* PANEL CONTENT */}
              <div
                className="mt-[44px] px-[56px] w-full overflow-y-auto"
                style={{ maxHeight: "calc(100vh - 160px)" }}
              >
                <div className="flex flex-col gap-[22px] w-full">
                  {/* ITEM 1 */}
                  <div className="flex items-start gap-[10px]">
                    <span className="text-[#D62B2B] font-montserrat font-normal text-[18px] leading-[165%] shrink-0">
                      1.
                    </span>

                    <p className="font-montserrat font-normal text-[18px] leading-[165%] text-[#2B2B2B]">
                      <span className="text-[#D62B2B]">
                        Electrical Safety —{" "}
                      </span>
                      500+ checkpoints, 15+ tests and measurements
                    </p>
                  </div>

                  {/* ITEM 2 */}
                  <div className="flex items-start gap-[10px]">
                    <span className="text-[#D62B2B] font-montserrat font-normal text-[18px] leading-[165%] shrink-0">
                      2.
                    </span>

                    <p className="font-montserrat font-normal text-[18px] leading-[165%] text-[#2B2B2B]">
                      <span className="text-[#D62B2B]">
                        General Fire Safety —{" "}
                      </span>
                      200+ checkpoints, Prevention, Life Safety, Active &
                      Passive Fire Protection, Mock Drill Review
                    </p>
                  </div>

                  {/* ITEM 3 */}
                  <div className="flex items-start gap-[10px]">
                    <span className="text-[#D62B2B] font-montserrat font-normal text-[18px] leading-[165%] shrink-0">
                      3.
                    </span>

                    <p className="font-montserrat font-normal text-[18px] leading-[165%] text-[#2B2B2B]">
                      <span className="text-[#D62B2B]">
                        Lift & Escalator —{" "}
                      </span>
                      150+ checkpoints, Electrical, control, operational and
                      emergency systems
                    </p>
                  </div>

                  {/* ITEM 4 */}
                  <div className="flex items-start gap-[10px]">
                    <span className="text-[#D62B2B] font-montserrat font-normal text-[18px] leading-[165%] shrink-0">
                      4.
                    </span>

                    <p className="font-montserrat font-normal text-[18px] leading-[165%] text-[#2B2B2B]">
                      <span className="text-[#D62B2B]">HVAC — </span>
                      100+ checkpoints, Electrical safety and operational
                      performance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </header>
      </section>

      <section>
        <ElectricalAuditTabs />
      </section>

      {/*----------------------------------------------WHY US SECTION-------------------------------------------------------------------------- */}
      <section className="w-full bg-[#161414] py-[72px] overflow-hidden">
        <div className="pl-[100px]">
          {/* Heading Section */}
          <div className="max-w-[1385px] flex flex-col gap-[27px]">
            <h2 className="font-montserrat text-[32px] leading-[60px] tracking-[4.53px] uppercase font-bold text-[#C02429]">
              WHAT THE AUDIT DELIVERS
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
        <ExcellenceinElectricalEngineering />
          </section>
          
          <section>
              <GeneralFireSafety/>
          </section>

      <section>
        <FAQSection />
      </section>

      {/*---------------------------------------DOWNLOAD SECTION----------------------------------------------------------------------------*/}

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
                ELECTRICAL AND FIRE SAFETY GUIDE
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
    </section>
  );
};

//-------------------------Earthing Assessment TAB--------------------------------------------------------------------------
const electricalAuditTabs = [
  {
    label: "ELECTRICAL SAFETY TESTS",
    title: "ELECTRICAL SAFETY TESTS",
    content: (
      <>
        <p>
          Electrical Safety Audit incorporating 500+ checkpoints and precision
          measurements across grounding, protection systems, insulation, and
          power quality.
        </p>

        <div className="mt-[28px] flex flex-col gap-[18px]">
          <p>1. Grounding & Earthing System Evaluation</p>
          <p>2. Electrical Network Integrity & Continuity Checks</p>
          <p>3. Insulation Health & Leakage Current Analysis</p>
          <p>4. Fault Current & Protection System Verification</p>
          <p>5. Power Quality & Load Performance Assessment</p>
          <p>6. Thermal Imaging & Preventive Diagnostics</p>
          <p>7. Lighting & Emergency System Assessment</p>
        </div>

        <h3 className="mt-[48px] uppercase text-[#C02429] font-bold tracking-[2px]">
          Additional Offerings
        </h3>

        <p className="mt-[24px]">
          In addition to 500+ checkpoints and 15+ tests, our audit evaluates
          maintenance systems, critical records, and utility performance for
          risk mitigation and efficiency improvement.
        </p>
      </>
    ),
  },

  {
    label: "JEF SAFETY CERTIFICATION PROGRAMME",
    title: "THE JEF SAFETY CERTIFICATION PROGRAMME",
    content: (
      <>
        <p>India's first facility-specific safety certification.</p>

        <p className="mt-[24px]">The 4-step path to certification:</p>

        <div className="mt-[28px] flex flex-col gap-[22px]">
          <p>
            1. Audit — Comprehensive electrical & fire safety audit against all
            applicable Indian standards
          </p>

          <p>
            2. Rectification — Facility addresses all findings using JEF's
            recommendations
          </p>

          <p>
            3. Closure Audit — JEF independently verifies all critical
            deficiencies are resolved
          </p>

          <p>
            4. Certification — Facility is awarded its JEF Safety Certification
          </p>

          <p>
            5. Staff Training & Certification - Structured training for facility
            electrical management teams and certificates issued based on
            assessment scores
          </p>
        </div>

        <p className="mt-[34px]">
          Note: Our periodic audit significantly reduces the probability of
          electrical and fire accidents. While we cannot guarantee 24/7 safety,
          our certification programme and post-certification training aim to
          build a lasting safety-first culture within your facility.
        </p>
      </>
    ),
  },

  {
    label: "LIFT / ESCALATOR & HVAC AUDITS",
    title: "LIFT / ESCALATOR & HVAC AUDITS",
    content: (
      <>
        <div className="flex flex-col gap-[28px]">
          <p>
            1. Lift & Escalator Full inspection across: lift pit, car interior,
            car roof, machine room, floor landings, and lift shaft.
          </p>

          <p>
            2. HVAC Assessed for electrical safety, fire alarm integration, and
            air quality.
          </p>
        </div>

        <h3 className="mt-[56px] uppercase text-[#C02429] font-bold tracking-[2px]">
          Codes & Standards Referenced
        </h3>

        <p className="mt-[24px]">
          CEA Regulations 2023, NEC 2023, NBC 2016, along with applicable BIS,
          IEC, IEEE, BS and NFPA standards.
        </p>
      </>
    ),
  },
];

const TOTAL = electricalAuditTabs.length;
const VISIBLE = 3;
const TICK_MS = 100;
const SLIDE_DURATION_MS = 10000;
const INCREMENT = (TICK_MS / SLIDE_DURATION_MS) * 100;

function ElectricalAuditTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(0);

  const windowStart = activeTab < VISIBLE ? 0 : activeTab - VISIBLE + 1;

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
      progressRef.current += INCREMENT;

      if (progressRef.current >= 100) {
        progressRef.current = 0;

        const nextTab =
          activeTabRef.current === TOTAL - 1 ? 0 : activeTabRef.current + 1;

        activeTabRef.current = nextTab;

        setActiveTab(nextTab);
        setProgress(0);
      } else {
        setProgress(progressRef.current);
      }
    }, TICK_MS);

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
        <div className="relative h-[60px] overflow-hidden">
          {electricalAuditTabs.map((tab, index) => (
            <h2
              key={index}
              className={`
                uppercase
                font-montserrat
                absolute
                left-0
                top-0
                transition-all
                duration-700
                ease-in-out
                ${
                  activeTab === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 pointer-events-none"
                }
              `}
              style={{
                color: "#C02429",
                fontWeight: 700,
                fontSize: "26px",
                lineHeight: "60px",
                letterSpacing: "4.53px",
              }}
            >
              {tab.title}
            </h2>
          ))}
        </div>

        {/* CONTENT */}
        <div
          className="relative overflow-hidden"
          style={{
            width: "100%",
            maxWidth: "1385px",
            minHeight: "594px",
          }}
        >
          {electricalAuditTabs.map((tab, index) => (
            <div
              key={index}
              className={`
                absolute
                left-0
                top-0
                w-full
                transition-all
                duration-700
                ease-in-out
                ${
                  activeTab === index
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-4 pointer-events-none"
                }
              `}
              style={{
                color: "#1B1818",
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "150%",
                fontFamily: "Montserrat",
              }}
            >
              {tab.content}
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM TABS */}
      <div className="w-full mt-[60px] pl-[100px] overflow-hidden">
        <div
          className="flex gap-[48px]"
          style={{
            width: "1050px",
            height: "83px",
          }}
        >
          {electricalAuditTabs
            .slice(windowStart, windowStart + VISIBLE)
            .map((tab) => {
              const realIndex = electricalAuditTabs.findIndex(
                (item) => item.label === tab.label,
              );

              const isActive = realIndex === activeTab;

              return (
                <button
                  key={realIndex}
                  onClick={() => handleTabClick(realIndex)}
                  className="flex flex-col items-start cursor-pointer flex-shrink-0"
                  style={{
                    width: "318px",
                    height: "83px",
                  }}
                >
                  {/* PROGRESS LINE */}
                  <div className="w-full h-[2px] bg-[#B8BDC7] mb-4 relative overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-full bg-[#C02429] transition-all duration-100 ease-linear"
                      style={{
                        width: isActive ? `${progress}%` : "0%",
                      }}
                    />
                  </div>

                  {/* LABEL */}
                  <span
                    className="uppercase text-left font-montserrat transition-all duration-300"
                    style={{
                      fontWeight: isActive ? 600 : 500,
                      fontSize: "14px",
                      lineHeight: "150%",
                      letterSpacing: "1.5px",
                      color: isActive ? "#2E2E2E" : "#4B4B4B",
                    }}
                  >
                    {tab.label}
                  </span>
                </button>
              );
            })}
        </div>
      </div>
    </div>
  );
}

//--------------------------------------------------------Smart Safety Audit Tools-----------------------------------------------------------------
function ExcellenceinElectricalEngineering() {
  const [activeIndex, setActiveIndex] = useState(0);

  const sectors = [
    {
      name: "UNMATCHED ACCURACY",
      description:
        "AI-guided auditing eliminates human variability — anomalies detected consistently, regardless of auditor",
    },
    {
      name: "HIGH RELIABILITY",
      description:
        "Identical, documented audit sequence across all your facilities",
    },
    {
      name: "FULL TRANSPARENCY",
      description:
        "Every finding captured with photograph, observation, recommendation & standard reference",
    },
    {
      name: "GUIDED MOBILE APP",
      description:
        "Field auditors guided step-by-step — nothing missed, nothing left to individual memory",
    },
    {
      name: "PROVEN AT SCALE",
      description: "16,000+ reports, 6,30,000+ data points, zero data mix-ups",
    },
    {
      name: "SPEED",
      description:
        "Real-time data transfer, automated validation, auto-generated reports",
    },
    {
      name: "CUSTOM REPORTS",
      description:
        "Standardised formats, customisable per client — compare findings across facilities and audit cycles",
    },
    {
      name: "DATA SECURITY",
      description:
        "Enterprise-grade, web-based infrastructure — your data stays yours",
      },
    {
      name: "CLIENT DASHBOARD",
      description:
        "Custom dashboards, status updates, reports and collaterals",
    },  
  ];

  const maxIndex = sectors.length - 1;

  const next = () => setActiveIndex((prev) => Math.min(prev + 1, maxIndex));
  const prev = () => setActiveIndex((prev) => Math.max(prev - 1, 0));

  const atStart = activeIndex === 0;
  const atEnd = activeIndex === maxIndex;

  return (
    <section
      className="relative w-full overflow-hidden text-white flex flex-col justify-center px-[94px] max-md:px-5 py-20"
      style={{
        minHeight: "920px",
        backgroundImage: "url(/AboutUs/Area_of_Expertise.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      <div className="absolute inset-0 bg-[#1a1a1a]/75" />

      <div className="relative z-10 w-full max-w-[1540px] mx-auto">
        <div className="absolute top-0 right-0 flex gap-4 z-20">
          {/* PREV BUTTON */}
          <button
            onClick={prev}
            disabled={atStart}
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
            style={{
              opacity: atStart ? 0.4 : 1,
              background: atStart ? "#ffffff" : "transparent",
              border: "1px solid white",
              color: atStart ? "#000000" : "#ffffff",
            }}
          >
            ←
          </button>

          {/* NEXT BUTTON */}
          <button
            onClick={next}
            disabled={atEnd}
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
            style={{
              opacity: atEnd ? 0.4 : 1,
              background: atEnd ? "transparent" : "#ffffff",
              border: "1px solid white",
              color: atEnd ? "#ffffff" : "#000000",
            }}
          >
            →
          </button>
        </div>

        {/* HEADING */}
        <h1
          className="text-[#C02429] uppercase mb-6"
          style={{
            fontWeight: 700,
            fontSize: "32px",
            lineHeight: "71.5px",
            letterSpacing: "4.53px",
          }}
        >
          JEF'S PATENTED SMART SAFETY AUDIT TOOL
        </h1>

        {/* DESCRIPTION */}
        <p
          className="text-gray-300 mb-16"
          style={{
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "160%",
            maxWidth: "900px",
          }}
        >
          The world's first automated safety audit platform.
        </p>

        {/* SLIDER WRAPPER */}
        <div className="relative w-full mt-10">
          {/* GLOBAL CONTINUOUS LINE */}
          <div className="absolute top-[39px] left-[-50vw] right-[-50vw] h-[1px] bg-white/30 z-0" />

          {/* SLIDING TRACK */}
          <div
            className="relative flex gap-[20px] transition-transform duration-700 ease-in-out z-10"
            style={{ transform: `translateX(-${activeIndex * (346 + 20)}px)` }}
          >
            {sectors.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={index}
                  className="flex flex-col w-[346px] shrink-0 cursor-pointer group"
                  onClick={() => setActiveIndex(index)}
                >
                  {/* TAB LABEL */}
                  <div className="h-[30px] flex items-end mb-[8px]">
                    <span
                      className={`uppercase tracking-[0.1em] text-[11px] transition-colors duration-300 ${
                        isActive
                          ? "font-bold text-white"
                          : "font-normal text-gray-400 group-hover:text-white"
                      }`}
                    >
                      {item.name}
                    </span>
                  </div>

                  {/* DOT CONTAINER */}
                  <div className="relative w-full h-[2px] flex items-center">
                    {isActive ? (
                      // Active dot: red
                      <div className="absolute left-0 w-[14px] h-[14px] bg-[#C02429] rounded-full z-10" />
                    ) : (
                      // Inactive dot: white
                      <div className="absolute left-0 w-2.5 h-2.5 bg-white rounded-full z-10" />
                    )}
                  </div>

                  <div
                    className="mt-[32px] p-8 transition-all duration-500 ease-in-out"
                    style={{
                      height: "360px",
                      background: isActive
                        ? "#F9F7F2"
                        : "rgba(27, 24, 24, 0.85)",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "14px",
                        lineHeight: "1.6",
                        color: isActive ? "#312d2d" : "#e5e7eb",
                      }}
                    >
                      {item.description}
                    </p>
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
//-----------------------------------------------GENERAL FIRE SAFETY-------------------------------------------------------
function GeneralFireSafety() {
  const covers = [
    "Fire Prevention",
    "Life Safety",
    "Active Fire Protection",
    "Passive Fire Protection",
    "Mock Drill Review",
  ];

  return (
    <section
      className="
        w-full
        h-[425px]
        bg-[#F5F3EF]
        flex items-center
        px-[90px]
      "
    >
      <div className="w-full max-w-[1728px]">
        {/* Heading */}
        <h2
          className="
            text-[#C62828]
            uppercase
            font-bold
            tracking-[2px]
            leading-[150%]
            mb-[28px]
          "
          style={{
            fontFamily: "Montserrat",
            fontSize: "32px",
          }}
        >
          GENERAL FIRE SAFETY
        </h2>

        {/* Paragraph */}
        <p
          className="
            text-[#2B2B2B]
            max-w-[1450px]
            mb-[34px]
          "
          style={{
            fontFamily: "Montserrat",
            fontWeight: 400,
            fontSize: "20px",
            lineHeight: "150%",
          }}
        >
          A fire audit that examines the complete system as an integrated whole
          — not just extinguisher counts and detector placement.
        </p>

        {/* Subheading */}
        <p
          className="text-[#2B2B2B] mb-[28px]"
          style={{
            fontFamily: "Montserrat",
            fontWeight: 400,
            fontSize: "20px",
            lineHeight: "150%",
          }}
        >
          what JEF Techno Covers:
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-[14px] max-w-[1400px]">
          {covers.map((item, index) => (
            <button
              key={index}
              className="
                bg-[#FFFFFF]
                border
                border-[#E4E4E4]
                rounded-full
                px-[28px]
                py-[12px]
                transition-all
                duration-300
                ease-in-out
                hover:bg-[#C62828]
                hover:text-white
                hover:border-[#C62828]
                hover:shadow-md
              "
              style={{
                fontFamily: "Montserrat",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "150%",
                color: "#2B2B2B",
              }}
            >
              {item}
            </button>
          ))}
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
      "A satisfactory resistance measurement confirms the aggregate impedance of the overall system. It does not confirm that every item of equipment has an effective connection to the grid, or that earth fault loop impedance is low enough to ensure timely protection operation at each circuit. A ground grid with multiple parallel paths can mask individual defective connections entirely. The Comprehensive Earthing Health Assessment specifically addresses what the resistance measurement cannot tell you",
  },

  {
    id: 2,
    question:
      "Can the assessment be carried out without requiring power shutdown?",
    answer:
      "Yes. JEF’s assessment uses low voltage, low-current injection methods at off-grid frequency and is designed for live systems. Appropriate and adequate personal protective equipment is used throughout. The comprehensive assessment can be completed without production impact.",
  },

  {
    id: 3,
    question:
      "What is the difference between an earth grid resistance test and a riser integrity test?",
    answer:
      "An earth grid resistance test measures the aggregate impedance of the complete earthing system to remote earth. A riser integrity test checks the integrity of each individual connection between the buried grid and the above-grade earthing conductors and thereon to connected equipment — pinpointing which specific connections are open or defective. The two tests address entirely different aspects of earthing system performance and one cannot substitute for the other.",
  },

  {
    id: 4,
    question:
      "What happens if the assessment identifies defective connections?",
    answer:
      "Each deficiency is reported with its specific location and a recommendation for corrective action. For a defective riser below ground, the corrective action is to excavate at the identified location and reinstate the connection. For above-ground defects, redo the specific joint. For an isolated grid section, provide an alternative connection to restore continuity. JEF’s methodology pinpoints the specific location, so corrective work is targeted rather than requiring excavation across a wide area.",
  },

  {
    id: 5,
    question:
      "How often should a Comprehensive Earthing Health Assessment be carried out?",
    answer:
      "A full assessment should be considered whenever the installation has undergone significant modification, when unexplained equipment failures or protection maloperation is occurring, or once every 3 to 5 years. JEF’s team can advise on the appropriate frequency for a specific installation.",
  },

  {
    id: 6,
    question:
      "What is an acceptable earth resistance value, and how is low earth resistance achieved?",
    answer:
      "There is no single universally applicable earth resistance value. For EHV substations, IEEE Std 80 and IS 3043 set targets based on calculated ground potential rise and tolerable touch and step potentials — a function of fault current, not a fixed number. For LV installations, earth loop impedance is the relevant criterion. Where high earth resistance is identified, corrective options depend on the cause and are determined by the assessment findings",
  },
];

//FAQ FUNCTION
function FAQSection() {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full bg-[#F9F7F2] pt-[86px] pb-[50px] overflow-hidden">
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

export default efsa;

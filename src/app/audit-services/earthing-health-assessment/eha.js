"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const eha = () => {
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
    { label: "EARTHING HEALTH ASSESSMENT", isActive: false },
  ];

  //Why Us Section Data

  const cards = [
    {
      id: 1,
      title: "ASSESSMENT, NOT JUST TESTING",
      description:
        "Each test result is interpreted in the context of the complete earthing system — soil conditions, grid geometry, fault current levels, and protection settings — to produce directly actionable findings.",
    },
    {
      id: 2,
      title: "CARRIED OUT ON LIVE SYSTEM",
      description:
        "Designed for live systems, eliminating the production impact that would make comprehensive testing impractical for most facilities.",
    },
    {
      id: 3,
      title: "LOCATION-SPECIFIC FINDINGS",
      description:
        "JEF’s methodology pin points the specific location of each deficiency — open riser, isolated grid section, or corroded connection — enabling targeted corrective action.",
    },
    {
      id: 4,
      title: "EARTH GRID MODELLING AND SIMULATION",
      description:
        "Computer modelling using CDEGS software produces quantitative assessments of GPR, touch potential distribution, and step potential profiles across the site.",
    },
    {
      id: 5,
      title: "COMPLIANCE WITH CURRENT STANDARDS",
      description:
        "Findings and recommendations are in accordance with IEEE Std 80-2013, IEEE Std 81-2025, IS 3043-2018, and CEA (Measures Relating to Safety and Electric Supply) Regulations, 2023.",
    },
    {
      id: 6,
      title: "QUALIFIED AND EXPERIENCED ENGINEERS",
      description:
        "All assessments are carried out by qualified electrical engineers with experience across EHV substations, LV industrial installations, oil and gas, power generation, and critical infrastructure.",
    },
  ];

  return (
    <>
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
              src="/Audit Services/Earthing Audit - Audit Services.mp4"
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
                EARTHING HEALTH ASSESSMENT
              </h1>

              <p
                className="
          mt-8
          text-white
          text-base
          md:text-lg
          lg:text-[22px]
          leading-[150%]
          font-normal
          font-montserrat
          max-w-[1330px]
        "
              >
                As a pioneer in Earthing integrity testing services, we at JEF
                have over two decades of experience covering 300,000 riser
                connections spread across 18 countries, 400 substations ranging
                from 33kV to 765kV process plants and other critical
                installations. With several patents in this field, our level of
                expertise is unmatched even as we keep innovating further.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Home > OUR BUSINESS > AUDIT SERVICES > Earthing Health Assessment  */}

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

        <header className="flex flex-col items-center justify-center text-center w-full px-5 mx-auto mt-[30px] pb-[10px]">
          <header className="flex flex-col items-center justify-center w-full px-5 mt-[80px]">
            <div className="flex flex-col items-center w-full max-w-[1391px] gap-[48px]">
              <div className=" flex flex-col items-center text-center w-full max-w-[1359px] gap-[48px]">
                <Image
                  src="/Audit Services/eha logo.png"
                  alt="Earthing Health Assessment Logo"
                  width={80}
                  height={80}
                  className="w-[80px] h-[80px]"
                />

                <div className=" flex flex-col items-center w-full max-w-[1359px] gap-[48px] ">
                  <h1 className=" uppercase text-[#C02429] font-bold font-montserrat tracking-[1px] leading-[100%] text-[36px] max-w-[1071px] ">
                    EARTHING HEALTH ASSESSMENT
                  </h1>
                  <div className="w-full max-w-[1359px]">
                    <p className="text-center text-[#ffffff] font-normal font-montserrat text-[20px] leading-[150%] ">
                      Most earthing systems are designed carefully, installed
                      correctly, and then largely forgotten. They are
                      underground, inaccessible, and out of sight. Periodic
                      maintenance typically consists of measuring the resistance
                      of the earth electrode — a number that may show no cause
                      for alarm even when the earthing system integrity is
                      significantly compromised.
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
              className={`fixed top-0 right-0 h-screen bg-[#1B1818] z-[9999] transform transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
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
                  EARTHING HEALTH ASSESSMENT
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
        text-[#ffffff]
        font-normal
        font-montserrat
        text-[22px]
        leading-[160%]
        tracking-[0px]
        text-left
      "
                >
                  JEF’s Earthing Health Assessment is a systematic,
                  multi-parameter evaluation of the earthing system as a whole —
                  not just the earth electrode in isolation. The assessment is
                  carried out on live systems, without requiring a shutdown,
                  using sophisticated meters and test equipment. It assesses the
                  condition of buried conductors, the integrity of connections
                  throughout the grid, the adequacy of earth loop impedance for
                  protective device operation, and the safety of the
                  installation for the personnel and assets who work on and
                  around it.
                </p>
              </div>
            </div>
          </header>
        </header>
      </section>

      <section>
        <EarthingAssessmentTabs />
      </section>

      {/*----------------------------------------------WHY US SECTION-------------------------------------------------------------------------- */}
      <section className="w-full bg-[#161414] py-[72px] overflow-hidden">
        <div className="pl-[100px]">
          {/* Heading Section */}
          <div className="max-w-[1385px] flex flex-col gap-[27px]">
            <h2 className="font-montserrat text-[32px] leading-[60px] tracking-[4.53px] uppercase font-bold text-[#C02429]">
              WHY US FOR EARTHING HEALTH ASSESSMENT
            </h2>

            <p className="max-w-[1131px] font-montserrat font-medium text-[16px] leading-[150%] text-white">
              As a pioneer in Earthing integrity testing services, we at JEF
              have over two decades of experience covering 300,000 riser
              connections spread across 18 countries, 400 substations ranging
              from 33kV to 765kV process plants and other critical
              installations. With several patents in this field, our level of
              expertise is unmatched even as we keep innovating further.
            </p>
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

      {/*---------------------------------------DOWNLOAD SECTION----------------------------------------------------------------------------*/}

      <section className="w-full bg-[#1B1818] pt-[50px] pb-[120px] overflow-hidden">
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
              <h3 className="font-montserrat font-normal text-[24px] leading-[100%] uppercase text-[#ffffff]">
                EARTHING HEALTH ASSESSMENT GUIDE
              </h3>

              <p className="font-montserrat font-light text-[16px] leading-[150%] text-[#ffffff]">
                December 11, 2025
              </p>

              <a
                href="/pdfs/lightning-protection-guide.pdf"
                download
                className="w-[260px] h-[24px] flex items-center gap-[32px] group/download"
              >
                <span className="font-montserrat font-medium text-[14px] uppercase text-[#ffffff] transition-colors duration-300 group-hover/download:text-[#C02429]">
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
    </>
  );
};

//-------------------------Earthing Assessment TAB--------------------------------------------------------------------------
const earthingAssessmentData = [
  {
    label: "CONVENTIONAL EARTHING ASSESSMENT",
    title: "THE GAP IN CONVENTIONAL EARTHING ASSESSMENT",
    content: `Standard practice is to measure the resistance of the earth electrode and compare it against the design value. If within acceptable limits, the earthing system is considered satisfactory and safe.

This has a significant limitation addressed in both IEEE Std 80 and IEEE Std 81. A ground grid has multiple parallel current paths. A corroded joint, disconnected riser, or isolated grid section creates a local deficiency without changing the overall measured resistance — the healthy parallel paths continue to return a satisfactory reading. Some or many equipment may have no effective earthing connection at all, yet the resistance test gives no indication regarding the defects.

A facility can show a satisfactory earth resistance measurement while specific switchgear panels, transformer neutrals, or plant structures have open or high-resistance connections to the grid that would prevent the protection system from operating timely during a fault.

JEF's Earthing Health Assessment is designed specifically to address these gaps.`,
  },
  {
    label: "WHY EARTHING SYSTEMS DETERIORATE",
    title: "WHY EARTHING SYSTEMS DETERIORATE",
    content: `An earthing system which is adequate during commissioning may become deficient over its service life through several mechanisms:

• Environmental corrosion — electrochemical interaction between buried conductors and soil causes progressive corrosion of conductor cross-sections and at joints

• Galvanic corrosion — dissimilar metals in contact accelerate corrosion at buried and above ground joints, which are the most difficult points to inspect

• Thermal and mechanical stress at joints — repeated fault events introduce thermal cycling that gradually loosens mechanical joints; even exothermic welded connections generally tend to develop cracks in buried installations as there is no allowance for movement or thermal expansion

• Changes to the installation — plant modifications, extensions, and civil works may alter the earthing system without being fully documented or accounted for in the original protection system design

• Workmanship at installation — under-torqued clamps, incomplete welds, and risers not bonded to the buried grid may not be detectable during commissioning but worsen in service

Periodic comprehensive health assessment — not just resistance measurement — is necessary to identify these deficiencies before they compromise safety.`,
  },
  {
    label: "WHAT IS AT STAKE",
    title: "WHAT IS AT STAKE",
    content: `A deficient earthing system puts three things at risk:

A. Protection system operation — The CEA (Measures Relating to Safety and Electric Supply) Regulations, 2023 require that earthing system impedance be maintained as low as possible to ensure timely breaker operation. If earth loop impedance has increased due to a corroded conductor, disconnected riser, loose connections, or a joint opened under thermal stress, the fault current may be insufficient to operate the protection in time. The fault persists, with consequences including fire, equipment damage, or exposure of personnel to hazardous touch potentials larger than the safe limits.

B. Personnel safety — During a fault, current flowing through the earthing system causes Ground Potential Rise (GPR). IEEE Std 80 defines tolerable limits for touch and step potentials as a function of sub-surface resistivity, soil resistivity, body weight, and fault duration. Exceeding these limits results in electric shock, ventricular fibrillation, and fatality.

C. Equipment reliability — High neutral-to-ground voltages, electromagnetic interference from inadequate equipotential bonding, and nuisance tripping of earth fault protection are symptoms of earthing deficiencies. Sensitive electronic equipment — control systems, PLCs, instrumentation, communications — is also exposed to voltage transients and interference that progressively degrade performance and service life.`,
  },
  {
    label: "JEF EARTHING HEALTH ASSESSMENT",
    title: "JEF EARTHING HEALTH ASSESSMENT",
    content: `JEF's assessment covers the full circuit from the equipment to be protected, through the earthing conductor, through the buried grid, to the electrode — not just the electrode in isolation.

It is structured around the specific failure modes which a resistance measurement will not detect - open and defective risers, disconnected grid sections, high-resistance connections, and inadequate earth loop impedance.

All measurements are carried out on live systems, without requiring a shutdown, with sophisticated meters and test equipment and these values are processed using our proprietary algorithm to determine the condition of the connection.`,
  },
  {
    label: "EHV SUBSTATION EARTHING ASSESSMENT",
    title: "EHV SUBSTATION EARTHING ASSESSMENT",
    content: `1. Soil Resistivity Test
2. Earth Electrode Resistance Test
3. Grid Resistance
4. Riser Integrity Test
5. Grid Integrity Test
6. Effect of Corrosion
7. Touch and Step Potential Test
8. Earth Grid Modelling and Simulation — computer modelling using CDEGS software
9. Gravel Resistivity
10. Surface Layer
11. Continuity Test
12. Vertical Loop Impedance Test

LV EARTHING ASSESSMENT – INDUSTRIAL AND COMMERCIAL

1. Soil Resistivity Test
2. Earth Electrode Resistance Test
3. Earth Loop Impedance Test
4. Earth Leakage Protection Test / Prospective Fault Current Test
5. Riser Integrity Test
6. Effect of Corrosion`,
  },
  {
    label: "ASSESSMENT IDENTIFIES AND DELIVERS",
    title: "WHAT THE ASSESSMENT IDENTIFIES AND DELIVERS",
    content: `What We Identify

1. Open and defective risers
2. Grid islanding (intra-grid)
3. Disconnected grids (inter-grid)
4. Inadequate earth loop impedance
5. Unsafe touch and step potentials
6. Corrosion-affected conductors and connections

Our study doesn't end with identification of anomalies but will also provide corrective actions with practically implementable solutions.`,
  },
  {
    label: "APPLICATION AREA",
    title: "APPLICATION AREAS",
    content: `JEF provides earthing health assessment and grounding testing services across:

1. AIS and GIS substations — EHV, HV, and MV
2. Transmission
3. Power generating stations
4. Industrial manufacturing and process plants
5. Oil and gas — onshore and offshore
6. Tank farms and fuel storage facilities
7. Petrochemical and refinery complexes
8. Automobile and heavy industries
9. Chemical and paints
10. Pharmaceutical
11. Data centres
12. Metro rail and railway infrastructure
13. Earthing audit for renewables — wind farms and solar power plants
14. Communication towers and broadcast infrastructure
15. Commercial buildings, retail complexes, and warehouses
16. Hotels and Hospitals

JEF has conducted comprehensive earthing health assessments at over 500+ substations and carried out earth grid simulation for over 650+ grids.`,
  },
];

const TOTAL = earthingAssessmentData.length;
const VISIBLE = 5;
const TICK_MS = 100;
const SLIDE_DURATION_MS = 10000;
const INCREMENT = (TICK_MS / SLIDE_DURATION_MS) * 100;

function EarthingAssessmentTabs() {
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
        <div className="relative h-[60px] overflow-hidden">
          {earthingAssessmentData.map((tab, index) => (
            <h2
              key={index}
              className={`uppercase font-montserrat absolute left-0 top-0 transition-all duration-700 ease-in-out ${
                activeTab === index
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 pointer-events-none"
              }`}
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

        <div
          className="relative overflow-hidden"
          style={{
            width: "100%",
            maxWidth: "1385px",
            minHeight: "594px",
          }}
        >
          {earthingAssessmentData.map((tab, index) => (
            <div
              key={index}
              className={`font-montserrat whitespace-pre-line absolute left-0 top-0 w-full transition-all duration-700 ease-in-out ${
                activeTab === index
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 translate-y-4 pointer-events-none"
              }`}
              style={{
                color: "#ffffff",
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "150%",
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
          className="flex gap-[24px]"
          style={{
            width: "1220px",
            height: "83px",
          }}
        >
          {earthingAssessmentData
            .slice(windowStart, windowStart + VISIBLE)
            .map((tab) => {
              const realIndex = earthingAssessmentData.findIndex(
                (item) => item.label === tab.label,
              );

              const isActive = realIndex === activeTab;

              return (
                <button
                  key={realIndex}
                  onClick={() => handleTabClick(realIndex)}
                  className="flex flex-col items-start cursor-pointer flex-shrink-0"
                  style={{
                    width: "220px",
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
                      fontSize: "12px",
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

//--------------------------------------------------------DELIVERABLES-----------------------------------------------------------------
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
      "List of all identified anomalies and defects, with specific locations and BOM required for correction",
  },
  {
    id: 5,
    description:
      "Recommendations for corrective action, prioritised by safety impact",
  },
  {
    id: 6,
    description:
      "Earth grid simulation outputs where modelling was performed — GPR, touch potentials distribution, and step potential profile",
  },
  {
    id: 7,
    description:
      "Confirmation of compliance or non-compliance with applicable standards and CEA Regulations, 2023",
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
          EARTHING HEALTH ASSESSMENT DELIVERABLES
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
    <section className="w-full bg-[#1B1818] pt-[86px] pb-[50px] overflow-hidden">
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
                              : "font-normal text-[#ffffff]"
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
                        <p className="font-montserrat font-normal text-[16px] leading-[150%] text-[#ffffff]">
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

export default eha;

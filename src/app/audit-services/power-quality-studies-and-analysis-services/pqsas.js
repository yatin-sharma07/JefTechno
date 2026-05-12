"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const pqsas = () => {
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
    { label: "POWER QUALITY STUDIES AND ANALYSIS SERVICES", isActive: false },
  ];

  //Why Us Section Data

const cards = [
  {
    id: 1,
    title: "VOLTAGE QUALITY",
    description:
      "Assessing sags, swells, unbalance, and harmonics in the voltage supply.",
  },
  {
    id: 2,
    title: "CURRENT QUALITY",
    description:
      "Analyzing current distortions and their impact on equipment.",
  },
  {
    id: 3,
    title: "FREQUENCY STABILITY",
    description:
      "Ensuring the frequency remains stable and within acceptable limits.",
  },
  {
    id: 4,
    title: "TRANSIENT ANALYSIS",
    description:
      "Identifying and mitigating short-duration high-energy disturbances.",
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
              src="/Audit Services/Power Quality Testing - Audit Services.mp4"
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
                POWER QUALITY STUDIES AND ANALYSIS SERVICES
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Home > OUR BUSINESS > AUDIT SERVICES > Earthing Health Assessment  */}

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
            <div className="flex flex-col items-center w-full max-w-[1391px] gap-[48px]">
              <div className=" flex flex-col items-center text-center w-full max-w-[1359px] gap-[48px]">
                <Image
                  src="/Audit Services/lpsaa.png"
                  alt="Earthing Health Assessment Logo"
                  width={80}
                  height={80}
                  className="w-[80px] h-[80px]"
                />

                <div className=" flex flex-col items-center w-full max-w-[1359px] gap-[48px] ">
                  <h1 className="uppercase text-[#C02429] font-bold font-montserrat tracking-[1px] leading-[110%] text-[36px] max-w-[1071px] text-center">
                    POWER QUALITY STUDIES AND
                    <br />
                    ANALYSIS SERVICES
                  </h1>
                  <div className="w-full max-w-[1359px]">
                    <p className="text-center text-[#4B4B4B] font-normal font-montserrat text-[20px] leading-[150%] ">
                      At JEF, we specialize in providing top-notch Power Quality
                      Studies to ensure your electrical systems operate
                      efficiently and reliably. With years of experience and a
                      team of experts, we help you identify and mitigate power
                      quality issues that can affect your operations.
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
                  JEF'S VALUE ADD
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
                  JEF has a large number of class ‘A’ power analysers and highly
                  trained engineers & technicians to carry out complete power
                  quality measurements for various applications including
                  Renewable Energy, Industries, Airports, Data Centre etc.
                </p>

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
                  With a large team of qualified engineers around the globe, we
                  cater to the requirements of clients in the entire India, GCC
                  & North Africa areas.
                </p>
              </div>
            </div>
          </header>
        </header>
      </section>

      <section>
        <WhatGoesWrong />
      </section>

      {/*----------------------------------------------WHY US SECTION-------------------------------------------------------------------------- */}
      <section className="w-full bg-[#161414] py-[72px] overflow-hidden">
        <div className="pl-[100px]">
          {/* Heading Section */}
          <div className="max-w-[1385px] flex flex-col gap-[27px]">
            <h2 className="font-montserrat text-[32px] leading-[60px] tracking-[4.53px] uppercase font-bold text-[#C02429]">
              KEY COMPONENTS OF THE STUDY
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
        <OurApproach />
          </section>
          
          <section>
              <Certifications/>
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

    {/* Cards Row */}
    <div className="flex gap-[48px]">
      {/* CARD 1 */}
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
            POWER QUALITY STUDIES GUIDE
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

      {/* CARD 2 */}
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
            POWER QUALITY ANALYSIS GUIDE
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
  </div>
</section>
    </>
  );
};

//-------------------------What we do (section with red progress bars)--------------------------------------------------------------------------
const whatWeDoData = [
  {
    label: "IMPORTANCE OF POWER QUALITY STUDIES",
    title: "IMPORTANCE OF POWER QUALITY STUDIES",
    content: `Power Quality Studies are crucial for maintaining the integrity and performance of your electrical systems. They help in:

1. Identifying potential power quality issues that can cause tripping, equipment failures and/or inefficiencies.

2. Ensuring compliance with international standards such as IEEE 1159, IEEE 519, and IEC 61000.

3. Reducing operational costs by preventing equipment damage and minimizing downtime.`,
  },

  {
    label: "REPORTS AND ANALYSIS",
    title: "DETAILED STUDY REPORTS AND ANALYSIS",
    content: `Our detailed reports include:

• Clear documentation of power quality measurements, observations & Analysis.

• Summary of compliance with relevant standards.

• Actionable recommendations for mitigating identified power quality issues.`,
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
      className="flex flex-col mx-auto overflow-hidden"
      style={{
        width: "100%",
        maxWidth: "1729px",
        minHeight: "720px",
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
            minHeight: "420px",
            color: "#1B1818",
            fontWeight: 400,
            fontSize: "20px",
            lineHeight: "150%",
            gap: "32px",
          }}
        >
          <div>{whatWeDoData[activeTab].content}</div>
        </div>
      </div>

      {/* BOTTOM TABS */}
      <div className="w-full mt-[20px] px-[94px] overflow-hidden">
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
                      activeTab === index
                        ? "none"
                        : "width 0.3s ease-out",
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

//--------------------------------------------------------OUR APPROACH-----------------------------------------------------------------
const approachSteps = [
  {
    id: 1,
    title: "DATA COLLECTION",
    description:
      "Using advanced power quality analyzers to gather data on voltage, current, and frequency.",
  },
  {
    id: 2,
    title: "ANALYSIS",
    description:
      "Detailed analysis of collected data to identify power quality issues such as sags, swells, harmonics, and transients.",
  },
  {
    id: 3,
    title: "REPORTING",
    description:
      "Comprehensive reports detailing findings, compliance status, and recommendations for improvements.",
  },
  {
    id: 4,
    title: "MITIGATION",
    description:
      "Recommending implementation of tailored solutions to address identified power quality issues.",
  },
];

const CARD_WIDTH = 348;
const GAP = 64;
const STEP = CARD_WIDTH + GAP;

function OurApproach() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [endPadWidth, setEndPadWidth] = useState(0);

  useEffect(() => {
    const updatePad = () => {
      if (scrollRef.current) {
        setEndPadWidth(scrollRef.current.clientWidth - CARD_WIDTH);
      }
    };
    updatePad();
    window.addEventListener("resize", updatePad);
    return () => window.removeEventListener("resize", updatePad);
  }, []);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const index = Math.min(
      Math.round(scrollRef.current.scrollLeft / STEP),
      approachSteps.length - 1
    );
    setActiveIndex(index);
  };

  return (
    <section
      className="relative w-full overflow-hidden py-[100px]"
      style={{
        background: "#161414",
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      <div className="w-full max-w-[1720px] mx-auto px-[94px]">
        {/* HEADING */}
        <div className="flex flex-col gap-[24px] mb-[80px]">
          <h2
            className="uppercase text-[#C02429]"
            style={{
              fontWeight: 700,
              fontSize: "32px",
              lineHeight: "100%",
              letterSpacing: "2px",
            }}
          >
            OUR APPROACH TO POWER QUALITY STUDY SERVICE
          </h2>

          <p
            className="text-white"
            style={{
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "150%",
            }}
          >
            At JEF, we follow a systematic approach to Power Quality Studies:
          </p>
        </div>

        {/* DOTS + LABELS */}
        <div className="relative flex gap-[64px] mb-[72px]">
          {approachSteps.map((item, index) => {
            const isActive = activeIndex === index;
            const isLast = index === approachSteps.length - 1;

            return (
              <div
                key={item.id}
                className="flex flex-col shrink-0"
                style={{ width: `${CARD_WIDTH}px` }}
              >
                {/* LABEL */}
                <h3
                  className="uppercase mb-[18px]"
                  style={{
                    color: "white",
                    fontWeight: 500,
                    fontSize: "16px",
                    letterSpacing: "1.5px",
                    lineHeight: "150%",
                  }}
                >
                  {item.title}
                </h3>

                {/* DOT + LINE */}
                <div className="relative flex items-center" style={{ height: "16px" }}>
                  {!isLast && (
                    <div
                      className="absolute"
                      style={{
                        top: "50%",
                        left: 0,
                        right: `-${GAP}px`,
                        height: "1px",
                        background: "rgba(255,255,255,0.4)",
                        transform: "translateY(-50%)",
                        zIndex: 0,
                      }}
                    />
                  )}
                  <div
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: "16px",
                      height: "16px",
                      background: isActive ? "#D62828" : "white",
                      position: "relative",
                      zIndex: 1,
                      flexShrink: 0,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* SCROLLABLE CARDS */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-[64px] overflow-x-auto scroll-smooth scrollbar-hide pb-4"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {approachSteps.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={item.id}
                className="shrink-0"
                style={{
                  width: `${CARD_WIDTH}px`,
                  height: "210px",
                }}
              >
                <div
                  className="w-full h-full transition-all duration-500"
                  style={{
                    background: isActive ? "#F5F3EE" : "rgba(22,20,20,0.65)",
                    border: !isActive ? "1px solid rgba(255,255,255,0.04)" : "none",
                    padding: "34px",
                  }}
                >
                  <p
                    style={{
                      color: isActive ? "#1B1818" : "white",
                      fontWeight: 300,
                      fontSize: "18px",
                      lineHeight: "165%",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Trailing spacer so last card can scroll into active position */}
          {endPadWidth > 0 && (
            <div className="shrink-0" style={{ width: `${endPadWidth}px` }} />
          )}
        </div>
      </div>
    </section>
  );

}

//--------------------------------------------------OUR CERTIFICATES--------------------------------------------------------


function Certifications() {
  const certifications = [
    "IEEE 1159 and IEEE 1100 standards for monitoring and mitigating power quality issues",
    "IEC 61000 series for electromagnetic compatibility and power quality",
  ];

  return (
    <section
      className="
        w-full
        h-[425px]
        bg-[#F5F3EF]
        flex items-center
        px-[100px]
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
            mb-6
          "
          style={{
            fontFamily: "Montserrat",
            fontSize: "32px",
          }}
        >
          OUR CERTIFICATIONS AND EXPERTISE
        </h2>

        {/* Paragraph */}
        <p
          className="
            text-[#2B2B2B]
            mb-12
            max-w-[1450px]
          "
          style={{
            fontFamily: "Montserrat",
            fontWeight: 400,
            fontSize: "20px",
            lineHeight: "150%",
          }}
        >
          JEF is committed to excellence and quality. Our team is certified and
          trained in the latest standards and practices, including:
        </p>

        {/* Buttons */}
<div className="flex flex-col gap-5 max-w-[1050px]">
  {certifications.map((item, index) => (
    <button
      key={index}
      className={`
        bg-[#FFFFFF]
        border
        border-[#E4E4E4]
        rounded-full
        text-left
        transition-all
        duration-300
        ease-in-out
        hover:bg-[#C62828]
        hover:text-white
        hover:border-[#C62828]
        hover:shadow-md

        ${
          index === 0
            ? "w-[950px] px-10 py-3"
            : "w-[780px] px-10 py-3"
        }
      `}
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

export default pqsas;

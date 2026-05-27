"use client";

import { useState, useEffect, useRef } from "react";
import "./components/whatwedo.css";

export default function WhatWeDoSection() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  const [showContent, setShowContent] = useState(false);
  const [videoStarted, setVideoStarted] = useState(false);

  const [activeSection, setActiveSection] = useState("products");
  const [activeCard, setActiveCard] = useState(0);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !videoStarted) {
          setVideoStarted(true);

          if (videoRef.current) {
            videoRef.current.play();
          }
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [videoStarted]);

 const sections = {
  products: {
    png: "/HomePageImg/J.png",

    dots: [
      {
        heading: "CLPS\n ",
        description: `
• Full coverage — from rooftop to foundation

• Designed to IEC and IS standards

• Protects people, equipment, and structures
        `,
        x: 350,
        y: 80,
        xmob: 315,
        ymob: 449,
        labelPos: "top",
      },

      {
        heading: "JEF SHIELD &\nE-BUILD",
        description: `
• Full risk assessment to IS/IEC 62305 — instantly

• Outputs design drawings and bill of materials

• Finds the most cost-effective protection option

• Step-by-step guided installation workflow
        `,
        x: -10,
        y: 320,
        xmob: 500,
        ymob: 660,
        labelPos: "top",
      },

      {
        heading: "SURGE PROTECTION\nDEVICES",
        description: `
• Protects panels, motors, and sensitive electronics

• Available for Type 1, 2, and 3 applications

• Compliant with IEC 61643 standard
        `,
        x: 200,
        y: 410,
        xmob: 130,
        ymob: 845,
        labelPos: "bottom",
      },

      {
        heading: "EARLY STREAMER\nEMISSION",
        description: `
• Up to 107m protection radius per unit

• Fewer rods, lower installation cost

• Certified to NFC 17-102 standard
        `,
        x: 305,
        y: 305,
        xmob: 265,
        ymob: 715,
        labelPos: "bottom",
      },

      {
        heading: "EARTHING &\nGROUNDING SOLUTIONS",
        description: `
• Reduces shock risk and equipment damage

• Works for industrial, commercial, and utility sites

• Low-resistance, long-lasting installations
        `,
        x: 430,
        y: 180,
        xmob: 425,
        ymob: 560,
        labelPos: "bottom",
      },
    ],
  },

  audit: {
    png: "/HomePageImg/WhatWeDoSection/E.png",

    dots: [
      {
        heading: "EARTHING\nSTUDIES",
        description: `
• Detects hidden faults in your earthing network

• Prevents equipment damage and shock risk

• Meets safety compliance standards
        `,
        x: 150,
        y: 40,
        xmob: 290,
        ymob: 450,
        labelPos: "top",
      },

      {
        heading: "LIGHTNING PROTECTION\nSYSTEM STUDIES",
        description: `
• Reviews rods, conductors, and bonding

• Checks surge protection on critical systems

• Validates against current IEC/IS standards
        `,
        x: 0,
        y: 320,
        xmob: 440,
        ymob: 590,
        labelPos: "top",
      },

      {
        heading: "INSTRUMENTATION\nEARTHING",
        description: `
• Eliminates noise and signal interference

• Protects sensitive control systems

• Ensures accurate, reliable readings
        `,
        x: 420,
        y: 140,
        xmob: 420,
        ymob: 720,
        labelPos: "top",
      },

      {
        heading: "POWER QUALITY & ROOT\nCAUSE ANALYSIS",
        description: `
• Identifies harmonics, dips, and surges

• Reduces unplanned downtime and failures

• Cuts energy waste and utility penalties
        `,
        x: 290,
        y: 245,
        xmob: 300,
        ymob: 880,
        labelPos: "bottom",
      },

      {
        heading: "POWER SYSTEM\nSTUDIES",
        description: `
• Spots overloaded circuits and wiring faults

• Checks fire suppression and alarm systems

• Keeps you legally compliant and insurable
        `,
        x: 290,
        y: 410,
        xmob: 130,
        ymob: 700,
        labelPos: "bottom",
      },
    ],
  },

  consulting: {
    png: "/HomePageImg/WhatWeDoSection/F.png",

    dots: [
      {
        heading: "POWER SYSTEM STUDIES\n- RENEWABLE",
        description: `
• Grid integration, load flow, and fault analysis

• Ensures stable, compliant grid connections

• Supports solar, wind, and hybrid projects
        `,
        x: 440,
        y: 245,
        xmob: 370,
        ymob: 560,
        labelPos: "top",
      },

      {
        heading: "POWER SYSTEM STUDIES\n- INDUSTRIAL",
        description: `
• Short circuit, arc flash, and protection studies

• Identifies weak points before they cause failures

• Supports plant upgrades, expansions, and audits
        `,
        x: 290,
        y: 310,
        xmob: 270,
        ymob: 720,
        labelPos: "bottom",
      },
    ],
  },
};

  const currentSection = sections[activeSection];
  const currentData = currentSection.dots[activeCard];

  const backgrounds = [
    "/HomePageImg/WhatWeDoSection/Solution-1.png",
    "/HomePageImg/WhatWeDoSection/Solution-2.png",
    "/HomePageImg/WhatWeDoSection/Solution-3.png",
    "/HomePageImg/WhatWeDoSection/Solution-4.png",
    "/HomePageImg/WhatWeDoSection/Solution-5.png",
  ];

  const background =
    backgrounds[activeCard % backgrounds.length];

  return (
    <section
      ref={sectionRef}
      className="
        relative
        w-full

        h-[1200px]
        md:h-[1350px]
        lg:h-[1050px]

        overflow-hidden
        bg-black
      "
    >
      {/* BG */}
      <img
        src={background}
        alt=""
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1800ms] ease-in-out ${
          showContent
            ? "opacity-100 scale-100"
            : "opacity-0 scale-105"
        }`}
      />

      {/* VIDEO */}
      <video
        ref={videoRef}
        muted
        playsInline
        onEnded={() => setShowContent(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
          showContent ? "opacity-0" : "opacity-100"
        }`}
      >
        <source
          src="/HomePageImg/Earthzoom.mp4"
          type="video/mp4"
        />
      </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/35 z-10" />

      {/* MAIN */}
    {/* MAIN */}
<div className="absolute inset-0 z-20 flex items-center justify-center w-full overflow-hidden">
  <div
    className="
      section-container
      w-full
      h-full
      px-6
      sm:px-8
      lg:px-12
      xl:px-16
      flex
      flex-col
      lg:flex-row
      items-center
      justify-between
      gap-12
      lg:gap-12
      xl:gap-16
      pt-20
      lg:pt-0
      overflow-hidden
    "
  >

          {/* LEFT */}
         {/* LEFT */}
<div className="w-full lg:flex-1 min-w-0 h-full flex flex-col justify-start lg:mt-40">
       <div
  className="
    w-full
    max-w-[260px]
    flex
    flex-col
    items-start
    text-left
    z-[60]
  "
>
            <div className="mb-8 lg:mb-12 ">
              <h2
                className="
                  font-montserrat
                  font-lg
                  text-[24px]
                  sm:text-[28px]
                  xl:text-[30px]
                  tracking-[4px]
                  uppercase
                  text-white
                  whitespace-nowrap
                "
              >
                WHAT WE DO
              </h2>
            </div>

            <div className="w-full">
              {[
                {
                  id: "products",
                  title: "OUR PRODUCT",
                },
                {
                  id: "audit",
                  title: "AUDIT SERVICES",
                },
                {
                  id: "consulting",
                  title: "CONSULTING SERVICES",
                },
              ].map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setActiveCard(0);
                  }}
                  className="group py-4 sm:py-5 cursor-pointer"
                >
                  <div className="relative h-[1px] bg-white/20 overflow-hidden mb-3">
                    <span
                      className={`absolute left-0 top-0 h-full bg-[#C61F26] transition-all duration-500 ${
                        activeSection === item.id
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    />
                  </div>

                  <div
                    className={`text-[13px] sm:text-[15px] whitespace-nowrap tracking-[1.5px] uppercase transition-all duration-300 flex items-center justify-between ${
                      activeSection === item.id
                        ? "text-[#C61F26]"
                        : "text-white"
                    }`}
                  >
                    {item.title}

                    {activeSection === item.id && (
                      <span className="text-[#C61F26] text-[12px]">
                        →
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
         </div>

          {/* CENTER GRAPH */}
         {/* CENTER GRAPH */}
<div
  className={`
    relative
    w-full
    max-w-[450px]
    h-[550px]
    flex-shrink
    min-w-0
    scale-[0.55]
    sm:scale-[0.7]
    md:scale-[0.85]
    lg:scale-100
    transition-opacity
    duration-1000
    ${showContent ? "opacity-100" : "opacity-0"}
  `}
>

            {!isMobile && (
              <img
                key={activeSection}
                src={currentSection.png}
                alt=""
                className={`
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-contain
                  opacity-90
                  pointer-events-none
                  z-[10]
                  select-none

                  transition-all
                  duration-700
                  ease-[cubic-bezier(0.22,1,0.36,1)]

                  animate-[fadeScale_0.7s_ease]

                  ${
                    activeSection === "audit"
                      ? "rotate-[-12deg]"
                      : ""
                  }
                `}
              />
            )}

            {currentSection.dots.map((dot, index) => {
              const isActive = activeCard === index;

              return (
                <div
                  key={`${activeSection}-${index}`}
                  className="
                    absolute
                    z-[30]
                    group
                    cursor-pointer

                    animate-[fadeScale_0.7s_ease]
                  "
                  style={{
                    top: isMobile
                      ? `${(dot.ymob / 550) * 100}%`
                      : `${(dot.y / 550) * 100}%`,
                    left: isMobile
                      ? `${(dot.xmob / 450) * 100}%`
                      : `${(dot.x / 450) * 100}%`,
                  }}
                  onMouseEnter={() => setActiveCard(index)}
                  onClick={() => setActiveCard(index)}
                >
                  <div className="relative flex items-center justify-center">
                    {/* LABEL */}
                    <div
                      className={`
                        absolute
                        whitespace-pre
                        text-center
                        text-[10px]
                        sm:text-[11px]
                        md:text-[12px]
                        lg:text-[13px]
                        font-medium
                        tracking-wider
                        uppercase
                        text-white
                        transition-all
                        duration-500
                        pointer-events-none
                        ${
                          dot.labelPos === "top"
                            ? "bottom-full mb-4 left-1/2 -translate-x-1/2"
                            : dot.labelPos === "bottom"
                            ? "top-full mt-4 left-1/2 -translate-x-1/2"
                            : dot.labelPos === "left"
                            ? "right-full mr-4 top-1/2 -translate-y-1/2"
                            : "left-full ml-4 top-1/2 -translate-y-1/2"
                        }
                        ${
                          isActive
                            ? "opacity-100 scale-100"
                            : "opacity-60 scale-95 group-hover:opacity-100 group-hover:scale-100"
                        }
                      `}
                    >
                      {dot.heading}
                    </div>

                    <button className="relative flex items-center justify-center">
                      {/* ping ring for inactive */}
                      {!isActive && (
                        <span
                          className="
                            absolute
                            w-8
                            h-8
                            md:w-10
                            md:h-10
                            rounded-full
                            bg-[#C61F26]/30
                            animate-ping
                          "
                        />
                      )}

                      {/* outer ring */}
                      <span
                        className={`
                          absolute
                          rounded-full
                          border
                          w-8
                          h-8
                          md:w-10
                          md:h-10
                          transition-all
                          duration-500
                          ${
                            isActive
                              ? "border-white scale-110"
                              : "border-white/40"
                          }
                        `}
                      />

                      {/* center dot */}
                      <span
                        className={`
                          rounded-full
                          w-4
                          h-4
                          md:w-5
                          md:h-5
                          transition-all
                          duration-500
                          ${
                            isActive
                              ? "bg-white scale-110"
                              : "bg-[#C61F26] animate-pulse"
                          }
                        `}
                      />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT */}
         {/* RIGHT */}
<div
  className={`
    w-full
    lg:flex-1
    min-w-0
    max-w-full
    lg:max-w-[480px]
    transition-opacity
    duration-1000
    ${showContent ? "opacity-100" : "opacity-0"}
    z-[60]
  `}
>
            <div className="w-full h-[2px] bg-[#C61F26] mb-6" />

            <div
              key={activeCard + activeSection}
              className="
                animate-[fadeUp_0.7s_ease]
                transition-all
                duration-700
              "
            >
              <h3
                className="
                  text-white
                  uppercase

                  tracking-[2px]
                  lg:tracking-[3px]

                  text-[22px]
                  lg:text-[28px]

                  font-light
                  leading-[1.4]

                  mb-6
                  lg:mb-8
                "
              >
                {currentData.heading}
              </h3>

              <div
                className="
                  text-white/90

                  text-[15px]
                  sm:text-[17px]
                  lg:text-[18px]

                  leading-[1.2]
                  lg:leading-[1.2]

                  whitespace-pre-line
                  font-light
                "
              >
                {currentData.description}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
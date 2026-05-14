"use client";

import { useState, useEffect, useRef } from "react";

export default function AboutUsServicesSection() {
  const [activeCard, setActiveCard] = useState(0);
  const [panelOpen, setPanelOpen] = useState(false);

  const [background, setBackground] = useState(
    "/HomePageImg/WhatWeDoSection/Solution-1.png"
  );

  const sectionRef = useRef(null);

  const [showContent, setShowContent] = useState(true);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const services = [
    {
      id: 0,
      title: "CONSULTING SERVICES",
      heading: "CONSULTING SERVICES",
      description:
        "Power System Studies using ETAP, PSCAD/EMTDC, PSS/E, DIgSILENT, SKM, and DSA Tools; and EMI/EMC Studies including AC interference analysis for pipelines.",

      background: "./HomePageImg/WhatWeDoSection/Solution-1.png",

       x: 140,
  y:500,
  xmob: 110,
ymob: 845,

      labelLeft: "-100px",
      labelTop: "-35px",
      labelWidth: "120px",

      mobileLabelLeft: "-55px",
      mobileLabelTop: "-22px",
      mobileLabelWidth: "90px",
    },

    {
      id: 1,
      title: "AUDIT SERVICES",
      heading: "AUDIT SERVICES",
      description:
        "Electrical and Fire Safety Audit powered by JEF Safety Audit Tool (the world's first automated safety audit tool developed and patented by JEF), Earthing Health Assessment of live installations and Instrumentation Earthing Audit for I&C systems in process plants and generating stations.",

      background: "./HomePageImg/WhatWeDoSection/Solution-2.png",

      x: 250,
      y: 390,

      xmob: 250,
      ymob: 715,

      labelLeft: "0px",
      labelTop: "60px",
      labelWidth: "150px",

      mobileLabelLeft: "20px",
      mobileLabelTop: "20px",
      mobileLabelWidth: "130px",
    },

    {
      id: 2,
      title: "PRODUCTS",
      heading: "PRODUCTS",
      description:
        "Type-tested lightning protection components and systems (to IEC 62305:2024), with CLPS components tested to 200 kA on the 10/350 µs waveform — double the IEC standard requirement, earthing and grounding system solutions, surge protective devices, and lightning risk assessment tools including the automated JEF Shield platform.",

      background: "./HomePageImg/WhatWeDoSection/Solution-5.png",

      x: 375,
      y: 275,

      xmob: 410,
      ymob: 560,

      labelLeft: "-20px",
      labelTop: "30px",
      labelWidth: "120px",

      mobileLabelLeft: "0px",
      mobileLabelTop: "25px",
      mobileLabelWidth: "90px",
    },
  ];

  const handleCardClick = (service) => {
    setActiveCard(service.id);
    setPanelOpen(true);
    setBackground(service.background);
  };

  useEffect(() => {
    if (panelOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [panelOpen]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[1150px] md:min-h-[700px] lg:min-h-[850px] overflow-hidden bg-black"
    >
      {/* Background Image */}
      <img
        src={background}
        alt="About Us Services Background"
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1800ms] ease-in-out ${
          showContent ? "opacity-100 scale-100" : "opacity-0 scale-105"
        } z-0`}
      />

      {/* HEADING */}
      <div className="absolute top-[35px] left-[20px] sm:left-[40px] lg:top-[70px] lg:left-[70px] z-[30]">
        <h2 className="font-montserrat font-bold text-[24px] sm:text-[30px] lg:text-[36px] leading-none tracking-[3px] lg:tracking-[4px] uppercase text-white">
          WHAT WE DO
        </h2>
      </div>

      {/* MAIN CONTENT WRAPPER */}
      <div
        className={`
          absolute inset-0
          z-10
          transition-opacity duration-1000
          ${showContent ? "opacity-100" : "opacity-0"}
        `}
      >
        {/* DARK OVERLAY */}
        <div
          className={`
            absolute inset-0
            z-[20]
            transition-all duration-700
            bg-black/40
          `}
        />

        {/* J WRAPPER */}
        <div
          className="
            absolute
            inset-0
            z-[50]

            left-1/2
            lg:-translate-x-[70%]
            -translate-x-[50%]

            scale-[0.62]
            sm:scale-[0.72]
            md:scale-100

            origin-top-left
            md:origin-center
            lg:mt-10
          "
        >
          {/* J PNG */}
          <img
            src="/HomePageImg/J.png"
            alt="J Path"
            className="
              absolute
              rotate-[46deg]
              top-[400px]
              left-[30px]
              md:top-[145px]
              md:left-[70px]

              md:w-[100px]
              lg:w-[200px]

              opacity-90
              pointer-events-none
              z-[45]
            "
          />

          {/* INTERACTIVE DOTS */}
          {services.map((service) => {
            const isActive = activeCard === service.id;

            return (
              <div
                key={service.id}
                className="absolute z-[60] group"
                style={{
                  top: isMobile
                    ? `${service.ymob}px`
                    : `${service.y}px`,

                  left: isMobile
                    ? `${service.xmob}px`
                    : `${service.x}px`,
                }}
                onMouseEnter={() => handleCardClick(service)}
                onClick={() => handleCardClick(service)}
              >
                {/* LABEL */}
                <div
                  className={`
                    absolute
                    text-[8px] md:text-[11px]
                    tracking-[1px] md:tracking-[2px]
                    uppercase
                    font-medium
                    leading-[1.35]
                    break-words
                    whitespace-normal
                    transition-all
                    duration-500
                    flex
                    items-end
                    text-center
                    ${
                      isActive
                        ? "text-white"
                        : "text-white/70 group-hover:text-white"
                    }
                  `}
                  style={{
                    left: isMobile
                      ? service.mobileLabelLeft
                      : service.labelLeft,

                    top: isMobile
                      ? service.mobileLabelTop
                      : service.labelTop,

                    width: isMobile
                      ? service.mobileLabelWidth
                      : service.labelWidth,
                  }}
                >
                  {service.title}
                </div>

                {/* DOT BUTTON */}
                <button className="relative flex items-center justify-center">
                  {/* OUTER RING */}
                  <span
                    className={`
                      absolute
                      w-[24px]
                      h-[24px]
                      md:w-[34px]
                      md:h-[34px]
                      rounded-full
                      border
                      transition-all
                      duration-500
                      ${
                        isActive
                          ? "border-white scale-110 opacity-100"
                          : "border-white/40 opacity-70 group-hover:border-white group-hover:scale-110"
                      }
                    `}
                  />

                  {/* INNER DOT */}
                  <span
                    className={`
                      w-[12px]
                      h-[12px]
                      md:w-[18px]
                      md:h-[18px]
                      rounded-full
                      transition-all
                      duration-500
                      ${
                        isActive
                          ? "bg-white scale-110"
                          : "bg-[#C61F26] group-hover:bg-white"
                      }
                    `}
                  />
                </button>
              </div>
            );
          })}
        </div>

        {/* RIGHT CONTENT PANEL */}
        <div
          className="
            absolute
            z-[60]
            lg:mt-10

            left-0
            right-0

            px-5

            top-[760px]

            md:left-auto
            md:right-[90px]
            md:top-[190px]

            md:max-w-[500px]
            max-w-full
          "
        >
          {/* RED LINE */}
          <div className="w-full h-[2px] bg-[#C61F26] mb-6 md:mb-8 opacity-90" />

          {/* ANIMATED CONTENT */}
          <div
            key={activeCard}
            className="animate-[fadeUp_0.7s_ease]"
          >
            <h3 className="text-white uppercase tracking-[2px] md:tracking-[4px] text-[20px] sm:text-[24px] lg:text-[28px] font-light leading-[1.3] mb-5 md:mb-8">
              {services[activeCard].heading}
            </h3>

            <p className="text-white/90 text-[15px] sm:text-[17px] lg:text-[20px] leading-[1.8] font-light">
              {services[activeCard].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
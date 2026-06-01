"use client";

import { useState, useEffect } from "react";

export default function AboutUsServicesSection() {
  const [activeCard, setActiveCard] = useState(0);

  const [background, setBackground] = useState(
    "/HomePageImg/WhatWeDoSection/Solution-1.png"
  );

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
      background: "/HomePageImg/WhatWeDoSection/Solution-1.png",
      x: 270,
      y: 450,
      xmob: 110,
      ymob: 200,
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
        "Electrical and Fire Safety Audit powered by JEF Safety Audit Tool, Earthing Health Assessment of live installations and Instrumentation Earthing Audit for I&C systems.",
      background: "/HomePageImg/WhatWeDoSection/Solution-2.png",
      x: 380,
      y: 350,
      xmob: 250,
      ymob: 250,
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
        "Type-tested lightning protection components and systems, earthing and grounding system solutions, surge protective devices, and lightning risk assessment tools.",
      background: "/HomePageImg/WhatWeDoSection/Solution-5.png",
      x: 500,
      y: 230,
      xmob: 410,
      ymob: 300,
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
    setBackground(service.background);
  };

  return (
    <section className="relative w-full min-h-[1200px] lg:min-h-[1000px] overflow-hidden bg-black">
      {/* Background */}
      <img
        src={background}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover transition-all duration-1000"
      />

      <div className="absolute inset-0 bg-black/40 z-10" />
      {/* Main layout */}
      <div
        className="
          section-container
          relative z-30
          flex flex-col
          lg:flex-row
          items-center
          lg:items-start
          justify-between
          h-full
          pt-12 lg:pt-20
          gap-14 lg:gap-8
        "
      >
        {/* LEFT HEADING */}
        <div className="w-full lg:w-[20%]">
          <h2
            className="
            lg:mt-10
              text-white
              font-lg
              uppercase
              tracking-[4px]
              text-[24px]
              md:text-[32px]
              lg:text-[30px]
              whitespace-nowrap
              
            "
          >
            WHAT WE DO
          </h2>
        </div>

        {/* CENTER J + dots */}
        <div
          className="
            relative
            w-[600px]
            h-[650px]
            shrink-0
            flex
            items-center
            justify-center
            scale-[0.55]
            sm:scale-[0.75]
            md:scale-[0.85]
            lg:scale-100
            transition-all
            duration-500
          "
        >
          <img
            src="/HomePageImg/J.png"
            alt="J"
            className="
              absolute
              hidden
              md:block
              w-[420px]
              opacity-90
            "
          />

          {services.map((service) => {
            const isActive = activeCard === service.id;

            return (
              <div
                key={service.id}
                className="absolute z-20 group cursor-pointer "
                style={{
                  top: isMobile ? `${service.ymob}px` : `${service.y}px`,
                  left: isMobile ? `${service.xmob}px` : `${service.x}px`,
                }}
                onMouseEnter={() => handleCardClick(service)}
                onClick={() => handleCardClick(service)}
              >
                <div
                  className={`absolute text-[10px] md:text-[11px] uppercase tracking-[2px] transition-all duration-300 ${
                    isActive ? "text-white" : "text-white/70"
                  }`}
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
        bg-[#C02429]/30
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
          : "bg-[#C02429] animate-pulse"
      }
    `}
  />
</button>
              </div>
            );
          })}
        </div>

        {/* RIGHT CONTENT */}
        <div
          className="
            w-full
            lg:w-[35%]
            max-w-[520px]
            lg:mt-40
          "
        >
          <div className="w-full h-[2px] bg-[#C02429] mb-8" />

          <h3
            className="
              text-white
              uppercase
              tracking-[4px]
              text-[22px]
              md:text-[26px]
              lg:text-[30px]
              mb-6
            "
          >
            {services[activeCard].heading}
          </h3>

          <p
            className="
              text-white/90
              leading-[1.8]
              text-[15px]
              md:text-[18px]
              lg:text-[20px]
            "
          >
            {services[activeCard].description}
          </p>
        </div>
      </div>
    </section>
  );
}

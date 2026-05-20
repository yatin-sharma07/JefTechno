"use client"

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function WhatWeDoSection() {
  const [activeCard, setActiveCard] = useState(0);
  const [panelOpen, setPanelOpen] = useState(false);
  const [background, setBackground] = useState("./HomePageImg/WhatWeDoSection/Solution-1.png");
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  const [showContent, setShowContent] = useState(false);
  const [videoStarted, setVideoStarted] = useState(false);

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
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [videoStarted]);

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
      title: "EARTHING STUDIES",
      heading: "GROUNDING EARTHING STUDIES",
      description:
        "Earthing is an essential part of any electrical installation, essentialfor the safety from electrical shock, and fire and for operation of most oftheprotective systems of the electrical installation.",
      top: "180px",
      left: "140px",
      width: "280px",
      background: "./HomePageImg/WhatWeDoSection/Solution-1.png",
       x: 290,
  y: 180,
  xmob: 315,
ymob:449,

  labelLeft: "-100px",
  labelTop: "-35px",
  labelWidth: "100px",

  mobileLabelLeft: "-50px",
  mobileLabelTop: "-22px",
  mobileLabelWidth: "50px",

    },

    {
      id: 1,
      title: "LIGHTNING PROTECTION SYSTEM STUDIES",
      heading: "LIGHTNING PROTECTION SYSTEM STUDIES",
      description:
        "The purpose of Lightning Protection Systemaudit is to conduct lightning risk assessment and determine the level of protectionrequired to the structure/facility as per the latest relevant standards. LPS Adequacyaudit helps to manage and mitigate the risk due to lightning and protect the life andassets.",
      top: "290px",
      left: "420px",
      width: "280px",
      background: "./HomePageImg/WhatWeDoSection/Solution-4.png",
       x: 25,
  y: 355,
  xmob: -15,
ymob: 660,
 labelLeft: "-70px",
  labelTop: "-50px",
  labelWidth: "170px",

  mobileLabelLeft: "15px",
  mobileLabelTop: "-22px",
  mobileLabelWidth: "150px",
    },

    {
      id: 2,
      title: "POWER SYSTEM STUDIES",
      heading: "POWER SYSTEM STUDIES",
      description:
        "A Power System Study involves analyzing various aspectsof an electrical power system to identify potential issues and optimize performance. These studies include load flow analysis, short circuit studies, relay coordination, arcflash analysis, and more, all aimed at enhancing system reliability and safety.",
      top: "410px",
      left: "190px",
      width: "300px",
      background: "./HomePageImg/WhatWeDoSection/Solution-3.png",
       x: 140,
  y:500,
  xmob: 130,
ymob: 845,
 labelLeft: "10px",
  labelTop: "50px",
  labelWidth: "150px",

  mobileLabelLeft: "15px",
  mobileLabelTop: "20px",
  mobileLabelWidth: "100px",
    },

    {
      id: 3,
      title: "POWER QUALITY & ROOT CAUSE ANALYSIS",
      heading: "POWER QUALITY & ROOT CAUSE ANALYSIS",
      description:
        "A Power Quality Study involves acomprehensive analysis of your electrical system to identify disturbances anddeviations in voltage, current, and frequency. These studies are essential forensuring that your power supply is stable and free from issues that can lead toequipment malfunction or inefficiencies.",
      top: "490px",
      left: "550px",
      width: "300px",
      background: "./HomePageImg/WhatWeDoSection/Solution-2.png",
        x:250,
  y: 390,
  xmob: 265,
ymob: 715,
 labelLeft: "-00px",
  labelTop: "60px",
  labelWidth: "170px",

  mobileLabelLeft:" 20px",
  mobileLabelTop: "20px",
  mobileLabelWidth: "150px",

    },

    {
      id: 4,
      title: "INSTRUMENTATION EARTHING",
      heading: "INSTRUMENTATION EARTHING",
      description:
        "An Instrumentation Earthing Study involves evaluatingthe earthing system of instrumentation and control systems to ensure propergrounding. This study helps prevent electrical noise, surges, and other issues thatcan affect the accuracy and reliability of instrumentation.",
      top: "580px",
      left: "310px",
      width: "300px",
      background: "./HomePageImg/WhatWeDoSection/Solution-5.png",
        x: 375,
  y: 275,
    xmob: 425,
ymob: 560,
   labelLeft: "-20px",
  labelTop: "30px",
  labelWidth: "170px",

  mobileLabelLeft: "-0px",
  mobileLabelTop: "25px",
  mobileLabelWidth: "100px",

    },
  ];

  const handleCardClick = (service) => {
    setActiveCard(service.id);
    setPanelOpen(true);
    setBackground(service.background);
  };

  const handlePrev = () => {
    const prevIndex = (activeCard - 1 + services.length) % services.length;
    setActiveCard(prevIndex);
  };

 

  // Lock body scroll when panel is open
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
    alt="What We Do Background"
    className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1800ms] ease-in-out ${
      showContent ? "opacity-100 scale-100" : "opacity-0 scale-105"
    } z-0`}
  />

  {/* VIDEO */}
  <video
    ref={videoRef}
    muted
    playsInline
    onEnded={() => setShowContent(true)}
    className={`absolute inset-0 w-full h-full object-cover z-0 transition-all duration-1000 ${
      showContent ? "opacity-0" : "opacity-100"
    }`}
  >
    <source src="/HomePageImg/Earthzoom.mp4" type="video/mp4" />
  </video>
   {/* HEADING */}
  <div className="absolute top-[35px] left-[20px] sm:left-[40px] lg:top-[70px] lg:left-[70px] z-[30]">
  <h2 className="font-montserrat font-bold text-[24px] sm:text-[30px] lg:text-[36px] leading-none tracking-[3px] lg:tracking-[4px] uppercase text-white">
    WHAT WE DO
  </h2>
  <div className="w-full max-w-sm  text-white p-3">
  {["ABOUT US", "OUR REGION", "OUR NATURE"].map((item, index) => (
    <div key={index} className="group py-4 cursor-pointer">
      
      {/* Line */}
      <div className="relative h-[1px] bg-gray-500 overflow-hidden">
        <span className="absolute left-0 top-0 h-full w-0 bg-white transition-all duration-500 group-hover:w-full"></span>
      </div>

      {/* Text */}
      <h2 className="mt-6 text-lg md:text-lg font-semibold tracking-[3px] transition-colors duration-300 group-hover:text-[#C02427]">
        {item}
      </h2>
    </div>
  ))}
</div>
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
        ${
          panelOpen
            ? "bg-black/40"
            : "bg-black/40"
        }
      `}
    />

    {/* J WRAPPER */}
    <div
      className="
        absolute
        inset-0
        z-[50] 

        left-1/2
       lg:-translate-x-[50%]
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
    hidden
    md:block
          top-[400px]
          left-[30px]
          md:top-[145px]
          md:left-[70px]

          w-100px]
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
  top: isMobile ? `${service.ymob}px` : `${service.y}px`,
  left: isMobile ? `${service.xmob}px` : `${service.x}px`,
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
        z-[60] lg:mt-10

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
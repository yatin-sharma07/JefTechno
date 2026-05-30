"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const pages = [
  {
    label: "CONVENTIONAL EARTHING ASSESSMENT",
    nav: "CONVENTIONAL\n EARTHING\n ASSESSMENT",
    title: "THE LIGHTNING THREAT AND WHY PROTECTION IS REQUIRED",
    content: (
      <>
        <p>Lightning causes two distinct categories of damage.</p>
        <br />
        <p>
          The first is Direct physical damage. It occurs when strike current —
          ranging from a few kiloamperes to several hundred kiloamperes —
          travels through the building fabric, fuel or gas services, or nearby
          people, resulting in fire, structural damage, explosion, or loss of life.
        </p>
        <br />
        <p>
          The second is Indirect damage. It affects electrical and electronic systems.
          Even without direct contact, electromagnetic fields associated with the
          lightning channel induce transient overvoltages onto cables and conductors,
          destroying components, corrupting data, and causing hidden failures.
        </p>
        br

        <p>
          Modern facilities depend on electronic controls, communications, and data
          networks. Lightning damage extends beyond repair costs to production downtime,
          data loss, safety system unavailability, and regulatory exposure.
        </p>
        br
        
        <p>
          A comprehensive lightning protection system addresses both: the external
          system intercepts direct strikes; the internal system manages overvoltages
          before they reach sensitive equipment.
        </p>
      </>
    ),
    subsections: null,
  },
  {
    label: "IEC 62305:2024 STANDARD FRAMEWORK",
    nav: "IEC 62305:2024\nSTANDARD\nFRAMEWORK",
    title: "THE IEC 62305:2024 STANDARD FRAMEWORK",
    content: (
      <>
        <p>
          IEC 62305 is the internationally adopted standard series for
          protection against lightning. Published in four parts, it covers the
          complete scope of lightning protection — from the initial risk
          assessment that determines whether protection is required, through
          the physical design of the external system, to the protection of
          internal electrical and electronic installations.
        </p>
      </>
    ),
    subsections: [
      {
        heading: "",
        tags: [
          "IEC 62305-1:2024 — General Principles",
          "IEC 62305-2:2024 — Risk Management",
          "IEC 62305-3:2024 — Physical Damage",
          "IEC 62305-4:2024 — Electrical & Electronic",
        ],
        isListOnly: true,
        layout: "row",
      },
      {
        heading: "LIGHTNING PROTECTION LEVELS",
        body: "IEC 62305 defines four Lightning Protection Levels — LPL I through LPL IV. Each level corresponds to a defined set of design parameters, including the lightning current values used for component selection and the geometric parameters used for air termination design. The appropriate LPL for a given structure is determined through the risk assessment process under IEC 62305-2.",
        tags: ["LPL I", "LPL II", "LPL III", "LPL IV"],
        isListOnly: true,
        layout: "row",
      },
    ],
  },
  {
    label: "COMPREHENSIVE LIGHTNING PROTECTION SYSTEM",
    nav: "COMPREHENSIVE\nLIGHTNING\nPROTECTION SYSTEM",
    title: "THE COMPREHENSIVE LIGHTNING PROTECTION SYSTEM",
    content: (
      <>
        <p>
          IEC 62305:2024 defines lightning protection as two interdependent
          systems — neither is sufficient alone.
        </p>
        <p>
          The external system manages the direct strike. It intercepts lightning
          at the air termination, routes current through the down conductors and
          disperses energy to ground via the earth termination — protecting the
          structure from physical damage, fire, and dangerous touch and step
          voltages.
        </p>
        <p>
          The internal system manages the electrical consequences within the
          building. It uses Equipotential bonding to eliminate dangerous
          potential differences between LPS conductors and metallic services and
          structural elements inside the building. Surge Protective Devices
          installed on all electrical and electronic lines limit transient
          overvoltages — from strikes or internal switching — to levels
          equipment can safely withstand.
        </p>
        <p>
          IEC 62305-3 requires periodic inspection and maintenance of both
          systems, in intervals set by the Lightning Protection Level and site
          conditions.
        </p>
      </>
    ),
    subsections: [
      {
        heading: "EXTERNAL LIGHTNING PROTECTION",
        tags: [
          "Air Termination System",
          "Down Conductor System",
          "Earth Termination System",
          "Equipotential Bonding",
          "Air Termination Positioning Methods",
          "Permitted Air Termination Types",
        ],
        isListOnly: false,
        layout: "col",
        tagDescriptions: [
          null,
          null,
          null,
          null,
          {
            title: "Air Termination Positioning Methods (IEC 62305-3:2024)",
            description:
              "Three positioning methods are recognised under IEC 62305-3. The 2024 revision provides more detailed guidance on their application to complex and modern structures:\n\nMethod\n• Rolling Sphere Method\n• Mesh Method\n• Protective Angle Method",
          },
          {
            title: "Permitted Air Termination Types",
            description:
              "An air termination system may use any combination of the following:\n\n• Vertical rods and masts - rod terminations at high points, including free-standing masts where elevated protection is needed\n• Horizontal conductors - tape or round conductors routed along roof edges, ridges, and exposed perimeter positions\n• Mesh conductors - conductor grids laid across flat or low-pitch roof surfaces\n• Catenary wires - conductors suspended between elevated points to protect the spaces beneath\n• Natural components - metallic elements permanently part of the structure, such as metal roof decking, reinforced concrete reinforcement, and metallic facades, where they meet the dimensional and electrical continuity requirements of IEC 62305-3:2024",
          },
        ],
      },
    ],
  },
{
  label: "JEF CLPS PRODUCTS",
  nav: "JEF CLPS\nPRODUCTS",
  title: "JEF CLPS PRODUCTS — TYPE-TESTED TO 200 KA / 10/350 μs",
  content: (
    <>
      <p>
        The CLPS range covers every component required for a comprehensive
        lightning protection system, from air termination to point-of-use
        surge protection. All components are type-tested to the IEC 62561
        series — the product testing companion to IEC 62305. The IEC 62561
        series defines the specific tests that LPS components must pass
        before they can be specified in a standards-compliant system.
      </p>
    </>
  ),
  subsections: [
    {
      heading: "TYPE TESTING — JEF'S 200 KA CREDENTIAL",
      body:
        "The IEC 62561 series specifies that external LPS components be type-tested to a 10/350 μs lightning impulse current. JEF type-tests its CLPS components at 200 kA on the 10/350 μs waveform — double the limit specified in the IEC standard series. This means that every JEF CLPS component has been verified to withstand twice the current magnitude that the standard requires, providing a margin of confidence that standard-minimum testing does not.\n\nType testing covers three sequential stages:",
      tags: ["Ageing Test", "Lightning Impulse Test", "Mechanical Test"],
      isListOnly: false,
      layout: "col",
      tagDescriptions: [
        {
          title: "Ageing Test",
          description:
            "The component is subjected to a defined sequence of environmental exposure — humidity, salt mist, Sulphur, Electrical impulse test and Mechanical test — to simulate long-term installation conditions. Electrical and Mechanical properties are assessed after ageing to verify that performance is not degraded over service life.",
        },
        {
          title: "Lightning Impulse Test — 10/350 μs waveform at 200 kA",
          description:
            "The component is subjected to a current waveform with parameters representing a direct lightning current. JEF tests at 200 kA — double the IEC standard limit — verifying that the component survives the thermal, mechanical, and electrical stress of the test without failure, permanent deformation, or physical damage.",
        },
        {
          title: "Mechanical Test",
          description:
            "The component is subjected to the mechanical forces it will experience during installation and in service — including pull-out test. Component integrity is verified under these conditions.",
        },
      ],
      footer:
        "Type-test documentation is available for review. Certificates can be requested from JEF's engineering team.",
    },
  ],
}
];

const PROGRESS_DURATION = 6000;
const PROGRESS_INTERVAL = 50;

const DetailedContent = () => {
  const [activePage, setActivePage] = useState(0);
  const [activeTags, setActiveTags] = useState({}); // format: { [si]: ti }
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isManualPaused, setIsManualPaused] = useState(false);
  const [restartKey, setRestartKey] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isPaused || isManualPaused) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + (PROGRESS_INTERVAL / PROGRESS_DURATION) * 100;
      });
    }, PROGRESS_INTERVAL);

    return () => clearInterval(interval);
  }, [activePage, isPaused, isManualPaused, restartKey]);

  // Effect to handle page transition when progress reaches 100
  useEffect(() => {
    if (progress >= 100) {
      const next = (activePage + 1) % pages.length;
      setActivePage(next);
      setActiveTags({});
      setProgress(0);
    }
  }, [progress, activePage]);

  const handleTabClick = (index) => {
    if (index === activePage) {
      if (isManualPaused) {
        setIsManualPaused(false);
        setIsPaused(false);
      } else {
        setIsManualPaused(true);
      }
    } else {
      setIsManualPaused(false);
      setIsPaused(false);
      setActivePage(index);
      setActiveTags({});
      setProgress(0);
      setRestartKey((prev) => prev + 1);
    }
  };

  const page = pages[activePage];

  return (
    <section 
      className="bg-[#161414] font-montserrat py-10 md:pt-16 md:pb-12 overflow-hidden min-h-[1000px] flex flex-col"
    >
      <div 
        onMouseEnter={() => !isManualPaused && setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="section-container flex flex-col flex-1 gap-6 md:gap-8"
      >
        {/* Heading */}
        <motion.h2
          key={`title-${activePage}`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#C02429] text-[20px] md:text-[26px] font-bold tracking-[1px] md:tracking-[1.49px] leading-[1.4] md:line-height-[60px] uppercase"
        >
          {page.title}
        </motion.h2>

        {/* Content Area */}
        <div className="w-full relative z-20 flex-1">
          {/* TOP SECTION: Page Intro */}
          <div className="min-h-0">
            <motion.div
              key={`page-intro-${activePage}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col"
            >
              {React.Children.map(page.content.props.children, (child, i) => {
                if (child.type === "p") {
                  return (
                    <p key={i} className="text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[1.5] text-white text-justify">
                      {child.props.children}
                    </p>
                  );
                }
                return child;
              })}
            </motion.div>
          </div>

          {/* SUBSECTIONS LOOP */}
          {page.subsections && page.subsections.map((sub, si) => (
            <div key={si} className="mt-4 md:mt-5">
              {sub.heading && (
                <h3 className="text-[#C02429] text-[18px] md:text-[20px] font-bold tracking-[1px] leading-[1.4] uppercase mb-4">
                  {sub.heading}
                </h3>
              )}

              {/* Swappable Area: Body OR Tag Description */}
              <div className="min-h-[5[px]50px]">
                <AnimatePresence mode="wait">
                  {activeTags[si] !== undefined && sub.tagDescriptions?.[activeTags[si]] ? (
                    <motion.div
                      key={`tag-desc-${si}-${activeTags[si]}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                      className="flex flex-col gap-4 mb-4"
                    >
                      <h4 className="text-white text-[16px] md:text-[18px] lg:text-[20px] font-bold uppercase">
                        {sub.tagDescriptions[activeTags[si]].title}
                      </h4>
                      <p className="text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[1.5] text-white whitespace-pre-line">
                        {sub.tagDescriptions[activeTags[si]].description}
                      </p>
                      <button
                        onClick={() => setActiveTags({})}
                        className="text-[#C02429] text-[14px] uppercase font-bold hover:underline w-fit"
                      >
                        ← Back to overview
                      </button>
                    </motion.div>
                  ) : (
                    sub.body && (
                      <motion.div
                        key={`sub-body-${si}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                        className="mb-4"
                      >
                        {sub.body.split("\n\n").map((para, pi) => (
                          <p key={pi} className="text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[1.5] text-white/80 text-justify">
                            {para}
                          </p>
                        ))}
                      </motion.div>
                    )
                  )}
                </AnimatePresence>
              </div>

              {/* Tags Area */}
              {sub.tags && (
                <>
                  {/* Conditional rendering for Comprehensive Lightning Protection System page (activePage === 2) */}
                  {activePage === 2 && sub.heading === "EXTERNAL LIGHTNING PROTECTION" ? (
                    <>
                      {/* First 4 tags in a row */}
                      <div className="flex flex-wrap gap-x-8 gap-y-4 mb-4 flex-row items-center">
                        {sub.tags.slice(0, 4).map((tag, ti) => (
                          <div key={ti} className="flex items-center gap-3 text-white/90">
                            <span className="text-white mt-1 shrink-0">•</span>
                            <span className="text-[16px] md:text-[18px] lg:text-[20px] font-medium leading-relaxed">
                              {tag}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Last 2 tags in a column (interactive) */}
                      <div className="flex flex-col gap-y-4 mb-6">
                        {sub.tags.slice(4, 6).map((tag, ti) => {
                          const actualIndex = ti + 4; // Adjust index for activeTags
                          const isActive = activeTags[si] === actualIndex;
                          const isInteractive = sub.tagDescriptions && sub.tagDescriptions[actualIndex] !== null && sub.tagDescriptions[actualIndex] !== undefined;

                          return (
                            <div key={ti} className="flex items-center gap-4">
                              <div className="flex items-center gap-3">
                                <span className="text-white mt-1 shrink-0">•</span>
                                <button
                                  onClick={() => setActiveTags({ [si]: actualIndex })}
                                  className={`text-[16px] md:text-[18px] lg:text-[20px] font-semibold transition-all duration-300 border-b-2 text-left ${
                                    isActive 
                                      ? "text-white border-white" 
                                      : "text-[#C02429] border-[#C02429] hover:text-white hover:border-white"
                                  }`}
                                >
                                  {tag}
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </>
                  ) : (
                    /* Default rendering for other subsections */
                    <div className={`flex flex-wrap gap-x-8 gap-y-4 mb-6 ${sub.layout === "col" ? "flex-col" : "flex-row items-center"}`}>
                      {sub.tags.map((tag, ti) => {
                        const isActive = activeTags[si] === ti;
                        const isInteractive = sub.tagDescriptions && sub.tagDescriptions[ti] !== null && sub.tagDescriptions[ti] !== undefined;

                        if (!isInteractive) {
                          return (
                            <div key={ti} className="flex items-center gap-3 text-white/90">
                              <span className="text-white mt-1 shrink-0">•</span>
                              <span className="text-[16px] md:text-[18px] lg:text-[20px] font-medium leading-relaxed">
                                {tag}
                              </span>
                            </div>
                          );
                        }
                        return (
                          <div key={ti} className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                              <span className="text-white mt-1 shrink-0">•</span>
                              <button
                                onClick={() => setActiveTags({ [si]: ti })}
                                className={`text-[16px] md:text-[18px] lg:text-[20px] font-semibold transition-all duration-300 border-b-2 text-left ${
                                  isActive 
                                    ? "text-white border-white" 
                                    : "text-[#C02429] border-[#C02429] hover:text-white hover:border-white"
                                }`}
                              >
                                {tag}
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </>
              )}

              {sub.footer && !activeTags[si] && (
                <p className="text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[1.5] mt-6 text-white italic opacity-80">
                  {sub.footer}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Navigation */}
        <div className="mt-12 md:mt-20 pb-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {pages.map((tab, index) => {
              const isCurrent = activePage === index;
              return (
                <button
                  key={index}
                  onClick={() => handleTabClick(index)}
                  className="bg-none border-none cursor-pointer flex flex-col items-start w-full group"
                >
                  {/* Progress bar */}
                  <div className="w-full h-[2px] bg-[#d4d0c8] mb-3 relative z-10">
                    <motion.div
                        className="absolute top-0 left-0 h-full bg-[#C02429]"
                        initial={{ width: 0 }}
                        animate={{
                          width: isCurrent ? `${progress}%` : activePage > index ? "100%" : "0%",
                        }}
                        transition={{ ease: "linear" }}
                      />
                    </div>

                    {/* Label */}
                    <span
                      className={`
                        text-[12px] md:text-[18px] 
                        tracking-[1px] md:tracking-[2.5px] 
                        font-medium 
                        uppercase 
                        mt-1 
                        transition-all 
                        duration-300
                        whitespace-pre-line
                        text-left
                        ${
                          isCurrent
                            ? "text-[#C02429]"
                            : "text-[#d4d0c8] group-hover:text-white"
                        }
                      `}
                    >
                    {tab.nav}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedContent;

"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const pages = [
  {
    label: "COMPONENTS OF LIGHTNING PROTECTION SYSTEM",
    nav: "COMPONENTS OF\nLIGHTNING\nPROTECTION SYSTEM",
    title: "COMPONENTS OF LIGHTNING PROTECTION SYSTEM",
    content: (
      <>
        <p>A complete lightning protection system consists of both external and internal components working together to ensure full protection.</p>
        <br />
        <p>The external LPS is responsible for intercepting and safely conducting lightning currents, while the internal LPS protects electrical and electronic systems from induced surges.</p>
      </>
    ),
    subsections: [
      {
        heading: "",
        tags: [],
        customContent: (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 mt-4">
            <div className="flex flex-col gap-4">
              <h4 className="text-[#C02429] text-[16px] md:text-[18px] font-bold uppercase">External LPS Components:</h4>
              <div className="flex flex-wrap gap-9 text-white/90 text-[14px] md:text-[16px]">
                <span>• Air Terminals</span>
                <span>• Down Conductors</span>
                <span>• Earthing System</span>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-[#C02429] text-[16px] md:text-[18px] font-bold uppercase">Internal LPS Components:</h4>
              <div className="flex flex-wrap gap-9 text-white/90 text-[14px] md:text-[16px]">
                <span>• Equipotential bonding</span>
                <span>• Surge protection Devices (SPD)</span>
              </div>
            </div>
          </div>
        ),
        footer: "Together, these components create a comprehensive protection system",
      }
    ],
  },
  {
    label: "WORKING PRINCIPLE OF LPS",
    nav: "WORKING PRINCIPLE\nOF LPS",
    title: "WORKING PRINCIPLE OF LPS",
    content: (
      <>
        <p>The operation of a lightning protection system follows a simple but highly engineered process. When lightning approaches a structure, the air terminal captures the strike. The current is then conducted safely through down conductors and finally dissipated into the ground through the earthing system.</p>
        <br />
        <p>In addition to handling direct strikes, SPDs are used to protect internal systems from transient overvoltage.</p>
      </>
    ),
    subsections: [
      {
        heading: "WORKING STEPS:",
        tags: [
          "Capture lightning through air terminal",
          "Conduct current via down conductors",
          "Dissipate energy through earthing",
          "Protect internal systems using SPD",
        ],
        isListOnly: true,
        layout: "col",
        footer: "This coordinated process ensures complete protection.",
      },
    ],
  },
  {
    label: "LIGHTNING PROTECTION IN SOLAR FIELDS",
    nav: "LIGHTNING\nPROTECTION IN\nSOLAR FIELDS",
    title: "LIGHTNING PROTECTION IN SOLAR FIELDS",
    content: (
      <>
        <p>Solar power plants are highly exposed installations, typically located in open areas where lightning strikes are more frequent. The large spread of solar modules, combined with elevated mounting structures, increases the probability of direct and indirect lightning effects.</p>
        <br />
        <p>Additionally, solar plants contain highly sensitive components such as inverters, SCADA systems, and communication networks. Even a minor surge can lead to significant operational disruptions and financial losses.</p>
      </>
    ),
    subsections: [
      {
        heading: "RISKS IN SOLAR FIELDS:",
        tags: [
          "Direct lightning damage to PV modules",
          "Inverter and SCADA failure",
          "Plant shutdown and revenue loss",
          "Fire hazards and safety risks",
        ],
        isListOnly: true,
        layout: "col",
        footer: "Because of these factors, solar plants require a robust and scientifically validated lightning protection system.",
      },
    ],
  },
  {
    label: "LPS FOR SOLAR FIELDS",
    nav: "LPS FOR SOLAR\nFIELDS",
    title: "LIGHTNING PROTECTION SYSTEM FOR SOLAR FIELDS",
    content: (
      <>
        <p>Conventional lightning protection systems (LPS), designed in accordance with IEC 62305, offer significant advantages in solar PV fields due to their proven reliability, standardized design approach, and universal acceptance. Their design methodologies—such as the rolling sphere and mesh methods.</p>
        <br />
        <p>One of the most significant challenges in conventional Lightning protection system is the requirement for a large number of air terminals and conductors to cover vast, low-height panel areas, which can create shading on panels, resulting in energy losses and potential hotspot formation.</p>
        <br />
        <p>The application of methods like the rolling sphere becomes complicated across extensive and uneven terrains, Additionally, maintaining adequate separation distance from DC cabling is difficult, increasing the risk of induced surges in long cable runs.</p>
        <br />
        <p>Installation and maintenance also become labor-intensive due to the scale of the system.</p>
        <br />
        <p>ESE (Early Streamer Emission) technology provides a modern alternative by offering a larger protection radius and optimized coverage.</p>
      </>
    ),
    subsections: [
      {
        heading: "ADVANTAGES OF ESE SYSTEMS:",
        tags: [
          "Larger protection radius",
          "Reduced number of air terminals",
          "Cost-effective solution",
          "Ideal for large solar fields",
        ],
        isListOnly: true,
        layout: "row",
      },
    ],
  },
  {
    label: "KEY CHALLENGE IN ESE LIGHTNING PROTECTION",
    nav: "KEY CHALLENGE IN\nESE LIGHTNING\nPROTECTION",
    title: "A KEY CHALLENGE IN ESE LIGHTNING PROTECTION SYSTEMS",
    content: (
      <>
        <p>A key challenge in ESE lightning protection systems is the presence of fake or counterfeit products, which closely mimic genuine devices in appearance but lack proper testing and certification. Since ESE performance depends on the validated Delta T (ΔT) parameter as per NF C 17-102, untested products often claim unrealistic values, leading to incorrect protection radius and potential coverage gaps. These products typically do not undergo sequential (multi-shot) testing, meaning their performance may not be consistent under repeated lightning events—especially critical in exposed environments like solar plants. Additionally, inferior materials and lack of high-current testing (e.g., 100 kA, 10/350 μs) can result in failure during actual lightning strikes, causing damage to PV modules, inverters, and associated systems. The absence of compliance, traceability, and authenticity verification further increases risks such as audit failures, insurance issues, and long-term reliability concerns. Ultimately, while ESE technology is effective, the use of non-genuine products can compromise the entire lightning protection system.</p>
      </>
    ),
    subsections: null,
  },
  {
    label: "ESE PERFORMANCE VALIDATION AS PER NF C 17-102",
    nav: "ESE PERFORMANCE\nVALIDATION AS PER\nNF C 17-102",
    title: "ESE PERFORMANCE VALIDATION AS PER NF C 17-102",
    content: (
      <></>
    ),
    subsections: [
      {
        heading: "",
        tags: [],
        customContent: (
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12 mt-4">
            <div className="flex-1">
              <p className="text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[1.7] text-white text-justify">
                The NF C 17-102 standard defines the testing and performance requirements for ESE lightning protection systems. It ensures that products are tested under simulated lightning conditions to verify their effectiveness.
              </p>
              <br />
              <p className="text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[1.7] text-white text-justify">
                The following flowchart gives the sequence of tests carried out on a sample during Type Testing of ESE.
              </p>
            </div>
            <div className="w-full md:w-auto shrink-0 flex md:flex-col justify-start">
              <img 
                src="/ESE/ese-label-1.png" 
                alt="ESE Performance Validation Flowchart" 
                className="w-full max-w-[450px] h-auto object-contain p-4 rounded-lg"
              />
            </div>
          </div>
        ),
      }
    ],
  },
  {
    label: "CORRECT ESE LIGHTNING ARRESTOR",
    nav: "CORRECT ESE\nLIGHTNING ARRESTOR",
    title: "SELECTION OF CORRECT ESE LIGHTNING ARRESTOR",
    content: (
      <>
        <p>The effectiveness of a lightning protection system depends not only on the design but critically on the correct selection of the ESE lightning arrestor. Choosing a properly tested, certified, and standards-compliant ESE device—with validated ΔT performance and proven reliability through sequential testing—is essential to ensure accurate protection radius and consistent interception of lightning. Any compromise in selection, especially the use of unverified or non-compliant products, can lead to protection gaps, equipment damage, and system failure. Therefore, the right selection of ESE is a key factor in achieving safe, reliable, and long-term lightning protection, particularly in high-risk installations such as solar power plants</p>
      </>
    ),
    subsections: null,
  },
];

const PROGRESS_DURATION = 6000;
const PROGRESS_INTERVAL = 50;

const DetailedContent = () => {
  const [activePage, setActivePage] = useState(0);
  const [activeTags, setActiveTags] = useState<Record<number, number | undefined>>({});
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isManualPaused, setIsManualPaused] = useState(false);
  const [restartKey, setRestartKey] = useState(0);

  useEffect(() => {
    if (isPaused || isManualPaused) return;

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
                if (React.isValidElement(child) && child.type === "p") {
                  const element = child as React.ReactElement<{ children?: React.ReactNode }>;
                  return (
                    <p key={i} className="text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[1.7] text-white text-justify">
                      {element.props.children}
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

              {/* Swappable Area: Body OR Tag Description OR Custom Content */}
              <div className="min-h-0">
                <AnimatePresence mode="wait">
                  {sub.customContent ? (
                    <motion.div
                      key={`custom-content-${si}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                    >
                      {sub.customContent}
                    </motion.div>
                  ) : activeTags[si] !== undefined && sub.tagDescriptions?.[activeTags[si]] ? (
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
                      <p className="text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[1.7] text-white whitespace-pre-line">
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
                          <p key={pi} className="text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[1.7] text-white/80 text-justify">
                            {para}
                          </p>
                        ))}
                      </motion.div>
                    )
                  )}
                </AnimatePresence>
              </div>

              {/* Tags Area */}
              {sub.tags && sub.tags.length > 0 && (
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

              {sub.footer && (
                <p className="text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[1.7] mt-6 text-white italic opacity-80">
                  {sub.footer}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Navigation */}
        <div className="mt-12 md:mt-20 pb-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-10 overflow-hidden">
            {pages
              .map((tab, index) => ({ ...tab, originalIndex: index }))
              .slice(activePage < 5 ? 0 : 2, activePage < 5 ? 5 : 7)
              .map((tab, index) => {
                const isCurrent = activePage === tab.originalIndex;
                return (
                  <button
                    key={tab.originalIndex}
                    onClick={() => handleTabClick(tab.originalIndex)}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    className="bg-none border-none cursor-pointer flex flex-col items-start w-full group transition-all duration-500"
                  >
                    {/* Progress bar */}
                    <div className="w-full h-[2px] bg-[#d4d0c8] mb-3 relative z-10">
                      <motion.div
                        className="absolute top-0 left-0 h-full bg-[#C02429]"
                        initial={{ width: 0 }}
                        animate={{
                          width: isCurrent ? `${progress}%` : activePage > tab.originalIndex ? "100%" : "0%",
                        }}
                        transition={{ ease: "linear" }}
                      />
                    </div>

                    {/* Label */}
                    <span
                      className={`
                        text-[10px] md:text-[14px] lg:text-[16px] 
                        tracking-[1px] md:tracking-[2px] 
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

"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const pages = [
  {
    label: "IMPORTANCE OF ROOT CAUSE ANALYSIS",
    nav: "IMPORTANCE OF ROOT\nCAUSE ANALYSIS",
    title: "IMPORTANCE OF ROOT CAUSE ANALYSIS",
    content: (
      <>
        <p>
          Recurring electrical faults, inefficiencies, or system breakdowns can
          disrupt operations, increase downtime, and escalate maintenance costs.
          RCA provides a systematic approach to uncover the root causes of these
          issues, ensuring long-term reliability and performance.
        </p>
        <br />
        <p>Root Cause Analysis is crucial for:</p>
        <br />
        <p>
          • <span className="text-[#C02429]">Minimizing Downtime</span> -
          Identifying and addressing the root causes of failures prevents
          disruptions in operations.
        </p>
        <br />
        <p>
          • <span className="text-[#C02429]">Enhancing Safety</span> - Reducing
          risks associated with electrical faults and ensuring a safer working
          environment.
        </p>
        <br />
        <p>
          • <span className="text-[#C02429]">Cost Savings</span> - Preventing
          recurring problems reduces repair and maintenance expenses.
        </p>
        <br />
        <p>
          •{" "}
          <span className="text-[#C02429]">
            Optimizing System Performance
          </span>{" "}
          - Improving the efficiency and reliability of electrical systems.
        </p>
      </>
    ),
  },
  {
    label: "JEF'S ROOT CAUSE ANALYSIS SERVICES",
    nav: "JEF'S ROOT CAUSE\nANALYSIS SERVICES",
    title: "JEF'S ROOT CAUSE ANALYSIS SERVICES",

    subsections: [
      {
        tags: [
          "Fault Investigation and Analysis",
          "Electrical System Performance Evaluation",
          "Grounding and Lightning Protection System Assessment",
          "Power Quality Analysis",
          "Failure Mode Effect Analysis (FMEA)",
          "Corrective and Preventive Action Plans",
        ],
        tagDescriptions: [
          "• Detailed investigation of system failures, including equipment malfunctions, grounding issues, and power disruptions.\n\n• Comprehensive data collection and analysis to trace the origins of faults.",
          "• Evaluation of system components such as transformers, switchgear, and cables to assess performance.\n\n• Identification of weaknesses and inefficiencies affecting system reliability.",
          "• Analysis of grounding and lightning protection systems to identify vulnerabilities and improve safety.\n\n• Recommendations for optimizing protection systems to prevent recurring issues.",
          "• Investigating power quality issues, including voltage sags, harmonics, and transients, to determine their root causes.\n\n• Providing solutions to enhance power stability and prevent future disruptions.",
          "• Systematic assessment of potential failure modes and their effects on system performance.\n\n• Implementing proactive measures to mitigate risks and improve system resilience.",
          "• Development of detailed action plans to address identified root causes.\n\n• Implementation of preventive measures to avoid future occurrences of similar issues.",
        ],
      },
    ],
  },
  {
    label: "COMPLIANCE AND STANDARDS",
    nav: "COMPLIANCE AND\nSTANDARDS",
    title: "COMPLIANCE AND STANDARDS",
    content: (
      <>
        <p>
          JEF ensures that RCA services align with international standards and
          best practices, including:
        </p>
        <br />
        <p>• IEC Standards for system reliability and safety.</p>
        <br />
        <p>• IEEE Guidelines for electrical fault analysis.</p>
        <br />
        <p>• Regional and industry-specific regulations.</p>
      </>
    ),
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

  useEffect(() => {
    if (progress >= 100) {
      setActivePage((prev) => (prev + 1) % pages.length);
      setActiveTags({});
      setProgress(0);
    }
  }, [progress]);

  const handleTabClick = (index: number) => {
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
    <section className="bg-[#161414] font-montserrat py-10 md:pt-16 md:pb-12 overflow-hidden min-h-[760px] flex flex-col">
      <div
        onMouseEnter={() => !isManualPaused && setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="section-container flex flex-col flex-1 gap-6 md:gap-8"
      >
        <motion.h2
          key={`title-${activePage}`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#C02429] text-[18px] md:text-[24px] font-bold tracking-[1.5px] md:tracking-[2px] leading-[1.4] uppercase"
        >
          {page.title}
        </motion.h2>

        <div className="w-full relative z-20 flex-1">
          <motion.div
            key={`content-${activePage}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="flex flex-col max-w-[1400px]"
          >
                 {page.content &&
        React.Children.map(page.content.props.children, (child, i) => {
          if (React.isValidElement(child) && child.type === "p") {
            return (
              <p
                key={i}
                className="text-[13px] md:text-[15px] lg:text-[16px] font-normal leading-[1.75] text-white text-left"
              >
                {child.props.children}
              </p>
            );
          }

          return child;
        })}

          </motion.div>

          {page.subsections?.map((sub, si) => (
            <div key={si} className="mt-8">
              <div className="flex flex-col gap-5">
                {sub.tags.map((tag, ti) => (
                  <button
                    key={ti}
                    onClick={() =>
                      setActiveTags((prev) => ({
                        ...prev,
                        [si]: prev[si] === ti ? undefined : ti,
                      }))
                    }
                    className="w-fit text-left text-white underline underline-offset-4 hover:text-[#C02429] transition-colors text-[13px] md:text-[15px]"
                  >
                    • {tag}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {activeTags[si] !== undefined && (
                  <motion.div
                    key={`desc-${activeTags[si]}`}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 18 }}
                    transition={{ duration: 0.4 }}
                    className="mt-8 bg-[#161414]  px-6 md:px-12 py-8"
                  >
                    <h3 className="text-[#C02429] text-[15px] md:text-[18px] mb-5">
                      {sub.tags[activeTags[si] as number]}
                    </h3>
                    <p className="whitespace-pre-line text-white/85 text-[13px] md:text-[15px] leading-[1.8]">
                      {sub.tagDescriptions[activeTags[si] as number]}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-20 pb-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 overflow-hidden">
            {pages.map((tab, index) => {
              const isCurrent = activePage === index;

              return (
                <button
                  key={index}
                  onClick={() => handleTabClick(index)}
                  className="bg-none border-none cursor-pointer flex flex-col items-start w-full group transition-all duration-500"
                >
                  <div className="w-full h-[2px] bg-[#d4d0c8] mb-3 relative z-10">
                    <motion.div
                      className="absolute top-0 left-0 h-full bg-[#C02429]"
                      initial={{ width: 0 }}
                      animate={{
                        width: isCurrent
                          ? `${progress}%`
                          : activePage > index
                          ? "100%"
                          : "0%",
                      }}
                      transition={{ ease: "linear" }}
                    />
                  </div>

                  <span
                    className={`text-[9px] md:text-[11px] lg:text-[12px] tracking-[1px] font-medium uppercase mt-1 transition-all duration-300 text-left whitespace-pre-line ${
                      isCurrent
                        ? "text-[#C02429]"
                        : "text-[#d4d0c8] group-hover:text-white"
                    }`}
                  >
                    {tab.nav}
                  </span>

                  {isCurrent && isManualPaused && (
                    <span className="mt-2 text-[9px] uppercase tracking-[1px] text-[#C02429]">
                      Paused
                    </span>
                  )}
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
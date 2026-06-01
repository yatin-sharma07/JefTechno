"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const PROGRESS_DURATION = 6000;
const PROGRESS_INTERVAL = 50;
const VISIBLE_TABS = 5;

const pages = [
  {
    label: "WHAT ACTUALLY\nGOES WRONG",
    title: "WHAT ACTUALLY GOES WRONG",
    content: (
      <>
        <p>
          The following 12 factors are identified as capable of interrupting the
          operation of instrumentation systems
        </p>

        <ul className="list-disc space-y-3 pl-5">
          <li>Surges, Spikes, and Glitches</li>
          <li>Leakage Current</li>
          <li>Circulating Current</li>
          <li>Differential Grid / Earth Potential</li>
          <li>Incorrect Earthing Philosophy</li>
          <li>Incorrect Cabling Philosophy</li>
          <li>Compromised Common Earthing Point (CEP)</li>
          <li>High Shield Current</li>
          <li>EMI and EMF</li>
          <li>Looping of Excess Power Cables Inside Panels</li>
          <li>Unused and Unterminated Cables</li>
          <li>Power Quality Disturbances</li>
        </ul>
      </>
    ),
  },
  {
    label: "SCALE OF THE\nPROBLEM IN\nOPERATING PLANTS",
    title: "THE SCALE OF THE PROBLEM IN OPERATING PLANTS",
    content: (
      <>
        <p>
          The challenge is compounded by the sheer scale of instrumentation
          infrastructure in a typical process plant or generating station. A
          medium-sized plant may have hundreds of panels, thousands of junction
          boxes, and tens of thousands of individual field instruments — each
          with its own earthing connections, cable shields, and bonding points.
          The grounding system is physically extensive, installed over years by
          multiple contractors, and subject to ongoing modifications and
          additions that incrementally degrade the original design intent.
        </p>

        <p>Errors accumulate silently.</p>

        <ul className="list-disc space-y-5 pl-5">
          <li>A shield grounded at both ends in one junction box.</li>
          <li>
            A signal ground bar inadvertently connected to a PE bar during a
            panel modification.
          </li>
          <li>An instrument earth pit left isolated from the plant grid.</li>
        </ul>

        <p>
          None of these individually cause an immediate, visible failure.
          Together, they create the conditions for the intermittent,
          hard-to-diagnose problems that operations teams experience as
          unexplained trips and nuisance alarms — and which plant engineering
          teams are unable to resolve through standard troubleshooting.
        </p>
      </>
    ),
  },
  {
    label: "WHY STANDARD\nELECTRICAL TESTING",
    title: "WHY STANDARD ELECTRICAL TESTING DOES NOT SOLVE THIS",
    content: (
      <>
        <p>
          Routine electrical testing — insulation resistance, continuity, earth
          pit resistance — is designed for the protective earthing system. It
          does not examine the signal reference ground, shield termination
          practices, shield loop current, earth bar segregation, or the global
          earthing architecture. An installation that passes all routine
          electrical tests can still have an instrumentation earthing system that
          is comprehensively non-compliant with IEEE 1050-2004, IEC 61000-5-2,
          and IEEE 1100-2005 — and that is actively causing operational
          problems.
        </p>

        <p>
          This is the gap that a specialist Instrumentation Earthing Audit
          addresses.
        </p>
      </>
    ),
  },
  {
    label: "INSTRUMENTATION\nEARTHING AUDIT?",
    title: "WHAT IS AN INSTRUMENTATION EARTHING AUDIT?",
    content: (
      <>
        <p>
          An Instrumentation Earthing Audit is a detailed, structured and
          end-to-end technical evaluation of the grounding architecture that
          supports instrumentation and control systems in industrial facilities.
          It traces the entire earthing path—from field instruments and cable
          shields, through junction boxes, marshalling cabinets, and DCS panels,
          up to system cabinets, control room earth buses, and finally the below
          ground instrumentation and protective earthing systems which are
          interconnected to the plant earth grid—verifying equipotential
          bonding, noise control, and safety compliance at every node against
          globally accepted standards.
        </p>

        <p>
          Aligned with IEEE 1050-2004, IEEE 1100-2005, and IEC 61000-5-2, the
          audit combines precision measurements—such as shield loop current,
          millivolt drop, continuity, EM field intensity, and power
          quality—with structured visual inspection. The outcome is not just
          compliance verification, but a diagnostic insight into hidden risks
          like circulating currents, EMI susceptibility, and unsafe grounding
          practices—translated into actionable findings directly referenced to
          international standards.
        </p>
      </>
    ),
  },
  {
    label: "JEF APPROACH",
    title: "JEF APPROACH",
    content: (
      <>
        <p>
          JEF’s Instrumentation Earthing Audit covers 15 structured tests and
          inspections applied across panels, junction boxes, field instruments.
          The scope escalates logically: where shield loop current measurements
          at the panel level indicate a ground loop condition, the audit is
          extended to junction boxes and field assets to locate the source. It
          doesn’t end with measurements alone, we rectify the anomalies
          identified and also perform measurements to cross verify the quality
          of rectification not just by visual inspection but also check whether
          the measured values after post rectification are within the acceptable
          limits prescribed in standards there by ensuring a fool proof system.
        </p>

        <p>The approach involves 3 phases</p>

        <ul className="list-disc space-y-5 pl-5">
          <li>Phase -1 – Audit and Identification of gaps / anomalies</li>
          <li>Phase-2 – Rectification of anomalies</li>
          <li>Phase -3 – Retesting after rectification.</li>
        </ul>
      </>
    ),
  },
];

export default function DetailedContent() {
  const [activePage, setActivePage] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isManualPaused, setIsManualPaused] = useState(false);

  const getVisibleTabs = () => {
    let start = activePage - Math.floor(VISIBLE_TABS / 2);

    if (start < 0) start = 0;

    if (start + VISIBLE_TABS > pages.length) {
      start = pages.length - VISIBLE_TABS;
    }

    return pages.slice(start, start + VISIBLE_TABS).map((page, index) => ({
      ...page,
      realIndex: start + index,
    }));
  };

  const visibleTabs = getVisibleTabs();

  useEffect(() => {
    if (isPaused || isManualPaused) return;

    const interval = setInterval(() => {
      setProgress((prev) =>
        prev >= 100
          ? 100
          : prev + (PROGRESS_INTERVAL / PROGRESS_DURATION) * 100
      );
    }, PROGRESS_INTERVAL);

    return () => clearInterval(interval);
  }, [activePage, isPaused, isManualPaused]);

  useEffect(() => {
    if (progress >= 100) {
      setActivePage((prev) => (prev + 1) % pages.length);
      setProgress(0);
    }
  }, [progress]);

  const handleTabClick = (index) => {
    if (index === activePage) {
      setIsManualPaused((prev) => !prev);
      return;
    }

    setActivePage(index);
    setProgress(0);
    setIsPaused(false);
    setIsManualPaused(false);
  };

  const page = pages[activePage];

  return (
    <section className="min-h-[760px] bg-[#161414] py-14 md:py-20 font-montserrat text-white overflow-hidden">
      <div
        onMouseEnter={() => !isManualPaused && setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="section-container flex min-h-[650px] flex-col px-5 md:px-0"
      >
        <motion.h2
          key={`title-${activePage}`}
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-9 text-[#C02429] text-[18px] sm:text-[22px] md:text-[28px] font-bold uppercase tracking-[4px] leading-[1.5]"
        >
          {page.title}
        </motion.h2>

        <motion.div
          key={`content-${activePage}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="flex-1 text-[13px] sm:text-[15px] md:text-[17px] lg:text-[18px] leading-[1.65] text-white/95"
        >
          <div className="flex max-w-[1500px] flex-col gap-6">
            {page.content}
          </div>
        </motion.div>

        <div className="mt-12 md:mt-20 overflow-hidden">
          <motion.div
            key={visibleTabs[0]?.realIndex}
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-5"
          >
            {visibleTabs.map((tab) => {
              const isCurrent = activePage === tab.realIndex;

              return (
                <button
                  key={tab.realIndex}
                  onClick={() => handleTabClick(tab.realIndex)}
                  className="group flex w-full flex-col items-start text-left"
                >
                  <div className="relative mb-3 h-[2px] w-full bg-[#d4d0c8]/80">
                    <motion.div
                      className="absolute left-0 top-0 h-full bg-[#C02429]"
                      animate={{
                        width: isCurrent ? `${progress}%` : "0%",
                      }}
                      transition={{ ease: "linear" }}
                    />
                  </div>

                  <span
                    className={`whitespace-pre-line text-[10px] sm:text-[11px] md:text-[13px] lg:text-[16px] uppercase tracking-[1.8px] leading-[1.35] transition-all ${
                      isCurrent
                        ? "text-[#C02429]"
                        : "text-[#d4d0c8] group-hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
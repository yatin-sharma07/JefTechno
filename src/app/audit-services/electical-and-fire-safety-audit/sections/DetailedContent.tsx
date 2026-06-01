"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const PROGRESS_DURATION = 6000;
const PROGRESS_INTERVAL = 50;

const pages = [
  {
    label: "ELECTRICAL SAFETY\nTESTS",
    title: "ELECTRICAL SAFETY TESTS",
    content: (
      <>
        <p>
          Electrical Safety Audit incorporating 500+ checkpoints and precision
          measurements across grounding, protection systems, insulation, and
          power quality.
        </p>

        <ul className="list-disc space-y-3 pl-5">
          <li>Grounding & Earthing System Evaluation</li>
          <li>Electrical Network Integrity & Continuity Checks</li>
          <li>Insulation Health & Leakage Current Analysis</li>
          <li>Fault Current & Protection System Verification</li>
          <li>Power Quality & Load Performance Assessment</li>
          <li>Thermal Imaging & Preventive Diagnostics</li>
          <li>Lighting & Emergency System Assessment</li>
        </ul>

        <h3 className="text-[#C02429] uppercase font-bold tracking-[2px] mt-8">
          Additional Offerings
        </h3>

        <p>
          In addition to 500+ checkpoints and 15+ tests, our audit evaluates
          maintenance systems, critical records, and utility performance for risk
          mitigation and efficiency improvement.
        </p>
      </>
    ),
  },
  {
    label: "JEF SAFETY\nCERTIFICATION\nPROGRAMME",
    title: "THE JEF SAFETY CERTIFICATION PROGRAMME",
    content: (
      <>
        <p>India’s first facility-specific safety certification.</p>

        <p>The 4-step path to certification:</p>

        <ul className="list-disc space-y-4 pl-5">
          <li>
            Audit — Comprehensive electrical & fire safety audit against all
            applicable Indian standards
          </li>
          <li>
            Rectification — Facility addresses all findings using JEF’s
            recommendations
          </li>
          <li>
            Closure Audit — JEF independently verifies all critical deficiencies
            are resolved
          </li>
          <li>
            Certification — Facility is awarded its JEF Safety Certification
          </li>
          <li>
            Staff Training & Certification - Structured training for facility
            electrical management teams and certificates issued based on
            assessment scores
          </li>
        </ul>

        <p>
          Note: Our periodic audit significantly reduces the probability of
          electrical and fire accidents. While we cannot guarantee 24/7 safety,
          our certification programme and post-certification training aim to
          build a lasting safety-first culture within your facility.
        </p>
      </>
    ),
  },
  {
    label: "LIFT / ESCALATOR &\nHVAC AUDITS",
    title: "LIFT / ESCALATOR & HVAC AUDITS",
    content: (
      <>
        <ul className="list-disc space-y-5 pl-5">
          <li>
            Lift & Escalator Full inspection across: lift pit, car interior, car
            roof, machine room, floor landings, and lift shaft.
          </li>
          <li>
            HVAC Assessed for electrical safety, fire alarm integration, and air
            quality.
          </li>
        </ul>

        <h3 className="text-[#C02429] uppercase font-bold tracking-[2px] mt-10">
          Codes & Standards Referenced
        </h3>

        <p>
          CEA Regulations 2023, NEC 2023, NBC 2016, along with applicable BIS,
          IEC, IEEE, BS and NFPA standards
        </p>
      </>
    ),
  },
];

export default function DetailedContent() {
  const [activePage, setActivePage] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setProgress((prev) =>
        prev >= 100 ? 100 : prev + (PROGRESS_INTERVAL / PROGRESS_DURATION) * 100
      );
    }, PROGRESS_INTERVAL);

    return () => clearInterval(interval);
  }, [activePage, isPaused]);

  useEffect(() => {
    if (progress >= 100) {
      setActivePage((prev) => (prev + 1) % pages.length);
      setProgress(0);
      setIsPaused(false);
    }
  }, [progress]);

  const handleTabClick = (index) => {
    if (index === activePage) {
      setIsPaused((prev) => !prev);
      return;
    }

    setActivePage(index);
    setProgress(0);
    setIsPaused(false);
  };

  const page = pages[activePage];

  return (
    <section className="min-h-[760px] bg-[#161414] py-14 md:py-20 font-montserrat text-white overflow-hidden">
      <div className="section-container flex min-h-[650px] flex-col px-5 md:px-0">
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
          <div className="flex gap-4 md:gap-8">
            {pages.map((tab, index) => {
              const isCurrent = activePage === index;

              return (
                <button
                  key={index}
                  onClick={() => handleTabClick(index)}
                  className="group flex flex-col items-start text-left shrink-0"
                >
                  <div className="relative mb-3 h-[2px] w-52 md:w-60 bg-[#d4d0c8]/80">
                    <motion.div
                      className="absolute left-0 top-0 h-full bg-[#C02429]"
                      animate={{ width: isCurrent ? `${progress}%` : "0%" }}
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
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const pages = [
  {
    label: "WHAT WE DO",
    nav: "WHAT WE DO",
    title: "WHAT WE DO",
    content: (
      <>
        <p>
          JEF delivers two complementary categories of power system analysis,
          covering both system-wide behaviour and high-frequency transient
          phenomena:
        </p>
        <br />
        <p>
          • <span className="text-[#C02429]">Power System Studies</span> -
          Steady-state and dynamic analysis using ETAP, PSS®E DIgSILENT
          PowerFactory, and SKM for Load flow, short circuit, Motor starting,
          Harmonic analysis, Protection coordination, Arc flash assessment,
          Transient stability & Load shedding studies
        </p>
        <br />
        <p>
          •{" "}
          <span className="text-[#C02429]">
            Electromagnetic Transient and Insulation Coordination Studies
          </span>{" "}
          - High-fidelity time-domain simulation using PSCAD/EMTDC: Switching
          overvoltages, Temporary Overvoltages (TOV), Transient Recovery Voltage
          (TRV), Fast Transients (FTO / VFTO), Ferroresonance, Transformer
          energisation.
        </p>
      </>
    ),
  },
  {
    label: "POWER SYSTEM STUDIES",
    nav: "POWER SYSTEM\nSTUDIES",
    title: "POWER SYSTEM STUDIES",
    content: (
      <>
        <p>
          Performed using ETAP, DIgSILENT, PowerFactory, or SKM Power*Tools —
          referenced throughout to applicable IEEE and IEC standards.
        </p>
        <br />
        <p>• Load Flow Study (IEEE 399 & 3002.2)</p>
        <p>• Short Circuit Study (IEC 60909 and IEEE 551 & 3002.3)</p>
        <p>• Motor Acceleration Study (IEEE 399 & 3002.7)</p>
        <p>• Harmonic Analysis (IEEE 3002.8 / IEEE 519)</p>
        <p>• Transient and Dynamic Stability Study (IEEE 1110 & 421.5)</p>
        <p>• Protection and Coordination Study (IEEE 242 & 3004 series)</p>
        <p>• Arc Flash Study (IEEE 1584 / NFPA 70E)</p>
        <p>• Load Shedding Study</p>
        <p>• Reactive Power Compensation</p>
      </>
    ),
  },
  {
    label: "ELECTROMAGNETIC TRANSIENT AND",
    nav: "ELECTROMAGNETIC\nTRANSIENT AND",
    title: "ELECTROMAGNETIC TRANSIENT AND INSULATION COORDINATION STUDIES",
    content: (
      <>
        <p>
          Time-domain electromagnetic transient simulation for high-voltage GIS
          and AIS installations — applied across HV systems using PSCAD/EMTDC.
        </p>
        <br />
        <p>• Insulation Coordination (IEC 60071 - 1&2 and IEC 60099-4)</p>
        <p>• Switching Overvoltage (SOV) (IEC 60071 - 1&2 and IEC 60099-4)</p>
        <p>• Temporary Overvoltage (TOV) (IEC 60071 - 1&2 and IEC 60099-4)</p>
        <p>• TRV and RRRV (IEC 62271-100 / IEEE C37.011)</p>
        <p>• Transformer Energisation (CIGRE C4.307)</p>
        <p>• Ferroresonance (CIGRE WG C4.307)</p>
        <p>• Very Fast Transient Overvoltage (VFTO) (IEC 60071, IEC 62271-203, IEC 60060)</p>
        <p>• Lightning Impulse Overvoltage (LIOV) (IEC 60071 - 1&2 and IEC 60099-4)</p>
      </>
    ),
  },
  {
    label: "OUR SOFTWARE CAPABILITY",
    nav: "OUR SOFTWARE\nCAPABILITY",
    title: "OUR SOFTWARE CAPABILITY",
    content: (
      <>
        <p>
          JEF holds licences across all major power engineering analysis
          platforms. The choice of software is determined by the study requirement
          and client preference — never by a limitation in our toolkit.
        </p>
        <br />
        <p>• ETAP</p>
        <p>• PSCAD / EMTDC</p>
        <p>• PSS®E</p>
        <p>• DIgSILENT Power Factory</p>
        <p>• SKM Power Tools</p>
        <p>• DSA Tools</p>
      </>
    ),
  },
  {
    label: "THE PROJECTS WE WORK ON",
    nav: "PROJECTS WE WORK ON",
    title: "THE PROJECTS WE WORK ON",
    content: (
      <>
        <p>
          •{" "}
          <span className="text-[#C02429]">
            Greenfield Offshore Platform Developments
          </span>{" "}
          - Multi-platform electrical system studies — 132kV GIS through to 415V
          distribution, subsea cable systems, and full insulation coordination
          across all voltage levels.
        </p>
        <br />
        <p>
          •{" "}
          <span className="text-[#C02429]">
            Long Term Development Plan Expansions
          </span>{" "}
          - Power system studies for major oil and gas production expansion —
          integrating new facilities into live networks, updating protection
          coordination, and managing fault level and stability impacts.
        </p>
        <br />
        <p>
          •{" "}
          <span className="text-[#C02429]">
            Artificial Island Power Systems
          </span>{" "}
          - 132kV/33kV/6.6kV network expansion, CTG integration, grid
          interconnection, insulation coordination, and switching transient
          analysis for large-scale island power infrastructure.
        </p>
        <br />
        <p>
          •{" "}
          <span className="text-[#C02429]">
            Process Plant and Industrial Facility Studies
          </span>{" "}
          - Periodic power system studies for operating refineries, petrochemical
          plants, manufacturing installations, and process facilities — arc flash,
          relay coordination, harmonic surveys, and short circuit reviews.
        </p>
        <br />
        <p>
          •{" "}
          <span className="text-[#C02429]">
            Existing System Tie-Ins and Modifications
          </span>{" "}
          - Fault level, protection coordination, and voltage profile impact
          assessment for new facility tie-ins, with relay setting revision across
          the affected network.
        </p>
        <br />
        <p>
          •{" "}
          <span className="text-[#C02429]">EPC and EPCC Project Support</span>{" "}
          - Embedded study delivery for EPC contractors on oil and gas,
          petrochemical, and process industry projects — to schedule, in
          coordination with vendors and owner-operator engineering teams.
        </p>
      </>
    ),
  },
];

const PROGRESS_DURATION = 6000;
const PROGRESS_INTERVAL = 50;

const DetailedContent = () => {
  const [activePage, setActivePage] = useState(0);
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
      const next = (activePage + 1) % pages.length;
      setActivePage(next);
      setProgress(0);
    }
  }, [progress, activePage]);

  const handleTabClick = (index: number) => {
    if (index === activePage) {
      setIsManualPaused((prev) => !prev);
    } else {
      setIsManualPaused(false);
      setActivePage(index);
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
          className="text-[#C02427] text-[18px] md:text-[24px] font-bold tracking-[1.5px] md:tracking-[2px] leading-[1.4] uppercase"
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
            {React.Children.map(page.content.props.children, (child, i) => {
              if (React.isValidElement(child) && child.type === "p") {
                const element = child as React.ReactElement<{ children?: React.ReactNode }>;
                return (
                  <p
                    key={i}
                    className="text-[13px] md:text-[15px] lg:text-[16px] font-normal leading-[1.75] text-white text-left"
                  >
                    {element.props.children}
                  </p>
                );
              }
              return child;
            })}
          </motion.div>
        </div>

        <div className="mt-12 md:mt-20 pb-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-10 overflow-hidden">
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
                      className="absolute top-0 left-0 h-full bg-[#C02427]"
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
                        ? "text-[#C02427]"
                        : "text-[#d4d0c8] group-hover:text-white"
                    }`}
                  >
                    {tab.nav}
                  </span>

                  {isCurrent && isManualPaused && (
                    <span className="mt-2 text-[9px] uppercase tracking-[1px] text-[#C02427]">
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
"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const PROGRESS_DURATION = 6000;
const PROGRESS_INTERVAL = 50;
const VISIBLE_TABS = 5;

const pages = [
  {
    label: "CONVENTIONAL\nEARTHING\nASSESSMENT",
    title: "THE GAP IN CONVENTIONAL EARTHING ASSESSMENT",
    content: (
      <>
        <p>
          Standard practice is to measure the resistance of the earth electrode
          and compare it against the design value. If within acceptable limits,
          the earthing system is considered satisfactory and safe.
        </p>

        <p>
          This has a significant limitation addressed in both IEEE Std 80 and
          IEEE Std 81. A ground grid has multiple parallel current paths. A
          corroded joint, disconnected riser, or isolated grid section creates a
          local deficiency without changing the overall measured resistance —
          the healthy parallel paths continue to return a satisfactory reading.
          Some or many equipment may have no effective earthing connection at
          all, yet the resistance test gives no indication regarding the defects.
        </p>

        <p>
          A facility can show a satisfactory earth resistance measurement while
          specific switchgear panels, transformer neutrals, or plant structures
          have open or high-resistance connections to the grid that would prevent
          the protection system from operating timely during a fault.
        </p>

        <p>
          JEF’s Earthing Health Assessment is designed specifically to address
          these gaps.
        </p>
      </>
    ),
  },
  {
    label: "WHY EARTHING\nSYSTEMS\nDETERIORATE",
    title: "WHY EARTHING SYSTEMS DETERIORATE",
    content: (
      <>
        <p>
          An earthing system which is adequate during commissioning may become
          deficient over its service life through several mechanisms:
        </p>

        <ul className="list-disc space-y-5 pl-5">
          <li>
            Environmental corrosion — electrochemical interaction between buried
            conductors and soil causes progressive corrosion of conductor
            cross-sections and at joints
          </li>
          <li>
            Galvanic corrosion — dissimilar metals in contact accelerate
            corrosion at buried and above ground joints, which are the most
            difficult points to inspect
          </li>
          <li>
            Thermal and mechanical stress at joints — repeated fault events
            introduce thermal cycling that gradually loosens mechanical joints;
            even exothermic welded connections generally tend to develop cracks
            in buried installations as there is no allowance for movement or
            thermal expansion
          </li>
          <li>
            Changes to the installation — plant modifications, extensions, and
            civil works may alter the earthing system without being fully
            documented or accounted for in the original protection system design
          </li>
          <li>
            Workmanship at installation — under-torqued clamps, incomplete
            welds, and risers not bonded to the buried grid may not be
            detectable during commissioning but worsen in service
          </li>
        </ul>

        <p>
          Periodic Comprehensive health assessment — not just resistance
          measurement — is necessary to identify these deficiencies before they
          compromise safety.
        </p>
      </>
    ),
  },
  {
    label: "WHAT IS AT STAKE",
    title: "WHAT IS AT STAKE",
    content: (
      <>
        <p>A deficient earthing system puts three things at risk:</p>

        <p>
          A. Protection system operation — The CEA (Measures Relating to Safety
          and Electric Supply) Regulations, 2023 require that earthing system
          impedance be maintained as low as possible to ensure timely breaker
          operation. If earth loop impedance has increased due to a corroded
          conductor, disconnected riser, loose connections, or a joint opened
          under thermal stress, the fault current may be insufficient to operate
          the protection in time. The fault persists, with consequences including
          fire, equipment damage, or exposure of personnel to hazardous touch
          potentials larger than the safe limits.
        </p>

        <p>
          B. Personnel safety — During a fault, current flowing through the
          earthing system causes Ground Potential Rise (GPR). IEEE Std 80 defines
          tolerable limits for touch and step potentials as a function of
          sub-surface resistivity, soil resistivity, body weight, and fault
          duration. Exceeding these limits results in electric shock, ventricular
          fibrillation, and fatality.
        </p>

        <p>
          C. Equipment reliability — High neutral-to-ground voltages,
          electromagnetic interference from inadequate equipotential bonding, and
          nuisance tripping of earth fault protection are symptoms of earthing
          deficiencies. Sensitive electronic equipment — control systems, PLCs,
          instrumentation, communications — is also exposed to voltage transients
          and interference that progressively degrade performance and service
          life.
        </p>
      </>
    ),
  },
  {
    label: "JEF EARTHING\nHEALTH\nASSESSMENT",
    title: "JEF EARTHING HEALTH ASSESSMENT",
    content: (
      <>
        <p>
          JEF’s assessment covers the full circuit from the equipment to be
          protected, through the earthing conductor, through the buried grid, to
          the electrode — not just the electrode in isolation. It is structured
          around the specific failure modes which a resistance measurement will
          not detect - open and defective risers, disconnected grid sections,
          high-resistance connections, and inadequate earth loop impedance.
        </p>

        <p>
          All measurements are carried out on live systems, without requiring a
          shutdown, with sophisticated meters and test equipment and these values
          are processed using our proprietary algorithm to determine the
          condition of the connection.
        </p>
      </>
    ),
  },
  {
    label: "EHV SUBSTATION\nEARTHING\nASSESSMENT",
    title: "EHV SUBSTATION EARTHING ASSESSMENT",
    content: (
      <div className="grid gap-14 lg:grid-cols-2">
        <div>
          <h3 className="mb-5 text-[#C02429] text-[20px] md:text-[24px] font-bold uppercase tracking-[4px] leading-[1.6]">
            EHV SUBSTATION <br /> EARTHING ASSESSMENT
          </h3>

          <ul className="list-disc space-y-3 pl-5">
            <li>Soil Resistivity Test</li>
            <li>Earth Electrode Resistance Test</li>
            <li>Grid Resistance</li>
            <li>Riser Integrity Test</li>
            <li>Grid Integrity Test</li>
            <li>Effect of Corrosion</li>
            <li>Touch and Step Potential Test</li>
            <li>
              Earth Grid Modelling and Simulation — computer modelling using
              CDEGS software
            </li>
            <li>Gravel Resistivity</li>
            <li>Surface Layer</li>
            <li>Continuity Test</li>
            <li>Vertical Loop Impedance test</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-[#C02429] text-[20px] md:text-[24px] font-bold uppercase tracking-[4px] leading-[1.6]">
            LV EARTHING ASSESSMENT <br /> INDUSTRIAL AND COMMERCIAL
          </h3>

          <ul className="list-disc space-y-3 pl-5">
            <li>Soil Resistivity Test</li>
            <li>Earth Electrode Resistance Test</li>
            <li>Earth Loop Impedance Test</li>
            <li>
              Earth Leakage Protection Test / Prospective Fault Current Test
            </li>
            <li>Riser Integrity Test</li>
            <li>Effect of Corrosion</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    label: "ASSESSMENT\nIDENTIFIES AND\nDELIVERS",
    title: "WHAT THE ASSESSMENT IDENTIFIES AND DELIVERS",
    content: (
      <>
        <p className="text-[#C02429] font-medium">What We Identify</p>

        <ul className="list-disc space-y-5 pl-5">
          <li>Open and defective risers</li>
          <li>Grid islanding (intra-grid)</li>
          <li>Disconnected grids (inter-grid)</li>
          <li>Inadequate earth loop impedance</li>
          <li>Unsafe touch and step potentials</li>
          <li>Corrosion-affected conductors and connections</li>
        </ul>

        <p>
          Our study doesn’t end with identification of anomalies but will also
          provide corrective actions with practically implementable solutions.
        </p>
      </>
    ),
  },
  {
    label: "WHY JEF FOR\nCOMPREHENSIVE\nEHA?",
    title: "WHY JEF FOR COMPREHENSIVE EHA?",
    content: (
      <>
        <p>
          JEF combines deep field experience, patented testing methodology,
          sophisticated instruments, and proprietary analysis to deliver a
          comprehensive understanding of the true health of an earthing system.
        </p>

        <p>
          The assessment is carried out without shutdown and is designed to
          detect practical field failures that conventional resistance
          measurements often miss.
        </p>
      </>
    ),
  },
  {
    label: "APPLICATION AREA",
    title: "APPLICATION AREAS",
    content: (
      <>
        <p>
          JEF provides earthing health assessment and grounding testing services
          across:
        </p>

        <div className="grid gap-3 md:grid-cols-2">
          <ul className="list-disc space-y-3 pl-5">
            <li>AIS and GIS substations — EHV, HV, and MV</li>
            <li>Transmission</li>
            <li>Power generating stations</li>
            <li>Industrial manufacturing and process plants</li>
            <li>Oil and gas — onshore and offshore</li>
            <li>Tank farms and fuel storage facilities</li>
            <li>Petrochemical and refinery complexes</li>
            <li>Automobile and heavy industries</li>
          </ul>

          <ul className="list-disc space-y-3 pl-5">
            <li>Chemical and paints</li>
            <li>Pharmaceutical</li>
            <li>Data centres</li>
            <li>Metro rail and railway infrastructure</li>
            <li>
              Earthing audit for renewables — wind farms and solar power plants
            </li>
            <li>Communication towers and broadcast infrastructure</li>
            <li>Commercial buildings, retail complexes, and warehouses</li>
            <li>Hotels and Hospitals</li>
          </ul>
        </div>

        <p>
          JEF has conducted comprehensive earthing health assessments at over
          500+ substations and carried out earth grid simulation for over 650+
          grids.
        </p>
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
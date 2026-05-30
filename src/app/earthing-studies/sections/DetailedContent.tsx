"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const pages = [
  {
    label: "GROUNDING FUNDAMENTALS",
    nav: "GROUNDING\nFUNDAMENTALS",
    title: "GROUNDING FUNDAMENTALS",
    content: (
      <>
        <p>
          Low resistance alone does not define a good earthing system — impedance
          determines how the system behaves during actual fault conditions
        </p>
        <br />
        <p>
          High loop impedance limits fault current, preventing protective devices
          from detecting and clearing faults — the root cause of prolonged fault
          events, equipment damage, fire, and electric shock
        </p>
      </>
    ),
    subsections: null,
  },
  {
    label: "WHY CONVENTIONAL EARTHING SYSTEMS FAIL",
    nav: "WHY CONVENTIONAL\nEARTHING SYSTEMS\nFAIL",
    title: "WHY CONVENTIONAL EARTHING SYSTEMS FAIL",
    content: (
      <>
        <p>
          • Salt and charcoal backfill is electrolytic — it depends on moisture
          and degrades progressively as salt leaches into surrounding soil
        </p>
        <br />
        <p>
          • Conventional systems require regular watering to maintain performance
          — impractical in areas with limited water availability
        </p>
        <br />
        <p>
          • Corrosion rates are high, leading to electrode degradation and rising
          resistance over time
        </p>
        <br />
        <p>
          • Lack of standardisation in materials and installation produces
          inconsistent performance across installations
        </p>
        <br />
        <p>
          • Effective service life: 3–5 years — resulting in high lifecycle cost
          despite low initial investment
        </p>
      </>
    ),
    subsections: null,
  },
  {
    label: "GROUNDING – SOIL BEHAVIOUR",
    nav: "GROUNDING – SOIL\nBEHAVIOUR",
    title: "GROUNDING – SOIL BEHAVIOUR",
    content: (
      <>
        <p>
          • The performance of grounding systems is heavily influenced by the
          properties of the surrounding soil.
        </p>
        <br />
        <p>
          • A large portion of earth resistance is concentrated in a small area
          around the electrode.
        </p>
        <br />
        <p>
          • Improving soil conductivity near the electrode significantly reduces
          overall resistance.
        </p>
        <br />
        <p>
          • Approximately 30–50% of total resistance lies within the first
          75–100 mm of soil.
        </p>
        <br />
        <p>
          • Soil resistivity varies based on moisture, temperature, and
          composition.
        </p>
        <br />
        <p>
          • These variations must be considered during the design stage for
          reliable performance.
        </p>
        <br />
        <p>
          • Using scientific analysis of soil behaviour helps design efficient
          grounding systems with optimal results and minimal resources.
        </p>
      </>
    ),
    image: "/Earthing-Grounding/Image 25.png",
    subsections: null,
  },
  {
    label: "GROUNDING TYPES — AT A GLANCE",
    nav: "GROUNDING TYPES\n— AT A GLANCE",
    title: "GROUNDING TYPES — AT A GLANCE",
    content: (
      <>
        <p>
          • <span className="text-[#C02429]">Conventional (Salt + Charcoal):</span>{" "}
          Electrolytic conduction, moisture-dependent, high corrosion, frequent
          maintenance, 3–5 year life — high lifecycle cost
        </p>
        <br />
        <p>
          • <span className="text-[#C02429]">Chemical (Bentonite):</span>{" "}
          Electrolytic conduction, moisture-dependent, moderate corrosion,
          periodic maintenance, 5–7 year life — medium lifecycle cost
        </p>
        <br />
        <p>
          • <span className="text-[#C02429]">JEF Maintenance-Free (Carbon-Based):</span>{" "}
          Electronic conduction, moisture-independent, very low corrosion, zero
          maintenance, 15+ year life — low lifecycle cost
        </p>
      </>
    ),
    subsections: null,
  },
  {
    label: "CARBON-BASED BACKFILL",
    nav: "CARBON-BASED\nBACKFILL",
    title: "CARBON-BASED BACKFILL — THE TECHNOLOGY DIFFERENCE",
    content: (
      <>
        <p>
          • Conducts electricity electronically, like a metal — not
          electrolytically. Zero moisture dependence
        </p>
        <br />
        <p>
          • Chemically stable: no leaching, no environmental contamination, no
          corrosion risk to the electrode
        </p>
        <br />
        <p>
          • Dimensionally stable: does not shrink or expand, maintaining
          consistent contact with the electrode throughout its service life
        </p>
        <br />
        <p>
          • Result: consistent, maintenance-free performance across all soil
          conditions for 15+ years
        </p>
      </>
    ),
    subsections: [
      {
        tags: ["Grounding Types"],
        tagImages: ["/Earthing-Grounding/GorundingTypes.png"],
      },
    ],
  },
  {
    label: "COPPER BONDED EARTHING RODS",
    nav: "COPPER BONDED\nEARTHING RODS",
    title: "COPPER BONDED EARTHING RODS",
    content: (
      <>
        <p>
          • High-tensile low-carbon steel core with molecularly bonded copper
          layer (100–250 microns) — combining mechanical strength with corrosion
          resistance
        </p>
        <br />
        <p>
          • Can be driven deep into difficult soils without damage — extendable
          using standard couplers
        </p>
        <br />
        <p>
          • Outperforms GI rods on corrosion resistance and lifespan; outperforms
          solid copper rods on strength and cost
        </p>
        <br />
        <p>
          • Tested to IEC 62561-2: coating thickness, adhesion, bend strength,
          tensile strength, and corrosion resistance all independently verified
        </p>
      </>
    ),
    subsections: [
      {
        tags: ["Earth Rods – Detailed Comparison"],
        tagImages: ["/Earthing-Grounding/EarthRods.png"],
      },
    ],
  },
  {
    label: "MAINTENANCE-FREE EARTHING SYSTEM",
    nav: "MAINTENANCE-\nFREE EARTHING\nSYSTEM",
    title:
      "MAINTENANCE-FREE EARTHING SYSTEM (COPPER BONDED ROD + CARBON BACKFILL)",
    content: (
      <>
        <p>
          • Engineered combination of copper bonded electrode and carbon-based
          conductive backfill — designed for zero maintenance over the
          installation&apos;s full service life.
        </p>
        <br />
        <p>
          • Up to 30–50% of total earth resistance is concentrated within the
          first 75–100 mm of soil around the electrode — improving conductivity
          at this critical zone using JEF&apos;s specially formulated carbon based
          backfill “JEF ECOSAFE” has the greatest impact on system performance
        </p>
        <br />
        <p>
          • Performs consistently across a wide range of soil resistivity
          conditions — including dry, high-resistivity, and chemically
          aggressive soils
        </p>
        <br />
        <p>
          • Lower total cost of ownership than conventional systems when
          evaluated over a 10–15 year lifecycle
        </p>
      </>
    ),
    subsections: [
      {
        tags: ["TESTING AND QUALITY ASSURANCE", "DESIGN ENGINEERING"],
        tagDescriptions: [
          "• Earth rods tested to IEC 62561-2: coating thickness, adhesion, bend, tensile strength, and accelerated corrosion/environmental simulation\n\n• Backfill compounds tested to IEC 62561-7: corrosion impact, leach test, sulphur content (≤ 2%), resistivity, and environmental compliance\n\n• Every component in the JEF earthing system range is type-tested — performance is verified, not assumed",
          "• System design using CDEGS — modelling soil conditions, calculating step and touch potentials, and optimising grid geometry to meet IEEE 80 and IS 3043 safety requirements\n\n• Fault current levels, soil resistivity variation, and site-specific conditions are all incorporated at the design stage — not discovered at the installation stage\n\n• Simulation identifies potential deficiencies before excavation — reducing project risk and ensuring the installed system performs as designed",
        ],
      },
    ],
  },
  {
    label: "APPLICATIONS",
    nav: "APPLICATIONS",
    title: "APPLICATIONS",
    content: (
      <>
        <p>
          • Solar and wind farms — reliable performance in dry, high-resistivity
          soils where conventional systems degrade rapidly
        </p>
        <br />
        <p>
          • EHV and HV substations — designed to IEEE 80 for step and touch
          potential compliance under maximum fault current conditions
        </p>
        <br />
        <p>
          • Industrial process plants and manufacturing facilities — stable
          earthing for sensitive control systems and high-load equipment
        </p>
        <br />
        <p>
          • Commercial buildings, data centres, hospitals, and infrastructure —
          safety, regulatory compliance, and equipment protection
        </p>
      </>
    ),
    subsections: null,
  },
];

const PROGRESS_DURATION = 6000;
const PROGRESS_INTERVAL = 50;

const DetailedContent = () => {
  const [activePage, setActivePage] = useState(0);
  const [activeTags, setActiveTags] = useState({});
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
    <section className="bg-[#161414] font-montserrat py-10 md:pt-16 md:pb-12 overflow-hidden min-h-[800px] flex flex-col">
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
          className="text-[#C02429] text-[20px] md:text-[26px] font-bold tracking-[1px] md:tracking-[1.49px] leading-[1.4] uppercase"
        >
          {page.title}
        </motion.h2>

        <div className="w-full relative z-20 flex-1">
          <motion.div
            key={`content-${activePage}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className={`flex gap-8 ${
              page.image ? "flex-col lg:flex-row lg:items-start" : "flex-col"
            }`}
          >
            <div className="flex flex-col flex-1">
              {React.Children.map(page.content.props.children, (child, i) => {
                if (child.type === "p") {
                  return (
                    <p
                      key={i}
                      className="text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[1.7] text-white text-justify"
                    >
                      {child.props.children}
                    </p>
                  );
                }
                return child;
              })}
            </div>

            {page.image && (
              <motion.img
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                src={page.image}
                alt={page.title}
                className="w-full max-w-[330px] lg:max-w-[360px] object-contain mx-auto lg:mx-0"
              />
            )}
          </motion.div>

          {page.subsections?.map((sub, si) => (
            <div key={si} className="mt-8">
              {sub.tags && (
                <div className="flex flex-wrap gap-x-8 gap-y-4 mb-5">
                  {sub.tags.map((tag, ti) => (
                    <button
                      key={ti}
                      onClick={() =>
                        setActiveTags((prev) => ({
                          ...prev,
                          [si]: prev[si] === ti ? undefined : ti,
                        }))
                      }
                      className="text-[#C02429] text-[14px] md:text-[16px] font-medium underline underline-offset-4 text-left"
                    >
                      • {tag}
                    </button>
                  ))}
                </div>
              )}

              <AnimatePresence mode="wait">
                {activeTags[si] !== undefined && sub.tagImages?.[activeTags[si]] && (
                  <motion.img
                    key={`tag-img-${si}-${activeTags[si]}`}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 18 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    src={sub.tagImages[activeTags[si]]}
                    alt={sub.tags[activeTags[si]]}
                    className="mt-5 w-full max-w-[520px] object-contain"
                  />
                )}

                {activeTags[si] !== undefined &&
                  sub.tagDescriptions?.[activeTags[si]] && (
                    <motion.p
                      key={`tag-desc-${si}-${activeTags[si]}`}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 18 }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                      className="mt-5 whitespace-pre-line text-[15px] md:text-[18px] lg:text-[20px] font-normal leading-[1.7] text-white/90"
                    >
                      {sub.tagDescriptions[activeTags[si]]}
                    </motion.p>
                  )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-20 pb-4">
  <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 overflow-hidden">
    {pages
      .slice(
        Math.min(
          Math.max(activePage - 2, 0),
          Math.max(pages.length - 5, 0)
        ),
        Math.min(
          Math.max(activePage - 2, 0),
          Math.max(pages.length - 5, 0)
        ) + 5
      )
      .map((tab, visibleIndex) => {
        const startIndex = Math.min(
          Math.max(activePage - 2, 0),
          Math.max(pages.length - 5, 0)
        );

        const realIndex = startIndex + visibleIndex;
        const isCurrent = activePage === realIndex;

        return (
          <button
            key={realIndex}
            onClick={() => handleTabClick(realIndex)}
            className="bg-none border-none cursor-pointer flex flex-col items-start w-full group"
          >
            <div className="w-full h-[2px] bg-[#d4d0c8] mb-3 relative z-10">
              <motion.div
                className="absolute top-0 left-0 h-full bg-[#C02429]"
                animate={{ width: isCurrent ? `${progress}%` : "0%" }}
                transition={{ ease: "linear" }}
              />
            </div>

            <span
              className={`text-[10px] md:text-[12px] tracking-[1px] font-medium uppercase mt-1 transition-all duration-300 text-left whitespace-pre-line ${
                isCurrent
                  ? "text-[#C02429]"
                  : "text-[#d4d0c8] group-hover:text-white"
              }`}
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
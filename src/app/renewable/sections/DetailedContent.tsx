"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const pages = [
  {
    label: "POWER SYSTEM STUDIES",
    nav: "POWER SYSTEM\nSTUDIES",
    title: "POWER SYSTEM STUDIES",
    content: (
      <>
        <p>
          We offer a very wide and comprehensive range of Power System Studies
          for Renewable Energy applications including Solar PV, WIND, BESS,
          Hybrid & Green hydrogen plants & Micro grids.
        </p>
        <br />
        <p>
          With experience in Grid codes of several countries, we bring
          comprehensive knowledge & Expertise.
        </p>
        <br />
        <p>
          We have multiple licences & expertise in using all major Softwares
          like:
        </p>
        <br />
        <p>• PSSE</p>
        <p>• PSCAD</p>
        <p>• DIG SILENT</p>
        <p>• ETAP</p>
        <p>• EMTP RV</p>
        <p>• CDEGS</p>
        <br />
        <p>
          We have the ability to study any possible steady state, dynamic, EMT &
          Hormonic issues, in a new or existing plant.
        </p>
        <br />
        <p>
          Over the last 30 years, JEF has been synonymous with going the
          proverbial “EXTRA MILE” to ensure meeting the objectives of the project
          including technical aspects & timely completion.
        </p>
      </>
    ),
  },
  {
    label: "WHY CHOOSE US?",
    nav: "WHY CHOOSE US?",
    title: "WHY CHOOSE US?",
    content: (
      <>
        <p>
          With our patented & unique custom designed & developed automation
          tool, we offer unparalleled customer service & have consistently
          ‘delighted’ our customers with the quality, completeness and timeliness
          of our work product.
        </p>
      </>
    ),
  },
  {
    label: "LIST OF STUDIES FOR RENEWABLE ENERGY",
    nav: "LIST OF STUDIES FOR\nRENEWABLE ENERGY",
    title: "LIST OF STUDIES FOR RENEWABLE ENERGY",
    content: (
      <>
        <p>
          •{" "}
          <span className="text-[#C02429] font-bold tracking-[1px]">
            GRID INTEGRATION STUDIES (FOR SOLAR, WIND, BESS, HYBRID, GREEN
            HYDROGEN)
          </span>
        </p>
        <br />
        <p>• Steady State Analysis</p>
        <p>• Reactive Power Capability Analysis</p>
        <p>• Transient Studies</p>
        <p>• Grid Code Compliance Studies</p>
        <p>• Dynamic grid impact studies</p>
        <p>• Dynamic Model Acceptance test</p>
        <p>• Power Quality Analysis</p>
        <p>• Insulation Co-ordination Studies</p>
        <p>• Protection & Relay Co-ordination Studies</p>
        <p>• AC/DC Arc flash studies</p>
        <p>• Model Validation test</p>
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
    setIsPaused(false);
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
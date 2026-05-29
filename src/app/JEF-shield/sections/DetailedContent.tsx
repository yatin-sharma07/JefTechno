"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type TagDescription = {
  title: string;
  description: string;
};

type Subsection = {
  heading: string;
  tags?: string[];
  body?: string;
  isListOnly?: boolean;
  layout?: "row" | "col" | string;
  customContent?: React.ReactNode;
  tagDescriptions?: Array<TagDescription | null | undefined>;
  footer?: string;
};

type PageItem = {
  label: string;
  nav: string;
  title: string;
  content: React.ReactElement<{ children?: React.ReactNode }>;
  subsections?: Subsection[] | null;
};

const pages: PageItem[] = [
  {
    label: "JEF SHIELD",
    nav: "JEF\nSHIELD",
    title: "JEF SHIELD - AUTOMATED RISK ASSESSMENT AND DESIGN",
    content: (
      <>
        <p>
          A lightning protection risk assessment to IS/IEC 62305-2 involves a
          structured calculation process that accounts for the characteristics
          of the structure, its contents, its use, its location, and the
          lightning activity in the area. When carried out manually, this
          process is time-consuming and requires specialist knowledge. Errors
          in input data or calculation steps can result in either an
          under-specified system or an over-specified one that increases
          project cost unnecessarily.
        </p>

        <br />

        <p>
          JEF SHIELD automates this process. It takes the relevant input data
          about the structure and produces a complete set of project
          deliverables - including the risk assessment, concept design drawings,
          and bill of materials - in under 90 seconds.
        </p>

        <br />

        <p>
          JEF SHIELD is built to IS/IEC 62305. It is developed and maintained
          by JEF Group and is designed for the requirements of the Indian and
          overseas market.
        </p>
      </>
    ),
    subsections: [
      {
        heading: "",
        tags: [
          "Risk Assessment and LPL Determination",
          "Concept Design with 3D Visualization",
          "Bill of Materials and Cost Estimate",
          "Drawing Upload and Detailed Engineering",
          "Project Dashboard",
        ],
        isListOnly: false,
        layout: "col",
        tagDescriptions: [
          {
            title: "Risk Assessment and LPL Determination",
            description:
              "Calculates the lightning risk for the structure in accordance with IS/IEC 62305-2. Determines whether protection is required and at which LPL. Identifies the most cost-effective protection combination by comparing calculated risk against tolerable levels across combinations of external and internal protection measures.",
          },
          {
            title: "Concept Design with 3D Visualization",
            description:
              "Generates concept design drawings showing air termination layout, down conductor routing, and earth termination arrangement. Outputs include 3D model views and installation detail references.",
          },
          {
            title: "Bill of Materials and Cost Estimate",
            description:
              "Produces a structured bill of materials aligned with the concept design and a budget estimate for tendering and financial planning. The optimisation function identifies the combination of external LPL and LEMP protection measures that meets the required risk level at minimum cost - a calculation impractical to perform manually across all possible combinations.",
          },
          {
            title: "Drawing Upload and Detailed Engineering",
            description:
              "Users can upload site and building drawings for incorporation into the design output. The tool supports progression from concept design to detailed engineering deliverables.",
          },
          {
            title: "Project Dashboard",
            description:
              "All projects are stored in a secure, retrievable environment. Access is controlled by one-time password (OTP) authentication. Projects can be retrieved and modified at any time.",
          },
        ],
      },
    ],
  },
  {
  label: "JEF E-BUILD",
  nav: "JEF\nE-BUILD",
  title: "JEF E-BUILD — GUIDED INSTALLATION WITH REMOTE SUPERVISION",
  content: (
    <>
      <p>
        The performance of a comprehensive lightning protection system depends
        as much on the quality of its installation as on the quality of its
        design. A correctly designed system installed with poorly made
        connections, incorrectly routed conductors, or missing test joints will
        not perform to specification when a strike occurs. The gap between the
        design drawing and the installed reality is typically invisible until
        it matters.
      </p>

      <br />

      <p>
        JEF E-BUILD addresses this through a structured, step-by-step
        installation monitoring platform. Installation teams — including those
        without deep LPS expertise — work through the installation process
        under real-time supervision from qualified engineers who review each
        completed stage remotely before the team proceeds to the next.
      </p>
    </>
  ),
  subsections: [
    {
      heading: "",
      tags: [
        "Guided Installation Workflow",
        "Real-Time Remote Supervision",
        "Remote Certification",
        "Accessible Installation Process",
      ],
      isListOnly: false,
      layout: "col",
      tagDescriptions: [
        {
          title: "Guided Installation Workflow",
          description:
            "The platform guides the field team through each stage of the LPS installation in the correct sequence — air termination, conductor routing, connection making, test joint installation, earthing, and bonding — with defined quality checkpoints at each stage.",
        },
        {
          title: "Real-Time Remote Supervision",
          description:
            "Qualified back-end engineers review the completed work at each stage before the installation proceeds. Non-compliant or incorrectly completed work is identified immediately, while it can still be corrected, rather than after it has been built over.",
        },
        {
          title: "Remote Certification",
          description:
            "Upon validation of all stages, installation certificates are issued remotely by the supervising engineers. The client receives a documented installation record aligned with the inspection documentation requirements of IEC 62305-3.",
        },
        {
          title: "Accessible Installation Process",
          description:
            "The guided workflow makes a compliant installation achievable by teams that include semi-skilled workers, provided they operate under the supervision layer the platform provides.",
        },
      ],
    },
  ],
}
];

const PROGRESS_DURATION = 6000;
const PROGRESS_INTERVAL = 50;

const DetailedContent = () => {
  const [activePage, setActivePage] = useState<number>(0);
  const [activeTags, setActiveTags] = useState<Record<number, number>>({});
  const [progress, setProgress] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (isPaused) {
      clearInterval(intervalRef.current);
      return;
    }

    if (startTimeRef.current === null) {
      startTimeRef.current = Date.now();
    } else {
      startTimeRef.current = Date.now() - PROGRESS_DURATION * (progress / 100);
    }

    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const pct = Math.min((elapsed / PROGRESS_DURATION) * 100, 100);
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(intervalRef.current);
        const next = (activePage + 1) % pages.length;
        setActivePage(next);
        setActiveTags({});
        setProgress(0);
        startTimeRef.current = Date.now();
      }
    }, PROGRESS_INTERVAL);

    return () => clearInterval(intervalRef.current);
  }, [activePage, isPaused, progress]);

  const handleTabClick = (index) => {
    setActivePage(index);
    setActiveTags({});
    setProgress(0);
    startTimeRef.current = Date.now();
  };

  const page = pages[activePage];

  return (
    <section className="bg-[#161414] font-montserrat py-10 md:pt-16 md:pb-12 overflow-hidden min-h-[1000px] flex flex-col">
      <div className="section-container flex flex-col flex-1 gap-6 md:gap-8">
        <motion.h2
          key={`title-${activePage}`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#C02429] text-[20px] md:text-[26px] font-bold tracking-[1px] md:tracking-[1.49px] leading-[1.4] md:line-height-[60px] uppercase"
        >
          {page.title}
        </motion.h2>

        <div className="w-full relative z-20 flex-1">
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
                  const paragraphChild =
                    child as React.ReactElement<{ children?: React.ReactNode }>;

                  return (
                    <p
                      key={i}
                      className="text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[1.5] text-white text-justify"
                    >
                      {paragraphChild.props.children}
                    </p>
                  );
                }
                return child;
              })}
            </motion.div>
          </div>

          {page.subsections &&
            page.subsections.map((sub, si) => (
              <div key={si} className="mt-2 ">
                {sub.heading && (
                  <h3 className="text-[#C02429] text-[18px] md:text-[20px] font-bold tracking-[1px] leading-[1.4] uppercase mb-4">
                    {sub.heading}
                  </h3>
                )}

                <div className="min-h-[50px]">
                  <AnimatePresence mode="wait">
                    {activeTags[si] !== undefined &&
                    sub.tagDescriptions?.[activeTags[si]] ? (
                      <motion.div
                        key={`tag-desc-${si}-${activeTags[si]}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                        className="flex flex-col gap-4 mb-4 mt-5 mb-5"
                      >
                        <h4 className="text-[#C02429] text-[16px] md:text-[18px] lg:text-[20px] font-bold uppercase">
                          {sub.tagDescriptions[activeTags[si]].title}
                        </h4>
                        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[1.5] text-white whitespace-pre-line">
                          {sub.tagDescriptions[activeTags[si]].description}
                        </p>
                        <button
                          onClick={() => setActiveTags({})}
                          className="text-[#C02429] text-[14px] uppercase font-bold hover:underline w-fit"
                        >
                          &larr; Back to overview
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
                            <p
                              key={pi}
                              className="text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[1.5] text-white/80 text-justify"
                            >
                              {para}
                            </p>
                          ))}
                        </motion.div>
                      )
                    )}
                  </AnimatePresence>
                </div>

                {sub.tags && (
                  <div
                    className={`flex flex-wrap gap-x-8 gap-y-4 mb-6 ${
                      sub.layout === "col"
                        ? "flex-col"
                        : "flex-row items-center"
                    }`}
                  >
                    {sub.tags.map((tag, ti) => {
                      const isActive = activeTags[si] === ti;
                      const isInteractive =
                        sub.tagDescriptions &&
                        sub.tagDescriptions[ti] !== null &&
                        sub.tagDescriptions[ti] !== undefined;

                      if (!isInteractive) {
                        return (
                          <div
                            key={ti}
                            className="flex items-center gap-3 text-white/90"
                          >
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
              </div>
            ))}
        </div>

        <div className="mt-8 md:mt-12 pb-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {pages.map((tab, index) => (
              <button
                key={index}
                onClick={() => handleTabClick(index)}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="bg-none border-none cursor-pointer flex flex-col items-start w-full group"
              >
                <div className="w-full h-[2px] bg-[#d4d0c8] mb-3 relative z-10">
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-[#C02429]"
                    initial={{ width: 0 }}
                    animate={{
                      width: activePage === index ? `${progress}%` : "0%",
                    }}
                    transition={{ ease: "linear" }}
                  />
                </div>

                <span
                  className={`
                    text-[12px] md:text-[18px]
                    tracking-[1px] md:tracking-[2.5px]
                    font-medium
                    uppercase
                    mt-1
                    transition-all
                    duration-300
                    
                    text-left
                    ${
                      activePage === index
                        ? "text-[#C02429]"
                        : "text-[#d4d0c8] group-hover:text-white"
                    }
                  `}
                >
                  {tab.nav}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedContent;

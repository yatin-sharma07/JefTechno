"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import gsap from "gsap";
import Link from "next/link";
import ArrowButton from "@/components/ArrowButton";

const LPS = () => {
  {
    /*LIGHTNING PROTECTION SOLUTIONS */
  }
  const [showLightningPanel, setShowLightningPanel] = useState(false);

  useEffect(() => {
    if (showLightningPanel) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showLightningPanel]);

  {
    /*The Lightning Protection Solution Content */
  }

  const pages = [
    {
      label: "LIGHTNING THREAT AND WHY PROTECTION",
      nav: "LIGHTNING THREAT\nAND WHY\nPROTECTION",
      title: "THE LIGHTNING THREAT AND WHY PROTECTION IS REQUIRED",
      content: (
        <>
          <p>
            Lightning is a high-energy electrical discharge between the
            atmosphere and the ground. The damage it causes to structures,
            equipment, and people falls into two broad categories. The first is
            direct physical damage. A lightning strike that terminates on a
            structure releases a large current — which may range from a few
            kiloamperes to several hundred kiloamperes depending on the severity
            of the event — into whatever path it finds to ground. If that path
            runs through the structural fabric of the building, through fuel or
            gas services, or through people in the vicinity, the consequences
            include fire, structural damage, explosion, and loss of life.
          </p>
          <p>
            The second is damage to electrical and electronic systems. Even when
            a strike does not contact a structure directly, the electromagnetic
            field associated with the lightning channel induces transient
            overvoltages onto cables and conductors within and around the
            building. These voltage spikes can destroy microelectronic
            components, corrupt data, cause equipment to fail in ways that are
            not immediately visible, and progressively shorten the service life
            of insulation systems and electronic assemblies.
          </p>
          <p>
            Modern industrial and commercial facilities are heavily dependent on
            electronic control systems, communications infrastructure, and data
            networks. The consequences of lightning damage to these systems
            extend well beyond the cost of the damaged equipment — they include
            production downtime, data loss, safety system unavailability, and
            regulatory non-compliance.
          </p>
          <p>
            A comprehensive lightning protection system addresses both
            categories of threat. The external system intercepts direct strikes
            and conducts their energy safely to ground. The internal system —
            equipotential bonding and surge protective devices — manages the
            overvoltages that would otherwise reach the electrical and
            electronic systems inside the building.
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
          <p>
            The 2024 edition is a full technical revision of the previous 2010
            edition, developed over an extended period by international
            technical committees. It introduces updated risk assessment methods,
            revised design requirements for the external system, clearer
            guidance on separation distances, and strengthened requirements for
            the protection of electronic systems and photovoltaic installations.
          </p>
        </>
      ),
      subsections: [
        {
          heading: "THE FOUR PARTS",
          tags: [
            "IEC 62305-1:2024 — General Principles",
            "IEC 62305-2:2024 — Risk Management",
            "IEC 62305-3:2024 — Physical Damage",
            "IEC 62305-4:2024 — Electrical & Electronic",
          ],
tagDescriptions: [
  {
    title: "IEC 62305-1:2024 — General Principles",
    description:
      "Sets out the overall principles and structure of the standard series, including the nature of the lightning threat, the characteristics of lightning current, and the basis on which protection measures are selected. The 2024 edition introduces formal references to the IEC 62561 product testing series, creating an explicit link between system design requirements and the component performance standards that govern the products used to build those systems. Surge current parameters used for SPD selections are also more precisely defined.",
  },

  {
    title: "IEC 62305-2:2024 — Risk Management",
    description:
      "Provides the methodology for determining whether a structure requires lightning protection and to what level of protection. The 2024 revision consolidates separate risk categories — previously assessed independently — into a single total risk value, simplifying the assessment process. It replaces the previous lightning flash density parameter (Ng) with a ground strike-point density parameter (NSG), giving a more precise basis for estimating the number of hazardous events at a given location. The revised standard formally recognizes Thunderstorm Warning Systems as a tool that can reduce calculated risk in certain applications, and introduces frequency of damage to the assessment of impacts on the availability of critical internal systems.",
  },

  {
    title:
      "IEC 62305-3:2024 — Physical Damage to Structures and Life Hazard",
    description:
      "Defines the design, installation, inspection, and maintenance requirements for the external lightning protection system — the air termination, down conductors, and earthing. The 2024 revision introduces specified minimum thicknesses for metal sheet components used in air termination, addressing the risk that thin materials may be perforated or develop hot spots under lightning current. It provides more detailed treatment of air termination positioning methods for structures with complex geometries, including green roofs and projecting façade elements. It clarifies the two available approaches for separation distance calculation — a general method and a simplified method — LPS Products strengthens cross-referencing to the IEC 62561 component testing standards.",
  },

  {
    title:
      "IEC 62305-4:2024 — Electrical and Electronic Systems within Structures",
    description:
      "Covers the protection of internal electrical and electronic installations against the effects of lightning electromagnetic pulse (LEMP). The 2024 update aligns SPD selection requirements with the IEC 60364 series of electrical installation standards and introduces explicit references to IEC 61643-32 for the protection of photovoltaic systems. Requirements relating to SPD backup fuse dimensioning and status monitoring are also addressed.",
  },
]
        },
        {
          heading: "LIGHTNING PROTECTION LEVELS",
          body: "IEC 62305 defines four Lightning Protection Levels — LPL I through LPL IV. Each level corresponds to a defined set of design parameters, including the lightning current values used for component selection and the geometric parameters used for air termination design. The appropriate LPL for a given structure is determined through the risk assessment process under IEC 62305-2.",
          tags: ["LPL I", "LPL II", "LPL III", "LPL IV"],
            tagDescriptions: [
    {
      title: "LPL I",
      description:
        "• Highest interception probability\n\n• 200 kA peak\n\n• Computer data centers, military applications, high rise hotels/hospitals, nuclear power stations, airport essential services such as telecom",
    },

    {
      title: "LPL II",
      description:
        "• High interception probability\n\n• 150 kA peak\n\n• Low rise hotels/hospitals, ex zones in the industry and chemical sector, fuel retail outlets/gas stations/compressor stations and similar installations",
    },

    {
      title: "LPL III",
      description:
        "• Medium interception probability\n\n• 100 kA peak\n\n• Schools, banks, residential buildings, temples, churches, mosques, community halls etc.",
    },

    {
      title: "LPL IV",
      description:
        "• Standard interception probability\n\n• 100 kA peak\n\n• Schools, banks, residential buildings, temples, churches, mosques, community halls etc.",
    },
  ],
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
            IEC 62305:2024 treats lightning protection as a system with two
            interdependent parts. Each addresses a distinct category of threat,
            and neither is adequate on its own.
          </p>
          <p>
            The external lightning protection system manages the direct
            lightning strike event. It intercepts the strike at the air
            termination, provides a defined current path down the structure
            through the down conductor system, and disperses the energy safely
            into the ground through the earth termination. Its primary function
            is to protect the structure from physical damage and fire, and to
            prevent dangerous touch and step voltages in the vicinity of the
            building.
          </p>
          <p>
            The internal lightning protection system manages the electrical
            consequences of a strike within the building. It uses equipotential
            bonding to eliminate dangerous potential differences between the LPS
            conductors and the metallic services, structural elements, and
            electrical systems inside the structure. Surge Protective Devices
            installed on all electrical and electronic lines limit the transient
            overvoltages that enter the building — whether from the strike event
            or from internal switching activity — to levels that connected
            equipment can safely withstand.
          </p>
          <p>
            IEC 62305-3 requires that both parts of the comprehensive lightning
            protection system be maintained and periodically inspected after
            installation, with inspection intervals determined by the LPL and
            the environmental conditions at the site.
          </p>
        </>
      ),
      subsections: [
        {
          heading: "EXTERNAL LIGHTNING PROTECTION",
          tags: [
            "Air Termination System",
            "Air Termination Positioning Methods",
            "Permitted Air Termination Types",
            "Down Conductor System",
            "Earth Termination System",
            "Equipotential Bonding",
          ],
           tagDescriptions : [
    {
      title: "Air Termination System",
      description:
        "The air termination system is positioned at the highest and most exposed points of the structure — the locations where a lightning leader is most likely to terminate. By placing conductors and rods at these positions and connecting them to the down conductor system, the air termination gives the strike a defined entry point into the protected system, rather than allowing it to contact uncontrolled elements of the structure such as cladding, roofing materials, or building services.",
    },

    {
      title: "Air Termination Positioning Methods (IEC 62305-3:2024)",
      description:
        "Three positioning methods are recognised under IEC 62305-3. The 2024 revision provides more detailed guidance on their application to complex and modern structures:\n\n• Rolling Sphere Method\n\n• Mesh Method\n\n• Protective Angle Method",
    },

    {
      title: "Permitted Air Termination Types",
      description:
        "An air termination system may use any combination of the following:\n\n• Vertical rods and masts — rod terminations at high points, including free-standing masts where elevated protection is needed\n\n• Horizontal conductors — tape or round conductors routed along roof edges, ridges, and exposed perimeter positions\n\n• Mesh conductors — conductor grids laid across flat or low-pitch roof surfaces\n\n• Catenary wires — conductors suspended between elevated points to protect the spaces beneath\n\n• Natural components — metallic elements permanently part of the structure, such as metal roof decking, reinforced concrete reinforcement, and metal facades, where they meet the dimensional and electrical continuity requirements of IEC 62305-3:2024\n\nAll air termination elements must be interconnected to form a continuous network. Down conductor connections must be made at regular intervals around the perimeter. Where conductors cross structural expansion joints, expansion connectors rated for lightning current must be used.",
    },

    {
      title: "Down Conductor System",
      description:
        "Down conductors carry the lightning current from the air termination network at roof level down to the earthing system at or below ground level. They are the vertical current-carrying spine of the external lightning protection system and must be designed to handle the full magnitude of the design current for the selected LPL — up to 200 kA for LPL I systems — without creating arc-over hazards to adjacent metalwork or building services.",
    },

    {
      title: "Earth Termination System",
      description:
        "The earth termination system is the final element of the external lightning protection system — the point at which the electrical energy is transferred from the conductors into the surrounding soil. The entire protective function of the external system depends on this transfer being performed effectively and without raising the potential of the structure to dangerous levels.\n\nLightning current contains significant high-frequency content. The performance requirement for the earthing system is therefore defined in terms of impulse impedance — not merely the steady-state resistance measured by conventional earth testing equipment. An earthing system showing an acceptable DC resistance may still perform inadequately under lightning impulse conditions if it has not been designed with this distinction in mind.",
    },

    {
      title: "Equipotential Bonding",
      description:
        "When lightning current flows through the down conductors and into the earth, it raises the electrical potential of the entire LPS — conductors, bonded metalwork, and earthing system — relative to any conductive objects not connected to it. If the potential difference between the LPS and an adjacent metallic service or structural element becomes large enough, a disruptive discharge will occur across the gap between them. This side flash can ignite combustible materials, damage electrical equipment, and cause injury or death.\n\nEquipotential bonding prevents this by connecting all conducting elements within and entering the structure to the LPS, so that every conducting part rises to approximately the same potential simultaneously during a strike. Where a permanent metal connection cannot be made — for example between the LPS and an active electrical conductor — a surge protective device rated for the expected partial lightning current is used in its place.",
    },
  ],
        },
        
      ],
    },
    {
      label: "JEF CLPS PRODUCTS",
      nav: "JEF CLPS\nPRODUCTS",
      title: "JEF CLPS PRODUCTS — TYPE-TESTED TO 200 KA / 10/350 MS",
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
          body: "The IEC 62561 series specifies that external LPS components be type-tested to a 10/350 μs lightning impulse current. JEF type-tests its CLPS components at 200 kA on the 10/350 μs waveform — double the limit specified in the IEC standard series. This means that every JEF CLPS component has been verified to withstand twice the current magnitude that the standard requires, providing a margin of confidence that standard-minimum testing does not.\n\nType testing covers three sequential stages:",
          tags: ["Ageing Test", "Lightning Impulse Test", "Mechanical Test"],
          tagDescriptions: [
  {
    title: "Ageing Test",
    description:
      "The component is subjected to a defined sequence of environmental exposure — humidity, salt mist, sulphur, and electrical impulse testing — to simulate long-term service conditions and verify that performance characteristics remain within acceptable limits after environmental ageing.",
  },

  {
    title: "Lightning Impulse Test — 10/350 µs Waveform",
    description:
      "The component is subjected to the specified lightning impulse current on the 10/350 µs waveform defined by IEC 62561. JEF tests its CLPS components at up to 200 kA — double the IEC standard limit — verifying that the component withstands the thermal, mechanical, and electrical stresses generated during the impulse event without failure or unacceptable deformation.",
  },

  {
    title: "Mechanical Test",
    description:
      "The component is tested for mechanical strength and structural integrity under the loading conditions expected during installation and service. Testing includes pull-out, bending, clamping, tightening torque, and dimensional verification depending on the specific component type.",
  },
],
          footer:
            "Type-test documentation is available for review. Certificates can be requested from JEF's engineering team.",
        },
      ],
    },
  ];

  const PROGRESS_INTERVAL = 50;
  const PROGRESS_DURATION = 6000;

  function LightningProtectionSolutionsContent() {
    const [activePage, setActivePage] = useState(0)
    const [activeTag, setActiveTag] = useState(null);
    const [progress, setProgress] = useState(0);
    const intervalRef = useRef(null);
    const startTimeRef = useRef(null);

    const startProgress = (pageIndex) => {
      clearInterval(intervalRef.current);
      setProgress(0);
      startTimeRef.current = Date.now();
      intervalRef.current = setInterval(() => {
        const elapsed = Date.now() - startTimeRef.current;
        const pct = Math.min((elapsed / PROGRESS_DURATION) * 100, 100);
        setProgress(pct);
        if (pct >= 100) {
          clearInterval(intervalRef.current);
          const next = (pageIndex + 1) % pages.length;
          setActivePage(next);
          startProgress(next);
        }
      }, PROGRESS_INTERVAL);
    };

    useEffect(() => {
      startProgress(0);
      return () => clearInterval(intervalRef.current);
    }, []);

    const handleTabClick = (index) => {
      setActivePage(index);
      startProgress(index);
    };

    const page = pages[activePage];

    return (
      <div
        style={{
          backgroundColor: "#F9F7F2",
          minHeight: "980px",
          fontFamily: "Montserrat, sans-serif",
          overflowX: "hidden", // ✅ FIXED
        }}
      >
        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }
      `}</style>

        {/* Main Content */}
        <div
          style={{
            maxWidth: "1389px",
            width: "100%",
            margin: "0 auto",
            padding: "65px 40px 0 40px", // ✅ FIXED
            display: "flex",
            flexDirection: "column",
            gap: "41px",
          }}
        >
          {/* Heading */}
          <h1
            style={{
              color: "#C02429",
              fontSize: "26px",
              fontWeight: 700,
              letterSpacing: "1.49px",
              lineHeight: "60px",
              textTransform: "uppercase",
            }}
          >
            {page.title}
          </h1>

          {/* Content */}
         <div
  key={activePage}
  style={{
    animation: "fadeUp 0.55s cubic-bezier(0.22,1,0.36,1) both",
    width: "100%",
    position: "relative",
    zIndex: 20,
    isolation: "isolate",
  }}
>
            {/* Paragraphs */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "24px" }}
            >
              {React.Children.map(page.content.props.children, (child, i) => {
                if (child.type === "p") {
                  return (
                    <p
                      key={i}
                      style={{
                        fontSize: "20px",
                        fontWeight: 400,
                        lineHeight: "150%",
                        color: "#1a1a1a",
                      }}
                    >
                      {child.props.children}
                    </p>
                  );
                }
                return child;
              })}
            </div>

            {/* Subsections */}
            {page.subsections &&
              page.subsections.map((sub, si) => (
                <div key={si} style={{ marginTop: "41px" }}>
                  <h2
                    style={{
                      color: "#C02429",
                      fontSize: "20px",
                      fontWeight: 700,
                      letterSpacing: "1.49px",
                      lineHeight: "43.4px",
                      textTransform: "uppercase",
                      marginBottom: "20px",
                    }}
                  >
                    {sub.heading}
                  </h2>

                  {sub.body &&
                    sub.body.split("\n\n").map((para, pi) => (
                      <p
                        key={pi}
                        style={{
                          fontSize: "20px",
                          fontWeight: 400,
                          lineHeight: "150%",
                          color: "#1a1a1a",
                          marginBottom: "16px",
                        }}
                      >
                        {para}
                      </p>
                    ))}

                  {sub.tags && (
  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "12px",
      marginBottom: sub.footer ? "20px" : "0",
      position: "relative",
    }}
  >
    {sub.tags.map((tag, ti) => {
      const popup = sub.tagDescriptions?.[ti];

      return (
        <div
          key={ti}
          style={{
            position: "relative",
          }}
        >
          {/* TAG */}
          <span
            onClick={() =>
              setActiveTag(
                activeTag === `${si}-${ti}` ? null : `${si}-${ti}`
              )
            }
            style={{
              border: "1.5px solid #c8c4bc",
              borderRadius: "999px",
              padding: "8px 20px",
              fontSize: "14px",
              fontWeight: 400,
              cursor: "pointer",
              transition: "all 0.3s ease",
              background:
                activeTag === `${si}-${ti}`
                  ? "#C02429"
                  : "transparent",
              color:
                activeTag === `${si}-${ti}`
                  ? "#fff"
                  : "#333",
            }}
          >
            {tag}
          </span>

      {/* POPUP */}
{activeTag === `${si}-${ti}` && popup && (
  <div
    style={{
      position: "absolute",
      top: "58px",
      left: 0,
      width: "360px",
      background: "#fff",
      border: "1px solid #e5e0d8",
      padding: "28px",
      borderRadius: "16px",
      boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
      zIndex: 99999,
      animation:
        "fadeInPanel 0.35s cubic-bezier(0.22,1,0.36,1)",
    }}
  >
    {/* CLOSE BUTTON */}
    <button
      onClick={() => setActiveTag(null)}
      style={{
        position: "absolute",
        top: "14px",
        right: "14px",
        width: "32px",
        height: "32px",
        borderRadius: "999px",
        border: "none",
        background: "#C02429",
        color: "#fff",
        fontSize: "18px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "0.3s",
      }}
    >
      ×
    </button>

    {/* TITLE */}
    <h3
      style={{
        fontSize: "18px",
        fontWeight: 700,
        color: "black",
        marginBottom: "14px",
        lineHeight: "140%",
        paddingRight: "40px",
      }}
    >
      {popup.title}
    </h3>

    {/* DESCRIPTION */}
    <p
      style={{
        fontSize: "15px",
        lineHeight: "180%",
        color: "#444",
      }}
    >
      {popup.description}
    </p>
  </div>
)}
        </div>
      );
    })}
  </div>
)}
                  {sub.footer && (
                    <p
                      style={{
                        fontSize: "20px",
                        fontWeight: 400,
                        lineHeight: "150%",
                        marginTop: "20px",
                      }}
                    >
                      {sub.footer}
                    </p>
                  )}
                </div>
              ))}
          </div>
        </div>

        {/* Bottom Navigation */}
        <div
          style={{
            maxWidth: "1389px",
            width: "100%",
            margin: "60px auto 36px auto",
            padding: "0 40px",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "64px",
              flexWrap: "wrap", // ✅ FIXED
            }}
          >
            {pages.map((tab, index) => (
              <button
                key={index}
                onClick={() => handleTabClick(index)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  minWidth: "160px",
                }}
              >
                {/* Progress bar */}
                <div
                  style={{
                    width: "100%",
                    height: "2px",
                    backgroundColor: "#d4d0c8",
                    marginBottom: "10px",
                    position: "relative",
                    zIndex:10
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      height: "100%",
                      backgroundColor: "#C02429",
                      width: activePage === index ? `${progress}%` : "0%",
                    }}
                  />
                </div>

                {/* Label */}
                <span
                  style={{
                    fontSize: "13px",
                    letterSpacing: "1.49px",
                    textTransform: "uppercase",
                    fontWeight: activePage === index ? 600 : 400,
                    color: activePage === index ? "#1a1a1a" : "#888",
                    lineHeight: 1.5,
                    whiteSpace: "pre-line",
                  }}
                >
                  {tab.nav}
                </span>
              </button>
            ))}
          </div>
        </div>

        <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }

        }
          @keyframes fadeInPanel {
  from {
    opacity: 0;
    transform: translateY(12px) scale(0.98);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
      `}</style>
      </div>
    );
  }

  useEffect(() => {
    gsap.utils.toArray(".Y-axis-text-Title-Service2").forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: element,
            stagger: 0.6,
            start: "top 100%",
            toggleActions: "play none none none",
          },
        },
      );
    });
  }, []);

  // Testimonials

  useEffect(() => {
    gsap.fromTo(
      gsap.utils.toArray(".Y-axis-Testimonials"),
      { opacity: 0, y: 100 },
      {
        y: 0,
        opacity: 1,
        duration: 1.1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".Testimonials",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      },
    );
  }, []);

  // For Key Components

  useEffect(() => {
    gsap.fromTo(
      gsap.utils.toArray(".Y-axis-card-anm"),
      { opacity: 0, y: 100 },
      {
        y: 0,
        opacity: 1,
        duration: 1.1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".card-slider",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      },
    );
  }, []);

  // Our Services Animation

  useEffect(() => {
    gsap.fromTo(
      gsap.utils.toArray(".Y-axis-Service-anm"),
      { opacity: 0, y: 100 },
      {
        y: 0,
        opacity: 1,
        duration: 1.1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".circle-slider",
          start: "top 60%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      },
    );
  }, []);

  useEffect(() => {
    gsap.utils.toArray(".ContactUsAnimation").forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: element,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        },
      );
    });
  }, []);

  const services = useMemo(
    () => [
      { image: "", text: "", path: "" },
      { image: "", text: "", path: "" },
      {
        image: "./HomePageImg/WhatWeDoSection/Earthing Studies 2.png",
        text: "Grounding System Studies",
        path: "/grounding-system-studies",
      },
      {
        image: "./HomePageImg/WhatWeDoSection/Lightning Protection 2.png",
        text: "Lightning protection system studies",
        path: "/lightning-protection-studies",
      },
      {
        image: "./HomePageImg/WhatWeDoSection/Power System Studies 2.png",
        text: "Power system studies",
        path: "/power-system-studies",
      },
      {
        image:
          "./HomePageImg/WhatWeDoSection/Power Quality and Root cause Analysis 2.png",
        text: "Power quality",
        path: "/power-quality-studies",
      },
      { image: "", text: "", path: "" },
      { image: "", text: "", path: "" },
      { image: "", text: "", path: "" },
      { image: "", text: "", path: "" },
      { image: "", text: "", path: "" },
      { image: "", text: "", path: "" },
      {
        image: "./HomePageImg/WhatWeDoSection/Instrumentation Earthing 2.png",
        text: "Instrumentation earthing",
        path: "/instrumentation-earthing-studies",
      },
      {
        image: "./HomePageImg/WhatWeDoSection/Emi Emc 2.jpg",
        text: "EMI EMC",
        path: "/emi-emc",
      },
      {
        image: "./HomePageImg/WhatWeDoSection/Root Cause Analysis 2.jpg",
        text: "Root cause analysis",
        path: "/root-cause-analysis",
      },
      { image: "", text: "", path: "" },
      { image: "", text: "", path: "" },
      { image: "", text: "", path: "" },
      { image: "", text: "", path: "" },
    ],
    [],
  );

  const services2 = useMemo(
    () => [
      { image: "", text: "", path: "" },
      { image: "", text: "", path: "" },
      {
        image: "./HomePageImg/WhatWeDoSection/Earthing Studies 2.png",
        text: "Grounding System Studies",
        path: "/grounding-system-studies",
      },
      {
        image: "./HomePageImg/WhatWeDoSection/Lightning Protection 2.png",
        text: "Lightning protection system studies",
        path: "/lightning-protection-studies",
      },
      {
        image: "./HomePageImg/WhatWeDoSection/Power System Studies 2.png",
        text: "Power system studies",
        path: "/power-system-studies",
      },
      { image: "", text: "", path: "" },
      { image: "", text: "", path: "" },
      { image: "", text: "", path: "" },
      { image: "", text: "", path: "" },
      { image: "", text: "", path: "" },
      { image: "", text: "", path: "" },
      { image: "", text: "", path: "" },
      {
        image:
          "./HomePageImg/WhatWeDoSection/Power Quality and Root cause Analysis 2.png",
        text: "Power quality",
        path: "/power-quality-studies",
      },
      {
        image: "./HomePageImg/WhatWeDoSection/Instrumentation Earthing 2.png",
        text: "Instrumentation earthing",
        path: "/instrumentation-earthing-studies",
      },
      { image: "", text: "", path: "" },
      { image: "", text: "", path: "" },
      { image: "", text: "", path: "" },
      { image: "", text: "", path: "" },
      { image: "", text: "", path: "" },
    ],
    [],
  );

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState("");
  const serviceRefs = useRef([]);
  const service2Refs = useRef([]);
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    if (img) {
      gsap.fromTo(
        img,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 2.5,
          ease: "power2.inOut",
        },
      );
    }
  }, [imgRef]);

  const handleMouseEnter = (index, image) => {
    setHoveredIndex(index);
    setBackgroundImage(image);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setBackgroundImage("");
  };

  useEffect(() => {
    serviceRefs.current = serviceRefs.current.slice(0, services.length);
  }, [services]);

  useEffect(() => {
    serviceRefs.current.forEach((ref, index) => {
      if (ref) {
        if (index === hoveredIndex && services[index]?.text !== "") {
          gsap.to(ref, {
            scale: 1.3,
            opacity: 1,
            duration: 0.2,
            ease: "power2.inOut",
          });
        } else {
          gsap.to(ref, {
            scale: hoveredIndex !== null ? 0.9 : 1,
            opacity: hoveredIndex !== null ? 0.5 : 1,
            // border: hoveredIndex !== null && services[index]?.text === '' ? '1px solid white' : '',
            backgroundColor:
              hoveredIndex !== null && services[index]?.text === ""
                ? "transparent"
                : "",
            duration: 0.2,
            ease: "power2.inOut",
          });
        }
      }
    });
  }, [hoveredIndex, services]);

  useEffect(() => {
    service2Refs.current = service2Refs.current.slice(0, services2.length);
  }, [services2]);

  useEffect(() => {
    service2Refs.current.forEach((ref, index) => {
      if (ref) {
        if (index === hoveredIndex && services2[index]?.text !== "") {
          gsap.to(ref, {
            scale: 1.3,
            opacity: 1,
            duration: 0.2,
            ease: "power2.inOut",
          });
        } else {
          gsap.to(ref, {
            scale: hoveredIndex !== null ? 0.9 : 1,
            opacity: hoveredIndex !== null ? 0.5 : 1,
            // border: hoveredIndex !== null && services2[index]?.text === '' ? '1px solid white' : '',
            backgroundColor:
              hoveredIndex !== null && services2[index]?.text === ""
                ? "transparent"
                : "",
            duration: 0.2,
            ease: "power2.inOut",
          });
        }
      }
    });
  }, [hoveredIndex, services2]);

  const navItems = [
    { label: "HOME", isActive: true },
    { label: "OUR BUSINESS", isActive: true },
    { label: "OUR PRODUCTS", isActive: true },
    { label: "CLPS", isActive: false },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const benefitItems = [
    "ABOUT Earthing studies",
    "What is an Earthing/Grounding System Studies",
    "Earthing/Grounding System Studies",
    "Our Certifications and Expertise",
    "Detailed Study Reports and Analysis",
    "Benefits of Professional Earthing/Grounding System Studies",
  ];

  const components = [
    {
      imageSrc: "./SerivePage/01.png",
      title: "Risk Assessment",
      description:
        "Using Risk Assessment Software to compare calculated risk against tolerable risk levels as per IEC 62305-2.",
    },
    {
      imageSrc: "./SerivePage/02.png",
      title: "Lightning Protection System (LPS) Design",
      description:
        "Selecting from a choice of methods like the Rolling Sphere, Protection Angle, and Mesh Methods to design effective LPS.",
    },
    {
      imageSrc: "./SerivePage/03.png",
      title: "Surge Protection Devices (SPD)",
      description:
        "Selecting Class I, II, and III SPDs at various levels of the electrical distribution system to protect against conducted surges.",
    },
    {
      imageSrc: "./SerivePage/04.png",
      title: "Additional Mitigation Techniques",
      description:
        "Using equi-potential bonding, warning notices, and other best engineering practices to further reduce risk.",
    },
  ];

  const buttons = [{ text: "CONTACT US", className: "bg-red-700" }];

  return (
    <>
      {/* Landing Img Section */}

      <section className="flex overflow-hidden h-screen flex-col bg-white">
        <div className="flex relative flex-col w-full h-screen max-md:pb-24 max-md:max-w-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src="./SerivePage/Lightning Protection Banner Video.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          <div className="absolute top-[70%] left-[100px] w-[1330px] z-10">
            <div className="flex flex-col gap-[16px] text-white">
              {/* Heading */}
              <h1 className="font-montserrat font-bold text-[36px] leading-[100%] tracking-[0.5px] uppercase">
                COMPREHENSIVE LIGHTNING PROTECTION SOLUTIONS
              </h1>

              {/* Body */}
              <p className="font-montserrat font-normal text-[22px] leading-[150%]">
                From risk assessment and system design to type-tested components
                and surge protection — JEF delivers comprehensive lightning
                protection for industrial, commercial, and infrastructure
                facilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us section */}

      <section className="flex h-auto -mb-11 md:mb-0 overflow-hidden flex-col bg-[#F9F7F2]">
        <div className="flex overflow-hidden flex-col w-full bg-white max-md:max-w-full" />
        <nav className="flex flex-col justify-center py-6 px-24 w-full bg-[#F9F7F2] min-h-[64px] max-md:px-5 max-md:max-w-full">
          <div className="flex w-full max-md:max-w-full">
            <div className="flex items-center h-full min-w-[240px]">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center self-stretch my-auto"
                >
                  <div
                    className={`self-stretch my-auto text-xs tracking-wide leading-none uppercase whitespace-nowrap ${item.isActive ? "text-red-700" : "text-neutral-300"}`}
                  >
                    {item.label}
                  </div>
                  {item.isActive && (
                    <div className="flex flex-col self-stretch px-2.5 my-auto w-[27px]">
                      <div className="flex items-center w-[7px]">
                        <div className="flex flex-col justify-center self-stretch my-auto min-h-[7px] w-[7px]">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/98403646f26f29fd8d19e6e57b2e9f8b5de2f748795475a0d9039378b1786404?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244"
                            alt=""
                            className="object-contain flex-1 w-full aspect-square"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </nav>
        <header className="flex flex-col items-center justify-center text-center gap-[32px] w-full px-5 mx-auto mt-[80px]">
          {/* Logo */}
          <img
            src="./SerivePage/CLPS img.png"
            alt="Lightning Logo"
            className="w-[80px]"
          />

          {/* Heading */}
          <h1 className="text-[#C02429] font-bold text-[36px] tracking-[2px] uppercase font-montserrat">
            LIGHTNING PROTECTION SOLUTIONS
          </h1>

          {/* Paragraph 1 */}
          <p className="text-[20px] font-normal leading-[150%] text-[#4B4B4B] font-montserrat max-w-[1200px]">
            Lightning strikes are a persistent threat to structures, equipment,
            and people. The damage they cause is not limited to the point of
            impact — a strike on or near a facility can propagate destructive
            energy through power cables, data lines, earthing networks, and the
            structure itself, causing failures across a wide area.
          </p>

          {/* Paragraph 2 */}
          <p className="text-[20px] font-normal leading-[150%] text-[#4B4B4B] font-montserrat max-w-[1200px]">
            A well-designed lightning protection system does not prevent
            lightning from occurring. Its purpose is to give the electrical
            energy of a strike a controlled, predictable path to earth — one
            that bypasses the structure’s fabric, its occupants, and the
            equipment inside. When all elements of the system work together
            correctly, the strike event becomes a managed electrical discharge
            rather than a destructive incident.
          </p>

          {/* Read More Button */}
          <div className="flex justify-center items-center mb-4"
          onClick={()=>setShowLightningPanel(true)}>
           <ArrowButton/>
          </div>

          {/*Panel Slide in Logic */}
          {showLightningPanel && (
            <div
              className="fixed inset-0 bg-black/50 z-[9998]"
              onClick={() => setShowLightningPanel(false)}
            />
          )}
          <div
            className={`fixed top-0 right-0 h-screen bg-[#F9F7F2] z-[9999]
    transform transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
    ${showLightningPanel ? "translate-x-0" : "translate-x-full"}`}
            style={{ width: "860px" }}
          >
            {/* HEADER */}
            <div className="flex items-center justify-between px-16 pt-16 mb-10">
              <h2 className="text-[#C02429] font-bold text-[26px] leading-[43.4px] tracking-[1.49px] uppercase font-montserrat">
                LIGHTNING PROTECTION SOLUTIONS
              </h2>

              <button
                onClick={() => setShowLightningPanel(false)}
                style={{ width: "48px", height: "48px", borderRadius: "30px" }}
                className="bg-[#C02429] text-white flex items-center justify-center hover:bg-red-700 hover:scale-110 transition"
              >
                ✕
              </button>
            </div>

            {/* CONTENT */}
            <div className="flex flex-col gap-8 px-16">
              <p className="text-[20px] font-light leading-[150%] text-gray-600 font-montserrat">
                JEF Group supplies and designs comprehensive lightning
                protection systems built to the requirements of IEC 62305:2024 —
                the current international standard series that covers risk
                assessment, physical protection of structures, and protection of
                internal electrical and electronic systems. The CLPS range
                covers every component required for a standards-compliant
                comprehensive lightning protection system: air termination, down
                conductors, earthing, equipotential bonding, and surge
                protective devices for power, signal, instrumentation, data, and
                telecommunications lines.
              </p>

              <p className="text-[20px] font-light leading-[150%] text-gray-600 font-montserrat">
                Every product in the CLPS range is type-tested to the IEC 62561
                series — the companion product testing standards to IEC 62305 —
                confirming that each component meets defined mechanical,
                electrical, and environmental performance requirements. JEF
                type-tests its lightning protection components upto 200 kA on
                the 10/350 µs waveform — double the limit specified in the IEC
                standard series.
              </p>
            </div>
          </div>
        </header>
      </section>

      <section>
        <LightningProtectionSolutionsContent />
      </section>

      <section>
        <WhyJefCLPS />
      </section>

      <section>
        <FAQSection />
      </section>

      <section>
        <DownloadSection />
      </section>



      <section className="hidden sm:block">
        <div className={` h-full bg-slate-900`}>
          <div className=" w-full h-full py-20 mainSection bg-stone-900 overflow-hidden relative">
            {backgroundImage && (
              <div className="absolute inset-0 w-full h-full ">
                <img
                  ref={imgRef}
                  src={backgroundImage}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            )}
           
          </div>
        </div>
      </section>

      <section className="block sm:hidden">
        <div className={` h-full bg-slate-900`}>
          <div className=" w-full h-full py-20 mainSection bg-stone-900 overflow-hidden relative">
            {backgroundImage && (
              <div className="absolute inset-0 w-full h-full ">
                <img
                  ref={imgRef}
                  src={backgroundImage}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            )}
            <section className="flex overflow-hidden flex-col text-base leading-6 text-center text-white uppercase w-full relative z-10">
              <h2 className="self-center text-3xl font-semibold leading-none text-red-700 tracking-[4.53px] max-md:max-w-full max-md:text-4xl">
                Our Services
              </h2>
              <div className="flex circle-slider flex-wrap justify-center mt-20 max-md:mt-10 w-full h-full">
                <div className="flex Y-axis-Service-anm items-center gap-x-2 md:gap-x-5 lg:gap-x-10 circleChild">
                  {services2.slice(0, 7).map((service2, index) => (
                    <ServiceItem2
                      key={index}
                      text={service2.text}
                      path={service2.path}
                      image={service2.image}
                      ref={(el) => (service2Refs.current[index] = el)}
                      onMouseEnter={() =>
                        handleMouseEnter(index, service2.image)
                      }
                      onMouseLeave={handleMouseLeave}
                    />
                  ))}
                </div>
                <div className="flex Y-axis-Service-anm gap-x-2 md:gap-x-5 lg:gap-x-10 mb-6">
                  {services2.slice(12, 14).map((service2, index) => (
                    <ServiceItem2
                      key={index}
                      text={service2.text}
                      path={service2.path}
                      image={service2.image}
                      ref={(el) => (service2Refs.current[index] = el)}
                      onMouseEnter={() =>
                        handleMouseEnter(index, service2.image)
                      }
                      onMouseLeave={handleMouseLeave}
                    />
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

const ServiceItem = React.forwardRef(
  ({ path, text, onMouseEnter, onMouseLeave }, ref) => {
    const content = (
      <div
        ref={ref}
        className={`flex w-[7.2rem] h-[7.2rem] lg:h-[9rem] lg:w-[9rem] 2xl:w-[11.5rem] 2xl:h-[11.5rem] rounded-full items-center justify-center p-[0.5%] lg:p-[1.5%] transition-all duration-300 
        ${text === "" ? "bg-transparent" : "border border-solid hover:bg-red-600"}`}
        onMouseEnter={() => {
          if (text !== "") {
            onMouseEnter();
          }
        }}
        onMouseLeave={() => {
          if (text !== "") {
            onMouseLeave();
          }
        }}
      >
        <span className="text-center text-[10px] lg:text-[10px] 2xl:text-[12px] ">
          {text}
        </span>
      </div>
    );

    return path ? <Link href={path}>{content}</Link> : content;
  },
);

ServiceItem.displayName = "ServiceItem";

const ServiceItem2 = React.forwardRef(
  ({ path, text, onMouseEnter, onMouseLeave }, ref) => {
    const content = (
      <div
        ref={ref}
        className={`flex w-[7.2rem] h-[7.2rem] lg:h-[9rem] lg:w-[9rem] 2xl:w-[11.5rem] 2xl:h-[11.5rem] rounded-full items-center justify-center p-[0.5%] lg:p-[1.5%] transition-all duration-300 
        ${text === "" ? "bg-transparent" : "border border-solid hover:bg-red-600"}`}
        onMouseEnter={() => {
          if (text !== "") {
            onMouseEnter();
          }
        }}
        onMouseLeave={() => {
          if (text !== "") {
            onMouseLeave();
          }
        }}
      >
        <span className="text-center text-[10px] lg:text-[10px] 2xl:text-[12px] ">
          {text}
        </span>
      </div>
    );

    return path ? <Link href={path}>{content}</Link> : content;
  },
);

ServiceItem2.displayName = "ServiceItem2";

function CarouselSection({ components }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1); // Default to 1 for mobile
  const totalCards = components.length;

  // Function to handle the right click (move forward)
  const handleCarouselClickRight = () => {
    setCurrentIndex((prevIndex) => {
      return (prevIndex + 1) % totalCards; // Move forward one card
    });
  };

  // Function to handle the left click (move backward)
  const handleCarouselClickLeft = () => {
    setCurrentIndex((prevIndex) => {
      return (prevIndex - 1 + totalCards) % totalCards; // Move backward one card
    });
  };

  // Update the number of visible cards based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setVisibleCards(1); // Mobile
      } else if (window.innerWidth <= 1024) {
        setVisibleCards(2); // Medium
      } else {
        setVisibleCards(3); // Large
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize); // Listen for resize events

    return () => window.removeEventListener("resize", handleResize); // Cleanup listener
  }, []);

  return (
    <section className="flex xl:px-[100px] lg:px-[60px] flex-col items-start px-5 pt-16 pb-32 bg-black">
      <div className="flex flex-wrap gap-5 justify-between w-full">
        <h2 className="md:text-3xl text-2xl font-bold leading-none text-red-700 uppercase">
          KEY COMPONENTS OF THE STUDY
        </h2>
        <div className="flex self-end flex-col min-h-[60px]">
          <div className="flex gap-5 items-start w-full max-w-[140px]">
            {/* Left Arrow Button */}
            <div className="flex justify-center items-center min-h-[60px] w-[60px]">
              <button onClick={handleCarouselClickLeft}>
                <div className="flex overflow-hidden flex-1 shrink justify-center items-center self-stretch p-5 my-auto w-full border border-white border-solid basis-0 min-h-[60px] rounded-[60px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/150914823e04aa0b72d10dfe3eaaf22d38b599636111c8b7ad6e80476980a940?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244"
                    alt="Left Arrow"
                    className="object-contain flex-1 w-6 aspect-square"
                  />
                </div>
              </button>
            </div>
            {/* Right Arrow Button */}
            <div className="flex justify-center items-center min-h-[60px] w-[60px]">
              <button onClick={handleCarouselClickRight}>
                <div className="flex overflow-hidden flex-1 shrink justify-center items-center self-stretch px-5 my-auto bg-white border border-solid basis-0 border-zinc-900 border-opacity-10 h-[60px] min-h-[60px] rounded-[60px] w-[60px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5bcda9453f93d58b48e207cfd8d3b19c69b7c4768fd9e522cbaaea6950c4e4b3?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244"
                    alt="Right Arrow"
                    className="object-contain flex-1 w-6 aspect-square"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="card-slider flex justify-center items-center mt-10 w-full overflow-hidden">
        {/* Carousel wrapper */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / visibleCards}%)`, // Move based on currentIndex and visibleCards
            width: `${totalCards * (100 / visibleCards)}%`, // Total width based on total cards and visible cards
          }}
        >
          {components.map((component) => (
            <div
              key={component.title}
              className="Y-axis-card-anm flex overflow-hidden flex-col self-center sm:self-start items-center sm:items-start w-full "
              style={{
                flex: `0 0 ${100 / visibleCards}%`, // Adjust width of each card based on visibleCards
              }}
            >
              <img
                src={component.imageSrc}
                alt={component.title}
                className="h-[3rem]"
              />
              <h3 className="text-red-700 font-normal w-[80vw] sm:w-[90%] text-2xl sm:text-start my-5 text-center">
                {component.title}
              </h3>
              <p className=" text-gray-400 text-center w-[80vw] sm:w-[70%] font-thin lg:w-[80%] sm:text-start text-lg max-w-screen-xl">
                {component.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

//WHY JEF CLPS CONTENT

const cards = [
  {
    id: 1,
    image: "/clps/Tested to 200.png",
    title: "TESTED TO 200 kA — DOUBLE THE IEC STANDARD LIMIT",
    description:
      "JEF type-tests its CLPS components at 200 kA on the 10/350 µs waveform — twice the 100 kA limit required by IEC 62561. Type-test certificates are available for review.",
  },
  {
    id: 2,
    image: "/clps/IEC 62305.png",
    title: "IEC 62305:2024 Aligned",
    description:
      "Product range, design tools, and technical documentation are aligned with the current edition of the standard. The 2024 revision introduces changes to risk assessment methodology, air termination design requirements, and SPD specifications that are reflected in the CLPS range.",
  },
  {
    id: 3,
    image: "/clps/Comprehensive System.png",
    title: "Comprehensive System from One Source",
    description:
      "Every component required for a comprehensive lightning protection system — from air termination rod to point-of-use SPD — is available from JEF as a coordinated, type-tested range. This eliminates compatibility questions that arise when components from multiple suppliers are combined.",
  },
  {
    id: 4,
    image: "/clps/JEF SHIELD RISK ASSESSMENT.png",
    title: "JEF SHIELD — Risk Assessment in Under 90 Seconds",
    description:
      "Risk assessment, concept drawings, bill of materials, and budget estimate delivered in under 90 seconds. Built to IS/IEC 62305 and designed for Indian building types and project requirements.",
  },
  {
    id: 5,
    image: "/clps/Installation quality.png",
    title: "JEF E-BUILD — Installation Quality Verified",
    description:
      "Step-by-step guided installation with real-time remote supervision by qualified engineers. Installations are certified remotely upon completion, providing clients with documented records aligned with IEC 62305-3 inspection requirements.",
  },
  {
    id: 6,
    image: "/clps/Engineering Support.png",
    title: "Engineering Support Across the Project Lifecycle",
    description:
      "JEF's engineering team provides technical support from risk assessment and system design through product selection, installation supervision, and inspection.",
  },
];

//WHY JEF CLPS FUNCTION

function WhyJefCLPS() {
  return (
    <section className="w-full bg-[#161414] py-[72px] overflow-hidden">
      <div className="pl-[100px]">
        {/* Heading Section */}
        <div className="max-w-[1385px] flex flex-col gap-[27px]">
          <h2 className="font-montserrat text-[32px] leading-[60px] tracking-[4.53px] uppercase font-bold text-[#C02429]">
            WHY JEF CLPS?
          </h2>

          <p className="max-w-[1131px] font-montserrat font-medium text-[16px] leading-[150%] text-white">
            As a pioneer in Earthing integrity testing services, we at JEF have
            over two decades of experience covering 300,000 riser connections
            spread across 18 countries, 400 substations ranging from 33kV to
            765kV process plants and other critical installations. With several
            patents in this field, our level of expertise is unmatched even as
            we keep innovating further.
          </p>
        </div>

        {/* Cards Scroll Section */}
        <div
          className="
            mt-[82px]
            flex
            gap-[48px]
            overflow-x-auto
            scrollbar-hide
            pr-[100px]
          "
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="w-[463px] min-w-[463px] flex flex-col gap-[24px]"
            >
              {/* Image */}
              <div className="relative w-[463px] h-[239px] rounded-[20px] overflow-hidden group cursor-pointer">
                <img
                  src={card.image}
                  alt={card.title}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-500
                    ease-out
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Content */}
              <div className="w-full flex flex-col gap-[10px]">
                <h3 className="font-montserrat font-medium text-[16px] leading-[31px] uppercase text-white">
                  {card.title}
                </h3>

                <p className="font-montserrat font-light text-[14px] leading-[150%] text-[#D0D0D0]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// FAQ CONTENT
const faqData = [
  {
    id: 1,
    question: "Is lightning protection a legal requirement in India?",
    answer:
      "For certain building types and uses, yes. The National Building Code 2016 (NBC 2016) requires lightning protection for buildings above defined heights and for buildings that house hazardous, explosive, or particularly sensitive contents. Beyond NBC 2016, sector-specific regulations in petroleum, chemicals, power generation, defence, and other industries impose their own independent requirements. For structures outside mandatory categories, the risk assessment under IEC 62305-2 provides a systematic basis for determining whether protection is warranted — and in most industrial and commercial applications, it will be.",
  },
  {
    id: 2,
    question:
      "Should the lightning protection earthing system be kept separate from the electrical system earth?",
    answer:
      "No. IS/IEC 62305 requires the LPS earthing system to be interconnected with all other earthing systems in the structure — including the electrical system protective earth, the IT equipment earth, and any telecommunications earthing. If these systems are kept separate and a lightning strike raises the LPS earth to a high potential, large potential differences develop between the systems, which can cause destructive arcing between equipment connected to different earth references. A single, integrated earthing network shared by all systems is both the standard-compliant approach and the electrically safer one.",
  },
  {
    id: 3,
    question:
      "How often does a lightning protection system need to be inspected?",
    answer:
      "IEC 62305-3 sets out the requirement for periodic inspection and maintenance of installed LPS. The standard specifies that inspection intervals depend on the LPL of the system and the environmental conditions at the site — systems at higher LPLs or in more aggressive environments require more frequent inspection. In addition to scheduled periodic inspections, a visual inspection should be carried out following any significant modification to the protected structure, and a full inspection — including earth resistance measurement — is required following any confirmed lightning strike event. Specific inspection intervals should be taken from the current edition of IEC 62305-3 or confirmed with JEF's engineering team for the particular installation.",
  },
  {
    id: 4,
    question: "What changed practically with the 2024 edition of IEC 62305?",
    answer:
      "Several changes in the 2024 revision have direct practical implications. The risk assessment now uses the ground strike-point density (NSG) rather than the previous flash density parameter (NG), which may affect the calculated risk level for some sites. Minimum metal thicknesses are now explicitly stated for air termination components — relevant wherever thin architectural metalwork is proposed as a natural air termination element. SPD dimensioning is based on more precisely specified surge current parameters. The standard now addresses green roofs and projecting facade elements directly. Thunderstorm Warning Systems are formally recognised as a risk reduction measure. Requirements for SPD backup fuse dimensioning and status monitoring are introduced in IEC 62305-4.",
  },
  {
    id: 5,
    question: "What does JEF's 200 kA type test mean for a specifier?",
    answer:
      "The IEC 62561 series requires external LPS components to be type-tested at up to 100 kA on the 10/350 µs waveform. JEF tests its CLPS components at 200 kA on the same waveform — double the standard requirement. For a specifier, this means that every JEF component has been verified to withstand twice the current magnitude the standard demands, before any safety factor is applied. Type-test certificates are available for review on request.",
  },
];

//FAQ FUNCTION
function FAQSection() {
  const [openId, setOpenId] = useState(1);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full bg-[#F9F7F2] pt-[86px] pb-[120px] overflow-hidden">
      
      {/* Internal FAQ Layout */}
      <div className="max-w-[1508px] mx-auto flex flex-col gap-[48px] px-[100px]">
        
        {/* FAQ Heading */}
        <h2 className="font-montserrat font-bold text-[40px] leading-[55px] uppercase text-[#C02429]">
          FAQ
        </h2>

        {/* FAQ Panels */}
        <div className="w-full flex flex-col gap-[32px]">
          
          {/* FAQ Grid */}
          <div className="grid grid-cols-2 gap-x-[48px] gap-y-[32px] w-full">
            {faqData.map((item) => {
              const isOpen = openId === item.id;

              return (
                <div
                  key={item.id}
                  className={`
                    w-full
                    bg-white
                    border-[0.5px]
                    border-[#C02429]
                    overflow-hidden
                    transition-all
                    duration-500
                  `}
                >
                  {/* Question */}
                  <button
                    onClick={() => toggleFAQ(item.id)}
                    className="
                      w-full
                      min-h-[80px]
                      px-[24px]
                      py-[15px]
                      flex
                      items-center
                      justify-between
                    "
                  >
                    {/* Panel Content */}
                    <div className="w-full flex items-center justify-between gap-[64px]">
                      
                      {/* Question Text */}
                      <span
                        className={`
                          font-montserrat
                          text-[16px]
                          leading-[150%]
                          text-left
                          transition-all
                          duration-300
                          ${
                            isOpen
                              ? "font-bold text-[#C02429]"
                              : "font-normal text-[#4A4A4A]"
                          }
                        `}
                      >
                        {item.question}
                      </span>

                      {/* Arrow */}
                      <div
                        className={`
                          w-[49px]
                          h-[49px]
                          p-[10px]
                          flex
                          items-center
                          justify-center
                          transition-transform
                          duration-300
                          shrink-0
                          ${isOpen ? "rotate-180" : ""}
                        `}
                      >
                        <img
                          src="/clps/Vector.png"
                          alt="Arrow"
                          width={29}
                          height={17}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </button>

                  {/* Answer */}
                  <div
                    className={`
                      grid
                      transition-all
                      duration-500
                      ease-in-out
                      ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }
                    `}
                  >
                    <div className="overflow-hidden">
                      <div className="px-[24px] pb-[28px]">
                        <p className="font-montserrat font-normal text-[16px] leading-[150%] text-[#4A4A4A]">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

//DOWNLOAD
function DownloadSection() {
  return (
    <section className="w-full bg-[#F9F7F2] pt-[80px] pb-[120px] overflow-hidden">
      <div className="w-[1508px] ml-[100px] flex flex-col gap-[61px]">
        {" "}
        <h2 className="font-montserrat font-bold text-[32px] leading-[55px] uppercase text-[#C02429]">
          Download
        </h2>
        <div className="w-[554px] flex flex-col gap-[24px]">
          <div className="w-[554px] h-[369px] overflow-hidden">
            <img
              src="/clps/Lighting Protection Guide.png"
              alt="Lightning Protection Solution Guide"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-[540px] flex flex-col gap-[17px]">
            <h3 className="font-montserrat font-normal text-[24px] leading-[100%] uppercase text-[#1E1E1E]">
              LIGHTNING PROTECTION SOLUTION GUIDE
            </h3>

            <p className="font-montserrat font-light text-[16px] leading-[150%] text-[#6B6B6B]">
              December 11, 2025
            </p>

            <a
              href="/pdfs/lightning-protection-guide.pdf"
              download
              className="w-[260px] h-[24px] flex items-center gap-[32px] group"
            >
              <span className="font-montserrat font-medium text-[14px] uppercase text-[#1E1E1E] group-hover:text-[#C02429] transition-colors duration-300">
                Select To Download
              </span>

              <img
                src="/clps/download-icon.png"
                alt="Download"
                className="w-[16px] h-[16px]"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LPS;

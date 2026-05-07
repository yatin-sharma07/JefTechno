"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import ContactUs from "../../components/ContactUs";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

const AboutUsContent = () => {
  const [showPanel, setShowPanel] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);
  const progressRef = useRef(null);
  const TAB_DURATION = 5000;

  const whatWeDoData = [
    {
      label: "PRODUCTS",
      content:
        "Type-tested lightning protection components and systems (to IEC 62305:2024, with CLPS components tested to 200 kA on the 10/350 μs waveform — double the IEC standard requirement), earthing and grounding system solutions, surge protective devices, and lightning risk assessment tools including the automated JEF Shield platform.",
    },
    {
      label: "AUDIT SERVICES",
      content:
        "Comprehensive electrical safety audits conducted by specialist engineers — covering lightning protection, earthing systems, surge protection, and overall electrical installation integrity. Each audit delivers a detailed technical assessment with actionable findings, benchmarked against current international standards.",
    },
    {
      label: "CONSULTING SERVICES",
      content:
        "End-to-end consulting for the design, specification, and independent verification of electrical protection systems. From concept through commissioning, JEF's consultants provide the technical authority that complex infrastructure projects require — particularly where regulatory compliance, insurance requirements, or asset criticality demand an independent expert position.",
    },
  ];

  useEffect(() => {
    document.body.style.overflow = showPanel ? "hidden" : "auto";
  }, [showPanel]);

  const startProgress = (tabIndex) => {
    setProgress(0);
    clearInterval(intervalRef.current);
    clearInterval(progressRef.current);

    const startTime = Date.now();

    progressRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min((elapsed / TAB_DURATION) * 100, 100);
      setProgress(pct);
    }, 16);

    intervalRef.current = setTimeout(() => {
      clearInterval(progressRef.current);
      setActiveTab((prev) => {
        const next = (prev + 1) % whatWeDoData.length;
        startProgress(next);
        return next;
      });
    }, TAB_DURATION);
  };

  useEffect(() => {
    startProgress(0);
    return () => {
      clearInterval(intervalRef.current);
      clearInterval(progressRef.current);
    };
  }, []);

  const handleTabClick = (index) => {
    clearTimeout(intervalRef.current);
    clearInterval(progressRef.current);
    setActiveTab(index);
    startProgress(index);
  };

  useEffect(() => {
    gsap.utils.toArray(".Y-axis-text-Title").forEach((element) => {
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

  useEffect(() => {
    gsap.utils.toArray(".Y-axis-text").forEach((element) => {
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
            start: "top 70%",
            toggleActions: "play none none none",
          },
        },
      );
    });
  }, []);

  //  Card Sliderr --------------------------

  useEffect(() => {
    gsap.fromTo(
      gsap.utils.toArray(".Y-axis-card-anm"),
      { opacity: 0, y: 50 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.3, // 0.3s delay between each card animation
        scrollTrigger: {
          start: "top 70%",
          trigger: ".card-slider",
          toggleActions: "play none none none",
        },
      },
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      gsap.utils.toArray(".X-axis-anm"),
      { opacity: 0, x: 150 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.3, // 0.3s delay between each card animation
        scrollTrigger: {
          start: "top 80%",
          trigger: ".Img-slider",
          toggleActions: "play none none none",
        },
      },
    );
  }, []);

  // ContactUs Data

  // const visionData = [
  //   {
  //     icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e16ee975eb679a5915e4c081858a20a90389fd8b30454bd57483da22afade137?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244",
  //     title: "PRODUCTS",
  //     description:
  //       " Type-tested lightning protection components and systems (to IEC 62305:2024, with CLPS components tested to 200 kA on the 10/350 µs waveform — double the IEC standard requirement), earthing and grounding system solutions, surge protective devices, and lightning risk assessment tools including the automated JEF Shield platform.",
  //   },
  //   {
  //     icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/046a00e721b213a29322e89fd6ebaa8d2b511514f4b267d8a196e97e597db69f?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244",
  //     title: "AUDIT SERVICES",
  //     description:
  //       " Electrical and Fire Safety Audit powered by Sameeksha® (the world’s first automated safety audit tool, developed and patented by JEF); Earthing Health Assessment of live installations; and Instrumentation Earthing Audit for I&C systems in process plants and generating stations.",
  //   },
  //   {
  //     icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2137e57fab69bcc7f6fe80e5f7e438b0cdfa992da4b7bf36e2da2159fb80627e?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244",
  //     title: "CONSULTING SERVICES",
  //     description:
  //       "  Power System Studies (load flow, short circuit, motor starting, harmonics, transient stability, protection coordination, arc flash, insulation coordination) using ETAP, PSCAD/EMTDC, PSS/E, DIgSILENT, SKM, and DSA Tools; and EMI/EMC Studies including AC interference analysis for pipelines.",
  //   },
  // ];

  const technologyData = [
    {
      title: "SAMEEKSHA®",
      description:
        "world’s first automated safety audit tool. 6,500+ reports, 630,000+ data points, 230,000+ images, zero data mix-up. Patented.",
    },
    {
      title: "JEF SHIELD",
      description:
        "Automated LPS risk assessment and design to IEC 62305-2. Complete report, drawings, and BOM in under 90 seconds.",
    },
    {
      title: "JEF E-BUILD",
      description:
        "Real-time LPS installation monitoring and remote certification.",
    },
  ];

  const locationData = [
    {
      title: "Bengaluru, India (Global HQ)",
      description:
        "jeftechno.com — full product, audit, and consulting capability across India and internationally.",
    },
    {
      title: "Abu Dhabi, UAE (GCC Hub)",
      description:
        "jefuae.com — power system studies, instrumentation earthing, EMI/EMC, and earthing studies, specialising in oil and gas.",
    },
    {
      title: "USA",
      description:
        "North American presence, US patent portfolio, and engagement with US engineering standards and clients.",
    },
  ];

  return (
    <>
   <section className="overflow-hidden">
  <main className="flex relative flex-col h-screen w-full max-md:py-24 max-md:max-w-full">
    
    {/* Fallback Image */}
    <img
      loading="lazy"
      src="./AboutUs/AboutUsMainBG.png"
      alt="AboutUsMainbg"
      className="object-cover absolute inset-0 w-full h-full"
    />

    {/* Video */}
    <video
      autoPlay
      loop
      muted
      playsInline
      preload="none"
      poster="./AboutUs/AboutUsMainBG.png"
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source
        src="./AboutUs/JEF About us.mp4"
        type="video/mp4"
      />
    </video>

    {/* Content */}
    <section className="flex relative px-4 inset-y-[78%] lg:inset-x-20 flex-col mt-6 w-full max-w-[1200px] max-md:mb-2.5 max-md:max-w-full">
      <h1 className="md:text-4xl text-3xl font-bold tracking-wide text-white max-md:text-3xl">
        JEF GROUP OF COMPANIES
      </h1>
    </section>
  </main>
</section>

      <section>
        <Navigation />
      </section>

     <section className="flex flex-col items-center w-full bg-[#F9F7F2] overflow-hidden">
  {/* WHO WE ARE */}
  <div className="flex flex-col items-center justify-center w-full pt-[100px]">
    <header
      className="flex flex-col items-center justify-center text-center gap-[32px] w-full px-5 mx-auto"
      style={{ maxWidth: "1279px", minHeight: "394px" }}
    >
      <img
        src="/HomePageImg/NavbarImg/JefTechno_logo_ 2.png"
        alt="company logo"
        className="w-[80px]"
      />

      <h1 className="flex justify-center items-center w-[264px]">
        <span className="text-[#C02429] font-semibold text-[32px] leading-[52.91px] tracking-[3.36px] uppercase font-montserrat">
          WHO WE ARE
        </span>
      </h1>

      <p className="text-[20px] font-normal leading-[150%] text-gray-700 font-montserrat text-center w-full max-w-[1255px]">
        JEF is a specialist electrical engineering company with an
        uncompromising focus on the safety and reliability of electrical
        systems. Founded in Bengaluru in 1994, we have built our global
        presence the hard way — one technically demanding project at a
        time, in industries and environments where the standard of
        engineering is determined by the consequences of getting it wrong.
      </p>

      <div className="flex justify-center items-center">
        <img
          src="/AboutUs/read more button.png"
          alt="Read More"
          onClick={() => setShowPanel(true)}
          className="cursor-pointer object-contain hover:scale-105 active:scale-95 transition-transform duration-200"
          style={{ width: "260px", height: "61px" }}
        />
      </div>
    </header>
  </div>

  {/* DIM OVERLAY */}
  {showPanel && (
    <div
      className="fixed inset-0 bg-black/50 z-[9998]"
      onClick={() => setShowPanel(false)}
    />
  )}

  {/* SLIDE PANEL */}
  <div
    className={`fixed top-0 right-0 h-screen bg-[#F9F7F2] z-[9999]
      transform transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
      ${showPanel ? "translate-x-0" : "translate-x-full"}`}
    style={{ width: "860px" }}
  >
    <div className="flex items-center justify-between px-16 pt-16 mb-10">
      <h2 className="text-[#C02429] font-bold text-[26px] leading-[43.4px] tracking-[1.49px] uppercase font-montserrat">
        WHO WE ARE
      </h2>
      <button
        onClick={() => setShowPanel(false)}
        style={{ width: "48px", height: "48px", borderRadius: "30px" }}
        className="bg-[#C02429] text-white flex items-center justify-center hover:bg-red-700 hover:scale-110 transition flex-shrink-0"
      >
        ✕
      </button>
    </div>

    <div className="flex flex-col gap-8 px-16">
      <p className="text-[20px] font-light leading-[150%] text-gray-600 font-montserrat">
        Three decades of this work, across 30 countries and 10k customers,
        have produced something that cannot be replicated quickly: a depth
        of methodology, a body of proprietary technology, and a team
        capable of operating at the frontier of what electrical
        engineering analysis and assessment can deliver. Our 9 granted
        patents — across India, the United States, and the European Union
        — reflect the same conviction that has guided the company since
        1994: that the right response to a gap in what the industry
        delivers is to build something better.
      </p>
    </div>
  </div>

  {/* WHAT WE DO */}
  <div className="flex flex-col w-full max-w-[1729px] mx-auto pl-[101px] pr-5 mt-[250px] mb-[50px] text-left">
    {/* Section Title */}
    <h1 className="text-[#C02429] text-[26px] font-bold tracking-[1.49px] leading-[60px] uppercase font-[Montserrat] mb-[43px]">
      WHAT WE DO
    </h1>

    <div className="relative w-full max-w-[900px] min-h-[253px] mb-[100px]">
      {whatWeDoData.map((tab, index) => (
        <p
          key={index}
          className={`text-[20px] font-medium leading-[1.5] tracking-[0px] text-gray-800 font-[Montserrat] w-full transition-all duration-700 ease-in-out absolute left-0 top-0 ${
            activeTab === index
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        >
          {tab.content}
        </p>
      ))}
    </div>

    <div className="flex flex-wrap gap-[64px] w-full max-w-[906px]">
      {whatWeDoData.map((tab, index) => (
        <button
          key={index}
          onClick={() => handleTabClick(index)}
          className="flex flex-col items-start group cursor-pointer w-[259px]" 
        >
          {/* Progress Line */}
          <div className="w-full h-[2px] bg-gray-300 mb-4 relative overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-[#C02429]"
              style={{
                width: activeTab === index ? `${progress}%` : "0%",
                transition: activeTab === index ? "none" : "width 0.3s ease-out",
              }}
            />
          </div>

          {/* Tab Label */}
          <span
            className={`text-[12px] tracking-[1.5px] uppercase font-[Montserrat] transition-colors duration-300 ${
              activeTab === index
                ? "text-gray-900 font-semibold"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab.label}
          </span>
        </button>
      ))}
    </div>
  </div>
</section>

      {/*Area of Expertise */}
      <section>
        <ExcellenceinElectricalEngineering />
      </section>

      {/* Technology and Patent */}
      <section>
        <TechnologyPatents />
      </section>

      {/*Overview */}

      <section>
        <Overview />
      </section>

      {/*Our Presence */}
      <section>
        <LearningDevelopment />
      </section>

      {/* < SocialResponsibilities /> */}
      {/* <section>
        <img src="./AboutUs/SRImg.png" alt="SRimg" />
        
      </section> */}
    </>
  );
};

const Overview = () => {
  useEffect(() => {
    gsap.fromTo(
      ".stat-item",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
      },
    );
  }, []);

  const stats = [
    {
      img: "/AboutUs/countries.png",
      label: "30+ COUNTRIES",
    },
    {
      img: "/AboutUs/customers.png",
      label: "10K CUSTOMERS",
    },
    {
      img: "/AboutUs/patents.png",
      label: "9 PATENTS",
    },
    {
      img: "/AboutUs/retention_rate.png",
      label: "90% RETENTION RATE",
    },
    {
      img: "/AboutUs/regions.png",
      label: "INDIA, US & EU",
    },
  ];

  return (
    <section
      className="relative w-full h-[472px] flex justify-center items-start pt-[103px]"
      style={{
        backgroundImage: "url('/AboutUs/by_the_numbers.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 w-[974px] flex flex-col items-center gap-[56px]">
        {/* HEADING */}
        <h1 className="text-red-600 text-[32px] font-bold tracking-[4.53px] uppercase leading-[60px]">
          BY THE NUMBERS
        </h1>

        {/* ICON ROW */}
        <div className="flex justify-between items-center w-full h-[150px]">
          {stats.map((item, index) => (
            <div
              key={index}
              className="stat-item flex flex-col items-center justify-center"
            >
              <img
                src={item.img}
                alt={item.label}
                className="w-[150px] h-[150px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

function LearningDevelopment() {
  return (
    <section className="bg-white py-20 px-6 md:px-20">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-16">
        <p className="text-red-500 text-sm font-normal tracking-wide mb-2">
          A GLOBAL ENGINEERING FUTURE
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-black">
          OUR PRESENCE
        </h2>

        <p className="text-gray-600 text-base leading-relaxed max-w-5xl">
          JEF Techno operates as a globally integrated engineering and
          technology organization, delivering advanced solutions in earthing,
          lightning protection, and power system performance across critical
          infrastructure sectors. Our operations span multiple strategic
          regions, enabling seamless delivery of product innovation, technical
          audits, and specialized consulting services worldwide.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-16 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="space-y-6">
          <div className="overflow-hidden">
            <img
              src="/AboutUs/Jef India 1.png"
              alt="India"
              className="w-full h-[240px] object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>

          <div>
            <h3 className="font-semibold text-black mb-2">
              Bengaluru, India (Global HQ)
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              The core of our operations, driving end-to-end product
              development, engineering audits, and consulting capabilities
              across India and international markets.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="space-y-6">
          <div className="overflow-hidden">
            <img
              src="/AboutUs/Jef UAE 1.png"
              alt="UAE"
              className="w-full h-[240px] object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>

          <div>
            <h3 className="font-semibold text-black mb-2">
              Abu Dhabi, UAE (GCC HQ)
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Focused on high-performance engineering services for the energy
              sector, including power system studies, instrumentation earthing,
              EMI/EMC analysis, and specialized solutions for oil & gas
              environments.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="space-y-6">
          <div className="overflow-hidden">
            <img
              src="/AboutUs/JEF USA 1.png"
              alt="USA"
              className="w-full h-[240px] object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>

          <div>
            <h3 className="font-semibold text-black mb-2">
              United States (USA HQ)
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Strengthening our global footprint through a robust patent
              portfolio, alignment with US engineering standards, and active
              engagement with North American clients and infrastructure
              projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const LocationCard = ({ imageSrc, title, buttonText }) => (
  <div className="flex flex-col flex-1 shrink justify-center pb-16 basis-0 min-w-[240px] max-md:max-w-full">
    <div className="flex flex-col items-center pr-16 pl-16 w-full h-[164px] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col justify-center items-center px-20 max-w-full w-full max-md:px-5">
        <div className="flex flex-col self-center items-center w-full">
          <img
            loading="lazy"
            src={imageSrc}
            alt={`${title} icon`}
            className="object-contain w-[5%] aspect-square min-w-24 min-h-24"
          />
        </div>
        <div className="flex flex-col pb-5 text-xs tracking-wider leading-tight text-center uppercase text-zinc-900">
          <div>{title}</div>
        </div>
        <div className="flex flex-col items-center text-base tracking-wider leading-none text-center text-red-700 uppercase whitespace-nowrap">
          <button className="flex items-center pb-1 h-5 border-b border-red-700">
            <span className="self-stretch pb-px my-auto">{buttonText}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
);

function LocationsSection() {
  const locations = [
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/dc34b2826bfc56f82deec5b3f5509064c92324559c00a5e7a5eef8263b9ec102?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244",
      title: "JEF HQ",
      buttonText: "Location",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/8076b9f7c863ad8f2fc0b2cbdc139654cfa7792279a73e5e9900fcf5841cea75?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244",
      title: "JEF Riyadh Office",
      buttonText: "Location",
    },
  ];

  return (
    <section className="flex overflow-hidden flex-col justify-center items-center px-20 py-32 bg-neutral-100 max-md:px-5">
      <div className="flex flex-col justify-center px-16 w-full max-w-[1440px] max-md:px-5 max-md:max-w-full">
        <header className="flex flex-col self-center max-w-full text-center uppercase h-[129px] w-[406px]">
          <div className="flex flex-col w-full">
            <h2 className="w-[40%] md:w-[30%] self-center text-base tracking-widest leading-6 text-red-700 max-md:px-5">
              OUR LOCATIONS
            </h2>
            <h1 className="flex justify-center items-center mt-9 w-full text-5xl leading-none text-zinc-900 tracking-[4.53px] max-md:text-4xl">
              <span className="flex flex-col self-stretch my-auto min-w-[240px] w-[357px] max-md:text-4xl">
                <span className="pb-px w-full max-md:text-4xl">
                  JEF OFFICES
                </span>
              </span>
            </h1>
          </div>
        </header>
        <div className="flex flex-col justify-center pt-16 w-full min-h-[284px] max-md:max-w-full">
          <div className="flex max-sm:flex-col items-center justify-center px-56 w-full min-h-[224px] max-md:px-5 max-md:max-w-full">
            {locations.map((location, index) => (
              <LocationCard key={index} {...location} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const UniqueEnvironment = () => {
  return (
    <div className="flex overflow-hidden flex-col items-center px-20 pt-24 pb-12 bg-neutral-100 max-md:px-5">
      <div className="flex flex-col items-center w-full max-w-[1440px] max-md:max-w-full">
        <div className="flex flex-col justify-center items-center self-stretch px-44 text-5xl font-semibold leading-none text-center uppercase text-zinc-900 tracking-[4.53px] max-md:px-5 max-md:max-w-full max-md:text-4xl">
          <div className="flex flex-col max-w-full h-[72px] w-[697px] max-md:text-4xl">
            <div className="flex justify-center items-center w-full max-md:max-w-full max-md:text-4xl">
              <div className="self-stretch pb-px my-auto min-w-[240px] max-md:max-w-full max-md:text-4xl">
                A UNIQUE ENVIRONMENT
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 max-w-full w-[1080px] max-md:mt-10">
          <div className="flex gap-5 max-md:flex-col">
            <EnvironmentFeature
              imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/9b37054f511f0e5356a95b0ba2c60bcec3bc0352085a21d7760988d94d2e56da?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244"
              text="New standard in regulations"
            />
            <EnvironmentFeature
              imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/fa820d915591cba85564e1a7c906f3d7e0e16d3cd002d8e0772e819a1c6538b1?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244"
              text="Global connectivity and strategic location"
            />
            <EnvironmentFeature
              imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/6484ee8c0ae57052b19c9926b1a4f6f9e29af4cec94227d646e46ac6b1edb5a3?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244"
              text="Global talent attraction"
            />
          </div>
        </div>
        <div className=" max-w-full w-full max-md:mt-10">
          <div className="flex justify-center max-md:flex-col">
            <EnvironmentFeature
              imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/7af91ae7dfa67d2dcba7f6c3bfed8937b6f05829af82b5ed8cd0eafa627b2dd9?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244"
              text="Unique solar and wind advantages for 100% clean energy generation"
            />
            <EnvironmentFeature
              imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/6f91efee8f6037235b16cc846a87d2b2e94ef6b6f9e16d7889514e4d92c480de?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244"
              text="Sustainability, wellness and human improvement as living principles"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const EnvironmentFeature = ({ imageSrc, text }) => {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow justify-center pb-16 min-h-[219px]">
        <div className="flex flex-col items-center px-6 w-full h-[159px] max-md:px-5">
          <div className="flex flex-col justify-center items-center px-14 w-full max-w-[310px] max-md:px-5">
            <div className="flex flex-col pb-8 w-20">
              <img
                loading="lazy"
                src={imageSrc}
                className="object-contain w-full aspect-square"
                alt=""
              />
            </div>
            <div className="flex flex-col pb-5 text-base font-thin leading-6 text-center text-zinc-900">
              <div className="pt-1">{text}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const sectors = [
  {
    name: "Renewable Energy",
    imageSrc: "./AboutUs/RenewableEnergy.png",
    altText: "Renewable sector icon",
  },
  {
    name: "Oil & Gas",
    imageSrc: "./AboutUs/OilandGas.png",
    altText: "Manufacturing sector icon",
  },
  {
    name: "Power Utilities",
    imageSrc: "./AboutUs/PoweUtilities.png",
    altText: "Water sector icon",
  },
  {
    name: "Manufacturing Plant",
    imageSrc: "./AboutUs/MFplant.png",
    altText: "Technology and Digital sector icon",
  },
  {
    name: "Process Plant",
    imageSrc: "./AboutUs/ProcessPlant.png",
    altText: "Entertainment and Culture sector icon",
  },
  {
    name: "Data centers",
    imageSrc: "./AboutUs/data-centers-icon.png",
    altText: "Education, Research, and Innovation sector icon",
  },
];

function SectorIcon({ name, imageSrc, altText }) {
  useEffect(() => {
    gsap.fromTo(
      gsap.utils.toArray(".Y-axis-card-anm1"),
      { opacity: 0, y: 50 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.3, // 0.3s delay between each card animation
        scrollTrigger: {
          start: "top 80%",
          trigger: ".card-slider2",
          toggleActions: "play none none none",
        },
      },
    );
  }, []);

  return (
    <div className="flex Y-axis-card-anm1 justify-center items-center self-stretch px-9 py-11 my-auto rounded-[83px] max-md:px-5">
      <div className="flex card-slider2 flex-col items-center self-stretch my-auto w-full">
        <div className="flex overflow-hidden flex-col flex-1 items-center w-full">
          <div className="flex flex-1 justify-center size-full">
            <img
              loading="lazy"
              src={imageSrc}
              alt={altText}
              className="object-cover shrink "
            />
          </div>
        </div>
        <div className="mt-5 text-xs tracking-wider leading-tight text-center uppercase text-zinc-900">
          {name}
        </div>
      </div>
    </div>
  );
}

function ExcellenceinElectricalEngineering() {
  const [activeIndex, setActiveIndex] = useState(0);

  const sectors = [
    {
      name: "DATA CENTERS",
      description:
        "Earthing health assessment, surge protection, EMC management, and power quality studies for critical IT infrastructure.",
    },
    {
      name: "OIL & GAS",
      description:
        "Offshore platforms, artificial islands, subsea cable systems, onshore processing facilities, and EPC/EPCC project support across the full power systems study programme.",
    },
    {
      name: "RENEWABLE ENERGY",
      description:
        "Earthing audits compliant with CEA Regulations 2023, LPS for solar and wind installations, and power system studies.",
    },
    {
      name: "MANUFACTURING PLANT",
      description:
        "Full range of services across automobile, steel, heavy industry, metro rail, hospitals, commercial buildings.",
    },
    {
      name: "POWER UTILITIES",
      description:
        "EHV and HV substation earthing, earth grid simulation, LPS design, and power system studies.",
    },
    {
      name: "PROCESS PLANT",
      description:
        "Petrochemicals, chemicals, pharmaceuticals, fertilisers, food and beverages.",
    },
  ];

  // FIX 1: move by 1 step at a time (removed itemsPerPage = 4)
  const maxIndex = sectors.length - 1; // 5

  const next = () => setActiveIndex((prev) => Math.min(prev + 1, maxIndex));
  const prev = () => setActiveIndex((prev) => Math.max(prev - 1, 0));

  const atStart = activeIndex === 0;
  const atEnd = activeIndex === maxIndex;

  return (
    <section
      className="relative w-full overflow-hidden text-white flex flex-col justify-center px-[94px] max-md:px-5 py-20"
      style={{
        minHeight: "920px",
        backgroundImage: "url(/AboutUs/Area_of_Expertise.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      <div className="absolute inset-0 bg-[#1a1a1a]/75" />

      <div className="relative z-10 w-full max-w-[1540px] mx-auto">
        {/* NAV BUTTONS — top right
            FIX 2: invert button styles at the boundaries
            - At start (atStart): left = white-filled (inverted), right = outlined
            - At end (atEnd):   left = outlined, right = white-filled (inverted)
            - In the middle:    left = outlined, right = white-filled (default)
        */}
        <div className="absolute top-0 right-0 flex gap-4 z-20">
          {/* PREV BUTTON */}
          <button
            onClick={prev}
            disabled={atStart}
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
            style={{
              opacity: atStart ? 0.4 : 1,
              // inverted (white-filled) when at start, otherwise outlined
              background: atStart ? "#ffffff" : "transparent",
              border: "1px solid white",
              color: atStart ? "#000000" : "#ffffff",
            }}
          >
            ←
          </button>

          {/* NEXT BUTTON */}
          <button
            onClick={next}
            disabled={atEnd}
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
            style={{
              opacity: atEnd ? 0.4 : 1,
              // outlined when at end, otherwise white-filled
              background: atEnd ? "transparent" : "#ffffff",
              border: "1px solid white",
              color: atEnd ? "#ffffff" : "#000000",
            }}
          >
            →
          </button>
        </div>

        {/* HEADING */}
        <h1
          className="text-[#C02429] uppercase mb-6"
          style={{
            fontWeight: 700,
            fontSize: "32px",
            lineHeight: "71.5px",
            letterSpacing: "4.53px",
          }}
        >
          AREAS OF EXPERTISE
        </h1>

        {/* DESCRIPTION */}
        <p
          className="text-gray-300 mb-16"
          style={{
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "160%",
            maxWidth: "900px",
          }}
        >
          We provide the below-mentioned solutions for Transmission &amp;
          Distribution Utilities, Oil &amp; Gas, Infrastructure, and such other
          customers. Earthing/Grounding Studies, Lightning Protection Studies,
          Power System Studies, Power Quality Studies, Instrumentation Earthing
        </p>

        {/* SLIDER WRAPPER */}
        <div className="relative w-full mt-10">
          {/* GLOBAL CONTINUOUS LINE */}
          <div className="absolute top-[39px] left-[-50vw] right-[-50vw] h-[1px] bg-white/30 z-0" />

          {/* SLIDING TRACK */}
          <div
            className="relative flex gap-[20px] transition-transform duration-700 ease-in-out z-10"
            style={{ transform: `translateX(-${activeIndex * (346 + 20)}px)` }}
          >
            {sectors.map((item, index) => {
              // FIX 3: active card = whiteish, others = dark; active dot = red, others = white
              const isActive = activeIndex === index;

              return (
                <div
                  key={index}
                  className="flex flex-col w-[346px] shrink-0 cursor-pointer group"
                  onClick={() => setActiveIndex(index)}
                >
                  {/* TAB LABEL */}
                  <div className="h-[30px] flex items-end mb-[8px]">
                    <span
                      className={`uppercase tracking-[0.1em] text-[11px] transition-colors duration-300 ${
                        isActive
                          ? "font-bold text-white"
                          : "font-normal text-gray-400 group-hover:text-white"
                      }`}
                    >
                      {item.name}
                    </span>
                  </div>

                  {/* DOT CONTAINER */}
                  <div className="relative w-full h-[2px] flex items-center">
                    {isActive ? (
                      // Active dot: red (as requested)
                      <div className="absolute left-0 w-[14px] h-[14px] bg-[#C02429] rounded-full z-10" />
                    ) : (
                      // Inactive dot: white
                      <div className="absolute left-0 w-2.5 h-2.5 bg-white rounded-full z-10" />
                    )}
                  </div>

                  {/* CARD — active = whiteish (#F9F7F2), others = dark transparent */}
                  <div
                    className="mt-[32px] p-8 transition-all duration-500 ease-in-out"
                    style={{
                      height: "360px",
                      background: isActive
                        ? "#F9F7F2"
                        : "rgba(27, 24, 24, 0.85)",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "14px",
                        lineHeight: "1.6",
                        color: isActive ? "#312d2d" : "#e5e7eb",
                      }}
                    >
                      {item.description}
                    </p>
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
function TechnologyPatents() {
  const [activeTool, setActiveTool] = useState(null);

  useEffect(() => {
    document.body.style.overflow = activeTool ? "hidden" : "auto";
  }, [activeTool]);

  const toolKeys = ["audit", "ebuild", "shield"];

  const tools = {
    audit: {
      title: "JEF SAFETY AUDIT TOOL",
      desc: "World's first automated safety audit tool. 16000+ reports, 630,000+ data points, 230,000+ images, zero data mix-up. Patented.",
    },
    ebuild: {
      title: "JEF E - BUILD",
      desc: "Real-time LPS installation monitoring and remote certification.",
    },
    shield: {
      title: "JEF SHIELD",
      desc: "Automated LPS risk assessment and design to IEC 62305-2. Complete report, drawings, and BOM in under 90 seconds.",
    },
  };

  const buttonConfig = [
    {
      key: "audit",
      src: "/AboutUs/jef safety button.png",
      top: "369px",
      left: "100px",
    },
    {
      key: "ebuild",
      src: "/AboutUs/jef e-build button.png",
      top: "380px",
      left: "769px",
    },
    {
      key: "shield",
      src: "/AboutUs/jef shield button.png",
      top: "599px",
      left: "509px",
    },
  ];

  const currentIndex = activeTool ? toolKeys.indexOf(activeTool) : -1;
  const atStart = currentIndex === 0;
  const atEnd = currentIndex === toolKeys.length - 1;

  const goNext = () => {
    if (currentIndex < toolKeys.length - 1) {
      setActiveTool(toolKeys[currentIndex + 1]);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setActiveTool(toolKeys[currentIndex - 1]);
    }
  };

  return (
    <section className="w-full bg-[#F9F7F2] h-[780px] relative overflow-hidden">
      {/* HEADER */}
      <div className="absolute left-[100px] top-[66px] w-[1221px] flex flex-col gap-[41px]">
        <h2 className="text-[#C02429] font-bold uppercase tracking-[3.36px] text-[32px] leading-[52.91px] w-[554px]">
          TECHNOLOGY AND PATENTS
        </h2>
        <p className="text-gray-600 text-[20px] leading-[150%] w-[1221px]">
          9 granted patents — India, United States, European Union. JEF's
          proprietary tools are not incremental improvements to existing
          approaches. They are purpose-built responses to specific gaps in what
          the industry was delivering.
        </p>
      </div>

      {/* TOOL BUTTONS */}
      {buttonConfig.map(({ key, src, top, left }) => (
        <div
          key={key}
          className="absolute w-[260px] h-[61px] cursor-pointer z-10 transition-transform duration-200 hover:scale-105 active:scale-95"
          style={{ top, left }}
          onClick={() => setActiveTool(key)}
        >
          <img src={src} className="w-full h-full object-contain" alt={key} />
        </div>
      ))}

      {/* DIM OVERLAY */}
      {activeTool && (
        <div
          className="fixed inset-0 bg-black/50 z-[9998] transition-opacity duration-500"
          onClick={() => setActiveTool(null)}
        />
      )}

      {/* SLIDE PANEL */}
      <div
        className={`fixed top-0 right-0 h-screen w-[637px] bg-[#F9F7F2] z-[9999]
          transform transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${activeTool ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={() => setActiveTool(null)}
          className="absolute top-[42.5px] right-[42px] w-[48px] h-[48px] bg-[#C02429] rounded-full flex items-center justify-center text-white text-xl hover:scale-110 hover:bg-red-700 transition"
        >
          ✕
        </button>

        {/* PANEL NAV BUTTONS — inside the slide panel, same style */}
        {activeTool && (
          <div
            className="absolute flex gap-[20px]"
            style={{ bottom: "60px", left: "127px" }}
          >
            <button
              onClick={goPrev}
              disabled={atStart}
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "60px",
                border: "1px solid #C02429",
                padding: "18px",
                background: "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: atStart ? "not-allowed" : "pointer",
                opacity: atStart ? 0.4 : 1,
                transition: "opacity 0.3s",
                boxSizing: "border-box",
              }}
            >
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                <path
                  d="M17 7H1M1 7L7 1M1 7L7 13"
                  stroke="#C02429"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              onClick={goNext}
              disabled={atEnd}
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "60px",
                border: "1px solid #C02429",
                padding: "18px",
                background: "#C02429",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: atEnd ? "not-allowed" : "pointer",
                opacity: atEnd ? 0.4 : 1,
                transition: "opacity 0.3s",
                boxSizing: "border-box",
              }}
            >
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                <path
                  d="M1 7H17M17 7L11 1M17 7L11 13"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        )}

        {/* CONTENT */}
        {activeTool && (
          <div className="absolute top-[287px] left-[127px] w-[383px] flex flex-col gap-[24px]">
            <h3 className="text-[#C02429] font-bold uppercase tracking-[1.49px] text-[26px] leading-[43.4px]">
              {tools[activeTool].title}
            </h3>
            <p className="text-gray-600 text-[18px] leading-[150%]">
              {tools[activeTool].desc}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

const NavItem = ({ text, href, isActive }) => (
  <Link href={href}>
    <div
      className={`self-stretch my-auto text-sm tracking-wide leading-none uppercase whitespace-nowrap cursor-pointer transition-colors duration-200 ${
        isActive ? "text-neutral-300 hover:text-white" : "text-red-700"
      }`}
    >
      {text}
    </div>
  </Link>
);

const NavSeparator = () => (
  <div className="flex flex-col self-stretch px-2.5 my-auto w-[27px]">
    <div className="flex items-center w-[7px]">
      <div className="flex flex-col justify-center self-stretch my-auto min-h-[7px] w-[7px]">
        <img
          loading="lazy"
          src="HomePageImg/NavbarImg/Dropdown.png"
          className="object-contain flex-1 w-full aspect-square rotate-270 invert  translate-y-[2px]"
          alt=""
        />
      </div>
    </div>
  </div>
);

const Navigation = () => {
  const pathname = usePathname();

  const navItems = [
    { text: "HOME", href: "/" },
    { text: "ABOUT", href: "/about-us" },
  ];

  return (
    <nav className="flex flex-col justify-center px-24 py-6 bg-[#F9F7F2] max-md:px-5">
      <div className="flex w-full max-md:max-w-full">
        <div className="flex items-center h-full">
          {navItems.map((item, index) => (
            <div key={index} className="flex items-center">
              <NavItem
                text={item.text}
                href={item.href}
                isActive={pathname === item.href}
              />

              {index !== navItems.length - 1 && <NavSeparator />}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default AboutUsContent;

"use client";

import { useState } from "react";

function LeadershipSection() {
  const [selectedLeader, setSelectedLeader] = useState(null);

  const Leaders = [
    {
      id: 1,
      name: "Prashanth BG",
      title: "CHAIRMAN & MANAGING DIRECTOR",
      image: "./LeadershipTeamImg/PrashantBG.png",
      description:
        "JEF Group | US and EU Patented: Accurate Grounding Fault Detection Technology | 30+ Years in Electrical Industry | 30+ Countries | Entering US Gulf Coast Market",
    },
    {
      id: 2,
      name: "PK KASINATHAN",
      title: "CEO - JEF Consulting | Fellow of IE (India)",
      image: "./LeadershipTeamImg/KASINATHAN.png",
      description:
        "Chartered Engineer | Project Management Professional | Energy Auditor | 45+ years in Power Stations and Aluminium Smelter in Bahrain & India | Multi-national vendors & consultants interactions",
    },
    {
      id: 3,
      name: "BADRINARAYANAN THIRUMALAI",
      title: "CEO Products & EMI",
      image: "./LeadershipTeamImg/BADRINARAYANAN.png",
      description:
        "36 years of Industrial experience in Instrumentation, Electrical & Renewable Energy | Business Strategist skilled in diagnosing landscapes with the Strategy Canvas to unlock accelerated growth.",
    },
    {
      id: 4,
      name: "AS RAVISHANKAR",
      title: "Advisor & Mentor, JEF Group",
      image: "./LeadershipTeamImg/RAVISHANKAR.png",
      description:
        "Technical and Engineering Services BU | 43 Years in Electrical Industry | 30 + Countries | Focused in India and ASEAN Markets.",
    },

    // {
    //   id: 5,
    //   name: "Dr Mahmoud Alyamani",
    //   title: "Health and Well-Being Sector Head",
    //   image: "./LeadershipTeamImg/mahmoud-alyamani-v3.png",
    //   variant: "red"
    // },
    // {
    //   id: 6,
    //   name: "Nader Ashoor",
    //   title: "Chief Financial Officer",
    //   image: "./LeadershipTeamImg/nader-ashoor.png",
    //   variant: "red"
    // },
    // {
    //   id: 7,
    //   name: "Joseph Bradley",
    //   title: "TONOMUS CEO",
    //   image: "./LeadershipTeamImg/Bradley.png",
    //   variant: "red"
    // },
    // {
    //   id: 8,
    //   name: "Dr Richard Bush",
    //   title: "Chief Environment Officer",
    //   image: "./LeadershipTeamImg/Richard-Bush.png",
    //   variant: "red"
    // },
    // {
    //   id: 9,
    //   name: "Niall Gibbons",
    //   title: "Head of Tourism",
    //   image: "./LeadershipTeamImg/Niall-Gibbons.png",
    //   variant: "red"
    // },
    // {
    //   id: 10,
    //   name: "Denis Hickey",
    //   title: "Chief Development Officer, THE LINE",
    //   image: "./LeadershipTeamImg/Hickey.png",
    //   variant: "red"
    // },
    // {
    //   id: 11,
    //   name: "Michael Lynch",
    //   title: "Entertainment & Culture Sector Head",
    //   image: "./LeadershipTeamImg/michael-lynch-bnw.png",
    //   variant: "red"
    // },
    // {
    //   id: 12,
    //   name: "Dr Paul Marshall",
    //   title: "Head of Nature Region",
    //   image: "./LeadershipTeamImg/Paul-Marshall_AYF03551.png",
    //   variant: "red"
    // },
    // {
    //   id: 13,
    //   name: "Majid Mufti",
    //   title: "JEF Investment Fund CEO",
    //   image: "./LeadershipTeamImg/Majid-Mufti.png",
    //   variant: "red"
    // },
    // {
    //   id: 14,
    //   name: "Jan Paterson",
    //   title: "Head of Sport",
    //   image: "./LeadershipTeamImg/Paterson.png",
    //   variant: "red"
    // },
    // {
    //   id: 15,
    //   name: "Roberto Penno",
    //   title: "Chief Projects Officer",
    //   image: "./LeadershipTeamImg/roberto-penno-v2.png",
    //   variant: "red"
    // },
    // {
    //   id: 16,
    //   name: "Stefan Ricketts",
    //   title: "Chief Legal Officer",
    //   image: "./LeadershipTeamImg/stefan-ricketts-v2.png",
    //   variant: "red"
    // },
    // {
    //   id: 17,
    //   name: "Peter Terium",
    //   title: "ENOWA CEO",
    //   image: "./LeadershipTeamImg/Terium.png",
    //   variant: "red"
    // },
    // {
    //   id: 18,
    //   name: "Vishal Wanchoo",
    //   title: "OXAGON CEO",
    //   image: "./LeadershipTeamImg/Vishal-Wanchoo_AYF02431-1.png",
    //   variant: "red"
    // }
  ];

  return (
    <>
      <section className="bg-[#F9F7F2] py-20">
        {/* Search Bar */}
        <div className="max-w-[1260px] mx-auto px-4 mb-16">
          <div className="relative w-full max-w-[310px] h-[59px]">
            <input
              type="text"
              placeholder="Search"
              className="w-full h-full border border-[#E8E9E9] rounded-[4px] bg-white px-5 pr-12 text-[14px] font-light outline-none"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-[#C02429]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-4.35-4.35m0 0A7.5 7.5 0 1 0 5.5 5.5a7.5 7.5 0 0 0 11.15 11.15Z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Leadership Grid */}
        <div className="max-w-[1260px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-start gap-y-16">
          {Leaders.map((leader) => (
            <article
              key={leader.id}
              className="w-[240px] flex flex-col justify-start"
            >
              {/* Image */}
              <div className="w-[240px] h-[240px] overflow-hidden bg-[#D9D9D9]">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover transition duration-500"
                />
              </div>

              {/* Name */}
              <h2 className="mt-6 h-[50px] text-[20px] leading-[20px] font-light text-[#111111] uppercase flex items-start">
                {leader.name}
              </h2>

              {/* Role */}
              <p className="mt-3 min-h-[48px] text-[14px] leading-[24px] font-light text-[#C02429] uppercase">
                {leader.title}
              </p>

              {/* Arrow */}
              <button
                onClick={() => setSelectedLeader(leader)}
                className="mt-4 w-6 h-6 flex items-center transition-transform duration-300 hover:translate-x-1"
                aria-label={`View ${leader.name}'s profile`}
              >
                <img src="./AboutUs/arrow.png" alt="Arrow" />
              </button>
            </article>
          ))}
        </div>

        {/* Overlay — z-[9998] to sit above navbar */}
        <div
          onClick={() => setSelectedLeader(null)}
          className={`fixed inset-0 bg-black/30 z-[9998] transition-opacity duration-500 ${
            selectedLeader
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        />

        {/* Sliding Panel — z-[9999] to sit above overlay AND navbar */}
        <div
          className={`fixed top-0 right-0 h-screen w-full sm:w-[575px] bg-[#F5F5F5] z-[9999] transition-transform duration-500 ease-in-out overflow-hidden ${
            selectedLeader ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {selectedLeader &&
            (() => {
              const currentIndex = Leaders.findIndex(
                (l) => l.id === selectedLeader.id,
              );
              const atStart = currentIndex === 0;
              const atEnd = currentIndex === Leaders.length - 1;

              const goPrev = () => {
                if (!atStart) setSelectedLeader(Leaders[currentIndex - 1]);
              };
              const goNext = () => {
                if (!atEnd) setSelectedLeader(Leaders[currentIndex + 1]);
              };

              return (
               <div className="relative h-screen px-[50px] pt-[85px] pb-[40px]">
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedLeader(null)}
                    className="absolute top-10 right-10 w-[54px] h-[54px] rounded-full bg-[#C02429] flex items-center justify-center text-white text-2xl font-light"
                  >
                    ×
                  </button>

                  {/* Content */}
                  <div className="max-w-[400px] flex flex-col gap-[22px]">
                    {/* Image */}
                    <div className="w-[240px] h-[240px] overflow-hidden bg-[#D9D9D9]">
                      <img
                        src={selectedLeader.image}
                        alt={selectedLeader.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Name + Role */}
                    <div className="flex flex-col gap-[18px]">
                      <h2 className="text-[21px] leading-[40px] font-medium text-[#1A1A1A]">
                        {selectedLeader.name}
                      </h2>
                      <p className="text-[16px] leading-[24px] font-light text-[#C02429]">
                        {selectedLeader.title}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-[16px] leading-[24px] font-light text-[#2A2A2A]">
                      {selectedLeader.description}
                    </p>

                    {/* Nav Buttons */}
                    <div className="flex gap-[20px] mt-4">
                      {/* PREV — outlined */}
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
                          flexShrink: 0,
                        }}
                      >
                        <svg
                          width="18"
                          height="14"
                          viewBox="0 0 18 14"
                          fill="none"
                        >
                          <path
                            d="M17 7H1M1 7L7 1M1 7L7 13"
                            stroke="#C02429"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>

                      {/* NEXT — filled red */}
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
                          flexShrink: 0,
                        }}
                      >
                        <svg
                          width="18"
                          height="14"
                          viewBox="0 0 18 14"
                          fill="none"
                        >
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
                  </div>
                </div>
              );
            })()}
        </div>
      </section>
    </>
  );
}

export default LeadershipSection;

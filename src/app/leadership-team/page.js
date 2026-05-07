import LeadershipSection from "./LeadershipSection";

export const metadata = {
  title: "Leadership Team | JEF UAE",
  description:
    "JEF UAE business, electrical solutions, safety systems, engineering services, industry solutions, electrical services, innovative engineerin.",
  keywords:
    "JEF UAE business, electrical solutions, safety systems, engineering services, industry solutions, electrical services, innovative engineerin",
  openGraph: {
    url: "https://www.jefuae.com/leadership-team",
    siteName: "Leadership Team | JEF UAE",
    description:
      "Meet the visionary leaders driving JEF UAE's success. Our leadership team brings expertise and innovation to deliver top-tier electrical and safety solutions",
  },
  alternates: {
    canonical: "https://www.jefuae.com/leadership-team",
  },
};

export default function Team() {
  const navItems = [
    { label: "HOME", isActive: true },
    { label: "ABOUT US", isActive: true },
    { label: "JEF LEADERSHIP TEAM", isActive: false },
  ];

  return (
    <>
      <main className="flex flex-col min-h-screen bg-neutral-100">
        <header className="relative h-screen overflow-hidden">
          <img
            src="./LeadershipTeamImg/JEF Leadership image.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover z-10"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="relative z-10 lg:mx-[5%] p-3 h-full flex flex-col justify-end pb-16">
            <h1 className="text-white text-3xl lg:text-5xl font-bold tracking-wider">
              JEF LEADERSHIP TEAM
            </h1>
          </div>
        </header>

        <nav
          className="flex flex-col justify-center py-6 px-24 w-full bg-[#F9F7F2]
 min-h-[64px] max-md:px-5 max-md:max-w-full"
        >
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
                            src="/AboutUs/DropdownArr.png"
                            alt=""
                            className="object-contain w-[10px] h-[10px] rotate-[-90deg] brightness-0"
                            style={{
                              filter:
                                "brightness(0) saturate(100%) invert(15%) sepia(6%) saturate(743%) hue-rotate(314deg) brightness(94%) contrast(90%)",
                            }}
                          />{" "}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </nav>
        <section>
          <LeadershipSection />
        </section>
      </main>
    </>
  );
}



import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import WhoWeAreSection from "./sections/WhoWeAre";
import WhatWeDoSection from "./sections/WhatWeDoSection";
import ExcellenceinElectricalEngineering from "./sections/AreaOfExpertise";
import TechnologyPatents from "./sections/TechnologyPatents";
import Overview from "./sections/Overview";
import OurPresence from "./sections/OurPresence";
import Navigation from "@/components/Navigation";
import DownloadSection from "./sections/DownloadSection";


gsap.registerPlugin(ScrollTrigger);

export default function AboutUsContent  ()  {
 


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
    <section className="section-container flex relative inset-y-[78%] flex-col mt-6 max-md:mb-2.5">
      <h1 className="md:text-4xl text-3xl font-bold tracking-wide text-white max-md:text-3xl">
        JEF GROUP OF COMPANIES
      </h1>
    </section>
  </main>
</section>
<section>
  <Navigation currentPage="about-us"/>
</section>
      

   <section>
     <WhoWeAreSection/>
   </section>
<section>
     <WhatWeDoSection/>
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
        <OurPresence />
      </section>
      <section>
        <DownloadSection/>
      </section>

    </>
  );
};



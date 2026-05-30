"use client";


import Hero from "./sections/Hero";
import ProductIntro from "./sections/ProductIntro";
import DetailedContent from "./sections/DetailedContent";

import DownloadSection from "./sections/DownloadSection";

const RenewableEnergy = () => {
  

  return (
    <div className="bg-[#232427]">
      <Hero  videoSrc="./HomePageImg/Banner-2.mp4" />
      <ProductIntro 
       
      />
      <DetailedContent  />
     
      <DownloadSection />
    </div>
  );
};

export default RenewableEnergy;

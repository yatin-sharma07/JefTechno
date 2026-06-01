'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const blogData = {
  'blog1': {
    category: "PRESS RELEASE",
    title: "ENHANCE RELIABILITY, EFFICIENCY AND COMPLIANCE OF YOUR ELECTRICAL GRID THROUGH POWER SYSTEM STUDIES",
    date: "April 2026",
    imageUrl: "/BlogImg/blog-6.png",
    content: (
      <div className="flex flex-col gap-8 text-white/80 font-light leading-relaxed">
        <p>
          In the Middle Eastern region, where the energy sector is rapidly evolving, the performance of an electrical system is directly linked to the interplay of its connected equipment and operating conditions. Proper simulation design and analysis are vital for an electrical system to perform at optimal levels. Power system studies play a pivotal role in ensuring the smooth and reliable operation of electrical systems, resulting in fewer unexpected outages and disruptions, while identifying potential safety hazards to ensure a safe working environment.
        </p>

        <div>
          <h3 className="text-white font-bold mb-4 uppercase">Power System Studies Help:</h3>
          <ul className="list-disc pl-5 flex flex-col gap-2">
            <li>Enhance System Resilience, Reliability, and Efficiency.</li>
            <li>Improve Safety.</li>
            <li>Support Capacity Planning, Expansion, and Upgradation Decisions.</li>
            <li>Reduce Downtime and Shutdowns.</li>
            <li>Ensure Compliance with Industry-Specific Standards and Regulations.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-2 uppercase">Our Offerings</h3>
          <p>
            JEF offers Power System Studies for: Substations | Wind Farms | Pooling Substations | Solar Photovoltaic Power Plants | Gas Turbine Power Plants | Hydropower Stations | Distribution Stations – LV Side | Oil & Gas | Water Treatment Plants | Data Centres | Process Plants | Steel Plants | Petrochemical Plants
          </p>
        </div>

        <div>
          <h3 className="text-white font-bold mb-2 uppercase">Our Approach</h3>
          <p>
            Structured Processes for Guaranteed Results Our experts, with vast experience across varied applications, recommend the most optimal configuration and design for your electrical system to ensure safe and reliable operations using reputed tools like PSS®E, ETAP, DIgSILENT, PSCAD, and more. Our unique value proposition of measure-simulate-validate offers a 360-degree perspective and foolproof solution under actual operating conditions.
          </p>
        </div>
      </div>
    )
  },
  'blog2': {
    category: "PRESS RELEASE",
    title: "EARTHING AND LIGHTNING PROTECTION FOR RELIGIOUS STRUCTURES",
    date: "April 2026",
    imageUrl: "/BlogImg/blog-1.png",
    content: (
      <div className="flex flex-col gap-8 text-white/80 font-light leading-relaxed">
        <p>
          Religious structures, often characterized by their historical significance and unique architectural features, require specialized earthing and lightning protection solutions. These buildings frequently stand as the tallest structures in their vicinity, making them prime targets for lightning strikes.
        </p>
        <div className="flex flex-col gap-6">
          <p><strong>Protection Challenges:</strong> The use of traditional materials, intricate designs, and the need to preserve aesthetic integrity while ensuring safety presents unique engineering challenges.</p>
          <p><strong>Comprehensive Solutions:</strong> Our approach combines advanced lightning risk assessment with discrete protection measures that blend seamlessly with the structure's architecture.</p>
        </div>
        <p>
          By implementing robust earthing systems and strategically placed air terminals, we ensure these iconic landmarks are protected from the devastating effects of lightning while maintaining their cultural and spiritual essence.
        </p>
      </div>
    )
  },
  'blog3': {
    category: "PRESS RELEASE",
    title: "MEASUREMENT, SIMULATION, VALIDATION - THE 3 KEY STEPS OF POWER SYSTEM STUDIES",
    date: "April 2026",
    imageUrl: "/BlogImg/blog-2.png",
    content: (
      <div className="flex flex-col gap-8 text-white/80 font-light leading-relaxed">
        <p>
          Power system studies are essential for the development, design, and analysis of electric power systems. They help ensure the safety and reliability of power systems while also minimizing environmental impact.
        </p>
        <div className="space-y-6">
          <h3 className="text-white font-bold uppercase">The Three Key Steps:</h3>
          <div>
            <p className="text-white font-medium mb-2">1. Measurement</p>
            <p>The first step in any power system study. It is the process of collecting data about the system, accurately measuring key parameters such as voltage, current, power, and energy.</p>
          </div>
          <div>
            <p className="text-white font-medium mb-2">2. Simulation</p>
            <p>Allows for testing different scenarios without physically modifying the system, saving time and money while allowing greater control over experimentation.</p>
          </div>
          <div>
            <p className="text-white font-medium mb-2">3. Validation</p>
            <p>The process of comparing model predictions to actual measurements. This ensures the results of the simulation accurately represent reality.</p>
          </div>
        </div>
      </div>
    )
  },
  'blog4': {
    category: "PRESS RELEASE",
    title: "WHAT ARE THE CHALLENGES FOR ELECTRICAL SYSTEM DESIGN AND ENGINEERING IN GREENFIELD PROJECTS",
    date: "April 2026",
    imageUrl: "/BlogImg/blog-3.png",
    content: (
      <div className="flex flex-col gap-8 text-white/80 font-light leading-relaxed">
        <p>
          Greenfield projects refer to construction projects on land where no previous development has taken place. These projects present unique challenges when it comes to electrical safety. The construction site is often remote and the installation of electrical systems is often complex.
        </p>
        <div className="grid gap-6">
          <h3 className="text-white font-bold uppercase">Key Factors for Efficiency:</h3>
          <ul className="list-disc pl-5 flex flex-col gap-3">
            <li><strong>Project plan:</strong> Must include a risk assessment plan identifying potential risk and how to mitigate them.</li>
            <li><strong>Efficient electrical system:</strong> Requires a thorough understanding of the project's requirements and latest technologies.</li>
            <li><strong>Compliance:</strong> Essential for any construction project to meet local regulations and codes.</li>
            <li><strong>Grounding systems:</strong> Imperative for ensuring safety and reliability, especially in varying soil conditions.</li>
          </ul>
        </div>
        <p>
          Electrical safety measures are designed to protect workers and equipment from electrical hazards including shock, burns, fires, and explosions. Safety measures must be implemented at all stages: design, installation, and operation.
        </p>
      </div>
    )
  },
  'blog5': {
    category: "PRESS RELEASE",
    title: "WHY ELECTRICAL SAFETY IS CRITICAL FOR CHEMICAL AND PHARMA INDUSTRIES: BEST PRACTICES FOR PREVENTING WORKPLACE ACCIDENTS",
    date: "April 2026",
    imageUrl: "/BlogImg/blog-4.png",
    content: (
      <div className="flex flex-col gap-8 text-white/80 font-light leading-relaxed">
        <p>
          Electrical safety is essential to workplace safety in the chemical and pharmaceutical industries. These industries involve complex machinery and equipment which, if not handled properly, can lead to dangerous accidents.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/5 p-6 rounded-xl">
            <h4 className="text-white font-bold mb-2 uppercase text-sm">Best Practices:</h4>
            <ul className="list-disc pl-4 space-y-2 text-sm">
              <li>Regular inspections</li>
              <li>Proper worker training</li>
              <li>Appropriate PPE usage</li>
              <li>Lockout/Tag-out (LOTO)</li>
            </ul>
          </div>
          <div className="bg-white/5 p-6 rounded-xl">
            <h4 className="text-white font-bold mb-2 uppercase text-sm">Key Initiatives:</h4>
            <ul className="list-disc pl-4 space-y-2 text-sm">
              <li>Explosion-proof equipment</li>
              <li>Emergency response planning</li>
              <li>Equipment maintenance</li>
              <li>Compliance with standards</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  'blog6': {
    category: "PRESS RELEASE",
    title: "MEASUREMENT, SIMULATION, VALIDATION - THE 3 KEY STEPS OF POWER SYSTEM STUDIES",
    date: "April 2026",
    imageUrl: "/BlogImg/blog-5.png",
    content: (
      <div className="flex flex-col gap-8 text-white/80 font-light leading-relaxed">
        <p>
          Power system studies are essential for the development, design, and analysis of electric power systems. They help ensure the safety and reliability of power systems while also minimizing environmental impact.
        </p>
        <div className="space-y-6">
          <h3 className="text-white font-bold uppercase">The Three Key Steps:</h3>
          <div>
            <p className="text-white font-medium mb-2">1. Measurement</p>
            <p>The first step in any power system study. It is the process of collecting data about the system, accurately measuring key parameters such as voltage, current, power, and energy.</p>
          </div>
          <div>
            <p className="text-white font-medium mb-2">2. Simulation</p>
            <p>Allows for testing different scenarios without physically modifying the system, saving time and money while allowing greater control over experimentation.</p>
          </div>
          <div>
            <p className="text-white font-medium mb-2">3. Validation</p>
            <p>The process of comparing model predictions to actual measurements. This ensures the results of the simulation accurately represent reality.</p>
          </div>
        </div>
      </div>
    )
  }
};

const blogPosts = Object.keys(blogData).map(id => ({
  id,
  ...blogData[id],
  path: `/blog/${id}`
}));

const NewsCard = ({ category, title, date, imageUrl, path, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="flex flex-col w-full group cursor-pointer"
  >
    <Link href={path}>
      <div className="overflow-hidden aspect-[16/9]">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
      </div>
      <div className="mt-4 sm:mt-5 md:mt-6 flex flex-col gap-3">
        <span className="text-white text-[10px] md:text-xs tracking-[2px] uppercase">
          {category}
        </span>
        <h3 className="text-white text-sm md:text-[15px]  tracking-[2px] leading-[1.4] uppercase tracking-wide group-hover:text-[#C02429] transition-colors">
          {title}
        </h3>
        <span className="text-gray-400 text-xs md:text-sm font-light">
          {date}
        </span>
      </div>
    </Link>
  </motion.div>
);

const MainBlogPage = () => {
  return (
    <div className="bg-[#1D1F22] min-h-screen font-montserrat pt-[80px] md:pt-[90px]">
      {/* News & Media Header */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="w-full  py-4 md:py-6 bg-[#2D2E30]"
      >
        <div className="section-container px-4 sm:px-6 lg:px-0  lg:pt-5 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-white/60 text-xs md:text-sm tracking-[2px] uppercase font-medium">
            News & Media
          </span>
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10">
            {['OVERVIEW', 'ALL NEWS', 'RESOURCES', 'EVENTS', 'PRESS ENQUIRES'].map((item) => (
              <Link 
                key={item} 
                href="#" 
                className={`text-[10px] md:text-xs tracking-[1.5px] uppercase transition-colors ${
                  item === 'ALL NEWS' ? 'text-white' : 'text-white hover:text-white'
                }`}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </motion.div>

      {/* Hero Banner */}
      <div className="w-full bg-[#1B1818] py-12 sm:py-16 md:py-16">
        <div className="section-container px-4 sm:px-6 lg:px-0">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="text-white text-4xl md:text-4xl tracking-[3px] uppercase"
          >
            Newsroom
          </motion.h1>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="w-full bg-[#2D2E30] py-4 border-t border-white/5">
        <div className="section-container px-4 sm:px-6 lg:px-0 flex flex-wrap items-center gap-2 text-[10px] tracking-[1px] uppercase">
          <Link href="/" className="text-white/40 hover:text-[#C02429]">Home</Link>
          <span className="text-white/20">›</span>
          <Link href="/blog" className="text-[#C02429] hover:text-[#C02429]">Our Blogs</Link>
          
          
        </div>
      </div>

      {/* Main Content */}
      <main className="section-container px-4 sm:px-6 lg:px-0 py-12 sm:py-16 md:py-24">
        <div className=" sm:px-6 lg:px-0">
          <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[#C02429] text-2xl md:text-3xl font-bold tracking-[2px] uppercase mb-10 sm:mb-12"
        >
          All News
        </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-12 md:gap-y-16">
          {blogPosts.map((post, index) => (
            <NewsCard key={post.path} {...post} index={index} />
          ))}
        </div>

        {/* Pagination */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 sm:mt-16 md:mt-20 flex justify-center items-center gap-3 sm:gap-4"
        >
          <button className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/20 flex items-center justify-center text-white/40 hover:border-white hover:text-white transition-all">
            <ChevronLeft size={20} />
          </button>
          <div className="flex items-center gap-2">
            {[1, 2, 3].map((page) => (
              <button 
                key={page}
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                  page === 1 
                  ? 'bg-transparent border border-[#C02429] text-[#C02429]' 
                  : 'text-white/40 hover:text-white'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
          <button className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/20 flex items-center justify-center text-white/40 hover:border-white hover:text-white transition-all">
            <ChevronRight size={20} />
          </button>
        </motion.div>
      </main>
    </div>
  );
};

export default MainBlogPage;
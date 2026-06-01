"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { motion } from "framer-motion";
import WhatWeDoSection from "./HomePageSections/WhatWeDo";
import WhyChooseJEFSection from "./HomePageSections/WhyChooseJEFSection";
import FounderMessageSection from "./HomePageSections/FounderMessageSection";
import BlogsSection from "./HomePageSections/BlogSection";
import OurIndustriesSection from "./HomePageSections/Industry";

gsap.registerPlugin(ScrollTrigger);

function HomeClient() {
  useEffect(() => {
    gsap.fromTo(
      gsap.utils.toArray(".X-axis-card-anm"),
      { opacity: 0, x: 120 },
      {
        x: 0,
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

  useEffect(() => {
    gsap.utils.toArray(".Y-axis-text").forEach((element) => {
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

    gsap.utils.toArray(".Y-axis-text-founder").forEach((element) => {
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
            start: "top 90%",
            toggleActions: "play none none none",
          },
        },
      );
    });
  }, []);

  useEffect(() => {
    gsap.utils.toArray(".X-axis-Title").forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, x: 120 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: element,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        },
      );
    });
  }, []);

  const [itemsPerPage, setItemsPerPage] = useState(1);

  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width >= 1280) {
        setItemsPerPage(3);
      } else if (width >= 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const [index, setIndex] = useState(0);
  const coverRef = useRef(null);
  const carouselRef = useRef(null);
  const totalSlides = 3;

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add(
      {
        largeScreen: "(min-width: 1025px)",
        mediumScreen: "(min-width: 768px) and (max-width: 1024px)",
        smallScreen: "(max-width: 767px)",
      },
      (context) => {
        let { largeScreen, mediumScreen, smallScreen } = context.conditions;
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".container",
            toggleActions: "play none none reverse",
            start: "10 10%",
            end: "center 50%",
            pin: true,
          },
        });
        if (largeScreen) {
          tl.to(".title1", { x: "3vw", opacity: 0, scrub: true }, "display")
            .to(".description1", { y: "1rem", opacity: 0 }, "display")
            .fromTo(".title2", { x: "2vw", opacity: 0 }, { x: 0, opacity: 1 })
            .fromTo(".description2", { y: "0.5rem", opacity: 0 }, { y: 0, opacity: 1 })
            .to(".image1", { x: "60rem", y: "-40rem" }, "display")
            .to(".image2", { x: "-63rem", y: "-40rem" }, "display")
            .to(".buttonRM0", { x: "300rem" }, "display")
            .fromTo(".buttonRM1", { x: "20rem", opacity: 0 }, { x: "0rem", opacity: 1 });
        }
        if (mediumScreen) {
          tl.to(".title1", { x: "2vw", opacity: 0.5, scrub: true }, "display")
            .to(".description1", { y: "1rem", opacity: 0.5 }, "display")
            .fromTo(".title2", { x: "1vw", opacity: 0 }, { x: 0, opacity: 0.8 })
            .fromTo(".description2", { y: "0.3rem", opacity: 0 }, { y: 0, opacity: 0.8 })
            .to(".image1", { x: "30rem", y: "-20rem" }, "display")
            .to(".image2", { x: "10rem", y: "-18rem" }, "display")
            .to(".buttonRM0", { x: "150rem" }, "display")
            .fromTo(".buttonRM1", { x: "10rem", opacity: 0 }, { x: "0rem", opacity: 1 });
        }
        if (smallScreen) {
          tl.to(".SmImg1", { x: "-150%" }, "display")
            .to(".SmImg2", { x: "-113%" }, "display")
            .to(".textSM1", { y: "200%" }, "display")
            .to(".textSM2", { y: "-215%" }, "display");
        }
      },
    );
  });

  const [showVideo, setShowVideo] = useState(false);
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    window.onYouTubeIframeAPIReady = () => {
      const ytPlayer = new window.YT.Player("yt-player", {
        events: {
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.ENDED) {
              setShowVideo(false);
            }
          },
        },
      });
      setPlayer(ytPlayer);
    };
  }, []);

  const closeVideo = useCallback(() => {
    setShowVideo(false);
    if (player) player.stopVideo();
  }, [player]);

  useEffect(() => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (isIOS) {
      document.querySelectorAll("video").forEach((video) => {
        video.play();
      });
    }
  }, []);

  const videoRefs = useRef([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const currentVideo = videoRefs.current[index];
    const DURATION = currentVideo?.duration ? currentVideo.duration * 1000 : 12000;
    let startTime = null;
    let rafId = null;
    setProgress(0);
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const pct = Math.min((elapsed / DURATION) * 100, 100);
      setProgress(pct);
      if (pct < 100) {
        rafId = requestAnimationFrame(animate);
      } else {
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % totalSlides);
        }, 600);
      }
    };
    rafId = requestAnimationFrame(animate);
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [index]);

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        <div
          ref={carouselRef}
          className="bg-no-repeat flex w-[300%] h-full transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(-${(index * 100) / 3}%)` }}
        >
          <div className="relative w-full h-full ">
            <video
              ref={(el) => (videoRefs.current[0] = el)}
              autoPlay
              loop
              muted
              playsInline
              className="absolute size-full object-cover"
            >
              <source src="./HomePageImg/Banner-1.mp4" type="video/mp4" />
            </video>
            <div className="inset-y-2/3 xl:mt-[2%] section-container flex relative flex-col self-center max-md:mt-10 max-md:max-w-full ">
              <h1 className="2xl:text-6xl lg:text-4xl md:text-3xl text-3xl font-bold h-32 md:h-20 2xl:h-36 my-auto tracking-wider text-white">
                THINK ELECTRICAL, <br />
                THINK JEF
              </h1>
            </div>
          </div>
          <div className="relative w-full h-full">
            <video
              ref={(el) => (videoRefs.current[1] = el)}
              autoPlay
              loop
              muted
              playsInline
              className="absolute size-full object-cover"
            >
              <source src="./HomePageImg/Banner-2.mp4" type="video/mp4" />
            </video>
            <div className="inset-y-[26rem] xl:mt-[2%] section-container md:inset-y-2/3 0 flex relative flex-col self-center">
              <h1 className="2xl:text-6xl lg:text-4xl text-3xl font-bold h-32 md:h-20 2xl:h-36 my-auto tracking-wider text-white uppercase">
                Expertise from Low Voltage
                <br />
                to Extra High Voltage
              </h1>
            </div>
          </div>
          <div className="relative w-full h-full">
            <video
              ref={(el) => (videoRefs.current[2] = el)}
              autoPlay
              loop
              muted
              playsInline
              className="absolute size-full object-cover"
            >
              <source src="./HomePageImg/Banner-3.mp4" type="video/mp4" />
            </video>
            <div className="inset-y-2/3 xl:mt-[2%] section-container flex relative flex-col self-center">
              <h1 className="2xl:text-6xl lg:text-4xl md:text-3xl text-3xl font-bold h-32 md:h-20 2xl:h-36 my-auto tracking-wider text-white">
                EXCELLENCE THROUGH DIGITIZATION
              </h1>
            </div>
          </div>
        </div>
        <div ref={coverRef} className="absolute w-full h-full bg-zinc-800"></div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[88%] flex gap-8 z-20">
          {[0, 1, 2].map((item) => (
            <div key={item} className="relative flex-1 h-[3px] bg-white/40 overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full bg-white"
                style={{
                  width: index === item ? `${progress}%` : item < index ? "100%" : "0%",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <WhatWeDoSection />
      <WhyChooseJEFSection />
      <FounderMessageSection />
      <OurIndustriesSection />
      <BlogsSection />
    </>
  );
}

export default HomeClient;

"use client";

import {
  useEffect,
  useRef,
  useState,
  ReactNode,
  TouchEvent,
  WheelEvent,
} from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ScrollExpandMediaProps {
  mediaType?: "video" | "image";
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  title?: string;
  date?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
}

export default function Hero({
  mediaType = "video",
  mediaSrc = "/hero_wedding.mp4",
  posterSrc = "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1200",
  bgImageSrc = "/indian_marriage_bg.png",
  title = "",
  date = "",
  scrollToExpand = "SCROLL TO EXPLORE",
  textBlend = true,
  children,
}: ScrollExpandMediaProps) {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showContent, setShowContent] = useState<boolean>(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState<boolean>(false);
  const [touchStartY, setTouchStartY] = useState<number>(0);
  const [isMobileState, setIsMobileState] = useState<boolean>(false);

  const sectionRef = useRef<HTMLDivElement | null>(null);

  const [prevMediaType, setPrevMediaType] = useState(mediaType);
  if (mediaType !== prevMediaType) {
    setPrevMediaType(mediaType);
    setScrollProgress(0);
    setShowContent(false);
    setMediaFullyExpanded(false);
  }

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollDelta = e.deltaY * 0.0009;
        const newProgress = Math.min(
          Math.max(scrollProgress + scrollDelta, 0),
          1
        );
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartY) return;

      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;

      if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollFactor = deltaY < 0 ? 0.008 : 0.005;
        const scrollDelta = deltaY * scrollFactor;
        const newProgress = Math.min(
          Math.max(scrollProgress + scrollDelta, 0),
          1
        );
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }

        setTouchStartY(touchY);
      }
    };

    const handleTouchEnd = (): void => {
      setTouchStartY(0);
    };

    const handleScroll = (): void => {
      if (!mediaFullyExpanded) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener("wheel", handleWheel as unknown as EventListener, {
      passive: false,
    });
    window.addEventListener("scroll", handleScroll as EventListener);
    window.addEventListener(
      "touchstart",
      handleTouchStart as unknown as EventListener,
      { passive: false }
    );
    window.addEventListener(
      "touchmove",
      handleTouchMove as unknown as EventListener,
      { passive: false }
    );
    window.addEventListener("touchend", handleTouchEnd as EventListener);

    return () => {
      window.removeEventListener(
        "wheel",
        handleWheel as unknown as EventListener
      );
      window.removeEventListener("scroll", handleScroll as EventListener);
      window.removeEventListener(
        "touchstart",
        handleTransitionTouchStart as unknown as EventListener
      );
      window.removeEventListener(
        "touchmove",
        handleTouchMove as unknown as EventListener
      );
      window.removeEventListener("touchend", handleTouchEnd as EventListener);
    };

    // Helper to fix dependencies lint warnings
    function handleTransitionTouchStart(e: TouchEvent) {
      handleTouchStart(e);
    }
  }, [scrollProgress, mediaFullyExpanded, touchStartY]);

  useEffect(() => {
    const checkIfMobile = (): void => {
      setIsMobileState(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const mediaWidth = 300 + scrollProgress * (isMobileState ? 650 : 1250);
  const mediaHeight = 400 + scrollProgress * (isMobileState ? 200 : 400);
  const textTranslateX = scrollProgress * (isMobileState ? 180 : 150);

  const firstWord = title ? title.split(" ")[0] : "";
  const restOfTitle = title ? title.split(" ").slice(1).join(" ") : "";

  return (
    <div
      ref={sectionRef}
      className="transition-colors duration-700 ease-in-out overflow-x-hidden w-full"
    >
      <section className="relative flex flex-col items-center justify-start min-h-[100dvh]">
        <div className="relative w-full flex flex-col items-center min-h-[100dvh]">
          {/* Background Blurred Indian Marriage Mandap */}
          <motion.div
            className="absolute inset-0 z-0 h-full w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 - scrollProgress }}
            transition={{ duration: 0.1 }}
          >
            <Image
              src={bgImageSrc}
              alt="Indian Wedding Mandap Background"
              width={1920}
              height={1080}
              className="w-screen h-screen object-cover object-center"
              priority
            />
            {/* Dark vignette tint */}
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>

          <div className="container mx-auto flex flex-col items-center justify-start relative z-10">
            <div className="flex flex-col items-center justify-center w-full h-[100dvh] relative">
              <div
                className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-none rounded-2xl"
                style={{
                  width: `${mediaWidth}px`,
                  height: `${mediaHeight}px`,
                  maxWidth: "95vw",
                  maxHeight: "85vh",
                  boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.5)",
                }}
              >
                <div className="relative w-full h-full pointer-events-none">
                  <video
                    src={mediaSrc}
                    poster={posterSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover rounded-xl"
                    controls={false}
                    disablePictureInPicture
                    disableRemotePlayback
                  />
                  <div
                    className="absolute inset-0 z-10"
                    style={{ pointerEvents: "none" }}
                  ></div>

                  <motion.div
                    className="absolute inset-0 bg-black/30 rounded-xl"
                    initial={{ opacity: 0.7 }}
                    animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                    transition={{ duration: 0.2 }}
                  />

                  {/* Elegant Fading Branding Watermark (Mobile Only) */}
                  <motion.div
                    className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-4 pointer-events-none select-none md:hidden"
                    style={{ opacity: Math.max(0, 1 - scrollProgress * 4.5) }}
                  >
                    <div className="flex flex-col items-center bg-black/50 px-4 py-3 rounded-sm backdrop-blur-sm border border-white/5">
                      <span className="font-sans text-[7px] tracking-[0.4em] text-champagne/80 uppercase font-semibold leading-none">
                        ESTD 2009
                      </span>
                      <div className="w-5 h-[0.5px] bg-champagne/30 my-2" />
                      <h1 className="font-serif text-sm tracking-[0.25em] text-white uppercase font-light leading-none">
                        SNAP SHOOTER
                      </h1>
                      <h1 className="font-serif text-[8px] tracking-[0.5em] text-champagne uppercase mt-2 font-light leading-none">
                        STUDIOS
                      </h1>
                    </div>
                  </motion.div>

                  {/* Left Side Branding (Desktop Only - positioned relative to the card container) */}
                  <motion.div
                    className="absolute right-[calc(100%+40px)] top-1/2 -translate-y-1/2 text-right hidden md:block select-none pointer-events-none w-[200px]"
                    style={{ opacity: Math.max(0, 1 - scrollProgress * 4.5) }}
                  >
                    <span className="font-sans text-[9px] tracking-[0.4em] text-champagne uppercase font-bold block mb-3">
                      ESTD 2009
                    </span>
                    <h1 className="font-serif text-4xl tracking-[0.15em] text-white uppercase font-light leading-none">
                      SNAP
                    </h1>
                    <h1 className="font-serif text-4xl tracking-[0.15em] text-white uppercase font-light leading-none mt-2.5">
                      SHOOTER
                    </h1>
                  </motion.div>

                  {/* Right Side Branding (Desktop Only - positioned relative to the card container) */}
                  <motion.div
                    className="absolute left-[calc(100%+40px)] top-1/2 -translate-y-1/2 text-left hidden md:block select-none pointer-events-none w-[220px]"
                    style={{ opacity: Math.max(0, 1 - scrollProgress * 4.5) }}
                  >
                    <span className="font-sans text-[9px] tracking-[0.4em] text-champagne/70 uppercase font-bold block mb-3">
                      CREATIVE LEGACY
                    </span>
                    <h1 className="font-serif text-4xl tracking-[0.2em] text-champagne uppercase font-light leading-none">
                      STUDIOS
                    </h1>
                    <span className="font-sans text-[8px] tracking-[0.15em] text-white/50 uppercase block mt-3 leading-relaxed">
                      17 Years of documenting<br />love across India
                    </span>
                  </motion.div>
                </div>

                <div className="flex flex-col items-center text-center relative z-10 mt-4 transition-none">
                  {date && (
                    <p
                      className="text-2xl text-champagne"
                      style={{ transform: `translateX(-${textTranslateX}vw)` }}
                    >
                      {date}
                    </p>
                  )}
                  {scrollToExpand && (
                    <p
                      className="text-champagne font-medium text-center text-xs tracking-editorial uppercase"
                      style={{ transform: `translateX(${textTranslateX}vw)` }}
                    >
                      {scrollToExpand}
                    </p>
                  )}
                </div>
              </div>

              <div
                className={`flex items-center justify-center text-center gap-4 w-full relative z-10 transition-none flex-col ${
                  textBlend ? "mix-blend-difference" : "mix-blend-normal"
                }`}
              >
                {title && (
                  <>
                    <motion.h2
                      className="text-4xl md:text-5xl lg:text-6xl font-serif text-champagne font-light tracking-wide uppercase transition-none"
                      style={{ transform: `translateX(-${textTranslateX}vw)` }}
                    >
                      {firstWord}
                    </motion.h2>
                    <motion.h2
                      className="text-4xl md:text-5xl lg:text-6xl font-serif text-center text-champagne font-light tracking-wide uppercase transition-none"
                      style={{ transform: `translateX(${textTranslateX}vw)` }}
                    >
                      {restOfTitle}
                    </motion.h2>
                  </>
                )}
              </div>
            </div>

            {/* Content Container (Children homepage sections) */}
            <motion.section
              className="w-full z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.7 }}
            >
              {children}
            </motion.section>
          </div>
        </div>
      </section>
    </div>
  );
}

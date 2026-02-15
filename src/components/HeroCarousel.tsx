import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroSection = () => {
  const [zoomDone, setZoomDone] = useState(false);
  const [gradientVisible, setGradientVisible] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [buttonsVisible, setButtonsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const isMobile = useIsMobile();

  const fullText =
    "Safe • Secure • Reliable Relocation Services Across India";

  // ----- PREMIUM CINEMATIC SEQUENCE (tight cascading, minimal gaps) -----
  useEffect(() => {
    // 1. Start zoom animation (0ms) - duration 4200ms
    const zoomTimer = setTimeout(() => setZoomDone(true), 50);

    // 2. Gradient starts sooner (600ms) - duration 1500ms
    const gradientTimer = setTimeout(() => setGradientVisible(true), 600);

    // 3. Title starts (1200ms) - duration 1200ms
    const titleTimer = setTimeout(() => setTitleVisible(true), 1200);

    // 4. Subtitle starts (2000ms) - after title settles
    const subtitleTimer = setTimeout(() => setSubtitleVisible(true), 2000);

    // 5. Buttons start (2700ms) - after subtitle is visible
    const buttonsTimer = setTimeout(() => setButtonsVisible(true), 2700);

    return () => {
      clearTimeout(zoomTimer);
      clearTimeout(gradientTimer);
      clearTimeout(titleTimer);
      clearTimeout(subtitleTimer);
      clearTimeout(buttonsTimer);
    };
  }, []);

  // ----- SMOOTH TYPEWRITER (starts when subtitleVisible) -----
  useEffect(() => {
    if (!subtitleVisible) return;

    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 45); // 45ms per character = smooth typing

    return () => clearInterval(interval);
  }, [subtitleVisible]);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* ---------- 1. BACKGROUND ZOOM OUT (continues throughout all animations) ---------- */}
      {/* Fallback solid background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-black" />
      
      {/* Banner image with fallback */}
      <div
        className={`absolute inset-0 transition-transform ${
          zoomDone ? "scale-100" : "scale-[1.04]"
        }`}
        style={{
          backgroundImage: isMobile ? "url('/hm.png')" : "url('/hc.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          willChange: "transform",
          backgroundColor: "#1e293b",
          transitionDuration: "4200ms",
          transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
        }}
      />

      {/* ---------- 2. GRADIENT OVERLAY (1.5 seconds fade-in) ---------- */}
      <div
        className={`absolute inset-0 transition-opacity ${
          gradientVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.5) 55%, rgba(0,0,0,0.9) 100%)",
          willChange: "opacity",
          transitionDuration: "1500ms",
          transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
        }}
      />

      {/* ---------- CONTENT LAYER ---------- */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6 max-w-7xl mx-auto w-full overflow-x-hidden">
        
        {/* ---------- 3. TITLE (glides up 1.2 seconds) ---------- */}
        <h1
          className={`transition-all ${
            titleVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
          style={{
            transitionDuration: "1200ms",
            transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <span className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[6.5rem] 2xl:text-[7.5rem] font-extrabold tracking-[-0.02em] sm:tracking-[-0.03em] drop-shadow-2xl leading-tight sm:leading-tight">
            <span className="text-orange-500">Vamsi</span>{" "}
            <span className="text-white">Packers & Movers</span>
          </span>
        </h1>

        {/* ---------- 4. SUBTITLE (typewriter effect) ---------- */}
        <div className="relative mt-4 xs:mt-6 sm:mt-8 min-h-12 xs:min-h-14 sm:min-h-16 md:min-h-20 flex items-center justify-center px-3">
          <p
            className={`text-white/85 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-light tracking-wide transition-opacity duration-900 ${
              subtitleVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {typedText}
            {subtitleVisible && typedText.length === fullText.length && (
              <span className="ml-1 inline-block w-[2px] h-3 xs:h-4 sm:h-5 bg-white/70 animate-pulse" />
            )}
          </p>
        </div>

        {/* ---------- 5. BUTTONS (pop in with scale + fade) ---------- */}
        <div
          className={`mt-8 xs:mt-10 sm:mt-14 md:mt-16 flex flex-col xs:flex-row gap-3 xs:gap-4 sm:gap-6 transition-all px-3 ${
            buttonsVisible
              ? "translate-y-0 opacity-100 scale-100"
              : "translate-y-4 opacity-0 scale-95"
          }`}
          style={{
            transitionDuration: "1000ms",
            transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <Button
            asChild
            className="relative bg-orange-500 hover:bg-orange-600 text-white px-6 xs:px-8 sm:px-12 py-3 xs:py-4 sm:py-6 text-xs xs:text-sm sm:text-base uppercase tracking-[0.15em] sm:tracking-[0.2em] font-medium border-0 transition-all duration-700 ease-out hover:scale-105 hover:shadow-[0_20px_30px_-10px_rgba(249,115,22,0.3)] min-h-11 sm:min-h-12"
            style={{ borderRadius: 0 }}
          >
            <Link to="/services">
              <span className="relative z-10 whitespace-nowrap">OUR SERVICES</span>
              <span className="absolute inset-0 bg-white/0 hover:bg-white/10 transition-all duration-700" />
            </Link>
          </Button>

          <Button
            asChild
            className="relative bg-transparent text-white px-6 xs:px-8 sm:px-12 py-3 xs:py-4 sm:py-6 text-xs xs:text-sm sm:text-base uppercase tracking-[0.15em] sm:tracking-[0.2em] font-medium border border-white/40 hover:border-white transition-all duration-700 ease-out hover:scale-105 hover:bg-white hover:text-black hover:shadow-[0_20px_30px_-10px_rgba(255,255,255,0.2)] min-h-11 sm:min-h-12"
            style={{ borderRadius: 0 }}
          >
            <Link to="/contact">
              <span className="relative z-10 whitespace-nowrap">GET QUOTE</span>
              <span className="absolute inset-0 bg-white/0 hover:bg-white/5 transition-all duration-700" />
            </Link>
          </Button>
        </div>
      </div>

      {/* ---------- BOTTOM FADE (cinematic depth) ---------- */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
    </section>
  );
};

export default HeroSection;

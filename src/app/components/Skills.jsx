"use client";

import { motion, AnimatePresence } from "framer-motion";
import { skills } from "../data/content";
import { useState, useCallback, useEffect, useRef } from "react";

export default function Skills() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoPlayRef = useRef(null);

  const categoryConfig = {
    Framework: {
      gradient: "from-purple-500/20 to-purple-500/5",
      border: "border-purple-500/40",
      accent: "text-purple-400",
      accentColor: "purple-400",
    },
    Core: {
      gradient: "from-cyan-500/20 to-cyan-500/5",
      border: "border-cyan-500/40",
      accent: "text-cyan-400",
      accentColor: "cyan-400",
    },
    Styling: {
      gradient: "from-pink-500/20 to-pink-500/5",
      border: "border-pink-500/40",
      accent: "text-pink-400",
      accentColor: "pink-400",
    },
    Tools: {
      gradient: "from-blue-500/20 to-blue-500/5",
      border: "border-blue-500/40",
      accent: "text-blue-400",
      accentColor: "blue-400",
    },
    Animation: {
      gradient: "from-orange-500/20 to-orange-500/5",
      border: "border-orange-500/40",
      accent: "text-orange-400",
      accentColor: "orange-400",
    },
    "UI Library": {
      gradient: "from-emerald-500/20 to-emerald-500/5",
      border: "border-emerald-500/40",
      accent: "text-emerald-400",
      accentColor: "emerald-400",
    },
    Backend: {
      gradient: "from-sky-500/20 to-sky-500/5",
      border: "border-sky-500/40",
      accent: "text-sky-400",
      accentColor: "sky-400",
    },
  };

  // ─── Looping navigate ───
  const goNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev + 1) % skills.length);
    setTimeout(() => setIsTransitioning(false), 400);
  }, [isTransitioning]);

  const goPrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev - 1 + skills.length) % skills.length);
    setTimeout(() => setIsTransitioning(false), 400);
  }, [isTransitioning]);

  // ─── Keyboard support ───
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goNext, goPrev]);

  // ─── Auto play ───
  const startAutoPlay = useCallback(() => {
    stopAutoPlay();
    autoPlayRef.current = setInterval(() => {
      goNext();
    }, 3500);
  }, [goNext]);

  const stopAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, [startAutoPlay, stopAutoPlay]);

  // ─── Get visible cards (active + neighbors) ───
  const getVisibleCards = () => {
    const total = skills.length;
    const positions = [];

    // Tampilkan 5 card: -2, -1, 0(center), +1, +2
    for (let offset = -2; offset <= 2; offset++) {
      const idx = (((activeIndex + offset) % total) + total) % total;
      positions.push({ idx, offset });
    }

    return positions;
  };

  const visibleCards = getVisibleCards();

  // ─── Card style berdasarkan offset dari center ───
  const getCardStyle = (offset) => {
    const absOffset = Math.abs(offset);

    return {
      scale: absOffset === 0 ? 1.15 : absOffset === 1 ? 0.85 : 0.65,
      opacity: absOffset === 0 ? 1 : absOffset === 1 ? 0.5 : 0.2,
      blur: absOffset === 0 ? 0 : absOffset === 1 ? 1 : 3,
      x: offset * 170,
      zIndex: 10 - absOffset,
    };
  };

  return (
    <section
      id="skills"
      className="relative w-full bg-black text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden select-none scroll-mt-24"
    >
      {/* ── Futuristic background ── */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 -left-40 w-80 h-80 bg-[radial-gradient(circle,rgba(168,85,247,0.2)_0%,rgba(168,85,247,0.05)_50%,transparent_70%)] rounded-full blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-[radial-gradient(circle,rgba(6,182,212,0.15)_0%,rgba(6,182,212,0.05)_50%,transparent_70%)] rounded-full blur-3xl"
          animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[length:50px_50px] opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 text-center"
        >
          <span className="inline-block text-xs font-mono text-cyan-400/80 tracking-widest mb-3 uppercase">
            Technologies
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight mb-3">
            My Tech Stack
          </h2>
          <p className="text-sm sm:text-base text-gray-400/80">
            Use arrow keys or buttons to navigate
          </p>
        </motion.div>

        {/* ── Slider ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
          onMouseEnter={stopAutoPlay}
          onMouseLeave={startAutoPlay}
        >
          {/* Card Stage */}
          <div className="relative flex items-center justify-center h-[280px] sm:h-[300px]">
            <AnimatePresence mode="popLayout">
              {visibleCards.map(({ idx, offset }) => {
                const skill = skills[idx];
                const config =
                  categoryConfig[skill.category] || categoryConfig.Tools;
                const { scale, opacity, blur, x, zIndex } =
                  getCardStyle(offset);
                const isActive = offset === 0;

                return (
                  <motion.div
                    key={`${idx}-${offset}`}
                    layout
                    initial={false}
                    animate={{
                      x,
                      scale,
                      opacity,
                      filter: `blur(${blur}px)`,
                      zIndex,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      mass: 0.8,
                    }}
                    className="absolute w-40"
                    onClick={() => {
                      if (!isActive) {
                        setActiveIndex(idx);
                      }
                    }}
                  >
                    {/* Glass Card */}
                    <div
                      className={`group relative w-full p-6 min-h-[200px] bg-gradient-to-br ${config.gradient} backdrop-blur-lg ${config.border} rounded-2xl flex flex-col items-center justify-center gap-3 cursor-pointer`}
                    >
                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-2xl" />

                      {/* Active glow ring */}
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="absolute -inset-[1px] rounded-2xl"
                          style={{
                            background:
                              "linear-gradient(135deg, rgba(168,85,247,0.3), rgba(6,182,212,0.3), rgba(236,72,153,0.3))",
                            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                            maskComposite: "exclude",
                            padding: "1px",
                            borderRadius: "16px",
                          }}
                        />
                      )}

                      {/* Content */}
                      <div className="relative flex flex-col items-center justify-center text-center">
                        <motion.span
                          className="text-5xl mb-3"
                          animate={{
                            y: isActive ? [0, -8, 0] : 0,
                          }}
                          transition={{
                            duration: isActive ? 2 : 0,
                            repeat: isActive ? Infinity : 0,
                            ease: "easeInOut",
                          }}
                        >
                          {skill.icon}
                        </motion.span>
                        <p className="text-sm font-semibold text-gray-200 group-hover:text-white transition-colors leading-tight">
                          {skill.name}
                        </p>
                        <span className={`text-xs ${config.accent}/60 mt-1`}>
                          {skill.category}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* ── Fade gradients kiri-kanan ── */}
          <div
            className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 pointer-events-none z-30"
            style={{
              background:
                "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 50%, transparent 100%)",
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 pointer-events-none z-30"
            style={{
              background:
                "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 50%, transparent 100%)",
            }}
          />

          {/* ── Navigation Arrows ── */}
          <button
            onClick={goPrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/80 hover:bg-white/20 hover:text-white hover:scale-110 transition-all duration-200 active:scale-95"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={goNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/80 hover:bg-white/20 hover:text-white hover:scale-110 transition-all duration-200 active:scale-95"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </motion.div>

        {/* ── Dot Indicators ── */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {skills.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (!isTransitioning) {
                  setIsTransitioning(true);
                  setActiveIndex(idx);
                  setTimeout(() => setIsTransitioning(false), 400);
                }
              }}
              className="transition-all duration-300 rounded-full"
              style={{
                width: idx === activeIndex ? "28px" : "8px",
                height: "8px",
                backgroundColor:
                  idx === activeIndex
                    ? "rgba(34,211,238,0.9)"
                    : "rgba(255,255,255,0.15)",
              }}
            />
          ))}
        </div>

        {/* ── Footer ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-gray-400/80 text-sm">
            {skills.length} technologies and tools • Constantly learning and
            adapting
          </p>
        </motion.div>
      </div>
    </section>
  );
}

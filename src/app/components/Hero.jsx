"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, Download, ExternalLink, Mail } from "lucide-react";
import { heroRoles, PersonalInfo, SocialLinks } from "../data/content";

// ── Brand icons (inline SVG — tidak bergantung versi lucide) ─────
const GithubIcon = ({ size = 17 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const LinkedinIcon = ({ size = 17 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

// ── Typewriter hook ──────────────────────────────────────────────
function useTypewriter(words, speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setDisplay(current.slice(0, charIndex + 1));
          if (charIndex + 1 === current.length) {
            setTimeout(() => setDeleting(true), pause);
          } else {
            setCharIndex((c) => c + 1);
          }
        } else {
          setDisplay(current.slice(0, charIndex - 1));
          if (charIndex - 1 === 0) {
            setDeleting(false);
            setWordIndex((w) => (w + 1) % words.length);
            setCharIndex(0);
          } else {
            setCharIndex((c) => c - 1);
          }
        }
      },
      deleting ? speed / 2 : speed,
    );
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words, speed, pause]);

  return display;
}

// ── Magnetic button ──────────────────────────────────────────────
function MagneticBtn({ children, className, href, download, target, rel }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 20 });
  const sy = useSpring(y, { stiffness: 200, damping: 20 });

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.3);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.3);
  };
  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      download={download}
      target={target}
      rel={rel}
      style={{ x: sx, y: sy }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileTap={{ scale: 0.96 }}
      className={className}
    >
      {children}
    </motion.a>
  );
}

// ── Icon map ─────────────────────────────────────────────────────
const iconMap = { Github: GithubIcon, Linkedin: LinkedinIcon, Mail };

// ── Main component ───────────────────────────────────────────────
export default function Hero() {
  const typed = useTypewriter(heroRoles);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const photoX = useSpring(useTransform(mouseX, [-1, 1], [-12, 12]), {
    stiffness: 80,
    damping: 20,
  });
  const photoY = useSpring(useTransform(mouseY, [-1, 1], [-12, 12]), {
    stiffness: 80,
    damping: 20,
  });

  const handleMouseMove = (e) => {
    mouseX.set((e.clientX / window.innerWidth) * 2 - 1);
    mouseY.set((e.clientY / window.innerHeight) * 2 - 1);
  };

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
  };
  const item = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#04040a]"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0,200,255,0.07) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#04040a] to-transparent" />
      </div>

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 pt-28 pb-20 lg:py-0 lg:min-h-screen"
      >
        {/* LEFT — teks */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl mx-auto lg:mx-0">
          <motion.div variants={item} className="mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-white/60 font-medium tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Available for work
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-3"
          >
            {PersonalInfo.name}
          </motion.h1>

          <motion.div
            variants={item}
            className="h-9 mb-5 flex items-center gap-2"
          >
            <span className="text-lg sm:text-xl md:text-2xl text-cyan-400 font-medium font-mono">
              {typed}
            </span>
            <span className="w-0.5 h-5 bg-cyan-400 animate-pulse rounded-full" />
          </motion.div>

          <motion.p
            variants={item}
            className="text-white/55 text-sm sm:text-base leading-relaxed mb-8 max-w-md lg:max-w-lg"
          >
            {PersonalInfo.description}
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
          >
            <MagneticBtn
              href="#projects"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-sm transition-colors duration-200 shadow-lg shadow-cyan-500/25"
            >
              View Work <ExternalLink size={14} />
            </MagneticBtn>
            <MagneticBtn
              href={PersonalInfo.cvUrl}
              download
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/15 hover:border-white/30 bg-white/5 hover:bg-white/10 text-white/80 hover:text-white font-medium text-sm transition-all duration-200"
            >
              Download CV <Download size={14} />
            </MagneticBtn>
          </motion.div>

          <motion.div variants={item} className="flex gap-3">
            {SocialLinks.map((social) => {
              const Icon = iconMap[social.iconName] ?? Mail;
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    social.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.93 }}
                  className="p-2.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-cyan-500/40 text-white/50 hover:text-cyan-400 transition-all duration-200"
                  aria-label={social.name}
                >
                  <Icon size={17} />
                </motion.a>
              );
            })}
          </motion.div>
        </div>

        {/* RIGHT — foto */}
        <motion.div
          variants={item}
          className="flex-shrink-0 flex justify-center lg:justify-end w-full lg:w-auto"
        >
          <motion.div style={{ x: photoX, y: photoY }} className="relative">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-cyan-500/25 via-transparent to-purple-500/15 blur-xl" />
            <div className="absolute -inset-0.5 rounded-full border border-cyan-500/20" />

            <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border border-white/10 bg-[#0d0d22]">
              <Image
                src={PersonalInfo.profileImage}
                alt={PersonalInfo.name}
                fill
                sizes="(max-width: 640px) 13rem, (max-width: 768px) 16rem, (max-width: 1024px) 18rem, 20rem"
                className="object-cover"
              />
            </div>

            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full border border-white/10 bg-[#04040a]/90 backdrop-blur-md text-xs text-white/60 whitespace-nowrap"
            >
              📍 {PersonalInfo.location}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors duration-300"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.a>
    </section>
  );
}

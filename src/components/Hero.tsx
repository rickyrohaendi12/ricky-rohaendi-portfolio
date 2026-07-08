import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Layers,
  Code,
  Sparkles,
  ArrowRight,
  Compass,
  Cpu,
  Eye,
  Command,
  Maximize2,
} from "lucide-react";

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const [activeMode, setActiveMode] = useState<"design" | "code">("design");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", sharpness: 100, damping: 15 },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden dot-grid transition-colors duration-300"
    >
      {/* Soft ambient lighting with a more editorial tone */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-stone-400/20 blur-[130px] -z-10 pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-[450px] h-[450px] rounded-full bg-slate-400/15 blur-[150px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* LEFT COLUMN: CRITICAL INTRO & BRANDING */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start gap-6 text-left"
        >
          {/* BADGE */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-stone-300/70 bg-stone-100/80 text-stone-700 dark:border-stone-700/60 dark:bg-stone-900/60 dark:text-stone-300 font-mono text-xs font-semibold uppercase tracking-wider"
          >
            <Sparkles className="w-3.5 h-3.5 text-stone-500 dark:text-stone-400 animate-pulse" />
            <span>Interactive Portfolio v2.1</span>
          </motion.div>

          {/* MAIN DISPLAY TYPOGRAPHY */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-bold text-4xl sm:text-5xl xl:text-6xl text-stone-900 dark:text-white leading-[1.1] tracking-tight"
          >
            I design{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-600 via-stone-700 to-stone-500 dark:from-stone-300 dark:via-stone-400 dark:to-stone-500">
              Intuitive Interfaces
            </span>{" "}
            & build scalable{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-700 via-stone-600 to-stone-500 dark:from-stone-400 dark:via-stone-300 dark:to-stone-500">
              fullstack systems
            </span>
            .
          </motion.h1>

          {/* DUAL DESCRIPTION STATEMENT */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-stone-600 dark:text-stone-300 max-w-2xl leading-relaxed"
          >
            Hi, I’m Ricky Rohaendi as a {""}
            <strong>UI/UX Designer</strong> &{" "}
            <strong>Fullstack Software Engineer</strong>, focused on creating
            seamless digital experiences. I combine pixel-perfect design with
            reliable frontend and backend development to build applications that
            are not only visually engaging but also scalable, efficient, and
            perform seamlessly across platforms.
          </motion.p>

          {/* CTA ACTIONS */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 mt-2 w-full sm:w-auto"
          >
            <button
              id="hero-cta-works"
              onClick={() => onNavigate("projects")}
              className="px-6 py-3.5 w-full sm:w-auto bg-stone-800 text-white hover:bg-stone-700 dark:bg-stone-200 dark:text-stone-900 dark:hover:bg-stone-100 font-medium text-sm rounded-xl cursor-pointer transition-all duration-300 shadow-sm hover:translate-y-[-2px] flex items-center justify-center gap-2"
            >
              See My Works
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              id="hero-cta-sandbox"
              onClick={() => onNavigate("sandbox")}
              className="px-6 py-3.5 w-full sm:w-auto border border-stone-300/80 hover:border-stone-400 bg-stone-100/80 text-stone-700 dark:border-stone-700/70 dark:bg-stone-900/60 dark:text-stone-200 font-medium text-sm rounded-xl cursor-pointer transition-all duration-300 hover:translate-y-[-2px] flex items-center justify-center gap-2"
            >
              Start the experiment
              <span className="font-mono text-[10px] bg-stone-200 dark:bg-stone-800 px-1.5 py-0.5 rounded text-stone-600 dark:text-stone-300">
                Playground
              </span>
            </button>
          </motion.div>

          {/* STATS STRIP */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-6 sm:gap-12 pt-8 mt-4 border-t border-stone-300/70 dark:border-stone-800 w-full"
          >
            <div>
              <p className="font-display font-semibold text-2xl sm:text-3xl text-stone-700 dark:text-stone-300">
                03+
              </p>
              <p className="font-mono text-[10px] text-slate-450 uppercase tracking-widest mt-1">
                Years of Experience
              </p>
            </div>
            <div>
              <p className="font-display font-semibold text-2xl sm:text-3xl text-stone-600 dark:text-stone-400">
                20+
              </p>
              <p className="font-mono text-[10px] text-slate-450 uppercase tracking-widest mt-1">
                Projects Completed
              </p>
            </div>
            <div>
              <p className="font-display font-semibold text-2xl sm:text-3xl text-stone-500 dark:text-stone-500">
                99%
              </p>
              <p className="font-mono text-[10px] text-slate-450 uppercase tracking-widest mt-1">
                Client Satisfaction
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: SIMULATOR WORKSPACE */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 15,
            delay: 0.3,
          }}
          className="lg:col-span-5 relative w-full"
        >
          {/* SIMULATOR WINDOW WRAPPER */}
          <div className="w-full bg-white/80 dark:bg-slate-950/90 rounded-2xl border border-stone-300/70 dark:border-stone-800 shadow-[0_20px_60px_rgba(15,23,42,0.08)] overflow-hidden backdrop-blur-lg">
            {/* SIMULATOR WINDOW HEADER */}
            <div className="px-5 py-4 bg-stone-100/90 dark:bg-slate-950 border-b border-stone-200/80 dark:border-stone-800 flex items-center justify-between">
              {/* Window Controls */}
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>

              {/* TOGGLER */}
              <div className="flex rounded-lg bg-stone-50 dark:bg-slate-900 border border-stone-200 dark:border-stone-800 p-0.5">
                <button
                  id="hero-toggle-design"
                  onClick={() => setActiveMode("design")}
                  className={`px-3 py-1 rounded-md text-xs font-medium font-mono cursor-pointer transition-all focus:outline-none flex items-center gap-1.5 ${
                    activeMode === "design"
                      ? "bg-stone-800 text-white dark:bg-stone-200 dark:text-stone-900 shadow-sm"
                      : "text-stone-500 hover:text-stone-800 dark:text-stone-400 dark:hover:text-white"
                  }`}
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span>UI Spec</span>
                </button>
                <button
                  id="hero-toggle-code"
                  onClick={() => setActiveMode("code")}
                  className={`px-3 py-1 rounded-md text-xs font-medium font-mono cursor-pointer transition-all focus:outline-none flex items-center gap-1.5 ${
                    activeMode === "code"
                      ? "bg-stone-700 text-white shadow-sm"
                      : "text-stone-500 hover:text-stone-800 dark:text-stone-400 dark:hover:text-white"
                  }`}
                >
                  <Code className="w-3.5 h-3.5" />
                  <span>React Code</span>
                </button>
              </div>

              {/* Mini Utility icon */}
              <Maximize2 className="w-3.5 h-3.5 text-stone-500" />
            </div>

            {/* SIMULATOR CORE CONTAINER */}
            <div className="relative p-6 h-[340px] flex items-center justify-center overflow-hidden bg-[radial-gradient(#22d3ee_1px,transparent_1px)] [background-size:16px_16px]">
              <AnimatePresence mode="wait">
                {activeMode === "design" && (
                  <motion.div
                    id="hero-canvas-design"
                    key="design"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="relative w-full max-w-[340px] p-5 rounded-2xl border border-stone-300/70 bg-stone-100/70 dark:border-stone-700/70 dark:bg-stone-900/50 text-left select-none overflow-hidden"
                  >
                    {/* UI Specs details & overlay lines */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-stone-400/45 border-dashed" />
                    <div className="absolute top-0 left-0 w-[1px] h-full bg-stone-400/45 border-dashed" />
                    <div className="absolute right-0 top-0 w-[1px] h-full bg-stone-400/45 border-dashed" />
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-stone-400/45 border-dashed" />

                    {/* Ruler tags */}
                    <div className="absolute top-1 left-2 font-mono text-[9px] text-stone-500/80 dark:text-stone-400/80">
                      W: 340px
                    </div>
                    <div className="absolute top-10 right-1.5 font-mono text-[9px] text-stone-500/80 dark:text-stone-400/80 rotate-90">
                      H: 220px
                    </div>

                    <div className="space-y-3">
                      <div className="overflow-hidden rounded-[20px] border border-stone-300/70 bg-stone-200/70 dark:border-stone-700 dark:bg-stone-800 shadow-sm">
                        <img
                          src="/public/img/ricky.jpg"
                          alt="Ricky Rohaendi"
                          referrerPolicy="no-referrer"
                          className="w-full h-36 object-cover object-top"
                        />
                        <div className="p-3 flex items-center gap-3">
                          <div className="relative shrink-0">
                            <img
                              src="/public/img/ricky.jpg"
                              alt="Ricky Rohaendi"
                              referrerPolicy="no-referrer"
                              className="w-9 h-9 rounded-full border border-stone-300/70 bg-stone-200/70 dark:border-stone-700 dark:bg-stone-800 object-cover"
                            />
                            <div className="absolute -bottom-1 -right-1 font-mono text-[7px] bg-stone-700 text-white px-1 py-0.2 rounded border border-stone-500 scale-90">
                              r: 50%
                            </div>
                          </div>
                          <div className="flex-1 space-y-1.5">
                            <div className="h-2.5 w-24 bg-stone-300/60 dark:bg-stone-700/50 rounded relative">
                              <div className="absolute -top-3.5 left-0 font-mono text-[7px] text-stone-500 dark:text-stone-400">
                                UI/UX • Software Engineer
                              </div>
                            </div>
                            <div className="h-2 w-16 bg-stone-300/40 dark:bg-stone-700/35 rounded" />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2 pt-2 border-t border-stone-300/70 dark:border-stone-700/70">
                        <div className="h-2 w-full bg-stone-300/50 dark:bg-stone-700/45 rounded" />
                        <div className="h-2 w-[85%] bg-stone-300/40 dark:bg-stone-700/35 rounded" />
                        <div className="h-2 w-1/2 bg-stone-300/35 dark:bg-stone-700/30 rounded" />
                      </div>
                    </div>

                    {/* Spec visual layout arrow */}
                    <div className="mt-5 flex items-center gap-3 relative">
                      <div className="h-8 flex-1 bg-stone-200/70 dark:bg-stone-800/70 rounded-lg border border-stone-300/70 dark:border-stone-700 flex items-center justify-center text-[10px] text-stone-600 dark:text-stone-300 font-mono">
                        gap-3
                      </div>
                      <div className="h-8 flex-1 bg-stone-300/50 dark:bg-stone-700/60 rounded-lg border border-stone-300/70 dark:border-stone-700 flex items-center justify-center text-[10px] text-stone-600 dark:text-stone-300 font-mono">
                        r: 8px
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeMode === "code" && (
                  <motion.div
                    id="hero-canvas-code"
                    key="code"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="font-mono text-xs text-slate-300 text-left w-full max-w-[420px] overflow-x-auto whitespace-pre leading-5 p-4 rounded-xl border border-slate-800 bg-slate-900"
                  >
                    <div>
                      <span className="text-pink-400">import</span>{" "}
                      {"{ motion }"} <span className="text-pink-400">from</span>{" "}
                      <span className="text-emerald-400">'motion/react'</span>;
                    </div>
                    <div className="mt-2 text-slate-500">
                      // Component Spec Mapping
                    </div>
                    <div>
                      <span className="text-violet-400">
                        export default function
                      </span>{" "}
                      <span className="text-blue-400">ExperienceCard</span>(){" "}
                      {"{"}
                    </div>
                    <div className="pl-4">
                      <span className="text-violet-400">return</span> (
                    </div>
                    <div className="pl-8">
                      <span className="text-pink-400">&lt;</span>
                      <span className="text-yellow-400">motion.div</span>
                    </div>
                    <div className="pl-12 text-slate-400">
                      className<span className="text-pink-400">=</span>
                      <span className="text-emerald-400">
                        "w-[340px] p-5 rounded-2xl bg-indigo-500/5
                        hover:scale-105"
                      </span>
                    </div>
                    <div className="pl-12 text-slate-400">
                      whileHover<span className="text-pink-400">=</span>
                      <span className="text-indigo-400">{`{{ scale: 1.05 }}`}</span>
                    </div>
                    <div className="pl-8">
                      <span className="text-pink-400">&gt;</span>
                    </div>
                    <div className="pl-12 text-slate-400">
                      &lt;<span className="text-rose-400">Avatar</span> name=
                      <span className="text-emerald-400">"Ricky"</span> size=
                      <span className="text-amber-400">"10"</span> /&gt;
                    </div>
                    <div className="pl-12 text-slate-400">
                      &lt;<span className="text-rose-400">Content</span> /&gt;
                    </div>
                    <div className="pl-8">
                      <span className="text-pink-400">&lt;/</span>
                      <span className="text-yellow-400">motion.div</span>
                      <span className="text-pink-400">&gt;</span>
                    </div>
                    <div className="pl-4">);</div>
                    <div>{"}"}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CONSOLE STATUS FOOTER */}
            <div className="px-5 py-3 bg-stone-100/90 dark:bg-slate-950 border-t border-stone-200/80 dark:border-stone-800 flex items-center justify-between text-[11px] text-stone-500 dark:text-stone-500 font-mono">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-stone-500 animate-ping" />
                <span className="text-stone-600 dark:text-stone-400 font-medium font-mono">
                  system.status === "ACTIVE"
                </span>
              </div>
              <p>v4.0 (Tailwind_Engine)</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* FOOTER DIALOG */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-2 text-stone-500 dark:text-stone-400 text-xs font-mono select-none">
        <Command className="w-3.5 h-3.5" />
        <span>Scroll down to investigate more layers</span>
      </div>
    </section>
  );
}

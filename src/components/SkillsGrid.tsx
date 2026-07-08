import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SKILLS } from "../data";
import { Skill } from "../types";
import {
  Layers,
  Palette,
  Sparkles,
  Eye,
  Cpu,
  Code,
  Wind,
  Zap,
  CheckCircle,
  HelpCircle,
  ChevronRight,
} from "lucide-react";

// ICON MAP TO DYNAMICALLY RENDER LUCIDE ICONS
const iconMap: { [key: string]: any } = {
  Layers: Layers,
  Palette: Palette,
  Sparkles: Sparkles,
  Eye: Eye,
  Cpu: Cpu,
  Code: Code,
  Wind: Wind,
  Zap: Zap,
};

export default function SkillsGrid() {
  const [activeSkillId, setActiveSkillId] = useState<string | null>("figma");

  const selectedSkill = SKILLS.find((s) => s.id === activeSkillId);

  return (
    <section
      id="skills"
      className="py-24 bg-transparent border-t border-stone-300/70 dark:border-stone-800 relative overflow-hidden transition-colors"
    >
      {/* Background soft glowing lights */}
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-stone-300/30 dark:bg-stone-800/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* SECTION HEADER */}
        <div className="flex flex-col items-start gap-3 mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-300/80 bg-stone-100/80 text-stone-700 dark:border-stone-700/70 dark:bg-stone-900/60 dark:text-stone-300 font-mono text-xs font-semibold">
            <Cpu className="w-3.5 h-3.5 text-stone-500 dark:text-stone-400" />
            <span>Skills & Tools</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            How I Work
          </h2>
          <p className="text-slate-600 dark:text-slate-350 max-w-2xl text-sm sm:text-base leading-relaxed">
            As a bridge between aesthetics and logic, my expertise is evenly
            distributed between creative visual architecture and functional code
            engineering.
          </p>
        </div>

        {/* BENTO SKILLS GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT BENTO BLOCK: THE TILES (lg:col-span-8) */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* COLUMN: UI & DESIGN SPECIFICATION */}
            <div className="space-y-4">
              <h3 className="font-mono text-xs font-bold text-slate-400 uppercase tracking-widest text-left flex items-center gap-2 pl-2">
                <Palette className="w-4 h-4 text-stone-500 dark:text-stone-400" />
                Design & UX Architecture
              </h3>

              <div className="space-y-3.5 text-left">
                {SKILLS.filter((s) => s.category === "design").map((skill) => {
                  const IconComp = iconMap[skill.icon] || HelpCircle;
                  const isSelected = activeSkillId === skill.id;

                  return (
                    <div
                      id={`skill-tile-${skill.id}`}
                      key={skill.id}
                      onClick={() => setActiveSkillId(skill.id)}
                      className={`group p-5 rounded-2xl border transition-all cursor-pointer relative ${
                        isSelected
                          ? "bg-stone-100 border-stone-400 ring-1 ring-stone-400 shadow-sm dark:bg-zinc-950 dark:border-stone-500 dark:ring-stone-500"
                          : "bg-white/70 border-stone-300/70 hover:bg-stone-100/80 dark:bg-zinc-900/30 dark:border-stone-700/70 dark:hover:bg-zinc-900/60"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3.5">
                          {/* Animated icon wrapper */}
                          <div
                            className={`p-2.5 rounded-xl transition-colors ${
                              isSelected
                                ? "bg-stone-800 text-white dark:bg-stone-200 dark:text-stone-900"
                                : "bg-stone-100 text-stone-700 group-hover:bg-stone-200 dark:bg-stone-900/60 dark:text-stone-300 dark:group-hover:bg-stone-800/70"
                            }`}
                          >
                            <IconComp className="w-4.5 h-4.5" />
                          </div>
                          <div>
                            <h4 className="font-display font-bold text-sm text-stone-900 dark:text-white group-hover:text-stone-700 dark:group-hover:text-stone-300 transition-colors">
                              {skill.name}
                            </h4>
                            <p className="text-slate-400 text-xs mt-0.5 max-w-[200px] sm:max-w-none line-clamp-1">
                              {skill.description}
                            </p>
                          </div>
                        </div>

                        {/* SKILL STAT METRIC */}
                        <div className="text-right">
                          <span className="font-mono text-xs font-semibold text-stone-700 dark:text-stone-300">
                            {skill.level}%
                          </span>
                        </div>
                      </div>

                      {/* SLIDING SENSE BAR IN SELECTOR */}
                      <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden mt-4">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.8, delay: 0.1 }}
                          className="h-full bg-stone-700 dark:bg-stone-300 rounded-full"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* COLUMN: CODE & ENGINEER SPECIFICATION */}
            <div className="space-y-4">
              <h3 className="font-mono text-xs font-bold text-slate-400 uppercase tracking-widest text-left flex items-center gap-2 pl-2">
                <Code className="w-4 h-4 text-stone-500 dark:text-stone-400" />
                Software Engineering
              </h3>

              <div className="space-y-3.5 text-left">
                {SKILLS.filter((s) => s.category === "engineering").map(
                  (skill) => {
                    const IconComp = iconMap[skill.icon] || HelpCircle;
                    const isSelected = activeSkillId === skill.id;

                    return (
                      <div
                        id={`skill-tile-${skill.id}`}
                        key={skill.id}
                        onClick={() => setActiveSkillId(skill.id)}
                        className={`group p-5 rounded-2xl border transition-all cursor-pointer relative ${
                          isSelected
                            ? "bg-stone-100 border-stone-400 ring-1 ring-stone-400 shadow-sm dark:bg-zinc-950 dark:border-stone-500 dark:ring-stone-500"
                            : "bg-white/70 border-stone-300/70 hover:bg-stone-100/80 dark:bg-zinc-900/30 dark:border-stone-700/70 dark:hover:bg-zinc-900/60"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-center gap-3.5">
                            {/* Animated icon wrapper */}
                            <div
                              className={`p-2.5 rounded-xl transition-colors ${
                                isSelected
                                  ? "bg-stone-800 text-white dark:bg-stone-200 dark:text-stone-900"
                                  : "bg-stone-100 text-stone-700 group-hover:bg-stone-200 dark:bg-stone-900/60 dark:text-stone-300 dark:group-hover:bg-stone-800/70"
                              }`}
                            >
                              <IconComp className="w-4.5 h-4.5" />
                            </div>
                            <div>
                              <h4 className="font-display font-bold text-sm text-stone-900 dark:text-white group-hover:text-stone-700 dark:group-hover:text-stone-300 transition-colors">
                                {skill.name}
                              </h4>
                              <p className="text-slate-400 text-xs mt-0.5 max-w-[200px] sm:max-w-none line-clamp-1">
                                {skill.description}
                              </p>
                            </div>
                          </div>

                          {/* SKILL STAT METRIC */}
                          <div className="text-right">
                            <span className="font-mono text-xs font-semibold text-stone-700 dark:text-stone-300">
                              {skill.level}%
                            </span>
                          </div>
                        </div>

                        {/* SLIDING SENSE BAR */}
                        <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden mt-4">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="h-full bg-stone-700 dark:bg-stone-300 rounded-full"
                          />
                        </div>
                      </div>
                    );
                  },
                )}
              </div>
            </div>
          </div>

          {/* RIGHT BENTO BLOCK: THE DETAIL CARD INSIGHT (lg:col-span-4) */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <AnimatePresence mode="wait">
              {selectedSkill ? (
                <motion.div
                  id="skills-insight-panel"
                  key={selectedSkill.id}
                  initial={{ opacity: 0, scale: 0.98, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white/80 dark:bg-zinc-950 p-6 sm:p-8 rounded-2xl border border-stone-300/70 dark:border-stone-700/70 shadow-[0_16px_40px_rgba(15,23,42,0.06)] text-left flex flex-col pt-6 relative overflow-hidden backdrop-blur-md"
                >
                  <h4 className="font-mono text-[9px] font-bold text-stone-700 dark:text-stone-300 uppercase tracking-widest leading-none flex items-center gap-1.5 bh-tight">
                    <Sparkles className="w-3.5 h-3.5" />
                    Pernyataan Hibrida (Fusion Note)
                  </h4>

                  {/* Skill header */}
                  <div className="flex items-center gap-3.5 mt-5 pb-5 border-b border-stone-300/70 dark:border-stone-700/70">
                    <div className="p-3 bg-stone-800 text-white rounded-xl dark:bg-stone-200 dark:text-stone-900">
                      {React.createElement(
                        iconMap[selectedSkill.icon] || HelpCircle,
                        { className: "w-5.5 h-5.5" },
                      )}
                    </div>
                    <div>
                      <h3 className="font-display font-extrabold text-lg text-stone-900 dark:text-white leading-tight">
                        {selectedSkill.name}
                      </h3>
                      <p className="font-mono text-[10px] text-stone-500 dark:text-stone-400 mt-1 uppercase">
                        Sertifikasi:{" "}
                        {selectedSkill.category === "design"
                          ? "UX & Visual"
                          : "Sistem & Struktur"}
                      </p>
                    </div>
                  </div>

                  {/* Core Description details */}
                  <div className="space-y-5 mt-5 flex-1">
                    <p className="text-stone-600 dark:text-stone-300 text-xs sm:text-sm leading-relaxed">
                      {selectedSkill.details}
                    </p>

                    <div className="p-4 rounded-xl bg-stone-100/80 border border-stone-300/70 dark:bg-stone-900/60 dark:border-stone-700/70 space-y-3">
                      <span className="font-mono text-[9px] font-bold text-stone-700 dark:text-stone-300 uppercase tracking-wider">
                        Filosofi Gabungan Kerja
                      </span>
                      <p className="text-stone-600 dark:text-stone-400 text-xs leading-relaxed font-normal">
                        {selectedSkill.category === "design"
                          ? "Dibuat dengan memikirkan performa transfer aset ke developer, menghemat loading server dari kalkulasi layout berlebihan."
                          : "Direkayasa secara khusus untuk melayani spesifikasi visual figma, melenyapkan glitch layout pada berbagai ukuran viewport."}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 pt-5 border-t border-stone-300/70 dark:border-stone-700/70 flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 font-mono">
                    <span>Expertise Level</span>
                    <span className="font-semibold text-stone-700 dark:text-stone-300">
                      {selectedSkill.level}/100
                    </span>
                  </div>
                </motion.div>
              ) : (
                <div className="h-48 flex items-center justify-center p-8 border border-dashed border-stone-300/70 dark:border-stone-700/70 rounded-2xl bg-stone-100/70 dark:bg-stone-900/40">
                  <p className="text-slate-400 text-xs font-mono">
                    Pilih spesifikasi keahlian di samping untuk memunculkan
                    wawasan detail.
                  </p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

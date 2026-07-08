import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Settings,
  Code2,
  Copy,
  Check,
  RotateCcw,
  Sliders,
  Sparkles,
  AlignLeft,
  LayoutGrid,
  CheckCircle2,
} from "lucide-react";

export default function Sandbox() {
  // DESIGN STATES
  const [paddingVal, setPaddingVal] = useState<"4" | "6" | "8" | "12">("6");
  const [borderRadius, setBorderRadius] = useState<
    "none" | "lg" | "2xl" | "3xl" | "full"
  >("2xl");
  const [themeStyle, setThemeStyle] = useState<
    "dark-slate" | "light-glass" | "indigo-electric" | "emerald-minimal"
  >("indigo-electric");
  const [shadowDepth, setShadowDepth] = useState<
    "none" | "md" | "xl" | "glow-stone"
  >("md");
  const [fontFamily, setFontFamily] = useState<"sans" | "display" | "mono">(
    "display",
  );
  const [cardTitle, setCardTitle] = useState("Build Beyond Boundaries");
  const [copied, setCopied] = useState(false);

  // CONVERT CONFIG TO TAILWIND CLASSES OR STYLES
  const paddingMap = {
    "4": { className: "p-4", px: "16px" },
    "6": { className: "p-6", px: "24px" },
    "8": { className: "p-8", px: "32px" },
    "12": { className: "p-12", px: "48px" },
  };

  const borderMap = {
    none: { className: "rounded-none", px: "0px" },
    lg: { className: "rounded-lg", px: "8px" },
    "2xl": { className: "rounded-2xl", px: "16px" },
    "3xl": { className: "rounded-3xl", px: "24px" },
    full: { className: "rounded-[36px]", px: "36px" },
  };

  const themeMap = {
    "dark-slate": {
      className:
        "bg-stone-900 border border-stone-400/30 text-stone-50 shadow-stone-950/20",
      label: "Slate Quiet",
    },
    "light-glass": {
      className:
        "bg-white/80 border border-stone-300/70 text-stone-800 shadow-stone-300/30 backdrop-blur-md",
      label: "Glass Stone",
    },
    "indigo-electric": {
      className:
        "bg-stone-100 border border-stone-300/70 text-stone-800 shadow-stone-300/30",
      label: "Stone Calm",
    },
    "emerald-minimal": {
      className:
        "bg-stone-50 border border-stone-300/70 text-stone-700 shadow-stone-200/40",
      label: "Minimal Sand",
    },
  };

  const shadowMap = {
    none: "shadow-none",
    md: "shadow-md",
    xl: "shadow-xl",
    "glow-stone": "shadow-2xl shadow-stone-300/40",
  };

  const fontMap = {
    sans: "font-sans",
    display: "font-display",
    mono: "font-mono",
  };

  // RESET
  const handleReset = () => {
    setPaddingVal("6");
    setBorderRadius("2xl");
    setThemeStyle("indigo-electric");
    setShadowDepth("glow-stone");
    setFontFamily("display");
    setCardTitle("Build Beyond Boundaries");
  };

  // GENERATED MARKUP
  const activePadding = paddingMap[paddingVal];
  const activeBorder = borderMap[borderRadius];
  const activeTheme = themeMap[themeStyle];
  const activeShadow = shadowMap[shadowDepth];
  const activeFont = fontMap[fontFamily];

  const generatedTailwindString = `
<div className="${activeTheme.className} ${activePadding.className} ${activeBorder.className} ${activeShadow} ${activeFont} max-w-sm transition-all duration-300">
  <div className="flex items-center gap-3">
    <span className="px-2 py-1 text-[10px] uppercase font-mono tracking-wider bg-stone-200/80 text-stone-700 rounded-full">
      Design Token Code
    </span>
  </div>
  <h3 className="text-xl font-bold mt-4 tracking-tight">
    ${cardTitle}
  </h3>
  <p className="opacity-80 text-sm mt-2 leading-relaxed">
    Bridging aesthetic design variables and functional react states variables instantly. 
  </p>
  <button className="mt-5 w-full py-2.5 rounded-lg bg-stone-800 hover:bg-stone-700 font-semibold text-xs text-white">
    Initialize Flow
  </button>
</div>
  `.trim();

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedTailwindString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="sandbox"
      className="py-24 bg-transparent border-y border-stone-300/70 dark:border-stone-800 relative overflow-hidden transition-colors"
    >
      {/* Visual background lines */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0A0A0B] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* SECTION HEADER */}
        <div className="flex flex-col items-start gap-3 mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-300/80 bg-stone-100/80 text-stone-700 dark:border-stone-700/70 dark:bg-stone-900/60 dark:text-stone-300 font-mono text-xs font-semibold">
            <Sliders className="w-3.5 h-3.5 text-stone-500 dark:text-stone-400" />
            <span>Interactive Sandbox Workspace</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            Design-to-Code Experiment
          </h2>
          <p className="text-slate-600 dark:text-slate-350 max-w-2xl text-sm sm:text-base leading-relaxed">
            Play around with the design variables below to see how visual
            variables (Tokens) instantly transform into clean lines of Tailwind
            CSS and React JSX code.
          </p>
        </div>

        {/* WORKSPACE BENTO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* CONTROLS SIDEBAR (lg:col-span-5) */}
          <div className="lg:col-span-5 bg-white/80 dark:bg-zinc-950 p-6 sm:p-8 rounded-2xl border border-stone-300/70 dark:border-stone-700/70 shadow-[0_18px_45px_rgba(15,23,42,0.06)] space-y-6 text-left relative z-10">
            <div className="flex items-center justify-between pb-4 border-b border-purple-550/10">
              <div className="flex items-center gap-2 font-display font-bold text-base text-white">
                <Settings className="w-4.5 h-4.5 text-stone-600 dark:text-stone-400 animate-spin-slow" />
                <span>Design Variables (Tokens)</span>
              </div>
              <button
                id="sandbox-reset-btn"
                onClick={handleReset}
                className="flex items-center gap-1.5 text-xs text-stone-500 hover:text-stone-800 dark:text-stone-400 dark:hover:text-stone-200 font-medium font-mono cursor-pointer transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset
              </button>
            </div>

            {/* TITLE INPUT */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-450 font-mono uppercase tracking-wider">
                1. Card Title (Dynamic Text)
              </label>
              <input
                id="sandbox-input-title"
                type="text"
                value={cardTitle}
                onChange={(e) => setCardTitle(e.target.value.substring(0, 36))}
                maxLength={36}
                className="w-full px-4 py-2 text-sm rounded-lg border border-stone-300/70 bg-stone-100/70 text-stone-900 dark:border-stone-700/70 dark:bg-stone-900/60 dark:text-white focus:outline-none focus:ring-1 focus:ring-stone-400"
                placeholder="Enter title here..."
              />
            </div>

            {/* PADDING CONTROLLER */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-semibold text-slate-450 font-mono uppercase tracking-wider">
                  2. Padding Internal
                </label>
                <span className="font-mono text-xs font-medium text-cyan-400">{`p-${paddingVal} (${activePadding.px})`}</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {(["4", "6", "8", "12"] as const).map((val) => (
                  <button
                    id={`sandbox-pad-${val}`}
                    key={val}
                    onClick={() => setPaddingVal(val)}
                    className={`py-1.5 rounded-lg font-mono text-xs font-medium cursor-pointer transition-all ${
                      paddingVal === val
                        ? "bg-stone-800 text-white shadow-sm dark:bg-stone-200 dark:text-stone-900"
                        : "bg-stone-100 text-stone-700 hover:bg-stone-200 border border-stone-300/70 dark:bg-stone-900/60 dark:text-stone-300 dark:hover:bg-stone-800/70 dark:border-stone-700/70"
                    }`}
                  >
                    {val === "4"
                      ? "Small"
                      : val === "6"
                        ? "Base"
                        : val === "8"
                          ? "Large"
                          : "XL"}
                  </button>
                ))}
              </div>
            </div>

            {/* BORDER RADIUS CONTROLLER */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-semibold text-slate-455 font-mono uppercase tracking-wider">
                  3. Border Radius (Rounding)
                </label>
                <span className="font-mono text-xs font-medium text-cyan-400">
                  {borderRadius === "none"
                    ? "0px"
                    : borderRadius === "lg"
                      ? "rounded-lg (8px)"
                      : borderRadius === "2xl"
                        ? "rounded-2xl (16px)"
                        : borderRadius === "3xl"
                          ? "rounded-3xl (24px)"
                          : "Capsule (36px)"}
                </span>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {(["none", "lg", "2xl", "3xl", "full"] as const).map((val) => (
                  <button
                    id={`sandbox-radius-${val}`}
                    key={val}
                    onClick={() => setBorderRadius(val)}
                    className={`py-1.5 rounded-lg font-mono text-xs font-medium capitalize cursor-pointer transition-all ${
                      borderRadius === val
                        ? "bg-stone-800 text-white shadow-sm dark:bg-stone-200 dark:text-stone-900"
                        : "bg-stone-100 text-stone-700 hover:bg-stone-200 border border-stone-300/70 dark:bg-stone-900/60 dark:text-stone-300 dark:hover:bg-stone-800/70 dark:border-stone-700/70"
                    }`}
                  >
                    {val}
                  </button>
                ))}
              </div>
            </div>

            {/* SCHEME COLOR PALETTE */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-455 font-mono uppercase tracking-wider text-left">
                4. Card Colour Scheme
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {Object.entries(themeMap).map(([key, style]) => {
                  const isSelected = themeStyle === key;
                  return (
                    <button
                      id={`sandbox-color-${key}`}
                      key={key}
                      onClick={() => setThemeStyle(key as any)}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl border text-xs font-medium cursor-pointer transition-all ${
                        isSelected
                          ? "border-stone-400 bg-stone-200/70 text-stone-800 dark:bg-stone-800/50 dark:text-stone-200"
                          : "border-stone-300/70 bg-stone-100/70 text-stone-600 hover:border-stone-400 dark:bg-stone-900/50 dark:text-stone-400 dark:hover:border-stone-600"
                      }`}
                    >
                      <span>{style.label}</span>
                      <div className="flex gap-1">
                        {key === "dark-slate" && (
                          <>
                            <span className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-700" />
                            <span className="w-2.5 h-2.5 rounded-full bg-stone-500" />
                          </>
                        )}
                        {key === "light-glass" && (
                          <>
                            <span className="w-2.5 h-2.5 rounded-full bg-zinc-950 border border-slate-650" />
                            <span className="w-2.5 h-2.5 rounded-full bg-stone-400" />
                          </>
                        )}
                        {key === "indigo-electric" && (
                          <>
                            <span className="w-2.5 h-2.5 rounded-full bg-stone-700 border border-stone-400" />
                            <span className="w-2.5 h-2.5 rounded-full bg-stone-500" />
                          </>
                        )}
                        {key === "emerald-minimal" && (
                          <>
                            <span className="w-2.5 h-2.5 rounded-full bg-stone-200 border border-stone-400" />
                            <span className="w-2.5 h-2.5 rounded-full bg-stone-400" />
                          </>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* SHADOW INTENSITY */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-455 font-mono uppercase tracking-wider text-left">
                5. Shadow Intensity
              </label>
              <div className="grid grid-cols-4 gap-2">
                {(["none", "md", "xl", "glow-indigo"] as const).map((val) => (
                  <button
                    id={`sandbox-shadow-${val}`}
                    key={val}
                    onClick={() => setShadowDepth(val)}
                    className={`py-1.5 rounded-lg font-mono text-xs font-medium cursor-pointer transition-all ${
                      shadowDepth === val
                        ? "bg-stone-800 text-white shadow-sm dark:bg-stone-200 dark:text-stone-900"
                        : "bg-stone-100 text-stone-700 hover:bg-stone-200 border border-stone-300/70 dark:bg-stone-900/60 dark:text-stone-300 dark:hover:bg-stone-800/70 dark:border-stone-700/70"
                    }`}
                  >
                    {val === "glow-indigo"
                      ? "Glow"
                      : val === "xl"
                        ? "Extra Lg"
                        : val === "md"
                          ? "Medium"
                          : "None"}
                  </button>
                ))}
              </div>
            </div>

            {/* FONT FAMILY */}
            <div className="space-y-3">
              <label className="block text-xs font-semibold text-slate-455 font-mono uppercase tracking-wider text-left">
                6. Main Typography
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(["sans", "display", "mono"] as const).map((val) => (
                  <button
                    id={`sandbox-font-${val}`}
                    key={val}
                    onClick={() => setFontFamily(val)}
                    className={`py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-all ${
                      fontFamily === val
                        ? "bg-stone-800 text-white shadow-sm dark:bg-stone-200 dark:text-stone-900"
                        : "bg-stone-100 text-stone-700 hover:bg-stone-200 border border-stone-300/70 dark:bg-stone-900/60 dark:text-stone-300 dark:hover:bg-stone-800/70 dark:border-stone-700/70"
                    }`}
                  >
                    {val === "sans"
                      ? "Inter"
                      : val === "display"
                        ? "Space Grotesk"
                        : "JetBrains Mono"}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* DUAL DISPLAY PANELS (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* IN-SITU LIVE PREVIEW PANEL */}
            <div className="bg-white/80 dark:bg-zinc-950 p-8 rounded-2xl border border-stone-300/70 dark:border-stone-700/70 shadow-sm flex flex-col items-center justify-center min-h-[300px] relative">
              {/* Figma visual guides lines */}
              <div className="absolute top-4 left-6 flex items-center gap-1 text-[10px] text-slate-400 font-mono uppercase tracking-widest leading-none select-none">
                <LayoutGrid className="w-3.5 h-3.5 text-stone-500 dark:text-stone-400" />
                <span>Live Rendering Interface (Figma Specs)</span>
              </div>

              {/* LIVE CARDS WRAPPER */}
              <div className="w-full max-w-sm py-8 flex justify-center">
                <motion.div
                  id="sandbox-preview-card"
                  layout
                  className={`w-full text-left transition-all duration-300 relative ${activeTheme.className} ${activePadding.className} ${activeBorder.className} ${activeShadow} ${activeFont}`}
                >
                  {/* Spacing lines mockup for Hover design specs */}
                  <div className="absolute top-0 inset-x-0 h-1.5 bg-rose-500/10 pointer-events-none rounded-t border-b border-dashed border-rose-400/40 opacity-0 hover:opacity-100 transition-opacity" />

                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 text-[9px] uppercase font-mono tracking-wider font-semibold rounded bg-stone-200/80 text-stone-700 border border-stone-300/70 dark:bg-stone-800/60 dark:text-stone-300 dark:border-stone-700/70">
                      TOKEN: {themeStyle.replace("-", " ").toUpperCase()}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold mt-4 tracking-tight leading-tight">
                    {cardTitle || "Empty Title..."}
                  </h3>

                  <p className="opacity-80 text-xs sm:text-sm mt-3 leading-relaxed">
                    The fusion of UI/UX aesthetic variables with reactive
                    engineering functionality creates true precision.
                  </p>

                  <div className="mt-6 pt-4 border-t border-current/10 flex items-center justify-between text-[11px] font-mono opacity-65">
                    <span>border: {activeBorder.px}</span>
                    <span>padding: {activePadding.px}</span>
                  </div>

                  <button className="mt-5 w-full py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 dark:bg-stone-200 dark:hover:bg-stone-100 dark:text-stone-900 font-semibold text-xs text-white shadow-sm cursor-pointer transition-opacity focus:outline-none focus:ring-1 focus:ring-stone-400">
                    Start Exploration
                  </button>
                </motion.div>
              </div>
            </div>

            {/* GENERATED TAILWIND & REACT CODE */}
            <div className="bg-stone-50/90 dark:bg-[#0A0A0B] text-stone-700 dark:text-stone-300 p-6 rounded-2xl border border-stone-300/70 dark:border-stone-700/70 shadow-lg text-left flex flex-col relative">
              <div className="flex items-center justify-between pb-3 border-b border-stone-300/70 dark:border-stone-700/70 mb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-stone-700 dark:text-stone-300 font-semibold">
                  <Code2 className="w-4 h-4" />
                  <span>OUTPUT CODE (REACT × TAILWIND)</span>
                </div>
                <button
                  id="sandbox-copy-code-btn"
                  onClick={handleCopy}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors cursor-pointer text-xs font-semibold flex items-center gap-1.5"
                >
                  {copied ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-mono">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy React Code</span>
                    </>
                  )}
                </button>
              </div>

              {/* CODE SCROLLABLE PREVIEW */}
              <div className="max-h-[160px] overflow-y-auto whitespace-pre font-mono text-[11px] leading-relaxed text-indigo-200/90 bg-slate-950 p-4 rounded-xl border border-slate-800">
                {generatedTailwindString}
              </div>

              <p className="font-mono text-[10px] text-slate-500 mt-3 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                <span>
                  Copy code above to use directly in your React + Tailwind
                  platform!
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

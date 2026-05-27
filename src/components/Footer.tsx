import React from "react";
import { Command, Sparkles } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-transparent border-t border-purple-500/10 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left select-none">
        {/* LEFT BRAND IDENTIFIER */}
        <div className="flex items-center gap-2">
          <img
            src="/img/logo.png"
            alt="Ricky Rohaendi Logo"
            className="w-6 h-6 rounded-[15px] object-cover"
          />
          <p className="font-mono text-xs text-slate-400">
            Ricky Rohaendi © {year} •{" "}
            <span className="font-semibold text-slate-350">
              Designer & Software Engineer
            </span>
          </p>
        </div>

        {/* RIGHT FOOTER STRIP */}
        <div className="flex items-center gap-2 text-slate-500 font-mono text-[10px] uppercase tracking-wider">
          <Command className="w-3.5 h-3.5" />
          <span>Framer Animations (Motion) • Tailwind v4.0</span>
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
        </div>
      </div>
    </footer>
  );
}

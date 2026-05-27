import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "./ThemeContext";
import { Sun, Moon, Menu, X, Terminal, Cpu } from "lucide-react";

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "projects", label: "Works" },
    { id: "sandbox", label: "Playground" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Say Hello" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleItemClick = (id: string) => {
    setIsOpen(false);
    onNavigate(id);
  };

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-white/70 dark:bg-slate-900/75 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/40"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* LOGO */}
        <button
          id="nav-logo-btn"
          onClick={() => handleItemClick("hero")}
          className="flex items-center gap-2 group cursor-pointer text-left focus:outline-none"
        >
          <img
            src="/img/logo.png"
            alt="Ricky Rohaendi Logo"
            className="w-9 h-9 rounded-[15px] object-cover shadow-sm group-hover:scale-105 transition-transform"
          />
          <div className="hidden sm:block">
            <h1 className="font-display font-bold text-sm tracking-wide text-slate-900 dark:text-white leading-tight">
              Ricky Rohaendi
            </h1>
            <p className="font-mono text-[10px] text-indigo-600 dark:text-indigo-400 font-medium">
              DESIGN × CODE
            </p>
          </div>
        </button>

        {/* DESKTOP MENU ITEMS */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                id={`nav-item-${item.id}`}
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium tracking-wide transition-colors cursor-pointer focus:outline-none ${
                  isActive
                    ? "text-indigo-600 dark:text-indigo-400"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-indigo-50 dark:bg-slate-800/60 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* RIGHT SYSTEM PANEL (THEME TOGGLE + ACTIONS) */}
        <div className="flex items-center gap-3">
          {/* THEME TOGGLE BUTTON */}
          <button
            id="theme-toggle-btn"
            onClick={toggleTheme}
            className="p-2.5 rounded-full border border-slate-200 dark:border-slate-850 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer focus:outline-none"
            aria-label="Toggle theme color"
          >
            {theme === "dark" ? (
              <Moon className="w-4 h-4 text-indigo-400" />
            ) : (
              <Sun className="w-4 h-4 text-amber-400" />
            )}
          </button>

          {/* HIRE ME BUTTON (SCROLLS TO CONTACT) */}
          <button
            id="hire-me-btn"
            onClick={() => handleItemClick("contact")}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-750 dark:hover:bg-indigo-600 text-white font-medium text-xs rounded-full shadow-sm shadow-indigo-600/10 cursor-pointer transition-colors focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          >
            Work with me
          </button>

          {/* MOBILE HAMBURGER TOGGLE */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2.5 rounded-full border border-slate-200 dark:border-slate-850 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-3">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    id={`mobile-nav-item-${item.id}`}
                    key={item.id}
                    onClick={() => handleItemClick(item.id)}
                    className={`w-full py-3 px-4 rounded-xl text-left text-base font-semibold border transition-all cursor-pointer ${
                      isActive
                        ? "border-indigo-100 dark:border-slate-700/50 bg-indigo-50/50 dark:bg-slate-800/50 text-indigo-600 dark:text-indigo-400"
                        : "border-transparent text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/30"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <button
                id="mobile-hire-me-btn"
                onClick={() => handleItemClick("contact")}
                className="w-full mt-2 py-3 px-4 bg-indigo-600 hover:bg-indigo-750 dark:bg-indigo-500 text-white font-semibold rounded-xl text-center shadow-md shadow-indigo-600/15 cursor-pointer"
              >
                Work with me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

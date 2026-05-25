import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PROJECTS } from "../data";
import { Project } from "../types";
import {
  ExternalLink,
  Github,
  X,
  Sparkles,
  Layers,
  ArrowUpRight,
  Code2,
  FileText,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

export default function Projects() {
  const [filter, setFilter] = useState<
    "all" | "ui-ux" | "engineering" | "dual"
  >("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((proj) => {
    if (filter === "all") return true;
    return proj.category === filter;
  });

  return (
    <section id="projects" className="py-24 bg-transparent transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        {/* SECTION HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 text-left">
          <div className="flex flex-col items-start gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-950/20 text-purple-300 font-mono text-xs font-semibold">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>Featured Case Studies</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
              Portfolio & Works Gallery
            </h2>
            <p className="text-slate-600 dark:text-slate-350 max-w-lg text-sm sm:text-base leading-relaxed">
              Koleksi proyek terpilih yang mengawinkan seni komposisi visual
              intuitif dan keahlian rekayasa sirkuit kode.
            </p>
          </div>

          {/* FILTER CONTROLLER BUTTONS */}
          <div className="flex flex-wrap items-center gap-1.5 self-start sm:self-auto bg-slate-950 p-1.5 rounded-2xl border border-purple-500/20">
            {(
              [
                { id: "all", label: "All" },
                { id: "ui-ux", label: "UI/UX Design" },
                { id: "engineering", label: "Engineering" },
                { id: "dual", label: "Dual-Stack" },
              ] as const
            ).map((tab) => (
              <button
                id={`projects-filter-${tab.id}`}
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer focus:outline-none ${
                  filter === tab.id
                    ? "bg-gradient-to-r from-cyan-500 via-purple-500 to-rose-500 text-white shadow-md font-semibold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* PROJECTS MOSAIC GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                id={`project-card-${project.id}`}
                key={project.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.25, delay: index * 0.05 }}
                className="group relative bg-zinc-900/45 rounded-3xl border border-purple-500/20 hover:border-cyan-400/45 overflow-hidden cursor-pointer shadow-lg hover:shadow-cyan-500/5 transition-all duration-300 flex flex-col pt-0 backdrop-blur-md"
                onClick={() => setSelectedProject(project)}
              >
                {/* Visual Cover Picture container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  <div className="absolute inset-0 bg-purple-950/40 z-10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold text-xs tracking-wide shadow-lg flex items-center gap-1.5 transition-transform transform scale-95 group-hover:scale-100 duration-200">
                      Selidiki Studi Kasus
                      <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                    </span>
                  </div>
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Category overlay label */}
                  <span className="absolute top-4 left-4 z-20 px-2.5 py-1 text-[9px] font-mono font-bold tracking-widest uppercase bg-gradient-to-r from-cyan-500 to-purple-600 rounded-md text-white">
                    {project.category === "dual"
                      ? "DESIGN × CODE"
                      : project.category.toUpperCase()}
                  </span>
                </div>

                {/* Cover info */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between items-start text-left">
                  <div className="space-y-3 w-full">
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-white leading-snug group-hover:text-cyan-450 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* BOTTOM SUBTAGS */}
                  <div className="flex flex-wrap gap-1.5 mt-6 pt-6 border-t border-purple-500/10 w-full">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded bg-purple-950/20 border border-purple-500/10 font-mono text-[10px] text-cyan-300 hover:text-white transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2.5 py-1 rounded bg-purple-950/30 font-mono text-[10px] text-purple-300 font-semibold border border-purple-500/10">
                        +{project.tags.length - 3} lainnya
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* MODAL DETIL PORTFOLIO (ANIPRESENCE) */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              id="project-detail-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 overflow-y-auto px-4 py-12 bg-slate-950/85 backdrop-blur-sm flex items-center justify-center"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                id="modal-card-container"
                initial={{ scale: 0.94, y: 15, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.94, y: 15, opacity: 0 }}
                transition={{ type: "spring", stiffness: 280, damping: 25 }}
                className="relative bg-zinc-950 w-full max-w-4xl rounded-3xl border border-purple-500/20 shadow-2xl overflow-hidden text-left"
                onClick={(e) => e.stopPropagation()} // Stop clicking content from dismissal
              >
                {/* CLOSE CONTAINER */}
                <button
                  id="modal-close-btn"
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-40 p-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white cursor-pointer focus:outline-none transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* MODAL BODY */}
                <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[85vh] lg:max-h-none overflow-y-auto lg:overflow-visible">
                  {/* Left structural Column (Hero & tags, metric stats lg:col-span-5) */}
                  <div className="lg:col-span-5 bg-zinc-900/40 p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-purple-500/10">
                    <div className="space-y-6">
                      <div className="rounded-2xl overflow-hidden aspect-[16/10] w-full bg-slate-900 shadow-sm">
                        <img
                          src={selectedProject.image}
                          alt={selectedProject.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="space-y-2">
                        <span className="px-2.5 py-0.5 text-[9px] font-mono font-bold tracking-widest uppercase bg-purple-950/40 text-cyan-300 rounded">
                          {selectedProject.category.toUpperCase()}
                        </span>
                        <h4 className="font-display font-extrabold text-xl sm:text-2xl text-white leading-tight">
                          {selectedProject.title}
                        </h4>
                      </div>

                      {/* EXTERNAL NAV LINKS */}
                      <div className="flex flex-wrap gap-3.5 pt-2">
                        {selectedProject.githubUrl && (
                          <a
                            href={selectedProject.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-medium text-xs shadow-sm transition-all text-center"
                          >
                            <Github className="w-4 h-4" />
                            GitHub Code
                          </a>
                        )}
                        {selectedProject.liveUrl && (
                          <a
                            href={selectedProject.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl border border-purple-500/30 hover:border-cyan-400/50 text-white font-medium text-xs transition-transform"
                          >
                            <ExternalLink className="w-4 h-4 text-cyan-300" />
                            Live Website
                          </a>
                        )}
                        {selectedProject.figmaUrl && (
                          <a
                            href={selectedProject.figmaUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl border border-purple-500/30 hover:border-cyan-400/50 text-white font-medium text-xs transition-transform"
                          >
                            <Layers className="w-4 h-4 text-rose-500" />
                            Figma File
                          </a>
                        )}
                      </div>
                    </div>

                    {/* METRICS OR STATS COLUMN BLOCK */}
                    <div className="mt-8 pt-6 border-t border-purple-500/10 space-y-4">
                      <h5 className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
                        Metrik Kesuksesan Proyek
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
                        {selectedProject.metrics.map((m) => (
                          <div
                            key={m.label}
                            className="p-3.5 rounded-xl bg-purple-950/20 border border-purple-500/10 flex flex-col"
                          >
                            <span className="font-display font-black text-lg sm:text-xl text-cyan-400">
                              {m.value}
                            </span>
                            <span className="font-mono text-[9px] text-slate-400 mt-1 uppercase">
                              {m.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column (Long Description, Technologies used, Key Deliverables lg:col-span-7) */}
                  <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 overflow-y-auto lg:h-[80vh]">
                    <div className="space-y-3">
                      <h5 className="font-mono text-[10px] font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5" />
                        Latar Belakang & Deskripsi
                      </h5>
                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                        {selectedProject.longDescription}
                      </p>
                    </div>

                    {/* TECHNICAL STACK BADGES */}
                    <div className="space-y-3">
                      <h5 className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                        <Code2 className="w-3.5 h-3.5 text-purple-400" />
                        Spesifikasi Teknologi / Tools
                      </h5>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProject.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-purple-950/20 border border-purple-500/10 rounded-lg text-xs font-mono text-cyan-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* KEY DELIVERABLES / OUTCOMES LIST */}
                    <div className="space-y-3 pt-2">
                      <h5 className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">
                        Hasil & Serahan Utama
                      </h5>
                      <div className="grid grid-cols-1 gap-2.5">
                        {selectedProject.deliverables.map((out) => (
                          <div
                            key={out}
                            className="flex items-start gap-2.5 p-3 rounded-xl bg-purple-955/20 border border-purple-500/10"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span className="text-xs sm:text-sm text-slate-350">
                              {out}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

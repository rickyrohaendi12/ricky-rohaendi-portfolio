import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Send,
  Github,
  Linkedin,
  Mail,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Smile,
  FileCode,
  MapPin,
  Instagram,
  Music,
} from "lucide-react";

export default function Contact() {
  // CLIENT FORM STATES
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "dual",
    message: "",
  });
  const [activeInput, setActiveInput] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // REAL TIME STATUS CUE
  const getStatusMessage = () => {
    if (activeInput === "name") return "Mengetik nama lengkap Anda...";
    if (activeInput === "email") return "Memastikan format email valid...";
    if (activeInput === "message")
      return "Menulis deskripsi kolaborasi atau sapaan...";
    if (formData.name && formData.email && formData.message)
      return "Semua kolom terisi! Siap kirim berkas.";
    return "Menunggu input kolaborasi Anda...";
  };

  const handleFocus = (field: string) => setActiveInput(field);
  const handleBlur = () => setActiveInput(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate real database submission latency
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", projectType: "dual", message: "" });
      // Reset success prompt after 4.5 seconds
      setTimeout(() => setIsSuccess(false), 4500);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-transparent relative overflow-hidden"
    >
      {/* Background orbs */}
      <div className="absolute bottom-[-10%] left-[-5%] w-72 h-72 rounded-full bg-purple-500/5 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* SECTION METRICS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT SIDEBAR DETAIL INFO (lg:col-span-5) */}
          <div className="lg:col-span-5 text-left space-y-8 lg:sticky lg:top-32">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-950/20 text-purple-300 font-mono text-xs font-semibold">
                <Smile className="w-3.5 h-3.5 text-cyan-400" />
                <span>Start Collaborating</span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
                Let’s discuss your next project or just say hi!
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Do you have an amazing product idea that requires visual
                functionality analysis and robust React implementation? Let’s
                have a chat or just say hello! I’m always open to discussing new
                projects, creative ideas, or opportunities to be part of your
                vision. Whether you want to collaborate on a design, need help
                with frontend development, or just want to connect, feel free to
                reach out. I look forward to hearing from you!
              </p>
            </div>

            {/* QUICK CONTACT METRICS */}
            <div className="space-y-4.5 pt-4">
              <div className="flex items-center gap-3.5">
                <div className="p-3 bg-purple-950/10 border border-purple-500/15 text-slate-300 rounded-xl">
                  <Mail className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="font-mono text-[9px] text-slate-500 uppercase tracking-widest leading-none">
                    Email
                  </p>
                  <a
                    href="mailto:rickyrohaendi1@gmail.com"
                    className="font-display font-semibold text-sm sm:text-base text-white hover:text-cyan-400 transition-colors"
                  >
                    rickyrohaendi1@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="p-3 bg-purple-950/10 border border-purple-500/15 text-slate-300 rounded-xl">
                  <MapPin className="w-5 h-5 text-purple-450" />
                </div>
                <div>
                  <p className="font-mono text-[9px] text-slate-500 uppercase tracking-widest leading-none">
                    Location
                  </p>
                  <p className="font-display font-semibold text-sm sm:text-base text-white">
                    Bandung, West Java, Indonesia
                  </p>
                </div>
              </div>
            </div>

            {/* EXTERNAL NETWORKS PANEL */}
            <div className="space-y-3.5 pt-6 border-t border-purple-500/10">
              <h5 className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-widest pl-1 leading-none">
                Professional Social Channels
              </h5>
              <div className="flex items-center gap-3">
                <a
                  id="contact-social-github"
                  href="https://github.com/rickyrohaendi12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-purple-500/10 hover:border-cyan-400/40 bg-zinc-950 text-slate-300 hover:text-cyan-400 transition-colors cursor-pointer"
                  aria-label="Visit Github Portfolio"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  id="contact-social-linkedin"
                  href="https://www.linkedin.com/in/ricky-rohaendi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-purple-500/10 hover:border-purple-500/40 bg-zinc-950 text-slate-300 hover:text-purple-400 transition-colors cursor-pointer"
                  aria-label="Visit LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  id="contact-social-instagram"
                  href="https://instagram.com/rckyrrr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-purple-500/10 hover:border-rose-400/40 bg-zinc-950 text-slate-300 hover:text-rose-400 transition-colors cursor-pointer"
                  aria-label="Visit Instagram Profile"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  id="contact-social-tiktok"
                  href="https://www.tiktok.com/@rr_uid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-purple-500/10 hover:border-cyan-400/40 bg-zinc-950 text-slate-300 hover:text-cyan-400 transition-colors cursor-pointer"
                  aria-label="Visit TikTok Profile"
                >
                  <Music className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT ACTION FORM (lg:col-span-7) */}
          <div className="lg:col-span-7 bg-zinc-950/60 p-6 sm:p-8 rounded-3xl border border-purple-500/20 text-left flex flex-col relative w-full backdrop-blur-md">
            {/* Dynamic visual micro feedback status block */}
            <div className="mb-6 p-3.5 rounded-xl bg-purple-950/25 border border-purple-500/10 flex items-center gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-405 animate-pulse shrink-0" />
              <span className="font-mono text-[11px] text-slate-300 italic">
                {getStatusMessage()}
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* NAME INPUT */}
                <div className="space-y-2">
                  <label
                    htmlFor="contact-name"
                    className="block text-[11px] font-bold text-slate-400 font-mono uppercase tracking-wider pl-1"
                  >
                    Nama Lengkap
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus("name")}
                    onBlur={handleBlur}
                    className="w-full px-4 py-3 rounded-xl border border-purple-500/20 bg-purple-950/15 text-white text-sm focus:outline-none focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400 transition-all font-sans"
                    placeholder="Contoh: Ricky Rohaendi"
                  />
                </div>

                {/* EMAIL INPUT */}
                <div className="space-y-2">
                  <label
                    htmlFor="contact-email"
                    className="block text-[11px] font-bold text-slate-400 font-mono uppercase tracking-wider pl-1"
                  >
                    Surel / Email Address
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus("email")}
                    onBlur={handleBlur}
                    className="w-full px-4 py-3 rounded-xl border border-purple-500/20 bg-purple-950/15 text-white text-sm focus:outline-none focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400 transition-all font-sans"
                    placeholder="Contoh: ricky@rohaendi.com"
                  />
                </div>
              </div>

              {/* PROJECT TYPE SELECTION */}
              <div className="space-y-2">
                <label
                  htmlFor="contact-project-type"
                  className="block text-[11px] font-bold text-slate-400 font-mono uppercase tracking-wider pl-1 font-sans"
                >
                  Jenis Kolaborasi / Kebutuhan
                </label>
                <div className="relative">
                  <select
                    id="contact-project-type"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-purple-500/20 bg-purple-950/15 text-white text-sm focus:outline-none focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400 transition-all font-semibold cursor-pointer appearance-none"
                  >
                    <option
                      value="dual"
                      className="font-sans text-slate-900 bg-white"
                    >
                      UI/UX Design + Frontend React (Dual-Stack)
                    </option>
                    <option
                      value="ui-ux"
                      className="font-sans text-slate-900 bg-white"
                    >
                      Hanya Detail UI/UX Figma Design
                    </option>
                    <option
                      value="engineering"
                      className="font-sans text-slate-900 bg-white"
                    >
                      Hanya React / TypeScript Engineering
                    </option>
                    <option
                      value="other"
                      className="font-sans text-slate-900 bg-white"
                    >
                      Konsultasi / Tawaran Lainnya
                    </option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400">
                    <ArrowDownIcon className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* MESSAGE AREA */}
              <div className="space-y-2">
                <label
                  htmlFor="contact-message"
                  className="block text-[11px] font-bold text-slate-400 font-mono uppercase tracking-wider pl-1"
                >
                  Deskripsi Singkat / Pesan Anda
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus("message")}
                  onBlur={handleBlur}
                  className="w-full px-4 py-3 rounded-xl border border-purple-500/20 bg-purple-950/15 text-white text-sm focus:outline-none focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400 transition-all font-sans leading-relaxed"
                  placeholder="Ceritakan gambaran singkat ide produk atau kebutuhan sistem modular Anda disini..."
                />
              </div>

              {/* ACTION SEND SUBMIT BUTTON */}
              <button
                id="contact-submit-btn"
                type="submit"
                disabled={isSubmitting || isSuccess}
                className={`w-full py-3.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide text-white transition-all cursor-pointer focus:outline-none relative shadow-lg ${
                  isSuccess
                    ? "bg-emerald-600 shadow-emerald-700/10"
                    : "bg-gradient-to-r from-cyan-500 via-purple-600 to-rose-500 hover:opacity-95 shadow-purple-550/15"
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2 font-mono text-xs">
                    <span className="w-3.5 h-3.5 rounded-full border-2 border-dashed border-white animate-spin" />
                    Memproses Pengiriman...
                  </span>
                ) : isSuccess ? (
                  <span className="flex items-center justify-center gap-1.5">
                    <CheckCircle2 className="w-5 h-5 text-white bg-transparent" />
                    Pesan Berhasil Dikirimkan!
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Kirim Pesan Kolaborasi
                    <Send className="w-4 h-4 text-white hover:translate-x-0.5 transition-transform" />
                  </span>
                )}
              </button>
            </form>

            <AnimatePresence>
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  className="mt-4 p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/30 text-emerald-400 font-medium text-xs leading-relaxed"
                >
                  <p className="flex items-center gap-2 font-display">
                    <Sparkles className="w-4 h-4 text-emerald-405 animate-pulse shrink-0" />
                    Terima kasih atas minat Anda! Kontak simulasi terkirim
                    dengan sukses. Saya akan menghubungi surel Anda kembali
                    secepatnya.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

// Simple interior icon components to save separate file footprints
function ArrowDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      width="1em"
      height="1em"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

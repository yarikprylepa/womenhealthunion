"use client";

import { useState, useCallback, useEffect } from "react";
import dynamic from "next/dynamic";
import { Mail, AtSign, Camera, X } from "lucide-react";

const StudentChapterMap = dynamic(() => import("./components/StudentChapterMap"), { ssr: false });

// University of Reading removed
const chapters = [
  {
    university: "Queen Mary University of London", city: "London", active: true, logo: "/logos/qmullogo.png", lat: 51.5241, lng: -0.0404,
    committee: [
      { role: "President", name: "Amara Okafor", course: "BSc Biomedical Sciences", email: "afo234@qmul.ac.uk" },
      { role: "Vice-President", name: "Priya Sharma", course: "BSc Global Public Health", email: "psh891@qmul.ac.uk" },
      { role: "Treasury", name: "Leila Nkosi", course: "BSc Economics", email: "lnk102@qmul.ac.uk" },
      { role: "Social Outreach", name: "Sofia Marchetti", course: "BSc Psychology", email: "sma567@qmul.ac.uk" },
    ],
  },
  {
    university: "University of Sheffield", city: "Sheffield", active: true, logo: "/logos/sheflogo.png", lat: 53.3811, lng: -1.4701,
    committee: [
      { role: "President", name: "Emily Rashford", course: "BSc Biomedical Sciences", email: "er1393@sheffield.ac.uk" },
      { role: "Vice-President", name: "Aisha Yusuf", course: "BSc Nursing", email: "ay2841@sheffield.ac.uk" },
      { role: "Treasury", name: "Caitlin Hughes", course: "BSc Human Biology", email: "ch4017@sheffield.ac.uk" },
      { role: "Social Outreach", name: "Zara Patel", course: "BSc Health Psychology", email: "zp3920@sheffield.ac.uk" },
    ],
  },
];

// Partners — real logos + placeholders, duplicated for seamless marquee
const partnersBase = [
  { name: "Bobbi", logo: "/logos/bobbilogo.png", href: "https://www.instagram.com/wearebobbi/", description: "Bobbi is an inclusive beauty brand championing self-expression and wellbeing for every woman." },
  { name: "Partner 2", logo: null, href: "#", description: "A valued partner supporting our mission to make women's health resources accessible across every UK campus." },
  { name: "Partner 3", logo: null, href: "#", description: "Working alongside WHU to drive awareness and provide holistic health education for students." },
  { name: "Partner 4", logo: null, href: "#", description: "Proudly supporting WHU in building a nationwide network of empowered student advocates." },
];

export default function Home() {
  const [selectedChapter, setSelectedChapter] = useState<any>(null);
  const [viewMode, setViewMode] = useState<"list" | "map">("list");

  // Smooth-scroll helper for nav links
  const scrollTo = useCallback((id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  // Duplicate for seamless marquee loop
  const marqueeItems = [...partnersBase, ...partnersBase];

  return (
    <main className="min-h-screen bg-[#F1EEF4] text-[#4A4045] font-sans selection:bg-[#E786B6] selection:text-white pb-24">

      {/* Navigation - Clean Modern Pill */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl z-50 rounded-2xl bg-white/90 backdrop-blur-md px-8 py-4 flex justify-between items-center shadow-lg border border-black/5">
        <div className="font-extrabold text-2xl tracking-tighter text-[#D45995]">WHU</div>
        <div className="hidden md:flex gap-8 font-bold text-sm tracking-wide text-[#4A4045]">
          <a href="#about" onClick={scrollTo("about")} className="hover:text-[#D45995] transition-colors cursor-pointer">About</a>
          <a href="#chapters" onClick={scrollTo("chapters")} className="hover:text-[#D45995] transition-colors cursor-pointer">Chapters</a>
          <a href="#partners" onClick={scrollTo("partners")} className="hover:text-[#D45995] transition-colors cursor-pointer">Partners</a>
          <a href="#contact" onClick={scrollTo("contact")} className="hover:text-[#D45995] transition-colors cursor-pointer">Contact</a>
        </div>
      </nav>

      {/* Section 1: Hero */}
      <section className="w-full bg-gradient-to-b from-[#D45995] from-80% to-[#F1EEF4] pt-24 pb-16 md:py-32 relative">
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-12">

          {/* Left side: Logo & Motto */}
          <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="font-extrabold text-[7rem] md:text-[11rem] leading-[0.85] tracking-tighter text-white drop-shadow-md select-none">
              WHU
            </h1>
            <div className="inline-block bg-white text-[#D45995] font-extrabold text-xl md:text-2xl px-6 py-3 rounded-2xl shadow-md mt-6">
              Women's Health Union
            </div>
          </div>

          {/* Right side: 5% Stat Card with Yellow Highlight */}
          <div className="md:w-1/2 flex justify-center md:justify-end w-full">
            <div className="w-full max-w-md bg-white text-[#1E1B1D] rounded-3xl p-8 md:p-10 shadow-xl border border-black/5 transform md:rotate-1 hover:rotate-0 transition-transform duration-300">
              <h3 className="font-bold text-2xl md:text-3xl leading-snug">
                <span className="font-black text-4xl md:text-6xl block mb-4 text-[#FACC15] tracking-tight">
                  Less than 5%
                </span>
                <span className="text-[#4A4045] font-medium leading-relaxed block text-lg md:text-xl">
                  of the UK have adequate access to women's health resources on campus.
                </span>
              </h3>
            </div>
          </div>

        </div>
      </section>

      {/* Section 1.5: About Us — Wide Section (Matches Header Bar Width max-w-6xl) */}
      <section id="about" className="scroll-mt-28 w-[90%] max-w-6xl mx-auto mb-16">
        <div className="bg-white rounded-3xl p-8 md:p-14 shadow-xl border border-black/5">
          <h2 className="font-extrabold text-3xl md:text-5xl text-[#1E1B1D] tracking-tight mb-6">
            About Us
          </h2>
          <p className="text-[#4A4045] text-lg md:text-2xl font-normal leading-relaxed max-w-4xl">
            We are building a nationwide network of students advocating for better health resources, education, and community support at every single university across the UK.
          </p>
        </div>
      </section>

      <div className="w-[90%] max-w-6xl mx-auto space-y-16 [&>section]:scroll-mt-28">

        {/* Section 2: Student Chapters */}
        <section id="chapters" className="scroll-mt-28 rounded-3xl p-8 md:p-14 bg-white shadow-xl border border-black/5">
          <header className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8 pb-6 border-b border-gray-100">
            <div>
              <h2 className="font-extrabold text-4xl md:text-5xl text-[#1E1B1D]">
                Student Chapters
              </h2>
            </div>
            {/* Toggle Switch */}
            <div className="flex items-center bg-[#F1EEF4] rounded-full p-1 border border-black/5">
              <button
                onClick={() => setViewMode("list")}
                aria-pressed={viewMode === "list"}
                className={`px-6 py-2 rounded-full font-bold text-sm transition-all cursor-pointer ${viewMode === "list" ? 'bg-[#D45995] text-white shadow-md' : 'text-[#7C6E76] hover:text-[#1E1B1D]'}`}
              >
                List
              </button>
              <button
                onClick={() => setViewMode("map")}
                aria-pressed={viewMode === "map"}
                className={`px-6 py-2 rounded-full font-bold text-sm transition-all cursor-pointer ${viewMode === "map" ? 'bg-[#D45995] text-white shadow-md' : 'text-[#7C6E76] hover:text-[#1E1B1D]'}`}
              >
                Map
              </button>
            </div>
          </header>

          {viewMode === "list" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {chapters.map((chapter, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedChapter(chapter)}
                  className="flex flex-col p-8 bg-[#F1EEF4]/60 rounded-3xl border border-black/5 hover:border-[#D45995]/40 hover:bg-white hover:shadow-xl transition-all duration-300 text-left group cursor-pointer"
                  aria-label={`Open ${chapter.university} chapter details`}
                >
                  {/* Logo container */}
                  <div className="w-full h-48 bg-white rounded-2xl flex items-center justify-center p-6 mb-6 shadow-sm group-hover:scale-[1.02] transition-transform">
                    {chapter.logo ? (
                      <img src={chapter.logo} alt={`${chapter.university} logo`} className="max-h-24 w-auto object-contain" />
                    ) : (
                      <span className="font-extrabold text-4xl text-[#D45995]">
                        {chapter.city.substring(0, 2).toUpperCase()}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[#D45995] uppercase tracking-wider">{chapter.city}</span>
                  </div>
                  <h3 className="font-bold text-xl text-[#1E1B1D] group-hover:text-[#D45995] transition-colors leading-snug">
                    {chapter.university}
                  </h3>
                  <div className="mt-6 pt-4 border-t border-gray-200/80 flex justify-between items-center text-xs font-bold uppercase tracking-wider text-[#1E1B1D]">
                    <span>See More</span>
                    <span className="group-hover:translate-x-1 transition-transform text-[#D45995] text-sm">→</span>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <StudentChapterMap chapters={chapters} onChapterClick={setSelectedChapter} />
          )}
        </section>

        {/* Section 3: Partners — Infinite Marquee Strip */}
        <section id="partners" className="scroll-mt-28 rounded-3xl p-8 md:p-14 bg-white shadow-xl border border-black/5 overflow-hidden">
          <div className="text-center mb-10">
            <h2 className="font-extrabold text-4xl md:text-5xl text-[#1E1B1D]">
              Partners
            </h2>
          </div>
          {/* Marquee wrapper with fade masks on edges */}
          <div
            className="relative"
            style={{
              maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
            }}
          >
            <div className="marquee-track">
              {marqueeItems.map((partner, i) => (
                <a
                  key={i}
                  href={partner.href}
                  target={partner.href !== "#" ? "_blank" : undefined}
                  rel={partner.href !== "#" ? "noopener noreferrer" : undefined}
                  className="relative flex-shrink-0 mx-4 flex flex-col items-center justify-center w-56 h-40 p-6 rounded-2xl bg-[#F1EEF4]/60 border border-black/5 hover:border-[#D45995]/50 hover:shadow-lg transition-all duration-300 cursor-pointer group overflow-hidden"
                >
                  {/* Card content — blurs on hover */}
                  <div className="flex flex-col items-center justify-center w-full h-full transition-all duration-300 group-hover:blur-[3px] group-hover:opacity-20">
                    {partner.logo ? (
                      <img src={partner.logo} alt={partner.name} className="max-h-20 w-auto object-contain" />
                    ) : (
                      <div className="w-16 h-16 rounded-2xl bg-white border border-black/5 flex items-center justify-center shadow-sm">
                        <span className="font-bold text-xs text-[#1E1B1D] text-center uppercase tracking-wider">{partner.name}</span>
                      </div>
                    )}
                  </div>
                  {/* Hover overlay — description text */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <p className="text-[#1E1B1D] font-semibold text-xs text-center leading-relaxed">{partner.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Contact — full width, one row */}
        <section id="contact" className="scroll-mt-28 rounded-3xl p-8 md:p-14 bg-white shadow-xl border border-black/5">
          <div className="mb-10 pb-6 border-b border-gray-100">
            <h2 className="font-extrabold text-3xl md:text-4xl text-[#1E1B1D]">Want to become a Partner? or a Student Chapter?</h2>
          </div>

          <div className="flex flex-col md:flex-row gap-10">

            {/* Left: Socials */}
            <div className="md:w-1/3 flex flex-col gap-4">

              <a
                href="https://www.linkedin.com/company/womenshealthunion/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#F1EEF4]/60 border border-black/5 hover:border-[#D45995]/40 hover:bg-white hover:shadow-md transition-all text-[#1E1B1D] group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#0A66C2] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <span className="font-black text-sm tracking-tight">in</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#7C6E76]">LinkedIn</span>
                  <span className="font-bold text-sm">Women's Health Union</span>
                </div>
              </a>

              <a
                href="mailto:join.whu.uk@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#F1EEF4]/60 border border-black/5 hover:border-[#D45995]/40 hover:bg-white hover:shadow-md transition-all text-[#1E1B1D] group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#D45995] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Mail size={20} />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#7C6E76]">Email</span>
                  <span className="font-bold text-sm truncate">join.whu.uk@gmail.com</span>
                </div>
              </a>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px bg-gray-200 self-stretch mx-2" />

            {/* Right: Contact Form */}
            <div className="flex-1">
              <p className="font-bold text-xs uppercase tracking-widest text-[#7C6E76] mb-4">Send an Enquiry</p>
              <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#1E1B1D]">Your Name</label>
                    <input
                      type="text"
                      placeholder="Jane Doe"
                      className="w-full px-5 py-3 rounded-xl bg-[#F1EEF4]/60 border border-black/10 outline-none font-medium text-sm text-[#1E1B1D] placeholder-[#A6979F] focus:border-[#D45995] focus:bg-white focus:ring-2 focus:ring-[#D45995]/20 transition-all"
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#1E1B1D]">Your Email</label>
                    <input
                      type="email"
                      placeholder="you@email.com"
                      className="w-full px-5 py-3 rounded-xl bg-[#F1EEF4]/60 border border-black/10 outline-none font-medium text-sm text-[#1E1B1D] placeholder-[#A6979F] focus:border-[#D45995] focus:bg-white focus:ring-2 focus:ring-[#D45995]/20 transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#1E1B1D]">What's your enquiry about?</label>
                  <select
                    defaultValue=""
                    className="w-full px-5 py-3 rounded-xl bg-[#F1EEF4]/60 border border-black/10 outline-none font-medium text-sm text-[#1E1B1D] focus:border-[#D45995] focus:bg-white focus:ring-2 focus:ring-[#D45995]/20 transition-all cursor-pointer"
                  >
                    <option value="" disabled className="text-[#A6979F]">Select reason</option>
                    <option value="learn">I want to learn more</option>
                    <option value="partner">Partnership Collaboration</option>
                    <option value="chapter">I'd like to open a chapter</option>
                    <option value="other">Something else</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <textarea
                    rows={4}
                    placeholder="Tell us more..."
                    className="w-full px-5 py-3 rounded-xl bg-[#F1EEF4]/60 border border-black/10 outline-none font-medium text-sm text-[#1E1B1D] placeholder-[#A6979F] focus:border-[#D45995] focus:bg-white focus:ring-2 focus:ring-[#D45995]/20 transition-all resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="self-start px-8 py-3.5 rounded-xl bg-[#D45995] hover:bg-[#b83e7a] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer mt-2"
                >
                  Send message →
                </button>
              </form>
            </div>

          </div>
        </section>

      </div>

      {/* Chapter Modal */}
      {selectedChapter && (
        <div
          className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setSelectedChapter(null)}
        >
          <div
            className="modal-pop w-full max-w-5xl bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-black/10 relative flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#F1EEF4] hover:bg-[#e4dfe7] text-[#1E1B1D] flex items-center justify-center transition-colors cursor-pointer z-10"
              onClick={() => setSelectedChapter(null)}
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {/* Left Column: Vertical Title */}
            <div className="w-full md:w-36 flex items-center justify-center relative md:border-r border-gray-100 md:mr-10 pb-6 md:pb-0 mb-6 md:mb-0 border-b md:border-b-0 flex-shrink-0">
              <h2 className="md:absolute md:-rotate-90 md:origin-center text-[#D45995] font-extrabold text-3xl md:text-5xl whitespace-nowrap tracking-tight md:w-[460px] text-center md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
                WHU × {selectedChapter.city}
              </h2>
            </div>

            {/* Right Column */}
            <div className="flex-1 flex flex-col gap-6 pt-2 min-w-0">

              {/* University name */}
              <div>
                <h3 className="font-extrabold text-2xl md:text-4xl text-[#1E1B1D] pr-12">{selectedChapter.university}</h3>
              </div>

              {/* Leadership Committee grid */}
              <div className="w-full">
                <h4 className="font-extrabold text-base uppercase tracking-[0.15em] text-[#D45995] mb-4">Leadership Committee</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedChapter.committee?.map((member: any, idx: number) => (
                    <div
                      key={idx}
                      className="flex flex-col gap-1.5 p-5 rounded-2xl bg-[#F1EEF4]/60 border border-black/5 hover:bg-white hover:shadow-md hover:border-[#D45995]/20 transition-all duration-200"
                    >
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#D45995]">{member.role}</span>
                      <span className="font-extrabold text-lg text-[#1E1B1D] leading-tight">{member.name}</span>
                      <span className="text-xs text-[#7C6E76] font-medium">{member.course}</span>
                      <a
                        href={`mailto:${member.email}`}
                        className="mt-1 text-xs font-semibold text-[#D45995] hover:underline truncate"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {member.email}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social icons */}
              <div className="flex gap-4 pt-2">
                <a href="#" className="w-12 h-12 rounded-xl bg-[#F1EEF4] hover:bg-[#D45995] hover:text-white text-[#1E1B1D] flex items-center justify-center transition-colors">
                  <Mail size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-xl bg-[#F1EEF4] hover:bg-[#D45995] hover:text-white text-[#1E1B1D] flex items-center justify-center transition-colors">
                  <Camera size={20} />
                </a>
              </div>

            </div>
          </div>
        </div>
      )}

    </main>
  );
}
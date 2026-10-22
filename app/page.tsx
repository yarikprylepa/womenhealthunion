"use client";

import { useState, useCallback, useEffect } from "react";
import dynamic from "next/dynamic";
import { Mail, AtSign, Camera, X } from "lucide-react";

const StudentChapterMap = dynamic(() => import("./components/StudentChapterMap"), { ssr: false });

// University of Reading removed
const chapters = [
  { university: "Queen Mary University of London", city: "London", active: true, logo: "/logos/qmullogo.png", lat: 51.5241, lng: -0.0404 },
  { university: "University of Sheffield", city: "Sheffield", active: true, logo: "/logos/sheflogo.png", lat: 53.3811, lng: -1.4701 },
];

// Partners — real logos + placeholders, duplicated for seamless marquee
const partnersBase = [
  { name: "Bobbi", logo: "/logos/bobbilogo.png", href: "https://www.instagram.com/wearebobbi/" },
  { name: "Partner 2", logo: null, href: "#" },
  { name: "Partner 3", logo: null, href: "#" },
  { name: "Partner 4", logo: null, href: "#" },
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

      {/* Navigation - Clay Style */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl z-50 rounded-[2rem] bg-[#F1EEF4] px-8 py-4 flex justify-between items-center shadow-[8px_8px_16px_#d9d6db,-8px_-8px_16px_#ffffff,inset_2px_2px_4px_rgba(255,255,255,0.7),inset_-2px_-2px_4px_rgba(0,0,0,0.05)]">
        <div className="font-extrabold text-2xl tracking-tighter text-[#D45995]">WHU</div>
        <div className="hidden md:flex gap-8 font-bold text-sm tracking-wide text-[#7C6E76]">
          <a href="#chapters" onClick={scrollTo("chapters")} className="hover:text-[#D45995] transition-colors cursor-pointer">Chapters</a>
          <a href="#partners" onClick={scrollTo("partners")} className="hover:text-[#D45995] transition-colors cursor-pointer">Partners</a>
          <a href="#contact" onClick={scrollTo("contact")} className="hover:text-[#D45995] transition-colors cursor-pointer">Contact</a>
        </div>
      </nav>

      {/* Section 1: Hero - Sticky Scroll */}
      <section className="w-full bg-gradient-to-b from-[#D45995] from-75% to-[#F1EEF4] relative">
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row px-8">

          {/* Left side: Sticky Logo & Motto */}
          <div className="md:w-1/2 h-[50vh] md:h-screen sticky top-0 flex flex-col items-center justify-center z-10 pt-20 md:pt-0">
            <div className="flex flex-col items-center justify-center text-center">
              <h1 className="font-extrabold text-[7rem] md:text-[12rem] leading-[0.8] tracking-tighter drop-shadow-[4px_6px_8px_rgba(0,0,0,0.15)] text-[#F1EEF4]">
                WHU
              </h1>
              <h2 className="font-bold text-xl md:text-3xl tracking-wide opacity-95 text-[#D45995] bg-[#F1EEF4] px-6 py-3 rounded-2xl shadow-[inset_3px_3px_6px_rgba(255,255,255,0.8),inset_-3px_-3px_6px_rgba(0,0,0,0.1)] mt-4">
                Women's Health Union
              </h2>
            </div>
          </div>

          {/* Right side: Scrolling Stickers */}
          <div className="md:w-1/2 flex flex-col items-center justify-center pt-56 md:pt-64 pb-[30vh] space-y-[60vh] relative z-20">

            {/* Sticker 1: 5% Stat */}
            <div className="w-full max-w-md mx-auto bg-[#F1EEF4] text-[#4A4045] rounded-[2.5rem] p-8 md:p-12 shadow-[12px_12px_24px_rgba(0,0,0,0.12),-12px_-12px_24px_rgba(255,255,255,0.25),inset_6px_6px_12px_rgba(255,255,255,0.9),inset_-6px_-6px_12px_rgba(0,0,0,0.05)] transform rotate-2">
              <h3 className="font-bold text-2xl md:text-4xl leading-snug">
                <span className="font-extrabold text-3xl md:text-5xl block mb-4 text-[#D45995]">Less than 5%</span>
                <span className="text-[#7C6E76]">of the UK have adequate access to women's health resources on campus.</span>
              </h3>
            </div>

            {/* Sticker 2: About Info */}
            <div className="w-full max-w-md mx-auto bg-[#F1EEF4] text-[#4A4045] rounded-[2.5rem] p-8 md:p-12 shadow-[12px_12px_24px_rgba(0,0,0,0.12),-12px_-12px_24px_rgba(255,255,255,0.25),inset_6px_6px_12px_rgba(255,255,255,0.9),inset_-6px_-6px_12px_rgba(0,0,0,0.05)] transform -rotate-3">
              <h3 className="font-extrabold text-3xl md:text-5xl leading-snug mb-4 text-[#D45995]">
                About Us
              </h3>
              <p className="text-[#7C6E76] text-lg md:text-xl font-bold leading-relaxed">
                We are building a nationwide network of students advocating for better health resources, education, and community support at every single university.
              </p>
            </div>

          </div>

        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 space-y-16 -mt-8 [&>section]:scroll-mt-28 [&>div]:scroll-mt-28">

        {/* Section 2: Student Chapters */}
        <section id="chapters" className="scroll-mt-28 rounded-[3rem] p-8 md:p-16 bg-[#F1EEF4] shadow-[12px_12px_24px_#d9d6db,-12px_-12px_24px_#ffffff,inset_6px_6px_12px_rgba(255,255,255,0.7),inset_-6px_-6px_12px_rgba(0,0,0,0.05)]">
          <header className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <h2 className="font-extrabold text-5xl md:text-6xl text-[#4A4045]">
                Student Chapters
              </h2>
              {/* Toggle Switch */}
              <div className="flex items-center bg-[#F1EEF4] rounded-full p-1 shadow-[inset_3px_3px_6px_#d9d6db,inset_-3px_-3px_6px_#ffffff]">
                <button
                  onClick={() => setViewMode("list")}
                  aria-pressed={viewMode === "list"}
                  className={`px-6 py-2 rounded-full font-bold transition-all ${viewMode === "list" ? 'bg-[#D45995] text-white shadow-[4px_4px_8px_#d9d6db,-4px_-4px_8px_#ffffff]' : 'text-[#7C6E76] hover:bg-[#e8e4e9]'}`}
                >
                  List
                </button>
                <button
                  onClick={() => setViewMode("map")}
                  aria-pressed={viewMode === "map"}
                  className={`px-6 py-2 rounded-full font-bold transition-all ${viewMode === "map" ? 'bg-[#D45995] text-white shadow-[4px_4px_8px_#d9d6db,-4px_-4px_8px_#ffffff]' : 'text-[#7C6E76] hover:bg-[#e8e4e9]'}`}
                >
                  Map
                </button>
              </div>
            </div>
            <div className="flex gap-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-8 h-8 rounded-full bg-[#E786B6] shadow-[inset_2px_2px_4px_rgba(255,255,255,0.5),inset_-2px_-2px_4px_rgba(0,0,0,0.1)]" />
              ))}
            </div>
          </header>

          {viewMode === "list" ? (
            <div className="flex flex-col md:flex-row gap-16 items-center justify-center">
              {chapters.map((chapter, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedChapter(chapter)}
                  className="flex flex-col items-center gap-6 group cursor-pointer focus:outline-none"
                  aria-label={`Open ${chapter.university} chapter details`}
                >
                  {/* Logo card — shows university logo only */}
                  <div className={`w-40 h-40 md:w-52 md:h-52 rounded-[2.5rem] flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:-translate-y-3 group-hover:shadow-[12px_20px_32px_rgba(0,0,0,0.12),-4px_-4px_16px_rgba(255,255,255,0.8)] ${chapter.active
                    ? 'bg-white shadow-[8px_8px_16px_#d9d6db,-8px_-8px_16px_#ffffff,inset_4px_4px_8px_rgba(255,255,255,0.9),inset_-4px_-4px_8px_rgba(0,0,0,0.05)]'
                    : 'bg-[#F1EEF4] text-[#A6979F] shadow-[8px_8px_16px_#d9d6db,-8px_-8px_16px_#ffffff,inset_4px_4px_8px_rgba(255,255,255,0.8),inset_-4px_-4px_8px_rgba(0,0,0,0.05)]'
                    }`}>
                    {chapter.logo ? (
                      <img src={chapter.logo} alt={`${chapter.university} logo`} className="w-full h-full object-contain p-6" />
                    ) : (
                      <span className="font-extrabold text-5xl text-[#D45995]">
                        {chapter.city.substring(0, 2).toUpperCase()}
                      </span>
                    )}
                  </div>
                  {/* University name badge */}
                  <div className="text-center bg-[#F1EEF4] px-6 py-3 rounded-2xl shadow-[4px_4px_8px_#d9d6db,-4px_-4px_8px_#ffffff,inset_2px_2px_4px_rgba(255,255,255,0.7),inset_-2px_-2px_4px_rgba(0,0,0,0.05)] transition-all duration-300 group-hover:shadow-[inset_4px_4px_8px_#d9d6db,inset_-4px_-4px_8px_#ffffff]">
                    <span className="font-bold text-base text-[#4A4045] block">{chapter.university}</span>
                    <span className="font-medium text-sm text-[#A6979F]">{chapter.city}</span>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <StudentChapterMap chapters={chapters} onChapterClick={setSelectedChapter} />
          )}
        </section>

        {/* Section 3: Partners — Infinite Marquee Strip */}
        <section id="partners" className="scroll-mt-28 rounded-[3rem] p-8 md:p-16 bg-[#F1EEF4] shadow-[12px_12px_24px_#d9d6db,-12px_-12px_24px_#ffffff,inset_6px_6px_12px_rgba(255,255,255,0.7),inset_-6px_-6px_12px_rgba(0,0,0,0.05)] overflow-hidden">
          <h2 className="font-extrabold text-4xl md:text-6xl text-[#4A4045] mb-12 text-center">
            Partners
          </h2>
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
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 mx-4 flex flex-col items-center justify-center w-56 h-40 p-8 rounded-[2rem] bg-[#F1EEF4] shadow-[6px_6px_12px_#d9d6db,-6px_-6px_12px_#ffffff,inset_3px_3px_6px_rgba(255,255,255,0.8),inset_-3px_-3px_6px_rgba(0,0,0,0.05)] hover:shadow-[inset_6px_6px_12px_#d9d6db,inset_-6px_-6px_12px_#ffffff] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  {partner.logo ? (
                    <img src={partner.logo} alt={partner.name} className="max-h-20 w-auto object-contain" />
                  ) : (
                    <div className="w-16 h-16 rounded-2xl bg-[#e8e4e9] flex items-center justify-center">
                      <span className="font-bold text-sm text-[#A6979F] text-center">{partner.name}</span>
                    </div>
                  )}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Contact — full width, one row */}
        <section id="contact" className="scroll-mt-28 rounded-[3rem] p-8 md:p-12 bg-[#F1EEF4] shadow-[12px_12px_24px_#d9d6db,-12px_-12px_24px_#ffffff,inset_6px_6px_12px_rgba(255,255,255,0.7),inset_-6px_-6px_12px_rgba(0,0,0,0.05)]">
          <h2 className="font-extrabold text-3xl md:text-4xl text-[#4A4045] mb-8">Want to become a Partner? or a Student Chapter?</h2>
          <div className="flex flex-col md:flex-row gap-10">

            {/* Left: Socials */}
            <div className="md:w-1/3 flex flex-col gap-4">
              <p className="font-semibold text-xs uppercase tracking-widest text-[#A6979F] mb-2">Find us</p>

              <a
                href="https://www.linkedin.com/company/womenshealthunion/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#F1EEF4] shadow-[6px_6px_12px_#d9d6db,-6px_-6px_12px_#ffffff,inset_3px_3px_6px_rgba(255,255,255,0.8),inset_-3px_-3px_6px_rgba(0,0,0,0.05)] hover:shadow-[inset_6px_6px_12px_#d9d6db,inset_-6px_-6px_12px_#ffffff] transition-shadow text-[#4A4045] group"
              >
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#E786B6] to-[#D45995] text-white flex items-center justify-center flex-shrink-0 shadow-[inset_2px_2px_4px_rgba(255,255,255,0.4),inset_-2px_-2px_4px_rgba(0,0,0,0.1)]">
                  <span className="font-black text-sm tracking-tight">in</span>
                </div>
                <span className="font-bold text-sm">Women's Health Union</span>
              </a>

              <a
                href="mailto:hello@womenshealthunion.org"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#F1EEF4] shadow-[6px_6px_12px_#d9d6db,-6px_-6px_12px_#ffffff,inset_3px_3px_6px_rgba(255,255,255,0.8),inset_-3px_-3px_6px_rgba(0,0,0,0.05)] hover:shadow-[inset_6px_6px_12px_#d9d6db,inset_-6px_-6px_12px_#ffffff] transition-shadow text-[#4A4045] group"
              >
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#E786B6] to-[#D45995] text-white flex items-center justify-center flex-shrink-0 shadow-[inset_2px_2px_4px_rgba(255,255,255,0.4),inset_-2px_-2px_4px_rgba(0,0,0,0.1)]">
                  <Mail size={20} />
                </div>
                <span className="font-bold text-sm">hello@womenshealthunion.org</span>
              </a>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px bg-[#d9d6db] self-stretch mx-2 rounded-full" />

            {/* Right: Contact Form */}
            <div className="flex-1">
              <p className="font-semibold text-xs uppercase tracking-widest text-[#A6979F] mb-4">Get in touch</p>
              <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="text"
                    placeholder="Your name"
                    className="flex-1 px-5 py-3 rounded-2xl bg-[#F1EEF4] shadow-[inset_4px_4px_8px_#d9d6db,inset_-4px_-4px_8px_#ffffff] outline-none font-semibold text-sm text-[#4A4045] placeholder-[#B9ADB5] focus:shadow-[inset_4px_4px_8px_#d0cdd1,inset_-4px_-4px_8px_#ffffff,0_0_0_2px_#D45995] transition-shadow"
                  />
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-5 py-3 rounded-2xl bg-[#F1EEF4] shadow-[inset_4px_4px_8px_#d9d6db,inset_-4px_-4px_8px_#ffffff] outline-none font-semibold text-sm text-[#4A4045] placeholder-[#B9ADB5] focus:shadow-[inset_4px_4px_8px_#d0cdd1,inset_-4px_-4px_8px_#ffffff,0_0_0_2px_#D45995] transition-shadow"
                  />
                </div>

                <select
                  defaultValue=""
                  className="px-5 py-3 rounded-2xl bg-[#F1EEF4] shadow-[inset_4px_4px_8px_#d9d6db,inset_-4px_-4px_8px_#ffffff] outline-none font-semibold text-sm text-[#4A4045] focus:shadow-[inset_4px_4px_8px_#d0cdd1,inset_-4px_-4px_8px_#ffffff,0_0_0_2px_#D45995] transition-shadow cursor-pointer appearance-none"
                >
                  <option value="" disabled className="text-[#B9ADB5]">What's up? 👋</option>
                  <option value="learn">I want to learn more</option>
                  <option value="partner">Partnership</option>
                  <option value="chapter">I'd like to open a chapter</option>
                  <option value="other">Something else</option>
                </select>

                <textarea
                  rows={4}
                  placeholder="Your message..."
                  className="w-full px-5 py-3 rounded-2xl bg-[#F1EEF4] shadow-[inset_4px_4px_8px_#d9d6db,inset_-4px_-4px_8px_#ffffff] outline-none font-semibold text-sm text-[#4A4045] placeholder-[#B9ADB5] focus:shadow-[inset_4px_4px_8px_#d0cdd1,inset_-4px_-4px_8px_#ffffff,0_0_0_2px_#D45995] transition-shadow resize-y"
                />

                <button
                  type="submit"
                  className="self-start px-8 py-3 rounded-2xl bg-[#D45995] text-white font-bold text-sm shadow-[6px_6px_14px_rgba(0,0,0,0.12),-4px_-4px_10px_rgba(255,255,255,0.7),inset_2px_2px_4px_rgba(255,255,255,0.3),inset_-2px_-2px_4px_rgba(0,0,0,0.1)] hover:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.15),inset_-4px_-4px_8px_rgba(255,255,255,0.2)] hover:scale-[0.98] transition-all"
                >
                  Send message →
                </button>
              </form>
            </div>

          </div>
        </section>

      </div>

      {/* Chapter Modal — wider, animated, no logo */}
      {selectedChapter && (
        <div
          className="fixed inset-0 z-[100] bg-white/40 backdrop-blur-md flex items-center justify-center p-6"
          onClick={() => setSelectedChapter(null)}
        >
          <div
            className="modal-pop w-full max-w-4xl min-h-[520px] bg-[#F1EEF4] rounded-[3rem] p-12 shadow-[20px_20px_40px_rgba(0,0,0,0.2),-20px_-20px_40px_rgba(255,255,255,0.8),inset_6px_6px_12px_rgba(255,255,255,0.9),inset_-6px_-6px_12px_rgba(0,0,0,0.05)] relative flex"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="absolute top-8 right-8 w-12 h-12 rounded-full bg-[#E786B6] text-white flex items-center justify-center shadow-[inset_2px_2px_5px_rgba(255,255,255,0.4),inset_-2px_-2px_5px_rgba(0,0,0,0.1)] hover:scale-110 transition-transform"
              onClick={() => setSelectedChapter(null)}
              aria-label="Close"
            >
              <X size={24} />
            </button>

            {/* Left Column: Vertical Title */}
            <div className="w-24 md:w-36 flex items-center justify-center relative border-r-2 border-white shadow-[1px_0_0_0_#d9d6db] mr-10">
              <h2 className="absolute -rotate-90 origin-center text-[#D45995] font-extrabold text-5xl md:text-6xl whitespace-nowrap tracking-tighter w-[460px] text-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                WHU × {selectedChapter.city}
              </h2>
            </div>

            {/* Right Column */}
            <div className="flex-1 flex flex-col items-start gap-8 pt-4">

              {/* University name — no logo */}
              <div>
                <p className="text-[#A6979F] font-semibold text-sm uppercase tracking-widest mb-1">Student Chapter</p>
                <h3 className="font-extrabold text-3xl md:text-4xl text-[#4A4045]">{selectedChapter.university}</h3>
              </div>

              {/* Committee placeholder */}
              <div className="bg-[#F1EEF4] w-full p-6 rounded-2xl shadow-[4px_4px_8px_#d9d6db,-4px_-4px_8px_#ffffff,inset_2px_2px_4px_rgba(255,255,255,0.7),inset_-2px_-2px_4px_rgba(0,0,0,0.05)]">
                <h4 className="font-extrabold text-xl text-[#D45995] mb-4">Committee</h4>
                <div className="space-y-3">
                  <div className="w-full h-4 bg-[#e8e4e9] rounded-full shadow-[inset_2px_2px_4px_rgba(0,0,0,0.05)]"></div>
                  <div className="w-5/6 h-4 bg-[#e8e4e9] rounded-full shadow-[inset_2px_2px_4px_rgba(0,0,0,0.05)]"></div>
                  <div className="w-4/6 h-4 bg-[#e8e4e9] rounded-full shadow-[inset_2px_2px_4px_rgba(0,0,0,0.05)]"></div>
                </div>
              </div>

              {/* Social icons */}
              <div className="flex gap-6">
                <a href="#" className="w-20 h-20 rounded-[1.5rem] bg-[#F1EEF4] shadow-[8px_8px_16px_#d9d6db,-8px_-8px_16px_#ffffff] flex items-center justify-center text-[#D45995] hover:shadow-[inset_4px_4px_8px_#d9d6db,inset_-4px_-4px_8px_#ffffff] transition-shadow">
                  <Mail size={36} />
                </a>
                <a href="#" className="w-20 h-20 rounded-[1.5rem] bg-[#F1EEF4] shadow-[8px_8px_16px_#d9d6db,-8px_-8px_16px_#ffffff] flex items-center justify-center text-[#D45995] hover:shadow-[inset_4px_4px_8px_#d9d6db,inset_-4px_-4px_8px_#ffffff] transition-shadow">
                  <Camera size={36} />
                </a>
              </div>

            </div>
          </div>
        </div>
      )}

    </main>
  );
}
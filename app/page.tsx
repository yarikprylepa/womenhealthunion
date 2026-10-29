"use client";

import { useState, useCallback, useEffect } from "react";
import dynamic from "next/dynamic";
import { Mail, AtSign, Camera, X } from "lucide-react";
import partnersBase from "./data/partners";

const StudentChapterMap = dynamic(() => import("./components/StudentChapterMap"), { ssr: false });

const chapters = [
  {
    university: "Queen Mary University of London", city: "London", active: true, logo: "/logos/qmullogo.png", lat: 51.5241, lng: -0.0404,
    committee: [
      { role: "President", name: "Hanling Zhang", course: "BSc Biomedical Sciences", email: "hanling.zhang@se26.qmul.ac.uk" },
      { role: "Vice-President", name: "Priya Sharma", course: "BSc Global Public Health", email: "psh891@qmul.ac.uk" },
      { role: "Treasury", name: "Leila Nkosi", course: "BSc Economics", email: "lnk102@qmul.ac.uk" },
      { role: "Social Outreach", name: "Sofia Marchetti", course: "BSc Psychology", email: "sma567@qmul.ac.uk" },
    ],
  },
  {
    university: "University of Sheffield", city: "Sheffield", active: true, logo: "/logos/sheflogo.png", lat: 53.3811, lng: -1.4701,
    committee: [
      { role: "President", name: "Janvi Ranish", course: "BSc Biomedical Sciences", email: "jranish1@sheffield.ac.uk" },
      { role: "Vice-President", name: "Aisha Yusuf", course: "BSc Nursing", email: "ay2841@sheffield.ac.uk" },
      { role: "Treasury", name: "Caitlin Hughes", course: "BSc Human Biology", email: "ch4017@sheffield.ac.uk" },
      { role: "Social Outreach", name: "Zara Patel", course: "BSc Health Psychology", email: "zp3920@sheffield.ac.uk" },
    ],
  },
];


export default function Home() {
  const [selectedChapter, setSelectedChapter] = useState<any>(null);
  const [viewMode, setViewMode] = useState<"list" | "map">("list");
  const [showAllPartners, setShowAllPartners] = useState(false);
  const [partnerPage, setPartnerPage] = useState(1);

  const partnersPerPage = 4;
  const totalPartnerPages = Math.ceil(partnersBase.length / partnersPerPage);

  const visiblePartners = partnersBase.slice(
    (partnerPage - 1) * partnersPerPage,
    partnerPage * partnersPerPage
  );

  const changePartnerPage = (page: number) => {
    setPartnerPage(page);

    document.getElementById("all-partners")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

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

      {/* Shared gradient across Hero + About Us */}
      <div className="w-full bg-gradient-to-b from-[#D45995] from-20% to-[#F1EEF4] to-65%">

        {/* Section 1: Hero */}
        <section className="w-full min-h-[calc(100svh-18rem)] pt-32 pb-16 md:pt-48 md:pb-20 relative">          <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-12">
          {/* Left side: Logo & Motto */}
          <div className="md:w-1/2 flex flex-col items-center text-center md:translate-y-6 md:-translate-x-4">            <h1 className="font-black text-[8rem] md:text-[clamp(12rem,18vw,14rem)] leading-[0.85] tracking-tighter text-white drop-shadow-[0_6px_10px_rgba(90,20,55,0.25)] select-none">
            WHU
          </h1>
            <div className="text-white font-extrabold text-xl md:text-2xl px-6 py-3 mt-6">
              Women's Health Union
            </div>
          </div>
          {/* Right side: 5% Stat Card with Yellow Highlight */}
          <div className="md:w-1/2 flex justify-center md:justify-end w-full">
            <div className="w-full max-w-md bg-white text-[#1E1B1D] rounded-3xl p-8 md:p-10 shadow-xl border border-black/5 transform md:rotate-1 hover:rotate-0 transition-transform duration-300">
              <h3 className="font-bold text-2xl md:text-3xl leading-snug">
                <span className="font-black text-4xl md:text-6xl block mb-4 text-[#D45995] tracking-tight">
                  Fewer than
                </span>
                <span className="font-black text-4xl md:text-6xl block mb-4 text-[#FACC15] tracking-tight">
                  5%
                </span>
                <span className="text-[#4A4045] font-medium leading-relaxed block text-lg md:text-xl">
                  of UK universities have women’s health societies. Let’s change this!
                </span>
              </h3>
            </div>
          </div>
        </div>
        </section>

        {/* About Us — directly on the gradient */}
        <section
          id="about"
          className="scroll-mt-28 w-[90%] max-w-6xl mx-auto px-2 md:px-4 py-8 md:py-12"
        >
          <h2 className="text-white font-extrabold text-2xl md:text-4xl text-[#1E1B1D] tracking-tight mb-5">
            About Us
          </h2>

          <p className="text-white text-base md:text-xl leading-relaxed max-w-4xl">
            The Women’s Health Union (WHU) is a national umbrella organisation helping students set up women’s health societies across the UK and connecting them with industry leaders in the field.
          </p>

          <p className="text-white text-base md:text-xl leading-relaxed max-w-4xl">
            By building a student community around women’s health, we give students role models, visibility of careers in the field and a clear pathway into innovating in one of healthcare’s most underfunded areas.
          </p>
        </section>

        {/* Give the gradient room to finish below the card */}
        <div className="h-16 md:h-24" aria-hidden="true" />


        {/* Your existing remaining sections */}
        <div className="w-[90%] max-w-6xl mx-auto space-y-16 [&>section]:scroll-mt-28">

          {/* Section 2: Student Chapters */}
          <section
            id="chapters"
            className="scroll-mt-28 px-2 md:px-4 py-10 md:py-14"
          >
            <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6 pb-6 ">
              <div>
                <h2 className="font-extrabold text-2xl md:text-4xl text-[#1E1B1D] tracking-tight">
                  Our Student Chapters
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
        </div> {/* End shared gradient wrapper */}
        {/* Section 3: Partners — Infinite Marquee Strip */}
        {/* Section 3: Partners */}
        <section
          id="partners"
          className="scroll-mt-28 px-2 md:px-4 py-10 md:py-14 overflow-hidden"
        >
          <div className="text-center mb-10">
            <h2 className="font-extrabold text-2xl md:text-4xl text-[#1E1B1D] tracking-tight">
              We are proud to partner with
            </h2>
          </div>

          {/* Marquee wrapper */}
          <div
            className="relative"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
            }}
          >
            <div className="marquee-track py-6">
              {marqueeItems.map((partner, i) => {
                const primaryLink = partner.links[0]?.url ?? "#";

                return (
                  <a
                    key={`${partner.name}-${i}`}
                    href={primaryLink}
                    target={primaryLink !== "#" ? "_blank" : undefined}
                    rel={primaryLink !== "#" ? "noopener noreferrer" : undefined}
                    className="relative flex-shrink-0 mx-4 w-72 h-64 md:w-80 md:h-72 rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer group overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D45995]"
                  >
                    {/* Full-card image */}
                    {partner.logo ? (
                      <img
                        src={partner.logo}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-focus-visible:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-[#D45995] to-[#8C3E73]" />
                    )}

                    {/* Gradient keeps the partner name readable */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                    {/* About text revealed on hover or keyboard focus */}
                    <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300" />

                    <div className="absolute inset-x-0 top-0 bottom-20 flex items-center justify-center px-6 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300">
                      <p className="text-white text-sm text-center leading-relaxed line-clamp-6">
                        {partner.about}
                      </p>
                    </div>

                    {/* Name stays visible at the bottom */}
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <p className="text-white font-bold text-lg md:text-xl leading-snug drop-shadow-md">
                        {partner.name}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Show / hide directory */}
          <div className="flex justify-center mt-8">
            <button
              type="button"
              onClick={() => {
                if (!showAllPartners) {
                  setPartnerPage(1);
                }

                setShowAllPartners((previous) => !previous);
              }}
              aria-expanded={showAllPartners}
              aria-controls="all-partners"
              className="inline-flex items-center gap-3 border-b-2 border-[#D45995] px-1 py-2 text-sm font-bold text-[#1E1B1D] hover:text-[#D45995] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D45995]"
            >
              {showAllPartners ? "Hide partners" : "Show all partners"}

              <span
                aria-hidden="true"
                className={`inline-block transition-transform duration-200 ${showAllPartners ? "rotate-180" : ""
                  }`}
              >
                ↓
              </span>
            </button>
          </div>

          {/* Expanded directory — maximum four partners per page */}
          <div
            id="all-partners"
            hidden={!showAllPartners}
            className="scroll-mt-28"
          >
            <div className="mt-12 divide-y divide-[#4A4045]/15">
              {visiblePartners.map((partner, index) => (
                <article
                  key={`${partner.name}-${partnerPage}-${index}`}
                  className="grid grid-cols-1 md:grid-cols-[15rem_minmax(0,1fr)] gap-6 md:gap-12 py-10"
                >
                  {/* Left: logo, name and links */}
                  <div className="flex flex-col items-start">
                    {partner.logo && (
                      <div className="w-full max-w-[15rem] h-36 flex items-center justify-start mb-5">
                        <img
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                    )}

                    <h3 className="font-bold text-lg text-[#1E1B1D]">
                      {partner.name}
                    </h3>

                    <div className="flex flex-col items-start gap-2 mt-4 w-full min-w-0">
                      {partner.links
                        .filter((link) => link.url && link.url !== "#")
                        .map((link, linkIndex) => (
                          <a
                            key={`${link.url}-${linkIndex}`}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="max-w-full text-sm font-semibold text-[#A82F6B] underline underline-offset-4 decoration-[#D45995]/40 hover:decoration-[#D45995] transition-colors break-all"
                          >
                            {link.url
                              .replace(/^https?:\/\/(www\.)?/, "")
                              .replace(/\/$/, "")}
                            <span aria-hidden="true"> ↗</span>
                          </a>
                        ))}
                    </div>
                  </div>

                  {/* Right: description */}
                  <div className="md:pt-2 min-w-0">
                    <p className="text-base md:text-lg leading-relaxed text-[#4A4045] whitespace-pre-line">
                      {partner.about}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            {totalPartnerPages > 1 && (
              <nav
                aria-label="Partner directory pages"
                className="flex flex-wrap items-center justify-center gap-3 mt-8"
              >
                <button
                  type="button"
                  onClick={() => changePartnerPage(partnerPage - 1)}
                  disabled={partnerPage === 1}
                  className="px-4 py-2 text-sm font-semibold text-[#4A4045] hover:text-[#A82F6B] disabled:opacity-35 disabled:cursor-not-allowed cursor-pointer"
                >
                  ← Previous
                </button>

                {Array.from({ length: totalPartnerPages }, (_, index) => {
                  const page = index + 1;
                  const isActive = partnerPage === page;

                  return (
                    <button
                      key={page}
                      type="button"
                      onClick={() => changePartnerPage(page)}
                      aria-label={`Go to partner page ${page}`}
                      aria-current={isActive ? "page" : undefined}
                      className={`w-10 h-10 rounded-lg text-sm font-bold transition-colors cursor-pointer ${isActive
                        ? "bg-[#D45995] text-white"
                        : "text-[#4A4045] hover:bg-[#D45995]/10"
                        }`}
                    >
                      {page}
                    </button>
                  );
                })}

                <button
                  type="button"
                  onClick={() => changePartnerPage(partnerPage + 1)}
                  disabled={partnerPage === totalPartnerPages}
                  className="px-4 py-2 text-sm font-semibold text-[#4A4045] hover:text-[#A82F6B] disabled:opacity-35 disabled:cursor-not-allowed cursor-pointer"
                >
                  Next →
                </button>
              </nav>
            )}

            {partnersBase.length > 0 && (
              <p
                role="status"
                className="text-center text-sm text-[#7C6E76] mt-5"
              >
                Showing {(partnerPage - 1) * partnersPerPage + 1}–
                {Math.min(partnerPage * partnersPerPage, partnersBase.length)} of{" "}
                {partnersBase.length} partners
              </p>
            )}
          </div>
        </section>
        {/* Section 4: Contact — full width, one row */}
        <section
          id="contact"
          className="scroll-mt-28 px-2 md:px-4 py-10 md:py-14 border-t border-[#4A4045]/15"
        >
          <div className="mb-10 pb-6 border-b border-gray-100">
            <h2 className="font-extrabold text-2xl md:text-4xl text-[#1E1B1D] tracking-tight">
              Want to become a Partner? or a Student Chapter?
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-10">

            {/* Left: Socials */}
            <div className="md:w-1/3 flex flex-col gap-4">

              <a
                href="https://www.linkedin.com/company/women’s-health-union/"
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
                      placeholder="your@email.com"
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
      {
        selectedChapter && (
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
        )
      }

    </main >
  );
}
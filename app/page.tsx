"use client";

import Link from "next/link";
import {
  ArrowRight,
  AtSign,
  HeartPulse,
  Mail,
  MapPin,
  Menu,
  Users,
} from "lucide-react";

const chapters = [
  {
    university: "University of Reading",
    city: "Reading",
    status: "Active",
    initials: "UR",
  },
  {
    university: "University of Oxford",
    city: "Oxford",
    status: "Active",
    initials: "UO",
  },
  {
    university: "University of Bristol",
    city: "Bristol",
    status: "Launching soon",
    initials: "UB",
  },
];

const partners = [
  "Student Unions",
  "Health Charities",
  "Education Partners",
  "Community Organisations",
];

export default function Home() {
  return (
    <main className="min-h-screen scroll-smooth bg-[#fff8fb] text-[#291522]">
      <header className="sticky top-0 z-50 border-b border-[#ecdce5] bg-[#fff8fb]/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#home" className="flex items-center gap-2 font-bold tracking-tight">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#c21875] text-white">
              W
            </span>
            WHU
          </a>

          <div className="hidden items-center gap-6 text-sm font-medium md:flex">
            <a href="#chapters" className="transition hover:text-[#c21875]">
              Chapters
            </a>
            <a href="#about" className="transition hover:text-[#c21875]">
              About
            </a>
            <a href="#partners" className="transition hover:text-[#c21875]">
              Partners
            </a>
            <a href="#contact" className="transition hover:text-[#c21875]">
              Contact
            </a>
          </div>

          <a
            href="#start-a-chapter"
            className="hidden rounded-full bg-[#c21875] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#8e1556] sm:inline-flex"
          >
            Start a chapter
          </a>

          <button
            type="button"
            aria-label="Open navigation menu"
            className="rounded-full p-2 text-[#291522] md:hidden"
          >
            <Menu size={22} />
          </button>
        </nav>
      </header>

      <section
        id="home"
        className="scroll-mt-24 mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28"
      >
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#c21875]">
            A national student network
          </p>

          <h1 className="mt-5 max-w-xl text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            Better women’s health starts on campus.
          </h1>

          <p className="mt-7 max-w-lg text-lg leading-8 text-[#75616d]">
            Women’s Health Union connects students, university societies and
            partners to build more informed, supportive and inclusive campuses.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#chapters"
              className="inline-flex items-center gap-2 rounded-full bg-[#c21875] px-6 py-3 font-semibold text-white transition hover:bg-[#8e1556]"
            >
              Find your chapter
              <ArrowRight size={18} />
            </a>

            <a
              href="#start-a-chapter"
              className="rounded-full border border-[#c21875] px-6 py-3 font-semibold text-[#8e1556] transition hover:bg-[#f8e7f0]"
            >
              Start a chapter
            </a>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] bg-[#f8e7f0] p-8 md:p-12">
          <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-[#e95a9e]/30" />
          <div className="absolute -bottom-16 -left-12 h-52 w-52 rounded-full bg-[#c21875]/20" />

          <div className="relative rounded-3xl bg-white p-7 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#c21875]">
              Student-led. Nationwide.
            </p>

            <div className="mt-7 space-y-5">
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f8e7f0] text-[#c21875]">
                  <MapPin size={21} />
                </span>
                <div>
                  <p className="font-semibold">Find a local community</p>
                  <p className="text-sm text-[#75616d]">
                    Discover chapters at universities near you.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f8e7f0] text-[#c21875]">
                  <Users size={21} />
                </span>
                <div>
                  <p className="font-semibold">Meet people who care</p>
                  <p className="text-sm text-[#75616d]">
                    Join student-led conversations, events and campaigns.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f8e7f0] text-[#c21875]">
                  <HeartPulse size={21} />
                </span>
                <div>
                  <p className="font-semibold">Create meaningful change</p>
                  <p className="text-sm text-[#75616d]">
                    Help improve awareness and support on campus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-24 border-y border-[#ecdce5] bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#c21875]">
            How it works
          </p>

          <h2 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">
            A simple route from curiosity to community.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <article className="rounded-3xl border border-[#f0dce6] bg-[#fff8fb] p-7">
              <p className="text-5xl font-bold text-[#c21875]">01</p>
              <h3 className="mt-7 text-xl font-bold">Find your university</h3>
              <p className="mt-3 leading-7 text-[#75616d]">
                Browse chapters across the country and see whether there is a
                community at your university.
              </p>
            </article>

            <article className="rounded-3xl border border-[#f0dce6] bg-[#fff8fb] p-7">
              <p className="text-5xl font-bold text-[#c21875]">02</p>
              <h3 className="mt-7 text-xl font-bold">Meet your community</h3>
              <p className="mt-3 leading-7 text-[#75616d]">
                Discover events, conversations, campaigns and people shaping
                better health experiences on campus.
              </p>
            </article>

            <article className="rounded-3xl border border-[#f0dce6] bg-[#fff8fb] p-7">
              <p className="text-5xl font-bold text-[#c21875]">03</p>
              <h3 className="mt-7 text-xl font-bold">Help create change</h3>
              <p className="mt-3 leading-7 text-[#75616d]">
                Join an existing chapter, volunteer, partner with us or bring
                Women’s Health Union to your university.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="chapters" className="scroll-mt-24 mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#c21875]">
              Student chapters
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Find your local community.
            </h2>
          </div>

          <Link
            href="/universities"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#8e1556] hover:text-[#c21875]"
          >
            View all universities
            <ArrowRight size={17} />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {chapters.map((chapter) => (
            <article
              key={chapter.university}
              className="rounded-3xl border border-[#f0dce6] bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f8e7f0] font-bold text-[#c21875]">
                  {chapter.initials}
                </span>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    chapter.status === "Active"
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-amber-50 text-amber-700"
                  }`}
                >
                  {chapter.status}
                </span>
              </div>

              <h3 className="mt-7 text-xl font-bold">{chapter.university}</h3>

              <p className="mt-2 flex items-center gap-2 text-sm text-[#75616d]">
                <MapPin size={16} className="text-[#c21875]" />
                {chapter.city}
              </p>

              <a
                href="#contact"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#8e1556] hover:text-[#c21875]"
              >
                Get in touch
                <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="partners" className="scroll-mt-24 bg-[#291522] text-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f6a5c9]">
            Partners
          </p>

          <div className="mt-4 grid gap-10 md:grid-cols-2 md:items-end">
            <h2 className="max-w-xl text-4xl font-bold tracking-tight md:text-5xl">
              Change happens when we work together.
            </h2>

            <p className="max-w-lg leading-7 text-[#ead9e1]">
              We want to collaborate with student unions, charities, educators,
              healthcare organisations and community groups committed to better
              women’s health.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {partners.map((partner) => (
              <div
                key={partner}
                className="flex min-h-28 items-center justify-center rounded-3xl border border-white/15 bg-white/5 px-6 text-center font-semibold text-[#f9deec]"
              >
                {partner}
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#c21875] px-6 py-3 font-semibold text-white transition hover:bg-[#e3348a]"
          >
            Become a partner
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <section
        id="start-a-chapter"
        className="scroll-mt-24 border-b border-[#ecdce5] bg-[#f8e7f0]"
      >
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#c21875]">
              Bring WHU to your campus
            </p>
            <h2 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">
              No chapter at your university? Start one.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#75616d]">
              We are building a network of student organisers. Register your
              interest and we will help you take the first step.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-[#c21875] px-6 py-3 font-semibold text-white transition hover:bg-[#8e1556]"
          >
            Register interest
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#c21875]">
              Contact
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Let’s connect.
            </h2>

            <p className="mt-5 max-w-md text-lg leading-8 text-[#75616d]">
              Whether you want to join, start a chapter or explore a
              partnership, we would love to hear from you.
            </p>

            <div className="mt-8 space-y-4 text-sm text-[#75616d]">
              <p className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f8e7f0] text-[#c21875]">
                  <Mail size={17} />
                </span>
                hello@womenshealthunion.org
              </p>

              <p className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f8e7f0] text-[#c21875]">
                  <AtSign size={17} />
                </span>
                @womenshealthunion
              </p>
            </div>
          </div>

          <form
            onSubmit={(event) => event.preventDefault()}
            className="rounded-3xl border border-[#f0dce6] bg-[#fff8fb] p-6 md:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold">
                Name
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-2xl border border-[#e5ccd9] bg-white px-4 py-3 font-normal outline-none transition focus:border-[#c21875] focus:ring-2 focus:ring-[#c21875]/20"
                />
              </label>

              <label className="text-sm font-semibold">
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-2xl border border-[#e5ccd9] bg-white px-4 py-3 font-normal outline-none transition focus:border-[#c21875] focus:ring-2 focus:ring-[#c21875]/20"
                />
              </label>
            </div>

            <label className="mt-5 block text-sm font-semibold">
              I’m getting in touch about
              <select
                name="topic"
                className="mt-2 w-full rounded-2xl border border-[#e5ccd9] bg-white px-4 py-3 font-normal outline-none transition focus:border-[#c21875] focus:ring-2 focus:ring-[#c21875]/20"
              >
                <option>Joining a chapter</option>
                <option>Starting a chapter</option>
                <option>A partnership</option>
                <option>General enquiry</option>
              </select>
            </label>

            <label className="mt-5 block text-sm font-semibold">
              Message
              <textarea
                name="message"
                rows={5}
                placeholder="Tell us a little about how we can help."
                className="mt-2 w-full resize-none rounded-2xl border border-[#e5ccd9] bg-white px-4 py-3 font-normal outline-none transition focus:border-[#c21875] focus:ring-2 focus:ring-[#c21875]/20"
              />
            </label>

            <button
              type="submit"
              className="mt-6 inline-flex rounded-full bg-[#c21875] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#8e1556]"
            >
              Send enquiry
            </button>

            <p className="mt-4 text-xs leading-5 text-[#75616d]">
              Please do not include medical information, symptoms, diagnoses or
              urgent health concerns in this form.
            </p>
          </form>
        </div>
      </section>

      <footer className="bg-[#fff8fb]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-[#75616d] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Women’s Health Union</p>

          <div className="flex gap-5">
            <a href="#home" className="hover:text-[#c21875]">
              Back to top
            </a>
            <a href="#contact" className="hover:text-[#c21875]">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}